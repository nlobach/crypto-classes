# *miedo* — Phase 1 coverage audit

Date: 2026-05-28
Source: `data/citations.tsv` (commit at audit time: `5f206cb`)
Method: SQLite (`.mode ascii` loader, per `data/SCHEMA.md`) +
cross-check against the legacy xlsx files in `data/legacy-xlsx/`.

This file is the explicit gap record required by ROADMAP Phase 1 step 1:
"Verify *miedo* citations are present for all 8 cryptoclasses × 21
variants (gaps recorded explicitly, not silently empty)."

## 1. Totals

- **496** miedo citations after extraction.
- All **21** national variants have at least one miedo citation.
- All **8** cryptoclasses have miedo citations.
- **115 / 168** cells (cryptoclass × variant) filled (**68 %**).
- **53** cells empty (32 %).

## 2. Coverage matrix

|                       | AR | BO | CL | CO | CR | CU | DO | EC | ES | GT | HN | MX | NI | PA | PE | PR | PY | SV | UY | VE | US | **Σ** |
|---                    |---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Res Acutae            |  2 |  1 |  1 |  4 |  · |  2 |  1 |  · |  1 |  · |  · |  3 |  · |  1 |  1 |  · |  · |  · |  2 |  2 |  1 | **22** |
| Res Continens         | 19 |  5 | 16 | 15 |  2 |  6 |  4 |  3 | 31 |  · |  2 | 26 |  1 |  2 |  7 |  2 |  1 |  · |  4 |  7 | 21 | **174** |
| Res Filiformes        |  4 |  · |  1 |  1 |  · |  1 |  1 |  1 |  4 |  · |  · |  2 |  · |  · |  1 |  · |  · |  1 |  · |  1 |  2 | **20** |
| Res Liquidae          |  6 |  1 |  2 |  3 |  1 |  · |  1 |  1 | 12 |  · |  · |  7 |  · |  · |  1 |  · |  · |  · |  · |  5 |  6 | **46** |
| Res Longae Penetrantes| 17 |  1 |  2 |  3 |  · |  · |  1 |  · |  6 |  · |  · |  5 |  1 |  1 |  1 |  1 |  1 |  · |  1 |  6 |  2 | **49** |
| Res Parvae            |  1 |  · |  6 |  8 |  1 |  · |  1 |  · |  5 |  1 |  · |  3 |  · |  1 |  2 |  1 |  · |  · |  1 |  2 |  1 | **34** |
| Res Planae            | 10 |  2 |  5 |  7 |  1 |  2 |  1 |  · | 20 |  · |  · | 14 |  3 |  2 |  6 |  1 |  2 |  2 |  1 |  4 | 11 | **94** |
| Res Rotundae          |  6 |  · |  4 |  7 |  · |  1 |  2 |  · | 10 |  · |  2 | 11 |  · |  · |  3 |  2 |  · |  · |  · |  1 |  8 | **57** |
| **Σ**                 | 65 | 10 | 37 | 48 |  5 | 12 | 12 |  5 | 89 |  1 |  4 | 71 |  5 |  7 | 22 |  7 |  4 |  3 |  9 | 28 | 52 | **496** |

## 3. Critical-mass cells (Donina's `≥ 5` Pearson cutoff)

|             | cells | share |
|---          |---:   |---:   |
| `≥ 5`       |  34   | 20.2 % |
| `1–4`       |  81   | 48.2 % |
| empty       |  53   | 31.5 % |
| **total**   | 168   | 100 %  |

**Implication.** 80 % of cells are below the Pearson cutoff. Phase 6
variant-level statistics on miedo are currently defensible for ~5–6
strong variants only; the rest must be reported as exploratory or
filled in by Phase 2 pipeline collection.

### Variants below critical mass *in total*

- **GT** (1), **SV** (3), **HN** (4), **PY** (4) — unusable for any
  variant-level statistic on miedo without Phase 2 collection.

### Gaps by cryptoclass (cells with zero miedo citations)

| Cryptoclass             | empty cells | variants missed |
|---                      |---:         |---              |
| Res Acutae              | 8           | CR EC GT HN NI PR PY SV |
| Res Continens           | 2           | GT SV |
| Res Filiformes          | 9           | BO CR GT HN NI PA PR PY UY |
| Res Liquidae            | 9           | CU GT HN NI PA PR PY SV UY |
| Res Longae Penetrantes  | 6           | CR CU EC GT HN SV |
| Res Parvae              | 7           | BO CU EC HN NI PY SV |
| Res Planae              | 3           | EC GT HN |
| Res Rotundae            | 9           | BO CR EC GT NI PA PY SV UY |

