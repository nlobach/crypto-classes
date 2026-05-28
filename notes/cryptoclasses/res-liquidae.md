# Res Liquidae

The cryptoclass of **liquid, flowing substances**. Categorising feature
*жидкое* — "liquidity" (Boriskina 2011 §1.4 / p. 68;
`notes/theory-boriskina.md` §7). One of Boriskina's original six;
inherited unchanged for Spanish. **The most active class for Spanish
emonyms in the manual data** (1 251 of 2 906 citations, ~ 43 %) and the
class Boriskina uses as the worked example throughout her theoretical
chapter.

For the framework that grounds this file (cryptoclass, classifier,
collostruction, prototype, metaphoronym, IDC / ИРа, CAC / ПоКА), see
`notes/theory-boriskina.md`. Boriskina's worked illustration of how a
classifier set is built — using the lemma *flow* and the
collostructions `[X flows]`, `[flow of X]`, `[stop X flow]` — is the
canonical example of the diagnostic-collostruction method
(`notes/theory-boriskina.md` §7.1).

The Spanish classifier-seed inventory lives in
`data/classifiers.tsv` (rows where `cryptoclass = "Res Liquidae"`). This
file is the **commentary** layer.

## Prototype

- **Spanish (project canonical)**: *agua* — see `data/cryptoclasses.tsv`.
- **Boriskina's English prototype**: *water* (p. 47). *Water* is treated
  as the unmarked prototype throughout her Chapter 2 §2.1.

For *agua* the categorising feature is constitutive of its denotation —
*agua* without [+liquid] is unintelligible. Other liquid nouns
(*sangre*, *aceite*, *lluvia*) are also non-metaphorical members.
Emonyms enter the class by analogy: *el amor fluye*, *la alegría brota*,
*inundado de tristeza*, *un mar de amor*.

## Cross-linguistic typological support

Boriskina (p. 49–52): liquid is marked as a distinct **noun class** in
many Bantu systems (class 6 in many such languages) and in some
Australian classifier languages. The contrastive principle is therefore
strongly satisfied — Res Liquidae is the cryptoclass with the deepest
typological grounding of the original six.

## Classifier inventory — original

### Russian (Boriskina 2011)

Boriskina's classifier-set construction for Res Liquidae uses the
predicate-word cluster around *flow / pour / drip / leak* in English,
mapped to Russian terms in her Chapter 2 §2.1 (pp. 100–135). The
diagnostic classifier-cluster for the lemma *flow* alone yields:

- `[X flows]` — subject-intransitive (the liquid moves of its own)
- `[flow of X]` — substantive (nominal container/measure)
- `[stop X flow]` — objective (acting on the flow)

Boriskina pools across multiple liquid-predicate words (*pour, drip,
leak, gush, trickle, stream, spill*) to build the full inventory.

### English (Boriskina 2011)

Donina does not reproduce the full English Res Liquidae classifier set
in her thesis (she gives the worked example for Res Acutae instead);
the inventory is recoverable from Boriskina §2.1 and from
`notes/theory-boriskina.md` §7.1. Unlike Res Acutae, **all seven of
Boriskina's construction types are populated** for Res Liquidae —
subject-intransitive (`flows`), subject-transitive (`floods`), objective
(`spills`), instrumental (`drowned in`), attributive (`pouring`),
predicative (`is liquid`), substantive (`a flood of`).

## Classifier inventory — Spanish

Canonical seeds in `data/classifiers.tsv` (six rows for this class):

- `verbal-subject-intransitive` — *fluir, brotar, manar, rebosar,
  diluirse, chorrear*
- `verbal-subject-transitive` — *inundar, anegar, empapar*
- `verbal-objective` — *derramar, verter, diluir, salpicar*
- `verbal-instrumental` — *inundado por, empapado de, ahogado en*
- `attributive` — *derramado, vertido, diluido*
- `substantive` — *gota de, gotas de, chorro de, torrente de, flujo de,
  mar de*

Two notes on what is **not** in the Spanish inventory:

1. **No `predicative` row.** Boriskina has one for English (`is
   liquid / fluid`) but the Spanish equivalent (*es líquido*, *es
   fluido*) is rarely used metaphorically with emonyms — *el amor es
   líquido* exists only as a deliberate Baumanian allusion, not as a
   spontaneous collostruction. Treat the absence as a real Spanish
   gap, not a collection oversight. Confirm or refute once the
   pipeline runs.
2. **No `idiomatic` row.** Unlike Res Acutae (which has *a punta de*),
   Res Liquidae in Spanish has no frozen-idiom classifier; the
   substantive `mar de + N`, `torrente de + N`, etc., are productive
   constructions, not idioms.

## Construction-type symmetry — keep in mind

Res Liquidae is the **most syntactically symmetric** of the eight
classes: six of seven construction types are populated in Spanish (only
predicative is empty), and within each, multiple lemmas contribute.
This is the *opposite* of Res Acutae's four-of-seven asymmetry.

Implication for Phase 2: **budget query effort roughly evenly** across
the six populated construction types for Res Liquidae. Expect every type
to yield. The substantive type in particular (six distinct seed lemmas)
needs the broadest query coverage.

