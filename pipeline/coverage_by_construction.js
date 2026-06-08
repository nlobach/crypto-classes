#!/usr/bin/env node
// Per-idiom construction coverage for the Spanish emonyms.
//
// For every (emonym × class) cell this reports the DOMINANT construction
// (canonical base-lemma classifier, max Σfrequency) and how that construction
// — and the class as a whole — is distributed across the 21 idiomas. The point
// is the descriptive (safe) register discussed in the methodology notes: name
// the dominant construction and show its idiom span, WITHOUT claiming
// per-idiom differences the thin cells cannot support.
//
// Methodology is identical to pipeline/compute_indices.js: base-lemma counting
// (the G map below is COPIED from that file — keep in sync; the AUDIT
// cross-check fires if it drifts), `nivel de` / `círculo de` excluded
// class-wide, all aggregation is SUM(frequency).
//
// Writes data/derived/coverage-by-construction-ru.md (Russian prose; ISO codes,
// Latin class names and Spanish classifiers kept verbatim) and prints a summary.
// Usage: node pipeline/coverage_by_construction.js

const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const EM = ['miedo', 'tristeza', 'amor', 'alegría', 'ira'];
const CLASSES = ['Res Liquidae', 'Res Filiformes', 'Res Rotundae', 'Res Longae Penetrantes', 'Res Acutae', 'Res Parvae', 'Res Planae', 'Res Continens'];
const ABBR = { 'Res Liquidae': 'LIQ', 'Res Filiformes': 'FIL', 'Res Rotundae': 'ROT', 'Res Longae Penetrantes': 'PEN', 'Res Acutae': 'ACU', 'Res Parvae': 'PAR', 'Res Planae': 'PLA', 'Res Continens': 'CON' };
const MASS = 5;   // project critical-mass threshold (Σfreq ≥ 5)
const CELL_MIN = 20;  // skip cells below meaningful per-idiom resolution

