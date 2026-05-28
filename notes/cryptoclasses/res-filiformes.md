# Res Filiformes

The cryptoclass of **thread-like, filiform objects**. Categorising
feature *нитевидная (нестабильная нитеподобная) форма* — "thread-like
form, an unstable filiform shape" (Boriskina 2011 §1.4 / p. 68, p. 681;
`notes/theory-boriskina.md` §7). One of Boriskina's original six;
inherited unchanged for Spanish. **Hosts the project's first
attestable divergence from Donina's English findings**: where Donina
explicitly recorded that *fear is not in Res Filiformes for English*
(`notes/theory-boriskina.md` §5.4, line 525), the Spanish manual data
contains multiple productive *miedo*-in-Filiformes attestations.
Whether this is a real cross-linguistic difference is the central
question this class answers.

For the framework that grounds this file see
`notes/theory-boriskina.md`. The Spanish classifier-seed inventory lives
in `data/classifiers.tsv` (rows where `cryptoclass = "Res Filiformes"`).
This file is the **commentary** layer.

## Prototype

- **Spanish (project canonical)**: *hilo* — see
  `data/cryptoclasses.tsv`. Also *cuerda*, *cordón*, *cable*, *soga*,
  *cinta*, *madeja*, *ovillo*.
- **Boriskina's English prototype**: *thread* (p. 47, 478).
  Distinguished from Res Longae Penetrantes (where the feature is
  *rigid penetrative length*, not flexible thread-likeness) and from
  Res Planae (flat surface, not linear filament).

For *hilo* the [+filiform] feature is constitutive. Other filiform
nouns (*cuerda*, *cable*, *cinta*, *trenza*) are also non-metaphorical
members. Emonyms enter the class by analogy: *tejer el miedo*,
*desatar la alegría*, *miedos entrelazados*, *hilo de esperanza*, *los
miedos nos atan*.

## Cross-linguistic typological support

Strong. Many classifier systems mark filiform objects overtly:

- **Mandarin** uses *tiáo* (条) as a dedicated classifier for "long
  thin flexible" objects — fish, snakes, ropes, pants, sentences
  (Boriskina §3, p. 49–52; Aikhenvald 1998).
