# Methodology — Donina (2016)

Deep extraction from Olga Valeryevna Donina, *Скрытая категоризация эмоций
в вариантах языка* ("Covert categorisation of emotions across language
variants"), kandidat dissertation in linguistic theory (10.02.19),
Voronezh State University, 2016. 533 pp. Scientific advisor: O. O.
Boriskina.

This is the methodological mirror to `notes/theory-boriskina.md`. Where
Boriskina built the cryptoclass framework, Donina extended it to **areal
variants of a pluricentric language** — and her algorithm is what this
project (Spanish across 21 ISO variants) is replicating, with extensions.

This file covers Chapter 1 §§1.4–1.10 (the methodology and its theoretical
context), gives the algorithm in full, transcribes the quantitative
formulas Donina actually uses (Pearson, Kendall's W, Varimax, k-means,
Kohonen SOM), and closes with a section-by-section mapping of how each
of Donina's choices transfers, modifies, or breaks for the Spanish
project. Chapter 2 (the per-emonym empirical chapters, pp. 121–333) is
not extracted in detail; pointers to it appear in §11 below.

For terminology, this file uses the conventions in `notes/glossary.md`.
For the underlying theory (cryptoclass, classifier, IDC, CAC,
metaphoronym), refer to `notes/theory-boriskina.md` — Donina inherits
the framework wholesale and modifies only the data-stratification and
statistics layers.

---

## 0 — Why this dissertation, why for Spanish

Donina turned the cryptoclass framework from a **monolingual analytical
tool** into a **comparative one**. Boriskina's question was: *"how does
the English language quietly classify its nouns?"*. Donina's was: *"is
this classification the same across the 20 national varieties of
English?"*. Her empirical answer was a qualified **yes** — cryptoclass
preferences are conserved across variants, but their *relative weights*
shift geographically.

For Spanish this is the exact research question, translated to the
hispanofonía. The instruments transfer (Pearson, Kendall's W, factor
analysis, SOM clustering — all language-neutral); the corpora change
(Davies's *Corpus del Español Web/Dialects* and the Spanish *NOW* in place
of *GloWbE* + *NOW*); the variant inventory grows from 20 to 21; the
emonym set will be ~15–25 vs. her 23; and the cryptoclass inventory
grows from 6 to 8 (with Res Continens and Res Planae added).

Donina's six defended theses (*положения, выносимые на защиту*, pp.
9–10 of the dissertation):

1. **Variant similarity correlates with chronotope.** Pearson `r` between
   geographically close variants is *higher* than between geographically
   distant ones — geographic factor outweighs the chronological one.
2. **Inner-circle variants are tightly conserved.** Pearson `r ≥ 0.92`
   among the inner circle (British, Irish, American, Canadian,
   Australian, NZ). Reason: long-established language contact.
3. **Outer-circle variants are looser.** Pearson `r = 0.74–0.80` across
   the outer (Asian + African) circle — shorter contact history, less
   "settled" usage.
4. **Some "variants" may be better described as separate languages.** The
   African and Asian "Englishes" still in formation may be more
   accurately treated as *separate languages with high genetic
   proximity to English* rather than as dialects.
5. **Cryptoclass ranking is universal across variants.** All 20 variants
   rank the cryptoclasses in roughly the same order by overall ПоКА:
   `Res Parvae > Res Liquidae > Res Acutae > Res Filiformes >
   Res Longae Penetrantes > Res Rotundae`. *Res Parvae*
   (graspable / hand-sized) wins because emotions are most often
   anthropomorphically "handled" — antropocentrism of language.
6. **Categorisation forms a cognitive continuum; Res Parvae has
   metaphorical priority** for naming emonyms across the anglosphere —
   driven by the anthropocentrism of language. Res Liquidae is second
   (emotions "fill the human container"), Res Acutae is the priority
   class for *distress*, *anxiety*, *relief*.

The k-means / Kohonen SOM clustering result — that the 20 variants fall
into six geographic regions (American, Australasian, European, Asian,
African, Caribbean) — is presented in §1.10 of the methods rather than
in the defended-theses list. It is the empirical instrument that
supports theses 1–4, not itself a defended thesis.

The hypothesis to be tested for Spanish, mirroring Donina's central
claim: **geographic proximity among Spanish variants correlates with
cryptoclass similarity**. With one substantive difference from English:
Spanish lacks the inner/outer/expanding circle structure (Kachru), since
all 21 ISO-listed variants are nationally codified. The hypothesis may
therefore play out *between dialectological zones* (Caribbean / Andean /
Rioplatense / etc.) rather than between Kachru-type circles. See §13.

---

## 1 — Donina's inheritance from Boriskina

Verbatim from Donina's introduction (p. 6):

> *Выявленные на типологической основе именные криптоклассы английского
> языка описаны в работе [Борискина 2011].*

She inherits, without modification:

- The definition of cryptoclass (`notes/glossary.md`, §1 entry
  [[cryptoclass]]; verbatim repeat in Donina p. 345).
- The diagnostic-collostruction method (`notes/theory-boriskina.md` §7).
- The six English cryptoclasses (Res Liquidae, Res Filiformes,
  Res Rotundae, Res Longae Penetrantes, Res Acutae, Res Parvae).
- The quantitative apparatus — [[ira]] (IDC) and [[poka]] (CAC).
  Donina's principal index is ПоКА, normalised against other
  metaphoronyms of the same class. ИРа appears less centrally but is
  computed.
- The metaphoronym concept (`notes/theory-boriskina.md` §5.2): an
  abstract noun joining a class by analogy with the prototype.
- The cryptoclass portrait as the unit of comparison
  (`notes/theory-boriskina.md` §10).

What Donina **adds**:

1. **Areal variation layer.** Every cell of the analysis is parameterised
   by *(emonym × cryptoclass × variant)*, not just *(emonym ×
   cryptoclass)*. This **triples** the data structure's dimensionality.
2. **Corpus coefficients.** A normalisation step that adjusts raw ПоКА
   values for the differing representation of each variant in each
   corpus (see §6 below).
3. **Cross-variant statistics.** Pearson `r` between every pair of
   variants on their ПоКА vectors; Kendall's `W` for global
   concordance; factor analysis (Varimax) to confirm class
   independence; k-means and Kohonen SOM for variant clustering.
4. **Limit to emonyms.** Boriskina worked with ~500 abstract nouns;
   Donina restricts to 23 *emonyms* (names of emotional states). The
   restriction is empirical — only emonyms passed her four-criterion
   selection filter. The terminological choice is also new: Donina
   coined the [[emonym]] term to distinguish the *name* of an emotion
   (a linguistic object) from the *experience* (a psychological one).
5. **Emotional well-being as case study.** §2.3 of her dissertation
   uses the cryptoclass profile of *happiness*, *joy*, *love*,
   *pleasure*, *interest* to argue for cognitive-cultural differences
   in how anglophone communities verbalise positive emotion.

What Donina **does not** change:

- The Latin class names.
- Boriskina's six classes (no inventory extension — that is
  this project's contribution).
- The collostruction notation `[X Y]`.
- The IDC / CAC formulas.

---

## 2 — Object, subject, hypothesis (Donina's introduction)

Verbatim from p. 7:

> **Объектом исследования** является лексико-синтаксическая
> метафорическая сочетаемость 23-х имён эмоционального состояния и
> чувственного переживания английского языка, для краткости называемых
> в работе **эмонимами**.

**Object**: the lexico-syntactic metaphorical combinability of 23
English emonyms.

> **В качестве предмета исследования** в работе выступает криптоклассная
> представленность рассматриваемых эмонимов в 20-ти национальных
> вариантах английского языка.

**Subject**: the *cryptoclass-representation* of those emonyms across
the 20 national variants of English.

> **Цель исследования** заключается в выявлении особенностей языковой
> категоризации эмоциональных состояний по идиомам при изучении
> механизмов описания ареальной вариативности на основе сопоставления
> криптоклассной специфики эмонимов в идиомах.

**Goal**: identify the features of language categorisation of emotional
states across varieties through cryptoclass comparison.

> **Гипотеза исследования** строится на предположении о том, что для
> описания семантической близости ареальных вариантов языка применим
> метод криптоклассного анализа, с помощью которого можно установить
> связь вариативности языка с хронотопом, выяснив действительно ли
> ареально близкие идиомы демонстрируют больше сходств в скрытой
> категоризации мира по сравнению с географически удаленными.

**Hypothesis**: cryptoclass analysis is applicable to the description
of variant similarity; it can establish a link between linguistic
variation and *chronotope* — i.e. whether areally proximate variants
exhibit greater hidden-categorisation similarity than geographically
distant ones.

### 2.1 — The 11 tasks

The hypothesis is decomposed into 11 tasks (p. 8–9, paraphrased):

1. Study the accumulated literature on nominal classification of
   English and its areal variation.
2. Justify the restriction of the research wordlist (the 23 emonyms).
3. Build the research corpus of word-uses from the 23 emonyms across
   semi-automatic corpus queries.
4. Determine which of the studied emonyms join which of the English
   cryptoclasses, per idiom (variant).
5. Compute the **correlation coefficient between the two source
   corpora** (GloWbE and NOW) — a methodological check that the data
   is representative.
6. **Compute the tightness of association between the 20 variants** on
   the basis of nominal classification of emonyms.
7. Present quantitative data in the form of [[cryptoclass-portrait]]s of
   the emotions; statistical data as **emotion maps**; visualise the
   cognitive continuum.
8. Publish the results to the COEL information system at
   http://www.rgph.vsu.ru/coel/contexts.php.
9. Group the variants into clusters.
10. Identify general regularities in cryptoclass behaviour of emonyms
    across cluster comparisons.
11. Examine the mechanism of describing areal variation in language.

This task list is a direct template for the Spanish project's
ROADMAP. See §13.

### 2.2 — The corpus

The research corpus, formed semi-automatically from queries in GloWbE +
NOW, is **64,702 word-uses** (Donina p. 7). This figure should be kept
in mind: the Spanish project, to reach Donina-equivalent statistical
power per variant, needs a corpus of comparable size. The order of
magnitude — tens of thousands of word-uses — is set by the four
selection criteria (next section).

---

## 3 — The four selection criteria for emonyms

Donina §1.10 (p. 100) is explicit. Starting from "all emotion words in
English," she filters by:

### Criterion 1 — Classification membership

The candidate emonym must appear in at least one published taxonomy of
emotions. Sources Donina references (drawn from her introduction):
Ekman, Izard, Plutchik, Parrot, Lazarus, plus Russian-language work
(Shakhovsky, Fomina, Yu. Apresyan, Babenko, Vinarskaya, Krasavsky).

**For Spanish**: the corresponding taxonomies are the same universalist
canon (Ekman, Plutchik, Parrot, Izard remain canonical) plus
Spanish-specific lists: Pacheco, Rosenberg, the *Diccionario de
emociones* tradition, and RAE-affiliated studies of emotion lexicon.
Per `notes/plan-from-scratch.md` Phase 1.

### Criterion 2 — Dictionary definition

The candidate's definition in *Collins Cobuild English Dictionary for
Advanced Learners* (2010) must contain a marker like *feeling* or
*emotion*. This is a dictionary-mediated semantic filter.

**For Spanish**: the analogous filter is presence in *DLE* (RAE)
definition of one of the markers *emoción*, *sentimiento*, *afecto*,
*estado de ánimo*, *pasión*, *impulso afectivo*. Per
`notes/plan-from-scratch.md` Phase 1, criterion 2.

### Criterion 3 — Frequency

The candidate must be in the **top one or two frequency levels** of
*Collins Cobuild English Dictionary for Advanced Learners* (2010). This
is roughly the top 5 000–10 000 most-frequent words. Operational
purpose: ensure enough corpus hits to compute reliable indices.

**For Spanish**: the analogue is the top tier of *CORPES XXI* frequency
lists or Davies's Spanish frequency dictionary (Davies & Hayward Davies
2018). Per `notes/plan-from-scratch.md` Phase 1, criterion 3.

### Criterion 4 — Critical mass (the binding constraint)

The corpus extraction for the candidate must yield enough citations
that **every variable has ≥ 5 observations** — the Pearson correlation
requirement (Zykova 2008: 44; Eliseeva, Yuzbashev 2002). Without this,
the correlation coefficient cannot be computed reliably across
variants. This is the criterion that does most of the pruning.

### Cascade

Donina applied criteria 1–3 to the canonical taxonomies and Collins
dictionary, retaining a candidate if it satisfied *any two of the three*.
This first cascade yielded **181 candidate emonyms** (p. 100).

She then ran the full corpus extraction for the 181 candidates across 20
variants × 6 cryptoclasses. Criterion 4 (critical mass) filtered the
181 down to **23**.

The numbers are worth quoting because they set expectations for the
Spanish project:

| Stage | Count |
|---|---|
| Initial candidates after criteria 1–3 | 181 |
| Final emonyms after criterion 4 | 23 |
| Word-uses in final research corpus | 64,702 |
| Person-hours on corpus extraction (Stage 3) | 3,400 |
| Corpora used | 2 (GloWbE + NOW) |

The 3,400-hour figure (p. 101 verbatim: *"трудоёмкую работу (3400
чел/час)"*) is the bottleneck. The Spanish project's strategy — LLM-
assisted filtering and tagging calibrated against a manual gold set —
is precisely the modern speed-up of this stage (per `ROADMAP.md`
Phases 2–3 and `notes/plan-from-scratch.md` Phase 4).

### 3.1 — Donina's final 23 emonyms

Verbatim from p. 7:

