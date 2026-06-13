# Cryptoclass distribution of the 5 Spanish emonyms — frequency-mass (CANONICAL)

Date: 2026-06-13.
Source: the five frozen gold sets `data/derived/gold-<emonym>.tsv`.
Method: `Σfrequency` per `(emonym × cryptoclass)`, i.e. `SUM(frequency)` over the
`frequency` column (per `data/SCHEMA.md` → "Frequency formats"; the multi-stage
parse in `pipeline/extract_wide.js`). **Not** `COUNT(*)`.

> **This file is the single source of the GOLD distribution numbers.** It is the
> basis for the internal avtoreferat note
> `notes/avtoreferat/kriptoklassnaya-kategorizatsiya-emotsiy-ru.md` (recalculated
> to gold 2026-06-14) and supersedes the COUNT-based CAC % in
> `membership-matrix.md` and the `profile-<emonym>.md` / `audit-<emonym>.md` files
> (all 2026-06-02).
>
> **Intentional basis split (user decision, 2026-06-14).** The autoreferat prose
> *manuscript* `data/derived/autoreferat-prose-3index-ru.md` is deliberately left
> on the **raw** basis (total **10 142**, class-wide exclusions only) and is NOT
> reconciled to this file. So the manuscript and this gold file differ by ~1.5 %
> (raw 10 142 vs gold 9 984) — that gap is *expected*, not a discrepancy to
> "fix." Gold additionally applies the per-emonym lexical exclusions, the
> duplicate drop-list, and the Problem-1.5 reassignment (see Reconciliation).

## Basis (three decisions baked in)

1. **Σfrequency, not row count.** A legacy cell encoding `traer alegría 3237`
   contributes 3237, not 1. Illustrative/absent rows carry `frequency = 0` and so
   never double-count. Counting rows instead inverts the picture — e.g. *alegría*
   Res Liquidae is 507 rows but Σfreq 506 (almost pure weight-1 examples), whereas
   its Res Parvae is 112 rows but Σfreq 3793.
2. **Gold sets are authoritative.** The frozen `gold-<emonym>.tsv` apply the
   class-wide exclusions (`nivel de` out of Res Planae, `círculo de` out of Res
   Rotundae), the duplicate drop-list, the Problem-1.5 reassignments, and the
   per-emonym id-specific exclusions. Raw `citations.tsv` (class-wide exclusions
   only) is the cross-check, not the headline (see Reconciliation below).
