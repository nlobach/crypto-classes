# `pipeline/` — data acquisition and processing code

Code that produces or transforms files in `data/`. Everything here should be
re-runnable; outputs go to `data/` (canonical) or `data/derived/` (analysis).

## Current contents

- `extract_wide.js` — reads the wide-format `.xlsx` files in
  `../data/legacy-xlsx/` and writes the citation rows to
  `../data/citations.tsv`. Covers all 8 cryptoclasses; *Res Liquidae* is
  read from the wide-form `RES LIQUIDAE COR.xlsx`. Skips `СПОРНЫЕ`
  (disputed) columns at parse time (Conservative policy).
- `find_disputed.js` — audits the legacy xlsx for any remaining `СПОРНЫЕ`
  cells (used to confirm disputed-case deletion).
- `coverage_miedo.js` — coverage matrix for one emonym across 8 classes ×
  21 variants. `node coverage_miedo.js [emonym]`.
- `aggregate_profile.js` — pooled CAC / IDC / construction-type profile for
  one emonym. `node aggregate_profile.js [emonym]`.
- `membership_matrix.js` — cross-emonym membership matrix: pooled membership
  verdict (`++`/`+`/`~`/`·`) per `(emonym × cryptoclass)`, CAC% table,
  per-cell variant-coverage matrix, and the "green-light" set of cells dense
  enough for per-variant statistics. Applies the curation rules in
  `../notes/cryptoclasses/_inventory-decisions.md` (`nivel de` excluded
  class-wide); `--raw` keeps `nivel de`. Output written up in
  `../data/derived/membership-matrix.md`.
- `build_gold.js` — freezes one emonym's manual citations into the Phase 1
  gold set `../data/derived/gold-<emonym>.{tsv,jsonl}`, applying the
  curation rules in `../notes/cryptoclasses/_inventory-decisions.md`
  (currently: exclude `nivel de` from Res Planae). Excluded rows go to
  `gold-<emonym>-excluded.tsv` as a negative-calibration set.
- `generate_queries.js` — Phase 2 step 2. Crosses every
  `(emonym × classifier-pattern × variant)` into
  `../data/derived/query-manifest.tsv` (17,325 queries for the 5 emonyms
  in scope).

## Phase 2 pipeline — stage contract

The pipeline is a chain of stages, each with a defined input/output so they
build and test independently. The *miedo* gold set is the calibration
target.

```
emonyms.tsv + classifiers.tsv
        │  generate_queries.js          [step 2: query generation]   ✅ built
        ▼
query-manifest.tsv  (17,325 queries: 5 emonym × 165 pattern × 21 variant)
        │  adapters/<corpus>.js         [step 3: corpus access]      ⏳ needs corpus decision
        ▼
kwic-raw.tsv        (one concordance line per hit)
        │  freq_filter.js               [step 5: first-pass filter]  ⏳
        ▼
kwic-candidates.tsv
        │  dedup.js                     [step 6: dedup]              ⏳
        ▼
kwic-deduped.tsv
        │  llm_tag.js                   [Phase 3: LLM filter+tag]    ⏳
        ▼
citations-llm.tsv   (append to citations.tsv with source=llm-tagged)
```

Everything downstream of the corpus adapter is blocked on the
**corpus-access decision** (bottom of this file).

### Query manifest format (`data/derived/query-manifest.tsv`)

One row per `(emonym × classifier-pattern × variant)`; corpus-neutral.

| column | meaning |
|---|---|
| `query_id` | stable slug, e.g. `con-miedo-vivir-en-ar` |
| `emonym` / `cryptoclass` / `construction_type` / `classifier_pattern` | inherited from `classifiers.tsv` |
| `variant` | ISO-2 country code |
| `window` | co-occurrence half-window (4; Boriskina's (4,4), theory §8.3) |
| `co_terms` | `emonym\|pattern` — the two anchors to place within ±window |
| `status` | `pending` → `done` / `zero` / `error` (adapters update) |

### Corpus-adapter interface (step 3 — to build)

```js
// adapters/<corpus>.js
async function runQuery(q) {            // q: a parsed manifest row
  return { hits: [ /* KWIC */ ], status: 'done'|'zero'|'error' };
}
```

A **KWIC** row (`kwic-raw.tsv`): `query_id`, the denormalised manifest
fields, plus `classifier_hit` (actual surface form matched), `sentence`
(the concordance line), `source` (corpus id + document ref).

Adapters MUST: cache raw responses on disk (re-runs don't re-hit the
corpus); respect rate limits / ToS; and set `status=zero` (not drop) on
empty results — an empty cell is a `Sᵢⱼ = 0` data point, per the
project's "absence is a data point" policy.

### First-pass frequency filter (step 5)

Before any LLM cost: drop cells whose raw co-occurrence count is below a
low threshold `T` (start `T=1`). Sub-`T` cells are logged to
`zero-cells.tsv`, not silently discarded. This is what makes the ~17k
(eventually ~126k) query space affordable for LLM tagging.

### LLM filter + tag (Phase 3)

Per surviving KWIC line the LLM decides: genuine cryptoclass use vs.
literal/unrelated; construction type (12-slug vocab, `data/SCHEMA.md`);
disputed?. Few-shot prompts **seeded from the gold set**; precision
**calibrated against it** (target ≥ 0.90 on the 417 *miedo* positives +
the 93 `gold-miedo-excluded.tsv` negatives) before trusting the LLM at
scale. Model id + prompt + decision stored per row for reproducibility.

## Scale

- Current 5 emonyms: **17,325** queries.
- Full Phase-4 breadth (~150 emonyms × ~40 patterns × 21 variants):
  ~126,000 queries. Most return zero; the first-pass filter is the lever.
- Phase 2 exit criterion: >10,000 raw KWIC lines for *miedo* alone across
  the well-covered variants.

## Open decision — which corpus first

The corpus adapter cannot be built until this is fixed (it determines
query syntax, variant-tagging method, access mechanism, and licensing):

| Corpus | Size | Variant tagging | Access | Note |
|---|---|---|---|---|
| **Corpus del Español: Web/Dialects** (Davies) | ~2 bn | 21 variants, explicit | web UI; no clean bulk API | Closest analog to Donina's GloWbE — methodological first choice |
| **NOW Spanish** (Davies) | growing | 21 variants | web UI | Donina's NOW analog |
| **CORPES XXI** (RAE) | ~400 m | region tags, ES-heavy | web UI / limited API | Authoritative tiebreaker; weak on Central America |
| **esTenTen** (Sketch Engine) | ~20 bn | geo-IP (noisier) | **REST API** (paid) | Largest; the only clean programmatic API |

Trade-off: Davies mirrors Donina structurally but scraping the web UI is
fragile / possibly against ToS; Sketch Engine has a real API but noisier
geo-IP variant tagging. The choice also depends on what access /
credentials are actually available.
