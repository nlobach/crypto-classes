#!/usr/bin/env node
// Deterministic duplicate detector for data/citations.tsv.
//
// Emits data/derived/duplicate-drops.tsv: a drop-list of citation ids that
// downstream consumers (build_gold.js, membership_matrix.js, the profile
// scripts) can filter out. citations.tsv itself is NOT modified — this is the
// same downstream-curation pattern as the `nivel de` exclusion. Reversible:
// delete a row from the drop-list (or the whole file) to undo.
//
// Survivor rule per duplicate group (first match wins, fully deterministic):
//   1. cross-emonym  → keep the row whose emonym token is present in the text
//   2. cross-country → keep the row in the strongest variant (most citations),
//                      but US never survives (syndication sink); if no
//                      strong-corpus variant (AR/ES/MX/CO/CL) remains, the
//                      string is non-variant-distinctive and the whole group
//                      is dropped. Policy 2026-06-02; see _inventory-decisions.md.
//   3. tie-break     → lowest id
//
// Usage: node pipeline/dedupe.js  [--write]
//   (default = report only; --write emits the drop-list file)

const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const WRITE = process.argv.includes('--write');

const lines = fs.readFileSync(path.join(REPO, 'data', 'citations.tsv'), 'utf8').split(/\r?\n/).filter(Boolean);
const H = lines.shift().split('\t');
const I = Object.fromEntries(H.map((x, i) => [x, i]));
const rows = lines.map(l => {
  const c = l.split('\t');
  return { id: c[I.id], em: c[I.emonym], co: c[I.country], cl: c[I.cryptoclass], es: (c[I.citation_es] || '').trim() };
});

// --- corpus strength = how many citations each variant has (proxy for "likely source") ---
const strength = {};
for (const r of rows) strength[r.co] = (strength[r.co] || 0) + 1;

// --- strong-corpus variants: the only "safe home" for a duplicated (i.e.
// non-variant-distinctive) string. US is barred as a syndication sink — US
// Spanish corpora largely reprint origin-country text, so US never survives a
// cross-country duplicate, and a group with no strong-corpus member is dropped
// wholesale. Policy decided 2026-06-02; see _inventory-decisions.md. ---
const STRONG = new Set(['AR', 'ES', 'MX', 'CO', 'CL']);

// --- emonym token presence (stem match; `ira` needs a word boundary) ---
const STEM = { 'miedo': 'mied', 'tristeza': 'trist', 'amor': 'amor', 'alegría': 'alegr', 'ira': 'ira' };
function emonymPresent(r) {
  const t = r.es.toLowerCase();
  const st = STEM[r.em]; if (!st) return false;
  return r.em === 'ira' ? /(?<!\p{L})ira/u.test(t) : t.includes(st);
}

// --- junk = no emotion word at all in the text. `temor` (a miedo synonym) is
// recognised so its rows are NOT treated as junk; they are a separate
// mis-filing question, left in place and reported. ---
const ANY = ['mied', 'trist', 'amor', 'alegr', 'temor'];
function hasEmotionWord(es) {
  const t = es.toLowerCase();
  return ANY.some(s => t.includes(s)) || /(?<!\p{L})ira/u.test(t);
}

