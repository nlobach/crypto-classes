# Glossary — Russian / English / Spanish

Trilingual reference for the cryptoclass framework as applied to Spanish.

- **Russian** is the **canonical** form — the dissertations of Boriskina (2011)
  and Donina (2016) are written in Russian, and the terminology is theirs.
  Quoting their definitions in Russian is therefore citation-grade.
- **English** is the **working** language of these `notes/` files. English
  glosses follow the Russian where one is established in the literature
  (Whorf's *cryptotype*, *covert category*; Boriskina's published English
  abstracts; Donina's translated abstract); otherwise the gloss is a literal
  rendering by the project.
- **Spanish** is **provisional** and marked *(?)* until confirmed with the
  user's advisor. Where Spanish-language linguistics already has a settled
  equivalent (e.g. *clase encubierta* for *скрытый класс*), it is used; where
  no equivalent exists, a literal calque is offered and flagged.

The glossary is not exhaustive — it captures the terms that appear repeatedly
in the source dissertations or that this project relies on. Linked references
in `[[brackets]]` point to the slug of another entry in this file or to a
companion notes file (e.g. `[[theory-boriskina#§1.3]]`).

For the formal indices (ИРа, ПоКА, СИ) and the construction-type vocabulary,
this file is the canonical project reference — `notes/theory-boriskina.md`
derives them, and `data/SCHEMA.md` operationalises the construction types in
the citation table.

---

## How to read each entry

Each entry has the shape:

```
### {English heading}
- **RU**: {канонический термин}, optional: {синонимы}
- **EN**: {English working term}, optional: {English synonyms}
- **ES**: {término en español} *(provisional, unless marked confirmed)*
- **Source**: {Boriskina §x.y, p.N | Donina §x.y, p.N | Whorf 1956: N | …}
- **Definition**: {one-paragraph definition, ideally with the source's wording
  preserved as a Russian or English quote in italics}
- **Notes**: {usage notes, distinctions from neighbouring terms,
  cross-references}
```

---

## 1 — Foundational terms

### Cryptoclass
- **RU**: криптокласс
- **EN**: cryptoclass; sometimes *covert class*
- **ES**: criptoclase *(?)*; also encountered: *clase encubierta*, *clase
  oculta*
- **Source**: Boriskina 2011, p. 4 (glossary); §1.2 (characteristics, p. 42);
  Donina 2016, p. 345 (glossary)
- **Definition**: *Лексико-грамматическая категория существительного,
  состоящая в распределении имён по классам в соответствии с семантическими
  признаками при обязательной выраженности классной принадлежности имени в
  структуре предложения через классификатор (словоформу или конструкцию) и
  имеющая соответствие в явной грамматической категории хотя бы одного языка
  мира* (Donina 2016: 345). A lexico-grammatical category of the noun in
  which nouns are sorted into classes by semantic features; class membership
  is obligatorily expressed *in the structure of the sentence* through a
  [[classifier]] (a word-form or a construction), and the class must have a
  correlate in the overt grammatical system of at least one other language.
- **Notes**: The "correspondence in another language" clause is what
  Boriskina calls the *contrastive principle* (1.2.1) — it grounds the
  cryptoclass typologically and prevents arbitrary class invention. Boriskina
  identifies six cryptoclasses for English (Res Liquidae, Res Filiformes,
  Res Rotundae, Res Longae Penetrantes, Res Acutae, Res Parvae); this project
  extends the set with two for Spanish ([[Res Continens]], [[Res Planae]]),
  whose status is subject to factor-analysis confirmation per the Donina
  algorithm. The Latin names are *never* translated — they are neutral across
  Russian, English, and Spanish.

### Covert categoriality / hidden categoriality
- **RU**: скрытая категориальность; скрытая категоризация
- **EN**: covert categoriality; covert categorisation
- **ES**: categorialidad encubierta *(?)*; categorización encubierta *(?)*
- **Source**: Boriskina 2011, p. 5 (Введение); §1.1 (history, p. 18);
  Donina 2016 §1.5, p. 40
- **Definition**: The phenomenon by which a language sorts its nouns (or
  other categories) into classes without dedicated overt morphology, so that
  class membership shows up only in selectional patterns. Boriskina, following
  Bondarko and ultimately Potebnya, defines *категориальность* as *способ
  представления «внеязычного содержания» в виде разрядов слов* — "the way of
  representing extra-linguistic content as classes of words." The *скрытая*
  (hidden) form is the case where this representation lacks a morphological
  marker on the noun itself.
- **Notes**: This is the genus; *cryptoclass* is the species. Whorf coined
  the original English term *covert categories* in his posthumous 1956
  volume; the Russian *скрытая* tradition descends through Katznelson
  (Кацнельсон 1972), Bondarko, and Vinogradov.

### Cryptotype
- **RU**: криптотип
- **EN**: cryptotype
- **ES**: criptotipo *(?)*
- **Source**: Whorf 1956: 132, 78; quoted in Boriskina 2011 §1.1, p. 22
- **Definition**: Whorf's original term for what later Russian work calls a
  cryptoclass. *"Cryptotypes — covert word categories with subtle meaning
  marked only by reactances"* (Whorf 1956: 132).
- **Notes**: *Reactance* in Whorf's chemistry-influenced terminology is the
  property of a word that governs the selection of other words it appears
  with. Boriskina treats *reactance* as essentially the same phenomenon as
  *семантическое согласование* (semantic concord) in Russian work. The
  information system housing this project's predecessor is called *ИС COEL*
  — "Cryptotypes of the English Language" — using Whorf's term in the URL
  (rgph.vsu.ru/coel/).

### Classifier
- **RU**: классификатор
- **EN**: classifier
- **ES**: clasificador *(?)*
- **Source**: Boriskina 2011 §1.2.5, p. 61; §1.3
- **Definition**: A discursive means of signalling the class membership of a
  noun. In Boriskina's broad sense, a classifier can be (a) a morpheme,
  (b) a word-form (typically a predicate word like a verb or adjective whose
  selectional semantics presuppose a class feature on its argument), or (c)
  a syntactic construction. The cryptoclass is **diagnosed by a set of
  classifiers** — there is no single morphological diagnostic.
- **Notes**: In typology, *classifier* often refers narrowly to numeral
  classifiers (Aikhenvald 1998). Boriskina uses it more broadly, in line
  with Vinogradov's gradient scale of classificativity (see
  [[scale-of-classificativity]]). For Spanish, the classifier set per
  cryptoclass is the project's central inventory — captured per class in
  `notes/cryptoclasses/<class>.md` (to be created) and seeded by the column
  headers of the legacy `.xlsx` files.

