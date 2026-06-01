# *miedo* — Phase 1 coverage audit

Date: 2026-06-02 (regenerated on the curated gold set).
Source: `data/derived/gold-miedo.tsv` (n = 405) via
`pipeline/coverage_miedo.js --from-gold`; cross-checked against the legacy
xlsx files in `data/legacy-xlsx/`.

This file is the explicit gap record required by ROADMAP Phase 1 step 1:
"Verify *miedo* citations are present for all 8 cryptoclasses × 21
variants (gaps recorded explicitly, not silently empty)."

The matrix and dependent tables (§1–§5) now report the **curated gold
set**: the raw extraction (`citations.tsv`, 510 *miedo* rows) minus the
`nivel de` exclusion (§6 of `profile-miedo.md`), the Problem-1 lemma
cleanup, and the Problem-2 duplicate drop-list — all applied downstream by
`pipeline/build_gold.js`. Methodological sections (§6 disputed policy, §9
extractor change log) describe the raw extraction and remain valid.

## 1. Totals

- **405** *miedo* citations in the curated gold set (510 raw).
- All **21** national variants have at least one *miedo* citation.
- **7** of 8 cryptoclasses are populated; **Res Planae** holds 1 citation
  (`llano`) once `nivel de` is excluded — effectively absent.
- **95 / 168** cells (cryptoclass × variant) filled (**56.5 %**).
- **73** cells empty (43.5 %). The jump from the pre-cleanup 32 % empty is
  almost entirely the Res Planae row collapsing once the `nivel de`
  measurement collocation (93 rows, 17 variants) is removed.

## 2. Coverage matrix

Curated gold set (n = 405).

|                       | AR | BO | CL | CO | CR | CU | DO | EC | ES | GT | HN | MX | NI | PA | PE | PR | PY | SV | UY | VE | US | **Σ** |
|---                    |---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Res Acutae            |  2 |  1 |  1 |  4 |  · |  2 |  1 |  · |  1 |  · |  · |  3 |  · |  1 |  1 |  · |  · |  · |  2 |  2 |  1 | **22** |
| Res Continens         | 23 |  5 | 17 | 17 |  2 |  6 |  4 |  1 | 32 |  · |  2 | 26 |  1 |  2 |  7 |  2 |  1 |  · |  4 |  7 | 22 | **181** |
| Res Filiformes        |  3 |  · |  1 |  · |  · |  1 |  1 |  · |  4 |  · |  · |  1 |  · |  · |  1 |  · |  · |  1 |  · |  2 |  2 | **17** |
| Res Liquidae          |  6 |  1 |  2 |  3 |  1 |  · |  1 |  1 | 12 |  · |  · |  7 |  · |  · |  1 |  · |  · |  · |  · |  4 |  6 | **45** |
| Res Longae Penetrantes| 17 |  1 |  2 |  3 |  · |  · |  1 |  · |  6 |  · |  · |  5 |  1 |  1 |  1 |  · |  1 |  · |  1 |  6 |  2 | **48** |
| Res Parvae            |  1 |  · |  6 |  8 |  1 |  · |  1 |  · |  5 |  1 |  · |  3 |  · |  1 |  2 |  1 |  · |  · |  1 |  2 |  1 | **34** |
| Res Planae            |  · |  · |  · |  1 |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · |  · | **1** |
| Res Rotundae          |  6 |  · |  4 |  7 |  · |  1 |  2 |  · | 10 |  · |  2 | 11 |  · |  · |  3 |  2 |  · |  · |  · |  1 |  8 | **57** |
| **Σ**                 | 58 |  8 | 33 | 43 |  4 | 10 | 11 |  2 | 70 |  1 |  4 | 56 |  2 |  5 | 16 |  5 |  2 |  1 |  8 | 24 | 42 | **405** |

## 3. Critical-mass cells (Donina's `≥ 5` Pearson cutoff)

|             | cells | share |
|---          |---:   |---:   |
| `≥ 5`       |  26   | 15.5 % |
| `1–4`       |  69   | 41.1 % |
| empty       |  73   | 43.5 % |
| **total**   | 168   | 100 %  |

**Implication.** 85 % of cells are below the Pearson cutoff. Phase 6
variant-level statistics on *miedo* are currently defensible for ~6
strong variants only, and mainly in the Res Continens column; the rest
must be reported as exploratory or filled in by Phase 2 pipeline
collection.

### Variants below critical mass *in total*

