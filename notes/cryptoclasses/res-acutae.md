# Res Acutae

The cryptoclass of **sharp, pointed objects**. Categorising feature
*остроконечность* — "sharp-pointedness" (Boriskina 2011 §1.4 / p. 68;
`notes/theory-boriskina.md` §7). One of Boriskina's original six;
inherited unchanged for Spanish.

For the framework that grounds this file (cryptoclass, classifier,
collostruction, prototype, metaphoronym, IDC / ИРа, CAC / ПоКА), see
`notes/theory-boriskina.md`. For Donina's variant-extension layer and the
exact worked example this file mirrors, see
`notes/methodology-donina.md` §6.

The Spanish classifier-seed inventory lives in
`data/classifiers.tsv` (rows where `cryptoclass = "Res Acutae"`). This
file is the **commentary** layer — what the prototype is, what the
Russian and English originals look like, what is distinctive about the
Spanish realisation, and how to design queries for it in Phase 2.

## Prototype

- **Spanish (project canonical)**: *aguja* — see `data/cryptoclasses.tsv`.
- **Boriskina's English prototypes** (p. 47, 104): natural sharp objects
  — *prickle, thorn, claw, sting, nail*; artefacts — *needle, knife*.
  Distinguished from Res Longae Penetrantes, where the salient feature is
  *length + penetration* (spear, arrow), not *pointedness per se*.

For the prototype noun, the categorising feature is constitutive of its
denotation (Boriskina §5.1): *aguja* without [+sharp] is unintelligible.
Prototypes are **not metaphoronyms** — their class membership is
non-metaphorical. Emonyms enter the class by analogy with the prototype
(*miedo agudo*, *un punzante miedo*, *a punta de miedo*).

## Classifier inventory — original

### Russian (Boriskina 2011)

The Russian-language source uses the categorising feature label
*остроконечность* directly; the diagnostic-collostruction set Boriskina
builds is given in English in her §2.5 (pp. 227–248). The Russian-only
glosses worth preserving for traceability:

- классификатор криптокласса = "cryptoclass classifier"
- классифицирующая конструкция = "classifier construction"
- эталон класса = "class prototype"
- метафороним класса = "class metaphoronym"

### English (Boriskina 2011, via Donina §1.10 / p. 104)

Donina reproduces Boriskina's classifier set for Res Acutae as a complete
worked example. Only **four** construction types are populated — see
*Construction-type asymmetry* below.

| Construction type | English classifier pattern |
|---|---|
| Subject-transitive | `[a sharp object pierces smth]`, `[a sharp object punctures smth]`, `[a sharp object pricks smth]` |
| Predicative | `[an object is sharp]`, `[an object is poignant]`, `[an object is acute]` |
| Attributive | `[a sharp object]`, `[a piercing object]` |
| Substantive | `[the prick of a sharp object]` |

Empty for Res Acutae in Boriskina's analysis: **subject-intransitive,
objective, instrumental**.

## Classifier inventory — Spanish

The canonical seed list per construction type is in `data/classifiers.tsv`.
Summary for orientation:

- `verbal-subject-transitive` — *pinchar, punzar*
- `verbal-objective` — *afilar, aguzar*
- `verbal-instrumental` — *pinchado por, punzado por*
- `attributive` — *puntiagudo, punzante, cortante, afilado, agudo*
- `predicative` — *es punzante, es agudo*
- `substantive` — *punta de, filo de*
- `idiomatic` — *a punta de, al filo de*
- `verbal-subject-intransitive` — *(empty; rare for this class)*

Two Spanish-specific divergences from the English originals worth
flagging explicitly:

1. **The `idiomatic` construction type is non-trivial here.** Spanish has
   the frozen prepositional idiom `a punta de + N` (and the weaker
   `al filo de + N`) which carries the [+sharp] classifier semantics
   without instantiating any of Boriskina's seven syntactic
   construction types cleanly. The schema (`data/SCHEMA.md`) accommodates
   this via the dedicated `idiomatic` slug. English has no comparable
   idiom; this class is therefore *larger in inventory* in Spanish than
   in Donina's English specification, not smaller.
