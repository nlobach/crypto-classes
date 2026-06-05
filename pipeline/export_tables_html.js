#!/usr/bin/env node
// Export the four autoreferat tables to a Word-compatible HTML file.
// Word opens .html directly and preserves table formatting.
// Usage: node pipeline/export_tables_html.js
// Output: data/derived/autoreferat-tables.html

const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');

const CLASSES = ['Res Liquidae','Res Filiformes','Res Rotundae','Res Longae Penetrantes','Res Acutae','Res Parvae','Res Planae','Res Continens'];
const ABBR = {'Res Liquidae':'LIQ','Res Filiformes':'FIL','Res Rotundae':'ROT','Res Longae Penetrantes':'PEN','Res Acutae':'ACU','Res Parvae':'PAR','Res Planae':'PLA','Res Continens':'CON'};
const EMONYMS = ['miedo','tristeza','amor','alegría','ira'];
// Bleached light-verbs (grasp/handle image dead; discounted in the live-imagery
// layer by the same lost-inner-form principle as nivel de / círculo de — see
// autoreferat-prose-ru.md §1.3). All five are Res Parvae classifiers.
const BLEACHED = new Set(['coger','agarrar','traer','dar','entregar']);
const liveN = cc => cc.n - Object.entries(cc.byLemma).reduce((s,[l,f])=>s+(BLEACHED.has(l)?f:0),0);
const TOTAL_VARIANTS = 21;
const CRIT_MASS = 5;
const IDIOM_SHARE = 0.90;
const CORE_CAC = 0.15;
const READY_VARIANTS = 6;

// ---- Load curated gold sets (frequency-weighted) ----
// Reads the per-emonym gold-*.tsv (exclusions, dedupe, reassignments, and the
// frozen-collocation drops nivel-de / círculo-de already applied by
// build_gold.js). Every quantitative cell is SUM(frequency) — the explicit
// corpus counts parsed from the legacy xlsx, not the row count. `cc.n` is thus
// a token total; `cc.byLemma` is frequency per classifier (zero-freq negative
// attestations skipped, as in aggregate_profile.js).
const cell = {};
for (const e of EMONYMS){ cell[e]={}; for(const c of CLASSES) cell[e][c]={n:0,byCT:{},byLemma:{},byVar:{}}; }
const emTotal = {}; for (const e of EMONYMS) emTotal[e]=0;

for (const e of EMONYMS){
  const gp = path.join(REPO,'data','derived',`gold-${e}.tsv`);
  const glines = fs.readFileSync(gp,'utf8').split(/\r?\n/).filter(Boolean);
  const gh = glines.shift().split('\t');
  const gCl=gh.indexOf('cryptoclass'), gCt=gh.indexOf('construction_type'), gLm=gh.indexOf('classifier_lemma'), gCo=gh.indexOf('country'), gFr=gh.indexOf('frequency');
  for (const line of glines){
    const cols = line.split('\t');
    const c = cols[gCl];
    if (!cell[e] || !cell[e][c]) continue;
    const lemma = (cols[gLm]||'').trim();
    const co = (cols[gCo]||'').trim().toUpperCase();
    const f = parseInt(cols[gFr],10); const freq = Number.isFinite(f) ? f : 1;
    const cc = cell[e][c];
    cc.n += freq; emTotal[e] += freq;
    cc.byCT[cols[gCt]]=(cc.byCT[cols[gCt]]||0)+freq;
    if (lemma && freq>0) cc.byLemma[lemma]=(cc.byLemma[lemma]||0)+freq;
    if (co) cc.byVar[co]=(cc.byVar[co]||0)+freq;
  }
}

function verdict(cc){
  const n = cc.n;
  if (n < 2) return '.';
  const lemmas = Object.entries(cc.byLemma).sort((a,b)=>b[1]-a[1]);
  if (n < CRIT_MASS) return '~';
  if (lemmas.length <= 1 || (lemmas.length && lemmas[0][1]/n >= IDIOM_SHARE)) return '~';
  return '+';
}

// Live-imagery view of a cell: frequency with bleached light-verbs discounted.
const liveCell = cc => ({
  n: liveN(cc),
  byLemma: Object.fromEntries(Object.entries(cc.byLemma).filter(([l]) => !BLEACHED.has(l))),
});
const emLive = {}; for (const e of EMONYMS) emLive[e] = CLASSES.reduce((s,c)=>s+liveN(cell[e][c]), 0);

