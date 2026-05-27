# Consolidated citation table — schema

The `data/` directory is the single source of truth for the cryptoclass
profile of Spanish emonyms. Three flat TSV tables replace the eight `.xlsx`
files now kept under `data/legacy-xlsx/`, which are treated as read-only
historical sources (per `CLAUDE.md`).

The shape is **long-form**: one row per citation. This matches the natural
grain of the data, eliminates the per-file schema drift in the legacy `.xlsx`s,
and makes the `(emonym × classifier × variant)` queries that drive the
collection pipeline (`ROADMAP.md`) a single `GROUP BY`.

## Files

| File | Grain | Grows |
|---|---|---|
| `cryptoclasses.tsv` | one row per cryptoclass | no (8 rows) |
| `classifiers.tsv` | one row per (cryptoclass, construction-type) seed | rarely |
| `citations.tsv` | one row per citation | yes |

TSV (not CSV) — Spanish citations contain commas freely; tabs do not appear in
running prose, so no quoting is needed. UTF-8, LF line endings, diacritics
preserved verbatim. Empty cells are the empty string (not `NULL`, not `—`).

## `citations.tsv`

| # | column | type / vocab | notes |
|---|---|---|---|
| 1 | `id` | slug | `{class3}-{emonym}-{cc}-{nnnn}`; e.g. `liq-amor-ar-0017` |
| 2 | `cryptoclass` | one of 8, see `cryptoclasses.tsv` | full Latin name, e.g. `Res Liquidae` |
| 3 | `emonym` | `miedo` / `tristeza` / `ira` / `amor` / `alegría` | lowercase, with diacritics |
| 4 | `country` | ISO 3166-1 alpha-2 | one of the 21 in `CLAUDE.md` |
| 5 | `construction_type` | controlled vocab, see below | EN slug, never translated per row |
| 6 | `classifier_lemma` | lemma form | e.g. `tapar`, `derramar`, `nivel de`, `punzante` |
| 7 | `citation_es` | text | verbatim Spanish; embedded newlines flattened to spaces |
| 8 | `citation_ru` | text, optional | Russian translation (LIQUIDAE `tristeza`/`amor`/`ira` only, currently) |
| 9 | `disputed` | `t` / `f` | replaces the legacy `СПОРНЫЕ` column |
| 10 | `source_file` | filename | provenance, e.g. `RES LIQUIDAE.xlsx` |
| 11 | `source_sheet` | sheet name | provenance, e.g. `amor` |
| 12 | `source_locator` | `A1` cell ref or `row=15` | provenance into the legacy sheet |
| 13 | `notes` | text, optional | anything that doesn't fit above |

### Construction-type controlled vocab

| slug | RU (legacy term) | gloss / shape | example |
|---|---|---|---|
| `verbal-subject-intransitive` | субъектная интранзитивная | emonym is the unaccusative subject | *el miedo fluye* |
| `verbal-subject-transitive` | субъектная транзитивная | emonym is the subject of a transitive verb | *el miedo inunda a Mara* |
| `verbal-objective` | объектная (транзитивная) | emonym is the direct object | *tapar el miedo* |
| `verbal-instrumental` | инструментальная | emonym is oblique cause/means | *inundado por el miedo* |
| `verbal-locative-state` | локативная (внутри) | being inside the emonym | *vivir en el miedo* |
| `verbal-locative-into` | помещение (внутри) | motion into the emonym | *caer en el miedo* |
| `verbal-locative-out` | извлечение | motion out of the emonym | *sacar a alguien de el miedo* |
| `attributive` | атрибутивная | emonym modified by a class adjective | *miedo punzante* |
| `predicative` | предикативная | predicative use of class adjective | *el recipiente está lleno de miedo* |
| `substantive` | субстантивная | nominal classifier of emonym | *gota de miedo*, *nivel de miedo* |
| `idiomatic` | идиоматическая | frozen idiom carrying the classifier | *a punta de miedo* |
| `disputed` | спорные | parked, unresolved type | the legacy `СПОРНЫЕ` column |

The three `verbal-locative-*` slugs split what the legacy headers smushed
together; *Res Continens* needs the distinction (state vs. directional motion
into vs. out of) for any meaningful analysis.

If a future citation doesn't fit any slug, park it as `disputed` and add a
`notes` reason rather than inventing a new slug ad hoc — extensions go through
`classifiers.tsv` first.

## Mapping from the legacy `.xlsx` files

### Wide-format files (7 of 8)

Files: `Res Acutae`, `Res Filiformes`, `Res Parvae`, `Res Penentrantes` *(sic)*,
`Res Planae`, `Res Rotundae`, `RES CONTINENS`.

Per file: one sheet per emonym (5 sheets: `miedo`, `amor`, `ira`, `tristeza`,
`alegría` — case varies). Inside a sheet:

- Row 0 = header. Column A is usually `идиом/конструкция` (or a corrupted
  variant: `Z`, `\\`, `AMOR`, `alegría`, `Столбец 1`, `Idioma`); columns B–N
  are construction-type classifier headers in mostly-Russian, sometimes with
  Spanish seed lemmas inline.
