#!/usr/bin/env node
// Cross-emonym cryptoclass MEMBERSHIP matrix (Spanish pooled).
//
// Answers the autoreferat question: which emonyms join which cryptoclasses,
// which do not, through which construction types, and with how many variants'
// support behind each verdict. Reads data/citations.tsv.
//
// Membership verdict per (emonym x cryptoclass) cell, applying the project's
// established conventions:
//   - Critical mass: S_i >= 5 (Donina 2016, criterion 4). Below 5 => non-member.
//   - Idiom guard: if S_i >= 5 but a single classifier lemma carries >= 90% of
//     the citations, the cell is MARGINAL (frozen-idiom signature, not broad
//     membership) -- per Boriskina theory-boriskina.md §11.4.
//   - nivel-de exclusion: `nivel de` is a measurement collocation, not the
//     flat-surface image of Res Planae. Excluded class-wide from Res Planae
//     (notes/cryptoclasses/_inventory-decisions.md, 2026-06-01; this script
//     applies the deferred class-wide generalisation the decision flagged).
//
// Verdict glyphs:
//   ++  core member   (member AND class is in the emonym's top tier, CAC >= 15%)
//   +   member        (S_i >= 5, >= 2 distinct classifiers)
//   ~   marginal      (S_i >= 5 but single-classifier-driven, OR 2 <= S_i < 5)
//   .   non-member    (S_i < 2)
//
// Usage: node pipeline/membership_matrix.js [--raw]   (--raw keeps nivel de)

const fs = require('fs');
const path = require('path');
const { loadDropIds } = require('./drop_ids');

const REPO = path.resolve(__dirname, '..');
const KEEP_NIVEL = process.argv.includes('--raw');

const CLASSES = ['Res Liquidae','Res Filiformes','Res Rotundae','Res Longae Penetrantes','Res Acutae','Res Parvae','Res Planae','Res Continens'];
const ABBR = {'Res Liquidae':'LIQ','Res Filiformes':'FIL','Res Rotundae':'ROT','Res Longae Penetrantes':'PEN','Res Acutae':'ACU','Res Parvae':'PAR','Res Planae':'PLA','Res Continens':'CON'};
const EMONYMS = ['miedo','tristeza','amor','alegría','ira'];

const CRIT_MASS = 5;       // Donina criterion 4
const IDIOM_SHARE = 0.90;  // single-classifier dominance => marginal
const CORE_CAC = 0.15;     // top-tier share => core member
const READY_VARIANTS = 6;  // variants at >=CRIT_MASS needed to call a cell per-variant-ready

// ---- Load citations ----
const tsv = fs.readFileSync(path.join(REPO,'data','citations.tsv'),'utf8');
const lines = tsv.split(/\r?\n/).filter(Boolean);
const h = lines.shift().split('\t');
const iId=h.indexOf('id'), iCl=h.indexOf('cryptoclass'), iEm=h.indexOf('emonym'), iCt=h.indexOf('construction_type'), iLm=h.indexOf('classifier_lemma'), iCo=h.indexOf('country');
const dropIds = loadDropIds(REPO);   // duplicate drop-list (dedupe.js)

// cell[emonym][class] = { n, byCT:{}, byLemma:{}, byVar:{} }
const cell = {};
for (const e of EMONYMS){ cell[e]={}; for(const c of CLASSES) cell[e][c]={n:0,byCT:{},byLemma:{},byVar:{}}; }
const emTotal = {}; for (const e of EMONYMS) emTotal[e]=0;

for (const line of lines) {
  const cols = line.split('\t');
  if (dropIds.has(cols[iId])) continue;   // skip cross-dataset duplicates
  const e = (cols[iEm]||'').toLowerCase();
  const c = cols[iCl];
  if (!cell[e] || !cell[e][c]) continue;
  const lemma = (cols[iLm]||'').trim();
  if (!KEEP_NIVEL && c==='Res Planae' && lemma==='nivel de') continue; // exclusion
  const ct = cols[iCt];
  const co = (cols[iCo]||'').trim().toUpperCase();
  const cc = cell[e][c];
  cc.n++; emTotal[e]++;
  cc.byCT[ct]=(cc.byCT[ct]||0)+1;
  if (lemma) cc.byLemma[lemma]=(cc.byLemma[lemma]||0)+1;
  if (co) cc.byVar[co]=(cc.byVar[co]||0)+1;
}

// per-cell variant coverage helpers
const TOTAL_VARIANTS = 21;
function variantStats(cc){
  const vars = Object.entries(cc.byVar).sort((a,b)=>b[1]-a[1]);
  return {
    present: vars.length,                              // variants with >=1 citation
    crit: vars.filter(([,n])=>n>=CRIT_MASS).length,    // variants individually clearing >=5
    list: vars,                                        // [code, n] desc
  };
}

// ---- Verdict per cell ----
function verdict(cc){
  const n = cc.n;
  if (n < 2) return '.';
  const lemmas = Object.entries(cc.byLemma).sort((a,b)=>b[1]-a[1]);
  const distinct = lemmas.length;
  const topShare = lemmas.length ? lemmas[0][1]/n : 0;
  if (n < CRIT_MASS) return '~';                       // below critical mass
  if (distinct <= 1 || topShare >= IDIOM_SHARE) return '~'; // idiom-driven
  return '+';                                          // genuine member
}