- **GT** (1), **SV** (1), **EC** (2), **NI** (2), **PY** (2), **CR** (4),
  **HN** (4) — unusable for any variant-level statistic on *miedo*
  without Phase 2 collection.

### Gaps by cryptoclass (cells with zero *miedo* citations)

| Cryptoclass             | empty cells | variants missed |
|---                      |---:         |---              |
| Res Acutae              | 8           | CR EC GT HN NI PR PY SV |
| Res Continens           | 2           | GT SV |
| Res Filiformes          | 11          | BO CO CR EC GT HN NI PA PR PY UY |
| Res Liquidae            | 9           | CU GT HN NI PA PR PY SV UY |
| Res Longae Penetrantes  | 7           | CR CU EC GT HN PR SV |
| Res Parvae              | 7           | BO CU EC HN NI PY SV |
| Res Planae              | 20          | all except CO |
| Res Rotundae            | 9           | BO CR EC GT NI PA PY SV UY |

Recurring offenders (≥ 5 missing classes): **GT (7 of 8), SV (7), EC (6),
HN (6), NI (6), PY (6), CR (5), PR (5)**.

## 4. Construction-type coverage

Curated gold set (n = 405).

| construction_type             | n   |
|---                            |---: |
| `verbal-locative-state`       | 113 |
| `verbal-instrumental`         |  63 |
| `verbal-subject-intransitive` |  45 |
| `verbal-subject-transitive`   |  35 |
| `substantive`                 |  32 |
| `verbal-objective`            |  32 |
| `verbal-locative-into`        |  27 |
| `verbal-objective-grasp`      |  24 |
| `attributive`                 |  17 |
| `verbal-locative-out`         |  10 |
| `verbal-objective-throw`      |   5 |
| `predicative`                 |   2 |

`substantive` falls from 125 (raw) to 32 because the 93 `nivel de`
substantive rows are excluded. The `disputed` slug does not appear (the
2 raw disputed rows are handled per §6).

**Schema drift.** `verbal-objective-grasp` (24) and
`verbal-objective-throw` (5) appear in the data (both Res Parvae) but are
*not* in `data/SCHEMA.md`'s controlled vocab. The extractor at
`pipeline/extract_wide.js` produces them deliberately for Res Parvae's
"захват/удержание" vs "отпускание/бросок" sub-distinction, plus a
`verbal-objective-collect` slug (not used for *miedo*). The schema needs
updating to either document these three slugs or collapse them into
`verbal-objective`. (Still open — see §10.)

## 5. Classifier-lemma diversity

Curated gold set (n = 405). All blank-lemma rows are resolved (Problem 1):
7 corrected, 6 excluded; **0 blanks remain in the gold set**.

| Cryptoclass             | distinct lemmas | blank-lemma rows | total |
|---                      |---:             |---:              |---:   |
| Res Acutae              |  8              |  0               |  22   |
| Res Continens           | 16              |  0               | 181   |
| Res Filiformes          |  8              |  0               |  17   |
| Res Liquidae            |  8              |  0               |  45   |
| Res Longae Penetrantes  |  8              |  0               |  48   |
| Res Parvae              |  8              |  0               |  34   |
| Res Planae              |  1              |  0               |   1   |
| Res Rotundae            |  9              |  0               |  57   |

For the history of how the raw blank rate fell from 231 → 9 (extractor
rewrite) and then 9 → 0 (Problem-1 curation), see §9 and
`_inventory-decisions.md`. The raw extraction (`citations.tsv`) still
emits ~9 blank *miedo* rows; `build_gold.js` corrects or excludes them.

**Classifier concentration (Res Planae).** Once `nivel de` is excluded,
Res Planae retains a single citation (`llano`, attributive). The
`nivel de miedo` measurement collocation (93 rows) lives in the
negative-calibration set `gold-miedo-excluded.tsv`.

Top concrete lemmas overall (curated): `vivir en` (69, Continens) ·
`caer en` (27, Continens) · `envuelto en` (20, Rotundae) · `inundar de`
(20, Liquidae) · `envolver` (19, Rotundae) · `estar en` (18, Continens)
· `atravesar` (17, Penetrantes) · `coger` (17, Parvae) · `tapar` (15,
Continens) · `atravesado por` (14, Penetrantes) · `encontrarse en` (11,
Continens) · `círculo de` (10, Rotundae) · `destapar` (10, Continens).

## 6. Disputed cases — Conservative policy applied