// Verdicts are assigned on the live-imagery layer (the genuine categorisation);
// the token layer is reported numerically in Table 2.
const verdicts = {};
for (const e of EMONYMS){
  verdicts[e]={};
  for (const c of CLASSES){
    const lc = liveCell(cell[e][c]);
    let v = verdict(lc);
    if (v==='+' && emLive[e] && lc.n/emLive[e]>=CORE_CAC) v='++';
    verdicts[e][c]=v;
  }
}

function varStats(cc){
  const vars = Object.entries(cc.byVar).sort((a,b)=>b[1]-a[1]);
  return { present:vars.length, crit:vars.filter(([,n])=>n>=CRIT_MASS).length, list:vars };
}

// ---- HTML helpers ----
const cellStyle = 'border:1px solid #999;padding:4px 8px;text-align:center;font-family:Arial,sans-serif;font-size:10pt;';
const hStyle    = 'border:1px solid #999;padding:4px 8px;text-align:center;font-family:Arial,sans-serif;font-size:10pt;background:#d9d9d9;font-weight:bold;';
const emStyle   = 'border:1px solid #999;padding:4px 8px;text-align:left;font-family:Arial,sans-serif;font-size:10pt;font-style:italic;';
const tableStyle= 'border-collapse:collapse;margin-bottom:18pt;';

function glyphColour(v){
  if (v==='++') return 'background:#c6efce;font-weight:bold;';  // green
  if (v==='+')  return 'background:#ebf7e0;';                   // light green
  if (v==='~')  return 'background:#fff2cc;';                   // yellow
  return 'color:#aaa;';                                         // grey
}

function glyphDisplay(v){
  if (v==='++') return '★';
  return v;
}

const parts = [];

parts.push(`<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<title>Таблицы автореферата — криптоклассная принадлежность испанских эмонимов</title>
</head><body style="font-family:Arial,sans-serif;font-size:10pt;margin:36pt;">
<p style="font-size:9pt;color:#555;">Сформировано: ${new Date().toISOString().slice(0,10)} &nbsp;|&nbsp;
Источник: data/derived/gold-*.tsv (выверенный gold-набор) &nbsp;|&nbsp;
основа подсчёта: <strong>Σ корпусной частоты</strong>, двухслойно — токенный слой / слой живого образа &nbsp;|&nbsp;
критическая масса ≥ ${CRIT_MASS}; порог идиоматичности ≥ ${IDIOM_SHARE*100}%; ядерный ПоКА ≥ ${CORE_CAC*100}%; «зелёный свет» ≥ ${READY_VARIANTS} вариантов при ≥ ${CRIT_MASS}</p>
<p style="font-size:9pt;color:#555;">Развёрнутое описание таблиц, интерпретация и примеры — в <code>data/derived/autoreferat-prose-ru.md</code>. Слой живого образа дисконтирует обеленные глаголы поддержки <em>coger/agarrar miedo</em>, <em>traer/dar/entregar alegría</em> (§ 1.3 прозы).</p>
`);

// ---- Table 1: Membership matrix ----
parts.push(`<h3 style="font-family:Arial,sans-serif;">Таблица 1. Криптоклассная принадлежность пяти испанских эмонимов (суммарно по всем вариантам)</h3>`);
parts.push(`<table style="${tableStyle}"><tr><th style="${hStyle}">эмоним</th>`);
for (const c of CLASSES) parts.push(`<th style="${hStyle}">${ABBR[c]}</th>`);
parts.push('</tr>');
for (const e of EMONYMS){
  parts.push(`<tr><td style="${emStyle}">${e}</td>`);
  for (const c of CLASSES){
    const v = verdicts[e][c];
    parts.push(`<td style="${cellStyle}${glyphColour(v)}">${glyphDisplay(v)}</td>`);
  }
  parts.push('</tr>');
}
parts.push('</table>');
parts.push(`<p style="font-size:9pt;">★ = ядерный член (ПоКА ≥ 15%); + = член (S<sub>i</sub> ≥ 5, ≥ 2 классификаторов); ~ = периферийный; · = не входит.<br>
Сокращения криптоклассов: LIQ Res&nbsp;Liquidae · FIL Res&nbsp;Filiformes · ROT Res&nbsp;Rotundae · PEN Res&nbsp;Longae&nbsp;Penetrantes · ACU Res&nbsp;Acutae · PAR Res&nbsp;Parvae · PLA Res&nbsp;Planae · CON Res&nbsp;Continens</p>`);
parts.push(`<p style="font-size:10pt;text-align:justify;">Символ — вердикт по слою живого образа; принадлежность оценивается по четырёхуровневой шкале (★ ядерный / + член / ~ периферийный / · не входит). По живому образу испанская категоризация эмоций держится на <strong>трёх осях</strong> — <em>Res&nbsp;Liquidae</em>, <em>Res&nbsp;Continens</em> и <em>Res&nbsp;Filiformes</em> (<em>desatar</em>); кажущаяся токенная доминанта <em>Res&nbsp;Parvae</em> у <em>miedo</em> и <em>alegría</em> — артефакт обеленных глаголов поддержки (<em>coger&nbsp;miedo</em>, <em>traer&nbsp;alegría</em>) и в живом слое падает до периферии. Развёрнутая интерпретация — в <code>autoreferat-prose-ru.md</code> § 2.</p>`);

