# Cryptoclass membership of the 5 Spanish emonyms — preliminary matrix

Date: 2026-06-02 (regenerated after the curation sweeps — adds the class-wide
`círculo de` exclusion and reflects the duplicate drop-list + Problem-1.5
reassignments).
Source: `data/citations.tsv` (8 cryptoclasses × 5 emonyms × 21 variants, pooled across variants).
Method: `pipeline/membership_matrix.js`; per-emonym detail via `pipeline/aggregate_profile.js`.
Indices per Boriskina (2011) §8.5; membership criteria per Donina (2016) §3 criterion 4.

This delivers, for the autoreferat, **which emonyms join which cryptoclasses,
which do not, and through which construction types** — at the Spanish-pooled
(all-variants-combined) level. Per-variant statistics remain out of scope:
cell density is too thin (see `profile-miedo.md` §5). Treat as **preliminary
and proof-of-method**, not the final per-variant result Donina reports.

> **N reconciliation.** This script reads the raw `citations.tsv` and applies
> the *class-wide* exclusions (`nivel de`, `círculo de`) plus the duplicate
> drop-list and the Problem-1.5 reassignments. It does **not** apply the
> *per-emonym id-specific* exclusions wired into `build_gold.js` (the `temor`
> rows, two disputed/intensity *miedo* rows, the `pen-amor-mx-0006` beloved
> row, the `lágrimas…rodaban` *tristeza* row, blank-lemma fragments). So its
> pooled N runs a few above the frozen gold sets: matrix vs gold = miedo
> 395/390, tristeza 366/363, amor 1061/1059, alegría 738/737, ira 99/99. The
> **gold-set numbers in each `profile-<emonym>.md` are authoritative**; the
> sub-1 % differences here do not move any membership verdict.

## Membership criteria (stated for the autoreferat)

A cell `(emonym × cryptoclass)` receives one of four verdicts:

| Glyph | Verdict | Rule |
|---|---|---|
| **★ / ++** | core member | genuine member **and** CAC ≥ 15 % (a top-tier class for that emonym) |
| **+** | member | `Sᵢ ≥ 5` (Donina critical mass) **and** realised by ≥ 2 distinct classifiers |
| **~** | marginal | `Sᵢ ≥ 5` but a single classifier carries ≥ 90 % (frozen-idiom signature, Boriskina §11.4), **or** `2 ≤ Sᵢ < 5` |
| **·** | non-member | `Sᵢ < 2` |

Three curation rules, all inherited from the project's decisions log:

1. **`nivel de` excluded from Res Planae** class-wide. *nivel de X* ("level of
   X") is a quantifying/measurement collocation, not the flat-surface (*plano /
   llano / liso*) image that defines the class. The data forces this: `nivel de`
   is **the** Res Planae classifier for every emonym — miedo 93/94, tristeza
   18/20, amor 75/79, alegría 25/27, **ira 32/32 (100 %)**. The decision,
   originally taken for *miedo* only (`notes/cryptoclasses/_inventory-decisions.md`,
   2026-06-01), is here generalised to all five.
2. **`círculo de` excluded from Res Rotundae** class-wide (**added 2026-06-02**).
   *círculo (vicioso) de X* is the *vicious-cycle* idiom — it names a
   self-perpetuating cycle, not the round-object image (*bola / círculo /
   esfera* as a shape) that defines the class; in several citations the noun is
   merely one item in a list (*círculo vicioso de tristeza y depresión*). Same
   frozen-collocation logic as `nivel de`. The data: `círculo de` was the whole
   of *tristeza* Res Rotundae bar one row (10/11 before the sweep) and 1 *miedo*
   row. Decided in the curation sweep (parallel to `nivel de`) and wired into
   both `build_gold.js` and this script.
3. **Critical mass = 5** observations per cell (Donina criterion 4); below that
   no reliable index is computed.

## The matrix

Glyphs (post-`nivel de`- and -`círculo de`-exclusion):

| emonym | LIQ | FIL | ROT | PEN | ACU | PAR | PLA | CON |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **miedo**    | + | + | + | + | + | + | · | **★** |
| **tristeza** | **★** | + | ~ | + | ~ | ~ | ~ | **★** |
| **amor**     | **★** | **★** | + | + | + | + | ~ | + |
| **alegría**  | **★** | + | + | + | + | + | · | + |
| **ira**      | **★** | ~ | ~ | + | · | ~ | · | **★** |

Changes from the pre-sweep matrix: **ira ROT · → ~** (the 2 `envuelto en ira`
rows reassigned in from *miedo* lift it to n = 3, marginal), and **alegría PLA
~ → ·** (down to 1 row once the data settled). *tristeza* ROT stays `~` but now
rests on the single genuine `bola de tristeza`, not the excluded `círculo de`.

