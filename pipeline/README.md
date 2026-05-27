# `pipeline/` — data acquisition and processing code

Code that produces or transforms files in `data/`. Everything here should be
re-runnable; outputs go to `data/` (canonical) or `data/derived/` (analysis).

## Current contents

- `extract_wide.js` — reads the wide-format `.xlsx` files in
  `../data/legacy-xlsx/` and writes ~2,900 citation rows (2,906 at last run)
  to `../data/citations.tsv`. Covers all 8 cryptoclasses; *Res Liquidae* is
  read from the wide-form `RES LIQUIDAE COR.xlsx` rather than the original
  long-form `RES LIQUIDAE.xlsx`.

## Planned (ROADMAP Phase 2)

- Corpus-query layer (CORPES XXI, Corpus del Español, esTenTen / Sketch
  Engine) issuing `(emonym × classifier × variant)` queries.
- LLM-assisted filtering and construction-type tagging.
- Append-only writer that adds new rows to `../data/citations.tsv` without
  disturbing the manually-collected gold-standard subset.
