# Spanish corpora — decision record

Which corpora the project uses to collect citations for the
`(emonym × classifier × variant)` queries in ROADMAP Phases 2–3, with the
access posture and per-corpus role.

Donina (2016) used **GloWbE + NOW** because both are explicitly
variant-tagged and have a programmable HTTP interface. The Spanish landscape
is messier: there is no single corpus with comparable per-variant tagging at
GloWbE scale, free programmatic access, and full ES-American balance. The
plan is therefore to mirror Donina *structurally* — a variant-tagged primary
plus an authoritative tiebreaker — but built from three corpora rather than
two, with one of them (esTenTen) front-loaded into a time-limited collection
burst.

## Candidates and comparison

| Corpus | Owner | Size (Spanish) | Variant tagging | Access we have | API / programmatic | Role |
|---|---|---|---|---|---|---|
| **Corpus del Español: Web/Dialects** | Davies (BYU) | ~ 2 bn tokens | 21 variants, explicitly tagged | Free web account | Web UI only on the free tier; full-text / database API requires an academic licence we do not yet hold | **Primary** for variant-stratified queries |
| **NOW Spanish** | Davies (BYU) | growing daily | 21 variants, tagged | Free web account | Same constraints as Web/Dialects | **Primary, news-genre** complement to Web/Dialects |
| **CORPES XXI** | RAE | ~ 400 m tokens | ~ 25 regions; tagging good but ES-heavy and weak on Central America | Free web interface | No public API; polite scraping only | **Authoritative tiebreaker** for ES-leaning disputes; secondary, not primary |
| **esTenTen (Spanish, latest edition)** | Sketch Engine | ~ 20 bn tokens | Geo-IP tagged; noisier than Davies's hand-tagged sources | Free **one-month trial**, with a paid licence as the realistic upgrade path if the trial proves the value | Full Sketch Engine API + Word Sketch + CQL during the trial | **Evaluation candidate.** Use the trial to test it on real `(emonym × classifier × variant)` queries; upgrade to paid if it earns its keep, drop if not |

Other candidates considered and deferred (not in scope yet, may revisit):

- **PRESEEA** (variation-focused spoken corpus) — too small per-variant for ПоКА.
- **AnCora**, **IULA**, **CREA** — older, not variant-stratified at the
  granularity we need.
- Raw web crawl with country-TLD heuristics (`.ar`, `.mx`, …) — only as a
  fallback for variants that the academic corpora cover poorly (see
  *Variant-coverage honesty* below).

## Donina's structural mirror, adapted

Donina paired **one variant-stratified workhorse (GloWbE)** with **one
news-stream tiebreaker (NOW)** and computed **corpus coefficients** — the
relative representation of each variant in each corpus — so that ПоКА values
could be normalised against unevenly-sized variant subcorpora.

The collection plan is built around **two committed corpora plus one
evaluation candidate**:

1. **Committed primary: Davies's Corpus del Español: Web/Dialects + NOW
   Spanish**, via the free web UI with rate-limited polite scraping. These
   are the variant-stratified workhorses regardless of how the Sketch Engine
   question resolves. An academic full-text licence is worth chasing
   separately (see *Open questions*) because it lifts the throughput ceiling
   substantially.
2. **Committed tiebreaker: CORPES XXI**, scraped on demand for contested
   citations or for ES-specific norm questions. Not primary — its ES-heavy
   skew and weak Central American coverage rule that out — but authoritative
   when the others disagree.
3. **Evaluation candidate: esTenTen-es via Sketch Engine.** The current
   one-month trial is the opportunity to test, on real
   `(emonym × classifier × variant)` queries, whether SE's tooling
   (CQL queries, Word Sketch, API throughput, geo-IP variant tagging
   accuracy) gives us enough that a paid licence is justified. The trial is
   *not* a deadline to extract everything from — it's a feasibility study.
   - **Decision criterion to buy a paid SE licence**: the trial pipeline
     produces measurably better cell-fill on the weak-coverage variants
     (GT, HN, SV, NI, CR, PA, PR, PY) than Davies's free-tier scraping
     does, and/or its CQL gives access to construction-pattern matching
     that we cannot get out of Davies. Quantify before deciding — don't
     buy on vibes.
   - **If we buy**: esTenTen joins the committed primary tier alongside
     Davies, and the corpus-coefficient table grows a column.
   - **If we don't**: drop esTenTen from the inventory entirely; whatever
     KWIC we pulled during the trial stays as a frozen reference but is
     not used in the final ПоКА statistics (because it would not be
     reproducible).

