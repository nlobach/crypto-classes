# crypto-classes — Spanish

A study of **cryptoclasses** — hidden noun categories detectable only by the
company a word keeps — applied to Spanish emotion nouns across the 21
national variants of the language. Builds on Boriskina (2011) for the
framework and Donina (2016) for the cross-variant method.

## Where to start

| If you want… | Read |
|---|---|
| The basic idea, no linguistics background needed | [`OVERVIEW.md`](OVERVIEW.md) |
| Stable orientation: scope, conventions, repo layout | [`CLAUDE.md`](CLAUDE.md) |
| What's planned, in phases | [`ROADMAP.md`](ROADMAP.md) |
| Glossary (RU / EN / ES) | [`notes/glossary.md`](notes/glossary.md) |
| Theory (Boriskina 2011) | [`notes/theory-boriskina.md`](notes/theory-boriskina.md) |
| Method (Donina 2016) | [`notes/methodology-donina.md`](notes/methodology-donina.md) |
| The citation data and its schema | [`data/SCHEMA.md`](data/SCHEMA.md) |

## Repository layout

```
crypto-classes/
├── references/   external scholarly sources (PDFs, DOCs) — read-only
├── data/         the canonical citation tables (TSV) + legacy xlsx
├── notes/        English working extractions from the source dissertations
├── pipeline/     code that produces / transforms data/
├── analysis/     ad-hoc queries against data/
├── manuscript/   the eventual Spanish-language scholarly output
└── archive/      dead drafts and planning history
```

Full breakdown in [`CLAUDE.md`](CLAUDE.md#repository-structure).

## Regenerating the citation table

```
node pipeline/extract_wide.js
```

Reads the wide-format `.xlsx` files in `data/legacy-xlsx/` (one per
cryptoclass — 8 in total; the original long-form `RES LIQUIDAE.xlsx` is
retained for provenance but skipped in favour of the wide-form
`RES LIQUIDAE COR.xlsx`) and overwrites `data/citations.tsv`. The xlsx files
are the original manually-collected working data; the TSV is the long-form
canonical form derived from them.

## Status

Manually-collected data, extracted into `data/citations.tsv`, covers 5 emonyms
(*miedo, tristeza, amor, alegría, ira*) across the 21 variants, ~2,900
citations — about 2–5× short of what a Donina-equivalent study needs. Closing
that gap via an automated corpus-sifting pipeline is the next major phase (see
`ROADMAP.md`).

## Working language

Notes are in English; canonical Russian terms are preserved in the glossary.
The intended scholarly output is in Spanish. Cryptoclass names are kept in
Latin (*Res Liquidae*, *Res Acutae*, …) — neutral across all three
languages and never translated.