// ---- Table 2: dual CAC% (token / live-imagery) ----
parts.push(`<h3 style="font-family:Arial,sans-serif;">Таблица 2. ПоКА (%) — токенная доля / доля живого образа (после дисконтирования обеленных глаголов поддержки)</h3>`);
parts.push(`<table style="${tableStyle}"><tr><th style="${hStyle}">эмоним</th>`);
for (const c of CLASSES) parts.push(`<th style="${hStyle}">${ABBR[c]}</th>`);
parts.push(`<th style="${hStyle}">N</th></tr>`);
for (const e of EMONYMS){
  parts.push(`<tr><td style="${emStyle}">${e}</td>`);
  let maxLive = 0;
  for (const c of CLASSES){ const v=emLive[e]?liveN(cell[e][c])/emLive[e]:0; if(v>maxLive) maxLive=v; }
  for (const c of CLASSES){
    const tok = emTotal[e]? cell[e][c].n/emTotal[e] : 0;
    const liv = emLive[e]? liveN(cell[e][c])/emLive[e] : 0;
    const bold = liv===maxLive ? 'font-weight:bold;' : '';
    const bg = liv>=CORE_CAC ? 'background:#dae8fc;' : '';
    parts.push(`<td style="${cellStyle}${bold}${bg}">${(100*tok).toFixed(0)}/${(100*liv).toFixed(0)}</td>`);
  }
  parts.push(`<td style="${cellStyle}">${emTotal[e]}</td></tr>`);
}
parts.push('</table>');
parts.push(`<p style="font-size:9pt;">В каждой ячейке — <strong>токенная доля / доля живого образа</strong> (%). <strong>Полужирный</strong> + голубая заливка = ядерный класс по живому образу (≥ 15%). N — суммарная корпусная частота (токен).</p>`);
parts.push(`<p style="font-size:10pt;text-align:justify;">Сопоставление двух долей в каждой ячейке — главный результат: где они резко расходятся (<em>miedo</em>&nbsp;PAR 52/2, <em>alegría</em>&nbsp;PAR 68/1), токенная доля держится на обеленном глаголе поддержки и в живом слое схлопывается; где совпадают (<em>amor</em>&nbsp;LIQ 45/51, <em>ira</em>&nbsp;FIL 94/95) — образ и частотен, и жив. Развёрнутый разбор по слоям и эмонимам — в <code>autoreferat-prose-ru.md</code> §§ 3, 8.</p>`);

