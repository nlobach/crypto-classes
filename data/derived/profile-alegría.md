# *alegría* — aggregate cryptoclass profile (Spanish pooled)

Date: 2026-06-02.
Source: `data/derived/gold-alegría.tsv` (curated gold set, n = 737).
Method: `pipeline/aggregate_profile.js alegría --from-gold` +
`pipeline/coverage_miedo.js alegría --from-gold`.
Indices per Boriskina (2011) §8.5 — see `notes/theory-boriskina.md`.

**Curation status — mechanical-first (2026-06-02).** Generic curation pass
only (`nivel de` exclusion, blank-lemma guard, duplicate drop-list — 22
*alegría* duplicates removed). No deeper per-emonym scrutiny; suspected
issues in `audit-alegría.md` §7. Delivers the *alegría* leg of the Phase-1
residual.

> **Filename note.** The emonym carries its accent everywhere
> (`alegría`). The accent-less `alegria` matches **nothing** in the data —
> `build_gold.js alegria` produces an empty set. Always pass the accented
> form.

## 1. Totals & coverage snapshot

- **785** raw *alegría* citations (`citations.tsv`).
- **737** in the curated gold set: −22 duplicates, −26 generic exclusions.
  (Membership matrix reports n = 760; predates the duplicate drop-list.)
- All **21** variants have ≥ 1 citation (no dead variant).
- **7 of 8** classes populated; **Res Planae** holds 1 citation.
- **92 / 168** cells filled (**54.8 %**); **29** clear the ≥ 5 cutoff.

## 2. CAC (ПоКА) — distribution of *alegría* across the 8 classes

Curated gold set, n = 737.

| Rank | Cryptoclass | Sᵢ | CAC |
|---|---|---:|---:|
| 1 | Res Liquidae | 498 | **67.6 %** |
| 2 | Res Filiformes | 94 | 12.8 % |
| 3 | Res Continens | 71 | 9.6 % |
| 4 | Res Parvae | 37 | 5.0 % |
| 5 | Res Longae Penetrantes | 13 | 1.8 % |
| 6 | Res Rotundae | 12 | 1.6 % |
| 7 | Res Acutae | 11 | 1.5 % |
| 8 | Res Planae | 1 | 0.1 % |

## 3. IDC (ИРа) — classifier breadth per class

Same M-caveat as *miedo* §3 (IDC ordinal, not absolute).

| Cryptoclass | Qᵢ | M | IDC |
|---|---:|---:|---:|
| Res Parvae | 10 | 14 | **0.714** |
| Res Liquidae | 17 | 30 | 0.567 |
| Res Longae Penetrantes | 4 | 13 | 0.308 |
| Res Acutae | 5 | 17 | 0.294 |
| Res Filiformes | 7 | 26 | 0.269 |
| Res Continens | 8 | 32 | 0.250 |
| Res Rotundae | 3 | 18 | 0.167 |
| Res Planae | 1 | 9 | **0.111** |

## 4. The key reading

- ***alegría* is the most strongly single-class emonym in the project:
  Res Liquidae at 67.6 %**, with the broadest liquid classifier set of any
  emonym (17 distinct lemmas, IDC 0.567) across all 21 variants (18 ≥ 5).
  Joy **floods** (`inundar` 122, `inundar de` 100), **wells up** (`brotar`
  71), **drips** (`gota de` 15). This is a genuine, broad, pan-hispanic
  membership — the strongest Liquidae signal in the data.
- **The large unmatched-lemma tail (136 of 498 LIQ rows, 27 %) is a
  seeding gap, NOT a misclassification — verified 2026-06-02.** Reading all
  136 rows: every one is a genuine liquid use whose classifier the seed
  list misses. Breakdown — **`rebosar (de)` 114** ("rebosar de alegría", to
  overflow with joy; the single biggest unseeded classifier in the
  project), `fluir` 7 + `derramar` 5 (causative/reflexive forms detection
  missed: *dejó fluir*, *se derrama*), `aluvión de` 3, `desbordar` 3,
  `brotar` 1, `salpicar` 1. **None are jumping/dancing idioms; none belong
  in Res Parvae.** (This corrects the guess in `audit-miedo.md` §9 that
  alegría's blank rate came from *saltar/bailar de alegría* — those words
  appear only incidentally, never as the classifier.) Consequence: the
  67.6 % Liquidae CAC is **sound**; only the IDC is understated (Qᵢ would
  rise from 17 once `rebosar` etc. are seeded). The fix is a Phase-2
  seeding action, listed in `audit-alegría.md` §7.1 — not a curation call.
