# Roadmap

Phased plan for the Spanish cryptoclass project. Phases are sequenced but each
phase can produce drafts that are revised by later phases.

The plan reflects the **Data status** section of `CLAUDE.md`: the
manually-collected dataset (~2,900 citations after extraction, 5 emonyms,
uneven country coverage, thin per-classifier cell density) is insufficient
for Donina-style cross-variant claims. The core strategic move
is therefore to build an **automated corpus-sifting pipeline with LLM-assisted
filtering**, and to treat the existing manual data as the **gold-standard
validation set** for that pipeline.

## Phase 0 — Infrastructure (the `notes/` directory)

Goal: turn the references into on-demand, English-language working notes so
that future sessions do not re-open the PDFs for routine work.

- [ ] `notes/glossary.md` — trilingual RU / EN / ES table for the core terms
      (cryptoclass, classifier, collostruction, metaphoronym, emonym, covert
      categoriality, IDC, CAC, *идиом* as variety, …). Mark provisional Spanish
      equivalents with *(?)* until the user / advisor confirms them.
- [ ] `notes/theory-boriskina.md` — extracted summary of Boriskina (2011):
      definition of cryptoclass, classifier types, collostructions, indices
      (IDC = ИРа, CAC = ПоКА) with formulas.
- [ ] `notes/methodology-donina.md` — extracted summary of Donina (2016):
      how to build a per-emonym cryptoclass profile across language variants;
      how variants are compared.
- [ ] `notes/cryptoclasses/<class>.md` — one file per class. Each contains:
      prototype, Russian and English original classifier inventories, Spanish
      classifier seeds (extracted from the corresponding `.xlsx` header row).
- [x] `data/SCHEMA.md` — exact column and row conventions for the long-form
      TSVs that replaced the eight `.xlsx` files; also documents the legacy
      xlsx quirks (numbered citations + `TOTAL N`, `СПОРНЫЕ`, the long-form
      schema of `RES LIQUIDAE.xlsx`). Companion code: `pipeline/extract_wide.js`.
- [ ] `notes/corpora.md` — decision record on which Spanish corpora are used,
      access method (web scrape, API, downloaded dump), country-tagging
      coverage, licensing. Candidates: CORPES XXI, Corpus del Español
      (Web/Dialects), esTenTen via Sketch Engine, news corpora.

Exit criterion: a new contributor (or a future Claude session) can do
end-to-end work on the project by reading only `CLAUDE.md` plus the relevant
`notes/` file(s), never reopening the source PDFs.

## Phase 1 — Pilot: complete *miedo* manually, end-to-end

Goal: finish the most-advanced emonym in the current data. The output of this
phase serves two purposes — a stand-alone proof-of-concept *and* the
gold-standard validation set for the pipeline built in Phase 2.

- [ ] Verify *miedo* citations are present for all 8 cryptoclasses × 21
      variants (gaps recorded explicitly, not silently empty).
- [ ] Resolve the `СПОРНЫЕ` cases for *miedo* using the criteria written into
      `notes/methodology-donina.md`.
- [ ] Compute IDC and CAC for *miedo* per variant.
- [ ] Produce a one-page cryptoclass profile for *miedo*.
- [ ] Freeze the resulting `(emonym, classifier, variant, citation,
      construction-type)` records as the **gold set** in
      `data/derived/gold-miedo.{tsv,jsonl}`.

## Phase 2 — Automated corpus-sifting pipeline

Goal: scale collection from ~2,900 citations to the 5 000–15 000 range needed
for variant-level statistics, without re-doing the manual labour.

Architecture (high level — detailed design in `pipeline/README.md`, to be
created):

1. **Classifier catalogue.** For each (cryptoclass, construction-type) the
   `notes/cryptoclasses/<class>.md` files define a list of Spanish classifier
   lexemes / patterns (e.g. *envuelto en*, *nivel de*, *a punta de*, *plano*).
2. **Query generation.** For each `(emonym × classifier-pattern × variant)`,
   build a corpus query — co-occurrence within a window, with country
   filtering where the corpus supports it.
3. **Corpus access layer.** Adapter per corpus (CORPES XXI scraping or HTTP,
   Corpus del Español Web/Dialects, Sketch Engine API, possibly raw web
   crawl with country-TLD heuristics for variants the academic corpora cover
   poorly). Cache responses locally.
