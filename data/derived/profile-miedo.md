# *miedo* — aggregate cryptoclass profile (Spanish pooled)

> ⚠️ **COUNT-based (2026-06-02) — superseded for distribution.** The CAC %/`n`
> below count *rows*, not corpus occurrences (Σfrequency). The authoritative
> frequency-mass distribution is
> [`distribution-frequency-mass.md`](distribution-frequency-mass.md); on that
> basis dominant classes differ (e.g. *alegría* → Res Parvae, *ira* → Res
> Filiformes). The membership *verdicts* (member / marginal) here still hold; the
> percentages do not.

Date: 2026-06-02 (regenerated on the curated gold set: Problem-1 lemma
cleanup, Problem-2 duplicate drop-list, and Problem-1.5 mis-file cleanup
all applied).
Source: `data/derived/gold-miedo.tsv` (curated gold set, n = 391).
Method: `pipeline/aggregate_profile.js --from-gold` +
`pipeline/coverage_miedo.js --from-gold`.
Indices per Boriskina (2011) §8.5 — see `notes/theory-boriskina.md`.

This file delivers ROADMAP Phase 1 step 4 (one-page cryptoclass profile)
at the **aggregate / Spanish-pooled** level — i.e. *miedo* across all
variants combined, not per-variant. The per-variant gap record is in
`audit-miedo.md`.

**Scope decision (2026-06-01).** Per-variant cell density is too thin
for defensible variant-level statistics (see §5). We therefore report
*miedo* as a **proof-of-method aggregate profile + gold set**, and treat
the sparsity itself as a finding (§5). Further manual collection is
deferred to the Phase 2 pipeline; absence is recorded, not filled.

## 1. Totals & coverage snapshot