// ---- Table 3: Variant coverage ----
parts.push(`<h3 style="font-family:Arial,sans-serif;">Таблица 3. Покрытие по вариантам — представленность / критическая масса (из ${TOTAL_VARIANTS})</h3>`);
parts.push(`<table style="${tableStyle}"><tr><th style="${hStyle}">эмоним</th>`);
for (const c of CLASSES) parts.push(`<th style="${hStyle}">${ABBR[c]}</th>`);
parts.push('</tr>');
for (const e of EMONYMS){
  parts.push(`<tr><td style="${emStyle}">${e}</td>`);
  for (const c of CLASSES){
    const s = varStats(cell[e][c]);
    const bg = s.crit>=READY_VARIANTS ? 'background:#c6efce;' : s.present>0 ? '' : 'color:#ccc;';
    const val = s.present>0 ? `${s.present}/${s.crit}` : '—';
    parts.push(`<td style="${cellStyle}${bg}">${val}</td>`);
  }
  parts.push('</tr>');
}
parts.push('</table>');
parts.push(`<p style="font-size:9pt;"><em>представленность</em> = число вариантов с ≥ 1 контекстом; <em>критическая масса</em> = число вариантов, по отдельности достигающих ≥ ${CRIT_MASS} контекстов. Зелёная заливка = готовность к вариантному анализу (критическая масса ≥ ${READY_VARIANTS}). «—» = эмоним в классе не представлен.</p>`);
parts.push(`<p style="font-size:10pt;text-align:justify;">Покрытие считается по <strong>токенной</strong> частоте, поэтому застывшие обороты раздувают столбец <em>Res&nbsp;Parvae</em> (<em>coger&nbsp;miedo</em>, <em>traer&nbsp;alegría</em> распространены почти по всей испанофонии). Живые доминанты при этом и наиболее широко распределены: <em>Res&nbsp;Liquidae</em> у <em>amor</em> — 21/18. Устойчиво сильные идиомы — ES, MX, AR, CO, CL, US, PE, VE, CU; центральноамериканский блок недопредставлен. Подробнее — <code>autoreferat-prose-ru.md</code> § 5.</p>`);

// ---- Table 4: Green-light set ----
parts.push(`<h3 style="font-family:Arial,sans-serif;">Таблица 4. Набор «зелёного света» — ячейки, готовые к межвариантному анализу на имеющихся данных</h3>`);
const green = [];
for (const e of EMONYMS){
  for (const c of CLASSES){
    const v = verdicts[e][c];
    if (v!=='+' && v!=='++') continue;
    const s = varStats(cell[e][c]);
    if (s.crit>=READY_VARIANTS){
      const readyVars = s.list.filter(([,n])=>n>=CRIT_MASS).map(([co])=>co).join(', ');
      const lv = liveN(cell[e][c]);
      // "мнимый" = the cell only reaches green-light via bleached light-verbs:
      // discounting them collapses it (live keeps < half the token mass) or
      // drops it below critical mass.
      const nature = (lv < CRIT_MASS || lv < 0.5 * cell[e][c].n) ? 'мнимый (глагол поддержки)' : 'живой';
      green.push({e,c,crit:s.crit,present:s.present,n:cell[e][c].n,live:lv,nature,readyVars});
    }
  }
}
green.sort((a,b)=>b.crit-a.crit);
parts.push(`<table style="${tableStyle}"><tr>
  <th style="${hStyle}">эмоним</th>
  <th style="${hStyle}">класс</th>
  <th style="${hStyle}">идиомов ≥ ${CRIT_MASS}</th>
  <th style="${hStyle}">из представленных</th>
  <th style="${hStyle}">Sᵢ токен</th>
  <th style="${hStyle}">Sᵢ живой</th>
  <th style="${hStyle}">природа</th>
  <th style="${hStyle};text-align:left;">готовые идиомы</th>
</tr>`);
for (const g of green){
  const natBg = g.nature.startsWith('мнимый') ? 'background:#fde6e6;' : 'background:#eef7e6;';
  parts.push(`<tr>
    <td style="${emStyle}">${g.e}</td>
    <td style="${cellStyle}">${ABBR[g.c]}</td>
    <td style="${cellStyle}font-weight:bold;">${g.crit}</td>
    <td style="${cellStyle}">${g.present}</td>
    <td style="${cellStyle}">${g.n}</td>
    <td style="${cellStyle}">${g.live}</td>
    <td style="${cellStyle}${natBg}font-size:9pt;">${g.nature}</td>
    <td style="${cellStyle}text-align:left;font-size:9pt;">${g.readyVars}</td>
  </tr>`);
}
parts.push('</table>');
parts.push(`<p style="font-size:9pt;">Критерий: член (+ / ★, по живому образу) И ≥ ${READY_VARIANTS} идиомов по отдельности с ≥ ${CRIT_MASS} употреблениями. Колонка <em>природа</em>: «мнимый» = ячейка проходит лишь за счёт обеленного глагола поддержки (живая частота &lt; ${CRIT_MASS}) и для содержательного межидиомного вывода непригодна.</p>`);
parts.push(`<p style="font-size:10pt;text-align:justify;">Колонка «природа» расслаивает набор: ячейки <em>Res&nbsp;Parvae</em> попадают в него лишь благодаря обеленным оборотам (<em>traer&nbsp;alegría</em>, <em>coger&nbsp;miedo</em>) и помечены как мнимые; полнокровны живые жидкостные, вместилищные и нитевидные ячейки. Полный разбор с квалификацией каждой ячейки — <code>autoreferat-prose-ru.md</code> § 6. Дополнение набора (все <em>Acutae/Rotundae/Planae</em> и почти весь профиль <em>ira</em>) — список приоритетов Фазы&nbsp;2.</p>`);

