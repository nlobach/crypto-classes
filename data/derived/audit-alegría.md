# *alegría* — Phase 1 coverage audit

Date: 2026-06-02.
Source: `data/derived/gold-alegría.tsv` (n = 737) via
`pipeline/coverage_miedo.js alegría --from-gold`.

Gap record for the *alegría* leg of the ROADMAP Phase-1 residual.
**Mechanical-first** audit (see `profile-alegría.md` curation note):
generic curation pass only. Suspected deeper issues in §7 — the headline
one is the large unmatched-lemma tail in Res Liquidae.

> Pass the **accented** `alegría`; `alegria` matches nothing.

## 1. Totals

- **737** *alegría* citations in the curated gold set (785 raw).
- All **21** variants have ≥ 1 citation (no dead variant).
- **7 of 8** classes populated; **Res Planae** holds 1 citation.
- **92 / 168** cells filled (**54.8 %**); **76** empty (45.2 %).

## 2. Coverage matrix

Curated gold set (n = 737).

|                       | AR | BO | CL | CO | CR | CU | DO | EC | ES | GT | HN | MX | NI | PA | PE | PR | PY | SV | UY | VE | US | **Σ** |
|---                    |---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Res Liquidae          | 61 |  8 | 22 | 38 |  3 | 36 | 16 | 11 |132 |  2 |  4 | 58 | 10 |  · | 15 |  7 |  5 |  4 |  2 | 31 | 33 | **498** |
| Res Filiformes        |  9 |  8 |  6 |  9 |  3 |  5 |  3 |  9 | 11 |  1 |  2 |  5 |  2 |  2 |  3 |  3 |  1 |  2 |  3 |  3 |  4 | **94** |
| Res Continens         |  9 |  1 |  3 |  4 |  · |  2 |  1 |  2 | 15 |  · |  · | 12 |  3 |  1 |  4 |  1 |  1 |  · |  · |  8 |  4 | **71** |
| Res Parvae            |  4 |  1 |  1 |  4 |  1 |  1 |  1 |  · | 12 |  · |  · |  2 |  1 |  1 |  2 |  · |  · |  1 |  2 |  2 |  1 | **37** |
| Res Longae Penetrantes|  9 |  · |  · |  · |  · |  1 |  · |  · |  1 |  · |  · |  · |  · |  · |  2 |  · |  · |  · |  · |  · |  · | **13** |
| Res Rotundae          |  3 |  · |  · |  3 |  · |  1 |  1 |  1 |  2 |  · |  · |  1 |  · |  · |  · |  · |  · |  · |  · |  · |  · | **12** |
| Res Acutae            |  1 |  · |  2 |  2 |  1 |  · |  · |  · |  2 |  · |  · |  2 |  1 |  · |  · |  · |  · |  · |  · |  · |  · | **11** |
| Res Planae            |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  1 |  · |  · |  · |  · |  · |  · |  · |  · |  · | **1** |
| **Σ**                 | 96 | 18 | 34 | 60 |  8 | 46 | 22 | 23 |175 |  3 |  6 | 81 | 17 |  4 | 26 | 11 |  7 |  7 |  7 | 44 | 42 | **737** |

## 3. Critical-mass cells (Donina's `≥ 5` Pearson cutoff)

|             | cells | share |
|---          |---:   |---:   |
| `≥ 5`       |  29   | 17.3 % |
| `1–4`       |  63   | 37.5 % |
| empty       |  76   | 45.2 % |
| **total**   | 168   | 100 %  |

**Implication.** *alegría* per-variant statistics are defensible mainly in
**Res Liquidae** (20 variants present, 18 ≥ 5 — the strongest single column
in the project) and partly **Res Filiformes** (all 21 present, 8 ≥ 5). The
green-light set (membership-matrix) lists alegría LIQ and FIL. Everything
else is pooled-only.

### Variants below critical mass *in total*

- **GT** (3), **PA** (4) — unusable for any variant-level *alegría*
  statistic. (PA is conspicuous: 0 Liquidae citations, its 4 total spread
  over FIL/PAR/CON.) All other variants clear ≥ 5 in total, almost always
  via the LIQ column.

### Gaps by cryptoclass (cells with zero *alegría* citations)

