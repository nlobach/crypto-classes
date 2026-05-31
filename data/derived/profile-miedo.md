# *miedo* — aggregate cryptoclass profile (Spanish pooled)

Date: 2026-06-01
Source: `data/citations.tsv` (regenerated after disputed-case deletion;
8 cryptoclasses, 21 variants).
Method: `pipeline/coverage_miedo.js` + `pipeline/aggregate_profile.js`.
Indices per Boriskina (2011) §8.5 — see `notes/theory-boriskina.md`.

This file delivers ROADMAP Phase 1 step 4 (one-page cryptoclass profile)
at the **aggregate / Spanish-pooled** level — i.e. *miedo* across all
variants combined, not per-variant. The per-variant gap record is in
`audit-miedo.md` (now stale on counts — see note there).

**Scope decision (2026-06-01).** Per-variant cell density is too thin
for defensible variant-level statistics (see §5). We therefore report
*miedo* as a **proof-of-method aggregate profile + gold set**, and treat
the sparsity itself as a finding (§5). Further manual collection is
deferred to the Phase 2 pipeline; absence is recorded, not filled.

## 1. Totals & coverage snapshot

- **510** raw miedo citations (was 494 at the 2026-05-28 audit; +16 from
  citations added in subsequent commits).
- **417** after the `nivel de` exclusion (§4) — this is the **gold-set**
  count and the basis for the CAC table in §2.
- All **21** variants and all **8** cryptoclasses have ≥ 1 citation.
- **115 / 168** (cryptoclass × variant) cells filled (**68.5 %**);
  53 empty.
- Empty cells cluster almost entirely in the under-resourced variants
  (`GT, HN, SV, NI, CR, PR, PY, EC, BO`) — Central America + the small
  Andean/Rioplatense edges. The 9 fully-covered variants (8/8 classes)
  are `AR, CL, CO, DO, ES, MX, PE, VE, US`.

## 2. CAC (ПоКА) — distribution of *miedo* across the 8 classes

`Sᵢ = Σⱼ cᵢⱼ` (citation count per class); `CAC = Sᵢ / Σ Sᵢ`. Raw
(un-normalised) pooled shares — corpus coefficients are a per-variant
correction and do not apply to a single-emonym pooled profile.
**Post-exclusion** (gold set, n = 417); the `nivel de` collocation is
removed from Res Planae per §4.

| Rank | Cryptoclass | Sᵢ | CAC |
|---|---|---:|---:|
| 1 | Res Continens | 188 | **45.1 %** |
| 2 | Res Rotundae | 57 | 13.7 % |
| 3 | Res Longae Penetrantes | 49 | 11.8 % |
| 4 | Res Liquidae | 46 | 11.0 % |
| 5 | Res Parvae | 34 | 8.2 % |
| 6 | Res Acutae | 22 | 5.3 % |
| 7 | Res Filiformes | 20 | 4.8 % |
| 8 | Res Planae | 1 | 0.2 % |

For reference, the **pre-exclusion** shares were: Continens 36.9 %,
**Planae 18.4 %** (the `nivel de` artefact), Rotundae 11.2 %, Penetrantes
9.6 %, Liquidae 9.0 %, Parvae 6.7 %, Acutae 4.3 %, Filiformes 3.9 %
(n = 510).

## 3. IDC (ИРа) — classifier breadth per class

`IDC = Qᵢ / M`, where `Qᵢ` = distinct classifier lemmas of the class
that *miedo* actually realises, and `M` = size of the class's seed
inventory in `data/classifiers.tsv`.

| Cryptoclass | Qᵢ | M | IDC |
|---|---:|---:|---:|
| Res Longae Penetrantes | 8 | 13 | **0.615** |
| Res Parvae | 8 | 14 | 0.571 |
| Res Continens | 16 | 32 | 0.500 |
| Res Rotundae | 9 | 18 | 0.500 |
| Res Acutae | 8 | 17 | 0.471 |
| Res Filiformes | 8 | 26 | 0.308 |
| Res Liquidae | 7 | 30 | 0.233 |
| Res Planae | 2 | 9 | **0.222** |

> **Caveat on M.** The denominator counts *seed-pattern entries*, which
> include morphological / prepositional variants as separate rows
> (`inundado por`, `inundar de`, `inundarse de` … all from one verb).
> This inflates `M` and deflates IDC, unevenly across classes (LIQ and
> CON have the most variant-heavy seed lists). These IDC values are
> therefore **operational, not canonical** — a Boriskina-style IDC needs
> an agreed count of distinct *classifiers* (predicate lemmas) per class.
> Treat IDC here as ordinal/relative, not absolute.

## 4. The CAC/IDC divergence — the key reading

Boriskina's two-index logic exists precisely to catch frequency
artefacts. Two classes tell opposite stories:

