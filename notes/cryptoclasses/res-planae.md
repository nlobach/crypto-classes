# Res Planae

The cryptoclass of **flat, horizontally-extended surfaces**. Categorising
feature *плоское* / *flatness* / *layered extent*. **Spanish-specific,
provisional**: not one of Boriskina's original six, admitted to the
inventory on contrastive grounds and prima facie corpus evidence
(`notes/theory-boriskina.md` §3, §7). Its place in the inventory is
**conditional on the Varimax factor analysis in ROADMAP §Phase 6** — and
the risk of failing that gate is higher here than for [[res-continens]],
because Planae's classifier inventory is dominated to a singular degree
by one substantive pattern (*nivel de + N*) whose status as a genuine
cryptoclass classifier is itself questionable. See *Provisional status
and the factor-analysis gate* below.

For the framework that grounds this file see
`notes/theory-boriskina.md`. The Spanish classifier-seed inventory lives
in `data/classifiers.tsv` (rows where `cryptoclass = "Res Planae"`).
This file is the **commentary** layer plus the **defence of inclusion**.

## Prototype

- **Spanish (project canonical)**: *superficie plana* — see
  `data/cryptoclasses.tsv`. Also *llanura*, *mesa* (geographical
  table-land), *plancha*, *hoja*.
- **No Boriskina prototype**: this class was introduced for Spanish.
  The conceptual lineage is the topological notion of a **two-
  dimensional extent** with a vertical-axis property (a *level* or
  *layer*), distinguished from Res Continens (three-dimensional
  bounded volume) and from Res Liquidae (substance, not surface).

For *superficie plana* the [+flat] feature is constitutive. Other flat
nouns (*hoja*, *plato*, *mesa*, *llanura*, *plancha*) are also non-
metaphorical members. Emonyms enter the class by analogy: *un alto
nivel de miedo*, *tristeza simple y llana*, *nivelar las emociones*.

## Provisional status and the factor-analysis gate

Res Planae is the **higher-risk** of the two Spanish additions. The
argument for inclusion is the same as for [[res-continens]] — contrastive
typological support plus corpus productivity — but Planae faces two
distinct threats that Continens does not:

1. **Inventory monoculture.** Of 252 manual citations, **243 (96 %)
   are a single substantive pattern: `nivel de + N`**. The other six
   classifier rows in `data/classifiers.tsv` (attributive *llano /
   liso / plano*, predicative *es plano / es liso / es llano*,
   verbal-objective *nivelar / alisar*) together account for fewer
   than ten citations in the manual data. A class supported almost
   entirely by one classifier pattern is a much weaker statistical
   target than a class with the breadth of [[res-continens]] (8 of 9
   construction types populated).
2. **The `nivel de` problem.** Is *nivel de + emonym* really a
   classifier of the [+flat] feature, or is it a productive **measure-
   noun construction** ("degree of X", "amount of X") that has nothing
   to do with the topological property of flatness? The argument for
   Planae: *nivel* literally denotes a horizontal flat plane (sea
   level, water level, ground level) and metaphorically projects that
   onto a measurable vertical scale. The argument against: by the
   time *nivel* is applied to emonyms, the topological grounding may
   be fully bleached — leaving a quantifier with no surviving
   classifier semantics. The factor-analysis result for Planae is
   essentially a test of whether the topological grounding has
   survived bleaching.

Donina (`notes/methodology-donina.md` §7.4, p. 786–792) identifies the
two specific failure modes:

- **Collapse onto Res Parvae** — flat objects can be small and
  graspable, so the [+flat] and [+small-graspable] features may not
  be statistically separable.
- **Collapse onto Res Filiformes** — thin flat objects approach
  thread-like extension, blurring the [+flat] and [+filiform]
  boundary.

If Planae's loading on its own factor is < 0.95 *or* its cross-loading
with Parvae / Filiformes / Continens / Liquidae is > 0.3, the class is
dropped and the statistics re-run on a reduced inventory. All Planae-
related analysis downstream of Phase 6 is **contingent**. Decision
recorded in `notes/cryptoclasses/_inventory-decisions.md` post-Phase 6.