Recurring offenders (≥ 5 missing classes): **GT (8 of 8), SV (6), HN (6), NI (5), PY (5)**.

## 4. Construction-type coverage

| construction_type             | n   |
|---                            |---: |
| `substantive`                 | 125 |
| `verbal-locative-state`       | 109 |
| `verbal-instrumental`         |  65 |
| `verbal-subject-intransitive` |  42 |
| `verbal-objective`            |  40 |
| `verbal-subject-transitive`   |  34 |
| `verbal-locative-into`        |  27 |
| `verbal-objective-grasp`      |  24 |
| `attributive`                 |  18 |
| `verbal-objective-throw`      |   5 |
| `verbal-locative-out`         |   3 |
| `predicative`                 |   2 |
| `disputed`                    |   2 |

**Schema drift.** `verbal-objective-grasp` (24) and
`verbal-objective-throw` (5) appear in `citations.tsv` (both Res Parvae)
but are *not* in `data/SCHEMA.md`'s controlled vocab. The extractor at
`pipeline/extract_wide.js:60-63` produces them deliberately for Res
Parvae's "захват/удержание" vs "отпускание/бросок" sub-distinction,
plus a `verbal-objective-collect` slug (not currently used for miedo).
The schema needs updating to either document these three slugs or
collapse them into `verbal-objective`.

## 5. Classifier-lemma diversity

After the `pipeline/extract_wide.js` rewrite of `detectLemma` plus seed
additions to `data/classifiers.tsv` (see §9 for the change list):

| Cryptoclass             | distinct lemmas | blank-lemma rows | total |
|---                      |---:             |---:              |---:   |
| Res Acutae              |  8              |  0               |  22   |
| Res Continens           | 16              |  1               | 174   |
| Res Filiformes          |  7              |  2               |  20   |
| Res Liquidae            |  7              |  8               |  46   |
| Res Longae Penetrantes  |  8              |  0               |  49   |
| Res Parvae              |  8              |  0               |  34   |
| Res Planae              |  2              |  0               |  94   |
| Res Rotundae            |  9              |  0               |  57   |

**Total blanks dropped 231 → 11 (97 %).** The 11 remaining blanks are
not extractor bugs — they are source-tagging issues that should stay
blank:

- 2 `disputed=t` rows (no construction_type → no seed list applies)
- 4 Liquidae `verbal-objective` rows containing `fluir` (the source
  put `fluir` examples in the objective column, but `fluir` is
  syntactically intransitive — column mis-tag)
- 3 Liquidae `substantive` / `verbal-instrumental` rows containing
  `rebosar` / `reboso` (the source treated `rebosar` as a substantive
  noun, but it is a verb — should be subject-intransitive)
- 1 Continens `attributive` "profundo miedo" (`profundo` is a
  depth-attribute that fits Continens semantics but is not in the
  attributive seed list — borderline case; left for manual review)
- 1 Liquidae `verbal-instrumental` fragment "corazones blaugranas,"
  with no anchor word at all (orphan extraction fragment)

These 11 are the gold-set's natural manual-review queue.

**Classifier concentration (Res Planae).** 93 of 94 Res Planae
citations still carry the single lemma `nivel de`; one carries
`llano`. Unchanged by the extractor fix — this is data reality, not
extraction. Question to settle before Phase 5 / Varimax: does miedo
belong in Res Planae at all, or only `nivel de miedo` as a measurement
idiom?

Top concrete lemmas overall (post-fix): `nivel de` (93, Planae) ·
`vivir en` (70, Continens) · `caer en` (27, Continens) · `envuelto en`
(20, Rotundae) · `inundar de` (20, Liquidae) · `envolver` (19,
Rotundae) · `estar en` (18, Continens) · `atravesar` (17, Penetrantes)
· `coger` (17, Parvae) · `tapar` (16, Continens) · `atravesado por`
(14, Penetrantes) · `destapar` (12, Continens) · `círculo de` (10,
Rotundae) · `dentro de` (10, Continens).

## 6. Disputed cases

