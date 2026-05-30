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

For scale calibration: Donina started with 181 candidate emonyms, logged
~3,400 person-hours on stage-2 collection alone, and ended with 23 emonyms
after applying a critical-mass constraint (≥ 5 observations per
`(variant × cryptoclass)` cell, required for Pearson). A well-built LLM
pipeline plausibly compresses those 3,400 hours to ~100–200, but only if
pipeline precision is *measured* against the gold set rather than assumed —
that calibration step is what separates a defensible methodology from a
black box.

## Phase 0 — Infrastructure (the `notes/` directory)

Goal: turn the references into on-demand, English-language working notes so
that future sessions do not re-open the PDFs for routine work.

- [x] `notes/glossary.md` — trilingual RU / EN / ES table for the core terms
      (cryptoclass, classifier, collostruction, metaphoronym, emonym, covert
      categoriality, IDC, CAC, *идиом* as variety, …). Mark provisional Spanish
      equivalents with *(?)* until the user / advisor confirms them.
- [x] `notes/theory-boriskina.md` — extracted summary of Boriskina (2011):
      definition of cryptoclass, classifier types, collostructions, indices
      (IDC = ИРа, CAC = ПоКА) with formulas.
- [x] `notes/methodology-donina.md` — extracted summary of Donina (2016):
      how to build a per-emonym cryptoclass profile across language variants;
      how variants are compared.
- [x] `notes/cryptoclasses/<class>.md` — one file per class (eight in
      total). Each contains: prototype, Russian / English original
      classifier inventories, pointer to the Spanish seeds in
      `data/classifiers.tsv`, Spanish-specific divergences, construction-
      type structure notes, current data status from `citations.tsv`,
      query-design hints for Phase 2, and class-specific open questions.
      Provisional classes ([[res-continens]] and [[res-planae]]) also
      carry a defence-of-inclusion section pegged to the Phase 6 Varimax
      gate.
- [x] `data/SCHEMA.md` — exact column and row conventions for the long-form
      TSVs that replaced the eight `.xlsx` files; also documents the legacy
      xlsx quirks (numbered citations + `TOTAL N`, `СПОРНЫЕ`, the long-form
      schema of `RES LIQUIDAE.xlsx`). Companion code: `pipeline/extract_wide.js`.
- [x] `notes/corpora.md` — decision record on which Spanish corpora are used,
      access method (web scrape, API, downloaded dump), country-tagging
      coverage, licensing. Candidates with order-of-magnitude sizes:
      - **Corpus del Español: Web/Dialects** (Davies) — ~2 bn, 21 variants
        explicitly tagged; closest structural analog to Donina's GloWbE.
      - **NOW Spanish** (Davies) — growing daily, 21 variants; analog to NOW.
      - **CORPES XXI** (RAE) — ~400 m, authoritative but ES-heavy and weak
        on Central America.
      - **esTenTen** (Sketch Engine) — ~20 bn, largest; variant tagging is
        geo-IP, noisier.

      Recommendation to capture here: mirror Donina structurally with
      Davies's two corpora as primary and CORPES XXI as authoritative
      tiebreaker. Also record per-corpus **corpus coefficients** (relative
      representation of each variant in each corpus) — required so that
      ПоКА values can be normalised across unevenly-sized variant
      subcorpora. Without this, cross-variant comparisons in Phase 6 are
      not actually comparable.
- [x] `data/emonyms.tsv` — emonym lookup with grammatical gender recorded
      as a **covariate**. Decision: the primary Phase 6 pipeline runs as
      if gender were not present; a single post-hoc factor-loading check
      tests for a gender-driven confound. Stratify only if the check shows
      an effect. Documented in `data/SCHEMA.md` §`emonyms.tsv`.

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
5. **First-pass frequency filter.** Cells below a low co-occurrence
   threshold are recorded as `Sᵢⱼ = 0` and skipped before LLM tagging —
   this saves the bulk of LLM cost on the long tail of empty queries.
6. **Deduplication** across corpora and across queries.

Scale estimate at full breadth: ~150 candidate emonyms × ~40 classifier
patterns × 21 variants ≈ 126 000 queries. Most return zero or trash; the
first-pass filter is what makes the remainder tractable.

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
- **Calibration against the gold set**: target ≥ 0.90 precision on the
  manual citations before trusting LLM decisions at scale. Recall is
  informational but secondary — false negatives just cost more queries;
  false positives corrupt the statistics downstream.
- **Disagreement → human review queue**: anything the LLM marks low-confidence
  or that conflicts with a near-duplicate decision goes to manual review.