### Collostruction
- **RU**: коллострукция (колло[кация] + кон[струкция])
- **EN**: collostruction (collo[cation] + con[struction])
- **ES**: colostrucción *(?)*; also encountered: *coloestructura*
- **Source**: Boriskina 2011 p. 4; cf. Stefanowitsch & Gries 2003 for the
  related English-language tradition
- **Definition**: *Лексико-синтаксический конструкт, отражающий реализацию
  семантико-синтаксической валентности коллокатов (признаковых слов и имен
  существительных), удобный для записи проявлений скрытой классификативности
  имён, записывается в виде [N flows]* (Donina 2016: 345). A
  lexico-syntactic construct that records the realisation of the
  semantico-syntactic valency of collocates (predicate words and nouns).
  Written in square brackets, with the noun slot abstracted: `[X flows]`,
  `[un objeto agudo perfora algo]`. The collostruction is the **unit of
  analysis** in cryptoclass research — the noun in question is tested by
  whether it can fill the X slot.
- **Notes**: Boriskina's term is independently coined and the spelling differs
  slightly from Stefanowitsch & Gries (who write *collostruction* with the
  same coinage logic — *collo[cation] + con[struction]* — but for a different
  statistical purpose). The shared terminology is acknowledged in her gloss
  (`ср. collostruction – collo-cation + con-struction`). In this project's
  data, the operational equivalent is the `(classifier_lemma,
  construction_type)` pair recorded per citation in `data/citations.tsv`.

### Classifier-construction (диагностирующая коллострукция)
- **RU**: диагностирующая коллострукция
- **EN**: diagnostic collostruction
- **ES**: colostrucción diagnóstica *(?)*
- **Source**: Boriskina 2011 §1.3, multiple
- **Definition**: A collostruction whose presence in a corpus is evidence for
  the noun's membership in a given cryptoclass. Not every classifier is
  equally diagnostic — Boriskina ranks them by their statistical association
  with class members and their selectional restrictiveness.
- **Notes**: This is what makes the classifier inventory operational rather
  than ornamental. The seven (now twelve, per `data/SCHEMA.md`) construction
  types are not all equally diagnostic for every class — see
  `notes/cryptoclasses/<class>.md` (TBD) for per-class diagnosticity.

### Construction type (тип конструкции)
- **RU**: тип конструкции (also: грамматическая модель коллострукции)
- **EN**: construction type
- **ES**: tipo de construcción
- **Source**: derived across Boriskina §1.3 and §2.1 — §2.6
- **Definition**: The syntactic shape of a collostruction. Boriskina's
  original English typology distinguishes verbal subject-transitive,
  subject-intransitive, objective, instrumental, attributive, predicative,
  and substantive types (7). This project's working schema (`data/SCHEMA.md`)
  extends this to twelve slugs to accommodate Spanish-specific phenomena
  (e.g. *Res Continens* requires splitting the locative into state, motion-in,
  and motion-out), plus an `idiomatic` slug and a parked `disputed`.
- **Notes**: The mapping between Boriskina's seven and this project's twelve
  is in `data/SCHEMA.md` §"Construction-type controlled vocab". See
  [[construction-types]] below for the full list and Spanish/Russian
  alignment.

### Metaphoronym
- **RU**: метафороним криптокласса
- **EN**: metaphoronym
- **ES**: metaforónimo *(?)*
- **Source**: Boriskina 2011 p. 4; §1.2.3, p. 47–48; Donina 2016 p. 346
- **Definition**: *Имя существительное абстрактной семантики, которое
  относится к именному криптоклассу на основании его метафорической
  категоризации по аналогии с эталоном криптокласса* (Boriskina 2011: 4). An
  abstract-semantics noun that is included in a cryptoclass through
  *metaphorical categorisation by analogy with the class prototype*. The
  metaphoronyms of *Res Liquidae* are the abstract nouns that pattern with
  the liquid classifiers (*fear pours, anger floods*), as opposed to the
  prototype member *water* itself.
- **Notes**: Crucial distinction from a generic "member of the class":
  metaphoronyms are by definition *non-object* (непредметные) nouns —
  emonyms, mental-state nouns, ideational nouns — that join the class
  metaphorically. The class prototype itself is the [[prototype]] (эталон),
  not a metaphoronym.

### Prototype (of a cryptoclass)
- **RU**: эталон криптокласса; имя-эталон
- **EN**: prototype; class prototype; class exemplar
- **ES**: prototipo de criptoclase *(?)*; arquetipo *(?)*
- **Source**: Boriskina 2011 §1.2.3, p. 47
- **Definition**: The concrete noun that designates the object whose
  perceptual features motivate the class. *Water* is the prototype of
  *Res Liquidae*, *needle* of *Res Acutae*, *ball* of *Res Rotundae*, etc.
  The class is then populated by abstract nouns ([[metaphoronyms]]) that
  enter via analogy with the prototype.
- **Notes**: Different from a Roschean prototype in cognitive psychology —
  here it is specifically the *object* exemplar whose perceptual properties
  the language generalises. Boriskina uses the term in the Latin form
  *эталон* (literally "standard, benchmark"). For Spanish, the prototypes
  are: *agua* (Liquidae), *hilo* (Filiformes), *pelota* (Rotundae), *lanza*
  (Longae Penetrantes), *aguja* (Acutae), *piedra* (Parvae), and the
  Spanish-specific *recipiente* / *caja* (Continens), *superficie* / *plano*
  (Planae).

### Emonym
- **RU**: эмоним
- **EN**: emonym
- **ES**: emónimo *(?)*; nombre de emoción *(?)*
- **Source**: Donina 2016 p. 346 (glossary); §2.1
- **Definition**: *Название эмоции; термин, позволяющий разграничить название
  эмоции и само чувственное переживание* (Donina 2016: 346). The **name** of
  an emotion, as a linguistic object — distinct from the emotional experience
  itself. The terminological move is deliberate: the dissertation studies
  *the noun*, not the felt state.
- **Notes**: Donina's 23 English emonyms: *emotion, feeling, hope, surprise,
  anger, passion, happiness, interest, fear, joy, grief, sympathy, terror,
  pleasure, love, pride, pity, relief, concern, distress, shame, guilt,
  anxiety*. This project's current four Spanish emonyms (per CLAUDE.md):
  *miedo, tristeza, amor, alegría*, with extension up to ~15–25 planned per
  `ROADMAP.md` Phase 4.

### Non-object noun / abstract noun (непредметное имя)
- **RU**: непредметное имя; абстрактное имя; nomen abstractum
- **EN**: non-object noun; abstract noun
- **ES**: nombre no-objetal *(?)*; nombre abstracto
- **Source**: Boriskina 2011 §1.2.2 (p. 50–54)
- **Definition**: A noun whose denotation is not a perceptually accessible
  physical object — e.g. *fear, love, hope, freedom*. Boriskina argues
  following Chernyko, Morkovkin, Uspensky, and Kubryakova that abstract
  nouns *can be classified* in the same way as object nouns, *because* they
  borrow the material features of objects through metaphor. This is the
  mechanism by which they join cryptoclasses.
