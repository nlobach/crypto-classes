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
const TOTAL_VARIANTS = 21;
const CRIT_MASS = 5;
const IDIOM_SHARE = 0.90;
const CORE_CAC = 0.15;
const READY_VARIANTS = 6;

// ---- Load citations ----
const tsv = fs.readFileSync(path.join(REPO,'data','citations.tsv'),'utf8');
const lines = tsv.split(/\r?\n/).filter(Boolean);
const h = lines.shift().split('\t');
const iCl=h.indexOf('cryptoclass'), iEm=h.indexOf('emonym'), iCt=h.indexOf('construction_type'), iLm=h.indexOf('classifier_lemma'), iCo=h.indexOf('country');

const cell = {};
for (const e of EMONYMS){ cell[e]={}; for(const c of CLASSES) cell[e][c]={n:0,byCT:{},byLemma:{},byVar:{}}; }
const emTotal = {}; for (const e of EMONYMS) emTotal[e]=0;

for (const line of lines) {
  const cols = line.split('\t');
  const e = (cols[iEm]||'').toLowerCase();
  const c = cols[iCl];
  if (!cell[e] || !cell[e][c]) continue;
  const lemma = (cols[iLm]||'').trim();
  if (c==='Res Planae' && lemma==='nivel de') continue;
  const co = (cols[iCo]||'').trim().toUpperCase();
  const cc = cell[e][c];
  cc.n++; emTotal[e]++;
  cc.byCT[cols[iCt]]=(cc.byCT[cols[iCt]]||0)+1;
  if (lemma) cc.byLemma[lemma]=(cc.byLemma[lemma]||0)+1;
  if (co) cc.byVar[co]=(cc.byVar[co]||0)+1;
}

function verdict(cc){
  const n = cc.n;
  if (n < 2) return '.';
  const lemmas = Object.entries(cc.byLemma).sort((a,b)=>b[1]-a[1]);
  if (n < CRIT_MASS) return '~';
  if (lemmas.length <= 1 || (lemmas.length && lemmas[0][1]/n >= IDIOM_SHARE)) return '~';
  return '+';
}