**Decision.** The Spanish project applies a *Conservative*
disputed-row policy: `СПОРНЫЕ` columns in the legacy xlsx files are
skipped at parse time by `pipeline/extract_wide.js`, so disputed
citations never enter `citations.tsv`. The rationale: borderline
citations dilute IDC / CAC signal more than they enrich it, and
manual case-by-case adjudication does not scale to the larger
disputed pool we will face after Phase 3 LLM tagging.

Two *miedo* citations were flagged disputed in the legacy data:

| Country | Cryptoclass    | Citation                                                                                              | Disposition |
|---      |---             |---                                                                                                    |---          |
| AR      | Res Filiformes | *"…funciona como una metáfora de los miedos que penden sobre nuestras sociedades modernas."* | **Skipped at parse time** — sat in the `СПОРНЫЕ` column; never entered `citations.tsv` (verified absent: only `fil-miedo-ar-0001..0003` exist, all non-disputed). |
| CO      | Res Filiformes | *"Se amarraron a sus miedos y no escaparon."*                                                          | **Re-entered as `disputed=f`** (its source sheet did not carry it in a `СПОРНЫЕ` column), so the parse-time policy did not catch it. Now excluded downstream in `build_gold.js` as a reflexive-bind frame (experiencer binds *themselves* to the emonym — syntactically Continens-into, not canonical Filiformes). |

**Correction to the prior audit.** The earlier version claimed both
disputed rows were removed at parse time and that "CO Filiformes lost its
only row" via that policy. In fact only the AR row was parse-skipped;
`fil-miedo-co-0001` re-entered the TSV as non-disputed and is removed by
the downstream `build_gold.js` exclusion instead. The end state is the
same — **CO Filiformes is empty in the gold set** — but the mechanism is
a downstream exclusion, not the parse-time skip.

**Verification against source.** Cross-checked the `СПОРНЫЕ` columns
of all 8 legacy xlsx *miedo* sheets:

| File                    | СПОРНЫЕ column | cells / fragments |
|---                      |---             |---:               |
| Res Acutae              | (none)         | —                 |
| RES CONTINENS           | (none)         | —                 |
| Res Filiformes          | col 8 "СПОРНЫЕ" | 1 (AR)           |
| RES LIQUIDAE COR        | (none)         | —                 |
| Res Parvae              | col 5 "спорные" | 0 (empty)        |
| Res Penentrantes        | (none)         | —                 |
| Res Planae              | (none)         | —                 |
| Res Rotundae            | (none)         | —                 |

The disputed surface area was tiny to begin with. Phase 1's "resolve
`СПОРНЫЕ` cases" step is closed by this policy plus the one downstream
exclusion above.

The `disputed` column remains in the TSV schema as a vestigial field
(always `f`) — kept so that Phase 3 LLM tagging can repopulate it if
a different policy is chosen for machine-generated citations.

## 7. Cross-country duplicate citations — resolved

The raw extraction had **6 *miedo* sentences appearing in two country
cells each** (duplication present *in the legacy xlsx*, not introduced by
extraction). These are now resolved by the deterministic drop-list
`data/derived/duplicate-drops.tsv` (`pipeline/dedupe.js`), honoured by
`build_gold.js`:

| Citation (excerpt)                                        | Class       | Countries | Resolution |
|---                                                        |---          |---        |---         |
| *El nivel de miedo a lo largo de la nación también…*      | Res Planae  | AR, PE    | moot — `nivel de` excluded class-wide |
| *existe tal nivel de miedo y pánico entre las familias*   | Res Planae  | BO, CU    | moot — `nivel de` excluded class-wide |
| *Los combates destapan el miedo.*                         | Continens   | AR, EC    | keep AR (strongest), drop EC |
| *es imposible vivir en el miedo*                          | Continens   | AR, EC    | keep AR (strongest), drop EC |
| *entrelazar el miedo y el placer sin poner se en riesgo*  | Filiformes  | EC, ES    | keep ES (strongest), drop EC |
| *las corrientes de el miedo que han penetrado a…*         | Penetrantes | PR, VE    | keep VE (strongest), drop PR |

Survivor rule (US-exclusion / keep-strongest, decided 2026-06-02) is
documented in `_inventory-decisions.md`. No *miedo* group fell to the
drop-all case. The gold-set cells are no longer inflated by these.

## 8. Provenance integrity

Clean. Zero missing `source_file`, `source_sheet`, `source_locator`,
`citation_es`, or `construction_type` across all *miedo* rows in
`citations.tsv`.