- **Notes**: Uspensky's concept of [[veshchnaya-konnotaciya]] (вещная
  коннотация, "material connotation") underwrites this — an abstract noun
  in context behaves as if it were a material object of a specific kind.
  See Boriskina §1.2.2, citing Uspensky 1997: 151.

### Material connotation (вещная коннотация)
- **RU**: вещная коннотация
- **EN**: material connotation; thing-connotation
- **ES**: connotación material *(?)*
- **Source**: Uspensky 1997: 151, cited in Boriskina 2011 §1.2.2, p. 54
- **Definition**: Uspensky's notion that an abstract noun, in context, can
  combine with predicates as if it denoted a specific kind of material
  object: in *погружён в горе* ("immersed in grief"), the material
  connotation of *горе* is "a large body filled with liquid." The
  combinatorics of the abstract noun reveal an implicit material image.
- **Notes**: Boriskina uses this to bridge from concrete-noun classification
  to abstract-noun cryptoclass membership. It is the conceptual ancestor of
  the [[metaphoronym]].

### Predicate word (признаковое слово)
- **RU**: признаковое слово
- **EN**: predicate word; feature-word
- **ES**: palabra de rasgo *(?)*; palabra predicativa *(?)*
- **Source**: Boriskina 2011 §1.1, multiple
- **Definition**: A word — typically a verb or adjective — whose lexical
  semantics encodes a feature that it imposes on (or requires of) its
  argument. *Liquid-only* verbs like *flow, pour, spill* are predicate words
  diagnostic of *Res Liquidae*. The Russian tradition (Apresyan, Arutyunova,
  Morkovkin) treats predicate words as the linguistic vehicle for revealing
  class features that are themselves not morphologically marked.
- **Notes**: Same role as Whorf's *reactance* word and as a classifier in
  the broad sense — the Russian term emphasises the *semantic* mechanism,
  the English emphasises the syntactic/selectional one.

### Cryptoclass projection (of a noun)
- **RU**: криптоклассная проекция имени
- **EN**: cryptoclass projection of a noun
- **ES**: proyección criptoclase del nombre *(?)*
- **Source**: Boriskina 2011 p. 4; Donina 2016 p. 345
- **Definition**: *Факт вхождения имени в определённый криптокласс (ИРа > 0,
  ПоКА > 0)* (Boriskina 2011: 4). The fact of a noun's membership in a given
  cryptoclass, operationalised as **both** indices being strictly positive.
- **Notes**: A noun typically projects into more than one cryptoclass — that
  is the central observation Boriskina turns into a research programme (see
  §3, criptoclass portraits). Donina simplifies the condition to ПоКА > 0
  in her glossary.

### Cryptoclass portrait
- **RU**: криптоклассный портрет имени
- **EN**: cryptoclass portrait
- **ES**: retrato criptoclase del nombre *(?)*
- **Source**: Boriskina 2011 p. 4; §3.1, p. 279; Donina 2016 p. 346 (also
  treated in §1.10 and Chapter 2 of Donina)
- **Definition**: The complete picture of a noun's distribution across all
  cryptoclasses of a language, typically visualised graphically (radar plot,
  heatmap). The portrait is the central output of the cryptoclass method —
  it answers the question *"how does this noun pattern in the hidden
  categorisation system?"*
- **Notes**: For Donina (and this project), a portrait is parameterised by
  language variant — a single emonym has *N* portraits where *N* is the
  number of variants. The cross-variant comparison of portraits is the
  scientific output of Phase 6 in `ROADMAP.md`.

### Contrastive principle of cryptoclass identification
- **RU**: контрастивный принцип выявления криптокласса
- **EN**: contrastive principle
- **ES**: principio contrastivo *(?)*
- **Source**: Boriskina 2011 §1.2.1, p. 44; Kretov 2010a
- **Definition**: To posit a cryptoclass in language *L*, one must show that
  the class has a correlate as an overt category in some other language. Class
  *Res Acutae* is admissible for English because grammatical gender or noun
  class in other languages marks "sharp" objects. Whorf made the same demand
  for Navajo's covert "round" / "long" classes.
- **Notes**: This is what Boriskina's definition (above) means by "имеющая
  соответствие в явной грамматической категории хотя бы одного языка мира."
  For this project, the test for *Res Continens* and *Res Planae* is whether
  some language treats containers / flat-surfaces as a distinct gender or
  noun-class — see `notes/cryptoclasses/_inventory-decisions.md` (TBD).

---

## 2 — Cryptoclass inventory

The eight cryptoclasses used in this project. Latin names are canonical and
*never translated*. Each entry lists the prototype noun in Russian, English,
and Spanish, plus the project's data-file pointer.

### Res Liquidae
- **Prototype**: вода / water / *agua*
- **Boriskina chapter**: 2011 §2.1, pp. 81–141
- **Donina coverage**: full (one of the six inherited classes)
- **Project data**: `RES LIQUIDAE.xlsx` (long-form schema — see
  `data/SCHEMA.md`); ~1,100 citations pending extraction; the most data-rich
  class in the manual gold set.
- **Core image**: liquid that can flow, fill containers, be drained, mixed,
  poured, drowned in.
- **Diagnostic classifiers (Spanish seeds)**: *fluir, brotar, derramar,
  desbordar, inundar, ahogarse en, gota de, ola de, marea de, llenar de*.

### Res Filiformes
- **Prototype**: нить / thread / *hilo*
- **Boriskina chapter**: 2011 §2.2, pp. 142–176
- **Project data**: `Res Filiformes.xlsx`
- **Core image**: thread that can be spun, tangled, woven, unravelled, broken,
  pulled taut.
- **Diagnostic classifiers (Spanish seeds)**: *hilo de, tejer, hilar, enredar,
  trenzar, romper, anudar*.

### Res Rotundae
- **Prototype**: мяч (also: круглое) / ball, round thing / *pelota*, *bola*
- **Boriskina chapter**: 2011 §2.3, pp. 177–191
- **Project data**: `Res Rotundae.xlsx`
- **Core image**: ball/round object that can be rolled, bounced, thrown,
  caught, kicked, spun.
- **Diagnostic classifiers (Spanish seeds)**: *rodar, girar, lanzar,
  bola de, esfera de, redondo, círculo de*.

### Res Longae Penetrantes
- **Prototype**: копьё / spear, lance / *lanza*
- **Boriskina chapter**: 2011 §2.4, pp. 193–224 *(also written "Penetrantes"
  without "Longae" in the legacy filename — same class)*