> *emotion (эмоция), feeling (чувство), hope (надежда), surprise
> (удивление), anger (гнев), passion (страсть), happiness (счастье),
> interest (интерес), fear (страх), joy (радость), grief (горе),
> sympathy (сочувствие), terror (ужас), pleasure (удовольствие), love
> (любовь), pride (гордость), pity (жалость), relief (облегчение),
> concern (участие), distress (страдание), shame (стыд), guilt (вина),
> anxiety (тревога).*

Translated to Spanish (provisional first-pass; final list per the
project's Phase 4 of `ROADMAP.md`):

| Donina (EN) | RU | ES (provisional) |
|---|---|---|
| emotion | эмоция | *emoción* |
| feeling | чувство | *sentimiento* |
| hope | надежда | *esperanza* |
| surprise | удивление | *sorpresa* |
| anger | гнев | *ira* / *enfado* / *enojo* — Spanish-specific cleavage |
| passion | страсть | *pasión* |
| happiness | счастье | *felicidad* |
| interest | интерес | *interés* |
| fear | страх | **miedo** *(already in scope)* |
| joy | радость | **alegría** *(already in scope)* |
| grief | горе | *duelo* / *pena* / *pesar* — multiple Spanish equivalents |
| sympathy | сочувствие | *simpatía* (false friend caveat) / *compasión* |
| terror | ужас | *terror* / *espanto* / *pavor* |
| pleasure | удовольствие | *placer* |
| love | любовь | **amor** *(already in scope)* |
| pride | гордость | *orgullo* |
| pity | жалость | *lástima* / *pena* |
| relief | облегчение | *alivio* |
| concern | участие | *preocupación* |
| distress | страдание | *angustia* / *aflicción* |
| shame | стыд | *vergüenza* |
| guilt | вина | *culpa* |
| anxiety | тревога | *ansiedad* / *desasosiego* |

The Spanish list is not 23 entries: *anger* and *grief* in English each
have 2–3 plausible Spanish counterparts with subtly distinct semantics
that are likely to behave differently in cryptoclass terms. Whether to
treat (e.g.) *ira* vs. *enfado* as separate emonyms or to take one as
canonical is one of the project's central open questions (see
`ROADMAP.md` Phase 4 open questions).