- **Korean numeral classifiers** likewise.
- Many Australian classifier languages mark thread-like objects in
  paradigmatic opposition to rigid-long objects (the same opposition
  that distinguishes Res Filiformes from Res Longae Penetrantes in
  Boriskina's framework).

The typological grounding is among the strongest of the eight classes
— comparable to Res Liquidae and Res Parvae.

## Boriskina's and Donina's findings — the *fear* anomaly

Boriskina (`notes/theory-boriskina.md` §5.4, line 524–525), discussing
the *boundedness* of cryptoclass membership:

> *Fear* is in many classes (Liquidae, Acutae, Parvae, Continens, …)
> but is **not** in arbitrary others (e.g. it does not seem to be in
> Filiformes for English).

Donina's factor analysis returned Res Filiformes factor loading of
**0.9841** for English — high, confirming that the class is
statistically clean and well-separated from the other five in
Boriskina's inventory.

The Spanish manual data **inverts the *fear* exclusion**:

- *miedo tejido* (woven fear)
- *los miedos se entrelazan* (fears interweave)
- *los miedos nos atan* (fears bind us)
- *amarrarse a sus miedos* (to tie oneself to one's fears)
- *tejer el miedo / la propaganda del miedo* (to weave the propaganda
  of fear)

These are all productive Filiformes patterns in the corpus, attested
across multiple variants (AR, CL, CO, CU, DO at minimum). The
divergence is real in the manual data; the open question is whether it
is (a) a genuine cross-linguistic difference between English and
Spanish in how *fear* is conceptualised, (b) an under-collection of
English *fear*-in-Filiformes by Donina, or (c) Spanish-specific lexical
productivity of the *atar* / *desatar* / *tejer* network bleeding into
emonym domains where the cryptoclass-feature analogy is weak.

Whichever it is, this is the **first place** where the project's data
straightforwardly contradicts a specific Donina finding rather than
extending or refining it. Worth pursuing in Phase 6 and in the
scholarly writeup.

## The *desatar* problem (parallel to *nivel de* in Planae)

The single dominant classifier in Spanish Filiformes is the verb
*desatar* — 58 *amor* + 42 *alegría* + 22 *tristeza* citations,
roughly 35 % of all class rows. **Its status as a genuine Filiformes
classifier is partially in question**, by reasoning parallel to the
*nivel de* problem in [[res-planae]]:

- **Argument for**: *desatar* is etymologically and morphologically
  transparent — *des-atar*, "un-tie". The thread classifier semantics
  are constitutive: you can only *desatar* something that was first
  *atado* (tied with a thread / rope / binding). Used with concrete
  objects, the thread imagery is preserved.
- **Argument against**: in collocation with abstract nouns,
  particularly emonyms, *desatar* has bleached toward "unleash /
  trigger" — *desatar una guerra*, *desatar la alegría*, *desatar la
  ira*. The cognate idiom *desatar las pasiones* is fully bleached;
  no thread imagery survives in production or comprehension.

Unlike the *nivel de* case in Planae, the threat to Filiformes is
**less acute**: *desatar* has a dense network of clearly-Filiformes
siblings within the same construction-type slot (*atar*, *amarrar*,
*anudar*, *hilvanar*, *entrelazar*, *tejer*, *retorcer*), most of
which preserve the thread imagery transparently. Even if *desatar* is
bleached for emonyms, the class is not mono-classifier and would
survive the Varimax gate on the strength of *tejer* / *entrelazar* /
*atar* alone.

The Phase 3 LLM filter should nonetheless tag each *desatar + emonym*
citation for whether the thread imagery is live or bleached — the
distinction may matter for ПоКА interpretation per-variant.

## Classifier inventory — original

### Russian (Boriskina 2011)

Boriskina's classifier-set for Res Filiformes uses thread-manipulation
predicates: *тянуть*, *плести*, *спутывать*, *развязывать*,
*заматывать*, *обвивать*. The diagnostic collostructions cover:

- thread does itself (intransitive: *рвётся*, *запутывается*)
- agent works the thread (objective: *плетёт*, *развязывает*)
- thread ties / binds (subject-transitive: *стягивает*, *обвивает*)
- thread as material / substantive (*нить из X*, *моток X*)

### English (Boriskina 2011)

The English inventory: *weave, knit, untie, tangle, knot, twist,
unravel* (objective); *unwind, come undone, fray* (intransitive);
*bind, tether, tie up* (subject-transitive); *a thread of X*, *a
strand of X*, *a skein of X* (substantive); *tied / woven / knotted*
(attributive). Donina's factor loading 0.9841 indicates a clean
separation from the other classes.

## Classifier inventory — Spanish

Canonical seeds in `data/classifiers.tsv` (six rows for this class):

- `verbal-objective` — *desatar, entrelazar, tejer, retorcer,
  hilvanar, anudar* — agent works the thread
- `verbal-subject-intransitive` — *desatarse, tejerse, enrollarse* —
  thread acts on itself
- `verbal-subject-transitive` — *tensar, amarrar, atar, desatar,
  enhebrar* — thread ties / binds another entity
- `verbal-instrumental` — *atado con, tejido con, pender de*
- `attributive` — *tenso, tejido, atado, entrelazado*
- `substantive` — *hilo de, madeja de, carrete de, ovillo de*

**Six of nine construction types populated.** The three empty types
(predicative, the three locative slots) are structurally absent for
this class — threads are not located *in / into / out of* things
metaphorically with emonyms in the manual data, nor predicated as
*X is thread-like* productively.

### Spanish-specific lexical notes

- *Pender de* (substantive-like, listed under `verbal-instrumental`):
  literal Filiformes (thread holding something up — "to hang from"),
  also figurative-bleached "to depend on". *La esperanza pende de un
  hilo* preserves the thread imagery clearly; *el resultado pende de
  la votación* has bleached.
- *Hilo de + emonym* (substantive): preserves the thread metaphor
  fully — *un hilo de esperanza* (a thread of hope), *un hilo de
  alegría* (a thread of joy). High-precision Filiformes classifier.
- The *atar* / *desatar* etymological pair: both listed in seed
  inventories, but in different construction types (*atar* in
  subject-transitive, *desatar* in objective). The morphological
  *des-* prefix is a genuine semantic operator (untie ↔ tie), so the
  split is principled.

## Construction-type structure — keep in mind

The class is **moderately symmetric** — six of nine types populated,
with the bulk of citations concentrated in the verbal-objective slot
(~ 50 % of all class rows, driven by *desatar*) but with substantial
secondary mass in subject-intransitive (~ 15 %, *desatarse*,
*tejerse*) and attributive (~ 10 %).

Implication for Phase 2: budget query effort proportionally to the
construction-type yield — verbal-objective gets the largest share,
followed by subject-intransitive and attributive. Substantive yields
high-precision but lower-volume results (*hilo de*, *madeja de*,
*ovillo de*) and should be run as a quality check.

## Current data status

From `data/citations.tsv` (rows where `cryptoclass = "Res Filiformes"`):

- **341 citations** — third-largest cryptoclass dataset.
- **Dominant patterns**:
  - `amor verbal-objective desatar` — 58 rows
  - `alegría verbal-objective desatar` — 42
  - `tristeza verbal-objective desatar` — 22
  - `alegría verbal-subject-intransitive desatarse` — 21
  - `amor verbal-instrumental` (empty lemma) — 20
  - `amor verbal-subject-intransitive tejerse` — 19
  - `alegría attributive atado` — 18
  - `amor verbal-objective tejer` — 17
- **Per-variant coverage**: ES 53, AR 52, CO 31, CL 31, MX 30, US 27,
  PE 21. ES + AR together account for ~ 31 % of class rows — the
  highest Peninsular + Rioplatense concentration of any class.
  Central America again weakest (GT 2, HN 2, PA 3, NI 4, SV 5).
- **Per-emonym distribution**: *amor* dominant (~ 50 %),
  *alegría* second (~ 25 %), *tristeza* and *miedo* together
  ~ 18 %, *ira* tail. Note *miedo*'s presence at all is the Donina
  divergence noted above.

### Known caveats

- The empty-lemma rows in `verbal-instrumental` (20 *amor*) and a
  handful elsewhere are extraction artefacts from column-header
  positions; spot-checking shows most are *atado con*, *tejido con*,
  or *pender de* patterns. Lemma re-tagging needed in the pipeline.

## Query-design hints for Phase 2

Pipeline-specific notes carried forward to `pipeline/README.md`:

- **`tejer + emonym` is the highest-precision Filiformes query**.
  *Tejer* preserves the thread imagery fully and rarely admits a
  bleached reading with emonyms. Run first to validate the pipeline
  against the gold set.
- **`hilo de + emonym` substantive query** is similarly high-precision
  and yields data for the Donina-style "thread of X" comparison
  directly. *Hilo de esperanza* / *hilo de alegría* / *hilo de vida*
  are productive collocations.
- **`desatar + emonym` and `desatarse` queries** must be paired with
  LLM-level tagging for thread-imagery-live-vs-bleached
  (see *The desatar problem* above). The construction is high-volume
  but variably precise.
- **`atar / amarrar / anudar + emonym`** has the *amarrar* taboo
  caveat in some variants (it is occasionally a sexual euphemism in
  PE and CL, less marked than *coger* — see [[res-parvae]] §"Spanish-
  specific lexical gotcha") but is generally usable. Lemma-cluster
  with *atar* for cross-variant comparability.
- **`pender de + N`** has frequent literal readings (physical
  hanging) to filter; the figurative emonym reading is rarer but
  diagnostic.
- **`miedo` queries**: given the Donina divergence, run *miedo* +
  Filiformes-classifier queries with extra recall (lower-confidence
  matches included in candidate pool) so the analysis is not biased
  toward confirming the Donina exclusion.

## Open questions specific to Res Filiformes

- **Does Spanish genuinely conceptualise *miedo* in Filiformes, or
  is the manual data an artefact?** Donina explicitly recorded that
  *fear* is not in Filiformes for English. Pipeline-driven matched-
  volume comparison is the test. If Spanish *miedo* shows
  Filiformes ПоКА significantly above zero across multiple variants,
  the divergence is real and becomes a publishable finding.
- **Is *desatar* with emonyms a Filiformes classifier or a bleached
  unleash-verb?** Phase 3 LLM tagging should annotate each citation
  per-citation; the variance between live and bleached readings
  may itself be variant-specific (literary vs. journalistic vs.
  colloquial sources).
- **Does the *atar* / *desatar* network admit Filiformes-Continens
  boundary cases?** *Atado a sus miedos* could be read as
  Filiformes (bound by threads) or as Continens-adjacent (anchored
  inside). The factor analysis decides.
- **Is the dominance of ES + AR in this class a corpus artefact or a
  variant-level fact?** Filiformes thread-metaphors may be more
  productive in literary registers, which are over-represented in
  the ES and AR sub-corpora. The pipeline's corpus-coefficient
  normalisation (see `notes/corpora.md`) should control for this,
  but the result is worth checking explicitly.
