# *tristeza* — aggregate cryptoclass profile (Spanish pooled)

> ⚠️ **COUNT-based (2026-06-02) — superseded for distribution.** The CAC %/`n`
> below count *rows*, not corpus occurrences (Σfrequency). The authoritative
> frequency-mass distribution is
> [`distribution-frequency-mass.md`](distribution-frequency-mass.md); on that
> basis dominant classes differ (e.g. *alegría* → Res Parvae, *ira* → Res
> Filiformes). The membership *verdicts* (member / marginal) here still hold; the
> percentages do not.

Date: 2026-06-02.
Source: `data/derived/gold-tristeza.tsv` (curated gold set, n = 374).
Method: `pipeline/aggregate_profile.js tristeza --from-gold` +
`pipeline/coverage_miedo.js tristeza --from-gold`.
Indices per Boriskina (2011) §8.5 — see `notes/theory-boriskina.md`.

**Curation status — sweeps done (2026-06-02).** Generic pass (`nivel de`
exclusion, blank-lemma guard, duplicate drop-list — 15 duplicates removed)
plus the Problem-1.5 reassignment sidecar (which routed 9 `círculo de` rows
mis-filed under *miedo* into this set), **then the deeper curation sweeps**:
synonym sweep (clean), and the Res Rotundae frozen-collocation review (§4).

## 1. Totals & coverage snapshot

- **398** raw *tristeza* citations (`citations.tsv`).
- **363** in the curated gold set. Chain: −15 duplicates, −18 generic
  exclusions, +9 reassigned-in `círculo de` rows (= 374 at the
  mechanical-first stage), then the 2026-06-02 sweep removed **11 Res
  Rotundae rows** — 10 `círculo de` (the *círculo vicioso* cycle idiom,
  excluded class-wide like `nivel de`) and 1 `lágrimas de tristeza rodaban`
  (*rodar* scopes the tears, not *tristeza*). (Membership matrix reports
  n = 380; it predates both the duplicate drop-list and this sweep.)
- **20 of 21** variants have ≥ 1 citation; **HN has none** — the only dead
  variant for *tristeza*.
- **7 of 8** classes populated; **Res Rotundae now holds 1** (`bola de`,
  §4), Res Parvae and Res Planae 2 each.
- **71 / 168** cells filled (**42.3 %**); **24** clear the ≥ 5 cutoff.

## 2. CAC (ПоКА) — distribution of *tristeza* across the 8 classes

Curated gold set, n = 363.

| Rank | Cryptoclass | Sᵢ | CAC |
|---|---|---:|---:|
| 1 | Res Liquidae | 155 | **42.7 %** |
| 2 | Res Continens | 126 | **34.7 %** |
| 3 | Res Filiformes | 35 | 9.6 % |
| 4 | Res Longae Penetrantes | 31 | 8.5 % |
| 5 | Res Acutae | 11 | 3.0 % |
| 6 | Res Parvae | 2 | 0.6 % |
| 7 | Res Planae | 2 | 0.6 % |
| 8 | Res Rotundae | 1 | 0.3 % |

## 3. IDC (ИРа) — classifier breadth per class

Same M-caveat as *miedo* §3 (IDC ordinal, not absolute).

| Cryptoclass | Qᵢ | M | IDC |
|---|---:|---:|---:|
| Res Longae Penetrantes | 9 | 13 | **0.692** |
| Res Liquidae | 11 | 30 | 0.367 |
| Res Continens | 8 | 32 | 0.250 |
| Res Filiformes | 5 | 26 | 0.192 |
| Res Planae | 1 | 9 | 0.111 |
| Res Parvae | 1 | 14 | 0.071 |
| Res Acutae | 1 | 17 | 0.059 |
| Res Rotundae | 1 | 18 | **0.056** |

## 4. The key reading

