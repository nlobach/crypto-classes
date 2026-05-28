# Res Longae Penetrantes

The cryptoclass of **long, rigid, penetrating objects**. Categorising
feature *длинн[ость] и проника[ющая способность]* — "length combined
with penetrative capacity" (Boriskina 2011 §1.4 / p. 68;
`notes/theory-boriskina.md` §7). One of Boriskina's original six;
inherited unchanged for Spanish.

**Conceptually paired with [[res-acutae]]** — both classes share a
"pierces / penetrates" semantic core. Boriskina nevertheless keeps them
distinct: Acutae's categorising feature is *pointedness* (a needle, a
thorn — short and sharp), while Penetrantes's is *length + penetration*
(a spear, an arrow — long and driving-through). The Spanish data
already shows one explicit boundary problem between the two: the
substantive seed *punta de* appears in **both** classes'
`data/classifiers.tsv` inventories. Whether they survive as separate
factors in Phase 6 Varimax is the key empirical question this class
answers.

For the framework that grounds this file see
`notes/theory-boriskina.md`. The Spanish classifier-seed inventory lives
in `data/classifiers.tsv` (rows where
`cryptoclass = "Res Longae Penetrantes"`). This file is the
**commentary** layer.

Filename note: the legacy `Res Penentrantes.xlsx` (sic — *penentr-*) is
a typo preserved only in the `source_file` column of `citations.tsv`
per `data/SCHEMA.md`; the canonical project name is
*Res Longae Penetrantes* throughout.

## Prototype

- **Spanish (project canonical)**: *lanza* — see
  `data/cryptoclasses.tsv`. Also *flecha*, *clavo*, *espada*, *daga*,
  *puñal*, *estaca*.
- **Boriskina's English prototypes**: *spear* / *arrow* (p. 47, 475).
  Distinguished from Res Acutae (whose prototype is *needle* / *thorn*
  — short and sharp, but not long) and from Res Filiformes (whose
  prototype is *thread* — long but flexible and non-penetrating).

For *lanza* the [+long, +rigid, +penetrative] feature complex is
constitutive. Other long-rigid-penetrative nouns (*flecha*, *espada*,
*daga*, *clavo*) are also non-metaphorical members. Emonyms enter the
class by analogy: *el miedo me atraviesa*, *el amor penetra en el
alma*, *clavar el miedo en alguien*, *atravesado por la tristeza*.

## Cross-linguistic typological support

- **Navajo** distinguishes "long rigid" objects as a class in its
  classifier-verb-stem system (Boriskina §3, line 410).
- **Many Australian classifier languages** mark spear-like objects
  paradigmatically against thread-like objects — the same
  Penetrantes-vs-Filiformes opposition Boriskina's framework draws.
- The typological grounding is solid, though slightly narrower than
  the Liquidae or Parvae bases.

## The Penetrantes–Acutae boundary problem

The two classes are conceptually paired and the Spanish data surfaces
the boundary problem explicitly:

| Class | Categorising feature | Prototype | Spanish example |
|---|---|---|---|
| Res Acutae | [+sharp, +pointed] | needle / aguja | *miedo agudo*, *a punta de miedo* |
| Res Longae Penetrantes | [+long, +rigid, +penetrative] | spear / lanza | *miedo penetrante*, *atravesado por el miedo* |

In English the two are kept apart by distinct verb sets — *pierces /
pricks* (Acutae) vs. *runs through / penetrates* (Penetrantes) — and
Donina's factor analysis returned a clean separation (Acutae 0.9951
on its factor, Penetrantes 0.9769 on a different factor). In Spanish
the verbs are also distinct (*pinchar*, *punzar* for Acutae;
*atravesar*, *penetrar*, *clavar* for Penetrantes), **but the
substantive *punta de* sits in both seed inventories** (`data/
classifiers.tsv`):

- Res Acutae `substantive` — *punta de, filo de*
- Res Longae Penetrantes `substantive` — *punta de, golpe de*

*Punta de miedo* could be analytically Acutae (the pointed tip of a
needle-like emotion) or Penetrantes (the tip of a spear that
penetrates). The classifier-lemma is the same surface string; the
disambiguation lives in the cognitive image the speaker invokes,
which is exactly what cryptoclass analysis cannot directly observe.

Two principled responses:

1. **Phase 3 LLM tagging** — annotate each *punta de + emonym*
   citation for the live image (sharp-needle-tip vs. spear-tip). The
   training signal is the gold-set citations.
2. **Phase 6 factor analysis as the principled tie-breaker** — if
   *punta de* loads cleanly onto one factor and not the other (or
   onto a third, mixed factor), the data resolves the ambiguity
   statistically.