CAC % (share of the emonym's total citations per class; `N` = pooled citations after exclusion):

| emonym | LIQ | FIL | ROT | PEN | ACU | PAR | PLA | CON | N |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| miedo    | 11.4 | 4.6 | 11.4 | 12.2 | 5.6 | 8.6 | 0.3 | **46.1** | 395 |
| tristeza | **42.3** | 10.1 | 0.5 | 8.5 | 3.0 | 0.5 | 0.5 | **34.4** | 366 |
| amor     | **44.4** | 19.3 | 5.7 | 8.5 | 1.9 | 7.3 | 0.4 | 12.6 | 1061 |
| alegría  | **67.5** | 12.9 | 1.6 | 1.8 | 1.5 | 5.0 | 0.1 | 9.6 | 738 |
| ira      | **45.5** | 2.0 | 3.0 | 8.1 | 0.0 | 10.1 | 0.0 | 31.3 | 99 |

## Variant coverage behind each verdict

How many of the 21 variants actually support each cell. Format **`present/critical`**:
*present* = variants with ≥ 1 citation; *critical* = variants individually clearing
Donina's ≥ 5 threshold (i.e. variants that could carry a per-variant statistic on
their own). This is the spread behind every glyph above — a `+` resting on one
variant is weaker evidence than a `+` spread over fifteen.

| emonym | LIQ | FIL | ROT | PEN | ACU | PAR | PLA | CON |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| miedo    | 12/4 | 11/0 | 12/4 | 14/4 | 13/0 | 14/3 | 1/0 | **19/10** |
| tristeza | **20/9** | 10/4 | 2/0 | 12/2 | 7/0 | 2/0 | 2/0 | **18/9** |
| amor     | **21/18** | 19/11 | 13/4 | 13/4 | 11/0 | 17/4 | 3/0 | 15/7 |
| alegría  | **20/15** | 21/8 | 7/0 | 4/1 | 7/0 | 16/1 | 1/0 | 16/4 |
| ira      | 14/3 | 2/0 | 2/0 | 6/0 | 0/0 | 5/0 | 0/0 | 12/3 |

What the coverage column adds to the verdict:

- **The two core axes are also the best-spread.** Res Liquidae for *amor* is
  present in **all 21** variants (18 ≥ 5) and for *alegría* in 20 (15 ≥ 5) —
  genuinely pan-hispanic, not a peninsular artefact. Res Continens for
  *miedo*/*tristeza* sits at 19/21 and 18/21 present with 9–10 variants ≥ 5.
  These memberships are the only ones robust enough to attempt per-variant
  statistics on now.
- **Some `+` verdicts are pooled-only.** They clear ≥ 5 *in aggregate* but no
  single variant does (the `present/0` cells): *miedo* FIL 11/**0** and ACU
  13/**0**; *amor* ACU 11/**0**; *alegría* ROT 7/**0**, ACU 7/**0**. The
  membership is real at the language level but **not yet demonstrable in any one
  variant** — flag these as pooled-only in the abstract.
- **`ira` rests on a handful of variants throughout.** Even its core classes top
  out at 3 variants ≥ 5 (LIQ, CON). No `ira` membership is per-variant-ready.
- **The strong variants are consistent**: ES, MX, AR, CO, CL, US, VE carry almost
  every cell; the Central American + small-Andean block (GT, HN, SV, NI, CR, PA, PY,
  BO, EC) appears only sporadically and never reaches ≥ 5 — the predictable
  under-resourcing (`methodology-donina.md` §5.7).

The full per-cell variant lists (e.g. *miedo* CON: `ES:32 MX:27 AR:23 US:22 CL:17
CO:17 PE:7 VE:7 CU:6 BO:5 …`) print under each membership in the script output and
are the basis for the footnotes; they are not reproduced in full here to keep the
table readable. Run `node pipeline/membership_matrix.js` for the complete lists.

## Per-variant-ready ("green-light") set

The coverage table above is pooled membership; this is the **next-layer** question:
*which memberships are built on enough individual variants to carry cross-variant
statistics (Pearson `r`, Kendall's `W`) now?* A cell qualifies as green-light if it
is a member (`+`/`★`) **and** ≥ 6 variants individually clear the ≥ 5-citation
threshold. Everything else is a genuine pooled membership but a **Phase-2 collection
target** for per-variant work.

| emonym | class | variants ≥ 5 | (of present) | n | ready variants |
|---|---|--:|--:|--:|---|
| amor     | LIQ | **18** | 21 | 471 | MX ES AR PE CO US VE CL DO EC NI CU BO PA UY CR HN PR |
| alegría  | LIQ | **15** | 20 | 498 | ES AR MX CO CU US VE CL DO PE EC NI BO PR PY |
| amor     | FIL | **11** | 19 | 205 | ES AR CL US CO MX PE VE CU CR DO |
| miedo    | CON | **10** | 19 | 182 | ES MX AR US CL CO PE VE CU BO |
| tristeza | LIQ | **9** | 20 | 155 | AR ES MX CL CO CU US PE VE |
| tristeza | CON | **9** | 18 | 126 | AR ES MX CO VE US PE CL BO |
| alegría  | FIL | **8** | 21 | 95 | ES AR CO EC BO CL CU MX |
| amor     | CON | **7** | 15 | 134 | MX AR ES US CO PE VE |

Reading:

- **Eight cells are ready for cross-variant analysis now.** They confirm the two
  core axes: the **Liquidae** memberships of *amor / alegría / tristeza* and the
  **Continens** memberships of *miedo / tristeza / amor*, plus the **Filiformes**
  memberships of *amor / alegría*. These are where a per-variant Pearson/Kendall
  study is defensible at this stage.
- **The ready-variant lists are dominated by the same core set** (ES, MX, AR, CO,
  CL, US, PE, VE, CU) — these nine variants are what currently sustains any
  per-variant claim; the green-light memberships built on the most variants
  (*amor* LIQ at 18, *alegría* LIQ at 15) reach well into the under-resourced
  block and are the strongest.
- **Everything *not* in this table is pooled-only** — a real language-level
  membership whose per-variant analysis must wait for Phase 2. That includes every
  *ira* membership (its best cells reach only 3 variants ≥ 5), all of Res Acutae /
  Res Rotundae / Res Parvae, and the thinner Penetrantes cells. The complement of
  this table is therefore the **Phase-2 collection priority list**.

This set is recomputed by the script (threshold `READY_VARIANTS`, default 6); raise
or lower it to tighten or widen the green-light criterion.

## Reading: which emonyms join which classes

1. **Res Liquidae is the cross-emonym backbone.** It is a *core* member for four
   of five emonyms (tristeza, amor, alegría, ira) and a member for miedo —
   dominant for everything except *miedo*. *alegría* is the most strongly liquid
   (68 %). Spanish emotion is overwhelmingly conceptualised as **flowing /
   filling / spilling** matter.

2. **Res Continens is the second axis, strongest for the negative emotions.**
   Core member for *miedo* (46 %, its dominant class), *tristeza* (34 %) and
   *ira* (31 %); ordinary member for *amor* and *alegría*. Fear, sadness and
   anger are **containers you fall into / live in / are covered by**.

3. ***miedo* is the one emonym not led by Res Liquidae** — its dominant is Res
   Continens. It is also the broadest emonym: a genuine member of 7 of 8 classes
   (everything but Planae). Fear spreads across the whole inventory.

4. **Res Planae recruits no emonym.** Once `nivel de` is removed it collapses to
   non-member (miedo, alegría, ira) or marginal (amor, tristeza). On current
   Spanish data the flat-surface class **does not project emotion** — a clean
   negative result, and exactly the question the Varimax inventory gate must
   settle (`notes/cryptoclasses/res-planae.md`).

5. **Res Filiformes (thread) is genuine for the positives and *amor* especially.**
   Core for *amor* (19 %), member for *alegría*, *tristeza*, *miedo*; thin for
   *ira*. The classifier is overwhelmingly *desatar(se)* — emotion as something
   **unleashed / tied / woven**.

6. **Res Acutae and Res Rotundae are weak across the board.** Acutae reaches
   member status only for the high-N emonyms (miedo, amor, alegría); Rotundae
   only for miedo, amor, alegría (via *envolver / envuelto en*). Both are
   marginal/absent for *tristeza* and *ira* — and for *tristeza* the Rotundae
   verdict, once the `círculo de` cycle-idiom is excluded, rests on a single
   genuine `bola de tristeza`. Spanish emotion is not strongly *sharp* or *round*.

7. **Res Parvae is never core.** It is a member (miedo, amor, alegría) or
   marginal (tristeza, ira), but tops out at 10 % (ira). This is the headline
   **divergence from English**: Donina/Boriskina find *Res Parvae* the dominant,
   anthropocentric default for English emonyms; in Spanish it is a minor class
   and **Res Liquidae + Res Continens** carry the load. ⚠️ Provisional — see
   confound notes below (collection balance, and the kept give-verbs `entregar` /
   `traer`, whose bleached-vs-live status is discussed in the writeup).

8. ***ira* is data-starved** (N = 99) and shows the most non-members. Its profile
   (LIQ + CON core, the rest thin) is suggestive but needs Phase 2 collection
   before any variant claim.

## Through which construction types membership is realised

The classifiers below are the constructions that *carry* each membership (top
construction types + lemmas per `+/★` cell):

| Class | Construction-type signature | Carrying classifiers |
|---|---|---|
| **Res Liquidae** | subject-intransitive · instrumental · subject-transitive | *fluir, brotar, rebosar*¹ (intr.); *inundar de, inundado por* (instr.); *inundar* (tr.); *derramar* (obj.); *gota/torrente de* (subst.) |
| **Res Continens** | locative-state · locative-into · objective · locative-out | *vivir/estar/encontrarse en* (state); *caer en* (into); *tapar, destapar* (obj.); *sacar de* (out); *lleno de* (predicative) |
| **Res Filiformes** | objective · subject-intransitive · substantive | *desatar(se)* (obj., dominant); *tejer(se), entrelazar(se)* ; *hilo de* (subst.) |
| **Res Longae Penetrantes** | subject-transitive · instrumental | *atravesar, penetrar* (tr.); *atravesado por* (instr.); *clavar* |
| **Res Parvae** | objective-grasp · objective-throw · substantive | *coger, agarrar, traer*¹ (grasp/transfer); *lanzar, tirar* (throw); *puñado/manojo de* (subst.) |
| **Res Rotundae** | subject-intransitive · instrumental · objective | *envuelto en, envolver* ; *girar en torno a, rodar* ; *bola de* (`círculo de` now excluded — rule 2) |
| **Res Acutae** | attributive · substantive · predicative | *agudo, punzante, puntiagudo* (attr.); *punta/filo de* (subst.) |
| **Res Planae** | — (no genuine membership; `nivel de` excluded) | — |

¹ **Seeding gaps flagged for Phase 2.** `rebosar (de)` carries 114 of *alegría*'s
136 unmatched Liquidae rows but is not yet a seed lemma (it is genuine Liquidae —
see `audit-alegría.md` §7.1); and the give-verb `entregar` carries much of the
*amor*/*alegría* Parvae tail (kept as a classifier per the curation decision, to be
seeded and discussed in the writeup). Neither changes a verdict here; both raise the
relevant IDC once seeded.

