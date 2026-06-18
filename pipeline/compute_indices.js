#!/usr/bin/env node
// Compute the three cryptoclass indices for the Spanish emonyms from
// data/citations.tsv + the final (vetted) data/classifiers.tsv inventory:
//
//   ПоКА (CAC)  = Sᵢ / Σ_cls Sᵢ  — depth  (the emonym's mass on this class, across the name's own projections)
//   ПА          = Sᵢ / Σ_em Sᵢ    — relative activity (the emonym's share of the class mass among the sample's names)
//   ИРа  (IDC)  = Qᵢ / M          — breadth (share of the class's classifier inventory reached)
//   СИ          = the cᵢⱼ profile — combinatorial selectivity (which classifiers + how often; quantity + quality);
//                                   "lead-classifier share" = max cᵢⱼ / Sᵢ only summarizes its concentration, it is NOT СИ itself
//
// Classifiers are counted at base-lemma granularity (option 1, Boriskina-style:
// voice / participle / clitic / preposition variants AND a verb's deverbal noun
// collapse to one classifier). The base-lemma groups below mirror the curated
// classifiers.tsv. Two seeds are excluded class-wide (nivel de, círculo de):
// measurement / vicious-cycle frames that attribute none of the class property.
// Support verbs (coger/agarrar/traer/entregar) are KEPT — live grasp/give
// predicates, per the project's verbo-de-apoyo decision.
//
// Writes data/derived/cryptoclass-indices.md and prints a summary.
// Usage: node pipeline/compute_indices.js

const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const EM = ['miedo', 'tristeza', 'amor', 'alegría', 'ira'];
const CLASSES = ['Res Liquidae', 'Res Filiformes', 'Res Rotundae', 'Res Longae Penetrantes', 'Res Acutae', 'Res Parvae', 'Res Planae', 'Res Continens'];
const ABBR = { 'Res Liquidae': 'LIQ', 'Res Filiformes': 'FIL', 'Res Rotundae': 'ROT', 'Res Longae Penetrantes': 'PEN', 'Res Acutae': 'ACU', 'Res Parvae': 'PAR', 'Res Planae': 'PLA', 'Res Continens': 'CON' };

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
const S = {}, CF = {}, unmapped = {};   // S[em][cls]=Σfreq ; CF[em][cls][canon]=Σfreq
for (const e of EM) { S[e] = {}; CF[e] = {}; for (const c of CLASSES) { S[e][c] = 0; CF[e][c] = {}; } }
for (const ln of tsv) { const r = ln.split('\t');
  const cls = r[ix.cryptoclass], em = r[ix.emonym], lem = (r[ix.classifier_lemma] || '').trim(), f = parseInt(r[ix.frequency], 10) || 0;
  if (!EM.includes(em) || !CLASSES.includes(cls)) continue;
  if (EXCL.has(lem)) continue;
  S[em][cls] += f;
  if (f > 0 && lem) { const canon = LK[cls][lem];
    if (canon) CF[em][cls][canon] = (CF[em][cls][canon] || 0) + f;
    else { const k = cls + ' :: ' + lem; unmapped[k] = (unmapped[k] || 0) + f; } }
}

const lead = (em, c) => { const e = Object.entries(CF[em][c]); if (!e.length) return null;
  e.sort((a, b) => b[1] - a[1]); return { name: e[0][0], freq: e[0][1], share: S[em][c] ? e[0][1] / S[em][c] : 0, top: e.slice(0, 3) }; };
const Qi = (em, c) => Object.keys(CF[em][c]).length;
const tot = em => CLASSES.reduce((a, c) => a + S[em][c], 0);
const colTot = c => EM.reduce((a, e) => a + S[e][c], 0);   // class mass over the sample's emonyms — ПА denominator