If the two classes collapse in Spanish Varimax (i.e. they share a
single factor), the inventory consolidation in ROADMAP §Phase 5
should consider merging them into a single *Res Penetrantes* class.
This is a different kind of failure mode than the
[[res-continens]] and [[res-planae]] provisional-class gates — here
both classes are inherited from Boriskina, but Spanish syntax may
have collapsed a distinction English keeps separate.

## Classifier inventory — original

### Russian / English (Boriskina 2011)

Boriskina's predicate-word cluster: *pierce*, *run through*,
*penetrate*, *thrust*, *drive in*, *transfix*. The constructional set:

- subject-transitive — `[X pierces Y]`, `[X runs through Y]`
- subject-intransitive — `[X penetrates Y]`, `[X drives through]`
- objective — `[drive X in]`, `[thrust X]`
- instrumental — `[pierced by X]`, `[transfixed by X]`
- attributive — `[piercing X]`
- predicative — `[X is piercing]`
- substantive — `[the thrust of X]`

Donina's factor loading **0.9769** for English — clean separation
from Acutae despite the conceptual proximity.

## Classifier inventory — Spanish

Canonical seeds in `data/classifiers.tsv` (seven rows for this class):

- `verbal-subject-transitive` — *atravesar* — S atraviesa O
- `verbal-subject-intransitive` — *penetrar (en)* — S penetra en O
- `verbal-objective` — *clavar, hincar* — drive / thrust into
- `verbal-instrumental` — *atravesado por, clavado por*
- `attributive` — *penetrante*
- `predicative` — *es penetrante*
- `substantive` — *punta de, golpe de*

**Seven of nine construction types populated** — the same breadth
Donina found for English. The two empty types are the three locative
slots (which would not be diagnostic of [+long, +penetrating] for
emonyms — locative shape lives in [[res-continens]]) and the
`verbal-subject-intransitive` slot beyond the seed *penetrar (en)*
(thin in manual data).

### Spanish-specific lexical notes

- *Atravesar* is the workhorse Penetrantes verb. Used with emonyms
  productively across literary and journalistic registers: *un dolor
  me atraviesa*, *el miedo atraviesa la familia*. High-precision
  classifier when paired with an emonym subject or instrumental
  agent.
