# `notes/` — orientation and authority

These notes are **working extractions** from the two source dissertations in
`../references/`. They exist to make the framework navigable in English
without having to page through ~900 pages of Russian theoretical prose every
session.

## Source of truth

The **ultimate source of truth** for every theoretical, methodological,
numerical, or citational claim in this project is the original PDF in
`../references/`:

- `диссертация Борискиной О.О.pdf` — Boriskina O.O. (2011), 363 pp.
  Theoretical framework: cryptoclass, classifier, collostruction, ИРа,
  ПоКА, the six English cryptoclasses, the five types of metaphoronyms.
- `Диссертация_Донина_О.В..pdf` — Donina O.V. (2016), 533 pp.
  Cross-variant methodology: areal layer, corpus coefficients, Pearson `r`,
  Kendall's `W`, Varimax, k-means, Kohonen SOM; the 23-emonym × 20-variant
  empirical study of English.
- `donina-appendices/Приложение 1 для диссера.doc`, `donina-appendices/Приложение  2.doc`,
  `donina-appendices/Приложение 3.doc` — Donina's appendices.

**If a `.md` file in this directory disagrees with the PDF, the PDF
wins.** Update the note to match the PDF; do not adjust the PDF or work
around it.

## When to consult the PDFs

Reach for the source PDF whenever:

- A claim has a specific page reference (`p. 73`, `§1.10`, `рис. 9`,
  *Tabl. 3*) and you are about to rely on it.
- A Russian quotation is being repeated verbatim in scholarly writing.
- A numeric value (ПоКА %, Pearson `r`, factor loading, СИ count) is
  being repeated in scholarly writing.
- A list (the 23 emonyms, the 20 variants, the classifier inventory for
  a class, the defended theses) is being repeated.
- You hit any wording or framing that *feels* like it might be a
  paraphrase — verify before citing.
- Two notes files disagree, or a notes file is internally inconsistent.

Past auditing of these notes has surfaced fabricated numeric values,
mislabelled indices (ПА vs ПоКА), off-by-one page references, and
paraphrases presented as if they were source claims. None of that is
diagnostic of the framework itself — it is diagnostic of the gap between
a working extraction and the source it was extracted from. The gap
closes only by consulting the source.

## Practical tip

For Russian extraction, `pdftotext -layout` produces a usable plain-text
rendering:

```
pdftotext -layout -f <first_page> -l <last_page> \
  "references/диссертация Борискиной О.О.pdf" /tmp/excerpt.txt
```

Page numbers in the `-f`/`-l` flags match the PDF page index, which in
both dissertations also matches the **printed page number** in the
source (no front-matter offset to compensate for).

## Files in this directory

| File | Source | Coverage |
|---|---|---|
| `theory-boriskina.md` | Boriskina 2011 | Chapter 1 in full; Chapter 3 selectively (portrait, four principles, five types of metaphoronyms, aggregate state of emotions §3.5) |
| `methodology-donina.md` | Donina 2016 | §§1.4–1.10 (methodology); §§2.2–2.3 selectively; per-emonym extractions split out into `donina-emonyms/` |
| `glossary.md` | both | Trilingual RU / EN / ES terminology |
| `corpora.md` | project decision record | Which Spanish corpora are used, country tagging, licensing, corpus-coefficient requirement |
| `cryptoclasses/` | per-class working notes | One file per class (eight total) — see `cryptoclasses/README.md` |
| `donina-emonyms/` | per-emonym extractions from Donina §§2.1.* | One file per English emonym Donina analyses — see `donina-emonyms/README.md`. Each is the cross-linguistic comparator for the corresponding Spanish emonym. |

The earlier planning notes file (`plan-from-scratch.md`) has moved to
`../archive/` — it is still referenced from the extractions as historical
context, but is no longer the live plan; current planning lives in
`../ROADMAP.md`.
