# *amor* — Phase 1 coverage audit

> ⚠️ **COUNT-based (2026-06-02) — superseded for distribution.** Any CAC %/`n`
> here count *rows*, not corpus occurrences (Σfrequency). The authoritative
> frequency-mass distribution is
> [`distribution-frequency-mass.md`](distribution-frequency-mass.md). The coverage
> / gap analysis below is unaffected.

Date: 2026-06-02.
Source: `data/derived/gold-amor.tsv` (n = 1060) via
`pipeline/coverage_miedo.js amor --from-gold`.

Gap record for the *amor* leg of the ROADMAP Phase-1 residual. This is a
**mechanical-first** audit (see `profile-amor.md` curation note): the gold
set had the generic pass; the deeper sweeps were **run 2026-06-02** and are
recorded as resolved in §7.

## 1. Totals

- **1,059** *amor* citations in the curated gold set (1,170 raw; 1 row
  removed in the fixed-expression sweep — §7).
- All **21** national variants have ≥ 1 *amor* citation (no dead variant).
- **7** of 8 cryptoclasses well populated; **Res Planae** holds 4 citations.
- **112 / 168** cells filled (**66.7 %**) — best coverage of any emonym.
- **56** cells empty (33.3 %).

## 2. Coverage matrix

Curated gold set (n = 1059).

|                       | AR | BO | CL | CO | CR | CU | DO | EC | ES | GT | HN | MX | NI | PA | PE | PR | PY | SV | UY | VE | US | **Σ** |
|---                    |---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Res Liquidae          | 50 | 11 | 26 | 37 |  6 | 12 | 25 | 19 | 53 |  3 |  5 | 71 | 13 | 10 | 46 |  5 |  2 |  3 |  8 | 29 | 37 | **471** |
| Res Filiformes        | 34 |  1 | 19 | 18 |  6 |  7 |  5 |  3 | 36 |  · |  · | 18 |  2 |  1 | 14 |  3 |  1 |  1 |  2 | 14 | 19 | **204** |
| Res Continens         | 24 |  1 |  2 | 14 |  · |  3 |  1 |  4 | 17 |  1 |  · | 31 |  1 |  · | 13 |  · |  · |  · |  1 |  5 | 16 | **134** |
| Res Longae Penetrantes| 47 |  1 |  3 |  4 |  · |  3 |  · |  · | 10 |  2 |  1 |  5 |  · |  · |  1 |  · |  2 |  · |  · |  7 |  3 | **89** |
| Res Parvae            |  9 |  2 |  3 | 18 |  2 |  4 |  2 |  2 |  2 |  · |  · | 12 |  · |  3 |  3 |  2 |  2 |  2 |  · |  5 |  4 | **77** |
| Res Rotundae          | 10 |  1 |  1 |  2 |  · |  1 |  · |  · |  2 |  · |  · | 11 |  · |  1 |  3 |  1 |  · |  · |  1 |  5 | 21 | **60** |
| Res Acutae            |  3 |  1 |  2 |  4 |  1 |  2 |  · |  · |  1 |  · |  · |  2 |  · |  2 |  · |  · |  1 |  · |  · |  1 |  · | **20** |
| Res Planae            |  · |  · |  · |  1 |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  1 |  2 | **4** |
| **Σ**                 |177 | 18 | 56 | 98 | 15 | 32 | 33 | 28 |121 |  6 |  6 |150 | 16 | 17 | 80 | 11 |  8 |  6 | 12 | 67 |102 | **1059** |

## 3. Critical-mass cells (Donina's `≥ 5` Pearson cutoff)

|             | cells | share |
|---          |---:   |---:   |
| `≥ 5`       |  48   | 28.6 % |
| `1–4`       |  64   | 38.1 % |
| empty       |  56   | 33.3 % |
| **total**   | 168   | 100 %  |

**Implication.** *amor* clears the ≥ 5 cutoff in 48 cells — the most of any
emonym — concentrated in Res Liquidae (21 variants present, 18 ≥ 5) and
Res Filiformes (19 present, 11 ≥ 5). These two columns are where *amor*
per-variant statistics are defensible now (the green-light set,
membership-matrix §Per-variant-ready). No variant falls below critical mass
*in total*.

### Gaps by cryptoclass (cells with zero *amor* citations)