- **Project data**: `Res Penentrantes.xlsx` *(sic — filename typo preserved
  per CLAUDE.md)*
- **Core image**: a long thin object stably penetrating, thrown at a target,
  embedded.
- **Diagnostic classifiers (Spanish seeds)**: *atravesar, traspasar,
  perforar, clavar, lanzar, hundir(se) en*.

### Res Acutae
- **Prototype**: игла, шип / needle, thorn / *aguja*, *espina*
- **Boriskina chapter**: 2011 §2.5, pp. 227–248
- **Project data**: `Res Acutae.xlsx`
- **Core image**: sharp object that pricks, pierces, cuts.
- **Diagnostic classifiers (Spanish seeds)**: *pinchar, punzar, clavarse en,
  cortar, herir, afilado, punzante, cortante*.
- **Donina note**: in her ranking of cryptoclass weight across English
  variants, Res Acutae is the third-strongest (Donina 2016, p. 10, item 5).

### Res Parvae
- **Prototype**: камень / pebble, small graspable object / *piedra*
- **Boriskina chapter**: 2011 §2.6, pp. 249–273
- **Project data**: `Res Parvae.xlsx`
- **Core image**: a small, manipulable object — taken in the hand, thrown,
  carried, gathered.
- **Diagnostic classifiers (Spanish seeds)**: *agarrar, coger, tomar,
  pequeño, granito de, puñado de, lanzar*.
- **Donina note**: Donina identifies Res Parvae as *the dominant* cryptoclass
  for emonyms across English variants — *"то, что можно взять в руку"*,
  "what can be taken in the hand," is the most anthropocentric and therefore
  most preferred class for emotional concepts (Donina 2016, p. 10, item 6).
  Expectation: Spanish should pattern similarly, but this must be verified.

### Res Continens — Spanish-specific
- **Prototype**: вместилище / container / *recipiente*, *caja*
- **Boriskina chapter**: not in Boriskina (no English equivalent class)
- **Project data**: `RES CONTINENS.xlsx`
- **Core image**: container that can be filled, emptied, sealed, opened;
  one can be inside, fall into, escape from.
- **Diagnostic classifiers (Spanish seeds)**: *envuelto en, lleno de, vacío
  de, sumido en, salir de, encerrado en, contenido en, en el fondo de*.
- **Status**: provisional; admitted on the contrastive principle (containers
  receive distinct gender/class marking in some languages) and on prima
  facie Spanish corpus evidence. Subject to factor-analysis confirmation in
  Phase 7 (per `notes/plan-from-scratch.md`).

### Res Planae — Spanish-specific
- **Prototype**: плоскость, ровная поверхность / flat surface, plane /
  *superficie*, *plano*
- **Boriskina chapter**: not in Boriskina
- **Project data**: `Res Planae.xlsx`
- **Core image**: flat surface with levels, depths, heights, layers; can be
  measured, walked on, layered.
- **Diagnostic classifiers (Spanish seeds)**: *nivel de, capa de, profundo,
  plano, superficial, llano, en la superficie de*.
- **Status**: provisional; same caveat as [[Res Continens]].

---

## 3 — Indices and quantitative measures

### ИРа — index of combinatorial diversity (IDC)
- **RU**: ИРа — индекс разнообразия (сочетаемости имени с классификаторами
  криптокласса)
- **EN**: IDC — index of (combinatorial) diversity; combinatorial diversity
  index
- **ES**: IDC *(?)*; índice de diversidad combinatoria *(?)*; *ИРа* in
  Spanish-language work also occurs untranslated
- **Source**: Boriskina 2011, p. 4 (glossary); §1.3 (formula and motivation)
- **Formula**: `Q̂ᵢ = Qᵢ / M`, where
  - `Qᵢ` = number of distinct classifiers (of the cryptoclass) with which
    noun *i* co-occurs in the corpus
  - `M` = total number of classifiers in the cryptoclass
  - `Q̂ᵢ` is normalised to (0, 1)
- **Definition**: *Показывает отношение количества классификаторов, с
  которыми имя встречается в корпусе, к общему количеству классификаторов
  криптокласса* (Boriskina 2011: 4). What share of the class's classifier
  inventory the noun actually combines with.
- **Notes**: High ИРа = the noun reaches *many* of the class's diagnostic
  positions. Low ИРа = the noun reaches only a handful, possibly only the
  most generic ones. ИРа measures **breadth**, not depth. Donina mostly uses
  ПоКА (CAC) in her cross-variant comparison; Boriskina uses both.

### ПоКА — cryptoclass activity index (CAC)
- **RU**: ПоКА — показатель криптоклассной активности (имени)
- **EN**: CAC — cryptoclass activity coefficient / index
- **ES**: CAC *(?)*; *coeficiente de actividad criptoclase* *(?)*
- **Source**: Boriskina 2011, p. 4; Donina 2016, p. 346; cf.
  `notes/plan-from-scratch.md` Stage 4 of Donina's algorithm
