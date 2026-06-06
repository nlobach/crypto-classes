# Experiment — prototype verification

A psycholinguistic complement to the corpus study. Native speakers of various
Spanish national varieties (идиомы) categorise everyday items into the eight
conceptual classes by physical attribute (shape, flexibility, function), via
**directed** and **free** association tasks. The study probes the **prototype
structure**, regional vocabulary variants, and metaphorical extensions within
the speakers' **naïve picture of the world** (наивная картина мира).

**Purpose (this stage): prototype verification.** For each conceptual class,
which everyday item do Spanish speakers actually produce as the prototype, and
does it **coincide with the canonical эталон** established for the cryptoclass
framework by Boriskina (2011), Golikova (2018, *Res Planae*) and Zadobrivskaya
(2019, *Res Continens*) — the inventory Donina (2016) applied cross-variant?

The canonical baseline is [`prototypes.tsv`](prototypes.tsv). The cryptoclass
theory behind it: [`../../notes/theory-boriskina.md`](../../notes/theory-boriskina.md)
(§ prototype / naïve picture) and [`../../notes/glossary.md`](../../notes/glossary.md).
Conclusions are drawn from the Spanish experimental data; the four dissertations
supply the baseline to compare against, not a benchmark that constrains it.

## Canonical prototypes (verification baseline)

| Cryptoclass | Feature (es) | Canonical prototype (es) | Source |
|---|---|---|---|
| Res Liquidae | líquido, que fluye | *agua* | Boriskina 2011 |
| Res Filiformes | filiforme, flexible | *hilo* | Boriskina 2011 |
| Res Rotundae | redondo | *pelota* | Boriskina 2011 |
| Res Longae Penetrantes | largo y penetrante | *lanza* | Boriskina 2011 |
| Res Acutae | agudo, punzante | *aguja* | Boriskina 2011 |
| Res Parvae | pequeño y asible | *piedra* | Boriskina 2011 |
| Res Planae | plano, liso | *superficie plana* | Golikova 2018 |
| Res Continens | recipiente, que contiene | *recipiente* | Zadobrivskaya 2019 |

## Files

| File | Contents | Status |
|---|---|---|
| `prototypes.tsv` | the canonical baseline above — fixed reference | ✅ ready |
| `prompts.tsv` | the cues actually shown to participants (per task × class) | ⏳ from your design |
| `participants.tsv` | one row per informant (id, идиом, country, region, age, sex…) | ⏳ schema below |
| `responses.tsv` | one row per item a participant named | ⏳ schema below |

## Proposed response schema (to be confirmed against your data)

Normalised, so the same data serves both tasks and the per-variety analysis:

- **participants.tsv** — `participant_id · idiom · country · region · age · sex · notes`
  (`idiom` = the variety code, aligned with the project's 21 ISO codes)
- **prompts.tsv** — `prompt_id · task · cryptoclass · feature_es · prompt_text_es`
  (`task` ∈ {`directed`, `free`})
- **responses.tsv** — `response_id · participant_id · prompt_id · rank · item_es · item_normalized · notes`
  (`rank` = order of mention, for the salience / prototypicality measure)

## Analysis plan

Per `(cryptoclass × idiom)`: take the modal / most cognitively-salient item
(frequency + order-of-mention, cf. Sutrop's S-index) as the **elicited
prototype**, then:

1. **Coincidence** — does the elicited prototype equal the canonical эталон?
   (per class, pooled and per идиом)
2. **Regional variants** — which items vary by идиом (e.g. *piedra* vs *guijarro*
   vs *roca* for Res Parvae).
3. **Metaphorical extensions** — emotion/abstract terms volunteered for a
   physical-object cue, to compare against the corpus metaphoronym findings.

Feeds a Russian write-up section in the manuscript (the experimental validation
of the inherited prototype inventory).

## Next step

Hand over the raw data in whatever form you have it (TSV, xlsx, survey export,
or pasted text). I'll map it onto the schema above — adjusting the columns to
fit what you actually collected — and load it into `responses.tsv` /
`participants.tsv`.