## 9. Extractor changes that produced the post-fix numbers

`pipeline/extract_wide.js` — `detectLemma` rewritten:

- **Compound-seed stemming**: for seeds with a space (`vivir en`,
  `envuelto en`, `nivel de`, `atravesado por`), require the tail
  tokens to appear in the citation, then stem-match the head. The
  previous version only ever matched these as exact phrases, so
  every inflected form ("vive en", "envueltas en", "atravesados por")
  missed. **~110 of the recovered rows.**
- **Spanish stem-changing verbs**: handle e→ie (`atravesar` →
  `atraviesa`, `retorcer` → `retuerce`), o→ue (`contar` → `cuenta`),
  and e→i (-ir verbs only, `pedir` → `pide`). Plus orthographic
  alternations g→j (`coger` → `cojo`) and c→z (`vencer` → `venzo`).
- **Lower stem threshold** (3 → 2 chars) anchored at Unicode-aware
  word boundaries via `(?<!\p{L})` lookbehind. Lets `atar` ("at")
  match "atan/ataba/ató" without false-positiving on "atrás" inside
  multi-letter words.
- **Punctuation-tolerant phrase match**: `containsAsWord` uses
  `\p{L}` lookarounds instead of space padding, so "agudo," matches
  the lemma "agudo".

`data/classifiers.tsv` — seeds added / corrected:

| Cryptoclass / ct                          | Change                                                                            |
|---                                        |---                                                                                |
| Res Continens / verbal-locative-state     | added `permanecer en`, `sumirse en`, `dentro de`                                  |
| Res Continens / attributive               | added `tapado`, `destapado`, `obturado` (past-participle attributives)            |
| Res Filiformes / verbal-subject-intransitive | added `entrelazarse`                                                           |
| Res Filiformes / attributive              | added `retorcido`                                                                  |
| Res Liquidae / verbal-instrumental        | added active forms `inundar de/con`, `inundarse de/en`                            |
| Res Liquidae / substantive                | added `brote de`                                                                  |
| Res Longae Penetrantes / verbal-subject-intransitive | `penetrar (en)` → `penetrar en, penetrar` (parens stripped)            |
| Res Longae Penetrantes / verbal-subject-transitive | added `penetrar`, `clavar`                                                |
| Res Longae Penetrantes / verbal-instrumental | added `atravesar por`, `clavado en`                                             |
| Res Parvae / verbal-objective-grasp       | added `traer`                                                                     |
| Res Rotundae / verbal-subject-intransitive | `girar (en torno a, alrededor de), rodar` → split + added `envolver`              |
| Res Rotundae / verbal-instrumental        | added `envuelto entre/de`, `envolver en/de`                                       |

Cross-emonym effect of the same changes (not just *miedo*), raw blank %:

| emonym   | blank % after |
|---       |---:           |
| miedo    | 1.8 %         |
| tristeza | 8.3 %         |
| amor     | 9.6 %         |
| ira      | 10.9 %        |
| alegría  | 23.9 %        |

The targeted seed additions were chosen from *miedo* evidence; the
detection-logic changes (compound-stem, stem-change, WB anchoring)
help all five emonyms uniformly. *alegría* still has a high blank
rate because its productive idioms (`saltar de`, `un brinco de`,
`dar saltos de`, `bailar de`) aren't yet seeded.

## 10. Phase 1 status & remaining work

Resolved since the original audit:

1. **Res Planae for *miedo* — decided.** `nivel de` excluded class-wide;
   *miedo* does not project into Res Planae (1 residual citation).
2. **Cross-country duplicates — resolved** (§7, drop-list applied).
3. **Blank-lemma rows — resolved** (§5; 7 corrected, 6 excluded).

Still open:

4. **Reconcile construction-type vocab** between `SCHEMA.md` and the
   extractor (§4) — `verbal-objective-grasp`, `verbal-objective-throw`,
   `verbal-objective-collect` need to be added to the controlled-vocab
   table.
5. **Mis-filed rows (Problem 1.5)** — ~11–14 rows filed under *miedo*
   whose citation is about another emotion (`círculo de tristeza`,
   `envuelto en ira`, `el temor`) need a reassign-or-exclude pass; see
   `notes/gold-cleanup-status.md`.

ROADMAP Phase 1 steps 1–5 for *miedo* are complete; items 4–5 above are
carried forward (4 is a schema-hygiene task, 5 is the remaining
gold-cleanup pass).