| Cryptoclass             | empty cells | note |
|---                      |---:         |--- |
| Res Filiformes          | 0           | all 21 present (broadest) |
| Res Liquidae            | 1           | PA only |
| Res Continens           | 5           | scattered thin variants |
| Res Parvae              | 5           | EC GT HN PR PY |
| Res Acutae              | 14          | nearly everywhere |
| Res Rotundae            | 14          | nearly everywhere |
| Res Longae Penetrantes  | 17          | all except AR CU ES PE |
| Res Planae              | 20          | all except MX |

## 4. Construction-type coverage

Per-class detail in `profile-alegría.md` §6. Liquidae instrumental
(`inundar de` 100) + subject-transitive (`inundar` 122) dominate; Filiformes
in objective (`desatar`). Matches the cross-emonym construction signatures.

**Schema drift.** Res Parvae sub-slugs (`-grasp`, `-throw`, `-collect`,
37 rows) — same open `SCHEMA.md` controlled-vocab item as `audit-miedo.md`
§4.

## 5. Classifier-lemma diversity & unmatched tails

| Cryptoclass             | distinct lemmas (Qᵢ) | unmatched rows | total |
|---                      |---:                  |---:            |---:   |
| Res Liquidae            | 17                   | **136**        | 498   |
| Res Filiformes          |  7                   |  20            |  94   |
| Res Continens           |  8                   |   0            |  71   |
| Res Parvae              | 10                   |  13            |  37   |
| Res Longae Penetrantes  |  4                   |   0            |  13   |
| Res Rotundae            |  3                   |   0            |  12   |
| Res Acutae              |  5                   |   5            |  11   |
| Res Planae              |  1                   |   0            |   1   |

**The 136-row Liquidae unmatched tail** (27 % of the biggest class) is
resolved in §7.1 as a pure **seeding gap** — 114 of the 136 are `rebosar
(de)`, all genuine Liquidae. Not a classification problem; a Phase-2
seeding action.

## 6. Provenance integrity

Clean for extractor-filled fields. (Mechanical-first: not re-verified at
the *miedo* §8 depth.)

## 7. Deeper-curation sweeps — RESOLVED (2026-06-02)

1. **The 136-row LIQ tail — resolved: pure seeding gap, no
   reclassification.** All 136 blank-lemma Res Liquidae rows were read.
   Every one is a genuine liquid use whose classifier the seed list misses:
   **`rebosar (de)` 114** (*rebosar de alegría*, to overflow with joy),
   `fluir` 7 + `derramar` 5 (causative/reflexive forms detection missed —
   *dejó fluir*, *se derrama*), `aluvión de` 3, `desbordar` 3, `brotar` 1,
   `salpicar` 1; 0 unaccounted. **None are jumping/dancing idioms, and none
   belong in Res Parvae** — this falsifies the `audit-miedo.md` §9 guess
   that the blank rate came from *saltar/bailar de alegría* (those words
   occur only as incidental context, never as the classifier). The 67.6 %
   Liquidae CAC stands; only the IDC is understated. **Action carried to
   Phase 2 (seeding, not curation):** add `rebosar`, `desbordar`,
   `aluvión de`, `salpicar` to the Res Liquidae seed list in
   `classifiers.tsv` and re-extract; this would move ~136 rows from blank
   to matched and raise alegría LIQ Qᵢ from 17 to ≈ 21. No gold-set rows
   change class; no exclusions.
2. **Wrong-lexeme sweep — confirmed clean.** 0 rows contain a near-synonym
   (`felicidad/gozo/júbilo/dicha/contento/regocijo`) without the *alegría*
   token. (User-confirmed: the only synonym artefact in the project was
   the `temor`/*miedo* pair, already excluded.)
3. **Disputed / mis-file** — no *alegría*-specific issues surfaced; the
   parse-time `СПОРНЫЕ` skip stands.

## 8. Phase 1 status for *alegría*

Mechanical-first deliverables complete and the deeper sweeps (§7) **run and
resolved with no exclusions or reclassifications**. Gold set
(`gold-alegría.tsv`, n = 737) is final pending the Phase-2 `rebosar`-family
seeding (§7.1) and collection volume.