// --- base-lemma map, COPIED from compute_indices.js (keep in sync) ---
const G = {
  'Res Liquidae': {
    fluir: ['fluir', 'flujo de', 'flujo'], brotar: ['brotar', 'brote de', 'brote'], rebosar: ['rebosar'],
    diluir: ['diluir', 'diluirse', 'diluido'], inundar: ['inundar', 'inundar de', 'inundar con', 'inundarse de', 'inundarse en', 'inundado por', 'inundado'],
    derramar: ['derramar', 'derramado'], verter: ['verter'], salpicar: ['salpicar'], gotear: ['gotear', 'gota de', 'gotas de', 'gota'],
    chorro: ['chorro', 'chorro de'], 'torrente de': ['torrente de', 'torrente'], 'aluvión de': ['aluvión de', 'aluvión'], 'desbordamiento de': ['desbordamiento de', 'desbordamiento'],
  },
  'Res Filiformes': {
    desatar: ['desatar', 'desatarse', 'desatado'], entrelazar: ['entrelazar', 'entrelazarse', 'entrelazado'], tejer: ['tejer', 'tejerse', 'tejido', 'tejido con'],
    retorcer: ['retorcer', 'retorcido'], hilvanar: ['hilvanar'], enrollarse: ['enrollarse', 'enrollar'], tensar: ['tensar', 'tenso'],
    amarrar: ['amarrar'], atar: ['atar', 'atado', 'atado con'], enhebrar: ['enhebrar'], 'pender de': ['pender de', 'pender'],
    'hilo de': ['hilo de', 'hilo'], 'ovillo de': ['ovillo de', 'ovillo'], 'madeja de': ['madeja de', 'madeja'],
  },
  'Res Rotundae': {
    rodar: ['rodar'], envolver: ['envolver', 'envuelto en', 'envuelto entre', 'envuelto de', 'envolver en', 'envolver de', 'envuelto'],
    girar: ['girar', 'girar en torno a', 'girar alrededor de'], redondo: ['redondo', 'es redondo'], circular: ['circular'],
    'bola de': ['bola de', 'bola'], 'esfera de': ['esfera de', 'esfera'],
  },
  'Res Longae Penetrantes': {
    atravesar: ['atravesar', 'atravesado por', 'atravesar por', 'atravesado'], penetrar: ['penetrar', 'penetrar en'],
    clavar: ['clavar', 'clavado por', 'clavado en', 'clavado'], penetrante: ['penetrante', 'es penetrante'],
    'punta de': ['punta de', 'punta'], 'golpe de': ['golpe de', 'golpe'],
  },
  'Res Acutae': {
    pinchar: ['pinchar', 'pinchado por', 'pinchado'], punzar: ['punzar', 'punzado por', 'punzado'], afilar: ['afilar', 'afilado'],
    aguzar: ['aguzar'], puntiagudo: ['puntiagudo'], punzante: ['punzante', 'es punzante'], cortante: ['cortante'],
    agudo: ['agudo', 'es agudo'], 'punta de': ['punta de', 'punta'], 'filo de': ['filo de', 'filo'], 'al filo de': ['al filo de'],
  },
  'Res Parvae': {
    coger: ['coger'], agarrar: ['agarrar'], traer: ['traer'], entregar: ['entregar'], soltar: ['soltar'], tirar: ['tirar'],
    lanzar: ['lanzar'], arrojar: ['arrojar'], captar: ['captar'], recoger: ['recoger'], 'puñado de': ['puñado de', 'puñado'],
    'manojo de': ['manojo de', 'manojo'], tomar: ['tomar'], asir: ['asir'], sujetar: ['sujetar'],
  },
  'Res Planae': {
    plano: ['plano', 'es plano'], llano: ['llano', 'es llano'], liso: ['liso', 'es liso'], nivelar: ['nivelar'], alisar: ['alisar'],
  },
  'Res Continens': {
    tapar: ['tapar', 'tapado'], destapar: ['destapar', 'destapado'], llenar: ['llenar', 'lleno de', 'está lleno de', 'lleno'],
    vaciar: ['vaciar', 'vacío de', 'está vacío de', 'vacío'], contener: ['contener'], tener: ['tener'],
    almacenar: ['almacenar', 'almacenar en'], guardar: ['guardar', 'guardar en'], 'estar en': ['estar en'],
    'encontrarse en': ['encontrarse en'], 'vivir en': ['vivir en'], 'existir en': ['existir en'], 'aparecer en': ['aparecer en'],
    'permanecer en': ['permanecer en'], 'sumirse en': ['sumirse en'], 'dentro de': ['dentro de'], 'caer en': ['caer en'],
    'entrar en': ['entrar en'], 'sumergirse en': ['sumergirse en'], 'sacar de': ['sacar de', 'sacar'], 'salir de': ['salir de'],
    'rebosante de': ['rebosante de', 'está rebosante de', 'rebosante'], obturado: ['obturado', 'obturar'],
  },
};
const EXCL = new Set(['círculo de', 'nivel de']);

const LK = {}, M = {};
for (const c of CLASSES) { LK[c] = {}; M[c] = Object.keys(G[c]).length;
  for (const [canon, vars] of Object.entries(G[c])) for (const v of vars) LK[c][v] = canon; }

const tsv = fs.readFileSync(REPO + '/data/citations.tsv', 'utf8').split(/\r?\n/).filter(Boolean);
const h = tsv.shift().split('\t'); const ix = Object.fromEntries(h.map((x, i) => [x, i]));

// S[em][cls] = Σfreq ; CF[em][cls][canon] = Σfreq ;
// BC[em][cls][country] = { total, byCanon:{canon:Σ} }
const S = {}, CF = {}, BC = {};
for (const e of EM) { S[e] = {}; CF[e] = {}; BC[e] = {};
  for (const c of CLASSES) { S[e][c] = 0; CF[e][c] = {}; BC[e][c] = {}; } }