Two construction-type observations worth a sentence in the autoreferat:

- **Each class has a characteristic construction-type profile that is stable
  across emonyms.** Liquidae lives in the verbal-subject and instrumental slots
  (the emotion flows / floods); Continens lives in the locative slots (the three-
  way state/into/out split this project added pays off — it is exactly where
  Continens membership concentrates); Filiformes lives in the objective slot
  (*desatar* — to unleash); Acutae lives only in the attribute/substantive slots
  (sharp objects are described, not enacted — matching Donina's §6 observation
  that Res Acutae lacks subject and instrumental constructions). This is
  preliminary evidence that the 12-slug construction-type schema is doing real
  classificatory work.
- **The same emonym joins different classes through different doors.** *tristeza*
  is Liquidae chiefly via subject-transitive *inundar* ("sadness floods X") but
  Continens chiefly via locative-into *caer en* ("to fall into sadness"). The
  construction type, not just the lemma, is what assigns the class.

## Caveats (must accompany the numbers in the autoreferat)

1. **Pooled, not per-variant.** These are hispanofonía-wide aggregates. Donina's
   actual deliverable is the per-variant ПоКА vector and the cross-variant
   Pearson/Kendall structure. Current cell density does not support that
   (`profile-miedo.md` §5); these aggregates are the proof-of-method step.
2. **The Res Parvae divergence from English is confounded.** The two project-
   added classes (Continens, Planae) and the highest-coverage classes received
   the most collection effort; *Res Parvae* may be under-collected rather than
   genuinely minor. Additionally the kept give-verbs (`entregar`, `traer`) inflate
   Parvae if they are bleached light-verbs rather than live graspable-object
   images (cf. *dar miedo*) — a question deferred to the writeup. A fair
   Spanish-vs-English claim needs balanced collection across all 8 classes
   (ROADMAP Phase 2). State as *suggestive*, not *found*.
3. **IDC denominators are operational.** The `M` (seed-inventory size) counts
   morphological/prepositional variants as separate rows, inflating `M` unevenly
   (`profile-miedo.md` §3). IDC here is ordinal, not absolute.
4. **`ira` and the Central-American variants are under-resourced.** Verdicts for
   `ira` rest on < 100 citations; per-variant breakdown is not yet defensible.

## Reproduce

```sh
node pipeline/membership_matrix.js          # curated (nivel de + círculo de excluded)
node pipeline/membership_matrix.js --raw    # raw, both collocations kept
node pipeline/aggregate_profile.js <emonym> --from-gold   # authoritative per-emonym gold-set detail
```
