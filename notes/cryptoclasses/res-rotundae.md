# Res Rotundae

The cryptoclass of **round, spherical, circular objects**. Categorising
feature *круглое* / *шарообразное* — "roundness" / "spherical shape"
(Boriskina 2011 §1.4; `notes/theory-boriskina.md` §7). One of
Boriskina's original six; inherited unchanged for Spanish. **Donina's
lowest-ranked cryptoclass for emonyms across English variants** —
emotions are least readily conceptualised as round-shaped objects, of
the six original categorising features.

The eighth and final per-class file. Whether Spanish preserves the
Donina-low ranking of Rotundae for emonyms is the last empirical
question the per-class commentary layer can frame ahead of Phase 2/3.

For the framework that grounds this file see
`notes/theory-boriskina.md`. The Spanish classifier-seed inventory lives
in `data/classifiers.tsv` (rows where `cryptoclass = "Res Rotundae"`).
This file is the **commentary** layer.

## Prototype

- **Spanish (project canonical)**: *pelota* — see
  `data/cryptoclasses.tsv`. Also *bola*, *esfera*, *globo*, *círculo*,
  *anillo*, *ovillo*.
- **Boriskina's English prototype**: *ball* (p. 47, 476).
  Distinguished from Res Parvae (where the salient feature is
  *graspability*, not shape — a marble is both round and graspable,
  but [+round] and [+graspable] are independent features), from
  Res Planae (flat surface, not spherical volume), and from
  Res Continens (hollow bounded interior — a sphere is solid by
  default, a container is not).

For *pelota* the [+round] feature is constitutive. Other round nouns
(*bola*, *globo*, *esfera*, *anillo*, *círculo*) are also non-
metaphorical members. Emonyms enter the class by analogy: *un círculo
vicioso de tristeza*, *envuelto en miedo*, *una bola de amor*, *el
miedo gira en torno a algo*.

## Cross-linguistic typological support

- **Navajo** has dedicated round-object classifier morphology in its
  classifier-verb-stem system (Boriskina §3, line 408).
- **Mandarin** uses several round-object numeral classifiers
  (*kē* 颗 for small spheres — pearls, grains; *gè* 个 for general
  round graspable objects; *lì* 粒 for tiny rounds).
- Both systems are well-known classifier-language examples of the
  [+round] feature being marked overtly. Typological grounding is
  solid.

## Boriskina's and Donina's findings — the low-ranking position

The central Donina finding (`notes/methodology-donina.md` lines 65–67,
Thesis 6 / p. 70):

> The emonym ranking by overall ПоКА across English variants is
> `Res Parvae > Res Liquidae > Res Acutae > Res Filiformes >
> Res Longae Penetrantes > Res Rotundae`.

**Res Rotundae is consistently last.** The interpretation: of the six
categorising features in Boriskina's framework, [+round] is the
**least readily recruited for emotion conceptualisation**. The Lakoff–
Johnson schema theory has no special CIRCLE schema for emotions;
emotions are more naturally *grasped* (Parvae), *flowed* (Liquidae),
*pierced* (Acutae / Penetrantes), or *wound* (Filiformes) than *rolled*
or *enclosed in a sphere*.

Donina's factor analysis returned Rotundae loading of **0.9849** on its
own factor for English — high; the class is statistically clean and
well-separated from the other five. The low ПоКА ranking is a
substantive finding about emonym metaphors, not a measurement artefact.