- **Res Planae — was high CAC (18.4 %, rank 2) but low IDC (0.222, rank
  8).** 93 of 94 Planae citations were the single substantive
  `nivel de miedo` ("level of fear"); one is `llano`. This is the classic
  **frozen-idiom** signature (Boriskina §11.4): one classifier inflates
  the share while breadth stays minimal — a measurement collocation, not
  evidence of broad flat-surface membership.
  → **Resolved (2026-06-01): `nivel de` excluded** (see
  `notes/cryptoclasses/_inventory-decisions.md`). Res Planae drops to 1
  citation (`llano`), below critical mass — *miedo* effectively does
  **not** project into Res Planae on current data. The 93 excluded rows
  are kept as a negative-calibration set in
  `data/derived/gold-miedo-excluded.tsv`.

- **Res Continens — high CAC (36.9 %) AND high IDC (0.500, 16/32
  classifiers).** This is genuine broad membership: *miedo* spreads
  across locative-state (`vivir en`, `caer en`, `estar en`,
  `encontrarse en`), objective (`tapar`, `destapar`), and motion
  (`caer en`, `sacar de`) constructions. The container image of fear in
  Spanish is real and broad, not idiom-driven.

So the honest headline is: **with the `nivel de` artefact removed,
*miedo* is dominantly a Res Continens (container) emotion in pooled
Spanish (45.1 %), with a long even tail across Rotundae / Penetrantes /
Liquidae / Parvae (~8–14 % each) and weak Acutae / Filiformes / Planae
presence.**

### Contrast with Boriskina/Donina (English)
English *fear* is dominant in **Res Parvae** (graspable / anthropocentric
default; Donina thesis 5–6). Spanish *miedo* here shows Res Parvae at
only 6.7 %. This divergence is **suggestive, not yet a finding** — it is
confounded by (a) collection emphasis: Res Continens and Res Planae, the
two classes added by this project, have the widest variant coverage
(CON 19/21, PLA 18/21) and likely the most-sought citations; and (b) the
`nivel de` idiom. A fair comparison needs balanced collection across all
8 classes (Phase 2).

## 5. Absence as a data point

Three empty/near-empty patterns are recorded as findings, not noise:

1. **Central America is structurally missing.** `GT` (1 citation total),
   `SV` (3), `HN` (4), `PY` (4) cannot support any variant-level
   statistic. This mirrors the corpus reality (these variants are thin in
   Davies's *Corpus del Español*) and is the predictable gap Donina
   flagged for under-resourced variants (`methodology-donina.md` §5.7).
2. **Critical mass is rare.** Only ~20 % of cells clear Donina's ≥ 5
   threshold; ~48 % hold 1–4 citations; 32 % are empty. Variant-level
   Pearson/Kendall on *miedo* is defensible for the 9 strong variants
   only — and even then mainly in the CON/PLA columns.
3. **Class asymmetry of the emonym.** *miedo*'s weakest classes
   (Filiformes 3.9 %, Acutae 4.3 %) are weak *everywhere*, not just in
   thin variants — i.e. fear is genuinely not strongly thread-like or
   sharp in Spanish, independent of collection volume. This is a real
   (if provisional) semantic result.

## 6. Construction-type & top classifiers (per class)

| Class | n | Dominant construction(s) | Top classifiers |
|---|---:|---|---|
| Res Continens | 188 | locative-state 117, objective 28, locative-into 27 | vivir en 70, caer en 27, estar en 18, tapar 15, destapar 12 |
| Res Planae | 94 | substantive 93 | **nivel de 93**, llano 1 |
| Res Rotundae | 57 | instrumental 24, subj-intransitive 23 | envuelto en 20, envolver 19, círculo de 10 |
| Res Longae Penetrantes | 49 | subj-transitive 23, instrumental 17 | atravesar 17, atravesado por 14, penetrar 7 |
| Res Liquidae | 46 | instrumental 24, substantive 9 | inundar de 20, brotar 7, gota de 5 |
| Res Parvae | 34 | objective-grasp 24 | coger 17, traer 5, puñado de 3 |
| Res Acutae | 22 | attributive 10, substantive 8 | punta de 8, agudo 7, punzante 2 |
| Res Filiformes | 20 | subj-intransitive 6, subj-transitive 6 | atar 6, entrelazarse 5, tejer 2 |

## 7. Phase 1 status after this profile

- Step 1 (coverage verified, gaps explicit) — **done** (§1, §5; full
  per-cell matrix in `audit-miedo.md`).
- Step 2 (resolve `СПОРНЫЕ`) — **done** (disputed cases deleted from
  source; 0 remain — see `audit-miedo.md` §6).
- Step 3 (compute IDC / CAC) — **done** (§2, §3), with the M-caveat.
- Step 4 (one-page profile) — **this file**.
- Step 5 (freeze gold set) — **done**: `data/derived/gold-miedo.tsv` +
  `.jsonl` (417 citations), built by `pipeline/build_gold.js` with the
  `nivel de` exclusion (§4) applied. Excluded rows retained as
  `gold-miedo-excluded.tsv` (93) for pipeline negative-calibration.

### Remaining cleanup (post-freeze, non-blocking)
- 6 cross-country duplicate citations (`audit-miedo.md` §7) still inflate
  a few cells by 1 each — resolve before per-variant statistics.
- The 9 blank-lemma rows (`audit-miedo.md` §5) are a manual-review queue
  (source mis-tagging of `fluir` / `rebosar`).
- Re-run `build_gold.js` after either cleanup to refreeze.