const verdicts = {};
for (const e of EMONYMS){
  verdicts[e]={};
  for (const c of CLASSES){
    const cc = cell[e][c];
    let v = verdict(cc);
    if (v==='+' && emTotal[e] && cc.n/emTotal[e]>=CORE_CAC) v='++';
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
Источник: data/citations.tsv &nbsp;|&nbsp;
коллокация <em>nivel&nbsp;de</em> исключена из Res&nbsp;Planae &nbsp;|&nbsp;
критическая масса ≥ ${CRIT_MASS}; порог идиоматичности ≥ ${IDIOM_SHARE*100}%; ядерный ПоКА ≥ ${CORE_CAC*100}%; «зелёный свет» ≥ ${READY_VARIANTS} вариантов при ≥ ${CRIT_MASS}</p>
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
parts.push(`<p style="font-size:10pt;text-align:justify;">Таблица показывает, в какие из восьми криптоклассов входит каждый из пяти эмонимов на уровне объединённой (по всем вариантам) выборки; принадлежность оценивается по четырёхуровневой шкале (★ ядерный член / + член / ~ периферийный / · не входит). Испанская категоризация эмоций опирается на <strong>две доминирующие оси</strong> — <em>Res&nbsp;Liquidae</em> (ядерный или полноценный член для всех пяти эмонимов) и <em>Res&nbsp;Continens</em> (ядерный для трёх отрицательных эмоций: <em>miedo</em>, <em>tristeza</em>, <em>ira</em>). Эмоним <em>miedo</em> обладает наибольшей широтой, проецируясь в семь из восьми криптоклассов, и является единственным, чья доминанта — <em>Res&nbsp;Continens</em>, а не <em>Res&nbsp;Liquidae</em>. Два отрицательных результата особенно показательны: <strong>Res&nbsp;Planae не привлекает ни одного эмонима</strong> после исключения измерительной коллокации <em>nivel&nbsp;de</em>, а <strong>Res&nbsp;Parvae ни для одного эмонима не является ядерным</strong> — это главное расхождение с английским языком, где, по данным О.&nbsp;О.&nbsp;Борискиной и О.&nbsp;В.&nbsp;Дониной, именно <em>Res&nbsp;Parvae</em> выступает антропоцентрической доминантой.</p>`);

// ---- Table 2: CAC% ----
parts.push(`<h3 style="font-family:Arial,sans-serif;">Таблица 2. ПоКА (%) — доля эмонима, приходящаяся на криптокласс (после исключения <em>nivel&nbsp;de</em>)</h3>`);
parts.push(`<table style="${tableStyle}"><tr><th style="${hStyle}">эмоним</th>`);
for (const c of CLASSES) parts.push(`<th style="${hStyle}">${ABBR[c]}</th>`);
parts.push(`<th style="${hStyle}">N</th></tr>`);
for (const e of EMONYMS){
  parts.push(`<tr><td style="${emStyle}">${e}</td>`);
  let maxCac = 0;
  for (const c of CLASSES){ const v=emTotal[e]?cell[e][c].n/emTotal[e]:0; if(v>maxCac) maxCac=v; }
  for (const c of CLASSES){
    const cac = emTotal[e]? cell[e][c].n/emTotal[e] : 0;
    const bold = cac===maxCac ? 'font-weight:bold;' : '';
    const bg = cac>=CORE_CAC ? 'background:#dae8fc;' : '';
    parts.push(`<td style="${cellStyle}${bold}${bg}">${(100*cac).toFixed(1)}</td>`);
  }
  parts.push(`<td style="${cellStyle}">${emTotal[e]}</td></tr>`);
}
parts.push('</table>');
parts.push(`<p style="font-size:9pt;">Значения — % от общего числа контекстов эмонима. <strong>Полужирный</strong> = доминирующий класс. Голубая заливка = ядерный класс (≥ 15%). N — суммарный объём контекстов.</p>`);
parts.push(`<p style="font-size:10pt;text-align:justify;">Таблица приводит долю (в %) от общего числа контекстов каждого эмонима, приходящуюся на каждый криптокласс, с указанием суммарного объёма <em>N</em>. Количественные показатели подтверждают матрицу принадлежности: <em>Res&nbsp;Liquidae</em> доминирует у четырёх из пяти эмонимов, достигая максимума <strong>67,4&nbsp;% у <em>alegría</em></strong> (наиболее «жидкой» эмоции), тогда как <em>miedo</em> инвертирует картину с долей <em>Res&nbsp;Continens</em> <strong>45,1&nbsp;%</strong>. У всех эмонимов профиль резко неравномерный: один-два доминирующих класса и длинный тонкий «хвост». Цифры также обнажают несбалансированность данных — <em>amor</em> (N=1095) и <em>alegría</em> (N=760) хорошо представлены, тогда как <em>ira</em> (N=98) слишком малочисленна для тонких выводов.</p>`);

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
parts.push(`<p style="font-size:10pt;text-align:justify;">Для каждой ячейки указано, сколько из 21 варианта дают хотя бы один контекст (<em>представленность</em>) и сколько по отдельности преодолевают порог критической массы ≥${CRIT_MASS} (<em>критическая масса</em>). Две доминирующие оси оказываются и <strong>наиболее широко распределёнными</strong> — <em>Res&nbsp;Liquidae</em> у <em>amor</em>/<em>alegría</em> представлен во всех 21 варианте (18 — с критической массой), что подтверждает пангиспанский, а не пиренейский характер модели. Существенно, что таблица отделяет подлинную широту от суммарных артефактов: ряд ячеек вида «представленность/0» (например, <em>miedo</em>&nbsp;FIL, <em>amor</em>&nbsp;ACU) — это реальная принадлежность на уровне языка, <strong>не подкреплённая пока ни одним отдельным вариантом</strong>. Устойчиво сильные варианты — ES, MX, AR, CO, CL, US, PE, VE, CU; центральноамериканский и малый андский блок остаются недопредставленными.</p>`);

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
      green.push({e,c,crit:s.crit,present:s.present,n:cell[e][c].n,readyVars});
    }
  }
}
green.sort((a,b)=>b.crit-a.crit);
parts.push(`<table style="${tableStyle}"><tr>
  <th style="${hStyle}">эмоним</th>
  <th style="${hStyle}">класс</th>
  <th style="${hStyle}">вариантов ≥ ${CRIT_MASS}</th>
  <th style="${hStyle}">из представленных</th>
  <th style="${hStyle}">N</th>
  <th style="${hStyle};text-align:left;">готовые варианты</th>
</tr>`);
for (const g of green){
  parts.push(`<tr>
    <td style="${emStyle}">${g.e}</td>
    <td style="${cellStyle}">${ABBR[g.c]}</td>
    <td style="${cellStyle}font-weight:bold;">${g.crit}</td>
    <td style="${cellStyle}">${g.present}</td>
    <td style="${cellStyle}">${g.n}</td>
    <td style="${cellStyle}text-align:left;font-size:9pt;">${g.readyVars}</td>
  </tr>`);
}
parts.push('</table>');
parts.push(`<p style="font-size:9pt;">Критерий: член (+ / ★) И ≥ ${READY_VARIANTS} вариантов по отдельности с ≥ ${CRIT_MASS} контекстами. Эти ячейки выдерживают коэффициент корреляции Пирсона <em>r</em> и коэффициент конкордации Кендалла <em>W</em> на имеющихся данных. Всё остальное — задача для сбора данных на Фазе&nbsp;2.</p>`);
parts.push(`<p style="font-size:10pt;text-align:justify;">Таблица перечисляет восемь ячеек (эмоним × криптокласс), которые одновременно являются членами и подкреплены ≥${READY_VARIANTS} вариантами с ≥${CRIT_MASS} контекстами, т.&nbsp;е. готовы к межвариантному статистическому анализу (коэффициент корреляции Пирсона, коэффициент конкордации Кендалла) на имеющихся данных. Эти восемь ячеек — в точности две ядерные оси плюс <em>Res&nbsp;Filiformes</em>: <em>Liquidae</em> для <em>amor/alegría/tristeza</em>, <em>Continens</em> для <em>miedo/tristeza/amor</em>, <em>Filiformes</em> для <em>amor/alegría</em>. Они задают <strong>допустимые границы любых вариантных выводов</strong> на текущем этапе; наиболее обеспеченные (<em>amor</em>/<em>alegría</em> × <em>Liquidae</em>, 18 вариантов) проникают и в недопредставленный блок. Дополнение этой таблицы — всё, что в неё не вошло, включая все ячейки <em>ira</em> и все <em>Acutae/Rotundae/Parvae</em>, — одновременно является <strong>списком приоритетов для сбора данных на Фазе&nbsp;2</strong>.</p>`);

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
  'miedo':'пребывание внутри вместилища (<em>vivir en el miedo</em>)',
  'tristeza':'затопление (<em>la tristeza inunda</em>) и впадение (<em>caer en la tristeza</em>)',
  'amor':'самопроизвольное течение (<em>el amor fluye, brota</em>)',
  'alegría':'наполнение / затопление (<em>inundado de alegría</em>)',
  'ira':'вскипание (<em>la ira brota</em>)',
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
parts.push(`<p style="font-size:9pt;">Доля — % от всех контекстов эмонима (после исключения <em>nivel&nbsp;de</em>). Именно тип конструкции, а не только лексема-классификатор, относит эмоним к криптоклассу.</p>`);
parts.push(`<p style="font-size:10pt;text-align:justify;">Распределение конструкций обнаруживает закономерность, <strong>не сводимую к выбору криптокласса</strong>: один и тот же «жидкостный» образ реализуется у разных эмонимов через разную синтаксическую роль эмонима. У <em>amor</em> и <em>ira</em> эмоним выступает <strong>интранзитивным субъектом</strong> — эмоция возникает и течёт сама собой (<em>el amor fluye</em>, <em>la ira brota</em>); у <em>tristeza</em> и <em>alegría</em> преобладает <strong>транзитивная</strong> модель, где эмоция затопляет переживающего как внешняя сила (<em>la tristeza lo inunda</em>); у <em>miedo</em> доминирует <strong>локативная</strong> модель, где эмоция предстаёт вместилищем, внутри которого пребывает субъект (<em>vivir en el miedo</em>). Таким образом, продуктивная конструкция фиксирует не только класс, но и <strong>степень агентивности</strong> эмоции в языковой картине мира: любовь и гнев концептуализируются как самозарождающиеся, грусть и радость — как извне затопляющие, страх — как объемлющее пространство.</p>`);

parts.push('</body></html>');

const outPath = path.join(REPO,'data','derived','autoreferat-tables.html');
fs.writeFileSync(outPath, parts.join('\n'), 'utf8');
console.log(`Записано: ${outPath}`);
console.log('Откройте файл в Word (Файл > Открыть) — таблицы импортируются с сохранением форматирования.');