// ---- sanity ----
const AUDIT = { 'Res Liquidae': { miedo: 45, tristeza: 159, amor: 579, 'alegría': 519, ira: 45 },
  'Res Filiformes': { miedo: 199, tristeza: 38, amor: 210, 'alegría': 1202, ira: 1565 },
  'Res Continens': { miedo: 186, tristeza: 128, amor: 136, 'alegría': 73, ira: 31 },
  'Res Parvae': { miedo: 546, tristeza: 50, amor: 186, 'alegría': 3844, ira: 11 } };
let bad = 0; for (const c of Object.keys(AUDIT)) for (const e of EM) if (S[e][c] !== AUDIT[c][e]) bad++;
const um = Object.entries(unmapped).sort((a, b) => b[1] - a[1]);

// ---- emit derived markdown ----
const O = [];
const P = s => O.push(s);
P('# Cryptoclass indices for the Spanish emonyms (ПоКА · ПА · ИРа · СИ)');
P('');
P('Generated by `pipeline/compute_indices.js` from `data/citations.tsv` and the');
P('vetted `data/classifiers.tsv`. Base-lemma counting (option 1). `nivel de` and');
P('`círculo de` excluded class-wide. Support verbs (coger/traer/…) kept.');
P('');
P('- **ПоКА** = Sᵢ/Σ_cls Sᵢ — depth (the emonym\'s mass on this class, normalized across the name\'s own projections; row sums ≈100%)');
P('- **ПА** = Sᵢ/Σ_em Sᵢ — relative activity (the emonym\'s share of the class mass among the sample\'s names; column sums = 1.000)');
P('- **ИРа** = Qᵢ/M — breadth (share of the class\'s classifier inventory reached)');
P('- **СИ** (сочетательная избирательность) = the cᵢⱼ profile — which classifiers and how often (quantity + quality), reported in the profile section below. The "lead-classifier share" only summarizes its concentration; it is NOT СИ itself.');
P('');
P(`Cross-check vs freq-audit totals: ${bad ? bad + ' MISMATCH' : 'all match'}. Unmapped freq>0 classifiers: ${um.length || 'none'}.`);
P('');
P('## M — final classifier inventory');
P('');
P('| ' + CLASSES.map(c => ABBR[c]).join(' | ') + ' |');
P('|' + CLASSES.map(() => '--:').join('|') + '|');
P('| ' + CLASSES.map(c => M[c]).join(' | ') + ' |');
P('');
const tbl = (title, fn) => { P('## ' + title); P(''); P('| emonym | ' + CLASSES.map(c => ABBR[c]).join(' | ') + ' |');
  P('|---|' + CLASSES.map(() => '--:').join('|') + '|');
  for (const e of EM) P('| *' + e + '* | ' + CLASSES.map(c => fn(e, c)).join(' | ') + ' |'); P(''); };
tbl('Sᵢ — corpus frequency', (e, c) => S[e][c]);
P('N per emonym: ' + EM.map(e => `*${e}* ${tot(e)}`).join(' · ')); P('');
tbl('ПоКА — % of total frequency', (e, c) => { const t = tot(e) || 1; return (100 * S[e][c] / t).toFixed(1); });
tbl('ПА — relative activity (Sᵢ / class column sum, across the sample\'s names)', (e, c) => { const ct = colTot(c) || 1; return (S[e][c] / ct).toFixed(3); });
P('Σ Sᵢ per class (ПА denominator): ' + CLASSES.map(c => `${ABBR[c]} ${colTot(c)}`).join(' · ')); P('');
tbl('ИРа = Qᵢ/M — breadth', (e, c) => (Qi(e, c) / M[c]).toFixed(2));
tbl('Qᵢ — distinct classifiers realized', (e, c) => Qi(e, c));
tbl('Доля ведущего классификатора (%) — concentration summary of СИ, not СИ itself', (e, c) => { const l = lead(e, c); return l ? (100 * l.share).toFixed(0) : '·'; });

