# `pipeline/` — data acquisition and processing code

Code that produces or transforms files in `data/`. Everything here should be
re-runnable; outputs go to `data/` (canonical) or `data/derived/` (analysis).

## Current contents

- `extract_wide.js` — reads the wide-format `.xlsx` files in
  `../data/legacy-xlsx/` and writes 1,589 citation rows to
  `../data/citations.tsv`. Covers every cryptoclass except *Res Liquidae*
  (which has its own long-form schema; not yet wired in).

## Planned (ROADMAP Phase 2)

- Corpus-query layer (CORPES XXI, Corpus del Español, esTenTen / Sketch
  Engine) issuing `(emonym × classifier × variant)` queries.
- LLM-assisted filtering and construction-type tagging.
- Append-only writer that adds new rows to `../data/citations.tsv` without
  disturbing the manually-collected gold-standard subset.
