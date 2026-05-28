# Res Parvae

The cryptoclass of **small, hand-graspable objects**. Categorising
feature *размер, соизмеримый с рукой человека* — "size commensurate
with the human hand, permitting manipulation" (Boriskina 2011 §1.4 /
p. 68, p. 679–680; `notes/theory-boriskina.md` §7). One of Boriskina's
original six; inherited unchanged for Spanish. **The dominant
cryptoclass for emonyms in Donina's English data**, by an explicit
finding she defends as a thesis (anthropocentrism of language —
emotions are "handled" because hands are the primary somatic interface
with the world). Whether this dominance carries over to Spanish is the
key empirical question this class answers in Phase 6.

For the framework that grounds this file see
`notes/theory-boriskina.md`. The Spanish classifier-seed inventory lives
in `data/classifiers.tsv` (rows where `cryptoclass = "Res Parvae"`).
This file is the **commentary** layer.

## Prototype

- **Spanish (project canonical)**: *guijarro* — see
  `data/cryptoclasses.tsv`. Also *piedrecilla*, *piedra*, *moneda*,
  *pelota pequeña*, *grano*.
- **Boriskina's English prototype**: *pebble* / "small graspable
  thing" (p. 47, 477). Distinguished from Res Rotundae (where the
  salient feature is *round shape*, not size) and from Res Continens
  (three-dimensional bounded volume).

For *guijarro* the [+small-graspable] feature is constitutive. Other
small-graspable nouns (*moneda*, *guisante*, *grano*, *cuenta*, *bolita*)
are also non-metaphorical members. Emonyms enter the class by analogy:
*coger miedo*, *agarrar amor*, *soltar la tristeza*, *un puñado de
alegría*, *recoger amor*.

## Cross-linguistic typological support

Aikhenvald (1998, *Classifiers*): "small / graspable" is one of **the
most recurrent classifier features cross-linguistically**, marked in
some form in classifier systems from Bantu to Athabaskan to Sino-Tibetan
to Australian. This is the cryptoclass with arguably the **deepest and
broadest typological grounding** of all eight — even broader than
Res Liquidae's.

## Boriskina's and Donina's findings — the anthropocentrism thesis

The central finding (Donina thesis 6, p. 70): **Res Parvae is the
priority class for emonyms across the anglosphere**, with the ranking
`Res Parvae > Res Liquidae > Res Acutae > Res Filiformes > Res Longae
Penetrantes > Res Rotundae` consistent across variants. The
interpretation Donina defends — itself inherited from Boriskina —
attributes this to the **anthropocentrism of language**: emotions are
the abstract domain most readily anthropomorphised, and the body's
primary instrument of action on the world is the hand. Emonyms are
therefore preferentially conceptualised as objects one can *grasp*,
*hold*, *throw*, *release*, *collect*.

For the Spanish project this is the **single most important hypothesis
to test against the corpus data**. If Spanish replicates the
Parvae-dominant ordering across emonyms, the anthropocentrism thesis is
strengthened cross-linguistically. If Spanish diverges (e.g. if
Res Liquidae or Res Continens overtakes Parvae), the thesis is either
language-specific or requires refinement.

Manual data preview (see *Current data status*): Spanish does *not*
straightforwardly replicate Donina's English Parvae-dominance — Res
Liquidae and Res Continens have substantially more citations than
Parvae for several emonyms. Two possible explanations: (a) genuine
typological difference; (b) artefact of the manual collection being
heavily weighted toward Liquidae and Continens patterns. Pipeline data
is needed to discriminate.

## Classifier inventory — original

### Russian (Boriskina 2011)

Boriskina's classifier-set for Res Parvae uses the predicate-word
cluster around manipulation verbs: *взять*, *схватить*, *держать*,
*бросить*, *отпустить*, *собрать*. The diagnostic collostructions split
along three sub-types of object-manipulation:

- **Capture / holding** (захват, удерживание) — `[take X]`,
  `[hold X]`, `[grip X]`
- **Release / throw** (отпускание, бросок) — `[drop X]`,
  `[throw X]`, `[release X]`
- **Collect / gather** (собирать) — `[gather X]`, `[pick up X]`

### English (Boriskina 2011)

