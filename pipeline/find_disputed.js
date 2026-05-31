#!/usr/bin/env node
// Audit the legacy xlsx files for any remaining СПОРНЫЕ (disputed) cells.
// Used to confirm that disputed cases have been deleted from the sources.
// Usage: node pipeline/find_disputed.js

const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const REPO = path.resolve(__dirname, '..');
const REFS = path.join(REPO, 'data', 'legacy-xlsx');

const FILES = [
  'Res Acutae.xlsx',
  'RES CONTINENS.xlsx',
  'Res Filiformes.xlsx',
  'RES LIQUIDAE COR.xlsx',
  'Res Parvae.xlsx',
  'Res Penentrantes.xlsx',
  'Res Planae.xlsx',
  'Res Rotundae.xlsx',
];

const COUNTRIES = ['AR','BO','CL','CO','CR','CU','DO','EC','ES','GT','HN','MX','NI','PA','PE','PR','PY','SV','UY','VE','US'];
const COUNTRY_SET = new Set(COUNTRIES);

function normWS(s) {
  return String(s || '').replace(/\s+/g, ' ').trim().toLowerCase();
}

function main() {
  const disputed = [];

  for (const file of FILES) {
    const fpath = path.join(REFS, file);
    if (!fs.existsSync(fpath)) continue;

    const wb = XLSX.readFile(fpath);

    for (const sn of wb.SheetNames) {
      const ws = wb.Sheets[sn];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: '' });

      let firstCountryIdx = -1;
      for (let i = 0; i < rows.length; i++) {
        const c0 = String(rows[i][0] || '').trim().toUpperCase();
        if (COUNTRY_SET.has(c0)) { firstCountryIdx = i; break; }
      }
      if (firstCountryIdx < 0) continue;

      const headerIdx = firstCountryIdx - 1;
      if (headerIdx < 0) continue;

      const headerRowVals = rows[headerIdx];

      for (let c = 0; c < headerRowVals.length; c++) {
        const header = normWS(headerRowVals[c]);
        if (!header.includes('спорны')) continue;

        for (let r = firstCountryIdx; r < rows.length; r++) {
          const cc = String(rows[r][0] || '').trim().toUpperCase();
          if (!COUNTRY_SET.has(cc)) continue;

          const cell = rows[r][c];
          const txt = String(cell || '').trim();
          if (!txt || txt === '—' || txt === '-') continue;

          disputed.push({ file, sheet: sn, country: cc, citation: txt });
        }
      }
    }
  }

  if (disputed.length === 0) {
    console.log('No disputed cases found.');
    return;
  }

  console.log(`Found ${disputed.length} disputed citations:\n`);
  let currentFile = '', currentSheet = '';
  for (const d of disputed) {
    if (d.file !== currentFile) { currentFile = d.file; console.log(`\n=== ${d.file} ===`); }
    if (d.sheet !== currentSheet) { currentSheet = d.sheet; console.log(`\n  [${d.sheet}]`); }
    console.log(`    ${d.country}: ${d.citation.substring(0, 100)}`);
  }
}

main();