## Cross-linguistic typological support

- **Tzeltal numeral classifiers** treat flat objects as a distinct
  class (Aikhenvald 1998; `notes/theory-boriskina.md` §3).
- **Some Athabaskan verb-stem classifier systems** distinguish flat
  / sheet-like objects.
- The typological evidence is **weaker than for Res Continens**:
  fewer language families mark flatness overtly, and where they do,
  the [+flat] feature is often part of a more complex shape-classifier
  paradigm (flat-and-flexible vs. flat-and-rigid, etc.) rather than
  a standalone class. This too argues for caution.

## Classifier inventory — Spanish

Canonical seeds in `data/classifiers.tsv` (five rows for this class —
the **narrowest inventory of all eight classes**, the opposite extreme
from [[res-continens]]'s nine):

- `attributive` — *plano, llano, liso*
- `predicative` — *es plano, es liso, es llano*
- `verbal-objective` — *nivelar, alisar*
- `substantive` — *nivel de* — **the dominant and near-exclusive
  Planae classifier in the manual data**
- `verbal-instrumental` — *(empty; sparse or absent in the legacy
  data)*

What is **not** in the inventory:

1. **No `verbal-subject-intransitive` or `verbal-subject-transitive`
   rows.** Flat objects do not typically act as syntactic agents on
   anything — they are surfaces, things acted upon. This is a
   structural property of the categorising feature, parallel to the
   Res Acutae asymmetry (where sharp objects act as agents but not
   patients).
2. **No `verbal-locative-*` rows.** Unlike [[res-continens]], Planae
   does not require the three-way locative split; flat objects are
   surfaces *on* (encima de), but the manual data does not surface
   `encima del miedo` / `sobre la tristeza` as productive
   collostructions. If the pipeline finds them, an `on-surface`
   construction type would be added; the schema accommodates this via
   the `disputed` → `classifiers.tsv` extension path documented in
   `data/SCHEMA.md`.
3. **No `idiomatic` row.** Unlike Res Acutae's *a punta de*,
   Planae has no comparable frozen idiom — *simple y llana* is the
   closest (frozen modifier sequence) but it is already covered by
   the `attributive` row.

## Inventory concentration — keep in mind

Where Res Continens populates 8 of 9 construction types broadly, Res
Planae populates 4 of 9 *with extreme concentration in one of them*.
The class is effectively **mono-classifier** in the current manual data:
*nivel de* accounts for ~ 96 % of all citations.

Implication for Phase 2: the pipeline strategy for Planae diverges from
every other class. The priority is **not** broad classifier coverage but
**(a) confirming that the `nivel de` dominance survives in larger corpus
data** (validating or refuting the class), and **(b) targeted high-
recall queries for the rare attributive / predicative / verbal-
objective patterns** to determine whether they are genuinely sparse or
under-collected. If Planae survives Phase 6 with an inventory still
dominated by *nivel de*, the class is defensible but unusual — its
ПоКА vector across variants will be driven by one classifier.

## Current data status

From `data/citations.tsv` (rows where `cryptoclass = "Res Planae"`):

- **252 citations**.
- **Distribution by pattern**:
  - `miedo substantive nivel de` — 93 rows
  - `amor substantive nivel de` — 75
  - `ira substantive nivel de` — 32
  - `alegría substantive nivel de` — 25
  - `tristeza substantive nivel de` — 18
  - `amor attributive llano` — 3
  - `tristeza attributive llano` — 2
  - `miedo attributive llano` — 1
  - `amor verbal-objective nivelar` — 1
  - `alegría attributive llano` — 1
  - Total non-`nivel de` rows: < 10.
- **Per-variant coverage**: ES 42, AR 34, US 27, MX 25, PE 24, CO 22,
  CL 16, VE 15. Eleven variants have ≥ 5 citations; ten do not.
  Central America is again the weakest zone (GT 1, HN 3, SV 3, NI 5,
  CR 5, PA 4), as is the smaller-corpus periphery (PY 3, BO 2, UY 3,
  PR 4, CU 4, EC 5).
- **Per-emonym distribution**: *miedo* dominant (~ 38 %), *amor*
  second (~ 31 %), with the rest tailing. Notably, *ira* has 32
  Planae citations — substantially more than its Acutae count (zero!)
  — which is consistent with Spanish framing anger as a measurable
  level (*subió el nivel de ira*) rather than as a sharp piercing
  emotion. Whether this is a genuine cryptoclass profile or an
  artefact of *nivel de*'s productivity as a quantifier is the
  central question.

### Known caveats

- The empty-`classifier_lemma` row for `alegría substantive` (1 row)
  is the only extraction caveat; the lemma is recoverable from the
  citation text and is *nivel de*.

## Query-design hints for Phase 2

Pipeline-specific notes carried forward to `pipeline/README.md` when
that file is created:

- **`nivel de + emonym` is a single dominant query** for almost the
  entire class. The pipeline should fan out morphological variants:
  *nivel de + N*, *niveles de + N*, *un nivel + ADJ + de + N*,
  *el nivel de + N*. All variants must be captured because each may
  behave differently per variant.
- **Crucially, every `nivel de` match must go through the LLM filter
  to decide classifier-vs-quantifier reading.** This is the highest-
  stakes precision decision in the project: *nivel de tristeza* in a
  scientific psychology text ("measured level of sadness") is a
  quantifier reading; in a literary text ("a level of sadness she
  had never known") it is closer to a classifier reading; the
  boundary is genuinely fuzzy. The gold-set calibration in Phase 3
  is critical for Planae specifically — failure to calibrate
  precisely here corrupts the Phase 6 factor analysis.
- **Targeted high-recall queries for the rare patterns** — *plano /
  llano / liso* attributive, *nivelar / alisar* verbal-objective —
  are diagnostic for whether Planae exists beyond *nivel de*. Even
  10–20 confirmed citations per pattern across the major variants
  would substantially strengthen the class's defence at the Varimax
  gate.
- **Beware *nivel de + non-emonym* false positives** — *nivel de
  vida* (standard of living), *nivel del mar* (sea level), *nivel
  de educación* (education level) are all common and non-classificatory
  for emonyms. Filter strictly on the post-*de* slot containing an
  emonym.

## Open questions specific to Res Planae

- **Will Res Planae survive the Varimax gate?** Higher risk than
  Continens, both because the inventory is narrow and because the
  dominant classifier (*nivel de*) may be a quantifier with bleached
  topological semantics rather than a true classifier. Known failure
  modes per Donina: collapse onto Res Parvae (flat + graspable) or
  Res Filiformes (flat + thin). A third failure mode added by this
  file: the class survives statistically but turns out to be
  entirely *nivel de*, which would be an interesting but methodically
  unusual cryptoclass.
- **Is *nivel de + N* a classifier or a quantifier?** This is the
  inner question. The Phase 3 LLM-tagging calibration must answer it
  on a per-citation basis; the Phase 6 factor loading will answer it
  in aggregate. Both views matter — a class that survives the factor
  test but turns out to consist entirely of quantifier readings would
  not be a real cryptoclass, just a productive measure-noun
  construction with a topological etymology.
- **Why does *ira* have many Planae citations (32) but zero Acutae
  citations** (see [[res-acutae]] §"Current data status")? The
  expectation from the universalist canon — Russian *колкая злость*,
  English *sharp anger* — would predict *ira* in Acutae. The Spanish
  manual data inverts this: anger is *nivelable* (measurable on a
  scale) but not *aguda* (sharp). Either Spanish genuinely conceives
  of anger differently, or the manual collection has an unrepresentative
  emonym profile. The pipeline result is the test.
- **Should an `on-surface` construction type be added if pipeline
  data shows `encima de + emonym` / `sobre + emonym` collostructions
  as productive?** Reserved for post-pipeline review; currently no
  manual evidence supports the addition.
- **Does Spanish *simple y llano* belong inside `attributive` or
  warrant its own `idiomatic` row?** The expression is a frozen
  modifier pair; it currently lives under `attributive` per the
  seed list. Promote to `idiomatic` only if the pipeline shows it
  behaving distinctly from productive *llano* uses.