The English inventory mirrors the Russian three-way split: *take, grip,
hold, grasp* (grasp); *throw, drop, release, let go of* (throw);
*gather, pick up, collect* (collect). Plus the substantive *a handful
of X*. Donina's factor analysis (`notes/methodology-donina.md` §7.4)
returned Parvae factor loading of **0.9851** for English — high, but
not the highest of the six (Res Filiformes at 0.9841 and Res Liquidae
at 0.9609 were comparable).

## Classifier inventory — Spanish

Canonical seeds in `data/classifiers.tsv` (four rows). The schema
(`data/SCHEMA.md`) introduced **three `verbal-objective-*` sub-slugs**
specifically for this class — without them the manipulation-type
distinctions collapse:

- `verbal-objective-grasp` — *tomar, coger, agarrar, asir, sujetar* —
  grasping/holding the small object
- `verbal-objective-throw` — *soltar, tirar, lanzar, arrojar* —
  releasing/throwing
- `verbal-objective-collect` — *captar, recoger* — collecting
- `substantive` — *puñado de, manojo de*

What is **not** in the inventory:

1. **No `attributive` or `predicative` rows.** "Smallness /
   graspability" is rarely expressed as a property of the emonym itself
   (*un pequeño miedo* exists but is a quantifier reading, not a
   classifier reading of [+small-graspable]). The class is purely
   verbal-and-nominal.
2. **No `verbal-instrumental` or `verbal-subject-*` rows.** Small
   graspable objects do not typically act as syntactic subjects on
   anything — they are objects of action. This is parallel to the
   Res Acutae asymmetry but in the opposite direction: where Acutae's
   sharp objects are agents-not-patients, Parvae's small objects are
   patients-not-agents.

### Spanish-specific lexical gotcha — *coger*

***Coger* is the most dialectally fraught verb in this entire project.**
In Peninsular Spanish (ES) and parts of Caribbean Spanish, *coger*
means neutrally "to take / grab" — exactly the Parvae classifier
semantics needed. In **Argentina, Uruguay, Paraguay, Mexico, and
increasingly in much of the rest of American Spanish**, *coger* has
acquired a sexual taboo meaning and is unmentionable in polite
discourse. Speakers in those variants substitute *agarrar* or *tomar*
for the same collocation.

This is a **structural confound for variant-level Parvae statistics**:

- A naive query for `coger + emonym` will under-count in AR / UY / MX
  / etc. relative to ES, because the lexeme is suppressed for non-
  linguistic reasons.
- The pipeline (Phase 2) must **lemma-cluster** *coger*, *agarrar*,
  and *tomar* under the same `verbal-objective-grasp` slot so that
  cross-variant ПоКА is comparable. The lexical substitution is
  variant-specific but the *construction* is the same.
- Conversely, the *presence* of *coger* in a corpus may itself be a
  weak diagnostic of variant (ES > AmSp), but this should not feed
  into the cryptoclass analysis — it is sociolinguistic noise, not
  cryptoclass signal.

This is the most important variant-aware lexical correction in the
project so far. Carry it forward to `pipeline/README.md`.

## Construction-type structure — keep in mind

Res Parvae populates **4 of 9 construction types** (all four verbal-
objective slots — grasp, throw, collect — plus the substantive). The
verbal-objective-grasp sub-slot dominates: roughly 75 % of all class
citations are grasp-type. This is consistent with Donina's English
finding that the "holding" pattern is the cognitive default for emotion-
as-graspable.

Implication for Phase 2: budget heavily for `verbal-objective-grasp`
queries (and remember the *coger* lemma-clustering). The throw and
collect sub-slots are diagnostic but yield far fewer citations; budget
them as secondary.

## Current data status

From `data/citations.tsv` (rows where `cryptoclass = "Res Parvae"`):

- **170 citations** — fifth-largest cryptoclass dataset.
- **Dominant patterns**:
  - `amor verbal-objective-grasp` (empty lemma) — 37 rows
  - `amor verbal-objective-grasp agarrar` — 18
  - `miedo verbal-objective-grasp coger` — 16
  - `alegría verbal-objective-grasp` (empty lemma) — 16
  - `ira verbal-objective-grasp` (empty lemma) — 9
  - `amor verbal-objective-grasp coger` — 8
  - `amor verbal-objective-throw tirar` — 7
  - `alegría substantive manojo de` — 7
  - `miedo verbal-objective-grasp` (empty lemma) — 6
  - `alegría verbal-objective-grasp coger` — 6
