# *tristeza* — Phase 1 coverage audit

Date: 2026-06-02.
Source: `data/derived/gold-tristeza.tsv` (n = 374) via
`pipeline/coverage_miedo.js tristeza --from-gold`.

Gap record for the *tristeza* leg of the ROADMAP Phase-1 residual.
Curation **sweeps run (2026-06-02)** — see §7; the matrix below is the
post-sweep gold set.

## 1. Totals

- **363** *tristeza* citations in the curated gold set (398 raw; 374 at the
  mechanical-first stage, then −11 in the Res Rotundae sweep — §7).
- **20 of 21** variants have ≥ 1 citation; **HN is empty** (dead variant).
- **7 of 8** classes populated; **Res Rotundae now holds 1** (`bola de`),
  Parvae and Planae 2 each.
- **71 / 168** cells filled (**42.3 %**); **97** empty (57.7 %).

## 2. Coverage matrix

Curated gold set (n = 363).

|                       | AR | BO | CL | CO | CR | CU | DO | EC | ES | GT | HN | MX | NI | PA | PE | PR | PY | SV | UY | VE | US | **Σ** |
|---                    |---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Res Liquidae          | 30 |  1 | 16 | 15 |  1 | 10 |  2 |  2 | 24 |  3 |  · | 20 |  1 |  1 |  6 |  1 |  3 |  2 |  3 |  5 |  9 | **155** |
| Res Continens         | 25 |  5 |  6 | 12 |  · |  2 |  3 |  · | 18 |  1 |  · | 15 |  2 |  1 |  9 |  1 |  2 |  1 |  3 | 10 | 10 | **126** |
| Res Filiformes        |  6 |  · |  6 |  7 |  · |  1 |  · |  · |  5 |  · |  · |  4 |  · |  · |  1 |  1 |  · |  · |  · |  · |  4 | **35** |
| Res Longae Penetrantes| 10 |  1 |  1 |  2 |  · |  1 |  1 |  · |  2 |  · |  · |  3 |  · |  · |  1 |  · |  · |  · |  1 |  3 |  5 | **31** |
| Res Acutae            |  1 |  · |  2 |  3 |  · |  · |  · |  · |  1 |  · |  · |  1 |  · |  · |  · |  2 |  · |  · |  · |  · |  1 | **11** |
| Res Parvae            |  · |  · |  1 |  1 |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · | **2** |
| Res Planae            |  1 |  · |  · |  · |  · |  · |  · |  · |  1 |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · | **2** |
| Res Rotundae          |  1 |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · | **1** |
| **Σ**                 | 74 |  7 | 32 | 40 |  1 | 14 |  6 |  2 | 51 |  4 |  0 | 43 |  3 |  2 | 17 |  5 |  5 |  3 |  7 | 18 | 29 | **363** |

## 3. Critical-mass cells (Donina's `≥ 5` Pearson cutoff)

|             | cells | share |
|---          |---:   |---:   |
| `≥ 5`       |  24   | 14.3 % |
| `1–4`       |  47   | 28.0 % |
| empty       |  97   | 57.7 % |
| **total**   | 168   | 100 %  |

**Implication.** 85 % of cells are below the cutoff. *tristeza*
per-variant statistics are defensible only in the two core columns —
**Res Liquidae** (10 variants ≥ 5) and **Res Continens** (9 variants ≥ 5),
the green-light set (membership-matrix §Per-variant-ready). Everything else
is pooled-only.

### Variants below critical mass *in total*

- **HN** (0), **CR** (1), **PA** (2), **EC** (3), **NI** (3), **SV** (3),
  **GT** (4) — unusable for any variant-level *tristeza* statistic without
  Phase-2 collection.

### Gaps by cryptoclass (cells with zero *tristeza* citations)