3. ***coger* / *traer* / *entregar* are full classifiers** of Res Parvae, and
   **every** occurrence is counted. Justification: the Res Parvae эталон (small,
   graspable, **transferable**, throwable object) licenses the transfer/grasp
   construction; the predicates retain hand-over/grasp semantics (*coger* = "asir
   con la mano"). This is a deliberate, defended decision — it is what produces
   the Res Parvae frequency primacy below, so it is stated, not silent. See the
   classifier definition in `notes/glossary.md` ([[classifier]]).

## The matrix — Σfrequency / CAC %

`CAC %` = share of the emonym's total Σfrequency carried by the class. Dominant
class per emonym in **bold**. `N` = emonym total Σfrequency (gold).

| emonym | LIQ | FIL | ROT | PEN | ACU | PAR | PLA | CON | N |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| **miedo**    | 45 / 4.3 | 172 / 16.3 | 45 / 4.3 | 48 / 4.5 | 22 / 2.1 | **546 / 51.8** | 1 / 0.1 | 176 / 16.7 | 1055 |
| **tristeza** | **155 / 37.9** | 38 / 9.3 | 1 / 0.2 | 31 / 7.6 | 10 / 2.4 | 50 / 12.2 | 2 / 0.5 | 122 / 29.8 | 409 |
| **amor**     | **562 / 45.0** | 207 / 16.6 | 60 / 4.8 | 89 / 7.1 | 20 / 1.6 | 176 / 14.1 | 4 / 0.3 | 132 / 10.6 | 1250 |
| **alegría**  | 506 / 9.0 | 1201 / 21.4 | 12 / 0.2 | 13 / 0.2 | 11 / 0.2 | **3793 / 67.6** | 1 / 0.0 | 71 / 1.3 | 5608 |
| **ira**      | 45 / 2.7 | **1565 / 94.2** | 3 / 0.2 | 8 / 0.5 | 0 / 0.0 | 11 / 0.7 | 0 / 0.0 | 30 / 1.8 | 1662 |

Abbreviations: LIQ = *Res Liquidae*, FIL = *Res Filiformes*, ROT = *Res Rotundae*,
PEN = *Res Longae Penetrantes*, ACU = *Res Acutae*, PAR = *Res Parvae*,
PLA = *Res Planae*, CON = *Res Continens*.

Per-emonym frequency dominant: **miedo → Res Parvae**, **tristeza → Res Liquidae**,
**amor → Res Liquidae**, **alegría → Res Parvae**, **ira → Res Filiformes**.

## Pooled frequency mass (частотная масса) — ranking of the 8 classes

Σfrequency summed across all 5 emonyms:

| rank | class | Σfreq | share |
|--:|---|--:|--:|
| 1 | **Res Parvae** | 4576 | 45.8 % |
| 2 | **Res Filiformes** | 3183 | 31.9 % |
| 3 | Res Liquidae | 1313 | 13.2 % |
| 4 | Res Continens | 531 | 5.3 % |
| 5 | Res Longae Penetrantes | 189 | 1.9 % |
| 6 | Res Rotundae | 121 | 1.2 % |
| 7 | Res Acutae | 63 | 0.6 % |
| 8 | Res Planae | 8 | 0.08 % |
| | **total** | **9984** | |

Ranking: **Res Parvae → Res Filiformes → Res Liquidae → Res Continens → Res Longae
Penetrantes → Res Rotundae → Res Acutae → Res Planae.**

## The concentration caveat (why frequency mass ≠ productive core)

The Res Parvae and Res Filiformes primacy rests on **grammaticalised support
verbs**, not on breadth of combinability. Each frequency-dominant cell collapses
onto one lead classifier (СИ = concentration index = lead-classifier share):

| emonym | dominant class | lead classifier | СИ |
|---|---|---|--:|
| miedo | Res Parvae | *coger* | 90 % |
| alegría | Res Parvae | *traer* | 84 % |
| tristeza | Res Parvae | *traer* | 92 % |
| alegría | Res Filiformes | *desatar* | 99 % |
| ira | Res Filiformes | *desatar la ira* | 100 % |

The graspable-object image is **diversely** realised (multiple classifiers) only
in *amor* (Res Parvae lead *coger* just 49 %, spread over *entregar / traer /
agarrar / tirar …*). Consequently the **productive core** of the categorisation
(`autoreferat-prose-3index-ru.md` §6) is read off **breadth of combinability (ИРа)**,
not frequency share (ПоКА): *Res Liquidae*, *Res Continens*, *Res Filiformes*
(broad only in *amor*). When the ranking shifts from frequency to breadth, the
order rearranges — *Res Filiformes* in *ira* (ПоКА 94 %) and *Res Liquidae* in
*alegría* (ПоКА 9 %) swap places.

## Reconciliation (gold vs raw)

Raw `citations.tsv` Σfrequency (class-wide exclusions only) per emonym total:
miedo 1095, tristeza 422, amor 1288, alegría 5676, ira 1661. Gold is **≤ 4 % below
raw** per emonym; the gap decomposes entirely into documented gold-build steps:

- **Itemised exclusions** (`gold-<emonym>-excluded.tsv`): `nivel de` 237 and
  `círculo de` 11 (both class-wide, already out of raw); per-emonym `temor` 3,
  reflexive-bind 7, "beloved" 1, `profundo miedo` 1, `rodar/lágrimas` 1.
- **Duplicate drop-list** (cross-country dedup).
- **Problem-1.5 reassignment**: +2 `envuelto en ira` rows move *miedo* → *ira* in
  Res Rotundae — the one cell where gold (ira ROT 3) exceeds raw (1).

None of it moves a dominant-class verdict.

## Reproduce

```sh
# Canonical (gold, Σfrequency) — per emonym × class
for e in miedo tristeza amor alegría ira; do
  awk -F'\t' 'NR>1{s[$2]+=$12} END{for(c in s) printf "%-24s %d\n",c,s[c]}' \
    "data/derived/gold-$e.tsv"
done
# Cross-check (raw citations.tsv, frequency col 14, class-wide exclusions)
awk -F'\t' 'NR>1 && !($2=="Res Planae"&&$6=="nivel de") \
  && !($2=="Res Rotundae"&&$6=="círculo de") {s[$3"\t"$2]+=$14} \
  END{for(k in s) print k"\t"s[k]}' data/citations.tsv
```