- **Per-variant coverage**: CO 32, MX 21, ES 21, AR 15, VE 11, CL 11,
  US 8. Central America is again the weak zone (GT 1, NI 1, SV 3, CR
  7, PA 5, HN 0). Critical-mass threshold (≥ 5 per cell) is met for
  only the major variants.
- **Per-emonym distribution**: *amor* dominant (~ 50 % of class
  rows), *miedo* second (~ 22 %), *alegría* third (~ 18 %),
  *ira* and *tristeza* tail.

### The Spanish-vs-English comparison preview

The manual data does **not** show the strong Parvae-dominance that
Donina found for English. Comparing class sizes for the project
overall: Res Liquidae 1 251 > Res Continens 499 > Res Filiformes 341 >
Res Planae 252 > Res Longae Penetrantes 194 > Res Parvae 170 >
Res Rotundae 134 > Res Acutae 65. **Parvae is sixth of eight, not
first.** Two interpretations are live:

- **Spanish genuinely diverges from English** in cryptoclass priority
  for emonyms, and the anthropocentrism thesis needs language-specific
  refinement.
- **The manual collection was biased** toward Liquidae and Continens
  patterns (which are textually flashier and easier to find) and
  under-collected the more pedestrian Parvae patterns.

Discriminating between these requires the Phase 2/3 pipeline running on
matched-volume corpus queries for all eight classes. This is one of the
most consequential findings the pipeline will produce.

## Query-design hints for Phase 2

Pipeline-specific notes carried forward to `pipeline/README.md` when
that file is created:

- **Lemma-cluster *coger / agarrar / tomar* under a single Parvae-grasp
  query**, with variant-specific weighting to correct for the *coger*
  taboo. The classifier-pattern matcher should treat them as one
  syntactic slot.
- **`puñado de` and `manojo de` substantive queries are
  high-precision** — almost every match is a classificatory use.
  Worth running early to validate the pipeline against the gold set.
- **`soltar / tirar / lanzar / arrojar + emonym`** has frequent
  literal readings to filter (you can literally *tirar una piedra*,
  not literally *tirar el amor*). LLM filtering required.
- **`recoger + emonym`** is rare but very specific — *recoger el
  amor* implies gathering scattered affection. The narrow seed list
  (*captar, recoger*) may under-specify; also try *juntar*,
  *acumular*, *amontonar* as high-recall extensions.
- **The empty-lemma rows in `verbal-objective-grasp`** (~ 70 rows
  across emonyms) are the largest extraction-caveat cohort in this
  class; the pipeline should re-tag these per-citation rather than
  inheriting the seed-list default.

## Open questions specific to Res Parvae

- **Does Spanish replicate Donina's Parvae-dominance, or invert it?**
  The most important question this class answers. Pipeline-driven
  matched-volume comparison across all eight classes is required to
  decide. If Spanish inverts the dominance, the cryptoclass-portrait
  for each emonym in Spanish will look substantially different from
  the English template, and the anthropocentrism thesis becomes
  language-specific.
- **Does the *coger* taboo confound show up in Phase 6 statistics?**
  Even after lemma-clustering, the AR / UY / MX variants may show
  artefactually lower Parvae ПоКА because the *coger*-suppression
  effect propagates to construction-frequency counts. The pipeline
  should report ПоКА both lemma-clustered and lemma-separated, and
  the variance between the two is itself a measure of the confound's
  size.
- **Is *captar* really a Parvae classifier, or is it semantically
  closer to Res Continens (capture = enclose)?** *Captar la atención*
  is the dominant collocation and could plausibly be parsed as
  containment ("seize and hold *in*") rather than grasping. Defer to
  factor analysis.
- **Should `verbal-objective-collect` be merged into
  `verbal-objective-grasp`?** With only ~ 5 rows total in the
  current data, the sub-slot is sparse enough that the distinction
  may not be statistically supportable. Keep it separate through
  Phase 2 (cheap to maintain), revisit at Phase 6 if it remains thin.