// Membership verdict from the three indices (precedence ▲ → ★ → ○ → + → ~ → ·).
// ★/▲ are split by concentration (lead-classifier share), not ИРа, because M varies 5–23 and an
// absolute ИРа cutoff misranks large-inventory classes (e.g. CON, M=23).
//   ▲  poka≥10 & si≥80               frequency-dominant, phraseologically bound (one classifier)
//   ★  poka≥10 & si<80 & Qᵢ≥3        nuclear (frequent and diverse, not concentrated)
//   ○  poka<10 & ira≥0.50 & si≤60    broad repertoire, low frequency
//   +  Sᵢ≥5 & Qᵢ≥2                   peripheral genuine member
//   ~  Sᵢ≥1 (else)                   marginal (Qᵢ=1 or Sᵢ<5)
//   ·  Sᵢ=0                          not a member
const sym = (e, c) => {
  const Sv = S[e][c], qi = Qi(e, c); if (!Sv || !qi) return '·';
  const poka = 100 * Sv / tot(e), ira = qi / M[c], l = lead(e, c), si = l ? 100 * l.share : 0;
  if (poka >= 10 && si >= 80) return '▲';
  if (poka >= 10 && qi >= 3) return '★';
  if (poka < 10 && ira >= 0.50 && si <= 60) return '○';
  if (Sv >= 5 && qi >= 2) return '+';
  return '~';
};
tbl('Membership (symbol + ПоКА %)', (e, c) => sym(e, c) + ' ' + Math.round(100 * S[e][c] / (tot(e) || 1)));
P('## СИ — combinatorial-selectivity profile cᵢⱼ per cell (Sᵢ ≥ 20)');
P('');
P('СИ is the full distribution of the emonym over the class classifiers (which ones,');
P('and how often) — quantity + quality of the realized valency. "доля вед." = the');
P('lead classifier\'s share of Sᵢ (a concentration summary, not СИ itself).');
P('');
for (const e of EM) { P(`**${e}**`); P('');
  for (const c of CLASSES) { if (S[e][c] < 20) continue;
    const ents = Object.entries(CF[e][c]).sort((a, b) => b[1] - a[1]); if (!ents.length) continue;
    const leadShare = (100 * ents[0][1] / S[e][c]).toFixed(0);
    P(`- ${ABBR[c]} (Sᵢ=${S[e][c]}, ПоКА ${(100 * S[e][c] / tot(e)).toFixed(0)}%, ИРа ${(Qi(e, c) / M[c]).toFixed(2)}, доля вед. ${leadShare}%): ` + ents.map(([n, f]) => `${n} ${f}`).join(', ')); }
  P(''); }
fs.writeFileSync(REPO + '/data/derived/cryptoclass-indices.md', O.join('\n'));

// ---- console summary ----
const pad = (s, n) => String(s).padStart(n);
console.log('cross-check:', bad ? bad + ' MISMATCH' : 'all match', '| unmapped:', um.length || 'none');
console.log('\nДоля ведущего классификатора (%) — concentration summary of СИ');
console.log(pad('emonym', 9) + ' ' + CLASSES.map(c => pad(ABBR[c], 7)).join(''));
for (const e of EM) console.log(pad(e, 9) + ' ' + CLASSES.map(c => { const l = lead(e, c); return pad(l ? Math.round(100 * l.share) : '·', 7); }).join(''));
console.log('\nMembership (symbol):');
console.log(pad('emonym', 9) + ' ' + CLASSES.map(c => pad(ABBR[c], 7)).join(''));
for (const e of EM) console.log(pad(e, 9) + ' ' + CLASSES.map(c => pad(sym(e, c), 7)).join(''));
console.log('\nLead classifier per dominant cell:');
for (const e of EM) for (const c of CLASSES) { const l = lead(e, c); if (l && S[e][c] >= 50) console.log(`  ${e} ${ABBR[c]}: ${l.name} ${l.freq}/${S[e][c]} (${Math.round(100*l.share)}%)`); }
console.log('\nWrote data/derived/cryptoclass-indices.md');