| Cryptoclass             | empty cells | (worst-hit region) |
|---                      |---:         |--- |
| Res Liquidae            |  4          | HN + 3 scattered |
| Res Continens           |  4          | CR EC GT?(1) HN |
| Res Filiformes          | 12          | Central America + Andean edge |
| Res Longae Penetrantes  |  9          | CA block |
| Res Acutae              | 14          | nearly everywhere |
| Res Parvae              | 19          | all except CL, CO |
| Res Planae              | 19          | all except AR, ES |
| Res Rotundae            | 20          | all except AR (post-sweep; §7) |

## 4. Construction-type coverage

Per-class detail in `profile-tristeza.md` §6. Signature slots match the
cross-emonym pattern: Liquidae in subject/instrumental, Continens in the
locative slots — and *tristeza*'s Continens leans **locative-into**
(`caer en` 68) more than any other emonym, i.e. *entering* sadness.

**Schema drift.** Res Parvae sub-slugs (`verbal-objective-grasp`,
`-collect`) appear (2 rows) — same open `SCHEMA.md` controlled-vocab item
as `audit-miedo.md` §4.

## 5. Classifier-lemma diversity & unmatched tails

| Cryptoclass             | distinct lemmas (Qᵢ) | unmatched rows | total |
|---                      |---:                  |---:            |---:   |
| Res Liquidae            | 11                   | 10             | 155   |
| Res Continens           |  8                   |  5             | 126   |
| Res Filiformes          |  5                   |  2             |  35   |
| Res Longae Penetrantes  |  9                   |  5             |  31   |
| Res Acutae              |  1                   |  0             |  11   |
| Res Parvae              |  1                   |  0             |   2   |
| Res Planae              |  1                   |  0             |   2   |
| Res Rotundae            |  1                   |  0             |   1   |

**Concentration flags.** Res Continens leans hard on `caer en` (68/126);
Res Acutae is entirely `agudo` (9/11). Res Rotundae was `círculo de`
(10/12) — those 10 rows are now excluded (§7), leaving 1 `bola de`.

## 6. Provenance integrity

Clean for extractor-filled fields. (Mechanical-first: not re-verified at
the *miedo* §8 depth.)

## 7. Deeper-curation sweeps — RESOLVED (2026-06-02)

1. **`círculo de` frozen-collocation review — resolved, excluded
   class-wide.** Res Rotundae for *tristeza* was 10/12 `círculo de`
   (*círculo vicioso de tristeza*; 9 of the 10 reassigned in from *miedo*).
   This is the `nivel de` shape — one frozen collocation carrying a class —
   and `círculo vicioso` is the *vicious-cycle* idiom, not a round-object
   image. **Decision (user, sweep B1): exclude `círculo de` class-wide**
   (wired into `build_gold.js`, parallel to `nivel de`). Also removes 1
   native *miedo* row (`rot-miedo-ar-0006`, "círculo de miedo"; *miedo*
   391→390). The `lágrimas de tristeza rodaban` row (`rot-tristeza-ec-0001`)
   was removed too (*rodar* scopes the tears). *tristeza* Rotundae 12 → 1
   (`bola de`, genuine) — now a **non-member**.
2. **Wrong-lexeme sweep — confirmed clean.** 0 rows contain a near-synonym
   (`pena/pesar/melancolía/congoja/depresión`) without the *tristeza*
   token. (User-confirmed: `temor`/*miedo* was the only synonym artefact in
   the project.)
3. **Disputed / mis-file** — no further *tristeza* issues surfaced; the
   parse-time `СПОРНЫЕ` skip stands, and the *miedo*→*tristeza* `círculo de`
   reassignments are now moot (those rows are excluded, not reclassified).
   `bola de tristeza` (the one surviving Rotundae row) is the only genuine
   round image and is kept.

## 8. Phase 1 status for *tristeza*

Deliverables complete and the deeper sweeps (§7) **run and resolved**: 11
Res Rotundae rows excluded, wrong-lexeme confirmed clean. Gold set
(`gold-tristeza.tsv`, n = 363) is final pending Phase-2 collection volume.
