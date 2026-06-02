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
const { loadDropIds } = require('./drop_ids');
const { loadReassignments } = require('./reassignments');

const REPO = path.resolve(__dirname, '..');
const EMONYM = (process.argv[2] || 'miedo').toLowerCase();

// ---- Curation rules (see _inventory-decisions.md) --------------------

// Field corrections, keyed by citation id. Applied to the row BEFORE the
// exclusion check, so a corrected (now non-blank) row is not swept up by the
// non-citation-fragment rule below. See _inventory-decisions.md 2026-06-01
// "Problem 1 — blank-lemma rows". These fix legacy xlsx column mis-tags; the
// raw data/citations.tsv is left untouched.
const CORRECTIONS = {
  // `fluir` is intransitive but the legacy xlsx filed these in the objective
  // column, so the (subj-intransitive-scoped) `fluir` seed never matched.
  'liq-miedo-bo-0001': { construction_type: 'verbal-subject-intransitive', classifier_lemma: 'fluir' },
  'liq-miedo-do-0001': { construction_type: 'verbal-subject-intransitive', classifier_lemma: 'fluir' },
  'liq-miedo-es-0001': { construction_type: 'verbal-subject-intransitive', classifier_lemma: 'fluir' },
  'liq-miedo-pe-0001': { construction_type: 'verbal-subject-intransitive', classifier_lemma: 'fluir' },
  // `rebosar` is a verb: es-0012 intransitive ("a rebosar de … miedos"),
  // ve-0001 transitive ("el miedo lo rebosó"); mx-0004 "el reboso" is the
  // nominalisation — lemma still `rebosar`, construction stays substantive.
  'liq-miedo-es-0012': { construction_type: 'verbal-subject-intransitive', classifier_lemma: 'rebosar' },
  'liq-miedo-ve-0001': { construction_type: 'verbal-subject-transitive', classifier_lemma: 'rebosar' },
  'liq-miedo-mx-0004': { classifier_lemma: 'rebosar' },
};

// Return a reason string if the row is EXCLUDED, else null.
function exclusionReason(r) {
  // 2026-06-01: `nivel de` is a measurement collocation, not Res Planae.
  if (r.cryptoclass === 'Res Planae' && r.classifier_lemma === 'nivel de') {
    return 'measurement-collocation: nivel de (see _inventory-decisions.md 2026-06-01)';
  }
  // 2026-06-01 Problem 1: non-citation fragments. Fires only when BOTH the
  // classifier_lemma is blank AND the emonym token is absent from the citation
  // text — isolates extraction garbage ("Encontrar", "corazones blaugranas,")
  // without touching genuine blank-lemma rows (all of which contain `miedo`).
  if (!r.classifier_lemma && !(r.citation_es || '').toLowerCase().includes(EMONYM)) {
    return 'non-citation-fragment: blank lemma + no emonym token';
  }
  // 2026-06-01 Problem 1: disputed reflexive-bind frame. The experiencer binds
  // *themselves* to the emonym ("se amarraron a sus miedos"), syntactically
  // closer to Continens-into than to canonical Filiformes. (Audit §6 claimed
  // this row was deleted; it had in fact re-entered as a non-disputed row.)
  if (r.id === 'fil-miedo-co-0001') {
    return 'disputed: reflexive-bind ("se amarraron a sus miedos") — Continens-into, not Filiformes';
  }
  // 2026-06-01 Problem 1: `profundo` is an intensity attributive, not the
  // container schema; seeding it would over-recruit ("profundo amor", etc.)
  // across emonyms on re-extraction. Excluded pending review.
  if (r.id === 'con-miedo-mx-0027') {
    return 'intensity-attributive: "profundo miedo" is intensity, not container schema';
  }
  // 2026-06-02 Problem 1.5: rows whose citation is about `temor`, a distinct
  // lexeme (near-synonym of miedo). Donina's method profiles one lexeme per
  // emonym, so these leave the miedo gold set. temor is a Phase-4 candidate.
  if (['con-miedo-cr-0001', 'con-miedo-hn-0001', 'con-miedo-py-0001'].includes(r.id)) {
    return 'wrong-lexeme: citation is about "temor", a distinct lexeme (Phase-4 candidate)';
  }
  // 2026-06-02 curation sweep B1: `círculo de` is the "círculo vicioso"
  // (vicious-cycle) idiom — names a self-perpetuating cycle, not the
  // round-object image that defines Res Rotundae. Frozen-collocation
  // exclusion applied CLASS-WIDE, parallel to `nivel de` (user decision).
  // Catches the reassigned tristeza rows (×10) + 1 native miedo row
  // (`rot-miedo-ar-0006`, "círculo de miedo"). The `rot-miedo-us-0003` row
  // keeps its `envuelto en` match (círculo there is incidental context).
  if (r.cryptoclass === 'Res Rotundae' && r.classifier_lemma === 'círculo de') {
    return 'frozen-collocation: círculo (vicioso) de — cycle idiom, not round-object image';
  }
  // 2026-06-02 sweep A2: "Al pie de mi amor clavado" reads as "my nailed
  // beloved" (a person / Christ image), not the emotion amor (user decision).
  if (r.id === 'pen-amor-mx-0006') {
    return 'wrong-referent: "mi amor clavado" = beloved person, not the emotion';
  }
  // 2026-06-02 sweep B2: in "lágrimas de tristeza rodaban", `rodar` scopes
  // the tears, not tristeza itself — not a Res Rotundae use (user decision).
  if (r.id === 'rot-tristeza-ec-0001') {
    return 'classifier-scopes-other-noun: rodar applies to lágrimas, not tristeza';
  }
  return null;
}

// ---- Load ------------------------------------------------------------
const tsv = fs.readFileSync(path.join(REPO, 'data', 'citations.tsv'), 'utf8');
const lines = tsv.split(/\r?\n/).filter(Boolean);
const header = lines.shift().split('\t');
const idx = Object.fromEntries(header.map((h, i) => [h, i]));

const dropIds = loadDropIds(REPO);   // duplicate drop-list (dedupe.js)
const reassign = loadReassignments(REPO);  // mis-filed-emonym corrections
let dropped = 0;

const kept = [], excluded = [];
for (const line of lines) {
  const cols = line.split('\t');
  // effective emonym: a reassigned row leaves its mis-filed sheet and joins
  // the correct emonym's gold set.
  const effEmonym = (reassign.get(cols[idx.id]) || cols[idx.emonym] || '').toLowerCase();
  if (effEmonym !== EMONYM) continue;
  if (dropIds.has(cols[idx.id])) { dropped++; continue; }  // skip cross-dataset duplicates
  const r = {
    id: cols[idx.id],
    cryptoclass: cols[idx.cryptoclass],
    emonym: effEmonym,
    country: cols[idx.country],
    construction_type: cols[idx.construction_type],
    classifier_lemma: (cols[idx.classifier_lemma] || '').trim(),
    citation_es: cols[idx.citation_es],
    source_file: cols[idx.source_file],
    source_sheet: cols[idx.source_sheet],
    source_locator: cols[idx.source_locator],
  };
  const c = CORRECTIONS[r.id];
  if (c) Object.assign(r, c);
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
  `gold-${EMONYM}: kept ${kept.length}, excluded ${excluded.length}, dropped ${dropped} (duplicates)\n` +
  `  ${goldTsv}\n  ${goldJsonl}\n  ${exclTsv} (negatives)\n\n` +
  `Kept by class:\n` +
  Object.entries(byClass).sort((a, b) => b[1] - a[1]).map(([k, v]) => `  ${String(v).padStart(4)}  ${k}`).join('\n') + '\n'
);