4. **Raw KWIC export.** Concordance lines written to a single normalised
   `(emonym, classifier_hit, surface_form, sentence, source, variant)` table.
5. **Deduplication** across corpora and across queries.

Exit criterion: ability to produce a raw candidate pool of >10 000 KWIC lines
for *miedo* alone across the well-covered variants.

## Phase 3 — LLM-assisted filtering and tagging

Goal: turn raw KWIC candidates into validated, classified citations
comparable to the manual data.

For each KWIC line the LLM is asked to decide:

- Is this a **genuine cryptoclass use** of the emonym, or a literal /
  unrelated use of the classifier? (e.g. *nivel de miedo* = "level of fear"
  is Res Planae; *a nivel de* used adverbially with *miedo* nearby is not.)
- Which **construction type** does it instantiate (subject-transitive,
  subject-intransitive, objective, instrumental, attributive, predicative,
  substantive)?
- Is it **disputed** (the `СПОРНЫЕ` category)? If so, why.

Engineering points:

- **Few-shot prompts seeded from the gold set** (Phase 1 *miedo* data).
- **Calibration against the gold set**: report precision/recall of LLM
  decisions before trusting them at scale.
- **Disagreement → human review queue**: anything the LLM marks low-confidence
  or that conflicts with a near-duplicate decision goes to manual review.
- **Reproducibility**: prompts, model id, and decisions stored with each
  citation so the pipeline can be re-run when models change.

Exit criterion: pipeline precision on the gold set is high enough that
machine-tagged citations can be reported alongside manual ones with an
explicit provenance flag (`source: manual | llm-tagged | llm-tagged+reviewed`).

## Phase 4 — Scale to Donina's emonym set

With Phases 2–3 operational, extend collection from 5 emonyms to ≈ 20.
Candidate set, mirroring Donina's English list translated to Spanish: *miedo,
tristeza, alegría, amor, esperanza, sorpresa, ira/enfado, pasión, interés,
felicidad, placer, orgullo, lástima, alivio, preocupación, angustia, terror,
duelo, simpatía, vergüenza, culpa, ansiedad*. Final set to be decided in
consultation with the advisor and recorded in `notes/methodology-donina.md`.

## Phase 5 — Cryptoclass inventory consolidation

By end of Phase 4 we should know whether **Res Continens** and **Res Planae**
behave as full cryptoclasses for Spanish emonyms or as marginal phenomena, and
whether any further class needs to be added (or any of the inherited six
dropped for Spanish). Decisions recorded in
`notes/cryptoclasses/_inventory-decisions.md`.

## Phase 6 — Cross-variant comparison

The point of using Donina's method: do Spanish-speaking countries diverge in
how they categorise emotions? Produce:

- per-emonym × per-variant IDC/CAC matrices,
- distance metrics between variants,
- a narrative section identifying any areal clustering (e.g. Cono Sur vs.
  Caribbean vs. Peninsular vs. Andean vs. Mexican-Central American).

Variants whose corpus coverage remains inadequate after Phase 4 are reported
as exploratory rather than dropped silently.

## Phase 7 — Scholarly writeup (Spanish)

Translate the consolidated findings into the Spanish-language thesis / article,
using `notes/glossary.md` to fix terminology, with the provisional Spanish
equivalents finalised by this point.

## Open questions (carry forward until resolved)

- Which Spanish corpora are practically usable (license, country tagging,
  programmatic access)? → captured in `notes/corpora.md` when decided.
- Final Spanish equivalents for the provisional terms (*coloestructura*,
  *metaforónimo*, *categorialidad encubierta*, IDC, CAC). → confirmed with
  advisor.
- Which LLM / model family for Phase 3, and what is the cost envelope for
  tagging at scale? → recorded in `pipeline/README.md`.
- Should `US` (United States Spanish) be treated as a full variant or as a
  contact / diaspora variety with different status? → decide before Phase 6.
- Do the `Приложение*.doc` appendices (cultural-historical notes,
  basic-emotions table, decision-tree rules) need to be extracted into
  `notes/`, or only referenced? → revisit during Phase 1 when the
  decision-tree rules become relevant.
- Final emonym list for Phase 4 — 23 (Donina-parity) or trimmed for Spanish
  semantic peculiarities (e.g. *cariño* vs. *amor*, *rabia* vs. *ira*). →
  decide before Phase 4 begins.