// --- normalise text so trivial near-dupes (whitespace, trailing punctuation, case) collapse ---
const norm = s => s.toLowerCase().replace(/\s+/g, ' ').replace(/[.,;:"'»«…]+$/, '').trim();

const drops = []; // {drop_id, keep_id, group_size, reason, dropped, kept, excerpt}
let byReason = {};

// --- keep-override: rows the "no emotion word" rule flags as junk but which
// are actually genuine citations truncated mid-token (the emonym fell off the
// stored excerpt). Reviewed 2026-06-01. Kept as genuine. ---
const KEEP_OVERRIDE = new Set([
  'liq-amor-es-0027',  // '…"Que fluya el amo[r]"' — real amor/fluir citation, truncated
  'fil-alegría-uy-0004', // '[alegría] desatada el domingo al ganar…' — real, truncated front
]);

// --- rule 1: junk (no emotion word) → drop wholesale, never kept ---
const genuine = [];
for (const r of rows) {
  if (hasEmotionWord(r.es) || KEEP_OVERRIDE.has(r.id)) { genuine.push(r); continue; }
  byReason['non-citation-fragment (no emotion word)'] = (byReason['non-citation-fragment (no emotion word)'] || 0) + 1;
  drops.push({ drop_id: r.id, keep_id: '', group_size: 1, reason: 'non-citation-fragment (no emotion word)',
    dropped: `${r.em}/${r.co}/${r.cl}`, kept: '', excerpt: r.es.slice(0, 70) });
}

// --- rule 2: dedup the genuine rows ---
const groups = {};
for (const r of genuine) (groups[norm(r.es)] = groups[norm(r.es)] || []).push(r);

let nGroups = 0;
for (const key in groups) {
  const g = groups[key];
  if (g.length < 2) continue;
  nGroups++;
  const cos = new Set(g.map(r => r.co)), ems = new Set(g.map(r => r.em));
  const crossCountry = ems.size === 1 && cos.size > 1;
  // rank candidates: emonym-present first, then strongest variant, then lowest id
  const ranked = g.slice().sort((a, b) =>
    (emonymPresent(b) - emonymPresent(a)) ||
    ((strength[b.co] || 0) - (strength[a.co] || 0)) ||
    (a.id < b.id ? -1 : 1));

  // default survivor = top-ranked row
  let keep = ranked[0];
  let toDrop = ranked.slice(1);
  let reason = ems.size > 1 ? 'cross-emonym (kept token-present)'
             : crossCountry ? 'cross-country (kept strongest variant)'
             : 'exact-repeat-same-cell';

  // US-exclusion policy — cross-country duplicates only (a duplicated string is
  // non-variant-distinctive, so it must not be credited to US or to a thin variant).
  if (crossCountry && keep.co === 'US') {
    const bestNonUs = ranked.find(r => r.co !== 'US');
    if (bestNonUs && STRONG.has(bestNonUs.co)) {
      keep = bestNonUs;                                  // strong home exists
      toDrop = ranked.filter(r => r.id !== keep.id);     // drop the rest, incl. US
      reason = 'cross-country (US dropped; kept strongest non-US)';
    } else {
      keep = null;                                       // no safe home → credit nobody
      toDrop = ranked.slice();
      reason = 'cross-country non-diagnostic; no strong-corpus home (drop all)';
    }
  }

  byReason[reason] = (byReason[reason] || 0) + toDrop.length;
  for (const r of toDrop) {
    drops.push({
      drop_id: r.id, keep_id: keep ? keep.id : '', group_size: g.length, reason,
      dropped: `${r.em}/${r.co}/${r.cl}`, kept: keep ? `${keep.em}/${keep.co}/${keep.cl}` : '',
      excerpt: r.es.slice(0, 70),
    });
  }
}

console.log(`Duplicate groups: ${nGroups}  |  rows to drop: ${drops.length}`);
console.log('By reason:');
for (const k in byReason) console.log(`  ${String(byReason[k]).padStart(3)}  ${k}`);

if (WRITE) {
  const COLS = ['drop_id', 'keep_id', 'group_size', 'reason', 'dropped', 'kept', 'excerpt'];
  const out = [COLS.join('\t'), ...drops.map(d => COLS.map(c => d[c]).join('\t'))].join('\n') + '\n';
  const outPath = path.join(REPO, 'data', 'derived', 'duplicate-drops.tsv');
  fs.writeFileSync(outPath, out, 'utf8');
  console.log(`\nWrote ${drops.length} drops → ${outPath}`);
} else {
  console.log('\n(report only — pass --write to emit data/derived/duplicate-drops.tsv)');
  console.log('\nSample of decisions:');
  for (const d of drops.slice(0, 12)) console.log(`  drop ${d.drop_id} (${d.dropped}) keep ${d.keep_id} (${d.kept})  [${d.reason.split(' ')[0]}]  "${d.excerpt}"`);
}