- **Formula**: `Sᵢ = Σⱼ cᵢⱼ` (per the project's reading of Donina §1.10) —
  sum of citation counts over the classifiers `j` within the cryptoclass,
  for noun `i`. Donina then normalises against the other metaphoronyms of
  the same class.
- **Definition**: *Показатель криптоклассной активности имени, выражается в
  относительных величинах (ПоКА 0,015)* (Boriskina 2011: 4). The total
  weight of the noun's presence in the class, after normalisation. Donina
  uses the normalised value (in relative units) for cross-variant
  comparison.
- **Notes**: High ПоКА = the noun is *frequently* employed in the class's
  classifiers, regardless of how many distinct classifiers it reaches. CAC
  measures **depth/frequency**, where IDC measures breadth. Both are needed:
  a noun with ИРа=0.8 and ПоКА=0.001 patterns broadly but rarely; a noun
  with ИРа=0.05 and ПоКА=0.3 patterns narrowly but in heavy fashion. The
  project's downstream statistics (Phase 6 of ROADMAP) use both.

### СИ — combinatorial selectivity
- **RU**: СИ — сочетательная избирательность (имени)
- **EN**: combinatorial selectivity
- **ES**: selectividad combinatoria *(?)*
- **Source**: Boriskina 2011, p. 4; §1.3
- **Definition**: The selectivity of a noun for particular classifiers within
  a class — operationally, how concentrated the noun's hits are in a small
  subset of the class's classifier inventory. Less prominent in Donina than
  in Boriskina; not used directly in this project's pipeline yet.
- **Notes**: Read as complementary to ИРа: high СИ + low ИРа = the noun is
  picky and hits only a few of the class's classifiers; low СИ + high ИРа =
  the noun is promiscuous within the class.

### Pearson correlation coefficient
- **RU**: коэффициент корреляции (по Пирсону)
- **EN**: Pearson correlation coefficient
- **ES**: coeficiente de correlación de Pearson
- **Source**: Donina 2016 §1.10 and Chapter 2 throughout
- **Use in project**: pairwise similarity between language variants on their
  ПоКА vectors → a 21×21 (Spanish) or 20×20 (Donina's English) matrix.
- **Interpretive bands** (Ивантер-Коросов scale used by Donina):
  - very weak: `r < 0.2`
  - weak: `0.2 ≤ r < 0.3`
  - moderate: `0.3 ≤ r < 0.5`
  - medium: `0.5 ≤ r < 0.7`
  - strong: `0.7 ≤ r ≤ 1.0`
- **Notes**: This is the central similarity statistic in Donina's
  cross-variant comparison. Donina found `r ≥ 0.92` among the "inner circle"
  English variants (British, Irish, American, Canadian, Australian, NZ) and
  0.74–0.80 among outer-circle variants. Spanish equivalents to be measured
  in Phase 7.

### Kendall's W (coefficient of concordance)
- **RU**: коэффициент конкордации Кендалла; W Кендалла
- **EN**: Kendall's W
- **ES**: W de Kendall
- **Source**: Donina 2016 §1.10
- **Use in project**: measures the global agreement of the *N* variants on
  the ranking of cryptoclasses by ПоКА — i.e. do the variants put the same
  classes at the top?
- **Notes**: A single statistic that summarises the cross-variant matrix at
  the ranking level rather than the magnitude level.

### Factor analysis (Varimax)
- **RU**: факторный анализ с Varimax-вращением
- **EN**: factor analysis with Varimax rotation
- **ES**: análisis factorial con rotación Varimax
- **Source**: Donina 2016 §1.10 and the cluster sections of Chapter 2
- **Use in project**: tests whether the 8 cryptoclasses behave as independent
  factors. Donina found 96–99% per-class loading for her 6 English classes
  — i.e. the classes are statistically real, not artefacts. For Spanish,
  this is the test of whether the two added classes ([[Res Continens]],
  [[Res Planae]]) earn their place — if they collapse onto an inherited
  class or onto each other, drop them.
- **Notes**: Varimax maximises the variance of squared loadings of each
  factor, producing a more interpretable (sparser) loading pattern. Standard
  choice for confirmatory class structure.

### k-means / Kohonen SOM (variant clustering)
- **RU**: метод k-средних / самоорганизующиеся карты Кохонена
- **EN**: k-means / Kohonen self-organising map
- **ES**: k-medias / mapa autoorganizado de Kohonen
- **Source**: Donina 2016 §1.10
- **Use in project**: cluster the 21 Spanish variants in their cryptoclass
  ПоКА-vector space, and compare against established dialectological
  groupings (Peninsular, Caribbean, Andean, Rioplatense, Mexican-Central
  American, Chilean, US).
- **Notes**: Donina's central finding was that her k-means / SOM clusters
  matched the established geographical groupings of English variants
  *better* than chronological / contact-based groupings would predict
  ("geography > chronology"). The Spanish equivalent finding is the
  ultimate output of Phase 8.

### Corpus coefficient (per variant)
- **RU**: корпусный коэффициент (по варианту)
- **EN**: corpus coefficient
- **ES**: coeficiente de corpus *(?)*
- **Source**: Donina 2016 §1.10
- **Definition**: A normalisation factor that adjusts raw classifier hit
  counts for the size of each variant's subcorpus. Without it, well-resourced
  variants (e.g. ES, MX, AR in Spanish; British and American in English)
  would dominate the ПоКА calculations simply by having more text.
- **Notes**: Computed once per variant per corpus pair (e.g. Davies Web +
  Davies NOW for Spanish, GloWbE + NOW for English). Donina computes it
  explicitly; this project will need to replicate the calculation per Phase
  6 of ROADMAP.

---

## 4 — Construction types

The vocabulary used in the **column dimension** of the cryptoclass data.
Boriskina's original seven are extended to twelve in `data/SCHEMA.md` to
accommodate Spanish-specific phenomena. The slug column is what appears in
`data/citations.tsv` column 5.

| Slug | RU (legacy) | EN gloss | ES seed example |
|---|---|---|---|
| `verbal-subject-intransitive` | субъектная интранзитивная | emonym is the unaccusative subject | *el miedo fluye* |
| `verbal-subject-transitive` | субъектная транзитивная | emonym is the subject of a transitive verb | *el miedo inunda a Mara* |
| `verbal-objective` | объектная (транзитивная) | emonym is the direct object | *tapar el miedo* |
| `verbal-instrumental` | инструментальная | emonym is the oblique cause / means | *inundado por el miedo* |
| `verbal-locative-state` | локативная (внутри) | being inside the emonym (state) | *vivir en el miedo* |
| `verbal-locative-into` | помещение (внутри) | motion into the emonym | *caer en el miedo* |
| `verbal-locative-out` | извлечение | motion out of the emonym | *sacar a alguien de el miedo* |
| `attributive` | атрибутивная | emonym modified by a class adjective | *miedo punzante* |
| `predicative` | предикативная | predicative use of class adjective | *el recipiente está lleno de miedo* |
| `substantive` | субстантивная | nominal classifier of emonym | *gota de miedo*, *nivel de miedo* |
| `idiomatic` | идиоматическая | frozen idiom with the classifier | *a punta de miedo* |
| `disputed` | СПОРНЫЕ | parked, unresolved | (legacy column) |

The three `verbal-locative-*` slugs are a project-specific refinement —
[[Res Continens]] requires distinguishing state (be inside) from directional
motion (enter / exit), and the legacy Russian schema collapsed all three. See
`data/SCHEMA.md` for the operational details.

The `idiomatic` slug captures frozen expressions like *a punta de miedo* —
not a productive construction but a lexicalised one. This is distinct from
[[veshchnaya-konnotaciya]] use.

---

## 5 — Language-variation terms (Donina-specific)

### Idiom (language variety)
- **RU**: идиом
- **EN**: idiom (in the sense of "language variety"; not the English
  "idiomatic expression")
- **ES**: idioma *(?)* — but with caution; in Spanish, *idioma* usually
  means "language" tout court. A safer rendering is *variedad lingüística*
  or simply *variedad*.
- **Source**: Donina 2016 p. 344 (glossary)
- **Definition**: *Общий термин для обозначения различных языковых
  образований (языка, диалекта, говора и т.д.); применяется для
  нейтрализации оппозиции язык – диалект – говор* (Donina 2016: 344). A
  cover term for any language formation — language, dialect, sub-dialect —
  used to **neutralise** the often-contested distinction between language,
  dialect, and sub-dialect.
- **Notes**: Critical translation gotcha: Donina's *идиом* is not the
  English "idiom" (frozen expression). In Spanish-language writing, prefer
  *variedad* / *idioma* contextually, and add a footnote on first use. The
  Spanish technical term *idioma* is unfortunately a near-false-friend.

### Language variant
- **RU**: языковой вариант
- **EN**: language variant; national variant
- **ES**: variedad lingüística *(?)*; *variedad nacional* *(?)*
- **Source**: Donina 2016 p. 346 (glossary)
- **Definition**: *Официально закреплённый стандарт плюрицентрического
  языка, т.е. языка, используемого в нескольких государствах, каждое из
  которых выработало свой стандартный национальный языковой вариант*
  (Donina 2016: 346). An officially codified standard of a pluricentric
  language — a language used in several states, each of which has developed
  its own standard variant.
- **Notes**: This is the proper umbrella term for "AR Spanish," "MX
  Spanish," etc. The 21 ISO codes in CLAUDE.md are the project's canonical
  list of Spanish variants. Note that *идиом* (broader, neutral) and
  *языковой вариант* (narrower, standardised) are not synonyms — Donina
  reserves the second for codified national standards and uses the first
  for the broader concept that includes non-standard varieties. For
  Spanish, the codified-vs-actual distinction matters less than in English
  because most Spanish-speaking states recognise a single national norm.

### Areal variant / variation
- **RU**: ареальный вариант; ареальная вариативность
- **EN**: areal variant; areal variation
- **ES**: variante areal *(?)*; variación areal
- **Source**: Donina 2016 title, p. 4; §1.6, p. 44
- **Definition**: A language variant defined by its geographic area of use.
  Donina's title — *Скрытая категоризация эмоций в вариантах языка* —
  treats the variant as an areal phenomenon, and her hypothesis (p. 9) is
  that **areal proximity correlates with cryptoclass similarity**.
- **Notes**: Used near-interchangeably with *национальный вариант* in
  Donina, but emphasises geography rather than political/administrative
  codification.

### Anglosphere
- **RU**: англосфера
- **EN**: Anglosphere
- **ES**: anglósfera (established); *hispanofonía / mundo hispanohablante*
  is the Spanish parallel
- **Source**: Donina 2016 p. 344
- **Definition**: The English-speaking linguistic space taken as a whole.
- **Notes**: This project's parallel is the **hispanofonía** — the
  Spanish-speaking world treated as a single linguistic space across 21
  national variants.

### Inner / outer circle (Kachru)
- **RU**: внутренний / внешний круг (по модели Б. Качру)
- **EN**: inner / outer circle (Kachru's three-circles model)
- **ES**: círculo interno / círculo externo / círculo en expansión *(?)*
- **Source**: Donina 2016 p. 9, citing Kachru
- **Definition**: Kachru's model of English variants: **inner** = norm-providing
  (British, American, Irish, Canadian, Australian, NZ); **outer** =
  norm-developing (Indian, Singaporean, Nigerian, etc.); **expanding** =
  norm-dependent (Russian-, Japanese-speaker English, etc.).
- **Notes**: Donina found ≥ 92% Pearson correlation among inner-circle
  variants and 74–80% among outer-circle variants. The model **does not
  transfer cleanly to Spanish** — Spanish has effectively one circle (all
  21 ISO-listed states are norm-providing in some sense), with the
  Peninsular norm having historic primacy but no formal "outer-circle"
  parallel. Note in `notes/methodology-donina.md`.

### Pluricentric language
- **RU**: плюрицентрический язык
- **EN**: pluricentric language
- **ES**: lengua pluricéntrica
- **Source**: Donina 2016 p. 346 (definition embedded in *языковой вариант*)
- **Definition**: A language with multiple codified national standards.
  English, Spanish, Portuguese, French, Arabic, and German are pluricentric;
  Russian, Italian, and Japanese are (largely) monocentric.
- **Notes**: Spanish's pluricentricity is institutionally managed through
  *ASALE* (Asociación de Academias de la Lengua Española), which coordinates
  the 23 national academies. This is materially different from English's
  laissez-faire pluricentricity.

### Linguistic continuum
- **RU**: языковой континуум
- **EN**: linguistic continuum
- **ES**: continuum lingüístico
- **Source**: Donina 2016 §1.8, p. 63
- **Definition**: The view that language variation is gradient rather than
  discretely sortable into "languages" and "dialects." Donina uses this to
  frame the cryptoclass-level findings: cryptoclass profiles vary
  continuously across variants, and cluster cleanly only when measured.
- **Notes**: The cognitive continuum (cognitive variation across speech
  communities) is the variant of this that Donina concludes with in her
  §2.3.

---

## 6 — Statistical and pipeline terms

### Critical mass (constraint on emonym selection)
- **RU**: критическая масса (наблюдений)
- **EN**: critical mass
- **ES**: masa crítica
- **Source**: Donina 2016 §1.10 (per `notes/plan-from-scratch.md` Stage 1,
  criterion 4)
- **Definition**: ≥ 5 observations per cell of the `(variant × cryptoclass)`
  matrix for the emonym to be retained. The Pearson correlation requires
  this for stability.
- **Notes**: This is the cut-off that took Donina from 181 candidate emonyms
  to 23 final ones. For Spanish, the project anticipates dropping from
  ~150–200 candidates to 15–25 finals — per `notes/plan-from-scratch.md`.

### KWIC (keyword in context)
- **RU**: KWIC; конкорданс
- **EN**: KWIC; concordance line
- **ES**: KWIC; concordancia
- **Source**: standard corpus-linguistic terminology; not Boriskina/Donina
  -specific
- **Definition**: A line of corpus text showing a query word with a fixed
  window of context to either side. The atomic unit of corpus-extracted
  evidence in this project's pipeline (Phase 2 of ROADMAP).

### Citation (in this project)
- **RU**: пример (словоупотребления)
- **EN**: citation; corpus example
- **ES**: cita; ejemplo
- **Definition**: A single instance of an emonym in a classifier
  collostruction, with provenance. Represented as one row in
  `data/citations.tsv`. The granularity of the manual gold set and the
  automated pipeline output. See `data/SCHEMA.md` for the schema.

### Gold set / gold standard
- **RU**: эталонный корпус; gold-set
- **EN**: gold set; gold-standard set
- **ES**: conjunto patrón *(?)*; *conjunto de referencia* *(?)*
- **Source**: project-specific; standard term in NLP / corpus pipelines
- **Definition**: The set of manually-collected, hand-tagged citations
  against which the automated pipeline is validated. In this project, the
  ~737 citations (now extracted into `data/citations.tsv` from the legacy
  `.xlsx` files) are the gold set. The pipeline's precision and recall
  against this set are the only honest measure of its reliability.
- **Notes**: Cf. `ROADMAP.md` Phase 1 (gold-set freeze) and Phase 3 (LLM
  pipeline calibration).

---

## 7 — Abbreviations and corpus identifiers

| Abbrev | Expansion | Note |
|---|---|---|
| АЯ | английский язык | "English language" (Boriskina, Donina) |
| ИЯ | (occ.) исследуемый язык | "the language under study" |
| ИРа | индекс разнообразия (сочетаемости) | IDC; see §3 above |
| ПоКА | показатель криптоклассной активности | CAC; see §3 above |
| СИ | сочетательная избирательность | combinatorial selectivity |
| ИК | именной класс | nominal class (typological) |
| ЛСГ | лексико-семантическая группа | lexical-semantic group |
| ИС COEL | информационная система «Криптоклассы английского языка» | the database at rgph.vsu.ru/coel/ |
| ККМ | компьютерное когнитивное моделирование | computer-cognitive modelling |
| ККГ | когнитивная компьютерная графика | cognitive computer graphics |
| COCA | Corpus of Contemporary American English (M. Davies) | not directly used for Spanish |
| COHA | Corpus of Historical American English (M. Davies) | not directly used for Spanish |
| BNC | British National Corpus | not directly used for Spanish |
| GloWbE | Corpus of Global Web-based English (M. Davies) | Donina's primary; Spanish counterpart is *Corpus del Español: Web/Dialects* |
| NOW | "News on the Web" Corpus (M. Davies) | Donina's secondary; Spanish counterpart exists with same name |
| OED | Oxford English Dictionary | (Boriskina) |

### Spanish-specific corpus identifiers (project)

| Abbrev | Expansion | Note |
|---|---|---|
| CORPES XXI | Corpus del Español del Siglo XXI (RAE) | Peninsular-skewed but authoritative; ~400 m words |
| Corpus del Español | Davies, Web/Dialects version | 21 Spanish variants; closest GloWbE analog |
| esTenTen | Sketch Engine Spanish corpus | largest (~20 bn) but variant-tagging is geo-IP, noisier |
| DLE | *Diccionario de la Lengua Española* (RAE) | authoritative monolingual |
| Clave | *Diccionario Clave* | secondary monolingual |
| ASALE | Asociación de Academias de la Lengua Española | coordinates 23 national academies |

### Spanish variant codes (project canonical)

The 21 ISO 3166-1 alpha-2 codes used in this project (per CLAUDE.md):

```
AR Argentina       GT Guatemala       PE Perú
BO Bolivia         HN Honduras        PR Puerto Rico
CL Chile           MX México          PY Paraguay
CO Colombia        NI Nicaragua       SV El Salvador
CR Costa Rica      PA Panamá          UY Uruguay
CU Cuba            US United States   VE Venezuela
DO Rep. Dominicana
EC Ecuador
ES España
```

US Spanish is included as a full variant in the inventory; its **status**
(full variant vs. contact / diaspora variety) is an open question — see
`ROADMAP.md` "Open questions."

---

## 8 — Typological and historical context

These are not project-internal terms, but they appear repeatedly in
Boriskina's theoretical sections and underwrite the project's conceptual
backbone. They are included so future Claude sessions can read Boriskina
quotations without re-deriving the surrounding tradition.

### Scale of classificativity (Vinogradov's scale)
- **RU**: шкала классификативности (по В.А. Виноградову, 1990)
- **EN**: scale of nominal classificativity
- **Source**: Виноградов 1990, cited heavily in Boriskina 2011 §1.1, p. 25
- **Scale**:
  ```
  (I) эпидигматика → (II) эхосемия → (III) эхоморфия → (IV) нумеративы → (V) именные классы → (VI) род
  ```
- **Reading**: Left pole = purely lexical semantics (least grammaticalised).
  Right pole = pure grammatical form (most grammaticalised — grammatical
  gender). The boundary between IV and V is the conventional
  "lexical-vs.-grammatical" line. Boriskina situates her cryptoclasses on
  the **left edge** of this scale — at types I–III, the "covert" zone.
- **Importance for the project**: This scale is what licenses calling
  cryptoclasses "lexico-grammatical categories of minimal
  grammaticalisation" (Boriskina §1.2.2). Spanish has overt grammatical
  gender (VI) — so for Spanish, the cryptoclasses sit *alongside* the
  existing gender system, not in its place. This is one of the project's
  non-trivial issues with grammatical gender as a covariate (see
  `notes/plan-from-scratch.md` Phase 2 "Spanish-specific gotcha").

### Эхосемия (echo-semia)
- **RU**: эхосемия
- **EN**: echo-semy
- **Source**: Виноградов 1990; expanded in Boriskina 2011 §1.1, p. 31–33
- **Definition**: The phenomenon by which a noun's class feature is
  "echoed" in the lexical semantics of the verb (or other predicate) that
  combines with it. Boriskina's example: Russian *просыпать* (spill dry
  granular things) vs. *пролить* (spill liquid) — same event, different
  verbs, selected by the class of the spilled noun.
- **Notes**: Echo-semy is the **mechanism** by which a classifier works:
  the predicate carries a class-specific seme, and only nouns of that class
  combine well with it.

### Эпидигматика (epidigmatics)
- **RU**: эпидигматика
- **EN**: epidigmatics
- **Source**: Виноградов 1990; Kretov 1993; Boriskina 2011 §1.1
- **Definition**: All forms of lexical relatedness within or between words
  — polysemy, metaphor, derivational links — that are mediated by shared
  background semes (фоновые семы). The class feature can travel through an
  epidigmatic chain (e.g. the "liquid" feature of *flow* travels into the
  metaphorical *fear flows*).
- **Notes**: This is what makes metaphor analytically tractable for
  cryptoclass purposes — the metaphoronym joins via an epidigmatic chain
  back to the prototype.

### Эхоморфия (echo-morphy)
- **RU**: эхоморфия
- **EN**: echo-morphy
- **Source**: Виноградов 1990
- **Definition**: The strongest version of echo-semy, where the class
  feature is reflected in a **morphologically distinct variant** of the
  predicate stem. Navajo classifier verbs are the textbook case — different
  verb stems for round vs. long objects (per the Whorf quotation in
  Boriskina §1.1, p. 20).
- **Notes**: English has no echo-morphy; Spanish has none either. Both
  sit at echo-semy or epidigmatic levels for their cryptoclasses.

### Семантическое согласование
- **RU**: семантическое согласование
- **EN**: semantic concord; semantic agreement
- **Source**: standard Russian linguistic tradition (Apresyan, Arutyunova,
  Gak, Kretov); Whorf's *reactance* is its English equivalent
- **Definition**: The principle that a predicate and its argument must share
  a class feature for the combination to be felicitous. *Water flows* works
  because *water* and *flows* share the [+liquid] seme; *#fear cracks*
  fails because *fear* and *cracks* (in the brittle-solid sense) do not.
  This is the underlying mechanism that classifier-based cryptoclass
  analysis exploits.

### Protean noun behaviour / protean noun (протеистичное имя)
- **RU**: протеизм; протеистичное поведение имени
- **EN**: protean behaviour; protean noun
- **Source**: Boriskina 2011 §1.2.3, p. 48–49, footnote 7
- **Definition**: A noun that simultaneously occupies several cryptoclasses
  — i.e. one whose cryptoclass projection is multi-class. Boriskina
  compares this to the mythological Proteus, who changes shape; she frames
  it as a residue of "mythological cognition" in which one entity could
  appear in multiple forms.
- **Notes**: Emonyms are typically protean: *fear* projects into *Res
  Liquidae* (waves of fear), *Res Continens* (fall into fear), *Res Acutae*
  (a stab of fear), and others. The cryptoclass portrait records all
  projections weighted by ПоКА.

### Naïve picture of the world (наивная картина мира)
- **RU**: наивная картина мира
- **EN**: naïve / folk picture of the world
- **Source**: Apresyan tradition; Boriskina §1.1 and §1.2
- **Definition**: The implicit conceptualisation of reality that a language
  encodes, especially as visible in its lexicon and selectional patterns.
  Cryptoclasses are a particular slice of the naïve picture — the **hidden
  categorisation** of object-types.

### Anthropocentrism (антропоцентричность)
- **RU**: антропоцентричность языка
- **EN**: anthropocentrism of language
- **Source**: a standard claim in Russian linguistic anthropology; Donina
  2016 p. 10 invokes it to explain why **Res Parvae** dominates emonym
  metaphorisation
- **Definition**: The pervasive structuring of language around the human
  scale of perception and action — what fits in the hand, what is at eye
  level, what can be carried, etc. The dominance of *Res Parvae* for
  emonyms follows: emotions are *most often* conceived as **graspable**
  ("a touch of fear," "a grain of hope") rather than as objects beyond
  human scale.

---

## 9 — Cross-reference index

A flat list of slugs used elsewhere in `notes/` that point back here:

- `[[cryptoclass]]` — §1
- `[[covert-categoriality]]` — §1
- `[[cryptotype]]` — §1
- `[[classifier]]` — §1
- `[[collostruction]]` — §1
- `[[diagnostic-collostruction]]` — §1
- `[[construction-types]]` — §4
- `[[metaphoronym]]` — §1
- `[[prototype]]` — §1
- `[[emonym]]` — §1
- `[[abstract-noun]]` — §1
- `[[veshchnaya-konnotaciya]]` — §1
- `[[predicate-word]]` — §1
- `[[cryptoclass-projection]]` — §1
- `[[cryptoclass-portrait]]` — §1
- `[[contrastive-principle]]` — §1
- `[[Res-Liquidae]]`, `[[Res-Filiformes]]`, `[[Res-Rotundae]]`,
  `[[Res-Longae-Penetrantes]]`, `[[Res-Acutae]]`, `[[Res-Parvae]]`,
  `[[Res-Continens]]`, `[[Res-Planae]]` — §2
- `[[ira]]` (IDC) — §3
- `[[poka]]` (CAC) — §3
- `[[si]]` (combinatorial selectivity) — §3
- `[[pearson]]`, `[[kendall-w]]`, `[[factor-varimax]]`,
  `[[kmeans-kohonen]]`, `[[corpus-coefficient]]` — §3
- `[[idiom-variety]]`, `[[language-variant]]`, `[[areal-variant]]`,
  `[[anglosphere]]`, `[[kachru-circles]]`, `[[pluricentric]]`,
  `[[continuum]]` — §5
- `[[critical-mass]]`, `[[kwic]]`, `[[citation]]`, `[[gold-set]]` — §6
- `[[scale-of-classificativity]]`, `[[echo-semia]]`, `[[epidigmatics]]`,
  `[[echo-morphy]]`, `[[semantic-concord]]`, `[[protean]]`,
  `[[naive-picture]]`, `[[anthropocentrism]]` — §8

---

## Provisional Spanish equivalents — quick consolidation

The Spanish-language scholarly writeup (Phase 9 of ROADMAP) requires settled
Spanish equivalents. Until the advisor confirms, the table below tracks the
provisional rendering for each core term. **Confirmed** = used in published
Spanish-language linguistics or confirmed by user/advisor. **Provisional** =
calque or literal translation, may need revision.

| Russian / English | Spanish (provisional unless marked) | Status |
|---|---|---|
| криптокласс / cryptoclass | *criptoclase* | provisional; *clase encubierta* attested |
| скрытая категориальность / covert categoriality | *categorialidad encubierta* | provisional |
| криптотип / cryptotype | *criptotipo* | provisional |
| классификатор / classifier | *clasificador* | confirmed (standard linguistic term) |
| коллострукция / collostruction | *colostrucción* | provisional; the form *coloestructura* also occurs in informal use |
| метафороним / metaphoronym | *metaforónimo* | provisional |
| эталон / prototype | *prototipo* | confirmed (in cognitive-semantic sense) |
| эмоним / emonym | *emónimo* | provisional |
| вещная коннотация / material connotation | *connotación material* | provisional |
| криптоклассный портрет / cryptoclass portrait | *retrato criptoclase* | provisional |
| ИРа / IDC | *IDC* (untranslated) or *índice de diversidad combinatoria* | provisional |
| ПоКА / CAC | *CAC* (untranslated) or *coeficiente de actividad criptoclase* | provisional |
| идиом / language variety | *variedad* | confirmed; *idioma* is a false friend |
| языковой вариант / language variant | *variedad lingüística*, *variedad nacional* | confirmed |
| ареальная вариативность / areal variation | *variación areal* | confirmed |
| англосфера / anglosphere | *anglósfera* | confirmed (parallel: *hispanofonía*) |
| внутренний/внешний круг / Kachru circles | *círculo interno/externo* | provisional |
| плюрицентрический язык / pluricentric | *lengua pluricéntrica* | confirmed |
| наивная картина мира / naïve picture | *imagen ingenua del mundo* | provisional (calque from RU); alt. *visión folk del mundo* |
| семантическое согласование / semantic concord | *concordancia semántica* | provisional |
| протеизм / protean behaviour | *protean comportamiento* — better: *polifuncionalidad criptoclase* | provisional, awkward |
| антропоцентричность / anthropocentrism | *antropocentrismo* | confirmed |

---

*This glossary will be updated as the deep extraction proceeds in
`notes/theory-boriskina.md` and `notes/methodology-donina.md`. New terms
discovered during that extraction should be added here first, then
referenced from those files.*