- **Res Filiformes second (12.8 %)**, carried by `desatar(se)` (63) — joy
  is **unleashed**. Member, broad spread (all 21 variants present).
- **Continens third (9.6 %)** — `vivir en`, `lleno de`, `dentro de`. Joy as
  container is weaker than for the negative emonyms.

Headline: **\*alegría\* is overwhelmingly a Res Liquidae (flowing/filling)
emotion (68 %)** — the project's clearest single-axis profile, and now
**confirmed**: the 136 unseeded LIQ rows are all genuine liquid uses
(`rebosar` etc.), so the figure is solid rather than provisional.

### Contrast with English
English Res Parvae default vs Spanish Liquidae dominance — the project's
recurring divergence. *alegría* is the extreme case (Liquidae 68 % vs Parvae
5 %). Suggestive; same collection-balance + the unseeded-idiom confound
above.

## 5. Absence / data-quality notes

1. **The unmatched LIQ tail (136 rows) is a pure seeding gap, now
   resolved as a finding** (§4): all 136 are genuine Liquidae, 114 of them
   `rebosar (de)`. It is a Phase-2 **seeding** target (add `rebosar`,
   `desbordar`, `aluvión de`, `salpicar` to the Liquidae seeds) — **not** a
   classification decision. The Liquidae share is unaffected.
2. **Thin variants below critical mass in total:** GT (3), PA (4). All
   others clear ≥ 5 in total, but most only via the LIQ column.
3. **Penetrantes/Rotundae/Acutae/Planae all ≤ 13 citations** — marginal to
   non-member; joy is not strongly sharp, round, piercing, or flat.

## 6. Construction-type & top classifiers (per class)

Curated gold set (n = 737).

| Class | n | Dominant construction(s) | Top classifiers |
|---|---:|---|---|
| Res Liquidae | 498 | instrumental 168, subj-transitive 128, subj-intransitive 100 | inundar 122, inundar de 100, brotar 71, gota de 15 (+ unmatched 136) |
| Res Filiformes | 94 | objective 46, subj-intransitive 21, attributive 21 | desatar 42, desatarse 21, hilo de 4 |
| Res Continens | 71 | locative-state 47, attributive 16 | vivir en 17, lleno de 16, dentro de 15, estar en 12 |
| Res Parvae | 37 | objective-grasp 22, substantive 8 | coger 7, manojo de 6, recoger 3, puñado de 2 |
| Res Longae Penetrantes | 13 | subj-transitive 8, instrumental 4 | atravesar 7, atravesado por 4 |
| Res Rotundae | 12 | objective 6, attributive 5 | rodar 6, redondo 5 |
| Res Acutae | 11 | instrumental 4, substantive 3 | punta de 2, filo de 1, puntiagudo 1 |
| Res Planae | 1 | attributive 1 | llano 1 |

## 7. Phase 1 status for *alegría*

Mechanical-first deliverables complete: coverage (§1,§5), CAC/IDC (§2,§3),
this profile, gold set frozen (`gold-alegría.tsv`, n = 737; negatives in
`gold-alegría-excluded.tsv`, 26). Deeper curation **done (2026-06-02)**: the
136-row LIQ tail is resolved as a genuine seeding gap (§4); the wrong-lexeme
sweep is confirmed clean (0 `felicidad/gozo/júbilo` rows). No exclusions or
reclassifications resulted. The only carried-forward item is a Phase-2
**seeding** action (`rebosar` etc.); the gold set is final pending volume.