| Cryptoclass             | empty cells | variants missed |
|---                      |---:         |---              |
| Res Liquidae            | 0           | — (all 21 present) |
| Res Filiformes          | 2           | GT HN |
| Res Continens           | 6           | CR HN PA PR PY SV |
| Res Longae Penetrantes  | 8           | CR DO EC NI PA PR SV UY |
| Res Parvae              | 4           | GT HN NI UY |
| Res Rotundae            | 8           | CR DO EC GT HN NI PR SV |
| Res Acutae              | 10          | DO EC ES GT HN NI PR SV UY US |
| Res Planae              | 18          | all except CO VE US |

## 4. Construction-type coverage

Curated gold set (n = 1060). Dominant slots: objective and subject slots
(Liquidae/Filiformes), matching the cross-emonym construction signatures in
`membership-matrix.md`.

| construction_type             | (per-class detail in `profile-amor.md` §6) |
|---                            |--- |
| Liquidae led by `verbal-subject-intransitive` (276) | `fluir` "el amor fluye" |
| Filiformes led by `verbal-objective` (88) | `desatar` "desatar el amor" |
| Continens split locative-state (38) / attributive (38) | `lleno de`, `encontrarse en` |
| Penetrantes led by `verbal-subject-transitive` (51) | `atravesar` "el amor lo atraviesa" |

**Schema drift (carried from `audit-miedo.md` §4).** *amor* uses
`verbal-objective-grasp` (58), `verbal-objective-throw` (12) and
`verbal-objective-collect` (4) — the Res Parvae sub-slugs not yet in
`data/SCHEMA.md`'s controlled vocab. Same open schema-hygiene item.

## 5. Classifier-lemma diversity & unmatched tails

| Cryptoclass             | distinct lemmas (Qᵢ) | unmatched (blank-lemma) rows | total |
|---                      |---:                  |---:                          |---:   |
| Res Liquidae            | 11                   | 34                           | 471   |
| Res Filiformes          | 14                   | 38                           | 204   |
| Res Continens           | 13                   | 10                           | 134   |
| Res Longae Penetrantes  |  7                   |  3                           |  90   |
| Res Parvae              | 10                   | 12                           |  77   |
| Res Rotundae            |  9                   |  2                           |  60   |
| Res Acutae              |  3                   | 10                           |  20   |
| Res Planae              |  2                   |  0                           |   4   |

The unmatched (blank-lemma) rows count toward CAC but not IDC. The two big
tails — FIL 38, LIQ 34 — are the obvious Phase-2 seeding targets: the row
is a genuine *amor* citation in that class but its classifier lemma was not
matched by the current seed list.

## 6. Provenance integrity

Clean for the fields the extractor fills. (Mechanical-first: not yet
re-verified at the level of the *miedo* §8 check.)

## 7. Deeper-curation sweeps — RESOLVED (2026-06-02)

1. **Wrong-lexeme sweep — confirmed clean.** 0 rows contain a near-synonym
   (`cariño/afecto/pasión/querer`) without the *amor* token. (User-confirmed:
   `temor`/*miedo* was the only synonym artefact in the project.)
2. **Fixed-expression review — 1 exclusion.** Of 8 fixed-expression matches,
   7 are genuine emotion uses (`derramar/diluir mi amor`) and stay. Removed:
   **`pen-amor-mx-0006`** ("Al pie de mi amor clavado" — "my nailed
   *beloved*", a person/Christ image, not the emotion). **Kept after review:**
   `pla-amor-us-0002` ("amor propio" / `nivelar`, user decision).
3. **`entregar`/`traer` in Res Parvae — KEPT (user decision), analysis note
   carried forward.** ~31 give-verb rows (amor 15, alegría 15, tristeza 1),
   mostly blank-lemma, use `entregar … amor/alegría` etc. The bleached-vs-
   live question (`dar miedo` is a bleached light-verb; `entregar amor` may
   or may not invoke the graspable-object image) is **not** resolved by
   exclusion — these rows stay in Res Parvae, and the matter is to be
   discussed in the writeup's analysis section. Phase-2 follow-up: seed
   `entregar` (and review `traer`) so the blank-lemma Parvae tail resolves.
4. **Disputed / mis-file** — no further *amor* issues surfaced; the
   parse-time `СПОРНЫЕ` skip stands.

## 8. Phase 1 status for *amor*

Deliverables complete and the deeper sweeps (§7) **run and resolved** (1
exclusion; wrong-lexeme clean; `entregar`/`traer` kept). Gold set
(`gold-amor.tsv`, n = 1059) is final pending the analysis-section note on
give-verb classifiers and Phase-2 collection volume.
