#!/usr/bin/env node
// Coverage matrix for a single emonym across 8 cryptoclasses × 21 variants.
// Reads data/citations.tsv. Usage: node pipeline/coverage_miedo.js [emonym]

const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const FROM_GOLD = process.argv.includes('--from-gold');
const EMONYM = (process.argv.slice(2).find(a => !a.startsWith('--')) || 'miedo').toLowerCase();
// --from-gold reads the curated gold set (exclusions + duplicate drop-list
// already applied by build_gold.js); default reads the raw extraction.
const TSV = FROM_GOLD
  ? path.join(REPO, 'data', 'derived', `gold-${EMONYM}.tsv`)
  : path.join(REPO, 'data', 'citations.tsv');

const COUNTRIES = ['AR','BO','CL','CO','CR','CU','DO','EC','ES','GT','HN','MX','NI','PA','PE','PR','PY','SV','UY','VE','US'];
const CLASSES = ['Res Liquidae','Res Filiformes','Res Rotundae','Res Longae Penetrantes','Res Acutae','Res Parvae','Res Planae','Res Continens'];
const ABBR = {
  'Res Liquidae':'LIQ','Res Filiformes':'FIL','Res Rotundae':'ROT',
  'Res Longae Penetrantes':'PEN','Res Acutae':'ACU','Res Parvae':'PAR',
  'Res Planae':'PLA','Res Continens':'CON',
};

const text = fs.readFileSync(TSV, 'utf8');
const lines = text.split(/\r?\n/).filter(Boolean);
const header = lines.shift().split('\t');
const iClass = header.indexOf('cryptoclass');
const iEmonym = header.indexOf('emonym');
const iCountry = header.indexOf('country');

// counts[class][country] = n
const counts = {};
for (const cl of CLASSES) { counts[cl] = {}; for (const c of COUNTRIES) counts[cl][c] = 0; }

let total = 0;
for (const line of lines) {
  const cols = line.split('\t');
  if (cols[iEmonym].toLowerCase() !== EMONYM) continue;
  const cl = cols[iClass];
  const cc = cols[iCountry];
  if (counts[cl] && counts[cl][cc] !== undefined) { counts[cl][cc]++; total++; }
}

// ---- Print matrix ----
const pad = (s, n) => String(s).padStart(n);
const padR = (s, n) => String(s).padEnd(n);

console.log(`\nCoverage matrix for "${EMONYM}"  (${total} citations${FROM_GOLD ? ', curated gold set' : ', raw extraction'})\n`);

// header row
let h = padR('', 5);
for (const cl of CLASSES) h += pad(ABBR[cl], 5);
h += pad('TOT', 6) + '  ' + pad('cls', 4);
console.log(h);
console.log('-'.repeat(h.length));

const classFilled = {}; for (const cl of CLASSES) classFilled[cl] = 0;
const emptyCells = [];

for (const cc of COUNTRIES) {
  let row = padR(cc, 5);
  let rowTot = 0, rowClasses = 0;
  for (const cl of CLASSES) {
    const n = counts[cl][cc];
    row += pad(n === 0 ? '·' : n, 5);
    rowTot += n;
    if (n > 0) { rowClasses++; classFilled[cl]++; }
    else emptyCells.push(`${cc}×${ABBR[cl]}`);
  }
  row += pad(rowTot, 6) + '  ' + pad(`${rowClasses}/8`, 4);
  console.log(row);
}

console.log('-'.repeat(h.length));
let f = padR('cls', 5);
for (const cl of CLASSES) { f += pad(`${classFilled[cl]}`, 5); }
f += pad(total, 6);
console.log(f);
let f2 = padR('/21', 5);
for (const cl of CLASSES) { f2 += pad('', 5); }
console.log(f2.trimEnd() + '   (variants covered per class, out of 21)');

// ---- Gap summary ----
const totalCells = CLASSES.length * COUNTRIES.length;
const filledCells = totalCells - emptyCells.length;
console.log(`\nCell coverage: ${filledCells}/${totalCells} (${(100*filledCells/totalCells).toFixed(1)}%) filled, ${emptyCells.length} empty.`);

// variants with zero anywhere
const deadVariants = COUNTRIES.filter(cc => CLASSES.every(cl => counts[cl][cc] === 0));
if (deadVariants.length) console.log(`Variants with NO ${EMONYM} data at all: ${deadVariants.join(', ')}`);

const deadClasses = CLASSES.filter(cl => COUNTRIES.every(cc => counts[cl][cc] === 0));
if (deadClasses.length) console.log(`Classes with NO ${EMONYM} data at all: ${deadClasses.map(c=>ABBR[c]).join(', ')}`);

// per-class variant coverage, ranked
console.log(`\nPer-class variant coverage (filled / 21):`);
for (const cl of CLASSES.slice().sort((a,b)=>classFilled[b]-classFilled[a])) {
  const n = classFilled[cl];
  const bar = '█'.repeat(n) + '·'.repeat(21-n);
  console.log(`  ${padR(ABBR[cl],4)} ${pad(n,2)}/21  ${bar}`);
}

// per-variant class coverage, ranked
console.log(`\nPer-variant class coverage (filled / 8):`);
const variantClasses = {};
for (const cc of COUNTRIES) variantClasses[cc] = CLASSES.filter(cl=>counts[cl][cc]>0).length;
for (const cc of COUNTRIES.slice().sort((a,b)=>variantClasses[b]-variantClasses[a])) {
  const n = variantClasses[cc];
  const bar = '█'.repeat(n) + '·'.repeat(8-n);
  console.log(`  ${padR(cc,3)} ${pad(n,1)}/8  ${bar}`);
}
