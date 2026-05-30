# Theory — Golikova (2018)

Extraction from Olga Aleksandrovna Golikova, *Именная
классификативность в языке: криптокласс «Res Planae»* ("Nominal
classificativity in language: the cryptoclass *Res Planae*"), kandidat
dissertation in linguistic theory (10.02.19), Voronezh State
University, 2018. Scientific advisor: O. O. Boriskina. Defended
2018-06-07.

The source in `references/Автореферат_Голикова_О.А..pdf` is the
**автореферат** — a 28-page condensed abstract that the kandidat
candidate distributes prior to defence — not the full dissertation
(which is not currently in `references/`). The autoreferat is the
canonical source for the **structure, theses, and headline numbers** of
the work; it does **not** carry the per-noun corpus tables, the full
classifier inventories, or the detailed worked examples. Where those
are needed, the full dissertation will have to be sourced separately.

This file complements `notes/theory-boriskina.md` (the 2011 framework)
and `notes/methodology-donina.md` (the 2016 cross-variant extension).
Golikova sits chronologically and conceptually **between** the two: she
inherits Boriskina's framework, adds a seventh English cryptoclass
(*Res Planae*) on a typological basis, and supplies a theoretical
linkage between cryptoclass theory and Rakhilina's *topotype* concept
that Donina did not develop in the same way.

For terminology, see `notes/glossary.md`. For the framework these notes
extend, see `notes/theory-boriskina.md`. For the per-class implications
of Golikova's findings, see `notes/cryptoclasses/res-planae.md`.

---

## 0 — Why this dissertation matters for the Spanish project

Two reasons, one corrective and one constructive.

**Corrective.** `CLAUDE.md` and `data/cryptoclasses.tsv` originally
described *Res Planae* as a **Spanish-specific** addition to Boriskina's
six classes (alongside *Res Continens*). Golikova establishes
*Res Planae* for **English** in 2018 — three years before the Spanish
project's framing was written. The honest description of the
inventory therefore needed adjustment (since carried out repo-wide):

- **Boriskina 2011** — 6 English cryptoclasses.
- **Golikova 2018** — adds *Res Planae* to the English inventory
  (7 total).
- **Zadobrivskaya 2019** — adds *Res Continens* to the English
  inventory (8 total; see `notes/theory-zadobrivskaya.md`).
- **This project (Spanish)** — adopts the full 8-class English
  inventory. **It has no Spanish-specific cryptoclass**: both classes
  beyond Boriskina's six were established for English by the Voronezh
  group. (This corrects the earlier framing in which *Res Continens*
  was thought to be the project's own Spanish-specific addition.)

The action item from this correction is recorded in §6 below and
flagged in [[res-planae]]. The Spanish project's empirical work on
*Res Planae* is unaffected — Spanish *nivel de + N* etc. still need to
be defended on Spanish corpus evidence — but its **typological
justification** is now stronger, because the class is no longer being
posited *de novo* on Spanish evidence alone.

**Constructive.** Golikova supplies four things the Spanish project
can reuse directly:

1. A **classifier inventory for *Res Planae*** in English, with four
   adjective stems (*flat, plain, level, even*) populating attributive,
   predicative, and substantive constructions — a template the Spanish
   inventory (*plano, llano, liso* + substantive *nivel de*) can be
   compared against.
2. A **cross-linguistic typological argument** for [+flat] as a
   classifying feature: morphologically-marked overt classes in
   Pular-Fulfulde and Japanese (§4 below).
3. A **theoretical linkage** between cryptoclass theory and Rakhilina's
   *topotype* (топотип) concept (§2 below) that Donina's framework
   gestures at but does not develop. This is directly useful for the
   Spanish project's eventual defence of *Res Continens* (a topotype
   argument for boundedness/containment).
4. A **revised cryptoclass-feature hierarchy** for English (§5 below)
   in which the [+flat] feature is **second by communicative
   significance** after [+graspable] — a finding that recontextualises
   Donina's six-class ranking and that the Spanish project should
   replicate or contest.

---

## 1 — Inheritance from Boriskina (and from Kretov)

Golikova adopts Boriskina's framework wholesale. The autoreferat
restates Boriskina's seven characteristics of a cryptoclass (p. 13–14):

> I.    В основании именного криптокласса лежит семантический
>       категориальный признак (или признаки).
> II.   Криптокласс организован по принципу поля, с размытыми
>       границами. Ни одно из свойств, присущих его членам, не является
>       обязательным для всех членов множества.
> III.  Набор классифицирующих конструкций диагностирует принадлежность
>       имён к криптоклассу.
> IV.   Криптоклассная категоризация имеет нетаксономический характер,
>       вследствие этого имя может быть одновременно отнесено к
>       нескольким криптоклассам.
> V.    Криптокласс представляет собой семантически неоднородное
>       образование с однотипными когнитивными и психолингвистическими
>       основами.
> VI.   Имена распределяются по криптоклассам на основании сходства–
>       различия сущностей (или их характеристик) с эталонами.
> VII.  Криптоклассы выявляются на основании контрастивного принципа.

Each of (I)–(VII) is already in `notes/theory-boriskina.md` §6–§7;
Golikova adds no axioms. What she adds at the foundational level is a
**preferred definition source**: she defines *cryptoclass* via Kretov
(2010) rather than via Boriskina (2011):

> *Криптокласс — скрытая лексико-грамматическая категория
> существительного, состоящая в распределении имён по классам в
> соответствии с некоторым категориальным признаком при обязательной
> выраженности классной принадлежности имени в структуре предложения
> через классификатор (конструкцию или словоформу) и имеющая
> соответствие в явной (морфемно-выраженной) грамматической категории
> хотя бы одного языка мира* [Кретов 2010].

Two things to note in the Kretov definition that are not as crisp in
Boriskina:

- **"Хотя бы одного языка мира"** — the typological criterion is
  built into the definition: a cryptoclass exists only if the
  corresponding categorial feature is **overtly grammaticalised in at
  least one language**. This is the operational warrant for §4 below
  (the Pular-Fulfulde and Japanese evidence).
- **Classifier as "конструкция или словоформа"** — the classifier may
  be either a syntactic construction (Boriskina, Donina, this project)
  *or* a single word-form (e.g. an overt class marker in Bantu). This
  generalisation is what lets the typological argument cross over from
  morphologically-marked overt classes (Pular-Fulfulde *NGO*, Japanese
  *枚*) to the covert English/Spanish constructions.

---

## 2 — The new theoretical contribution: cryptoclass × topotype

Golikova's principal theoretical move is the **integration of
cryptoclass theory with E. V. Rakhilina's *topotype* concept**.
Defended thesis 1 (autoreferat p. 8):

> *Распределение непредметных имён по криптоклассам рассматривается как
> проявление именной классификативности. Общим основанием для связи
> универсального грамматического набора и набора универсальных
> лексических параметров в языках мира выступают понятийные категории,
> коррелирующие с топологическими типами (топотипами).*

Translated: the distribution of non-object (abstract) nouns across
cryptoclasses is a manifestation of *именная классификативность*
(nominal classificativity). The common ground that connects the
universal grammatical inventory to the universal lexical inventory
across the languages of the world is *понятийные категории* (conceptual
categories) **correlating with topological types (topotypes)**.

The relevant prior Russian-language tradition Golikova cites:
[Talmy 1983], [Рахилина 2000], [Гилярова 2002], [Ляшевская 2008]. The
Rakhilina topotype is — per the autoreferat p. 14 quoting Lyashevskaya
& Rakhilina 2007 / Lyashevskaya 2008 — an *объединение лексем по
общности их предметных значений, несущих прототипические топологические
свойства объекта* (a grouping of lexemes by the commonality of their
object-meanings, bearing prototypical topological properties of the
object).

### 2.1 — Why this matters

In Boriskina (2011) and Donina (2016) the **why** of a cryptoclass —
why a given categorial feature ([+sharp], [+round], [+flat]) earns its
own class — is left at the level of "the classifier inventory empirically
clusters this way." Golikova's topotype linkage supplies the **cognitive
warrant**: cryptoclasses exist because human cognition foregrounds a
small set of topologically distinctive object-shapes, and language
re-uses these shapes to organise abstract reference.

For the Spanish project, the immediate consequence is that the
*defence* of any cryptoclass is now a two-layer argument:

1. **Empirical (Boriskina/Donina layer)**: the classifier inventory
   exists, the corpus evidence supports productivity, the Varimax
   factor loads cleanly.
2. **Cognitive-typological (Golikova layer)**: the [+feature] in
   question corresponds to a topotype that is (a) cognitively
   distinctive and (b) overtly classified in at least one other
   language.

For *Res Continens* (now known to be the **8th English class**,
Zadobrivskaya 2019 — not Spanish-specific) this two-layer test is
exactly what `notes/cryptoclasses/res-continens.md` structures, and
Zadobrivskaya already supplies both layers for English. The topotype is
the bounded three-dimensional container; the typological warrant is
Zadobrivskaya's overt container classifiers in Russian (*-ница*), Avar,
Navajo, Atsugewi, and Upper Kuskokwim (`notes/theory-zadobrivskaya.md`
§3), alongside the Mandarin / Japanese counter systems and Niger-Congo
bilateral-class systems.

### 2.2 — *Именная классификативность* — the proposed defined term

Golikova proposes (defended thesis, autoreferat title and Введение)
the term **именная классификативность** (nominal classificativity).
Definition (Заключение, p. 22):

> *Именная классификативность определяется как основное свойство
> именной системы, заключающееся в способности имени входить в группы
> или классы, распределение по которым происходит через установленный
> на данном этапе развития языка механизм категоризации —
> классификатор — существующий в каждом конкретном языке способ
> распределения имён по группам (классам).*

Translated: nominal classificativity is the fundamental *property* of
a nominal system consisting of a noun's capacity to enter groups or
classes, the distribution into which proceeds via the mechanism of
categorisation — the *classifier* — established at the given stage of
language development; that mechanism is the language-specific means of
distributing nouns into groups (classes).

This term sits **above** *cryptoclass* in the conceptual hierarchy:
nominal classificativity is the general property; the cryptoclass is
one of its manifestations (the covert, construction-mediated kind).
Glossary entry: see [[nominal-classificativity]] for the eventual
trilingual entry in `notes/glossary.md` — currently absent.

The scale on which nominal classificativity varies, per the autoreferat
§1.2 (p. 13), is **Vinogradov's scale of nominal classificativity**
([Виноградов 1990]), running from morphologically overt (Bantu noun
classes) at one end to covert/construction-mediated (English and
Spanish cryptoclasses) at the other. The Russian-language extension of
this scale to cover the cryptoclass case is itself a contribution.

---

## 3 — Object, subject, goal, tasks (Golikova's introduction)

### 3.1 — Object and subject

**Object** (p. 7): *лексико-синтаксическая сочетаемость 500 наиболее
частотных непредметных имён существительных английского языка* — the
lexico-syntactic combinability of **500 most-frequent non-object (i.e.
abstract) English nouns**.

**Subject** (p. 7): the **metaphorical occurrence** of those names in
attributive, predicative, and substantive constructions with feature-
words (признаковые слова) whose semantics points to functionally
significant properties of objects with **a flat-even surface
("Res Planae"): *flat, plain, even, level***.

The classifying constructions are explicitly enumerated:

```
[a flat object]   [a plain object]   [a level object]   [an even object]
[an object is flat]   [an object is plain]   [an object is level]   [an object is even]
[the level of object]   [the object level]   [the plain of object]
```

**Research corpus size**: **57,110 word-uses** (p. 7). Smaller than
Donina's 64,702 (which spanned 23 emonyms × 20 variants × 6 classes);
Golikova's corpus covers 500 abstract nouns but only one cryptoclass.
The order of magnitude is the same.

### 3.2 — Goal and tasks

The autoreferat enumerates **9 tasks** (p. 6–7). Paraphrased:

1. Propose a definition of *именная классификативность*.
2. Provide a **typological justification** for distinguishing the
   *Res Planae* cryptoclass and identify the categorial features that
   underpin it in English.
3. Compare the postulates of cryptoclass theory with the main claims of
   cognitive semantics; determine the relationship between
   *cryptoclass* and *topotype*.
4. Form the set of **diagnostic classifying constructions** for *Res
   Planae* in English.
5. Compute the quantitative characteristics — **ИРа, ПоКА, СИ**
   (combinatorial selectivity) — for the metaphoronyms in the class;
   assess usuality vs. occasionality of usage; analyse frequency.
6. Identify features of cryptoclass behaviour of abstract-semantics
   names within the postulated class.
7. Determine the **discursive features** of classifying constructions.
8. Revise the **hierarchy of features** underlying the developed
   cryptoclasses.
9. Deposit the obtained data on the **COEL** linguistic resource
   (http://www.rgph.vsu.ru/coel).

Tasks 2, 3, 4, 5, 8 are the substantively novel ones. Task 5 introduces
*combinatorial selectivity* (СИ) as a quantitative measure alongside
ИРа and ПоКА (§5 below). Task 8 produces the revised feature hierarchy
that this project's Spanish work has to engage with (§5).

### 3.3 — Corpora used

Six **English** corpora (p. 6), all via the *corpus.byu.edu* infrastructure
now hosted at *english-corpora.org*:

| Corpus | Size (autoreferat) | URL |
|---|---|---|
| GloWbE — Corpus of Global Web-Based English | 1.9 bn words | http://corpus.byu.edu/glowbe/ |
| COCA — Corpus of Contemporary American English | 520 m | http://corpus.byu.edu/coca/ |
| BNC — British National Corpus | 100 m | http://corpus.byu.edu/bnc/ |
| NOW — News on the Web | 5.7 bn | http://corpus.byu.edu/now/ |
| COHA — Corpus of Historical American English | 400 m | http://corpus.byu.edu/coha/ |
| TIME Magazine Corpus | 100 m | https://corpus.byu.edu/time/ |

Plus the project's own information resource **COEL** —
*Криптоклассы английского языка* — at http://www.rgph.vsu.ru/coel.

For the Spanish project: COEL's continued availability is worth
confirming; if it has been refreshed since 2018 with Golikova's
Res Planae data, that is a direct reference set to compare Spanish
results against.

---

## 4 — The typological warrant for Res Planae

Golikova §2.1 of the autoreferat (p. 15–16) supplies the
cross-linguistic evidence for [+flat] as a classifying feature. Two
languages cited:

### 4.1 — Pular-Fulfulde (Niger-Congo, West Atlantic branch)

A morphologically-marked **singular class NGO** is attested across the
Pular-Fulfulde dialect group, with the classifying semantic feature
**"плоская форма"** (flat shape). The class admits:

- **Names of natural objects** — body parts, parts of landscape.
- **Names of artefacts** — especially **woven items** (mats, baskets
  with flat profiles).
- **Names with abstract meaning** — explicit mention.

Source cited: [Коваль 1996: 188] (А. И. Коваль's work on Fulfulde
nominal classes).

### 4.2 — Japanese

The numeral classifier (counter) suffix **枚 (まい, *mai*)** is used
for counting flat objects: leaves, sheets of paper, paintings and
photographs without frames, plates, boards, folded or hanging clothing.

Example pattern given:

```
ichi-mai-no chiketto
один — плоский предмет — билет
"one flat-object ticket"
```

### 4.3 — Why this matters typologically

By Kretov's definition (§1 above) a cryptoclass requires the categorial
feature to be **overtly grammaticalised somewhere**. Pular-Fulfulde
*NGO* (a morphological class marker) and Japanese *枚* (a numeral
classifier) together demonstrate that **[+flat] is overtly classified
in unrelated language families**, satisfying the typological criterion.

The English [+flat] *Res Planae* cryptoclass is therefore typologically
warranted: English does covertly (via constructions) what Pular-Fulfulde
does morphologically and Japanese does via numeral classifiers.

### 4.4 — For Spanish

The Pular-Fulfulde and Japanese evidence transfers directly. Spanish
has the same construction-mediated [+flat] system (most prominently
*nivel de + N*, plus the *plano / llano / liso* adjectival family), so
Golikova's typological argument carries the Spanish *Res Planae* as
well. No additional typological evidence is required for Spanish that
is not already in Golikova.

---

## 5 — The Res Planae classifier inventory (English)

Defended thesis 3 (autoreferat p. 8):

> *Набор классифицирующих конструкций криптокласса отражает
> представление о свойствах соответствующего топологического типа,
> причём каждая отдельная конструкция классифицирует имена, опираясь на
> одно из свойств топотипа.*

For *Res Planae* the topotype "object with flat horizontal surface"
decomposes into three cognitively distinct sub-features, each
diagnosed by a different sub-set of classifiers:

| Sub-feature | Russian gloss | Classifier patterns |
|---|---|---|
| **Плоский (необъёмный)** — *flat (non-volumetric)* — form proper | *плоский* | `[a flat object]`, `[object is flat]` |
| **Ровный (лёгкий для перемещения, обзора)** — *plain/even (easy to move, easy to view)* — functionally-significant form property | *ровный* | `[a plain object]`, `[object is plain]`, `[a plain of object]`, `[an even object]`, `[object is even]` |
| **Горизонтально-ориентированный** — *horizontally-oriented* (can change spatial position relative to a notional horizon while preserving orientation) — functionally-significant form property | *горизонтально-ориентированный* | `[a level of object]`, `[object is level]`, `[a level object]` |

The autoreferat (p. 16) catalogues the inventory by construction type:

- **Attributive classifiers**: `[a plain object]`, `[a flat object]`,
  `[a level object]`, `[an even object]`.
- **Predicative classifiers**: `[an object is plain]`,
  `[an object is flat]`, `[an object is level]`, `[an object is even]`.
- **Substantive classifiers**: `[a plain of an object]`,
  `[a level of an object]`, `[the level of the object]`,
  `[the object level]`.

### 5.1 — Construction-type semantics (Kustova-inspired)

Defended thesis 4 (autoreferat p. 9), §2.2 (p. 16). The three
construction types are *семантически противопоставлены* (semantically
contrastive):

- **Attributive construction** marks **постоянство** (permanence) of
  the assigned feature.
- **Substantive construction** describes **устойчивость** (stability)
  of relations.
- **Predicative construction** is destined to convey **временность**
  (temporality) of the feature.

Golikova grounds this on Kustova 2007: 469 (verbatim quotation, p. 17):

> *«…атрибутивная конструкция — это ступень к фразеологизации, которая
> является «тупиковой ветвью эволюции» (остановкой семантического
> развития), а предикативная (в широком смысле) конструкция — это,
> наоборот, своего рода «лаборатория» (или «кузница») новых значений»
> [Кустова 2007: 469].*

— attributive construction is a step toward phraseologisation, an
"evolutionary dead-end branch" (a halt in semantic development);
predicative construction (broadly construed) is, on the contrary, a
kind of "laboratory" (or "forge") of new meanings.

**Implication for Spanish.** The same three-way construction semantics
should hold:

- Spanish attributive *un objeto plano / llano / liso* — encodes
  permanence; the most lexicalised classifier readings should
  concentrate here.
- Spanish predicative *el objeto es plano* — encodes temporality;
  innovative metaphorical uses should concentrate here.
- Spanish substantive *el nivel de + N* — encodes stability of
  relation; this is the project's high-volume locus and matches the
  English *the level of N*.

This is a concrete prediction the pipeline can test against the
Spanish data. If the construction-type semantics replicate, Spanish
*nivel de + N* should pattern with *the level of N* (substantive,
stable relation) and *un objeto plano* with *a plain object*
(attributive, permanent feature). The factor analysis in `ROADMAP.md`
Phase 6 indirectly tests this.

### 5.2 — Predicative *[an object is flat]* and economic discourse

Defended thesis 6 (autoreferat p. 9):

> *Имена, тяготеющие по данным корпусов к предикативной конструкции
> [an object is flat], объединены общей темой (экономика) и встречаются
> в экономическом дискурсе.*

The nouns that gravitate to the predicative `[an object is flat]`
construction concentrate in **economic discourse** — *the market is
flat*, *growth was flat*, *the curve is flat*. Golikova interprets
this as the linguistic consciousness ascribing a **temporal feature**
(relevant to a particular evolving situation) to economic concepts,
which the predicative construction is the natural conveyer of.

For Spanish: the same pattern is testable. *El mercado está plano*,
*el crecimiento es plano* are productive in Spanish economic news.
Whether *los impuestos* (taxes), *los ingresos* (income), *la
inflación* match Golikova's English list at the predicative pole is a
direct cross-linguistic comparison the project can make.

### 5.3 — *Level* as substantive classifier — the headline frequency datum

Defended thesis 5 (autoreferat p. 9), §2.5 (p. 17–18). The substantive
classifier `[the level of (Det) object]` and `[an object level]` is
**unusually high-frequency**. Numbers from COCA:

- **3,791** distinct noun types occur in `[a level of an object]`
  (out of 24,258 total occurrences of the construction).
- **2,714** distinct noun types in `[an object level]` (out of 30,261
  occurrences).
- The noun *level* itself is at **position 393** in COCA's top-5000
  word-frequency list (http://www.wordfrequency.info), **higher** than
  the canonical measure-classifier nouns *cup* (position 730), *box*
  (796), or *piece* (566) — referenced in Petrochenko & Zhukova 2015:
  27 as the prototypical measure classifiers.

The interpretation: *level* is a substantive classifier with both
predicative semantics (representing the categorised non-discrete
entity as a layer or flat surface) **and** locational semantics
(determining the entity's position relative to a chosen reference
plane). This dual function is in demand in the **genitive
construction** for categorising complex concepts and phenomena
nominalised by lexical units of **high abstraction in scientific
discourse**.

For Spanish: *nivel* in *nivel de + N* is the direct cognate. The
quantitative test for the Spanish project is whether *nivel* in
*Corpus del Español* shows the same dominance among substantive
classifiers as *level* does in COCA — and whether its frequency
exceeds *taza, caja, trozo* (the Spanish *cup, box, piece*) by a
comparable margin. If so, the *nivel de* dominance documented in
`notes/cryptoclasses/res-planae.md` (96 % of Spanish *Res Planae*
manual citations) is **not** an artefact of Spanish corpus collection
but a replication of an English-attested pattern.

### 5.4 — *Voice* — the unusual emonym-adjacent case

§2.7 (p. 19–20). *Voice* is highlighted as a near-perfect *Res Planae*
member because it occurs with **all four** attributive classifiers
(*level voice, plain voice, flat voice, even voice*) and all four
predicative classifiers (*voice is level / plain / flat / even*).

Cited examples:

- *He had a beautiful voice, a level, calm talking voice, just very
  soothing.*
- *I was comforted by his deep and even voice.*
- *This was related in a flat, passionless voice that seemed to drop
  the temperature on the room by fifty degrees.*
- *Ordinary lives, plain voices, rare detail, and I fall backwards
  into an England I never knew.*

The semantic projection: each adjective profiles a different sub-feature
of *Res Planae* — *level* = horizontal-orientation (calm, no spikes),
*even* = uniform (no irregularities), *flat* = non-volumetric
(monotone), *plain* = unremarkable (no relief). *Voice* therefore
acts as a near-prototype for the topotype.

For Spanish: the closest analogues would be *voz* (a voice can be
*plana, monótona, monocorde*) — but the Spanish equivalent of
*level* applied to voice is rare and *llana* is the dominant
adjective. This is one of the per-noun comparisons the per-emonym
files (`notes/donina-emonyms/`) should record if *voz* ever enters
scope.

### 5.5 — Quantitative apparatus — ИРа, ПоКА, СИ

Defended thesis 4 (excerpt) and §2.6 (p. 18–19). Golikova's formulas:

- **ПоКА (показатель криптоклассной активности / CAC)** — same
  formula as Boriskina (`notes/theory-boriskina.md` §9) and Donina
  (`notes/methodology-donina.md` §7.1). Reproduced verbatim:

> *Показатель криптоклассной активности (ПоКА) есть относительная
> величина, которая соответствует отношению количества примеров данного
> имени с классификаторами криптокласса к общему количеству примеров
> всех имён со всеми классификаторами криптокласса.*

- **ИРа (индекс разнообразия сочетаемости / IDC)** — same formula as
  Boriskina:

> *Индекс разнообразия сочетаемости (ИРа) представляет собой
> относительный показатель сочетаемости имени и соответствует отношению
> количества классификаторов, с которыми имя встречается в корпусе, к
> общему количеству классификаторов исследуемого криптокласса.*

- **СИ (сочетательная избирательность / combinatorial selectivity)**
  — newer term emphasised by Golikova. A name is *combinatorially
  selective* when it concentrates on **one (or two)** classifiers of
  the cryptoclass rather than spreading across all of them. For *Res
  Planae*: the selectivity is observed in attributive `[a plain
  object]`, `[a flat object]`, `[an even object]` and the substantive
  constructions `[the level of object]`, `[object level]`. High СИ
  acts as a **restraining factor** for new combinations: a noun
  already lexicalised in one classifier pattern is less likely to
  produce new combinations across the other classifiers of the same
  class.

The relationship between the three indices summarised: **high ПоКА +
low ИРа ⇒ high СИ** — the noun is heavily used in the class but only
through a narrow classifier subset. *Voice* is the contrary case
(average ПоКА but high ИРа, spreading across all classifiers — Donina
would call this *nuclear* status in the class).

### 5.6 — Connotation neutrality

Defended thesis 7 (autoreferat p. 9):

> *При языковой категоризации непредметных сущностей по образу и
> подобию объекта с ровно-плоской, горизонтально-ориентированной
> поверхностью вопрос оценки признака, приписываемого сущности в виде
> отрицательной или положительной коннотации, решается в контексте,
> выходящем за рамки синтаксической конструкции, классифицирующей
> обозначающую сущность имя.*

[+flat] in English has **neutral connotation**. Whether *a flat
market* / *a level playing field* / *plain truth* reads positively or
negatively is settled by context external to the classifying
construction.

For Spanish: the same neutrality is expected. *Un nivel de tristeza*
is neutral; whether it reads as concerning or as moderate depends on
context. This contrasts with [+sharp] (largely negative) and
[+graspable] (often positive — manageability).

---

## 6 — The revised feature hierarchy and where Res Planae sits

Defended thesis 8 (autoreferat p. 9–10) and §2.9 (p. 20–21). Golikova
revises the inter-class hierarchy by maximum ПоКА across the 500
analysed abstract nouns:

| Rank | Class | Feature | Share of names with max ПоКА in this class |
|---|---|---|---|
| 1 | Res Parvae | graspability (рукоятность) | **62 %** |
| 2 | **Res Planae** | flat horizontal surface | **26 %** |
| 3 | Res Acutae | sharpness (колкость) | 6 % |
| 4 | Res Liquidae | liquidity (текучесть) | 5 % |
| 5 | Res Longae Penetrantes | long-thin stable form | 1 % |
| 6 | Res Filiformes | thread-likeness | ≈ 0 % |
| 7 | Res Rotundae | round shape | ≈ 0 % |

The headline: **[+flat] is the second-most communicatively significant
classifying feature** for abstract reference in English, after
[+graspable]. Sub-shares:

- Names with Res Parvae as max-ПоКА class — 62 % of the 500-noun pool.
- Names with **Res Planae as max-ПоКА class — 26 %** of the pool.
- Names with Res Acutae as max — 28 (6 %).
- Names with Res Liquidae as max — 22 (5 %).
- Names with Res Longae Penetrantes as max — 4 (1 %).
- Res Filiformes and Res Rotundae — *статистически незначимы*
  (statistically insignificant share).

**Conflict with Donina.** `notes/methodology-donina.md` §0 records
Donina's thesis 5 as ranking `Res Parvae > Res Liquidae > Res Acutae >
Res Filiformes > Res Longae Penetrantes > Res Rotundae` for English
emonyms. Golikova's ranking is for **500 abstract nouns**, not for the
23 emonyms, so the two are not directly comparable: Donina's emonyms
are a *biased subset* of abstract nouns (emotionally charged ones), and
emotion-language may prefer *Res Liquidae* and *Res Acutae* over *Res
Planae* even when the broader abstract-noun pool inverts the order.
The two findings are reconciled by stratifying:

- **All abstract nouns** (Golikova 500): Parvae > **Planae** > Acutae >
  Liquidae > Longae Penetrantes > Filiformes / Rotundae.
- **Emonyms only** (Donina 23): Parvae > Liquidae > Acutae > Filiformes
  > Longae Penetrantes > Rotundae.

This stratification is itself a finding worth flagging in the Spanish
write-up: the cryptoclass-preference profile of emonyms is **not**
representative of the cryptoclass-preference profile of abstract nouns
generally. The Spanish project, being emonym-focused, should expect
Donina's ranking to govern, with *Res Planae* potentially playing a
larger role than in Donina's English data only **if** Spanish emonyms
behave differently from English emonyms in this respect. *Nivel de
miedo* (Spanish) vs. *level of fear* (English) is the controlled
comparison.

### 6.1 — Cryptoclass cascades (фрагмент Рис. 3)

Autoreferat Рис. 3 (p. 21) shows a fragment of the **taxonomic
classification by descending ПоКА** for selected names. The picture
gives per-noun cryptoclass chains:

- *health* — **Res Planae > Res Filiformes > Res Parvae > Res
  Liquidae**.
- *support* — **Res Planae > Res Liquidae > Res Rotundae > Res
  Filiformes**.
- *prospect, fame, fee, popularity, conduct, entertainment* — share
  the chain **Res Planae > Res Liquidae** (two-feature profile).
- *right, peace, happiness, environment, achievement, freedom* —
  share **Res Planae > Res Liquidae > Res Filiformes** (three-feature
  profile).
- *enthusiasm, respect, tax* — share **Res Planae > Res Liquidae > Res
  Filiformes > Res Acutae**.
- *terror, crime, experience, knowledge* — Res Acutae-dominant chain.
- *fear, language, anger, talk* — share a Res Rotundae secondary
  placement.

The diagnostic chains for **emotion nouns** visible in the figure
(emotion-relevant ones bolded):

| Emotion noun | Chain (Golikova, English) |
|---|---|
| **fear** | (Res Acutae) → Res Longae Penetrantes → Res Rotundae |
| **anger** | (Res Acutae) → Res Longae Penetrantes → Res Rotundae |
| **terror** | Res Acutae → Res Longae Penetrantes → Res Rotundae → Res Filiformes |
| **happiness** | Res Planae → Res Liquidae → Res Filiformes |
| **peace** | Res Planae → Res Liquidae → Res Filiformes |

The autoreferat does not list *love, joy, grief, sadness* in this
figure (positive emotions like *happiness* are present; the precise
chain for *love* is in the full dissertation, not the autoreferat).

**For the Spanish project**, the *miedo / ira / tristeza / amor /
alegría* chains will be one of the central outputs. The English
benchmarks above are the direct cross-linguistic comparators:

- Spanish *miedo* expected to mirror English *fear*: Res Acutae-led
  with secondary Res Longae Penetrantes / Rotundae. The manual data
  shows *miedo* with strong **Res Planae** presence (93 *nivel de
  miedo* citations) — a Spanish-specific deviation worth verifying at
  scale.
- Spanish *ira* expected to mirror English *anger*: Res Acutae-led.
  Manual data shows zero Acutae for *ira* — flagged in
  `notes/cryptoclasses/res-planae.md` as a discrepancy whose
  resolution awaits the pipeline.
- Spanish *alegría* expected to mirror English *happiness*: Res Planae
  → Res Liquidae → Res Filiformes. The Spanish *Res Planae* presence
  for *alegría* is small (25 citations); whether this scales up is
  open.

---

## 7 — Methodology summary (for cross-reference)

The autoreferat (p. 7) lists Golikova's methods, all standard and
inherited from Boriskina / Donina:

- **Linguistic observation method**.
- **Descriptive method**.
- **Corpus methods**.
- **Distributional analysis** of nouns.
- **Lexico-syntactic and semantic analysis** of cryptoclass classifiers.
- **Cryptoclass analysis** of data.
- **Quantitative methods** — ПоКА, ИРа, СИ; no Pearson, Kendall, Varimax,
  k-means or SOM (those are Donina's instruments for the cross-variant
  layer that Golikova does not address).

Golikova does **not** address areal variation. Her 500-noun analysis
pools all variants of English. The cross-variant statistics remain
Donina's contribution; Golikova's contribution is per-noun (and
per-classifier) at the construction level.

For the Spanish project, the methodological consequence is that
Golikova's instruments enter at the **per-noun** layer (computing СИ
for each Spanish emonym in *Res Planae*) and Donina's instruments at
the **cross-variant** layer (Pearson / Kendall / Varimax on the 21
variants). There is no double-counting.

---

## 8 — Action items for the Spanish project

These should be reflected in `ROADMAP.md` and the relevant per-class
notes.

1. **Correct the framing of *Res Planae* as Spanish-specific.**
   ✅ **Done** (together with the *Res Continens* correction prompted by
   Zadobrivskaya 2019). The "Spanish-specific" labels were removed
   across `CLAUDE.md`, `data/cryptoclasses.tsv`, `notes/README.md`,
   `notes/cryptoclasses/{README,res-planae,res-continens}.md`,
   `notes/theory-boriskina.md`, `notes/methodology-donina.md`,
   `notes/glossary.md`, `ROADMAP.md`, and `notes/donina-emonyms/fear.md`.
   The correct framing is: *Res Planae* was established for **English**
   by Golikova 2018 and *Res Continens* by Zadobrivskaya 2019; the
   Spanish project adopts the full 8-class English inventory and has
   **no Spanish-specific cryptoclass** — only two extra classes beyond
   Boriskina's six whose *weight in the Spanish profile* it must defend.

2. **Add Golikova's English classifier inventory to the cryptoclass
   files** as the comparator for the Spanish inventory. Specifically:
   the four English adjectives *flat, plain, level, even* across the
   three construction types (attributive, predicative, substantive)
   are the calibrating standard for the Spanish *plano, llano, liso* +
   *nivel de* inventory.

3. **Reuse the typological warrant** (Pular-Fulfulde *NGO*, Japanese
   *枚*) for the Spanish *Res Planae* defence. Cite Golikova rather
   than reconstructing.

4. **Add a `notes/glossary.md` entry for [[topotype]]** (топотип) and
   for [[nominal-classificativity]] (именная классификативность).
   These are Golikova's contributions to the framework's vocabulary.

5. **Test the construction-type semantics replication** in Spanish:
   does attributive *un objeto plano* concentrate phraseologised
   uses, predicative *el objeto es plano* concentrate innovative /
   economic uses, substantive *el nivel de* concentrate
   stable-relation uses? This is a concrete prediction the pipeline
   can test.

6. **Verify *nivel* frequency in *Corpus del Español***. Golikova's
   COCA datum (3,791 nouns in `[a level of N]`, *level* at position
   393 in top-5000) is replicable in Spanish: count distinct N tokens
   in `nivel de + N` across *Corpus del Español: Web/Dialects* and
   position *nivel* in the Davies Spanish frequency dictionary. If
   *nivel* sits comparably high, the dominance of *nivel de* in the
   Spanish manual data is **not** an artefact of collection.

7. **Stratify Donina's hierarchy from Golikova's**: the published
   Spanish results should report both — the cryptoclass-preference
   profile of the project's emonyms (Donina-style) and the
   cryptoclass-preference profile of a wider Spanish abstract-noun
   pool if one is collected (Golikova-style).

8. **Source the full Golikova dissertation** when possible. The
   autoreferat carries the headline numbers and the structure; the
   full dissertation will carry:
   - The complete per-noun ПоКА tables for the 500 analysed names.
   - The per-construction frequency distributions referenced in §2.6.
   - The full *health, support, prospect, peace, happiness* cascades
     visible only as fragments in autoreferat Рис. 3.
   - The COEL deposition pointers for verifying current data.

   The autoreferat references the work as accessible via the VSU
   library; the project should attempt to obtain the full PDF.

---

## 9 — Publications by Golikova listed in the autoreferat

The autoreferat (p. 25–27) lists 12 publications. The five
peer-reviewed (ВАК-recognised) are the most citable:

1. Голикова О.А. **К вопросу о выявлении именного криптокласса «Res
   Planae»** // Когнитивные исследования языка. 2014. № XVI. С. 132–140.
2. Голикова О.А. **Атрибутивная и предикативная конструкции с
   английским прилагательным *flat*** // Вестник ВГУ. Лингвистика и
   межкультурная коммуникация. 2015. № 2. С. 48–51.
3. Голикова О.А. **Скрытая категоризация: к вопросу о классифицирующей
   функции генитивной конструкции [N1 OF N2] в английском языке** //
   Когнитивные исследования языка. 2017. № 30. С. 102–105.
4. **Борискина О.О., Голикова О.А.** **Именная классификативность и её
   интерпретация в лингвистической теории** // Вестник ВГУ. Лингвистика
   и межкультурная коммуникация. 2017. № 1. С. 11–16.
5. Голикова О.А., Курилов Д.О. **Связь представления о топологическом
   типе объекта с системообразующими критериями построения именной
   классификации: к вопросу о скрытой категоризации имён** // Вестник
   ВГУ. Лингвистика и межкультурная коммуникация. 2017. № 4. С. 51–55.

Items 4 and 5 are the joint papers establishing the *именная
классификативность* and *topotype × cryptoclass* linkages — the most
useful direct references for the Spanish project's framework section.

---

## 10 — Source-page reading map

For future sessions that need to verify against
`references/Автореферат_Голикова_О.А..pdf`:

| Topic | Pages |
|---|---|
| Title page, advisor, opponents | 1–2 |
| Общая характеристика работы / context of the work | 3–5 |
| Goal, tasks (9), corpora (6) | 6–7 |
| Object, subject, defended theses (8) | 7–10 |
| Scientific novelty, theoretical and practical significance | 10–11 |
| Approbation (12 conferences, 5 ВАК papers) | 11 |
| Structure of the work | 11–12 |
| Глава 1 (Theory and methodology) | 12–15 |
| §1.1 Categoriality / categories | 12–13 |
| §1.2 Classificativity and Vinogradov scale | 13 |
| §1.3 The seven cryptoclass characteristics (after Boriskina/Kretov) | 13–14 |
| Worked classifier-construction examples (4 types for English Res Planae) | 15 |
| Глава 2 (Res Planae empirical) | 15–22 |
| §2.1 Typological justification (Pular-Fulfulde, Japanese) | 15–16 |
| §2.2 Classifier inventory and construction-type semantics | 16–17 |
| §2.3 Attributive classifiers | 17 |
| §2.4 Predicative classifiers | 17 |
| §2.5 Substantive classifiers — `[the level of object]` deep dive | 17–18 |
| §2.6 Quantitative — СИ, ПоКА, ИРа | 18–19 |
| §2.7 *Voice* case study | 19–20 |
| §2.8 Cognitive foundations of the cryptoclass | 20 |
| §2.9 Integration into the cryptoclass system; Рис. 2 and Рис. 3 | 20–21 |
| Рис. 3 — fragment of the taxonomic classification (cryptoclass chains) | 22 (figure on page 22 separately) |
| Заключение | 22–25 |
| Publications | 25–27 |

---

## 11 — One-paragraph summary for fast lookup

Golikova (2018) extends Boriskina's six-class English cryptoclass
inventory by introducing a **seventh class — *Res Planae*** —
categorising abstract nouns by analogy with objects bearing a flat,
horizontally-oriented surface. The class is justified typologically by
overt flat-shape classifiers in Pular-Fulfulde (the *NGO* singular
class) and Japanese (the *枚 / mai* numeral suffix), in line with
Kretov's (2010) cross-language criterion. The classifier inventory in
English consists of four adjective stems (*flat, plain, level, even*)
populating attributive, predicative, and substantive constructions;
the substantive *the level of N* is unusually high-frequency in COCA
(3,791 distinct N types, with *level* at position 393 in the top-5000
list — above *cup, box, piece*). Construction-type semantics replicate
Kustova 2007: attributive ⇒ permanence ("dead-end" phraseologisation),
substantive ⇒ stability of relations, predicative ⇒ temporality
("laboratory" for new senses). Quantitatively, **[+flat] is the
second-most communicatively significant feature** for English abstract
nouns after [+graspable]: 26 % of 500 abstract nouns have *Res Planae*
as their max-ПоКА class (vs. 62 % for *Res Parvae*). The
cryptoclass-theory contribution is the explicit linkage of *cryptoclass*
to Rakhilina's *topotype* — cryptoclasses are covert reflexes of the
cognitively distinctive topological types that language overtly
classifies elsewhere. For the Spanish project this revises the
inventory framing (Res Planae is **English-attested since 2018**, not
Spanish-specific; and Res Continens is likewise English-attested since
2019 per Zadobrivskaya — so the project has **no** Spanish-specific
class, only two extra classes beyond Boriskina's six), supplies the
classifier template the Spanish *plano / llano / liso* +
*nivel de* family should be calibrated against, and predicts that the
construction-type semantics (permanence / stability / temporality) and
the *nivel*-as-frequent-substantive-classifier datum should replicate
in *Corpus del Español*.
