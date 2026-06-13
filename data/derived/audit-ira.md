# *ira* — Phase 1 coverage audit

> ⚠️ **COUNT-based (2026-06-02) — superseded for distribution.** Any CAC %/`n`
> here count *rows*, not corpus occurrences (Σfrequency). The authoritative
> frequency-mass distribution is
> [`distribution-frequency-mass.md`](distribution-frequency-mass.md). The coverage
> / gap analysis below is unaffected.

Date: 2026-06-02.
Source: `data/derived/gold-ira.tsv` (n = 99) via
`pipeline/coverage_miedo.js ira --from-gold`.

Gap record for the *ira* leg of the ROADMAP Phase-1 residual.
**Mechanical-first** audit (see `profile-ira.md` curation note): generic
curation pass only, plus 2 `envuelto en` rows reassigned in from *miedo*
(Problem 1.5). *ira* is the thinnest emonym (n = 99) — every cell figure is
fragile.

## 1. Totals

- **99** *ira* citations in the curated gold set (130 raw; −1 duplicate,
  −32 generic exclusions — almost all `nivel de` — +2 reassigned in).
- **20 of 21** variants have ≥ 1 citation; **PR is empty** (dead variant).
- Only **6 of 8** classes populated: **Res Acutae and Res Planae empty**.
- **41 / 168** cells filled (**24.4 %**) — the sparsest emonym; **127**
  empty (75.6 %).

## 2. Coverage matrix

Curated gold set (n = 99).

|                       | AR | BO | CL | CO | CR | CU | DO | EC | ES | GT | HN | MX | NI | PA | PE | PR | PY | SV | UY | VE | US | **Σ** |
|---                    |---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Res Liquidae          |  2 |  1 |  · |  2 |  1 |  1 |  2 |  · | 13 |  1 |  1 |  8 |  · |  · |  3 |  · |  · |  1 |  · |  3 |  6 | **45** |
| Res Continens         |  4 |  · |  · |  6 |  · |  1 |  · |  1 |  5 |  · |  1 |  6 |  2 |  1 |  · |  · |  1 |  · |  · |  1 |  2 | **31** |
| Res Parvae            |  · |  · |  · |  1 |  · |  · |  · |  · |  2 |  · |  · |  4 |  · |  · |  · |  · |  · |  · |  2 |  1 |  · | **10** |
| Res Longae Penetrantes|  · |  · |  1 |  1 |  1 |  · |  · |  · |  2 |  · |  · |  2 |  · |  · |  1 |  · |  · |  · |  · |  · |  · | **8** |
| Res Rotundae          |  · |  · |  · |  2 |  · |  · |  · |  · |  · |  · |  · |  1 |  · |  · |  · |  · |  · |  · |  · |  · |  · | **3** |
| Res Filiformes        |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  1 |  · |  · |  · |  · |  · |  · |  · |  · |  1 | **2** |
| Res Acutae            |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · | **0** |
| Res Planae            |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · | **0** |
| **Σ**                 |  6 |  1 |  1 | 12 |  2 |  2 |  2 |  1 | 22 |  1 |  2 | 22 |  2 |  1 |  4 |  0 |  1 |  1 |  2 |  5 |  9 | **99** |

## 3. Critical-mass cells (Donina's `≥ 5` Pearson cutoff)

|             | cells | share |
|---          |---:   |---:   |
| `≥ 5`       |   6   | 3.6 %  |
| `1–4`       |  35   | 20.8 % |
| empty       | 127   | 75.6 % |
| **total**   | 168   | 100 %  |

**Implication.** Only 6 cells clear the cutoff (LIQ: ES, MX; CON: CO, MX,
ES; + 1). **No *ira* membership is per-variant-ready** — its best columns
(LIQ, CON) reach just 3 variants ≥ 5 (membership-matrix). Every *ira*
statistic is pooled-only. *ira* is the project's top Phase-2 collection
priority.

### Variants below critical mass *in total*

Almost all of them. Only **ES (22), MX (22), CO (12), US (9)** exceed 5
total; **VE (5)** is at threshold. The remaining 16 variants hold 1–4 *ira*
citations each, **PR holds 0**.

### Classes with zero *ira* data at all

- **Res Acutae** (0) — genuinely absent (anger is not realised as "sharp"
  on current data).
- **Res Planae** (0) — all 32 raw Planae rows were `nivel de`, excluded
  class-wide.

## 4. Construction-type coverage

Per-class detail in `profile-ira.md` §6. Only LIQ and CON have enough rows
to show a construction-type shape: LIQ in subject-intransitive (`brotar`)
+ substantive (`torrente de`); CON in locative-state + objective
(`destapar la ira`). Matches the cross-emonym signatures.

**Schema drift.** Res Parvae `-grasp` sub-slug (9 rows) — same open
`SCHEMA.md` controlled-vocab item as `audit-miedo.md` §4.

## 5. Classifier-lemma diversity & unmatched tails

| Cryptoclass             | distinct lemmas (Qᵢ) | unmatched rows | total |
|---                      |---:                  |---:            |---:   |
| Res Liquidae            | 8                    | 6              | 45    |
| Res Continens           | 7                    | 7              | 31    |
| Res Parvae              | 2                    | 0              | 10    |
| Res Longae Penetrantes  | 3                    | 0              |  8    |
| Res Rotundae            | 1                    | 0              |  3    |
| Res Filiformes          | 1                    | 1              |  2    |
| Res Acutae              | 0                    | 0              |  0    |
| Res Planae              | 0                    | 0              |  0    |

## 6. Provenance integrity

Clean for extractor-filled fields. (Mechanical-first: not re-verified at
the *miedo* §8 depth.) The 2 reassigned Rotundae rows keep their original
*miedo* ids (`rot-miedo-co-0005`, `rot-miedo-co-0006`) for provenance — by
design (`reassignments.js`).

## 7. Deeper-curation sweeps — RESOLVED (2026-06-02)

1. **Wrong-lexeme sweep — confirmed clean.** *ira* is a formal/literary
   register word (spoken anger is usually `rabia/enfado/cólera/furia/
   enojo`), so this was the most pressing sweep given the tiny N — but 0
   rows contain such a synonym without the *ira* token. (User-confirmed:
   `temor`/*miedo* was the only synonym artefact in the project.)
2. **`envuelto en` Res Rotundae provenance — verified.** All 3 Rotundae
   rows are genuine *ira* (`envuelto/envueltos en ira`): 1 native (`rot-ira-
   mx-0001`) + 2 correctly reassigned from *miedo* (`rot-miedo-co-0005/0006`,
   "envuelto en ira la enterró…", "envueltos en ira suprema"). Kept — thin
   (3) but legitimate.
3. **`traer` in Res Parvae — KEPT (user decision).** `traer` carries 9 of
   *ira*'s 10 Res Parvae rows; per the cross-emonym give-verb decision it
   stays (bleached-vs-live discussion deferred to the analysis section —
   `audit-amor.md` §7.3).
4. **Disputed / mis-file** — no further *ira* issues surfaced; the
   parse-time `СПОРНЫЕ` skip stands.

## 8. Phase 1 status for *ira*

Deliverables complete and the deeper sweeps (§7) **run and resolved with no
exclusions**. Gold set (`gold-ira.tsv`, n = 99) is final pending Phase-2
collection volume — *ira* remains the **top Phase-2 collection priority**.