- **Reproducibility**: prompts, model id, and decisions stored with each
  citation so the pipeline can be re-run when models change.

Exit criterion: pipeline precision on the gold set is high enough that
machine-tagged citations can be reported alongside manual ones with an
explicit provenance flag (`source: manual | llm-tagged | llm-tagged+reviewed`).

## Phase 4 — Scale to Donina's emonym set

With Phases 2–3 operational, extend collection from 5 emonyms to ≈ 20.

Candidate selection follows Donina's 4 criteria, translated to Spanish:

1. **Classification membership** — appears in at least one published emotion
   taxonomy. Sources: Ekman, Plutchik, Parrot, Izard (universalist canon)
   plus Spanish-language taxonomies (Pavlenko, Pacheco, Rosenberg, RAE
   emotion-noun studies).
2. **Dictionary marker** — *DLE* and/or *Diccionario del español actual* /
   *Clave* definition contains `emoción`, `sentimiento`, `estado de ánimo`,
   or `afecto`.
3. **Frequency** — top tiers of CORPES XXI or Davies's Spanish frequency
   lists (analog to the *Diccionario de frecuencias del español actual*).
4. **Critical mass** — every `(variant × cryptoclass)` cell of interest has
   ≥ 5 citations. This is the Pearson-requirement cutoff and the source of
   most attrition; Donina's 181 → 23 collapse came from this criterion.

A candidate passes Phase 4 entry if it meets at least two of criteria 1–3;
criterion 4 is applied after Phase 2–3 collection. Begin from a pool of
~150 candidates, expecting Donina-comparable attrition to a final
**15–25 emonyms**.

Working subset, mirroring Donina's English list translated to Spanish:
*miedo, tristeza, alegría, amor, esperanza, sorpresa, ira/enfado, pasión,
interés, felicidad, placer, orgullo, lástima, alivio, preocupación, angustia,
terror, duelo, simpatía, vergüenza, culpa, ansiedad*. Final set decided in
consultation with the advisor and recorded in `notes/methodology-donina.md`.

## Phase 5 — Cryptoclass inventory consolidation

By end of Phase 4 we should know whether **Res Continens** and **Res Planae**
behave as full cryptoclasses for Spanish emonyms or as marginal phenomena, and
whether any further class needs to be added (or any of the inherited six
dropped for Spanish).

The decision rule is the **Varimax factor analysis from Phase 6**: if
Res Continens or Res Planae collapse onto Boriskina's six or onto each other
rather than loading as independent factors, they are dropped and the
statistics re-run on the reduced inventory. Donina obtained 96–99 % loading
per class for the six English classes; expect more variability for Spanish
until the inventory settles.

Decisions recorded in `notes/cryptoclasses/_inventory-decisions.md`.

## Phase 6 — Cross-variant comparison

The point of using Donina's method: do Spanish-speaking countries diverge in
how they categorise emotions?

Statistical toolkit, mirroring Donina:

- **ПоКА (CAC) per (emonym × variant × cryptoclass)**: `Sᵢ = Σⱼ cᵢⱼ` over
  classifiers *j* within a cryptoclass, normalised against the other
  metaphoronyms of the same class and against the per-variant corpus
  coefficients captured in Phase 0.
- **Pearson correlation** between every pair of variants on their ПоКА
  vectors → a 21 × 21 similarity matrix, interpreted with the
  Ивантер-Коросов bands (< 0.2 very weak, 0.2–0.3 weak, 0.3–0.5 moderate,
  0.5–0.7 medium, 0.7+ strong).
- **Kendall's W** on the cryptoclass ranking per variant → global agreement
  among the 21 variants.
- **Factor analysis (Varimax)** for cryptoclass independence — also Phase 5's
  test of whether the two extra classes beyond Boriskina's six (*Res
  Continens*, *Res Planae* — both English-attested, Golikova 2018 /
  Zadobrivskaya 2019) earn their place in the Spanish emonym profile.
- **k-means + Kohonen SOM** on the variant × cryptoclass matrix to surface
  emergent variant clusters.

Compare the emergent clusters against the standard dialectological
groupings:

- **Peninsular**: ES
- **Caribbean**: CU, DO, PR, plus coastal VE
- **Mexican / Central American**: MX, GT, HN, SV, NI, CR
- **Andean**: BO, PE, EC, parts of CO
- **Rioplatense**: AR, UY, PY
- **Chilean**: CL
- **US Spanish**: contact variety — status decided per Open questions

If the emergent clusters match the dialectology, this replicates Donina's
central finding (geography > chronology) for Spanish. If they do not, that
is itself a publishable result.

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
