# Plan from scratch — replicating Donina (2016) for Spanish

A methodological mirror of Donina's algorithm, written as if the project were
starting from zero. This document is **not** the active project plan — see
`ROADMAP.md` for the plan that takes the existing ~737 manual citations into
account as a gold-standard validation set. Use this file to keep the pure
Donina-equivalent pipeline visible, so that decisions in `ROADMAP.md` can be
checked against it.

For the source algorithm: Donina §1.10 *Способ описания ареальной
вариативности эмоциональных переживаний. Методика исследования*
(pp. 99-112), building on Boriskina (2011).

---

## Reference: Donina's 6-stage algorithm

1. Define the candidate emonym wordlist (4 criteria, the 4th being the
   "critical mass" constraint of Pearson correlation: ≥5 observations per
   variable).
2. Bulk corpus collection of phrases per `(emonym × classifier × variant)`.
3. Cryptoclass assignment — each emonym tested against the classifier set of
   every cryptoclass; co-occurring emonyms are *metaphoronyms* of that class.
4. Quantification — ПоКА (CAC = `Sᵢ = Σⱼ cᵢⱼ`) per emonym per variant per
   cryptoclass, normalised against other metaphoronyms of the same class.
5. Cross-variant statistics — Pearson correlation, Kendall's W.
6. Data mining — factor analysis (Varimax) for class-independence; k-means and
   Kohonen SOM for variant clustering.

Donina started with 181 candidate emonyms, ended with 23 after applying the
critical-mass constraint. She logged **3,400 person-hours** on stage 2 alone.

---

## Phase 0 — Methodological scaffolding (1-2 weeks)

Before any data:

1. **Lock the variant list** — the 21 ISO codes already in CLAUDE.md:
   AR, BO, CL, CO, CR, CU, DO, EC, ES, GT, HN, MX, NI, PA, PE, PR, PY, SV,
   UY, VE, US.
2. **Lock the cryptoclass inventory** — 8 classes: Boriskina's 6 (Res Liquidae,
   Res Filiformes, Res Rotundae, Res Longae Penetrantes, Res Acutae,
   Res Parvae) plus the two Spanish additions (Res Continens, Res Planae).
   Their inclusion is provisional and gets re-tested in Phase 7's factor
   analysis.
3. **Write the theory / methodology notes** — `notes/theory-boriskina.md`,
   `notes/methodology-donina.md`, `notes/glossary.md`. Conventions pinned;
   not re-derived per session.
4. **Freeze the gold-standard set** — the existing ~737 manual citations
   become the validation set for the pipeline. Do not modify; snapshot to
   `notes/gold/` with provenance.

**Deliverable**: one-page protocol document fixing variants, classes, and
gold set.

---

## Phase 1 — Candidate emonym list (~150-200 words) (1-2 weeks)

Donina's 4 criteria, translated to Spanish:

1. **Classification membership** — presence in at least one published taxonomy
   of emotions. Sources: Ekman, Plutchik, Parrot, Izard (universalist canon)
   plus Spanish-language taxonomies (Pavlenko, Pacheco, Rosenberg, RAE
   emotion-noun studies).
2. **Dictionary marker** — definition in *DLE* and/or *Diccionario del español
   actual* / *Clave* contains `emoción`, `sentimiento`, `estado de ánimo`,
   `afecto`.