- *Penetrar* carries **a sexual reading** in some contexts, more
  universally than *coger* (see [[res-parvae]] §"Spanish-specific
  lexical gotcha") but **less variant-fraught** — the sexual reading
  dominates only when the syntactic object is explicitly bodily. With
  emonym objects (*el miedo penetra en el alma*) the figurative
  reading is fully available across all variants and is the
  unmarked one in writing.
- *Clavar el miedo en alguien* — driving fear into someone, a frozen-
  ish collostruction. The *en + experiencer* slot is the Penetrantes
  diagnostic: the emotion is what is driven, the person is what is
  driven into.
- *Golpe de + N* (substantive, "blow of") is the Penetrantes-specific
  classifier that does **not** overlap with Acutae's *filo de*. It
  is one of the cleanest disambiguators for the class: *un golpe de
  alegría* (a stroke of joy) is unambiguously Penetrantes, never
  Acutae.

## Construction-type structure — keep in mind

Seven of nine construction types populated, with the bulk of citations
in `verbal-subject-transitive` (~ 35 % of class rows). Subject-
intransitive (~ 12 %) and instrumental (~ 25 %) follow. The
attributive *penetrante* and substantive *punta de / golpe de* are
diagnostic but lower-volume.

Implication for Phase 2: budget query effort proportionally to
construction-type yield, prioritising `verbal-subject-transitive` with
*atravesar* and `verbal-instrumental` with *atravesado por*. The
substantive queries are high-precision but the *punta de* one must be
disambiguated against Res Acutae per the boundary problem above.

## Current data status

From `data/citations.tsv` (rows where
`cryptoclass = "Res Longae Penetrantes"`):

- **194 citations** — fifth-largest cryptoclass dataset.
- **Dominant patterns** (with extraction caveat on empty-lemma rows):
  - `amor verbal-subject-transitive` (empty lemma) — 37
  - `amor verbal-instrumental` (empty) — 20
  - `amor verbal-subject-intransitive` (empty) — 19
  - `miedo verbal-subject-transitive` (empty) — 14
  - `miedo verbal-instrumental` (empty) — 14
  - `amor verbal-subject-transitive atravesar` — 14
  - `tristeza verbal-subject-transitive` (empty) — 10
  - `miedo verbal-subject-transitive atravesar` — 9
- **Per-variant coverage**: AR 83 ❗, ES 21, VE 16, MX 16, US 10,
  CO 10. **AR alone accounts for ~ 43 % of all Penetrantes
  citations** — the most extreme single-variant concentration of any
  class in the project. All other variants combined contribute
  fewer Penetrantes citations than AR alone. See
  *The AR-dominance question* below.
- **Per-emonym distribution**: *amor* dominant (~ 50 %), *miedo*
  second (~ 22 %), *tristeza* third (~ 13 %), *alegría* and *ira*
  tail.

### The AR-dominance question

The 43 % concentration in AR is **not** seen for any other class. For
comparison:

- Res Liquidae: AR has ~ 12 % of class rows (151 / 1 251)
- Res Continens: AR ~ 15 % (73 / 499)
- Res Filiformes: AR ~ 15 % (52 / 341)
- Res Penetrantes: **AR ~ 43 %** (83 / 194)

Three live interpretations:

1. **Collection artefact.** The xlsx for this class was collected
   primarily from AR sources, and other-variant collection was thin.
   The pipeline-driven matched-volume comparison will reset the
   balance.
2. **Genuine variant-level fact.** Rioplatense Spanish (AR, UY, PY)
   may have stronger literary traditions of the spear/sword
   metaphor — borrowing from gauchesco / tango lyrical traditions
   that English-language analyses do not capture.
3. **Genre artefact.** AR's literary register may be over-represented
   in the source materials *for this specific class*, while other
   variants were sampled from broader genres.

If the pipeline does not normalise the AR concentration, the Phase 6
Pearson correlation results for AR will be distorted by this single
class. Worth specifically auditing post-pipeline.

### Known caveats

- The 100+ empty-lemma rows across subject-transitive, instrumental,
  and subject-intransitive are extraction artefacts from column-
  header positions in the wide-format xlsx. Spot-checking suggests
  most are *atravesar* (subject-transitive), *atravesado por* /
  *clavado por* (instrumental), and *penetrar en* (subject-
  intransitive). Lemma re-tagging needed in the pipeline.

## Query-design hints for Phase 2

Pipeline-specific notes carried forward to `pipeline/README.md`:

- **`atravesar + N` is the highest-yield Penetrantes query**. Comes
  with frequent literal readings (*atravesar la calle*, *atravesar
  el río*) which the LLM filter must screen; the metaphorical
  emonym reading is the diagnostic one.
- **`atravesado por + N` instrumental query** is high-precision —
  almost every emonym-bearing match is classificatory.
- **`clavar + N + en + alguien`** is syntactically specific and
  high-precision. Good gold-set validation target.
- **`penetrar en + N`** — the bodily/sexual reading dominates with
  human-body objects; figurative reading with emonyms or abstract
  objects (*el miedo penetra en el alma*) is usable across all
  variants. The LLM filter screens by post-prep object type.
- **`punta de + emonym`** must be queried for both Penetrantes and
  Acutae assignment. Tag each match in Phase 3 with the live cognitive
  image; let Phase 6 factor loading provide the principled
  resolution.
- **`golpe de + emonym`** is Penetrantes-clean (no Acutae overlap).
  High-precision diagnostic, especially for *un golpe de alegría /
  tristeza / amor* — productive across registers.
- **Across-variant balance**: given the AR-dominance, the pipeline
  should explicitly track per-variant query yield for this class and
  report deviations from the cross-class baseline. If AR remains
  > 30 % of class citations after matched-volume collection, the
  effect is variant-level rather than collection-artefactual.

## Open questions specific to Res Longae Penetrantes

- **Do Penetrantes and Acutae survive Phase 6 Varimax as separate
  factors in Spanish?** The English data kept them apart cleanly
  (0.9951 and 0.9769 on different factors); the Spanish *punta de*
  overlap means the question is genuinely open for this project. If
  they collapse, the inventory should merge into a single
  *Res Penetrantes* class; if they remain separable, the boundary
  problem becomes a per-citation tagging issue solved at Phase 3.
- **Why does AR have 43 % of Penetrantes citations?** Three live
  interpretations above; only the pipeline can decide. Worth
  specifically auditing in the post-Phase-2 review.
- **Is *penetrar* productive enough with emonyms to keep its own
  intransitive slot, or does it collapse into *atravesar* +
  preposition?** The verbs differ aspectually (*penetrar* = enter
  through; *atravesar* = traverse from side to side) but in emonym
  collocations the distinction is often weak. Defer to per-citation
  data.
- **Should *golpe de + N* be promoted to its own classifier-pattern
  row in `classifiers.tsv`?** Currently grouped under `substantive`
  alongside *punta de*; but it's the only Penetrantes-clean
  substantive lemma and may warrant a row of its own for query
  weighting.