## Current data status

From `data/citations.tsv` (rows where `cryptoclass = "Res Liquidae"`):

- **1 251 citations** — the largest cryptoclass dataset, by far.
- **Dominant patterns** (only the top tier listed; full breakdown via
  `awk` from `data/SCHEMA.md` §Working with the table):
  - `amor verbal-subject-intransitive fluir` — 177 rows. The single
    most common pattern in the entire project.
  - `alegría verbal-instrumental` (empty lemma) — 173 rows.
  - `alegría verbal-subject-transitive inundar` — 124.
  - `amor verbal-objective derramar` — 73.
  - `alegría verbal-subject-intransitive brotar` — 72.
  - `tristeza verbal-subject-transitive inundar` — 71.
- **Per-variant coverage**: ES 237, MX 166, AR 151, US 98, CO 95, VE 75,
  PE 72, CL 67, CU 60. **All 21 variants have ≥ 10 citations** — even
  Central America (NI 24, CR 15, SV 14, PA 13, HN 11, GT 10). This is
  the *only* class where the ≥ 5-per-cell critical-mass threshold (per
  ROADMAP §Phase 4) is plausibly within reach from manual data alone
  for the major construction types.
- **Per-emonym dominance**: *amor* is overwhelmingly the most Liquidae-
  marked emonym (~ 60 % of class rows), confirming Donina's English
  finding (`notes/methodology-donina.md` §6 / Phase 5 notes) that
  *love* is uniquely dominant in Res Liquidae across all variants.
  *alegría* second, *tristeza* third, *miedo* and *ira* tail.

### Known extraction caveat

The empty-`classifier_lemma` rows in the `verbal-instrumental` slot
(notably the 173 *alegría* rows and ~ 46 *tristeza* rows) are real
citations of the instrumental pattern that the extractor pulled from a
column-header position without identifying the specific lemma in the
fragment. Spot-checking shows most are *inundar de* / *inundar con* /
*empapado de* constructions. The seed list `inundado por, empapado de,
ahogado en` therefore **under-specifies** the instrumental classifier
inventory for Spanish — the *de*-marked variants (*X de Y*, where *X*
is a derived participle) are more common than the *por*-marked ones,
the reverse of what the seed list implies. Update the seed list when
the pipeline runs.

## Query-design hints for Phase 2

Pipeline-specific notes, carried forward to `pipeline/README.md` when
that file is created:

- **Lemmatise verbs aggressively** — *fluir*, *brotar*, *manar*,
  *rebosar* all have full conjugation paradigms (~ 50 surface forms
  each). The classifier-pattern matcher must operate on lemmas, not
  surface forms, or yield will collapse.
- **The substantive type is the highest-precision query** — *gota
  de*, *flujo de*, *torrente de*, *mar de* + N are syntactically
  tight and have very few non-classifier readings. Run these first to
  build confidence in the pipeline against the gold set.
- **Beware metaphorical-of-metaphorical chains.** *Mar de problemas*,
  *torrente de palabras*, etc. are Res Liquidae uses of non-emonym
  nouns. The query layer cares only about co-occurrence with the
  emonym slot; the LLM filter then decides whether the emonym is
  semantically engaged.
- **`inundar de` vs `inundar por`**: as noted above, *de*-marked
  instrumental is more frequent than *por*-marked. Query both
  prepositions and let the filter normalise.
- **High-yield variants are also the highest-noise**: ES and MX have
  the largest raw corpora *and* the most genre diversity (literary,
  journalistic, technical). Expect a worse precision-baseline on these
  variants than on smaller, more homogeneous ones.

## Open questions specific to Res Liquidae

- **Does Spanish genuinely lack a productive predicative classifier
  for Liquidae?** Boriskina's English includes *X is liquid / fluid*;
  the project's data has zero examples and the seed list has no
  predicative row. Pipeline result will confirm.
- **Will Res Liquidae remain dominant for *amor* across all 21
  variants, or are there regional reorderings?** Donina found
  Res Liquidae uniquely dominant for *love* in English with little
  variant-to-variant divergence. The Spanish hypothesis to test is
  whether Caribbean variants (where the Liquidae-Continens boundary
  may blur — see [[res-continens]]) show a different profile.
- **Should `diluirse` and `dissolverse` (the *dissolve* sub-pattern)
  be split from the general subject-intransitive into a sub-type?**
  Semantically they are distinct from *fluir* / *brotar* (dispersal
  vs. directed flow); 20 rows of `diluirse` with *amor* suggest the
  sub-pattern is large enough to be analytically worthwhile. Defer
  until pipeline data accumulates.
- **Does the Spanish-specific [[res-continens]] cannibalise Liquidae
  citations?** Many *llenar de miedo* / *vacío de amor* citations
  could plausibly be parsed as either "container holding liquid"
  (Continens) or "liquid filling space" (Liquidae). The factor
  analysis in Phase 6 is the principled tie-breaker; for the
  immediate Phase 2 collection, the classifier query distinguishes
  them by the *verb* (Continens uses *llenar / vaciar* on the
  container; Liquidae uses *fluir / inundar* on the liquid).
