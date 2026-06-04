#!/usr/bin/env node
// Aggregate (Spanish-pooled) cryptoclass profile for one emonym.
// Computes CAC (ПоКА) and IDC (ИРа) per cryptoclass, plus construction-type
// and per-classifier breakdowns. Reads data/citations.tsv + classifiers.tsv.
// Usage: node pipeline/aggregate_profile.js [emonym]

const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const FROM_GOLD = process.argv.includes('--from-gold');
const EMONYM = (process.argv.slice(2).find(a => !a.startsWith('--')) || 'miedo').toLowerCase();

const CLASSES = ['Res Liquidae','Res Filiformes','Res Rotundae','Res Longae Penetrantes','Res Acutae','Res Parvae','Res Planae','Res Continens'];

// ---- Load classifier inventory: M = distinct seed lemmas per class ----
function loadInventory() {
  const tsv = fs.readFileSync(path.join(REPO,'data','classifiers.tsv'),'utf8');
  const lines = tsv.split(/\r?\n/).filter(Boolean);
  const h = lines.shift().split('\t');
  const iC = h.indexOf('cryptoclass'), iS = h.indexOf('seed_lemmas_es');
  const inv = {}; for (const c of CLASSES) inv[c] = new Set();
  for (const line of lines) {
    const cols = line.split('\t');
    const cl = cols[iC];
    if (!inv[cl]) continue;
    (cols[iS]||'').split(',').map(s=>s.trim()).filter(Boolean).forEach(s=>inv[cl].add(s));
  }
  return inv;
}

// ---- Load citations for the emonym ----
// --from-gold reads the curated gold set (exclusions + duplicate drop-list
// already applied by build_gold.js); default reads the raw extraction.
function loadCitations() {
  const src = FROM_GOLD
    ? path.join(REPO, 'data', 'derived', `gold-${EMONYM}.tsv`)
    : path.join(REPO, 'data', 'citations.tsv');
  const tsv = fs.readFileSync(src, 'utf8');
  const lines = tsv.split(/\r?\n/).filter(Boolean);
  const h = lines.shift().split('\t');
  const iCl=h.indexOf('cryptoclass'), iEm=h.indexOf('emonym'), iCt=h.indexOf('construction_type'), iLm=h.indexOf('classifier_lemma'), iFr=h.indexOf('frequency');
  const rows = [];
  for (const line of lines) {
    const cols = line.split('\t');
    if ((cols[iEm]||'').toLowerCase() !== EMONYM) continue;
    // frequency defaults to 1 when absent (gold files predating the column).
    const frRaw = iFr >= 0 ? parseInt(cols[iFr], 10) : 1;
    const f = Number.isFinite(frRaw) ? frRaw : 1;
    rows.push({ cls: cols[iCl], ct: cols[iCt], lemma: (cols[iLm]||'').trim(), freq: f });
  }
  return rows;
}

const inv = loadInventory();
const rows = loadCitations();
const total = rows.reduce((a, r) => a + r.freq, 0);   // Σ corpus frequency

// Per-class aggregates
const S = {};            // S_i = citation count (≈ Σ c_ij)
const observedLemmas = {}; // distinct non-empty lemmas seen
const byCT = {};         // construction-type counts per class
const lemmaCounts = {};  // lemma -> count, per class
for (const c of CLASSES) { S[c]=0; observedLemmas[c]=new Set(); byCT[c]={}; lemmaCounts[c]={}; }

for (const r of rows) {
  if (!S.hasOwnProperty(r.cls)) continue;
  S[r.cls] += r.freq;
  byCT[r.cls][r.ct] = (byCT[r.cls][r.ct]||0) + r.freq;
  if (r.lemma && r.freq > 0) {            // zero-freq rows = negative attestation
    observedLemmas[r.cls].add(r.lemma);
    lemmaCounts[r.cls][r.lemma] = (lemmaCounts[r.cls][r.lemma]||0) + r.freq;
  }
}

// ---- Print ----
const padR=(s,n)=>String(s).padEnd(n), padL=(s,n)=>String(s).padStart(n);
const ABBR={'Res Liquidae':'LIQ','Res Filiformes':'FIL','Res Rotundae':'ROT','Res Longae Penetrantes':'PEN','Res Acutae':'ACU','Res Parvae':'PAR','Res Planae':'PLA','Res Continens':'CON'};

console.log(`\n=== Aggregate cryptoclass profile: "${EMONYM}" (Spanish pooled${FROM_GOLD ? ', curated gold set' : ', raw extraction'}) ===`);
console.log(`Total citations: ${total}\n`);

// CAC table, ranked
console.log('CAC (ПоКА) — share of total cryptoclass activity, ranked:');
console.log(padR('Class',26)+padL('S_i',6)+padL('CAC%',9)+'   bar');
const ranked = CLASSES.slice().sort((a,b)=>S[b]-S[a]);
for (const c of ranked) {
  const cac = total? S[c]/total : 0;
  const bar = '█'.repeat(Math.round(cac*50));
  console.log(padR(c,26)+padL(S[c],6)+padL((100*cac).toFixed(1)+'%',9)+'   '+bar);
}

// IDC table
console.log('\nIDC (ИРа) — classifier breadth = Q_i / M:');
console.log(padR('Class',26)+padL('Q_i',5)+padL('M',5)+padL('IDC',8));
for (const c of ranked) {
  const Q = observedLemmas[c].size;
  const M = inv[c].size;
  const idc = M? Q/M : 0;
  console.log(padR(c,26)+padL(Q,5)+padL(M,5)+padL(idc.toFixed(3),8));
}

// Construction-type breakdown
console.log('\nConstruction-type breakdown per class:');
for (const c of ranked) {
  if (S[c]===0) continue;
  const cts = Object.entries(byCT[c]).sort((a,b)=>b[1]-a[1]);
  console.log(`  ${ABBR[c]} (${S[c]}):  ` + cts.map(([k,v])=>`${k}=${v}`).join(', '));
}

// Top classifiers per class
console.log('\nTop classifier lemmas per class (count):');
for (const c of ranked) {
  if (S[c]===0) continue;
  const lc = Object.entries(lemmaCounts[c]).sort((a,b)=>b[1]-a[1]).slice(0,6);
  const empty = S[c] - Object.values(lemmaCounts[c]).reduce((a,b)=>a+b,0);
  const parts = lc.map(([k,v])=>`${k}=${v}`);
  if (empty>0) parts.push(`(unmatched=${empty})`);
  console.log(`  ${ABBR[c]}:  ` + parts.join(', '));
}