Corpus coefficients are computed once per `(corpus × variant)` and stored
in `data/derived/corpus-coefficients.tsv`. Every Phase 6 statistic that
reads ПоКА reads through the coefficient table.

## Access posture

- **Polite scraping**, rate-limited to single-user-equivalent throughput.
  No multi-IP rotation, no parallel sessions, no concurrent quota abuse.
  This applies to **CORPES XXI** and to **Davies's free-tier web UI**.
- **API use** is limited to **Sketch Engine** for the duration of the trial;
  request rate respects their published per-second limits.
- All raw KWIC responses are **cached locally** in `pipeline/cache/` keyed by
  `(corpus, query, variant)` so the same query is never issued twice. This
  is non-negotiable — it keeps us within polite-scraping limits and makes
  the pipeline reproducible.
- Robots.txt and per-corpus terms of service are checked before any new
  scraper goes live and the check is recorded in `pipeline/README.md`.

## Variant-coverage honesty

Per ROADMAP §Phase 6, variants whose corpus coverage remains inadequate
after Phases 2–4 are reported as **exploratory rather than dropped
silently**. Expected coverage profile based on what each corpus actually
contains:

- **Strong coverage** in all three corpora: ES, MX, AR, CO, CL, US, VE.
- **Moderate**: PE, CU, UY, EC, BO, DO.
- **Weak / patchy**: GT, HN, SV, NI, CR, PA, PR, PY. Central America is the
  consistent weak spot — exactly as the current manual data already shows
  (CLAUDE.md "weak/absent" list). The TLD-fallback raw-web option above
  exists specifically for these.

This is the strongest argument for paying for Sketch Engine if the trial
goes well: even with noisier per-citation geo-IP tagging, esTenTen's raw
size (~ 20 bn vs Davies's ~ 2 bn) may be the only thing that gives the
weak-coverage variants any chance of clearing the ≥ 5-per-cell critical-mass
threshold. If Davies-only coverage proves sufficient even for Central
America, esTenTen is a luxury rather than a necessity.

## Engineering deliverables (downstream of this doc)

The decisions above flow into:

- `pipeline/README.md` — the pipeline-architecture doc (Phase 2 deliverable).
  References this file for *which* corpora; defines *how* to query each.
- `pipeline/corpora/<corpus>.{py,js}` — one adapter per corpus, with cache
  and rate-limit wrapping.
- `data/derived/corpus-coefficients.tsv` — per `(corpus × variant)` size
  numbers, populated once at the start of Phase 2 and refreshed when a new
  corpus comes online.

## Open questions

- **Sketch Engine trial dates** (`[YYYY-MM-DD start → YYYY-MM-DD end]`).
  Not a deadline to extract under, but a window within which the
  buy / skip decision criterion above has to be evaluated. If the trial is
  ticking already, prioritise getting a small representative slice of the
  pipeline (one cryptoclass × *miedo* × all 21 variants, say) running
  against SE so the comparison to Davies-only output is actually possible
  before the trial ends.
- **Davies academic licence.** Worth investigating an institutional path
  (advisor's university, library, or an individual academic licence) before
  the steady-state phase begins — the difference between the free web UI and
  the database API is roughly the difference between feasible and infeasible
  at full breadth (~ 126 000 queries per ROADMAP §Phase 2).
- **US Spanish status** (also tracked in ROADMAP open questions). Davies's
  US-Spanish subcorpus exists but is heavily contact-variety; whether to
  treat it as a 21st full variant or a diaspora variety affects how its
  citations are reported in Phase 6.
- **Whether to add a Twitter/X or Reddit slice** for the weak-coverage
  Central American variants. Defer until burst-phase results show whether
  esTenTen alone clears the critical-mass bar for those variants.
