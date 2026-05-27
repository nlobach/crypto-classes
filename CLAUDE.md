# Crypto-classes — Spanish

## Purpose

Apply the **cryptoclass** framework (Boriskina 2011) and the cross-variant
**emonym** method (Donina 2016) to **Spanish**: build a cryptoclass profile of
Spanish emotion nouns across the 21 national variants of the language, with the
cryptoclass inventory extended where Spanish requires it.

The intended scholarly output is in **Spanish**. Working notes in this repo are
in **English**, with canonical Russian terms preserved in the glossary so the
source dissertations remain quotable.

## Source references

Located in `references/`. Untouched; treat as read-only sources.

- `диссертация Борискиной О.О.pdf` — Boriskina O.O. (2011), *Theory,
  methodology and experience of cognising covert categoriality of language*
  (doctoral, Voronezh State University). Theoretical foundation: defines the
  cryptoclass, classifier, collostruction, metaphoronym, and the indices IDC /
  CAC. Six cryptoclasses for English: Res Liquidae, Res Filiformes,
  Res Rotundae, Res Longae Penetrantes, Res Acutae, Res Parvae.
- `Диссертация_Донина_О.В..pdf` — Donina O.V. (2016), *Covert categorisation
  of emotions across language variants* (kandidat, under Boriskina). Methodological
  model: applies cryptoclass analysis to 23 English emonyms across areal
  varieties of English. This project is the Spanish counterpart.
- `Приложение 1 для диссера.doc`, `Приложение  2.doc`, `Приложение 3.doc` —
  Donina's appendices (summary tables, basic-emotions table, decision-tree
  rules, cryptoclass chains). Read on demand; not yet extracted.
- `Res *.xlsx`, `RES *.xlsx` — working data files, one per cryptoclass (see
  below).

## Repository structure

```
crypto-classes/
├── CLAUDE.md          # this file — stable orientation
├── ROADMAP.md         # phased plan, evolves over time
├── references/        # source PDFs, DOCs, and working XLSXs (read-only sources)
└── notes/             # on-demand extracted content (to be created — see ROADMAP)
    ├── glossary.md
    ├── theory-boriskina.md
    ├── methodology-donina.md
    ├── cryptoclasses/        # one file per class
    ├── xlsx-schema.md
    └── corpora.md
```

`CLAUDE.md` is intentionally short — it is loaded into every Claude conversation.
Heavier extracted content lives in `notes/` and is read only when relevant.

## Working data: the `.xlsx` files

Eight files in `references/`, one per cryptoclass. Boriskina's original six plus
two added for Spanish:

| File | Cryptoclass | Prototype |
|---|---|---|
| `RES LIQUIDAE.xlsx` | Res Liquidae | water (liquid) |
| `Res Filiformes.xlsx` | Res Filiformes | thread |
| `Res Rotundae.xlsx` | Res Rotundae | ball (round) |
| `Res Penentrantes.xlsx` *(sic)* | Res Longae Penetrantes | spear (penetrating) |
| `Res Acutae.xlsx` | Res Acutae | needle (sharp) |
| `Res Parvae.xlsx` | Res Parvae | pebble (small, grasped, thrown) |
| `RES CONTINENS.xlsx` | Res Continens | container — **Spanish-specific** |
| `Res Planae.xlsx` | Res Planae | flat surface — **Spanish-specific** |

Shared internal schema (detail to live in `notes/xlsx-schema.md`):

- **Columns** = construction types (verbal subject-transitive,
  subject-intransitive, objective, instrumental, attributive, predicative,
  substantive) + a `СПОРНЫЕ` column for disputed cases.
- **Rows** = 21 Spanish-variant country codes: AR, BO, CL, CO, CR, CU, DO, EC,
  ES, GT, HN, MX, NI, PA, PE, PR, PY, SV, UY, VE, US.
- **Cells** = numbered corpus citations of an emonym used with that classifier
  in that variant, with running `TOTAL N` lines.

Known inconsistencies to preserve as-is until the user decides: filename typo
`Penentrantes`, mixed Russian/Spanish column headers, varying presence of the
`СПОРНЫЕ` column. `RES LIQUIDAE.xlsx` uses a different (long-form) schema than
the other seven — see `notes/xlsx-schema.md`.

## Data status

As of project start: ~**737 citations** across all 8 cryptoclasses combined, in
~**530 filled cells**. Distribution is uneven:

- **Emonyms in scope**: 4 (*miedo, tristeza, amor, alegría*) vs. Donina's 23 for
  English. ≈ 17 % of her breadth.
- **Strong variants**: AR, ES, MX, CO, CL, US (variants with large accessible
  corpora). **Weak / absent**: GT, HN, SV, NI, CR, PR, PY, EC. Central American
  coverage is essentially missing.
- **Cell density**: median 1–2 examples per filled cell — too thin to compute
  IDC / CAC reliably *per variant*.

**Order-of-magnitude gap to a Donina-equivalent Spanish study**: roughly
5 000–15 000 citations across 15–25 emonyms. Current data is ~5–10× short of
the low end of that range.

**Strategy** to close the gap (see `ROADMAP.md`): automated sifting of Spanish
corpora (CORPES XXI, Corpus del Español, esTenTen / Sketch Engine, …) per
`(emonym × classifier × variant)` query, followed by LLM-assisted filtering
and construction-type tagging. Existing manually-collected data becomes the
gold-standard validation set for the pipeline.

What is already strong despite low citation counts: the 8-class **cryptoclass
inventory** (including the two Spanish additions *Res Continens* and
*Res Planae*) and the **Spanish classifier seeds** captured in each xlsx's
column headers. Those are the methodological backbone; further work is
predominantly collection volume, not framework design.

## Working conventions

- **Notes language**: English. Canonical Russian terms in parens on first
  mention. Spanish data verbatim, diacritics preserved.
- **Cryptoclass names**: Latin (e.g. *Res Acutae*) — neutral across all three
  languages; never translated.
- **Terminology**: see `notes/glossary.md` (trilingual RU/EN/ES; some Spanish
  equivalents are provisional and marked as such).
- **Country codes**: ISO 3166-1 alpha-2; the 21-code list above is canonical
  for this project.
- **Emonyms in scope (current)**: *miedo*, *tristeza*, *amor*, *alegría*.
  Extend per ROADMAP.

## Where to find what

| Question | Look in |
|---|---|
| What is a cryptoclass / classifier / collostruction? | `notes/theory-boriskina.md` |
| How is cross-variant analysis done? | `notes/methodology-donina.md` |
| Spanish/English/Russian term equivalents | `notes/glossary.md` |
| Prototype + classifier seeds for a given class | `notes/cryptoclasses/<class>.md` |
| Exact format of the `.xlsx` files | `notes/xlsx-schema.md` |
| Which Spanish corpora are used | `notes/corpora.md` |
| What to do next | `ROADMAP.md` |

The `notes/` files do not yet exist; creating them is Phase 0 of the roadmap.
