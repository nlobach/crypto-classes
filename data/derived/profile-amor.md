# *amor* — aggregate cryptoclass profile (Spanish pooled)

> ⚠️ **COUNT-based (2026-06-02) — superseded for distribution.** The CAC %/`n`
> below count *rows*, not corpus occurrences (Σfrequency). The authoritative
> frequency-mass distribution is
> [`distribution-frequency-mass.md`](distribution-frequency-mass.md); on that
> basis dominant classes differ (e.g. *alegría* → Res Parvae, *ira* → Res
> Filiformes). The membership *verdicts* (member / marginal) here still hold; the
> percentages do not.

Date: 2026-06-02.
Source: `data/derived/gold-amor.tsv` (curated gold set, n = 1060).
Method: `pipeline/aggregate_profile.js amor --from-gold` +
`pipeline/coverage_miedo.js amor --from-gold`.
Indices per Boriskina (2011) §8.5 — see `notes/theory-boriskina.md`.

**Curation status — sweeps done (2026-06-02).** Generic pass (`nivel de`
exclusion, blank-lemma guard, duplicate drop-list — 35 *amor* duplicates
removed) plus the Problem-1.5 sidecar, **then the deeper sweeps**: the
wrong-lexeme sweep is confirmed clean (0 `cariño/afecto/pasión` rows), and
the fixed-expression review removed 1 row (`pen-amor-mx-0006`, "mi amor
clavado" = nailed *beloved*, not the emotion). One open analysis note is
carried forward: `entregar`/`traer` are **kept** as Res Parvae classifiers
(user decision) but warrant a bleached-vs-live discussion in the writeup
(see `audit-amor.md` §7). Delivers the *amor* leg of the Phase-1 residual.

## 1. Totals & coverage snapshot

- **1,170** raw *amor* citations in the full extraction (`citations.tsv`) —
  the project's richest emonym.
- **1,059** in the curated gold set: the basis for every table below. The
  drop from 1,170 is 35 cross-dataset duplicates + 76 exclusions (chiefly
  `nivel de`, blank-lemma fragments, and the 1 fixed-expression row above).
  (The membership matrix, dated 2026-06-01, reports n = 1095 because it
  predates the duplicate drop-list being wired through for *amor*.)
- All **21** variants have ≥ 1 citation; **7 of 8** classes are well
  populated, **Res Planae** effectively absent (4 citations, see §4).
- **112 / 168** (cryptoclass × variant) cells filled (**66.7 %**) — the
  best cell coverage of any emonym, *miedo* included. **48** cells clear
  Donina's ≥ 5 critical-mass cutoff (28.6 %), also the project high.
- Two variants reach **8/8** classes (`CO`, `VE`); nine reach 7/8. Even the
  thin variants carry *amor* — no variant falls below critical mass *in
  total* (the weakest, GT/HN, hold 6 each).

## 2. CAC (ПоКА) — distribution of *amor* across the 8 classes

`Sᵢ = Σⱼ cᵢⱼ`; `CAC = Sᵢ / Σ Sᵢ`. Raw pooled shares (corpus coefficients
are a per-variant correction, N/A to a single-emonym pooled profile).
Curated gold set, n = 1059.

| Rank | Cryptoclass | Sᵢ | CAC |
|---|---|---:|---:|
| 1 | Res Liquidae | 471 | **44.5 %** |
| 2 | Res Filiformes | 204 | 19.3 % |
| 3 | Res Continens | 134 | 12.7 % |
| 4 | Res Longae Penetrantes | 89 | 8.4 % |
| 5 | Res Parvae | 77 | 7.3 % |
| 6 | Res Rotundae | 60 | 5.7 % |
| 7 | Res Acutae | 20 | 1.9 % |
| 8 | Res Planae | 4 | 0.4 % |

## 3. IDC (ИРа) — classifier breadth per class

`IDC = Qᵢ / M`; `Qᵢ` = distinct classifier lemmas *amor* realises, `M` =
size of the class's seed inventory in `classifiers.tsv`. Same **M-caveat**
as *miedo* §3 — M counts morphological/prepositional seed variants
separately, so IDC is ordinal, not absolute.

| Cryptoclass | Qᵢ | M | IDC |
|---|---:|---:|---:|
| Res Parvae | 10 | 14 | **0.714** |
| Res Filiformes | 14 | 26 | 0.538 |
| Res Longae Penetrantes | 7 | 13 | 0.538 |
| Res Rotundae | 9 | 18 | 0.500 |
| Res Continens | 13 | 32 | 0.406 |
| Res Liquidae | 11 | 30 | 0.367 |
| Res Planae | 2 | 9 | 0.222 |
| Res Acutae | 3 | 17 | **0.176** |

## 4. The key reading

- **Res Liquidae dominant (44.4 %) and broad** (11 lemmas, all 21 variants,
  18 of them ≥ 5 — the single most pan-hispanic membership in the project).
  This is genuine, not idiom-driven: *amor* **flows** (`fluir` 171),
  **spills** (`derramar` 72), **wells up** (`brotar` 68) and **floods**
  (`inundar de` 36). Love-as-liquid is the Spanish default.
- **Res Filiformes a strong second (19.2 %), with the broadest classifier
  realisation of any of *amor*'s classes** (IDC 0.538, 14 lemmas). Love is
  **unleashed/woven/tied**: `desatar` 57, `hilo de` 26, `tejerse` 19,
  `entrelazar(se)` 24. This is *amor*'s signature divergence from the other
  emonyms — only *amor* makes Filiformes a core class.
- **Res Acutae high-frequency but low-breadth** (CAC 1.9 %, IDC 0.176, only
  3 lemmas). Consistent with the cross-emonym finding that sharpness is
  described, not enacted, for Spanish emotion.
- **Res Planae effectively absent** (4 citations: `llano` 3 attributive,
  `nivelar` 1) once `nivel de` is excluded — same negative result as the
  other emonyms.

Headline: **\*amor\* is dominantly a Res Liquidae (flowing) emotion in
pooled Spanish (44 %), uniquely backed by a strong Res Filiformes
(thread/unleashing) second axis (19 %)** — the only emonym for which the
thread class is core. Container (Continens 13 %) sits third, much weaker
than for the negative emonyms *miedo/tristeza/ira*.

### Contrast with English
Donina/Boriskina report **Res Parvae** as the dominant, anthropocentric
default for English emonyms. Spanish *amor* puts Parvae at only 7.3 %; the
load is carried by **Liquidae + Filiformes**. As with *miedo*, this is
**suggestive, not yet a finding** — the same collection-balance confound
applies (membership-matrix §Caveats 2).

## 5. Absence / data-quality notes

1. **Best-covered emonym, but the thin variants are still thin per class.**
   GT/HN reach only 2–3 classes each; the Central-American block contributes
   little to any single class. Pooled membership is robust; per-variant
   work outside the green-light set (LIQ 18 var, FIL 11 var, CON 7 var; see
   membership-matrix) waits for Phase 2.
2. **Unmatched-lemma tails.** LIQ carries 34 blank-lemma rows, FIL 38, PAR
   12 — these count toward CAC (Sᵢ) but not IDC (Qᵢ). The LIQ/FIL dominance
   is therefore confirmed at the row level but ~7–19 % of those rows lack a
   verified classifier lemma; seeding the missing lemmas is a Phase-2 task.
3. **`amor` is lexically promiscuous — swept (2026-06-02).** The
   wrong-lexeme sweep (`cariño/afecto/pasión/querer`) came back **clean**
   (0 rows). The fixed-expression review removed 1 row (`pen-amor-mx-0006`,
   "mi amor clavado" = beloved person); `amor propio` in `pla-amor-us-0002`
   was reviewed and **kept** (user decision). See `audit-amor.md` §7.

## 6. Construction-type & top classifiers (per class)

Curated gold set (n = 1059).

| Class | n | Dominant construction(s) | Top classifiers |
|---|---:|---|---|
| Res Liquidae | 471 | subj-intransitive 276, objective 74, instrumental 43 | fluir 171, derramar 72, brotar 68, inundar de 36, inundar 28, diluirse 20 |
| Res Filiformes | 204 | objective 88, subj-intransitive 43, substantive 29 | desatar 57, hilo de 26, tejerse 19, tejer 17, entrelazar(se) 24 |
| Res Continens | 134 | locative-state 38, attributive 38, locative-into 18 | lleno de 36+12, encontrarse en 28, caer en 18, destapar 8 |
| Res Longae Penetrantes | 89 | subj-transitive 51, instrumental 20 | atravesar 50, atravesado por 16, penetrar(en) 17 |
| Res Parvae | 77 | objective-grasp 58, objective-throw 12 | traer 20, agarrar 18, coger 8, tirar 7 |
| Res Rotundae | 60 | subj-intransitive 39, instrumental 13 | envolver 27, envuelto en 10, bola de 5, girar 12 |
| Res Acutae | 20 | subj-transitive 10, attributive 6 | punta de 4, agudo 3, punzante 3 |
| Res Planae | 4 | attributive 3 | llano 3, nivelar 1 |

## 7. Phase 1 status for *amor*

- Coverage verified, gaps explicit — **done** (§1, §5; matrix in
  `audit-amor.md`).
- `СПОРНЫЕ` — handled by the project-wide parse-time skip policy
  (`audit-miedo.md` §6); no *amor*-specific disputed adjudication done yet
  (mechanical-first).
- IDC / CAC — **done** (§2, §3), with the M-caveat.
- One-page profile — **this file**.
- Gold set frozen — **done**: `gold-amor.tsv` + `.jsonl` (n = 1059);
  negatives in `gold-amor-excluded.tsv` (76).

Deeper curation **run (2026-06-02)**: wrong-lexeme sweep clean,
fixed-expression review (1 exclusion, `pen-amor-mx-0006`). The only carried
item is an analysis-section note on `entregar`/`traer` as Res Parvae
classifiers (kept; bleached-vs-live discussion pending — `audit-amor.md`
§7). The *amor* gold set is final pending Phase-2 volume.