3. **Frequency** — appears in the top tiers of CORPES XXI or *Diccionario de
   frecuencias del español actual* (or Davies's Spanish frequency lists).
4. **Critical mass** — deferred to Phase 4. A word passes only if every
   `(variant × cryptoclass)` cell of interest has ≥5 citations.

Apply criteria 1-3 jointly: a candidate must satisfy at least two of the three
to enter the pool. Expect ~150-200 candidates, knowing Phase 4 will prune to
~15-25.

**Deliverable**: `notes/emonyms-candidates.md` — flat list with source-per-word
and the satisfied-criterion subset for each.

---

## Phase 2 — Classifier inventory per cryptoclass in Spanish (2-3 weeks)

For each of the 8 classes, write out the full classifier set across the 7
construction types: subject-transitive, subject-intransitive, objective,
instrumental, attributive, predicative, substantive.

**Example — Res Acutae**:

| Construction type | Spanish classifier patterns |
|---|---|
| Subject-transitive | `[un objeto agudo perfora algo]`, `[un objeto agudo pincha algo]`, `[un objeto agudo punza algo]` |
| Subject-intransitive | `[un objeto agudo penetra]`, `[un objeto agudo se clava]` |
| Predicative | `[un objeto es agudo]`, `[un objeto es punzante]`, `[un objeto es cortante]` |
| Attributive | `[un objeto agudo]`, `[un objeto punzante]`, `[un objeto afilado]` |
| Substantive | `[el pinchazo de un objeto agudo]`, `[la punta de un objeto agudo]` |
| Objective | `[afilar un objeto]`, `[empuñar un objeto agudo]` |
| Instrumental | `[con un objeto agudo]`, `[a punta de]` |

Sources, in order of authority:

1. **Existing xlsx column headers** — already encode the Spanish classifier
   seeds for each of the 8 classes. Start from these.
2. **Translation of Boriskina's English classifiers** — for the 6 inherited
   classes, validate the translated patterns against Spanish corpus
   attestations using the prototype nouns (*agua, hilo, pelota, lanza, aguja,
   piedra*).
3. **Bottom-up elicitation from prototypes** — for *Res Continens*
   (*caja / recipiente*) and *Res Planae* (*superficie / plano*), no English
   precedent exists; classifiers must be elicited from corpus uses of the
   prototypes themselves.

**Spanish-specific gotcha — grammatical gender**: Spanish nouns are
masculine / feminine. Decide upfront whether gender is a covariate (reported
but not stratified on), a stratifier, or ignored. Recommendation: covariate.
Donina did not face this; English is genderless.

**Deliverable**: `notes/cryptoclasses/{res-acutae.md, res-liquidae.md, …}` —
one file per class, full classifier list per construction type.

---

## Phase 3 — Corpus selection and query infrastructure (2-3 weeks)

Donina used GloWbE + NOW because they are variant-stratified. The Spanish
analogs are not as clean:

| Corpus | Variants | Size | Notes |
|---|---|---|---|
| **Corpus del Español: Web/Dialects** (Davies) | 21 | ~2 bn | Closest analog to GloWbE; explicitly variant-tagged |
| **NOW Spanish** (Davies) | 21 | growing daily | Closest analog to NOW |
| **CORPES XXI** (RAE) | ~25 regions | ~400 m | Authoritative but ES-heavy; underrepresents Central America |
| **esTenTen** (Sketch Engine) | mixed | ~20 bn | Largest but variant tagging is geo-IP, noisier |

**Recommendation**: mirror Donina structurally — use Davies's two Spanish
corpora as the primary pair, CORPES XXI as a tiebreaker / authoritative
secondary. Compute corpus coefficients per variant (relative representation in
each corpus) exactly as Donina did, so that ПоКА values are comparable across
unevenly-sized variant subcorpora.

**Build a query layer** that, given `(emonym, classifier_pattern, variant)`,
returns concordances (KWIC). Davies's corpora have a programmable HTTP
interface; CORPES XXI is harder (scraping or RAE API). Cache aggressively.

**Variant-coverage honesty**: Central American variants (GT, HN, SV, NI, CR)
and some others (PY, PR, EC, BO) will be undersampled in every corpus. Plan
to report them as exploratory rather than dropping them silently.

**Deliverable**: `notes/corpora.md` + a `scripts/query.py` that issues a query
and returns raw KWIC into a normalised
`(emonym, classifier_hit, surface_form, sentence, source, variant)` table.

---

## Phase 4 — Bulk collection (the bottleneck — weeks to months)

This is where Donina spent 3,400 hours and where the project either succeeds
or stalls. Modern pipeline:

1. **Cartesian-product the queries**: 150 candidate emonyms × ~40 classifier
   patterns × 21 variants ≈ 126,000 queries. Most return zero or trash.
2. **First-pass filter**: rule out impossible cells by raw co-occurrence
   frequency. Anything below a low threshold is recorded as `Sᵢⱼ = 0` and
   skipped at later stages.
3. **LLM-assisted relevance filter**: for each surviving KWIC line, an LLM
   judges whether the emonym is genuinely being used metaphorically with the
   classifier (not just adjacent in text). **This is the 100× speedup over
   2016** — Donina did not have access to this capability.
4. **Construction-type tagging**: the same LLM labels each kept citation with
   one of the 7 construction types (subject-transitive, …, substantive),
   plus a `СПОРНЫЕ` (disputed) flag with rationale.
5. **Validation against the gold set**: precision and recall measured on the
   manual ~737 citations. Iterate prompts until precision is acceptable
   (≥ 0.90). Recall is informational but secondary — false negatives just
   cost more queries; false positives corrupt the statistics.
6. **Apply critical-mass cutoff**: keep only emonyms where every cell of
   interest has ≥5 hits. Expect the same kind of attrition Donina saw
   (181 → 23), so plan for **15-25 final emonyms** for Spanish.

**Engineering notes**:

- Store prompts, model id, and decisions with each citation — pipeline must
  be reproducible when models change.
- Maintain a human-review queue for low-confidence or contradictory
  decisions.
- Citation provenance must be visible in every downstream table:
  `source: manual | llm-tagged | llm-tagged+reviewed`.

**Deliverable**: a database in the same schema as the xlsx files, but
populated to **5,000-15,000 citations** rather than 737.

---

## Phase 5 — Cryptoclass portraits (1-2 weeks)

Mechanical once Phase 4 is done. For each `(emonym × variant)`, build the
portrait = vector of citation counts across the 8 cryptoclasses, broken down
by construction type. Visualise as heatmap or radar plot. This populates the
equivalent of Donina's Appendix 4.

**Deliverable**: `outputs/portraits/<emonym>__<variant>.{json,svg}`.

---

## Phase 6 — ПоКА per emonym per variant (1 week)

`Sᵢ = Σⱼ cᵢⱼ` over classifiers `j` within a cryptoclass, normalised against
the other metaphoronyms of the same class. Pure arithmetic — but design the
table carefully because every later statistic reads from it.

**Deliverable**: `outputs/poka.csv` — long-format table with columns
`(emonym, variant, cryptoclass, S_raw, S_normalised)`.

---

## Phase 7 — Statistics (1-2 weeks)

1. **Pearson correlation** between every pair of variants on their ПоКА
   vectors → a 21 × 21 similarity matrix. Apply the
   Ивантер-Коросов interpretive bands Donina uses
   (very weak < 0.2, weak 0.2-0.3, moderate 0.3-0.5, medium 0.5-0.7,
   strong 0.7-1).
2. **Kendall's W** on the cryptoclass ranking per variant — measures global
   agreement of the 21 variants.
3. **Factor analysis (Varimax)** to confirm the 8 cryptoclasses behave as
   independent factors. **This is also the test of whether the two
   Spanish-specific classes (*Res Continens*, *Res Planae*) earn their
   place** — if they collapse onto Boriskina's 6 or onto each other, drop
   them and recompute. Donina got 96-99 % loading per class for the 6 English
   classes; expect more variability for Spanish until the inventory settles.

**Deliverable**: `outputs/stats/{pearson.csv, kendall_w.txt, factor.csv}` +
a short interpretive note per result.

---

## Phase 8 — Clustering of variants (1 week)

k-means + Kohonen SOM on the variant × cryptoclass matrix. Compare the
emergent clusters against the standard dialectological groupings:

- **Peninsular**: ES
- **Caribbean**: CU, DO, PR, plus Venezuelan coast (VE)
- **Mexican / Central American**: MX, GT, HN, SV, NI, CR
- **Andean**: BO, PE, EC, parts of CO
- **Rioplatense**: AR, UY, PY
- **Chilean**: CL
- **US Spanish**: US (contact variety — decide whether to treat as full
  variant or diaspora; see Open questions in `ROADMAP.md`)

If the emergent clusters match dialectology, you have replicated Donina's
central finding (geography > chronology) for Spanish. If they don't, that is
itself a publishable finding.

**Deliverable**: `outputs/clusters/{kmeans.png, kohonen.png, assignments.csv}`
+ interpretive note comparing to dialectological expectations.

---

## Phase 9 — Scholarly writeup in Spanish (months)

Per CLAUDE.md, the scholarly output is in Spanish. Working notes in English
are scaffolding; the dissertation / article is not. Finalise the provisional
Spanish equivalents in `notes/glossary.md` before this phase begins.

---

## Honest summary

| Phase | Calendar weeks (focused) | Risk |
|---|---|---|
| 0 — Scaffolding | 1-2 | Low |
| 1 — Candidate emonyms | 1-2 | Low |
| 2 — Classifier inventory | 2-3 | Medium — Res Continens / Res Planae are bottom-up |
| 3 — Corpus + query infrastructure | 2-3 | Medium — corpus access varies |
| 4 — Bulk collection | **weeks to months** | **High — whole project hinges here** |
| 5 — Portraits | 1-2 | Low |
| 6 — ПоКА | 1 | Low |
| 7 — Statistics | 1-2 | Low |
| 8 — Clustering | 1 | Low |
| 9 — Writeup | months | Independent risk profile |

Phases 0-3 are conceptual and translatable from Donina. Maybe 6-8 weeks if
focused.

**Phase 4 is the whole game.** Donina's 3,400 hours can plausibly become
100-200 hours with a well-built LLM pipeline + gold-set validation — but only
if the pipeline's precision is *measured*, not assumed. The gold-standard
calibration step (the ~737 manual citations) is what separates a defensible
methodology from a black box.

Phases 5-8 are mechanical once Phase 4 produces data. Phase 9 is the longest
in calendar time but the shortest in unknowns.

**Highest-leverage early decision**: Phase 4's pipeline design. Worth scoping
in detail (corpus access, LLM prompt design, validation metric on the gold
set) before doing any of the earlier prep work, because Phase 4's feasibility
constrains how ambitious Phases 1-2 can be.