const padR=(s,n)=>String(s).padEnd(n), padL=(s,n)=>String(s).padStart(n);

console.log(`\n=== Cryptoclass MEMBERSHIP matrix (Spanish pooled${KEEP_NIVEL?', RAW incl. nivel de':", nivel de excluded"}) ===`);
console.log(`Critical mass >= ${CRIT_MASS}; idiom guard at single-classifier share >= ${IDIOM_SHARE*100}%; core CAC >= ${CORE_CAC*100}%\n`);

// Matrix of glyphs
console.log(padR('emonym',10)+CLASSES.map(c=>padL(ABBR[c],5)).join(''));
const verdicts = {};
for (const e of EMONYMS){
  verdicts[e]={};
  let row = padR(e,10);
  for (const c of CLASSES){
    const cc = cell[e][c];
    let v = verdict(cc);
    const cac = emTotal[e]? cc.n/emTotal[e] : 0;
    if (v==='+' && cac>=CORE_CAC) v='++';
    verdicts[e][c]=v;
    row += padL(v,5);
  }
  console.log(row);
}

console.log('\nLegend:  ++ core member   + member   ~ marginal (idiom-driven / below critical mass)   . non-member\n');

// CAC% matrix
console.log('CAC% (share of emonym total, post-exclusion):');
console.log(padR('emonym',10)+CLASSES.map(c=>padL(ABBR[c],6)).join('')+padL('N',7));
for (const e of EMONYMS){
  let row = padR(e,10);
  for (const c of CLASSES){
    const cac = emTotal[e]? 100*cell[e][c].n/emTotal[e] : 0;
    row += padL(cac.toFixed(1),6);
  }
  row += padL(emTotal[e],7);
  console.log(row);
}

// Variant-coverage matrix: how many of the 21 variants support each cell.
// Format `p/c`: p = variants with >=1 citation; c = variants individually >=5.
console.log(`\nVariant coverage  "present/critical"  (of ${TOTAL_VARIANTS}; present = >=1 cit., critical = >=${CRIT_MASS}):`);
console.log(padR('emonym',10)+CLASSES.map(c=>padL(ABBR[c],7)).join(''));
for (const e of EMONYMS){
  let row = padR(e,10);
  for (const c of CLASSES){
    const s = variantStats(cell[e][c]);
    row += padL(`${s.present}/${s.crit}`,7);
  }
  console.log(row);
}

// Construction-type + variant detail for each member / core cell
console.log('\nConstruction types & supporting variants per membership (+ / ++ cells only):');
for (const e of EMONYMS){
  console.log(`\n  ${e}:`);
  for (const c of CLASSES){
    const v = verdicts[e][c];
    if (v!=='+' && v!=='++') continue;
    const cc = cell[e][c];
    const cts = Object.entries(cc.byCT).sort((a,b)=>b[1]-a[1]).slice(0,3)
      .map(([k,n])=>`${k}=${n}`).join(', ');
    const lem = Object.entries(cc.byLemma).sort((a,b)=>b[1]-a[1]).slice(0,3)
      .map(([k,n])=>`${k}(${n})`).join(', ');
    const s = variantStats(cc);
    const varList = s.list.map(([co,n])=>`${co}:${n}`).join(' ');
    console.log(`    ${v==='++'?'★':' '} ${ABBR[c]} (n=${cc.n}): ${cts}   | top: ${lem}`);
    console.log(`        variants ${s.present}/${TOTAL_VARIANTS} present, ${s.crit} >=${CRIT_MASS}:  ${varList}`);
  }
}

// Green-light set: memberships ready for per-variant statistics.
// A cell qualifies if it is a member (+ / ++) AND >= READY_VARIANTS variants
// individually clear critical mass. Everything else is a Phase-2 collection target.
console.log(`\n=== Per-variant-ready ("green-light") set ===`);
console.log(`Criterion: member (+/++) AND >= ${READY_VARIANTS} variants at >= ${CRIT_MASS} citations.`);
console.log(`These cells can carry cross-variant statistics (Pearson/Kendall) now;\nall other memberships are pooled-only -> Phase-2 collection targets.\n`);
const green = [];
for (const e of EMONYMS){
  for (const c of CLASSES){
    const v = verdicts[e][c];
    if (v!=='+' && v!=='++') continue;
    const s = variantStats(cell[e][c]);
    if (s.crit >= READY_VARIANTS){
      const readyVars = s.list.filter(([,n])=>n>=CRIT_MASS).map(([co])=>co).join(', ');
      green.push({e,c,crit:s.crit,present:s.present,n:cell[e][c].n,readyVars});
    }
  }
}
green.sort((a,b)=>b.crit-a.crit);
if (green.length===0){
  console.log('  (none — no cell yet reaches the variant threshold)');
} else {
  for (const g of green){
    console.log(`  ${padR(g.e,9)} ${padR(ABBR[g.c],4)}  ${g.crit} variants >=${CRIT_MASS} (of ${g.present} present, n=${g.n})`);
    console.log(`            ready: ${g.readyVars}`);
  }
}
console.log('');
