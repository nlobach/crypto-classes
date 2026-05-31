#!/usr/bin/env node
// Phase 2, step 2 — Query generation.
// Cross every (emonym × classifier-pattern × variant) into a corpus-neutral
// query manifest. Corpus-specific query strings are produced later by each
// corpus adapter (Phase 2, step 3); this manifest is the shared work list.
//
// Reads:  data/emonyms.tsv, data/classifiers.tsv
// Writes: data/derived/query-manifest.tsv
//
// Usage: node pipeline/generate_queries.js

const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const COUNTRIES = ['AR','BO','CL','CO','CR','CU','DO','EC','ES','GT','HN','MX','NI','PA','PE','PR','PY','SV','UY','VE','US'];
const WINDOW = 4;  // co-occurrence half-window; Boriskina's (4,4), theory §8.3

function readTsv(file) {
  const lines = fs.readFileSync(path.join(REPO, file), 'utf8').split(/\r?\n/).filter(Boolean);
  const header = lines.shift().split('\t');
  return lines.map(l => Object.fromEntries(l.split('\t').map((v, i) => [header[i], v])));
}

const emonyms = readTsv('data/emonyms.tsv').map(r => r.emonym);
const classifierRows = readTsv('data/classifiers.tsv');

// Expand comma-separated seed lists into one (cryptoclass, construction, pattern) each.
const patterns = [];
for (const row of classifierRows) {
  const seeds = (row.seed_lemmas_es || '').split(',').map(s => s.trim()).filter(Boolean);
  for (const seed of seeds) {
    patterns.push({
      cryptoclass: row.cryptoclass,
      construction_type: row.construction_type,
      pattern: seed,
    });
  }
}

// slug helper for stable query ids
const ABBR = {'Res Liquidae':'liq','Res Filiformes':'fil','Res Rotundae':'rot','Res Longae Penetrantes':'pen','Res Acutae':'acu','Res Parvae':'par','Res Planae':'pla','Res Continens':'con'};
const slug = s => s.toLowerCase().replace(/[^a-z0-9áéíóúñ]+/g, '-').replace(/^-|-$/g, '');

const OUT = ['query_id','emonym','cryptoclass','construction_type','classifier_pattern','variant','window','co_terms','status'];
const rows = [OUT.join('\t')];
let n = 0;
const perEmonym = {}, perClass = {};

for (const emonym of emonyms) {
  for (const p of patterns) {
    for (const variant of COUNTRIES) {
      n++;
      const qid = `${ABBR[p.cryptoclass]}-${emonym}-${slug(p.pattern)}-${variant.toLowerCase()}`;
      // co_terms: the two lexical anchors a corpus adapter must place within ±window.
      const coTerms = `${emonym}|${p.pattern}`;
      rows.push([qid, emonym, p.cryptoclass, p.construction_type, p.pattern, variant, WINDOW, coTerms, 'pending'].join('\t'));
      perEmonym[emonym] = (perEmonym[emonym] || 0) + 1;
      perClass[p.cryptoclass] = (perClass[p.cryptoclass] || 0) + 1;
    }
  }
}

const outPath = path.join(REPO, 'data', 'derived', 'query-manifest.tsv');
fs.writeFileSync(outPath, rows.join('\n') + '\n', 'utf8');

// Summary
const lines = [];
lines.push(`Wrote ${n} queries to ${path.relative(REPO, outPath)}`);
lines.push(`  ${emonyms.length} emonyms × ${patterns.length} classifier-patterns × ${COUNTRIES.length} variants`);
lines.push('');
lines.push('Patterns per cryptoclass:');
for (const [k, v] of Object.entries(perClass).sort((a, b) => b[1] - a[1])) {
  lines.push(`  ${String(v / (emonyms.length * COUNTRIES.length)).padStart(3)}  ${k}`);
}
process.stderr.write(lines.join('\n') + '\n');