- Rows 1–21 = the 21 ISO country codes, in this order: AR, BO, CL, CO, CR,
  CU, DO, EC, ES, GT, HN, MX, NI, PA, PE, PR, PY, SV, UY, VE, US.
- A cell at `(country, classifier-col)` holds a numbered list of citation
  examples mashed together with literal `\n`s. Numbering styles vary
  (`1`, `1)`, `1.`, none at all).

**Extraction rule**: for each non-empty cell, split on `\n`, strip leading
numbering markers (`/^\s*\d+[\.\)]?\s*/`), drop empty fragments, and emit one
`citations.tsv` row per fragment. Set `construction_type` from the column
header's mapping in `classifiers.tsv`. Set `classifier_lemma` to the specific
verb/adjective actually present in the fragment when identifiable; otherwise
fall back to the seed lemmas listed in the column header.

The disputed/`СПОРНЫЕ` column maps to `disputed=t` with `construction_type`
left as best-guess from the surrounding fragment (or `disputed` if truly
unclassifiable).

### Long-format file (RES LIQUIDAE.xlsx)

Per-emonym long sheets are the real data:

| sheet | content | shape | maps to |
|---|---|---|---|
| `miedo ejemplos` | 105 miedo citations | `[country, lemma, example, type]` | direct, no `citation_ru` |
| `ira` | 55 ira citations | `[country, lemma, example, ru-translation, type]` | direct, with `citation_ru` |
| `tristeza` | 185 tristeza citations | `[country, lemma, example, ru-translation, type]` | direct, with `citation_ru` |
| `amor` | 749 amor citations | `[country, lemma, example, ru-translation, type, ...]` | direct, with `citation_ru` (cols F–I are aggregate noise — ignore) |

The first column is labelled `Идиом` ("idiom") but its values are ISO country
codes — treat as `country`. Construction-type values are already canonical
Russian terms; map per the table above.

Aggregate sheets (`miedo consturcciones números` *(sic)*, `miedo признаковые
слова`, `Лист5`, `Лист6`, `Лист7`, `Лист11`, `Лист12`, `Лист13`, `amor
números`) are **not extracted** — they are GROUP BY views of the long sheets
and can be regenerated from `citations.tsv` at any time.

## Things deliberately discarded

- Cell-internal numbering (`1)`, `2)`, …) — re-derivable per-`(country,
  classifier)` grouping if needed.
- The legacy `\n`-joined cell format — flat rows are the point.
- Header typos (`Penentrantes`, `Z`, `consturcciones`) — preserved only in
  `source_file` / `source_sheet` for provenance; the new vocabulary is clean.
- The header column "idiom vs. construction" parked in column A of the
  wide-format files — rarely used in practice, and where used, goes into
  `notes` per row.
- Aggregate count sheets from LIQUIDAE — `SELECT country, classifier_lemma,
  COUNT(*) FROM citations GROUP BY …`.

## Working with the table

```sh
# 1. Sanity check: rows per (cryptoclass, emonym)
awk -F'\t' 'NR>1{print $2"\t"$3}' data/citations.tsv | sort | uniq -c | sort -rn

# 2. Cell density per variant for a given (class, emonym)
awk -F'\t' '$2=="Res Liquidae" && $3=="amor" {print $4}' data/citations.tsv \
    | sort | uniq -c | sort -rn

# 3. Load into SQLite for richer queries
sqlite3 :memory: <<'SQL'
.mode tabs
.import data/citations.tsv citations
SELECT country, COUNT(*) FROM citations
WHERE cryptoclass='Res Liquidae' AND emonym='amor'
GROUP BY country ORDER BY 2 DESC;
SQL
```

## Extraction status

- **All 8 cryptoclasses extracted**: `pipeline/extract_wide.js` reads the
  wide-format xlsx files in `data/legacy-xlsx/` and writes **2,906 citation
  rows** to `citations.tsv`. Re-run the script anytime to regenerate; it
  overwrites the file. Per-class row counts: Res Liquidae 1,251 · Res Continens
  499 · Res Filiformes 341 · Res Planae 252 · Res Longae Penetrantes 194 ·
  Res Parvae 170 · Res Rotundae 134 · Res Acutae 65.
- **Res Liquidae source**: the original long-form `RES LIQUIDAE.xlsx` is
  excluded; the cleaned wide-form counterpart `RES LIQUIDAE COR.xlsx` is the
  one extracted. The aggregate sheets inside the original (`Лист6`, `Лист7`,
  `Лист11`, `Лист12`, `Лист13`, `amor números`, etc.) are GROUP BY views and
  are not migrated.
- **Pipeline-collected citations**: ROADMAP Phase 1+ will append corpus-sifted
  rows to the same table; the manually-collected gold-standard subset should
  be marked via the `notes` column (`gold` or similar) so it can be filtered
  out during evaluation.
