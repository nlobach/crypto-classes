# *ira* — aggregate cryptoclass profile (Spanish pooled)

Date: 2026-06-02.
Source: `data/derived/gold-ira.tsv` (curated gold set, n = 99).
Method: `pipeline/aggregate_profile.js ira --from-gold` +
`pipeline/coverage_miedo.js ira --from-gold`.
Indices per Boriskina (2011) §8.5 — see `notes/theory-boriskina.md`.

**Curation status — mechanical-first (2026-06-02).** Generic curation pass
only (`nivel de` exclusion — 32 of 32 *ira* Planae rows were `nivel de`, so
Planae is now empty; blank-lemma guard; 1 duplicate dropped) plus the
Problem-1.5 sidecar, which **adds 2 `envuelto en` rows** reassigned in from
*miedo* (Res Rotundae). Suspected issues in `audit-ira.md` §7. Delivers the
*ira* leg of the Phase-1 residual.

**Data-starvation caveat (overriding).** At **n = 99** *ira* is by far the
thinnest emonym — under 1/10 of *amor*. Every figure below is fragile; no
*ira* membership reaches the per-variant green-light threshold
(membership-matrix §Per-variant-ready). Read this profile as *direction of
travel*, not result.

## 1. Totals & coverage snapshot

- **130** raw *ira* citations (`citations.tsv`).
- **99** in the curated gold set: −1 duplicate, −32 generic exclusions
  (almost entirely the `nivel de` Planae rows), +2 reassigned-in
  `envuelto en` rows. (Membership matrix reports n = 98; the +1 is the
  net of the reassignment wiring.)
- **20 of 21** variants have ≥ 1 citation; **PR has none** (dead variant).
- Only **6 of 8** classes populated: **Res Acutae and Res Planae are
  entirely empty** for *ira*.
- **41 / 168** cells filled (**24.4 %**) — the sparsest emonym; **only 6**
  cells clear the ≥ 5 cutoff.

## 2. CAC (ПоКА) — distribution of *ira* across the 8 classes

Curated gold set, n = 99.

| Rank | Cryptoclass | Sᵢ | CAC |
|---|---|---:|---:|
| 1 | Res Liquidae | 45 | **45.5 %** |
| 2 | Res Continens | 31 | **31.3 %** |
| 3 | Res Parvae | 10 | 10.1 % |
| 4 | Res Longae Penetrantes | 8 | 8.1 % |
| 5 | Res Rotundae | 3 | 3.0 % |
| 6 | Res Filiformes | 2 | 2.0 % |
| 7 | Res Acutae | 0 | 0.0 % |
| 8 | Res Planae | 0 | 0.0 % |

## 3. IDC (ИРа) — classifier breadth per class

Same M-caveat as *miedo* §3. At this N the IDC values are barely
interpretable (Q is tiny everywhere).

| Cryptoclass | Qᵢ | M | IDC |
|---|---:|---:|---:|
| Res Liquidae | 8 | 30 | 0.267 |
| Res Longae Penetrantes | 3 | 13 | 0.231 |
| Res Continens | 7 | 32 | 0.219 |
| Res Parvae | 2 | 14 | 0.143 |
| Res Rotundae | 1 | 18 | 0.056 |
| Res Filiformes | 1 | 26 | 0.038 |
| Res Acutae | 0 | 17 | 0.000 |
| Res Planae | 0 | 9 | 0.000 |

## 4. The key reading

- ***ira* shows the negative-emotion two-axis profile: Liquidae (45 %) +
  Continens (31 %)** — the same pairing as *tristeza* and *miedo*. Anger
  **wells up / floods** (`brotar` 15, `torrente de` 7, `derramar` 4) and is
  a container you **fall into / uncork** (`caer en` 7, `destapar` 7 —
  *destapar la ira*, "to uncork anger", a vivid Continens image).
- **Res Parvae third (10 %)** — `traer` (9) carries it; anger is *brought /
  carried*. This is the highest Parvae share of any emonym, though still on
  only 10 citations.
- **Res Acutae and Res Planae are empty.** Planae because all 32 raw rows
  were `nivel de` (excluded). Acutae genuinely absent — surprising for an
  emotion one might expect to be "sharp", and worth a sentence if it
  survives Phase-2 collection.
- **Res Rotundae rests on the 2 reassigned `envuelto en` rows** + 1 native
  — i.e. it exists only because of the Problem-1.5 reassignment. Treat as
  not-yet-evidenced.

Headline: **\*ira\* points to a Liquidae+Continens profile (77 % combined),
the prototypical Spanish negative-emotion shape — but on n = 99 this is a
direction, not a finding.** *ira* is the clearest Phase-2 collection
priority.

### Contrast with English
Too thin to compare responsibly. The Liquidae+Continens lead is consistent
with the project-wide Spanish divergence from English Res Parvae dominance,
but *ira* must be re-collected before the comparison is made.

## 5. Absence / data-quality notes

1. **Sparsity is the headline.** 76 % of cells empty; only 6 cells ≥ 5
   (LIQ: ES MX; CON: CO MX ES; PEN: —; per the matrix *ira*'s best columns
   reach just 3 variants ≥ 5). **No per-variant *ira* statistic is
   defensible.** This is recorded as a finding: *ira* is under-collected
   relative to its candidacy.
2. **PR empty; the thin-variant block contributes almost nothing.** Most
   variants hold 1–2 *ira* citations total.
3. **Two of 8 classes empty (Acutae, Planae)** and three more (FIL, ROT,
   PAR/PEN) rest on ≤ 10 citations — only LIQ and CON have any substance.

## 6. Construction-type & top classifiers (per class)

Curated gold set (n = 99).

| Class | n | Dominant construction(s) | Top classifiers |
|---|---:|---|---|
| Res Liquidae | 45 | subj-intransitive 20, objective 8, substantive 7 | brotar 15, torrente de 7, derramar 4, inundar(de) 6, fluir 3 |
| Res Continens | 31 | locative-state 12, objective 9, locative-into 7 | caer en 7, destapar 7, encontrarse en 3, estar en 3 |
| Res Parvae | 10 | objective-grasp 9 | traer 9, manojo de 1 |
| Res Longae Penetrantes | 8 | subj-transitive 6 | atravesar 5, clavar 2, penetrar en 1 |
| Res Rotundae | 3 | instrumental 3 | envuelto en 3 (2 reassigned from *miedo*) |
| Res Filiformes | 2 | subj-intransitive 1, subj-transitive 1 | entrelazarse 1 |
| Res Acutae | 0 | — | — |
| Res Planae | 0 | — | — |

## 7. Phase 1 status for *ira*

Deliverables complete and the deeper sweeps **run (2026-06-02)** with no
exclusions: the wrong-lexeme sweep (`rabia/enfado/cólera/furia/enojo`) is
**confirmed clean** (0 rows) — notable given *ira*'s formal register and
tiny N; the 3 `envuelto en` Res Rotundae rows are all genuine *ira* and the
*miedo*→*ira* reassignment is verified correct (§4); and `traer` — which
carries 9 of *ira*'s 10 Res Parvae rows — is **kept** as a classifier (user
decision). Gold set frozen (`gold-ira.tsv`, n = 99; negatives in
`gold-ira-excluded.tsv`, 32). *ira* remains the **top Phase-2 collection
priority**; the gold set is final pending volume.
