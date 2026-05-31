#!/usr/bin/env node
// Freeze the manually-collected citations for one emonym into the Phase 1
// gold set: data/derived/gold-<emonym>.{tsv,jsonl}.
//
// Applies the curation decisions logged in
// notes/cryptoclasses/_inventory-decisions.md. The raw data/citations.tsv
// is NOT modified — exclusions are applied here, downstream.
//
// Usage: node pipeline/build_gold.js [emonym]

const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const EMONYM = (process.argv[2] || 'miedo').toLowerCase();

// ---- Curation rules (see _inventory-decisions.md) --------------------
// Return a reason string if the row is EXCLUDED, else null.
function exclusionReason(r) {
  // 2026-06-01: `nivel de` is a measurement collocation, not Res Planae.
  if (r.cryptoclass === 'Res Planae' && r.classifier_lemma === 'nivel de') {
    return 'measurement-collocation: nivel de (see _inventory-decisions.md 2026-06-01)';
  }
  return null;
}

// ---- Load ------------------------------------------------------------
const tsv = fs.readFileSync(path.join(REPO, 'data', 'citations.tsv'), 'utf8');
const lines = tsv.split(/\r?\n/).filter(Boolean);
const header = lines.shift().split('\t');
const idx = Object.fromEntries(header.map((h, i) => [h, i]));

const kept = [], excluded = [];
for (const line of lines) {
  const cols = line.split('\t');
  if ((cols[idx.emonym] || '').toLowerCase() !== EMONYM) continue;
  const r = {
    id: cols[idx.id],
    cryptoclass: cols[idx.cryptoclass],
    emonym: cols[idx.emonym],
    country: cols[idx.country],
    construction_type: cols[idx.construction_type],
    classifier_lemma: (cols[idx.classifier_lemma] || '').trim(),
    citation_es: cols[idx.citation_es],
    source_file: cols[idx.source_file],
    source_sheet: cols[idx.source_sheet],
    source_locator: cols[idx.source_locator],
  };
  const reason = exclusionReason(r);
  if (reason) excluded.push({ ...r, exclusion_reason: reason });
  else kept.push(r);
}

kept.sort((a, b) => a.id.localeCompare(b.id));
excluded.sort((a, b) => a.id.localeCompare(b.id));

// ---- Write gold TSV --------------------------------------------------
const OUT_COLS = ['id','cryptoclass','emonym','country','construction_type','classifier_lemma','citation_es','source','source_file','source_sheet','source_locator'];
function tsvRow(r) {
  return OUT_COLS.map(c => c === 'source' ? 'manual' : (r[c] == null ? '' : String(r[c]))).join('\t');
}
const goldTsv = path.join(REPO, 'data', 'derived', `gold-${EMONYM}.tsv`);
fs.writeFileSync(goldTsv, [OUT_COLS.join('\t'), ...kept.map(tsvRow)].join('\n') + '\n', 'utf8');

// ---- Write gold JSONL ------------------------------------------------
const goldJsonl = path.join(REPO, 'data', 'derived', `gold-${EMONYM}.jsonl`);
const jsonl = kept.map(r => JSON.stringify({ ...r, source: 'manual' })).join('\n');
fs.writeFileSync(goldJsonl, jsonl + '\n', 'utf8');

// ---- Write excluded sidecar (negative calibration set) ---------------
const exclTsv = path.join(REPO, 'data', 'derived', `gold-${EMONYM}-excluded.tsv`);
const EXC_COLS = [...OUT_COLS.filter(c => c !== 'source'), 'exclusion_reason'];
function excRow(r) {
  return EXC_COLS.map(c => r[c] == null ? '' : String(r[c])).join('\t');
}
fs.writeFileSync(exclTsv, [EXC_COLS.join('\t'), ...excluded.map(excRow)].join('\n') + '\n', 'utf8');

// ---- Summary ---------------------------------------------------------
const byClass = {};
for (const r of kept) byClass[r.cryptoclass] = (byClass[r.cryptoclass] || 0) + 1;
process.stderr.write(
  `gold-${EMONYM}: kept ${kept.length}, excluded ${excluded.length}\n` +
  `  ${goldTsv}\n  ${goldJsonl}\n  ${exclTsv} (negatives)\n\n` +
  `Kept by class:\n` +
  Object.entries(byClass).sort((a, b) => b[1] - a[1]).map(([k, v]) => `  ${String(v).padStart(4)}  ${k}`).join('\n') + '\n'
);