2. **Gender / participle inflection matters at query time.** *Punzante*
   inflects only for number (*punzantes*); *agudo* inflects for both
   number and gender (*aguda*, *agudos*, *agudas*); *afilado* same.
   `Cortante* is gender-invariant. Any classifier query that hard-codes
   masculine-singular forms will under-collect. The query layer
   (Phase 2) must lemmatise or expand morphologically before matching.

## Construction-type asymmetry — keep in mind

Donina's worked example explicitly notes that Res Acutae populates only
four of Boriskina's seven construction types in English: sharp objects
are **typically agents** (they pierce things), **not patients** (you
don't typically *use* a sharpness in the same syntactic shape as you use
a hammer). Subject-intransitive, objective, and instrumental are
correspondingly thin.

The Spanish data so far confirms this (see *Current data status* below):
65 % of citations are attributive (`agudo`, `punzante`, `puntiagudo`) and
substantive (`punta de`). Subject-transitive and objective are rare; the
instrumental and subject-intransitive slots are effectively empty.

Implication for Phase 2: **do not** budget equal query effort across all
seven construction types for Res Acutae. The expected yield is
attributive + substantive + idiomatic ≫ the rest. The other four can be
covered with low-effort sanity queries.

## Current data status

From `data/citations.tsv` (rows where `cryptoclass = "Res Acutae"`):

- **65 citations total** — the smallest cryptoclass dataset by a wide
  margin (compare Res Liquidae 1 251, Res Continens 499).
- **Dominant patterns**: `attributive agudo` (~ 36 % of rows across all
  emonyms), `substantive punta de` (~ 22 %), `attributive punzante`
  (~ 8 %). Together these three account for roughly two-thirds of all
  Acutae citations.
- **Per-variant counts**: CO 13, MX 8, CL 7, AR 7, ES 5, VE / CU 4 each.
  Central America is effectively absent (NI 1; GT / HN / SV zero).
- **Per-emonym counts**: amor and tristeza dominate; *ira* has zero
  Res Acutae citations in the manual data — surprising for a
  prototypically "sharp" emotion in the universalist canon, and worth
  re-checking once the pipeline runs.

The ≥ 5-per-`(variant × cryptoclass)`-cell critical-mass threshold
(ROADMAP §Phase 4) is met for essentially no cells in Res Acutae from
the manual data alone. This class is therefore one of the highest-value
targets for the Phase 2 corpus-sifting pipeline.

## Query-design hints for Phase 2

Pipeline-specific notes carried forward to `pipeline/README.md` when
that file is created:

- Prioritise attributive + substantive + idiomatic queries. Expected
  precision is high (the patterns are syntactically tight) and yield
  is the bulk of useful data.
- The `a punta de` idiom is a **fixed string** at the surface but the
  emonym slot afterwards varies (with/without article, with/without
  modifier: *a punta de miedo*, *a punta de el miedo*, *a punta de un
  miedo terrible*). Query with a window, not a literal-string match.
- *Aguzar* is a low-frequency verb that nonetheless has a precise
  classifier reading with emonyms (*aguzar el miedo*, *aguzar el
  ingenio*). Worth a targeted high-recall query.
- *Agudo* is highly polysemous — *dolor agudo* (medical), *acento
  agudo* (linguistic), *ángulo agudo* (geometry). Most surface matches
  are noise. Filter aggressively by emonym co-occurrence within a small
  window (≤ 3 tokens) before LLM tagging.
- Subject-transitive *pinchar / punzar* queries: keep but expect low
  precision because both verbs have non-classifier readings (literal
  pricking, irritation). Send all candidates through the LLM filter.

## Open questions specific to Res Acutae

- **Is `al filo de` distinct enough from `a punta de` to merit a
  separate classifier-lemma row, or are they two surface forms of the
  same `idiomatic` classifier?** Currently `data/classifiers.tsv`
  groups them; revisit if pipeline data shows them behaving
  differently across variants.
- **Does *ira* really have zero Res Acutae usage in Spanish?** The
  manual data says yes; the universalist expectation (English: "a sharp
  anger", Russian: *колкая злость*) says no. Either the Spanish
  conceptualisation genuinely differs, or the manual collection missed
  it. The pipeline will resolve this.
- **Should *cortante* be promoted from attributive to its own
  construction-type cluster?** It carries a slightly different
  semantics (cutting / slicing, not pricking) and may behave as a
  distinct sub-classifier. Defer until enough data accumulates.