The Spanish manual data **broadly preserves the Donina ranking**:
sorted by class size, Rotundae is second-from-last (134 citations,
above only Res Acutae's 65). This is a soft confirmation pending
Phase 6 ПоКА computation, but the prediction holds at the citation-
volume level.

## Classifier inventory — original

### Russian / English (Boriskina 2011)

Predicate-word cluster around: *roll*, *spin*, *revolve*, *wrap*,
*envelop*, *encircle*, plus the predicational *be round*. The
constructional set covers six of Boriskina's seven types — all but
locative. Donina's English factor loading 0.9849 confirms the
inventory is clean.

## Classifier inventory — Spanish

Canonical seeds in `data/classifiers.tsv` (seven rows):

- `verbal-objective` — *rodar, envolver* — agent rolls / wraps
- `verbal-subject-intransitive` — *girar (en torno a, alrededor de),
  rodar* — emonym revolves
- `verbal-subject-transitive` — *envolver* — emonym wraps the
  experiencer
- `verbal-instrumental` — *envuelto en*
- `attributive` — *redondo, esférico, circular*
- `predicative` — *es redondo, es esférico*
- `substantive` — *bola de, círculo de, esfera de* — note from
  `data/classifiers.tsv`: *círculo vicioso de tristeza* is the
  single most recurrent substantive collostruction.

**Seven of nine construction types populated** — comparable to
[[res-longae-penetrantes]]. The locative slots are empty (round
objects are not located *in / into / out of* things metaphorically
with emonyms in any productive way) and the inventory has no
`idiomatic` slot for emonyms (the closest candidate, *círculo
vicioso*, is treated as a productive substantive collostruction
rather than a frozen idiom).

### Spanish-specific lexical notes

- ***Círculo vicioso* + de + emonym** is the productive Spanish-
  specific Rotundae substantive: *círculo vicioso de tristeza*,
  *círculo vicioso de miedo*, *círculo vicioso de violencia y
  miedo*. The collostruction calques Latin *circulus vitiosus* via
  scholastic logic; in modern Spanish it has bleached from a
  technical logical term to a productive metaphor for self-
  perpetuating emotional states. High-precision Rotundae diagnostic.
- *Envolver* and *envuelto en* are the **most cross-class-fraught**
  Rotundae lemmas. The verb's semantic core is "wrap around", which
  reads naturally as Rotundae (ball-image, the wrap forms a
  spherical envelope) but **shades into [[res-continens]]** when
  the wrap is interpreted as an enclosure (the wrap *contains*).
  *Envuelto en miedo* could be analytically Rotundae (the miedo
  wraps spherically around the experiencer) or Continens-adjacent
  (the miedo encloses the experiencer in a bounded interior). Like
  the *punta de* problem between [[res-acutae]] and
  [[res-longae-penetrantes]], this is a Phase 3 LLM-tagging issue
  and a Phase 6 factor-loading question.
- *Girar en torno a + N* / *girar alrededor de + N* — productive
  intransitive (life *revolves around* the emonym). *Toda su vida
  gira en torno al miedo* is a frequent collostruction in
  psychological / self-help register.
- *Rodar* (to roll) — used both as objective (*rodar la pelota*,
  *rodar el amor*) and intransitive. With emonyms, the intransitive
  *el amor rueda* is rare; the verb is more productive with
  manipulation verbs (*hacer rodar el miedo*).

## Construction-type structure — keep in mind

Seven of nine construction types populated. The bulk of citations
(roughly 60 %) are in two slots: `verbal-subject-intransitive`
(~ 50 %, dominated by empty-lemma rows that spot-check to
*girar / rodar*) and `verbal-instrumental` (~ 25 %, dominated by
*envuelto en*). The attributive *redondo / esférico / circular* and
substantive *bola de / círculo de / esfera de* are diagnostic but
low-volume.

Implication for Phase 2: the most productive query targets are
`girar en torno a + N`, `envuelto en + N`, and `círculo vicioso de +
N`. The first two have non-classifier-readings to filter (*girar* in
physical-rotation contexts, *envuelto* in literal-wrapping contexts);
the *círculo vicioso* collostruction is high-precision.

## Current data status

From `data/citations.tsv` (rows where `cryptoclass = "Res Rotundae"`):

- **134 citations** — seventh-largest, second-smallest after
  Res Acutae (65).
- **Dominant patterns** (with extraction caveat on empty-lemma rows):
  - `amor verbal-subject-intransitive` (empty) — 39
  - `miedo verbal-subject-intransitive` (empty) — 23
  - `miedo verbal-instrumental` (empty) — 19
  - `amor verbal-instrumental` (empty) — 12
  - `miedo substantive círculo de` — 6
  - `alegría verbal-objective rodar` — 6
  - `miedo verbal-instrumental envuelto en` — 5
  - `amor substantive bola de` — 5
  - `alegría attributive redondo` — 5
- **Per-variant coverage**: US 29, MX 24, AR 20, ES 14, CO 12. The
  US-leading position is unusual (other classes have ES leading),
  worth noting but unlikely to be a robust effect at this sample
  size. **Central America is essentially zero**: GT 0, NI 0, CR 0,
  SV 0, HN 2, PA 1, PY 0. The smaller variants similarly thin
  (UY 1, PR 3, EC 3, DO 3, BO 2, CU 3). Critical-mass threshold
  met for ~ 5 variants only.
- **Per-emonym distribution**: *miedo* and *amor* together dominate
  (~ 80 % of class rows). *alegría* and *tristeza* together about
  15 %. *ira* is essentially absent (one row) — paralleling
  *ira*'s absence from [[res-acutae]] but for a different reason
  (anger is not particularly round, just as it is not particularly
  sharp in Spanish).

### Known caveats

- The empty-lemma rows in subject-intransitive (62 rows across
  emonyms) and verbal-instrumental (31 rows) are the largest
  extraction-caveat cohort in any class proportionally. Spot-checking
  suggests most are *girar en torno a* / *envuelto en* — both
  high-frequency seeds — but lemma re-tagging in the pipeline is
  needed to confirm.

## Query-design hints for Phase 2

Pipeline-specific notes carried forward to `pipeline/README.md`:

- **`círculo vicioso de + N` is the highest-precision Rotundae
  diagnostic**. Almost every match is classificatory. Run first
  to validate the pipeline against the gold set, and use as the
  high-precision anchor for the other (lower-precision) queries.
- **`girar en torno a / alrededor de + N`** is high-yield but has
  literal physical-rotation readings (planet motion, mechanical
  rotation) to filter. The metaphorical emonym reading (*todo
  gira en torno al miedo*) is diagnostic.
- **`envuelto en + N`** must be paired with Phase 3 LLM tagging
  for Rotundae-vs-Continens disambiguation (see *Spanish-specific
  lexical notes* above). Tag each citation for whether the live
  cognitive image is a sphere or an enclosure; let Phase 6 factor
  loading provide the principled resolution.
- **`bola de + N` and `esfera de + N`** are high-precision but
  low-yield. Use as Rotundae purity checks; the *bola de* in
  particular has very few non-classifier readings with emonyms.
- **`redondo / esférico / circular + emonym`** is unusual in
  Spanish (*una alegría redonda* is poetic, not idiomatic) — the
  attributive may have lower yield than the seed list implies.
  Worth a calibration query to confirm.

## Open questions specific to Res Rotundae

- **Does Spanish preserve Rotundae as the lowest-ranked emonym
  class, as in Donina's English?** Manual data preview suggests
  yes — Rotundae is second-smallest by citation count. Phase 6
  ПоКА computation is the principled check.
- **Is *envuelto en + emonym* Rotundae or Continens-adjacent?**
  Same shape as the [[res-acutae]] / [[res-longae-penetrantes]]
  *punta de* boundary problem; Phase 3 LLM tagging + Phase 6
  factor loading decide.
- **Why does the US lead in raw Rotundae citations?** May reflect
  US-Spanish bilingual contact effects (English emonym metaphors
  influencing Spanish via code-switching / calquing) or simply
  collection volume. Worth checking in the post-pipeline audit
  alongside the AR-dominance question for
  [[res-longae-penetrantes]].
- **Is *círculo vicioso* productive enough across variants to
  warrant its own classifier-pattern row?** Currently grouped
  under `substantive` alongside *bola de* and *esfera de*, but it
  is the dominant Rotundae substantive in the manual data. Promote
  to its own row in `classifiers.tsv` if the pipeline confirms
  cross-variant productivity.
- **Is *ira*'s near-absence from Rotundae a real Spanish gap or a
  manual collection artefact?** *Ira* is also absent from Acutae
  ([[res-acutae]]'s open question #2) and over-represented in
  Planae. The pattern across the three classes suggests Spanish
  conceptualises anger as something *measurable* (*nivel de ira*)
  rather than something with a distinctive shape (round, sharp,
  long-penetrating). If the pipeline confirms this pattern across
  variants, it is a publishable finding about Spanish emonym
  geometry.