- ***tristeza* is a two-axis emotion: Liquidae (43 %) + Continens (35 %)**,
  the two together 77 % of all activity. Both are genuine (high CAC, ≥ 8
  distinct lemmas, broad variant spread: LIQ 20/21, CON 18/21).
  - **Liquidae**: sadness **floods** (`inundar` 71, `inundar de` 38),
    **flows** (`fluir` 10), **wells up** (`brotar` 10). Note the
    transitive `inundar` ("la tristeza lo inundó") dominates here, unlike
    *amor*'s intransitive `fluir`.
  - **Continens**: sadness is a container you **fall into** (`caer en` 68,
    the dominant single classifier), are **pulled out of** (`sacar de`
    15), or **live in** (`vivir en` 11, `estar en` 13). The
    locative-**into** slot (71) is *tristeza*'s signature — entering
    sadness, more than residing in it.
- **Res Longae Penetrantes: high IDC (0.692, 9 lemmas) but modest CAC
  (8.3 %).** Broad but shallow — sadness can be pierced (`atravesar`,
  `clavar`, `penetrar`) across many verbs but not frequently.
- **Acutae carried by a single attributive** (`agudo` 9 of 11) — a
  frozen-attributive signature, near non-member.

Headline: **\*tristeza\* is dominantly Liquidae+Continens (77 % combined)** —
the prototypical "negative-emotion" profile this project finds, shared with
*miedo* and *ira* (container axis) but more liquid-led than *miedo*.

### Contrast with English
English emonyms default to Res Parvae (anthropocentric/graspable); Spanish
*tristeza* puts Parvae at 0.5 % (2 citations) — the load is Liquidae +
Continens. Suggestive, same collection-balance confound
(membership-matrix §Caveats 2).

## 5. Absence / data-quality notes

1. **HN is empty; the Central-American + small-Andean block is near-empty.**
   CR (1), PA (2), EC (3), NI (3), SV (3), GT (4) are below critical mass in
   total — unusable for any variant-level statistic on *tristeza*.
2. **Res Rotundae — resolved by the 2026-06-02 sweep (now a non-member).**
   The 10 `círculo (vicioso) de tristeza` rows were excluded class-wide as
   the *vicious-cycle* idiom (parallel to `nivel de`), and 1
   `lágrimas…rodaban` row removed (*rodar* scopes the tears). Res Rotundae
   now holds a single genuine row — `bola de tristeza` (*una bola de
   tristeza…en el estómago*) — i.e. below critical mass, a **non-member**.
   The class went 12 → 1 (CAC 3.2 % → 0.3 %).
3. **Parvae/Planae below critical mass** (2 each) — non-members on current
   data.

## 6. Construction-type & top classifiers (per class)

Curated gold set (n = 363).

| Class | n | Dominant construction(s) | Top classifiers |
|---|---:|---|---|
| Res Liquidae | 155 | subj-transitive 71, instrumental 46, subj-intransitive 22 | inundar 71, inundar de 38, fluir 10, brotar 10 |
| Res Continens | 126 | locative-into 71, locative-state 28, locative-out 15 | caer en 68, sacar de 15, estar en 13, vivir en 11, tapar 8 |
| Res Filiformes | 35 | objective 23, subj-intransitive 6 | desatar 22, desatarse 5, hilo de 4 |
| Res Longae Penetrantes | 31 | subj-transitive 14, instrumental 7 | atravesar 9, clavar 5, atravesado por 3, penetrar 3 |
| Res Acutae | 11 | attributive 9 | agudo 9 |
| Res Parvae | 2 | objective-grasp 1, objective-collect 1 | recoger 1 |
| Res Planae | 2 | attributive 2 | llano 2 |
| Res Rotundae | 1 | substantive 1 | bola de 1 |

## 7. Phase 1 status for *tristeza*

Deliverables complete and the deeper sweeps **run (2026-06-02)**: the
`círculo de` frozen-collocation review (10 rows excluded class-wide) and the
`lágrimas…rodaban` row (1 excluded) are resolved (§4), and the wrong-lexeme
sweep (`pena/pesar/melancolía`) is confirmed clean. Gold set frozen
(`gold-tristeza.tsv`, n = 363; negatives in `gold-tristeza-excluded.tsv`,
29). Final pending Phase-2 collection volume.