Only **2** disputed=`t` rows for miedo, both in Res Filiformes:

| Country | Citation (excerpt) |
|---      |---                 |
| AR      | "el lema de la casa Stark, funciona como una metáfora de los miedos que penden so…" |
| CO      | "Se amarraron a sus miedos y no escaparon." |

**Verified against source.** Cross-checked the `СПОРНЫЕ` columns of
all 8 legacy xlsx miedo sheets (`/tmp/sporn_audit.js`):

| File                    | СПОРНЫЕ column | cells / fragments |
|---                      |---             |---:               |
| Res Acutae              | (none)         | —                 |
| RES CONTINENS           | (none)         | —                 |
| Res Filiformes          | col 8 "СПОРНЫЕ" | 2 / 2            |
| RES LIQUIDAE COR        | (none)         | —                 |
| Res Parvae              | col 5 "спорные" | 0 (empty)        |
| Res Penentrantes        | (none)         | —                 |
| Res Planae              | (none)         | —                 |
| Res Rotundae            | (none)         | —                 |

The extractor captured everything. The thinness reflects the source —
6 of 8 legacy sheets do not even carry a `СПОРНЫЕ` column for miedo.
Phase 1's "resolve `СПОРНЫЕ` cases" step is therefore a 2-citation
manual judgement, not a discovery exercise.

## 7. Cross-country duplicate citations

**6 sentences appear in two country cells each** (12 rows, 6 distinct
texts). All are within the same cryptoclass and same `source_sheet`,
i.e. the duplication exists *in the legacy xlsx* — not introduced by
extraction.

| Citation (excerpt)                                        | Class       | Countries |
|---                                                        |---          |---        |
| *El nivel de miedo a lo largo de la nación también…*      | Res Planae  | AR, PE    |
| *existe tal nivel de miedo y pánico entre las familias*   | Res Planae  | BO, CU    |
| *Los combates destapan el miedo.*                         | Continens   | AR, EC    |
| *es imposible vivir en el miedo*                          | Continens   | AR, EC    |
| *entrelazar el miedo y el placer sin poner se en riesgo*  | Filiformes  | EC, ES    |
| *las corrientes de el miedo que han penetrado a…*         | Penetrantes | PR, VE    |

**Decision required.** Each duplicate must collapse to one country, or
both attributions must be defended (e.g. genuine cross-publication
quotation). Until resolved, IDC counts for these 6 cells overstate by
1 each.

## 8. Provenance integrity

Clean. Zero missing `source_file`, `source_sheet`, `source_locator`,
`citation_es`, or `construction_type` across all 496 miedo rows.

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

Cross-emonym effect of the same changes (not just miedo):

| emonym   | blank % after |
|---       |---:           |
| miedo    | 2.2 %         |
| tristeza | 8.6 %         |
| amor     | 9.8 %         |
| ira      | 11.6 %        |
| alegría  | 23.9 %        |

The targeted seed additions were chosen from miedo evidence; the
detection-logic changes (compound-stem, stem-change, WB anchoring)
help all five emonyms uniformly. *alegría* still has a high blank
rate because its productive idioms (`saltar de`, `un brinco de`,
`dar saltos de`, `bailar de`) aren't yet seeded — analogous to
this exercise but for alegría.

## 10. Phase 1 next-step blockers

In order of severity:

1. **Decide on Res Planae for miedo.** 93/94 citations are one
   collocation (`nivel de miedo`). Either document and keep, or
   exclude miedo from Planae before computing class-level statistics.
2. **Resolve the 6 cross-country duplicates** in §7.
3. **Resolve the 2 `disputed=t` cells** in §6.
4. **Hand-review the 11 remaining blank-lemma rows** (§5) — most
   reveal source mis-tagging (fluir / rebosar mis-categorised) that
   should be parked as `disputed=t` rather than tagged.
5. **Reconcile construction-type vocab** between `SCHEMA.md` and the
   extractor (§4) — `verbal-objective-grasp`, `verbal-objective-throw`,
   `verbal-objective-collect` need to be added to the controlled-vocab
   table.

Step 3 of the ROADMAP (compute IDC / CAC) is now unblocked by the
extractor fix — 425 of 496 miedo rows have a usable lemma. Step 4
(one-page profile) and step 5 (freeze gold set) follow once
blockers 1–3 above are resolved.