// ---- Table 5: Construction-type productivity per emonym ----
const CT_RU = {
  'verbal-locative-state':'локативно-статальная',
  'verbal-locative-into':'локативно-вводная',
  'verbal-locative-out':'локативно-выводная',
  'verbal-instrumental':'инструментальная',
  'verbal-subject-intransitive':'субъектно-интранзитивная',
  'verbal-subject-transitive':'субъектно-транзитивная',
  'verbal-objective':'объектная',
  'verbal-objective-grasp':'объектная (схватывание)',
  'verbal-objective-throw':'объектная (бросание)',
  'verbal-objective-collect':'объектная (собирание)',
  'attributive':'атрибутивная',
  'predicative':'предикативная',
  'substantive':'субстантивная',
};
const IMAGE = {
  'miedo':'схватывание (<em>coger miedo</em>) ↦ вместилище (<em>vivir en el miedo</em>)',
  'tristeza':'затопление (<em>la tristeza inunda</em>) и впадение (<em>caer en la tristeza</em>)',
  'amor':'самопроизвольное течение (<em>el amor fluye, brota</em>)',
  'alegría':'принесение (<em>traer alegría</em>) ↦ развязывание (<em>desatar</em>) / затопление',
  'ira':'развязывание (<em>desatar la ira</em>)',
};
parts.push(`<h3 style="font-family:Arial,sans-serif;">Таблица 5. Продуктивность конструкций по эмонимам</h3>`);
parts.push(`<table style="${tableStyle}"><tr>
  <th style="${hStyle}">эмоним</th>
  <th style="${hStyle};text-align:left;">ведущие конструкции (доля)</th>
  <th style="${hStyle};text-align:left;">образ</th>
</tr>`);
for (const e of EMONYMS){
  const dist = {};
  for (const c of CLASSES) for (const [t,n] of Object.entries(cell[e][c].byCT)) dist[t]=(dist[t]||0)+n;
  const total = emTotal[e];
  const top = Object.entries(dist).sort((a,b)=>b[1]-a[1]).slice(0,2)
    .map(([t,n])=>`${CT_RU[t]||t} ${(100*n/total).toFixed(1)}%`).join(', ');
  parts.push(`<tr>
    <td style="${emStyle}">${e}</td>
    <td style="${cellStyle}text-align:left;">${top}</td>
    <td style="${cellStyle}text-align:left;">${IMAGE[e]||''}</td>
  </tr>`);
}
parts.push('</table>');
parts.push(`<p style="font-size:9pt;">Доля — % от всей токенной частоты эмонима. В токенном слое ведущая конструкция у <em>miedo</em> и <em>alegría</em> — объектная-схватывание глаголов поддержки (<em>coger</em>, <em>traer</em>); после их дисконтирования у <em>miedo</em> выходят локативные модели вместилища, у <em>alegría</em> — объектная (<em>desatar</em>) и инструментально-транзитивная (жидкостная).</p>`);
parts.push(`<p style="font-size:10pt;text-align:justify;">Содержательно значим устойчивый результат: тип конструкции фиксирует <strong>степень агентивности</strong> эмоции. У <em>amor</em> эмоним — <strong>интранзитивный субъект</strong> (<em>el amor fluye</em>, эмоция течёт сама); у <em>tristeza</em> и <em>alegría</em> преобладает <strong>транзитивная</strong> модель (<em>la tristeza lo inunda</em>, эмоция затопляет извне); у <em>miedo</em> (по живому слою) — <strong>локативная</strong> модель вместилища (<em>vivir en el miedo</em>). Полный разбор — <code>autoreferat-prose-ru.md</code> § 7.</p>`);

parts.push('</body></html>');

const outPath = path.join(REPO,'data','derived','autoreferat-tables.html');
fs.writeFileSync(outPath, parts.join('\n'), 'utf8');
console.log(`Записано: ${outPath}`);
console.log('Откройте файл в Word (Файл > Открыть) — таблицы импортируются с сохранением форматирования.');