for (const ln of tsv) { const r = ln.split('\t');
  const cls = r[ix.cryptoclass], em = r[ix.emonym], cc = r[ix.country],
    lem = (r[ix.classifier_lemma] || '').trim(), f = parseInt(r[ix.frequency], 10) || 0;
  if (!EM.includes(em) || !CLASSES.includes(cls)) continue;
  if (EXCL.has(lem)) continue;
  S[em][cls] += f;
  if (f > 0 && lem) { const canon = LK[cls][lem]; if (!canon) continue;
    CF[em][cls][canon] = (CF[em][cls][canon] || 0) + f;
    const b = BC[em][cls][cc] || (BC[em][cls][cc] = { total: 0, byCanon: {} });
    b.total += f; b.byCanon[canon] = (b.byCanon[canon] || 0) + f; } }

const lead = (em, c) => { const e = Object.entries(CF[em][c]); if (!e.length) return null;
  e.sort((a, b) => b[1] - a[1]); return { name: e[0][0], freq: e[0][1], share: S[em][c] ? e[0][1] / S[em][c] : 0 }; };
const idiomLead = b => { const e = Object.entries(b.byCanon); e.sort((a, x) => x[1] - a[1]); return e[0]; };

// ---- sanity: same audit as compute_indices.js ----
const AUDIT = { 'Res Liquidae': { miedo: 45, tristeza: 159, amor: 579, 'alegría': 519, ira: 45 },
  'Res Filiformes': { miedo: 199, tristeza: 38, amor: 210, 'alegría': 1202, ira: 1565 },
  'Res Continens': { miedo: 186, tristeza: 128, amor: 136, 'alegría': 73, ira: 31 },
  'Res Parvae': { miedo: 546, tristeza: 50, amor: 186, 'alegría': 3844, ira: 11 } };
let bad = 0; for (const c of Object.keys(AUDIT)) for (const e of EM) if (S[e][c] !== AUDIT[c][e]) bad++;

// ---- emit ----
const O = []; const P = s => O.push(s);
P('# Поидиомное покрытие конструкций (ведущая конструкция по идиомам)');
P('');
P('Генерируется скриптом `pipeline/coverage_by_construction.js` из');
P('`data/citations.tsv`. Используются те же базовые леммы и исключения классов,');
P('что и в `compute_indices.js` (`nivel de` / `círculo de` исключены; все подсчёты');
P('— Σ частот). Сверка с контрольными суммами: ' + (bad ? bad + ' РАСХОЖДЕНИЙ' : 'совпадает') + '.');
P('');
P('## Назначение и чтение таблицы');
P('');
P('Для каждой ячейки (эмоним × криптокласс) указывается **ведущая конструкция** —');
P('классификатор с наибольшей Σ частот — и то, как она распределена по 21');
P('испаноязычному идиому. Назначение файла описательное: назвать ведущую');
P('конструкцию и показать её охват по идиомам, не приписывая идиомам различий,');
P('которых малочастотные ячейки не подтверждают. Латинские названия криптоклассов,');
P('ISO-коды идиомов и испанские классификаторы приводятся без перевода.');
P('');
P('- **Критическая масса** = Σ частот ≥ ' + MASS + ' (порог проекта для поидиомного суждения).');
P('- Ячейки с Sᵢ < ' + CELL_MIN + ' опущены — ниже порога осмысленного поидиомного разрешения.');
P('- **ведущая** = классификатор (базовая лемма), несущий наибольшую Σ в ячейке.');
P('- **единообразие** = доля идиомов, в которых *класс* проходит порог ≥' + MASS + ' и при');
P('  этом сводная ведущая конструкция совпадает с **собственной** доминантой идиома.');
P('  Высокое единообразие = один общий ведущий образ по всему континууму');
P('  (общеиспанский), а не поидиомное расщепление.');
P('- Метка ⚠ отмечает идиом, чья собственная доминанта отличается от сводной ведущей.');
P('');

