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
// Writes data/derived/coverage-by-construction.md and prints a summary.
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
P('# Per-idiom construction coverage (dominant construction by idiom)');
P('');
P('Generated by `pipeline/coverage_by_construction.js` from `data/citations.tsv`.');
P('Same base-lemma map and class-wide exclusions as `compute_indices.js`');
P('(`nivel de` / `círculo de` excluded; all counts are Σfrequency). Cross-check');
P(`vs audit totals: ${bad ? bad + ' MISMATCH' : 'all match'}.`);
P('');
P('- **Critical mass** = Σfreq ≥ ' + MASS + ' (project threshold for a per-idiom claim).');
P('- Cells with Sᵢ < ' + CELL_MIN + ' are omitted — below meaningful per-idiom resolution.');
P('- **lead** = canonical base-lemma classifier carrying the most Σfreq in the cell.');
P('- **consistency** = of the idioms where the *class* clears ≥' + MASS + ', how many');
P('  have the pooled lead construction as their *own* top construction. High');
P('  consistency = one shared dominant image across the continuum (pan-Hispanic),');
P('  not an idiom-specific split.');
P('');

// ---- 1. decision summary table ----
P('## 1. Decision summary — one row per cell (Sᵢ ≥ ' + CELL_MIN + ')');
P('');
P('| emonym | class | Sᵢ | lead constr. | lead Σ | СИ | idioms class≥' + MASS + ' | idioms lead≥' + MASS + ' | consistency |');
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
P('## 2. Per-cell idiom detail');
P('');
P('For each cell: the pooled lead construction\'s idiom span, then a table of');
P('the idioms where the *class* clears ≥' + MASS + ', with that idiom\'s own top');
P('construction (to expose whether the dominant image is shared or varies).');
P('');
for (const e of EM) {
  P('### ' + e);
  P('');
  for (const cell of cells.filter(x => x.e === e)) {
    const { c, l } = cell;
    const span = cell.idioms.filter(([, b]) => (b.byCanon[l.name] || 0) > 0)
      .map(([cc, b]) => [cc, b.byCanon[l.name]]).sort((a, b) => b[1] - a[1]);
    P(`**${ABBR[c]} — Sᵢ=${cell.S}, lead \`${l.name}\` ${l.freq} (СИ ${Math.round(100 * l.share)}%)**`);
    P('');
    P(`- Pooled lead \`${l.name}\` attested in ${span.length} idiomas (${cell.leadMass.length} ≥${MASS}): ` +
      span.map(([cc, n]) => `${cc} ${n}`).join(', '));
    P(`- Class clears ≥${MASS} in ${cell.classMass.length} idiomas; lead is the idiom's own top in ${cell.consist} of them.`);
    P('');
    P('| idioma | class Σ | idiom top constr. (Σ) | lead Σ in idiom |');
    P('|---|--:|---|--:|');
    for (const [cc, b] of cell.classMass.sort((a, x) => x[1].total - a[1].total)) {
      const il = idiomLead(b);
      const mark = il[0] === l.name ? '' : ' ⚠';
      P(`| ${cc} | ${b.total} | ${il[0]} ${il[1]}${mark} | ${b.byCanon[l.name] || 0} |`);
    }
    P('');
  }
}

fs.writeFileSync(REPO + '/data/derived/coverage-by-construction.md', O.join('\n'));

// ---- console summary ----
console.log('cross-check:', bad ? bad + ' MISMATCH' : 'all match');
console.log('\ncell                         Sᵢ   lead          СИ  cls≥5 lead≥5 consist');
for (const x of cells) console.log(
  `${(x.e + ' ' + ABBR[x.c]).padEnd(28)} ${String(x.S).padStart(4)}  ${x.l.name.padEnd(12)} ${(Math.round(100 * x.l.share) + '%').padStart(4)}  ${String(x.classMass.length).padStart(4)}  ${String(x.leadMass.length).padStart(5)}  ${x.consist}/${x.classMass.length}`);
console.log('\nWrote data/derived/coverage-by-construction.md');