**The project's current emonym set** (per `CLAUDE.md`): 4 emonyms —
*miedo*, *tristeza*, *amor*, *alegría*. This is ~17% of Donina's 23,
and her four selected emotions are: *fear (miedo)*, *love (amor)*,
*joy (alegría)*, and *sadness (tristeza* — interestingly **not in
Donina's 23**; she has *grief*, *distress*, *anxiety* but not a direct
*sadness* equivalent. *Tristeza* in Spanish corresponds most naturally
to *sadness* in English; the project's scope therefore differs subtly
from Donina's in this respect).

---

## 4 — The 20 variants and how they were chosen

Donina §1.6 (p. 44) on areal variation; §1.10 (p. 101) on the specific
list. The 20 national variants of English used:

| Code | Variant | Kachru circle |
|---|---|---|
| GB | British English | inner |
| IE | Hiberno-English / Irish English | inner |
| US | American English | inner |
| CA | Canadian English | inner |
| AU | Australian English | inner |
| NZ | New Zealand English | inner |
| JM | Jamaican English | outer (Caribbean) |
| IN | Indian English | outer (South Asia) |
| PK | Pakistani English | outer (South Asia) |
| PH | Philippine English | outer (Asia) |
| SG | Singapore English | outer (Asia) |
| LK | Sri Lankan English | outer (Asia) |
| HK | Hong Kong English | outer (Asia) |
| MY | Malaysian English | outer (Asia) |
| BD | Bangladeshi English | outer (Asia) |
| KE | Kenyan English | outer (Africa) |
| ZA | South African English | outer (Africa) |
| NG | Nigerian English | outer (Africa) |
| GH | Ghanaian English | outer (Africa) |
| TZ | Tanzanian English | outer (Africa) |

The list **excludes** US-only-second-language varieties (e.g. Chicano
English, AAVE), continental European Englishes (German English, Dutch
English), and expanding-circle varieties (Japanese-, Korean-, or
Russian-speaker English). Selection criterion: the variant must have
its own national codification AND be present in both GloWbE and NOW
with non-trivial volume.

### 4.1 — Mapping to the Spanish 21 variants

The Spanish project uses 21 ISO codes (CLAUDE.md, canonical):

```
Inner-circle-equivalents (Spanish-norm-providing, codified):
  ES (España, Peninsular)

Outer-Latin-American-block:
  AR Argentina         GT Guatemala          PE Perú
  BO Bolivia           HN Honduras           PR Puerto Rico
  CL Chile             MX México             PY Paraguay
  CO Colombia          NI Nicaragua          SV El Salvador
  CR Costa Rica        PA Panamá             UY Uruguay
  CU Cuba              US United States      VE Venezuela
  DO República Dominicana
  EC Ecuador
```

Note **none of these maps cleanly onto Kachru's inner/outer/expanding
typology**. All 21 are norm-providing in their own jurisdictions, all
coordinate through ASALE (Asociación de Academias de la Lengua
Española). The proper Spanish framing is **dialectological zones**, not
Kachru circles. The expected zones (per `notes/plan-from-scratch.md`
Phase 8):

| Zone | ISO codes |
|---|---|
| Peninsular | ES |
| Caribbean | CU, DO, PR, plus VE coast |
| Mexican / Central American | MX, GT, HN, SV, NI, CR, PA |
| Andean | BO, PE, EC, parts of CO |
| Rioplatense | AR, UY, PY |
| Chilean | CL |
| US Spanish | US (status open — see §13) |

If Donina's central finding (geographic proximity > chronology) holds
for Spanish, the k-means / Kohonen clustering of the 21 variants
should recover these seven zones. If not — that itself is a publishable
finding.

### 4.2 — The US Spanish question

Donina did not face this exact question: US English is an inner-circle
variant with no diaspora ambiguity. US Spanish, by contrast, is
contested terrain: is it a full variant (the project's working
assumption per CLAUDE.md), a contact variety, or a diaspora variety?

Per `ROADMAP.md` "Open questions," this is to be decided before Phase 6.
Operationally, the choice affects:

- whether US Spanish citations are kept in `data/citations.tsv` (yes,
  for now);
- whether US is included in the 21×21 Pearson matrix (yes for the
  exploratory run; possibly excluded for the published statistic);
- whether US is allowed to form its own k-means cluster, or is
  forced into one of the Mexican/Central American or Peninsular
  clusters via a *forced-assignment* sensitivity analysis.

---

## 5 — The corpora: GloWbE and NOW

Donina §1.10 (p. 101–103). Two Mark Davies corpora, both via
*corpus.byu.edu* (now *english-corpora.org*):

### 5.1 — GloWbE (Corpus of Global Web-Based English)

- **Size**: 1.9 billion words
- **Source**: 1.8 million web pages from 340,000 sites across the 20
  English-speaking countries
- **Time window**: 2012–2013 (snapshot, not updated)
- **Variant tagging**: site domain → country

### 5.2 — NOW (News on the Web Corpus)

- **Size**: ~2.8 billion words (and growing — +4–5 million words/day)
- **Source**: Google News for each of the same 20 countries
- **Time window**: 2010 to present
- **Variant tagging**: news site domain → country

### 5.3 — Variant representation is unequal

Crucial methodological observation (p. 102, Figs 8–9): the 20 variants
are **not** equally represented in either corpus.

In **NOW**:
- US contributes 22.6% of all examples
- US + GB + CA + IN together contribute 50.3%
- JM, LK, BD, HK, TZ each contribute <1%

In **GloWbE**:
- US 20.5% and GB 20.6% — together 41%, more balanced than NOW
- Outer-circle distributions more uniform than NOW (because GloWbE was
  built without daily news bias)

In **absolute** terms (Fig 9), 13 variants are better represented in
NOW and 7 are better represented in GloWbE. There is no monotone
ordering.

### 5.4 — Corpus coefficients per variant

The unequal representation introduces a confound: a high raw ПоКА for
*fear* in US English could just reflect that US English has more text
in the corpus. To correct for this Donina computes **corpus
coefficients** — per-variant normalisation factors equal to the
variant's share of the total corpus.

Concretely:
```
corpus_coef(variant, corpus) =
    word_count(variant, corpus) / total_word_count(corpus)
```

Each raw cell value `cᵢⱼ(variant)` is divided by the corpus coefficient
for that variant before being aggregated into ПоКА. The result is a
**density** measure — how often per million words of the variant the
collostruction appears — rather than a raw count.

Without this step, the cross-variant Pearson `r` is artefactually
inflated for well-resourced variants and deflated for under-resourced
ones. Donina computes the coefficient explicitly per variant per corpus
(separately for GloWbE and NOW), so the same `(emonym × classifier ×
variant)` cell appears with two normalised values that can be
cross-checked.

### 5.5 — Pearson `r` between the two corpora

Per Donina task 5 (p. 8) and §1.10 application: the same emonym × class
× variant matrix is computed twice (once from GloWbE, once from NOW),
and Pearson `r` between the two matrices is checked. High `r` (which
she finds — values ≥ 0.85 in most cases) validates that the corpus pair
is representative; low `r` would flag corpus-specific artefacts.

### 5.6 — Spanish-corpus analogues

The Spanish project's corpus pair, per `notes/plan-from-scratch.md`
Phase 3:

| Donina's English corpus | Spanish analogue | Note |
|---|---|---|
| GloWbE | **Corpus del Español: Web/Dialects** (Davies) | 21 variants tagged, ~2 bn words; structurally analogous to GloWbE |
| NOW | **NOW Spanish** (Davies) | Same 21 variants, growing daily |

Optional tertiary corpora to consider:

- **CORPES XXI** (RAE): ~400 m words, ~25 region-tags, but Peninsular-
  skewed. Use as a tiebreaker, not primary.
- **esTenTen** (Sketch Engine): ~20 bn words, but variant tagging is
  geo-IP–based (noisier). Use for hard-to-find variants where the
  primary corpora are sparse.

The corpus-coefficient computation is exactly the same as in Donina.
Pearson `r` between Davies-Web and Davies-NOW must also be reported as
a validation step before downstream stats.

### 5.7 — Variant under-representation honesty

Donina was honest about under-representation: TZ, HK, BD, LK, JM each
contribute <1% of NOW; the cross-variant statistics for these are
necessarily noisier than for US / GB / IN.

For Spanish, the under-resourced variants are predictable: GT, HN, SV,
NI, CR (Central America), PR, PY, EC, BO. The project plans to report
these as **exploratory** rather than dropping them — Spanish-speaking
populations of these countries are not negligible, and silent dropping
would be a measurement artefact, not a scientific finding.

---

## 6 — The cryptoclass analysis worked example (Res Acutae)

Donina §1.10 (p. 104) — the only complete worked example of how she
specifies a class's classifier set. **Reproducing it here is essential**
because it shows the exact format the Spanish *Res Continens* and
*Res Planae* classes need to follow when their classifier inventories
are built bottom-up (per `notes/plan-from-scratch.md` Phase 2).

> *Проиллюстрируем, как проводился криптоклассный анализ, на примере
> криптокласса Res Acutae («остроконечное» типа шипа или иглы).
> Именами-эталонами остроконечности могут выступать существительные,
> обозначающие объекты живой природы prickle, thorn, claw, sting, nail,
> или артефакты needle, knife и т.д. Классификаторами криптокласса
> согласно исследованию [Борискина 2011] являются следующие
> классифицирующие конструкции:*

**Prototypes (имена-эталоны)** for Res Acutae:
- Natural: *prickle, thorn, claw, sting, nail*
- Artefacts: *needle, knife*

**Classifiers** for Res Acutae (the diagnostic collostructions, p. 104):

| Construction type | Classifier patterns |
|---|---|
| Subject-transitive | `[a sharp object pierces smth]`, `[a sharp object punctures smth]`, `[a sharp object pricks smth]` |
| Predicative | `[an object is sharp]`, `[an object is poignant]`, `[an object is acute]` |
| Attributive | `[a sharp object]`, `[a piercing object]` |
| Substantive | `[the prick of a sharp object]` |

Note Donina lists only **four** of Boriskina's seven construction
types — subject-intransitive, objective, and instrumental are absent
for Res Acutae. The interpretation: classes are not symmetric across
construction types. *Sharp objects* are typically agents (they pierce),
not patients (you don't typically "use" a sharpness in the same
syntactic shape).

**Testing the emonym**: each of the 23 emonyms is then tested for its
ability to fill the `X` slot in the four classifier types of each
cryptoclass. The example Donina gives for *mind* in Res Acutae:

- *The mind gets so sharp that it becomes the problem.*
- *James's body might have been failing him, but his mind was still sharp.*
- *He possessed the sharpest mind in matters of finance and business.*

— all three are predicative or attributive instances; *mind* is
diagnosed as belonging to Res Acutae on this evidence.

### 6.1 — Spanish parallel for Res Acutae

By translation from Donina's English specification, the Spanish Res
Acutae classifier seed set would be (provisional; verify against
project's `Res Acutae.xlsx` column headers):

| Construction type | Spanish classifier seed |
|---|---|
| Subject-transitive | `[un objeto agudo perfora algo]`, `[un objeto agudo pincha algo]`, `[un objeto agudo punza algo]` |
| Predicative | `[un objeto es agudo]`, `[un objeto es punzante]`, `[un objeto es cortante]` |
| Attributive | `[un objeto agudo]`, `[un objeto punzante]`, `[un objeto afilado]` |
| Substantive | `[el pinchazo de un objeto agudo]`, `[la punta de un objeto agudo]` |

The mapping is *largely* direct, but two Spanish gotchas:

1. **Gender on the noun matters.** *Punzante* is a participle that
   inflects to *punzantes* (plural) but not for gender; *agudo /
   aguda* does. The classifier query must allow for the morphological
   variant.

2. **Lexical doublets.** *Cortante* (cutting) and *afilado* (sharp,
   edge-sharp) are arguably distinct sub-classifiers — *afilado*
   selects sharp **points**; *cortante* selects sharp **edges**.
   Boriskina's original Res Acutae conflates points and edges. The
   Spanish project should decide whether to split.

These are exactly the kind of decisions that `notes/cryptoclasses/<class>.md`
files will encode.

---

## 7 — Quantitative apparatus (the formulas Donina uses)

Donina §1.10 (p. 105–110). Three formal indices, two clustering
methods. The IDC and CAC are inherited from Boriskina (see
`notes/theory-boriskina.md` §8.5 and §9); the **new** instruments are:

### 7.1 — ПоКА — the central index

Same formula as Boriskina:

```
Sᵢ = Σⱼ cᵢⱼ
```

where `cᵢⱼ` is the frequency of co-occurrence of noun *xᵢ* with
classifier *yⱼ*. After computing `Sᵢ` per cryptoclass, the value is
normalised against the other metaphoronyms of the same class to give
the *relative* ПоКА:

```
ПоКА(xᵢ, class_k) = Sᵢ(class_k) / Σ_l Sᵢ(class_l)
```

Range: `0 ≤ ПоКА ≤ 1`; sums to 1 across all classes the noun projects
into.

For the cross-variant extension, the formula gets a variant index:

```
ПоКА(xᵢ, class_k, variant_v) =
    Sᵢ(class_k, variant_v) / Σ_l Sᵢ(class_l, variant_v)
```

This is the unit of comparison: the 6-dimensional (or 8-dimensional
in this project's Spanish extension) ПоКА vector for each
`(emonym, variant)` pair.

### 7.2 — Pearson correlation `r` between variants

The formula Donina cites (p. 106, verbatim):

```
r_XY = cov_XY / (σ_X · σ_Y)
     = Σ(X - X̄)(Y - Ȳ) / √[ Σ(X - X̄)² · Σ(Y - Ȳ)² ]
```

where `X̄ = (1/n)Σ X_i` and `Ȳ = (1/n)Σ Y_i` are the sample means.

**Usage**: for each pair of variants `(v_a, v_b)`, treat their ПоКА
vectors across all emonyms × cryptoclasses as variables `X` and `Y`,
and compute Pearson `r`. The result is a `V × V` matrix where `V` is
the number of variants (20 in Donina, 21 in this project).

**Interpretive bands** (Ivanter-Korosov 1992, cited Donina Tabl. 2,
p. 107):

| `r` range | Interpretation (Russian) | English |
|---|---|---|
| 0 – 0.19 | очень слабая | very weak |
| 0.20 – 0.29 | слабая | weak |
| 0.30 – 0.49 | умеренная | moderate |
| 0.50 – 0.69 | средняя | medium |
| 0.70 – 1.00 | сильная / тесная | strong / tight |

Donina's headline numbers (per her thesis 1, p. 9):

- **Inner-circle variants** mutually `r ≥ 0.92` — *strong/tight*.
- **Outer-circle variants** mutually `r = 0.74 – 0.80` — also strong,
  but lower than inner-circle.

The 0.92 threshold for inner-circle agreement is a benchmark the
Spanish project should expect to **exceed** for closely-related
variants (e.g. AR-UY, ES-CL, MX-PE), and **drop below** for
geographically separated pairs (e.g. ES-AR or MX-PR).

### 7.3 — Kendall's `W` — coefficient of concordance

A single statistic for the global agreement of `m` ranked variables
across `n` objects. Donina's formula (p. 107):

```
W = 12 · S / [ m² · (n³ - n) ]
```

where:
- `S` = sum of squared deviations of all rank-sums from their mean
- `m` = number of analysed ordinal variables (in our case: number
  of variants)
- `n` = number of objects being ranked (in our case: number of
  cryptoclasses per emonym; usually 6 for Donina, 8 for this project)

Range: `0 ≤ W ≤ 1`.

**Quality thresholds** Donina cites:

| `W` range | Quality |
|---|---|
| `W > 0.40 – 0.50` | satisfactory |
| `W = 0.70 – 0.80` | high |

**Usage**: for a given emonym, treat each variant as a "judge"
ranking the cryptoclasses by ПоКА. Kendall's `W` measures how much
the judges agree. High `W` means the cryptoclass ranking for this
emonym is conserved across variants.

For Donina's headline finding (theses 5–6): `W` is high for all 23
emonyms across the 20 variants — the cryptoclass *ranking* of an
emonym is largely conserved, with only the absolute ПоКА values
shifting.

### 7.4 — Factor analysis with Varimax

Donina §1.10 (p. 108–109, Tabl. 3). She uses the **Deductor Academic
5.3** software (now archived; equivalents include R's `psych::fa()`
with `rotate="varimax"`, scikit-learn's `FactorAnalysis`, or stata's
`factor` with the `rotate(varimax)` option).

**Goal**: verify that the six cryptoclasses load on six independent
factors — i.e. that they are statistically independent, not artefacts
of overlapping classifier inventories.

**Result** (Donina's Tabl. 3, reproduced):

| Class | Factor 1 | Factor 2 | Factor 3 | Factor 4 | Factor 5 | Factor 6 |
|---|---|---|---|---|---|---|
| Res Acutae | | | 0.9951 | | | |
| Res Filiformes | | 0.9841 | | | | |
| Res Liquidae | | | | | | 0.9609 |
| Res Longae Penetrantes | | | | | 0.9769 | |
| Res Parvae | | | | 0.9851 | | |
| Res Rotundae | 0.9849 | | | | | |

Each class loads ≥ 0.96 on exactly one factor. The six factors are
**clean** — they are the six cryptoclasses, statistically. This
validates the classifier inventories: they do not contaminate one
another.

**The corresponding step for Spanish** (per
`notes/plan-from-scratch.md` Phase 7): run the same Varimax on the
8-class × 21-variant data. The test for *Res Continens* and *Res
Planae* is whether they each load on their own factor at ≥ 0.95, or
whether they collapse:

- *Res Continens* might collapse onto *Res Liquidae* (containers
  hold liquids).
- *Res Planae* might collapse onto *Res Parvae* (flat objects can be
  small and graspable) or onto *Res Filiformes* (thin flat = thread-
  like).

If either added class fails to load independently, drop it and re-do
the analysis with the inherited 6 (or 7) classes. The factor-analysis
step is therefore the **inventory-confirmation gate** for the Spanish
project's extended class set.

### 7.5 — k-means clustering of variants

Donina §1.10 (p. 110) — used as the second clustering method (the
first being Kohonen SOM, §7.6 below). Standard k-means: given `k`,
partition the variant-points in their (6-dimensional ПоКА) space into
`k` clusters by Lloyd's algorithm.

**Choice of `k`**: Donina settled on `k = 6` clusters based on the
output of the SOM (which is unsupervised in dimensionality). The
clusters that emerged:

- American (US + CA)
- Australasian (AU + NZ)
- European (GB + IE)
- Asian (IN + SG + HK + LK + BD + PK + MY + PH)
- African (GH + NG + TZ + KE + ZA)
- Caribbean (JM only)

**For Spanish**: the expected `k` is 7 (per the dialectological
zones in §4.1). The Spanish-specific question is whether US Spanish
forms its own cluster, joins Mexican / Central American, or joins
Peninsular. Donina's method does not pre-specify this — k-means is
agnostic to geography, so the cluster assignment is empirical.

### 7.6 — Kohonen Self-Organising Maps (SOM)

Donina §1.10 (p. 110–111). The SOM is a neural-network method for
visualising high-dimensional data on a 2D lattice. It is **inherently
clustering**: similar inputs project to nearby cells on the lattice.

**Input**: per variant, a 6-dimensional vector of average ПоКА across
the 6 classes (in this project's extension, 8-dimensional).

**Output**: a 2D hexagonal lattice where each variant is mapped to a
cell. Variants with similar profiles project to nearby cells; visually
distinct regions correspond to clusters.

**Donina's Fig. 10 result**: the 20 variants map to a colour-coded
lattice forming six contiguous regions, exactly matching the k-means
clusters above:

- Америка (US, CA)
- Австралия (AU, NZ)
- Европа (GB, IE)
- Азия (IN, SG, HK, LK, BD, PK, MY, PH)
- Африка (GH, NG, TZ, KE, ZA)
- Карибы (JM)

The match between k-means and Kohonen SOM is the *robustness* check —
two different unsupervised methods recover the same partition.

**Implementation note**: Donina used Deductor Academic 5.3. Modern
equivalents include the Python `minisom` library, R's `kohonen`
package, or scikit-learn's `MiniSOM` wrapper. The exact lattice size
(she used a 6×6 hex map) is a hyperparameter; the Spanish project
should sweep over lattice sizes from 4×4 to 8×8 and report the most
interpretable.

---

## 8 — The headline finding: geography > chronology

Donina's central empirical claim (p. 112):

> *Криптоклассная категоризация эмоций была скоррелирована с
> хронотопом, при этом коэффициент корреляции между географически
> близкими вариантами языка выше, чем между ареально и хронологически
> удаленными, т.е. географический фактор важнее, чем временной.*

In English: cryptoclass categorisation of emotions correlates with
chronotope; **the correlation coefficient between geographically close
language variants is higher than between geographically and
chronologically distant ones — i.e. the geographic factor matters more
than the temporal one**.

This is the central scientific output. Areal contact, not the
historical-genetic descent path, predicts cryptoclass-level
similarity.

### 8.1 — What this means concretely (Donina's worked-out cases)

- US and CA pattern more like *each other* than like GB, despite all
  three sharing the inner-circle "settled" status. The North American
  block is unified by ongoing areal contact.
- IN and SG pattern more like each other than like GB, despite both
  being colonial descendants of British English. South Asian + South-
  East Asian contact has formed a coherent block.
- ZA patterns with GH, NG, KE, TZ — African contact dominates.
  Surprisingly, ZA does **not** pattern strongly with AU/NZ
  (Anglo-settler colonial descent), but with the African block.

### 8.2 — Implications of this finding for what counts as a "variant"

Donina (p. 10, thesis 4) draws a typological corollary:

> *Устоявшиеся варианты английского языка по таким ареалам как
> европейский, американский и австралийский могут быть определены как
> диалекты языка, в то время как идиомы, которые все ещё находятся в
> стадии становления в рамках азиатского и африканского ареалов, следует
> квалифицировать как самостоятельные языки с высоким уровнем
> генетической близости.*

The **settled** Western variants are **dialects** of English; the
**still-in-formation** Asian and African variants are arguably
**separate languages** with high genetic proximity to English.

**For Spanish** this is a less acute distinction because the
hispanofonía is *uniformly settled* — there are no
still-in-formation Spanish "Englishes." All 21 variants have several
centuries of codification. The Donina-style "dialect vs. separate
language" question therefore does not arise for Spanish in the same
form. What does arise is the question of whether **emerging contact
varieties** (e.g. US Spanish, Catalan-influenced Spanish in
Catalonia, English-influenced *Spanglish*) should be treated as
variants or as ambient phenomena. See §13.

---

## 9 — From the per-emonym chapters: what to expect

Donina §2.1 contains 23 sub-chapters (pp. 121–309), one per emonym.
This file does not extract them in detail (the analytical work was
done class-by-class and is recoverable from the source); the
extraction will live in `notes/donina-per-emonym/<emonym>.md` files
to be created as needed. **What is worth noting now** about how she
presents each emonym:

1. **The emonym's general cryptoclass profile across all 20 variants
   pooled** — a single radar plot in Donina's six-class space.
2. **Per-variant cryptoclass portrait** — typically a heatmap of 6
   classes × 20 variants.
3. **Identification of the dominant cryptoclass(es)** — for most
   emonyms this is *Res Parvae* (the anthropocentric default).
   Exceptions Donina highlights:
   - *fear*: dominant *Res Parvae* but with substantial *Res
     Liquidae* and *Res Acutae* secondary projections; per-variant
     stable.
   - *love*: dominant *Res Liquidae* across all variants — uniquely
     among the 23 emonyms.
   - *joy*: dominant *Res Liquidae* in some variants, *Res Parvae*
     in others — high cross-variant variability.
   - *grief*: dominant *Res Parvae* with strong *Res Continens*-like
     patterns that Donina doesn't have a class for (since she
     stayed at Boriskina's 6). This is one of the empirical
     motivations for the Spanish project's *Res Continens*.
4. **Pearson `r` matrix between variants for that emonym** —
   typically 0.9+ for the inner circle and 0.7+ for the outer.
5. **Narrative discussion** of culture-specific patterns — e.g.
   IN-English's distinctive treatment of *pride*, JM-English's
   distinctive treatment of *grief*.

### 9.1 — Implication for Spanish per-emonym files

The Spanish equivalent of each per-emonym file should be structured
identically: pooled portrait, per-variant heatmap, dominant class
identification, Pearson `r` per-variant matrix, narrative. Per
`ROADMAP.md` Phase 5 (cryptoclass portraits).

---

## 10 — §2.3 — Emotional well-being (cryptoclass view)

Donina §2.3 (pp. 328–334), following V. Solovev et al. (2016), computes
an **index of emotional well-being** (*index of satisfaction with
life*) per variant from the NOW corpus, using the formula:

```
index = freq(joy) − [ freq(anger) + freq(disgust) + freq(fear) + freq(sadness) ]
```

(Donina notes that the subtrahend is the sum of four parameters and
numerically exceeds the minuend, so the index is always negative — a
language-level reflection of Apresyan's observation that linguistic
systems "fix the negative and the deviant in much greater measure than
the positive and the normative.")

She finds — somewhat counter-intuitively — the highest index for
Jamaican English (−106.84), driven by the lowest *fear* frequency in
the pool; Bangladeshi English is second (−131.24), driven by the
highest *joy* frequency. The §2.3 framing therefore concerns positive
vs. negative *frequency balance* rather than the cryptoclass
**distribution** of positive emonyms.

**For Spanish**: the equivalent per-variant index can be computed once
the Phase 4 emonym set is locked. The Spanish positives *alegría*,
*felicidad*, *placer*, *amor*, *interés* and the negatives *ira* /
*enfado*, *asco*, *miedo*, *tristeza* are the natural ingredients.
*Alegría*, *miedo*, *amor*, *tristeza* are in current scope with
manual data; the rest are Phase 4 additions.

Full extraction of §2.3 (including the per-variant figures 162–165
and the linguistic-positivity-bias literature review on pp. 328–329)
is a follow-up TODO (see §14).

---

## 11 — Source-page reading map

For future sessions that need to verify against the source:

| Topic | Page range |
|---|---|
| Title page | 1 |
| ОГЛАВЛЕНИЕ (TOC) | 2–3 |
| Введение | 4–13 |
| §1.1 Категоризация в лингвистике | 14–22 |
| §1.2 Метафора как механизм категоризации | 23–27 |
| §1.3 Национальная специфика языковой категоризации | 28–33 |
| §1.4 Именная классификативность | 34–39 |
| §1.5 Скрытая языковая категоризация мира | 40–43 |
| §1.6 Вариативность английского языка | 44–52 |
| §1.7 Способы представления вариативности | 53–62 |
| §1.8 Языковой континуум | 63–69 |
| §1.9 Эмоции в лингвистике и когнитивной науке | 70–98 |
| §1.10 Способ описания ареальной вариативности (the algorithm) | 99–112 |
| Chapter 1 Выводы | 113–120 |
| Chapter 2 (per-emonym analyses) | 121–309 |
| §2.1.10 fear | 200–208 |
| §2.1.20 love | 274–283 |
| §2.1.9 joy | 192–199 |
| §2.1.18 grief | 258–265 |
| §2.2 Категоризация эмоций и стратификация вариантов | 310–327 |
| §2.3 Эмоциональное благополучие | 328–334 |
| Chapter 2 Выводы | 335–337 |
| Заключение | 338–343 |
| Глоссарий | 344–346 |
| Список литературы | 347–… |
| Приложение 1 (cultural-historical notes on variants) | end |
| Приложение 2 (basic-emotions taxonomy table) | end |
| Приложение 3 (decision-tree rules) | end |
| Приложение 4 (cryptoclass-chain taxonomies) | end |

---

## 12 — Mapping Donina → Spanish algorithm (step by step)

This is the operational table the project's implementer should keep
open as the pipeline is built. It traces each of Donina's
methodological choices to the Spanish equivalent.

| Donina (English, 2016) | Spanish project (2026+) | Status |
|---|---|---|
| 4 emonym-selection criteria (taxonomy + dictionary + frequency + critical mass) | same 4 criteria, Spanish-substituted sources | `ROADMAP.md` Phase 1 |
| 181 → 23 emonym pruning | ~150-200 → 15-25 expected | per `notes/plan-from-scratch.md` |
| 6 cryptoclasses (Boriskina) | 8 cryptoclasses (Boriskina + 2 Spanish) | locked |
| 20 variants | 21 variants (ISO codes) | locked, see CLAUDE.md |
| Kachru inner/outer/expanding circles | Dialectological zones (Peninsular, Caribbean, Andean, Mexican-Central American, Rioplatense, Chilean, US) | reframed |
| 2 corpora (GloWbE + NOW) | 2 corpora (Davies Web/Dialects + Davies NOW), CORPES XXI as tiebreaker | per `notes/plan-from-scratch.md` Phase 3 |
| Corpus coefficient per variant per corpus | same | unchanged |
| Pearson `r` between the two source corpora (validation) | same | unchanged |
| Manual semi-automatic extraction (3,400 person-hours) | **LLM-assisted extraction calibrated against gold set (~100-200 person-hours)** | `ROADMAP.md` Phases 2-3 |
| ПоКА formula `Sᵢ = Σⱼ cᵢⱼ` | same | unchanged |
| Per-variant ПоКА vector (6-dim) | Per-variant ПоКА vector (8-dim) | extended |
| Pearson `r` 20×20 matrix between variants | Pearson `r` 21×21 matrix | extended |
| Ivanter-Korosov interpretive bands | same | unchanged |
| Kendall's `W` (per emonym, across variants) | same | unchanged |
| Factor analysis (Varimax) on 6 classes | Factor analysis on 8 classes — **gate for adding Res Continens / Res Planae** | extended |
| k-means clustering (`k=6`) | k-means clustering (`k=7` likely) | extended |
| Kohonen SOM (6×6 hex lattice) | Kohonen SOM (lattice size to be tuned) | unchanged in method |
| Emotion maps + cryptoclass portraits | same outputs, Spanish-labelled | unchanged |
| COEL information system hosting | TBD — possibly Davies-style web interface or simpler static site | open |
| Findings: geography > chronology | Hypothesis test for Spanish | open |

---

## 13 — Implications for the Spanish project

Section §13 of `notes/theory-boriskina.md` already covered framework-
level implications. This section focuses on the **methodological**
choices specific to the Donina-style cross-variant work.

### 13.1 — Where Donina's method transfers unchanged

1. **The four-criterion emonym filter.** Direct translation; same logic.
2. **The corpus coefficient computation.** Unchanged formula and
   interpretation. Spanish variants are unevenly represented in
   *Corpus del Español: Web/Dialects* (ES + AR + MX dominate; PY +
   PR + CR are sparse) — exactly Donina's situation in different
   colours.
3. **Pearson `r` and Kendall's `W`.** Identical formulas; the
   Ivanter-Korosov interpretive bands are language-independent.
4. **The two-corpus-validation step.** Mandatory before publishing
   any cross-variant claim.
5. **Factor analysis as inventory check.** The Varimax confirmation
   that classes load independently is identical in formula; the
   project applies it to the extended 8-class inventory.
6. **k-means and Kohonen SOM.** Identical methods; Spanish-specific
   `k` value (expected `k=7`).
7. **The headline question** (does geography correlate with cryptoclass
   similarity?) — directly inheritable as the Spanish project's central
   hypothesis.

### 13.2 — Where Donina's method needs adaptation

1. **Kachru circles → dialectological zones.** The conceptual frame
   for variant grouping changes because Spanish lacks the inner/outer
   structure.
2. **Corpus pair specifics.** Davies's two Spanish corpora replace
   GloWbE + NOW. CORPES XXI is a tertiary that Donina didn't have an
   analogue of.
3. **Variant count 20 → 21.** Trivial computationally but the SOM
   lattice should be sized accordingly.
4. **Class inventory 6 → 8.** Two added classes pending factor-
   analysis confirmation.
5. **Grammatical gender as covariate.** Donina did not face this
   because English is genderless. The Spanish project decides whether
   gender is reported (recommended), stratified on (possible), or
   ignored (not recommended). Per `notes/plan-from-scratch.md` Phase
   2, the recommendation is **report as covariate, do not stratify**.
6. **The 3,400-hour bottleneck → LLM pipeline.** This is the project's
   central methodological innovation over Donina, not a translation
   of her work. The LLM-tagging step (Phase 3 of `ROADMAP.md`)
   replaces her manual filtering and tagging. The pipeline must be
   calibrated against the manual gold set (Phase 1 of `ROADMAP.md`)
   and report precision / recall explicitly.

### 13.3 — Where the Spanish project breaks new ground

1. **Two Spanish-specific cryptoclasses.** *Res Continens* and *Res
   Planae* are not in Boriskina or Donina. Their factor-analysis
   confirmation in the Spanish data is a publishable contribution.
2. **LLM-pipeline scaling.** Donina spent 3,400 hours; the Spanish
   project plans 100-200 hours of human time + automated extraction.
   If the pipeline reaches Donina-comparable precision (≥0.90 against
   the gold set), the project demonstrates a 10-20× speed-up for the
   cryptoclass extraction stage.
3. **Twelve-slug construction-type schema.** Boriskina's seven types
   (smushed in the Russian column headers of the legacy `.xlsx`
   files) split into twelve here, including the three-way locative
   split (state / motion-into / motion-out) that *Res Continens*
   requires.
4. **Hispanofonía cluster structure.** If Donina's geography>chronology
   finding replicates for Spanish, it confirms a cross-language
   universal. If it does not — that itself is publishable.
5. **Per-zone interpretability**. Spanish dialectological work has
   richer published taxonomies (Lipski, Moreno Fernández, Lope Blanch,
   ALPI/ALPI-2 atlases) than English variantology had for Donina's
   pool. The Spanish project can therefore compare its emergent
   cryptoclass clusters against finer-grained existing dialectological
   maps.

### 13.4 — Open methodological questions for Spanish

These extend the open questions in `notes/theory-boriskina.md` §13.3.
The Spanish project should resolve them before Phase 4 (scaled
collection):

- **Q5**: What variants are *exploratory*-only versus *load-bearing*?
  Donina kept all 20 of her variants in the headline statistics but
  noted the African and Asian under-resourcing. For Spanish, the
  Central American block (GT, HN, SV, NI, CR) and PY, PR, EC, BO are
  the likely under-resourced. Decide: exclusion threshold (e.g. <1000
  citations in *Corpus del Español*) → variant becomes exploratory.

- **Q6**: How are *intra-national variations* handled? Spanish has
  significant variation **within** countries (e.g. Andean vs.
  Caribbean Colombian Spanish within `CO`; Río de la Plata vs.
  Cuyana within `AR`). Donina did not face this — Indian English is
  treated as a single variant. For Spanish, the choice is to (a)
  treat each ISO code as one variant (CLAUDE.md current), or (b)
  introduce sub-codes (e.g. `CO-AND`, `CO-CAR`). Recommendation: (a)
  for the published statistics, (b) optionally for sensitivity
  analyses.

- **Q7**: Is there a *Spanish-internal Kachru-like structure*? ES
  (Peninsular) historically claims a "norm-providing" role similar to
  GB English's role for the inner-circle. Some Latin American
  scholarship (Moreno Cabrera, Lipski) explicitly rejects this. The
  project should make its position explicit: **report ES as one
  variant among 21**, with no privileged role in the statistics.

- **Q8**: How is **online/written-only bias** of the two Davies
  corpora addressed? GloWbE and Davies-Web are web-text-only;
  cryptoclass patterns in spoken Spanish may diverge. Donina did not
  address this directly. The project should at minimum cite the
  limitation; if resources permit, validate against the spoken
  sub-corpus of *CORPES XXI*.

---

## 14 — Follow-up TODOs

1. Extract §1.5 (covert categorisation), §1.6 (English variation), §1.8
   (linguistic continuum) in detail. These give the broader theoretical
   context this file summarises.
2. Extract §1.9 (emotion in linguistics and cognitive science, 28 pages,
   pp. 70-98) — the longest theoretical section and the one most
   directly relevant to defining what an emonym *is*.
3. Extract §2.2 (categorisation of emotions and stratification of
   variants, pp. 310-327) — Donina's per-cluster narrative analysis.
4. Extract §2.3 (emotional well-being, pp. 328-334) — directly relevant
   to the Spanish project's positive-emonym predictions.
5. Extract Chapter 1 Выводы (pp. 113-120) and Заключение (pp. 338-343)
   in full — they are condensed re-statements of the methodology.
6. Per-emonym extractions for the 4 emonyms currently in Spanish scope
   (*fear/miedo* p. 200-208; *love/amor* p. 274-283; *joy/alegría*
   p. 192-199; *grief* p. 258-265 — closest English analogue of
   *tristeza*, but note this is a non-trivial translation).
7. Decide Spanish equivalents for Donina's 23 emonyms (per the
   tentative table in §3.1) and lock the candidate list for Phase 4
   of `ROADMAP.md`.
8. Resolve open methodological questions Q5–Q8 in §13.4.
9. Build the project's `data/SCHEMA.md` corpus-coefficient and
   ПоКА-normalisation pipeline once Phase 4 produces enough data to
   compute them.

This file should be re-read alongside `notes/theory-boriskina.md` once
both are stabilised. The two together form the project's complete
methodological foundation; subsequent project work (Phases 4–8 of
`ROADMAP.md`) implements them.

---

## 15 — One-paragraph summary for fast lookup

Donina (2016) extends Boriskina's cryptoclass framework to the 20
national variants of English. She filters 181 candidate emonyms down
to 23 via four selection criteria (classification membership, dictionary
definition with *feeling*/*emotion* marker, frequency tier, and
critical-mass ≥5 observations per cell). She extracts 64,702 word-uses
from GloWbE + NOW with per-variant corpus coefficients, computes ПоКА
per `(emonym × cryptoclass × variant)` cell, then runs Pearson `r` and
Kendall's `W` for similarity, Varimax factor analysis to confirm class
independence (each of 6 classes loads ≥0.96 on its own factor), and
k-means + Kohonen SOM to cluster variants into six geographic regions
(American, Australasian, European, Asian, African, Caribbean). The
headline finding: cryptoclass similarity correlates with **geographic
proximity > chronological distance**. Inner-circle Pearson `r ≥ 0.92`;
outer-circle `r = 0.74-0.80`. *Res Parvae* dominates emonym
categorisation across all variants — emotions are anthropocentrically
"graspable." The Spanish project replicates this algorithm on 21
variants, 4 (eventually ~15-25) emonyms, 8 cryptoclasses, with an LLM-
assisted extraction pipeline replacing Donina's 3,400 manual hours.