// ---- 1. decision summary table ----
P('## 1. Сводная таблица — по одной строке на ячейку (Sᵢ ≥ ' + CELL_MIN + ')');
P('');
P('| эмоним | класс | Sᵢ | ведущая | Σ ведущей | СИ | идиомов класс≥' + MASS + ' | идиомов ведущая≥' + MASS + ' | единообразие |');
P('|---|---|--:|---|--:|--:|--:|--:|--:|');
const cells = [];
for (const e of EM) for (const c of CLASSES) {
  if (S[e][c] < CELL_MIN) continue;
  const l = lead(e, c); if (!l) continue;
  const idioms = Object.entries(BC[e][c]);
  const classMass = idioms.filter(([, b]) => b.total >= MASS);
  const leadMass = idioms.filter(([, b]) => (b.byCanon[l.name] || 0) >= MASS);
  const consist = classMass.filter(([, b]) => idiomLead(b)[0] === l.name).length;
  cells.push({ e, c, S: S[e][c], l, classMass, leadMass, consist, idioms });
  P(`| *${e}* | ${ABBR[c]} | ${S[e][c]} | *${l.name}* | ${l.freq} | ${Math.round(100 * l.share)}% | ${classMass.length} | ${leadMass.length} | ${consist}/${classMass.length} |`);
}
P('');

// ---- 2. per-cell idiom detail ----
P('## 2. Поячейная детализация по идиомам');
P('');
P('Для каждой ячейки: охват сводной ведущей конструкции по идиомам, затем таблица');
P('идиомов, где *класс* проходит порог ≥' + MASS + ', с собственной ведущей конструкцией');
P('идиома (чтобы видеть, един ли ведущий образ или варьирует от идиома к идиому).');
P('');
for (const e of EM) {
  P('### ' + e);
  P('');
  for (const cell of cells.filter(x => x.e === e)) {
    const { c, l } = cell;
    const span = cell.idioms.filter(([, b]) => (b.byCanon[l.name] || 0) > 0)
      .map(([cc, b]) => [cc, b.byCanon[l.name]]).sort((a, b) => b[1] - a[1]);
    P(`**${ABBR[c]} — Sᵢ=${cell.S}, ведущая \`${l.name}\` ${l.freq} (СИ ${Math.round(100 * l.share)}%)**`);
    P('');
    P(`- Сводно ведущая \`${l.name}\` засвидетельствована в ${span.length} идиомах (${cell.leadMass.length} ≥${MASS}): ` +
      span.map(([cc, n]) => `${cc} ${n}`).join(', '));
    P(`- Класс проходит порог ≥${MASS} в ${cell.classMass.length} идиомах; в ${cell.consist} из них ведущая совпадает с собственной доминантой идиома.`);
    P('');
    P('| идиом | Σ класса | ведущая идиома (Σ) | Σ ведущей в идиоме |');
    P('|---|--:|---|--:|');
    for (const [cc, b] of cell.classMass.sort((a, x) => x[1].total - a[1].total)) {
      const il = idiomLead(b);
      const mark = il[0] === l.name ? '' : ' ⚠';
      P(`| ${cc} | ${b.total} | ${il[0]} ${il[1]}${mark} | ${b.byCanon[l.name] || 0} |`);
    }
    P('');
  }
}

fs.writeFileSync(REPO + '/data/derived/coverage-by-construction-ru.md', O.join('\n'));

// ---- console summary ----
console.log('cross-check:', bad ? bad + ' MISMATCH' : 'all match');
console.log('\ncell                         Sᵢ   lead          СИ  cls≥5 lead≥5 consist');
for (const x of cells) console.log(
  `${(x.e + ' ' + ABBR[x.c]).padEnd(28)} ${String(x.S).padStart(4)}  ${x.l.name.padEnd(12)} ${(Math.round(100 * x.l.share) + '%').padStart(4)}  ${String(x.classMass.length).padStart(4)}  ${String(x.leadMass.length).padStart(5)}  ${x.consist}/${x.classMass.length}`);
console.log('\nWrote data/derived/coverage-by-construction-ru.md');