- **510** raw *miedo* citations in the full extraction (`citations.tsv`).
- **390** in the curated **gold set** — the basis for every table below.
  The curation chain from 510: the `nivel de` measurement collocation is
  excluded (§4, 93 rows → negative-calibration set), Problem-1 lemma
  cleanup (7 corrections kept, 6 fragments/borderline rows excluded), the
  Problem-2 duplicate drop-list (6 genuine *miedo* duplicates removed), the
  Problem-1.5 mis-file cleanup (11 rows reassigned to *tristeza*/*ira*,
  3 `temor` rows excluded as a distinct lexeme), and — **added 2026-06-02**
  in the cross-emonym curation sweep — the class-wide `círculo de`
  exclusion, removing 1 *miedo* Res Rotundae row (`rot-miedo-ar-0006`,
  "círculo de miedo"; the *vicious-cycle* idiom, parallel to `nivel de`).
  Hence 391 → 390.
- All **21** variants and **7** of the 8 cryptoclasses have ≥ 1 citation;
  **Res Planae** is effectively absent (1 citation, see §4).
- **94 / 168** (cryptoclass × variant) cells filled (**56.0 %**);
  74 empty. (The drop from the pre-cleanup 68.5 % is almost entirely the
  Res Planae row collapsing once `nivel de` is removed.)
- Empty cells cluster in the under-resourced variants
  (`GT, HN, SV, NI, CR, PR, PY, EC, BO`) — Central America + the small
  Andean/Rioplatense edges. The 9 best-covered variants reach 7/8 classes
  (no variant reaches 8/8, since Planae is empty everywhere but `CO`):
  `AR, CL, CO, DO, ES, MX, PE, VE, US`.

## 2. CAC (ПоКА) — distribution of *miedo* across the 8 classes

`Sᵢ = Σⱼ cᵢⱼ` (citation count per class); `CAC = Sᵢ / Σ Sᵢ`. Raw
(un-normalised) pooled shares — corpus coefficients are a per-variant
correction and do not apply to a single-emonym pooled profile.
**Curated gold set, n = 390**; the `nivel de` collocation is removed from
Res Planae per §4, and `círculo de` from Res Rotundae per §1.

| Rank | Cryptoclass | Sᵢ | CAC |
|---|---|---:|---:|
| 1 | Res Continens | 178 | **45.6 %** |
| 2 | Res Longae Penetrantes | 48 | 12.3 % |
| 3 | Res Liquidae | 45 | 11.5 % |
| 3 | Res Rotundae | 45 | 11.5 % |
| 5 | Res Parvae | 34 | 8.7 % |
| 6 | Res Acutae | 22 | 5.6 % |
| 7 | Res Filiformes | 17 | 4.4 % |
| 8 | Res Planae | 1 | 0.3 % |

For reference, the **pre-exclusion** shares (raw, n = 510, `nivel de`
still in) were: Continens 36.9 %, **Planae 18.4 %** (the `nivel de`
artefact), Rotundae 11.2 %, Penetrantes 9.6 %, Liquidae 9.0 %,
Parvae 6.7 %, Acutae 4.3 %, Filiformes 3.9 %.

## 3. IDC (ИРа) — classifier breadth per class

`IDC = Qᵢ / M`, where `Qᵢ` = distinct classifier lemmas of the class
that *miedo* actually realises, and `M` = size of the class's seed
inventory in `data/classifiers.tsv`.

| Cryptoclass | Qᵢ | M | IDC |
|---|---:|---:|---:|
| Res Longae Penetrantes | 8 | 13 | **0.615** |
| Res Parvae | 8 | 14 | 0.571 |
| Res Acutae | 8 | 17 | 0.471 |
| Res Continens | 15 | 32 | 0.469 |
| Res Rotundae | 8 | 18 | 0.444 |
| Res Filiformes | 8 | 26 | 0.308 |
| Res Liquidae | 8 | 30 | 0.267 |
| Res Planae | 1 | 9 | **0.111** |

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
  citation (`llano`, attributive), below critical mass, and its variant
  coverage collapses from 18/21 to **1/21** — *miedo* effectively does
  **not** project into Res Planae on current data. The 93 excluded rows
  are kept as a negative-calibration set in
  `data/derived/gold-miedo-excluded.tsv`.

- **Res Continens — high CAC (45.6 %) AND high IDC (0.469, 15/32
  classifiers).** This is genuine broad membership: *miedo* spreads
  across locative-state (`vivir en`, `caer en`, `estar en`,
  `encontrarse en`), objective (`tapar`, `destapar`), and motion
  (`caer en`, `sacar de`) constructions. The container image of fear in
  Spanish is real and broad, not idiom-driven.

So the honest headline is: **with the `nivel de` artefact removed,
*miedo* is dominantly a Res Continens (container) emotion in pooled
Spanish (45.6 %), with a long even tail across Penetrantes / Rotundae /
Liquidae / Parvae (~9–12 % each) and weak Acutae / Filiformes / Planae
presence.**

### Contrast with Boriskina/Donina (English)
English *fear* is dominant in **Res Parvae** (graspable / anthropocentric
default; Donina thesis 5–6). Spanish *miedo* here shows Res Parvae at
only 8.7 %. This divergence is **suggestive, not yet a finding** — it is
confounded by (a) collection emphasis: Res Continens, the project's
widest-covered class (CON 18/21), likely drew the most-sought citations;
and (b) the now-removed `nivel de` idiom. A fair comparison needs
balanced collection across all 8 classes (Phase 2).

## 5. Absence as a data point

Three empty/near-empty patterns are recorded as findings, not noise:

1. **Central America is structurally missing.** `GT` (1 citation total),
   `SV` (1), `HN` (3), `PY` (1) cannot support any variant-level
   statistic. This mirrors the corpus reality (these variants are thin in
   Davies's *Corpus del Español*) and is the predictable gap Donina
   flagged for under-resourced variants (`methodology-donina.md` §5.7).
2. **Critical mass is rare.** Only ~15 % of cells clear Donina's ≥ 5
   threshold (25/168); ~41 % hold 1–4 citations; 44 % are empty.
   Variant-level Pearson/Kendall on *miedo* is defensible for the ~6
   strong variants only — and even then mainly in the CON column.
3. **Class asymmetry of the emonym.** *miedo*'s weakest classes
   (Filiformes 4.3 %, Acutae 5.6 %) are weak *everywhere*, not just in
   thin variants — i.e. fear is genuinely not strongly thread-like or
   sharp in Spanish, independent of collection volume. This is a real
   (if provisional) semantic result.

## 6. Construction-type & top classifiers (per class)

Curated gold set (n = 390).

| Class | n | Dominant construction(s) | Top classifiers |
|---|---:|---|---|
| Res Continens | 178 | locative-state 110, locative-into 27, objective 26 | vivir en 69, caer en 27, estar en 17, tapar 15, encontrarse en 11 |
| Res Longae Penetrantes | 48 | subj-transitive 23, instrumental 17 | atravesar 17, atravesado por 14, penetrar 6 |
| Res Rotundae | 45 | subj-intransitive 23, instrumental 22 | envolver 19, envuelto en 18, girar en torno a 2 |
| Res Liquidae | 45 | instrumental 22, subj-intransitive 13, substantive 8 | inundar de 20, brotar 7, gota de 5 |
| Res Parvae | 34 | objective-grasp 24, objective-throw 5, substantive 5 | coger 17, traer 5, puñado de 3 |
| Res Acutae | 22 | attributive 10, substantive 8 | punta de 8, agudo 7, punzante 2 |
| Res Filiformes | 17 | subj-transitive 6, subj-intransitive 5, objective 4 | atar 6, entrelazarse 4, tejer 2 |
| Res Planae | 1 | attributive 1 | llano 1 |

## 7. Phase 1 status after this profile

- Step 1 (coverage verified, gaps explicit) — **done** (§1, §5; full
  per-cell matrix in `audit-miedo.md`).
- Step 2 (resolve `СПОРНЫЕ`) — **done** (Conservative parse-time policy;
  see `audit-miedo.md` §6).
- Step 3 (compute IDC / CAC) — **done** (§2, §3), with the M-caveat.
- Step 4 (one-page profile) — **this file**.
- Step 5 (freeze gold set) — **done**: `data/derived/gold-miedo.tsv` +
  `.jsonl` (**390** citations), built by `pipeline/build_gold.js` with the
  `nivel de` exclusion (§4), the Problem-1 lemma cleanup, the Problem-2
  duplicate drop-list, the Problem-1.5 mis-file cleanup, and the 2026-06-02
  class-wide `círculo de` exclusion all applied. Excluded rows retained as
  `gold-miedo-excluded.tsv` (96) for pipeline negative-calibration.

### Residual cleanup — complete
- **Blank-lemma rows — resolved** (Problem 1; 7 corrected, 6 excluded).
- **Cross-dataset duplicates — resolved** (Problem 2; drop-list honoured
  by `build_gold.js`).
- **Mis-filed rows — resolved** (Problem 1.5; 11 reassigned to
  *tristeza*/*ira* via `data/derived/emonym-reassignments.tsv`, 3 `temor`
  rows excluded). *temor* is recorded as a Phase-4 emonym candidate.
- **`círculo de` — excluded class-wide (2026-06-02)**: the cross-emonym
  curation sweep removed the *vicious-cycle* idiom from Res Rotundae for
  all emonyms (1 *miedo* row, `rot-miedo-ar-0006`); 391 → 390. Parallel to
  the `nivel de` treatment.

The *miedo* gold set is now final pending Phase-2 collection volume.
