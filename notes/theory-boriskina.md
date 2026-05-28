# Theory — Boriskina (2011)

Deep extraction from Olga Olegovna Boriskina, *Теория, методология и опыт
познания скрытой категориальности языка* ("Theory, methodology and experience
of cognising covert categoriality of language"), doctoral dissertation in
linguistic theory (10.02.19) and Germanic languages (10.02.04), Voronezh
State University, 2011. 363 pp.

This file is the project's working reference for Boriskina's theoretical
framework. It does *not* reproduce her empirical chapter (Chapter 2, six
class-by-class case studies — *Res Liquidae*, *Res Filiformes*,
*Res Rotundae*, *Res Longae Penetrantes*, *Res Acutae*, *Res Parvae*) in
detail; those classes are covered class-by-class in
`notes/cryptoclasses/<class>.md` (to be created). The current file covers
**Chapter 1 in full** (the framework) and **Chapter 3 selectively** (the
portrait, the four principles of cryptoclass distribution, the typology of
metaphoronyms). Russian original phrasing is preserved in italics where it
is citation-grade or where the English gloss would lose precision.

For terminology, this file uses the conventions fixed in
`notes/glossary.md`. Cross-references like `[[cryptoclass]]` point to
entries in that file.

For application to Spanish, see the closing section §13. For Donina's
cross-variant extension, see `notes/methodology-donina.md`. For the formal
operational schema used in `data/citations.tsv`, see `data/SCHEMA.md`.

---

## 0 — Why this dissertation, why for Spanish

Boriskina is the framework. Everything in this project — the eight Latin
class names, the indices ИРа and ПоКА, the diagnostic-collostruction
method, the cryptoclass portrait — comes from her 2011 dissertation. Donina
(2016) adds the cross-variant comparison layer; this project adds the
Spanish-specific layer and the LLM-pipeline scaling layer. But the
conceptual backbone is Boriskina's.

The dissertation is **doctoral** (not the smaller *kandidat* degree),
defended in two specialisations (theory of language + Germanic languages),
with A. A. Kretov as scientific consultant. It cites a corpus of 70 000+
word-uses from COCA / COHA / OANC / BNC, an information system *COEL*
("Cryptotypes of the English Language") still online at
http://www.rgph.vsu.ru/coel/, and produces three appendices: a 500-noun
summary table of cryptoclass distribution, an IDC-ranked feature hierarchy,
and a CAC-ranked feature hierarchy.

The eight defended theses (pp. 13–14 of the dissertation, condensed below
into five thematic clusters):

1. The cryptoclass is a covert category of minimal grammaticalisation —
   epidigmatic + echo-semic — and is therefore a *grammatical lacuna* of
   English (Thesis 1). Typological verification of a covert category in
   one language proceeds via the **contrastive principle**, i.e. by
   reference to an overt classificative system in some other language
   (Thesis 2). English has six identifiable cryptoclasses (Res Liquidae,
   Res Filiformes, Res Rotundae, Res Longae Penetrantes, Res Acutae,
   Res Parvae).
2. The cryptoclass is diagnosed by a *set* of [[collostructions]] —
   not a morphological marker (Thesis 3).
3. Because covert categoriality manifests the **cumulative and creative
   functions** of language, the cryptoclass both accumulates metaphors
   and creates the environment for new ones (Thesis 4). The pre-logical
   character of cryptoclass categorisation lets a non-object noun belong
   to *several* classes at once — reflected in its
   [[cryptoclass-portrait]] (Thesis 5). Class assignment is grounded in
   **perceptual similarity** to the class prototype (Thesis 6).
4. Cryptoclass distribution of nouns is characterised by *maximum vs.
   minimum diversity* of combinability and *uniform vs. non-uniform*
   class activity (Thesis 7).
5. IDC ([[ira]]) and CAC ([[poka]]) jointly support two complementary
   classifications of non-object nouns, giving a complete picture of
   their cryptoclass behaviour (Thesis 8).

---

## 1 — Place in the Russian linguistic tradition (§1.1)

Boriskina's framework synthesises three traditions:

### 1.1 — The Potebnya → Bondarko line on категориальность

The notion of **категориальность** ("categoriality") was introduced by A.
V. Bondarko (1976, 1978) on the basis of A. A. Potebnya's doctrine of the
"inner formality" of language. Potebnya wrote: *«слово заключает в себе
указание на известное содержание, свойственное ему одному, и, вместе с
тем, указание на один или несколько общих разрядов, называемых
грамматическими категориями»* — "the word contains an indication of a
specific content proper only to it and at the same time an indication of
one or several general ranks, called grammatical categories" (Потебня
1958: 35).

Bondarko's contribution (Boriskina 2011: 19, citing Бондарко 1976: 182):
*«категориальностью характеризуются и лексико-грамматические разряды
(существительные одушевлённые / неодушевлённые, … глаголы разных способов
действия)»* — categoriality is also present in lexico-grammatical ranks
(animate/inanimate nouns, actional verb classes). So categoriality is not
the property only of overt grammatical categories — it can be **lexical**
or, in Boriskina's terms, **covert**.

Boriskina's working definition: *категориальность следует определить как
форму представления внеязычного содержания* — "categoriality should be
defined as the form of presenting extra-linguistic content." A
cryptoclass, on this account, is one form among several in which a
language presents its extra-linguistic content as classes of nouns.

### 1.2 — The Whorf line on covert categories

Benjamin Lee Whorf's posthumous (1956) volume introduced two terms that
Boriskina translates as **скрытые классы** (covert classes) and **явные
классы** (overt classes). Whorf's case study was Navajo, where neither
morphology nor pronoun-marking distinguishes "round" objects from "long"
objects — but the choice of verb stem does:

> *Navaho has a covert classification of the whole world of objects based
> partly on animation and partly on shape. Inanimate bodies fall into two
> classes which linguists have styled "round objects" and "long objects" …
> the Navaho so-called "round" and "long" nouns are not marked in
> themselves either by morphemic tags or by any pronouns. They are marked
> only in the use of certain very important verb stems, in that a
> different stem is required for a "round" or a "long" subject or
> object.* (Whorf 1956: 70)

Whorf's term for the unit of covert categorisation was **cryptotype**.
Boriskina (footnote 13, p. 77) explicitly positions **криптокласс** as the
**Russian equivalent of *cryptotype***, while noting that Whorf's own
formulation never received a sharp definition and never entered English
linguistic terminology in a stable way. The Russian term is therefore
more crisply defined than the English ancestor.

Whorf's underlying mechanism — what he called **reactance** — is the
property of a word that **governs the selection** of words it combines
with. Reactance corresponds in essence to the Russian **семантическое
согласование** ("semantic concord/agreement") tradition that Boriskina
builds on (Apresyan 1963, 1967; Arutyunova; Gak; Kretov). Where Whorf used
a chemistry metaphor, Russian linguistics frames the same phenomenon
through seme theory.

### 1.3 — The Katznelson line on скрытая грамматика

S. D. Katznelson's *Категории языка и мышления* / *Типология языка и
речевое мышление* (1972, 2004) develops the theory of "hidden grammar"
(*скрытая грамматика*). His central claim, quoted by Boriskina (p. 22):
*"… менее всего паллиатив, к которому прибегают языки, не имеющие
«подлинных форм». Всё больше и больше данных указывают на то, что
грамматика этого типа заложена в природе любого языка и что именно она
является основой всякого грамматического строя"* — hidden grammar is not
a *palliative* used by formless languages; it is the foundation of every
grammatical system.

This grounds the project's working assumption that **Spanish has covert
categories despite — not because of — its overt gender system**. Overt and
covert categoriality are not alternatives; they layer.

### 1.4 — The Vinogradov scale of nominal classificativity

V. A. Vinogradov's (1990) **шкала именной классификативности** organises
classificative types from least-grammaticalised (purely lexical
semantics) to most-grammaticalised (grammatical gender):

```
(I) эпидигматика → (II) эхосемия → (III) эхоморфия →
(IV) нумеративы → (V) именные классы → (VI) род
```

- **(I) Эпидигматика** = all forms of lexical relatedness within and
  between words: polysemy, metaphor, derivational links — anything
  travelling via shared background semes. The class feature shows up only
  in the lexicon, not in morphology or syntax.
- **(II) Эхосемия** = the class feature is **echoed** in the predicate
  word's lexical semantics. Russian *просыпать* (spill granular) vs.
  *пролить* (spill liquid): same event, two verbs, differentiated by the
  class of their argument. This is where cryptoclass diagnosis lives.
- **(III) Эхоморфия** = the class feature is reflected in a
  **morphologically distinct variant** of the predicate stem. Navajo
  classifier verbs.
- **(IV) Numeratives** = numeral classifiers, as in Mandarin or Burmese.
- **(V) Noun classes** = the Niger-Congo / Bantu type (concord prefixes
  marking class).
- **(VI) Grammatical gender** = Indo-European etc.

The line between (IV) and (V) is conventionally treated as the boundary
between lexical and grammatical means. Boriskina locates **cryptoclasses
on the left edge (I–III)** — they are real classes of nouns, but their
diagnostic signal is lexical-semantic (echo-semia and epidigmatics) rather
than morphological.

A crucial implication for the project: **Spanish has gender (VI) AND
cryptoclasses (I–III) simultaneously**. The two systems coexist. The
project's cryptoclasses sit on the left edge of Spanish's classificativity
scale; the gender system sits at the right.

### 1.5 — The Mel'nikov stages-of-language framing

G. P. Mel'nikov's (2000) systemic typology links each classificativity
type to a stage of language development:

| Stage | Humboldt type | Mel'nikov communicative articulation | Vinogradov classification |
|---|---|---|---|
| 1 | incorporating | не-членение (no articulation) | I–III: эпидигматика, эхосемия, эхоморфия |
| 2 | isolating | при-членение (adjoining) | IV: numeratives |
| 3 | agglutinative | со-членение (co-articulation) | V: noun classes |
| 4 | inflective | рас-членение (dis-articulation) | VI: gender |

Boriskina's reading of this: the cognitive material of cryptoclasses
descends from the **earliest stratum of language development** — the
pre-logical, mythological stage characterised by *синкретизм,
антикаузальность, конкретность, избыточность, антропоцентризм,
протеизм, неразличение субъекта и объекта действия, неразличение
категорий сущности и явления, закон неисключённого третьего*. Modern
metaphor is the trace this stratum leaves; cryptoclasses are recoverable
**because** metaphor preserves them.

This is also where Boriskina inverts Vinogradov's left-pole ordering:
Vinogradov has (I) epidigmatics → (II) echo-semia → (III) echo-morphy.
Boriskina argues (§1.1.1) that **echo-semia is ontologically and
gnoseologically prior to epidigmatics**. Echo-semia is the simple sharing
of a class feature between predicate and argument (no polysemy needed);
epidigmatics requires the linking of multiple senses by a background seme,
which presupposes the formation of polysemy. Polysemy is a later
acquisition of the cognitive system. Hence: **(II) → (I) → (III)** in
Boriskina's revised reading, not Vinogradov's original (I) → (II) → (III).

This re-ordering matters for the project in one specific way: the
diagnostic collostructions of a cryptoclass exploit **echo-semic seme
sharing** between a classifier and a noun (e.g. *flow* shares the seme
[+liquid] with *water*); they do **not** require the noun's polysemy to
be involved. So when the Spanish corpus pipeline (`ROADMAP.md` Phase 3)
filters for genuine cryptoclass use, the relevant question is whether the
echo-seme is activated — not whether a polysemous reading is at play.

---

## 2 — What a cryptoclass is (§1.2, definition)

The crisp definition appears in Boriskina's term list (p. 4) and is
repeated almost verbatim in Donina (p. 345):

> *Криптокласс — лексико-грамматическая категория существительного,
> состоящая в распределении имён по классам в соответствии с
> семантическими признаками при обязательной выраженности классной
> принадлежности имени в структуре предложения через классификатор
> (конструкцию или словоформу) и имеющая соответствие в явной
> грамматической категории хотя бы одного языка мира.*

In English: a **lexico-grammatical category of the noun** in which nouns
are sorted into classes by semantic features; class membership is
**obligatorily expressed in the structure of the sentence** through a
classifier (a construction or a word-form); and the class must have a
**correlate in the overt grammatical system of at least one other
language**.

Four points are doing essential work:

1. **Lexico-grammatical** — cryptoclasses straddle the lexicon/grammar
   divide. They cannot be reduced to either the meaning of one word
   (purely lexical) or to a morphological category (purely grammatical).
2. **Sorting by semantic features** — the membership condition is the
   shared semantic feature (e.g. [+liquid], [+sharp]). Not animacy,
   countability, or other Indo-European-style grammatical features.
3. **Obligatorily expressed via a classifier** — and here the word
   *обязательно* is doing important work. Boriskina does not mean that
   every utterance of a class member uses a classifier — she means that
   *class membership is verifiable only through classifier
   collostructions*; without the classifier diagnostic, you cannot
   confirm class membership.
4. **Typological correlate** — see §3 below.

### 2.1 — Nine characteristics of cryptoclass (§1.2)

Boriskina lays out nine characteristics (numbered I–IX in the source).
These are the framework's substantive content. Where the source phrasing
is citation-grade, the Russian is preserved.

**I. Typological verification via contrast.** The cryptoclasses of a
language are identified *в контексте других классификативных типов* —
"in the context of other classificative types": noun classes in African
languages, numeral classifiers in Southeast Asian languages, classificatory
verb stems in Navajo, etc. This is the [[contrastive-principle]]; see §3
below.

**II. Cryptoclass as the result of lexico-grammatical interaction.**
*Криптокласс следует расценивать как результат сложного взаимодействия
лексической и грамматической семантики* — the cryptoclass is a result of
the complex interplay of lexical and grammatical semantics.
*Многоплановость и «таинственность» криптоклассной системы английского
языка проявляются в лексической семантике и в семантике синтаксических
конструкций* — its multiplanedness and "mysteriousness" appear in lexical
semantics *and* in the semantics of syntactic constructions. Hence the
class is a **lexico-grammatical category of minimal grammaticalisation**
— a **grammatical lacuna** of the language.

For Spanish: lacuna does not mean absence. It means the class is real but
its diagnostic is on the lexical-semantic side, requiring corpus
distributional work to surface — not paradigm inspection.

**III. The cryptoclass is structured by family resemblance with fuzzy
edges.** Following Rosch (1973), Givón (1986), Cruse (1990), and Kobozeva
on the category of эталонность (prototype-ness): no property is necessary
for all members. The basis of the class is a semantic categorising
feature; the prototype (эталон) is the noun whose denotation most clearly
instantiates the feature; the metaphoronyms cluster around it by analogy
of varying strength.

Boriskina also notes (§1.2.3) that the cryptoclass is *двуаспектен* —
two-aspect — being simultaneously: (a) a kind of epidigmatics (so its
class feature is encoded in the polysemy/derivation of predicate words),
and (b) rooted in echo-semia (so the feature lives in the семантическое
согласование between predicate and noun). The two aspects coexist; one
or the other dominates in any given collostruction.

**IV. Cryptoclass as carrier of "etymological memory."** *Криптокласс
является носителем "этимологической памяти" слова* — the cryptoclass is
the carrier of a noun's "etymological memory." To identify cryptoclasses
the analyst draws on **etymological data and cultural data**. The reason:
the metaphors that fix a noun in a class often originate at a stage of
language earlier than the synchronic present, and the analyst recovers
them by reconstruction.

**V. Action is in discourse.** *Действие криптокласса проявляется в
дискурсе, поэтому основной критерий обнаружения криптокласса —
семантико-синтаксический, а именно, криптокласс диагностируется набором
коллострукций.* The criterion for finding a cryptoclass is
**semantico-syntactic**: the class is diagnosed by a *set of
collostructions*. Not by a single one. Not by introspection. Not by
isolated tokens. **The diagnostic is a set, in corpus distribution.**

This is one of the most consequential operational claims for the
project: the diagnostic set is what `notes/cryptoclasses/<class>.md` will
hold for each Spanish cryptoclass, and what the LLM pipeline of Phase 3
of `ROADMAP.md` will use as its query/filter inventory.

**VI. Cognitive uniformity of cryptoclass via mythological cognition.**
*Семантическая неоднородность криптокласса «компенсируется» однотипностью
его когнитивных и психолингвистических основ.* The semantic heterogeneity
of the class (nouns of very different meanings can belong) is
*compensated* by the uniformity of its cognitive/psycholinguistic basis —
parameters of primary categorisation tied to **archaic pre-logical
cognition**. The pre-logical residue in modern language is precisely what
the cryptoclass system makes visible.

A corollary: the same noun can belong to more than one cryptoclass —
because pre-logical cognition allowed an entity to occupy multiple
classes simultaneously ([[protean]] behaviour, Boriskina footnote 7).
This is why a [[cryptoclass-portrait]] is *multi-class* by default.

**VII. Perceptual character of cryptoclass categorisation.**
*Криптоклассная категоризация носит перцептивный характер, т.е.
распределение имён по криптоклассам основано на критерии воспринимаемого
сходства-различия сущностей (или их отдельных характеристик) с
эталонами-носителями признака.* Class assignment is grounded in
**perceptual similarity** (or perceived difference) between the abstract
entity and the class prototype. Not logical, not taxonomic — perceptual.

**VIII. Cryptoclass system is creative, not passive.** The cumulative and
creative functions of language interact: *криптокласс, аккумулируя
метафоры, создаёт среду для их порождения. Криптоклассная система языка
является не пассивной, застывшей в языковой норме, а активной,
креативно-творческой классификацией.* The class accumulates metaphors,
and in so doing creates the **environment** for new metaphors to arise.
The cryptoclass system is the productive substrate of metaphor — not
just its frozen residue.

This is methodologically important: the corpus pipeline will continually
find new metaphoronyms because the system is generative. The
*ROADMAP.md* note that LLM-tagged citations get a provenance flag is
exactly the right design: distinguishing established metaphoronyms from
emerging ones.

**IX. Two main parameters of cryptoclass distribution of nouns:**
- maximum *vs.* minimum diversity of the noun's combinatorics with class
  classifiers (parameter [[ira]]);
- uniform *vs.* non-uniform cryptoclass activity (parameter [[poka]]).

These two parameters are what §3.2 of the dissertation operationalises.
The four principles of distribution described there (see §10 of this file)
are extensions of these.

---

## 3 — The contrastive principle (§1.2.1)

To posit a cryptoclass in language *L*, one must show that the class has
**a correlate** as an overt category in some other language. Without
that correlate, the postulated cryptoclass could be an artefact of the
analyst's intuition.

Source (Boriskina §1.2.1, p. 44, after Kretov 2010a):

> *Сравнение криптоклассов одного языка с явными именными классификациями
> других языков является не только способом обнаружения … но и, по сути,
> способом лингвистической (т.е. типологической) верификации
> криптокласса.*

Whorf himself (1956: 74) made the same demand: he proposed that the
hidden English category of grammatical gender (in his analysis, the
class structure of *who/which* selection) be verified by reference to
the overt Latin gender system. Potebnya (1958: 38), describing covert
plurality in some languages, proposed Russian as the typological pivot.

For this project: the eight cryptoclasses used are admissible because:

- *Res Liquidae* — Bantu noun classes mark "liquids" distinctly (class 6
  in many Bantu systems); some Australian languages do likewise.
- *Res Filiformes* — many classifier systems distinguish "filiform"
  objects (Mandarin *tiáo* for long thin flexibles; Korean numeral
  classifiers).
- *Res Rotundae* — Navajo and Mandarin both have round-object classifier
  morphology.
- *Res Longae Penetrantes* — Navajo distinguishes "long rigid" objects;
  many Australian languages mark spear-like objects.
- *Res Acutae* — South Asian numeral-classifier systems isolate pointed
  objects; some Athabaskan languages too.
- *Res Parvae* — "small / graspable" is a recurrent classifier feature
  cross-linguistically (Aikhenvald 1998).
- *Res Continens* — Spanish-specific, **provisional**. The contrastive
  test: do any languages mark containers as a distinct gender or class?
  Some Australian and Papuan classifier systems do; this is suggestive
  but not yet locked. See `notes/cryptoclasses/_inventory-decisions.md`
  (TBD).
- *Res Planae* — Spanish-specific, **provisional**. Some classifier
  systems (Tzeltal numeral classifiers; some Athabaskan verb-stem
  systems) treat flat objects distinctly.

The contrastive principle is also why the cryptoclass names are kept in
Latin: the Latin name reflects the perceptual feature (liquid, thread,
ball, spear, needle, pebble, container, flat surface) rather than any
particular L1's gender / noun-class label, which would inadvertently bias
the typological framing.

---

## 4 — Cryptoclass as grammatical lacuna (§1.2.2)

The conventional grammar / lexicon dichotomy is gradient, not binary
(Padyucheva 1989, Plyungyan 1998). Boriskina uses Plyungyan's term
**грамматическая периферия** ("grammatical periphery"): the
intermediate phenomena that the strict bivalent dichotomy ignores.

> *Криптоклассы английского языка можно отнести к явлениям грамматической
> периферии. Криптокласс следует расценивать как результат сложного
> взаимодействия лексической и грамматической семантики.* (p. 47)

A cryptoclass is therefore *a lexico-grammatical category of minimal
grammaticalisation* — a **grammatical lacuna** when measured against
languages where the same categorising feature is more grammaticalised
(e.g. as a noun class or gender). The lacuna is filled by a set of
diagnostic collostructions.

For Spanish: this framing matters because Spanish has grammatical gender
(grammaticalised feature) AND cryptoclass features (lexical-semantic).
The two systems do not compete — they categorise different aspects of
nominal semantics. Gender categorises grammatical/animacy structure;
cryptoclasses categorise perceptual/topological structure of the
referent.

---

## 5 — Structure of the cryptoclass: prototype, metaphoronym, family resemblance (§1.2.3)

Boriskina's metaphor for the cryptoclass: it is *semantically
heterogeneous* (its members can have very different lexical meanings)
yet *cognitively uniform* (the underlying categorising feature is
constant).

### 5.1 — Prototype (эталон)

The **prototype** (*эталон*) of a class is the **concrete noun** whose
denotation **most clearly instantiates** the categorising feature.
Examples (Boriskina p. 47):

- *Water* is the prototype of Res Liquidae (категориальный признак —
  жидкое).
- *Needle* / *thorn* — Res Acutae.
- *Spear* / *arrow* — Res Longae Penetrantes.
- *Ball* — Res Rotundae.
- *Pebble* / *small graspable thing* — Res Parvae.
- *Thread* — Res Filiformes.

For the prototype noun, the categorising feature is *constitutive of its
denotation* — *water* without [+liquid] is unintelligible. For the
prototype, class assignment is therefore **non-metaphorical** —
prototypes are not metaphoronyms.

### 5.2 — Metaphoronym (метафороним)

Other nouns — particularly the **non-object nouns** (abstract entities
like emotions, mental states, social institutions) — enter the class by
**analogy with the prototype**, mediated by metaphor. Boriskina:

> *Имена абстрактной семантики классифицируются по аналогии с эталоном
> криптокласса. … Имена, которые классифицируются по аналогии с
> эталоном криптокласса, получают статус метафоронимов криптокласса.*
> (p. 48)

A metaphoronym is therefore an abstract noun classified by analogy with
the prototype of a class.

### 5.3 — Family resemblance and fuzzy boundaries

The class membership condition is **family resemblance** (Wittgenstein),
not necessary-and-sufficient conditions. No feature is obligatory for
every member of the class. This implies:

- A noun can be **partly** in a class (its ИРа and ПоКА for the class
  are non-zero but not maximal).
- A noun can be in **several** classes at once — its
  [[cryptoclass-portrait]] is a *vector* across all classes, not a
  one-hot membership label. This is the [[protean]] behaviour of nouns,
  identifiable in mythological thinking and preserved in language.

This vectorial-membership claim is what makes the analytical method
**quantitative**. A noun's relationship to a class is a number (ИРа and
ПоКА), not a yes/no.

### 5.4 — Ограничен (bounded set of classes per noun)

> *Хотя принадлежность имени к криптоклассу может меняться с каждым
> словоупотреблением, набор криптоклассов, в которые входит это слово,
> ограничен.* (p. 48)

Class membership of a noun is fluid token-by-token, but the **set of
classes** the noun ever joins is *bounded*. *Fear* is in many classes
(Liquidae, Acutae, Parvae, Continens, …) but is **not** in arbitrary
others (e.g. it does not seem to be in Filiformes for English). The
project's automated pipeline must therefore expect and capture this
sparsity — most `(emonym × class)` cells will be non-zero, but not all.

---

## 6 — Paleo-semantic interpretation of cryptoclass (§1.2.4)

The "*палеосемантическая интерпретация*" of the cryptoclass is what
Boriskina calls the interpretation that ties cryptoclasses to the
**earliest stratum** of linguistic cognition. The key claim (p. 55):

> *«Скрытая память» языка обусловлена одной из его функций —
> кумулятивной.* — Language's "hidden memory" arises from its
> cumulative function: the residual deposit of all earlier categorising
> activity.

The cryptoclass therefore *systematises naïve language categorisation of
the semantic continuum* — and is uniquely suited to describing **abstract
(non-object) nouns**, which are taxonomically intractable by ordinary
classification methods. The reason: abstract nouns *lack собственная
сочетаемость* (Morkovkin's term — "proper combinability") and acquire
their combinatorial pattern by **borrowing** from material entities. They
have only *несобственная* (non-proper, metaphorical) combinability.
Cryptoclass analysis is the analysis of this borrowed combinability.

Three consequences for the project:

1. The corpus pipeline should not expect a clean lexical match between
   emonym and classifier — the relationship is *metaphorical
   combinatorial* by definition.
2. *Etymological data* are relevant inputs to class assignment for
   marginal cases (cf. Boriskina §1.2.4 and the running use of OED in her
   English work).
3. The Spanish dictionary tradition (DLE, *Diccionario de uso del
   español de María Moliner*, *Diccionario de fraseología actual*) is
   the relevant analogue and should be tapped per `ROADMAP.md` Phase 1.

---

## 7 — Cryptoclass as manifested in collostructions (§1.2.5, §1.3 intro)

The transition from the cryptoclass-as-theoretical-object to the
cryptoclass-as-corpus-detectable phenomenon goes through the
**collostruction**.

### 7.1 — Collostruction definition

> *Коллострукция (collostruction) — относительно новый лингвистический
> гибрид, разрабатываемый в работах Ст. Гриса и А. Стефановича …
> объединяющий лексику и синтаксис, а именно колло-кацию, как любое
> словосочетание, и синтаксическую конст-рукцию в понимании Ч. Филлмора,
> А. Гольдберг и С. Ханстон.* (p. 62)

A collostruction is a lexico-syntactic hybrid: a lexical collocation
plus a syntactic construction, treated as a single unit. The notation is
brackets: `[X flows]`, `[a flow of X]`, `[to stop X flow]`, etc.

The point of the unit: it captures the **information of how a particular
predicate word selects its argument across a specific syntactic shape**.
Three collostructions of the predicate *flow* (Boriskina p. 69):

```
[a liquid flows]     — subject-intransitive
[a flow of liquid]   — substantive
[to stop liquid flow] — objective
```

Each is diagnostic of Res Liquidae *separately*. Together they form the
classifier set of *flow*; pooled across all liquid-predicate words, they
form the diagnostic classifier set of the class.

### 7.2 — Why collostructions, not collocations alone

A bare collocation (*fear + flow*) is too weak: it loses the syntactic
direction of the relation. The same two lexemes can produce *fear flows*
(intransitive, Res Liquidae), *flow of fear* (substantive, also
Res Liquidae but a different construction), *to flow with fear*
(idiomatic, marginally diagnostic). The **construction-type** carries
information that the collocation alone does not.

Hence the project's twelve-slug controlled vocabulary in `data/SCHEMA.md`
— each slug encodes a construction shape, and the data table represents
each citation by the `(classifier_lemma, construction_type)` pair.

### 7.3 — Why this construct fits Mel'nikov's системология

Boriskina explicitly aligns her use of *collostruction* with Mel'nikov's
*системология* (systemic linguistics). Following Mel'nikov, she distinguishes:

- **Экстенциальная** valency — *occupied* valency: the realised slot in
  an actual sentence.
- **Свободная** valency — *free* (potential) valency. Subdivided into:
  - **потенция** — weak potential, low predisposition to manifest;
  - **интенция** — strong potential, high predisposition to manifest.

A noun's [[cryptoclass-projection]] is precisely a set of **intentions**
— strong potentials to occupy specific slots in specific collostructions
of a class. The diagnostic collostructions reveal these intentions; the
quantitative analysis (ИРа, СИ, ПоКА) measures their strength.

> *Интенции имени обусловлены его криптоклассной принадлежностью, что
> позволяет говорить о криптоклассных интенциях имён.* (p. 63)

### 7.4 — The magnetic-field metaphor

Boriskina's intuitive image (p. 63):

> *Как незримое силовое поле магнита делается видимым с помощью железных
> опилок, так и системообразующий признак глубинной языковой семантики
> динамически проявляется в коллострукции.*

— "Just as the invisible force field of a magnet is made visible by iron
filings, the systemic feature of deep language semantics is dynamically
revealed in collostruction." The collostruction is the iron filings; the
class feature is the magnetic field.

---

## 8 — The six-stage methodology (§1.3)

This is the heart of the dissertation's operational chapter. Boriskina
specifies six stages from "I want to find a cryptoclass" to "I have a
quantitative portrait of this noun." The Spanish project's pipeline must
implement an analogue of each.

### 8.1 — Stage 1: Identify systemic features (выявление системообразующих признаков)

> *Первостепенная задача состоит в установлении семантического признака,
> который лежит в основании криптокласса и который выражен явно в
> друг(ом/их) язык(е/ах).* (p. 66)

The first task is to identify the **semantic feature** that grounds the
class and that is **overtly expressed** in some other language.
Boriskina draws on three sources:

1. Language databases (e.g. ИЯ РАН "Языки Мира") that catalogue
   classification systems.
2. Typological studies of nominal classes and numeral classifiers
   (Aikhenvald 1998, Гилярова 2001, *Aquamotion 2007*).
3. Specialised studies of metaphor and primary categorisation
   (Boriskina 2003 on the metaphorics of first elements: fire, water,
   air, earth).

For English she ended up with six **systemic features**:

- *Способность предмета к самостоятельному перемещению по образу и
  подобию жидкого тела* — ability to move independently like a liquid
  body (→ Res Liquidae).
- *Способность предмета благодаря своей длинно-тонкой стабильной форме
  проникать в другие тела* — ability of a long-thin stable-form object
  to penetrate other bodies (→ Res Longae Penetrantes).
- *Способность предмета перемещаться подобно телу круглой формы* —
  ability to move like a round body (→ Res Rotundae).
- *Соизмеримый с рукой (кистью человека) размер предмета, позволяющий
  им манипулировать* — hand-graspable size (→ Res Parvae).
- *Нестабильная (нитеподобная) форма* — unstable, thread-like form
  (→ Res Filiformes).
- *Остроконечность* — sharp-pointedness (→ Res Acutae).

> *Все вышеперечисленные признаки связаны с базовыми свойствами и формами
> организации (устройства) вселенной, т.е. с топологией мира.* (p. 68)

All six features are **topological** — they pick out basic spatial /
material properties of the world. For Spanish, the project adds two:

- *Containment* / *capacity to enclose* (→ Res Continens).
- *Flatness* / *layered extent* (→ Res Planae).

Both are admissible on the contrastive principle (some classifier
languages mark them) and on Spanish corpus evidence.

### 8.2 — Stage 2: Build the classifier set (формирование набора классификаторов криптокласса)

For each systemic feature, build the **cluster of predicate words** whose
semantics encode the feature, then write out the **collostructions** in
which those predicate words select for class members.

Boriskina (p. 68): *На данном этапе для каждого признака задаётся
кластер предикатных слов, в семантике которых искомый признак … выступал
в роли эхо-семы и предвосхищающий «облик партиципанта», теперь
присутствует в виде фоновой семы, унаследовавшей и классифицирующую
функцию, т.е. являющейся классемой (в терминологии В.А. Виноградова).*

The classifier set is therefore a set of **classems** (фоновые семы /
эхо-семы — background semes / echo-semes) realised as a set of predicate
words and the collostructions they head. Concretely, for Res Liquidae,
the lemma *flow* contributes the set `{[X flows], [flow of X], [stop X
flow]}`.

Source words used (Boriskina p. 69): the *Oxford English Dictionary*
(etymology), CUP / OUP / Macmillan / Lingvo dictionaries (current usage),
the historical sub-corpus *COHA* (diachronic confirmation), and the
*Grammar Patterns 1: Verbs* COBUILD model (verb-construction inventories).

**For Spanish**: the equivalent sources are *DLE* (RAE), *Clave*, *Diccionario
de María Moliner*, *Corpus del Español: Web/Dialects*, *CORPES XXI*, and
the Spanish part of the *Aquamotion* and other typological surveys where
available. The seed classifier sets are already partially captured in the
column headers of the legacy `.xlsx` files; their refinement is
`ROADMAP.md` Phase 0.

### 8.3 — Stage 3: Automatic query, manual processing and sorting

Boriskina describes a **semi-automatic** query process:

- **Step 1**: corpus query for `<predicate_lemma> + <noun_to_test>` with
  context window `(4, 4)`. She experimentally settled on this window
  size as the best balance of recall and noise (~30% noise floor).
- **Step 2**: filter the hits down to those where the predicate's
  diagnostic seme is genuinely activated (manual).
- **Step 3**: tag the surviving hits by the specific collostruction they
  realise.

Example query (p. 70): `<stick> + <pierce>` returned 146 hits, of which
~62% were truly diagnostic. The remaining 38% noise included cases
like *"The light was piercing, but the pain passed quickly"*, where
*pierce* and the test noun *pain* are not syntactically related.

**For Spanish** this stage is the bottleneck — Donina spent ~3,400 hours
on the equivalent (see `notes/methodology-donina.md` §6, when written).
The project's strategy: replace Step 2's manual seme-filter with an
LLM-assisted filter calibrated against the gold set. See `ROADMAP.md`
Phase 3.

### 8.4 — Stage 4: Corpus testing of abstract noun combinability

The actual cryptoclass-assignment step. For each candidate non-object
noun *xᵢ*, test whether it can fill the subject (or object) slot of the
class's diagnostic collostructions. Concretely:

> *Имя xᵢ тестируется на возможность замещать позицию субъекта в
> коллострукциях криптокласса «Res Longae Penetrantes» [S penetrates
> smth.].* (p. 71)

If *light* fills `[S penetrates X]` in the corpus, *light* projects into
Res Longae Penetrantes. Boriskina recommends querying by **lemma**
(`lemmas` parameter in COCA's interface), since wordform queries miss
inflectional variants and produce incomplete pictures.

### 8.5 — Stage 5: Quantitative analysis (количественный анализ материала)

This is where the framework's quantitative apparatus is **defined**.
Per noun *xᵢ* (where `i ∈ {1, …, N}`) and per cryptoclass:

**Variables:**

- `Qᵢ` — absolute combinatorial index: the number of distinct
  classifiers of the cryptoclass with which the noun co-occurs in the
  corpus.

- `Q̂ᵢ = Qᵢ / M`, where `M` is the total number of classifiers of the
  cryptoclass. This is **ИРа** — the index of combinatorial diversity
  ([[ira]]; English IDC). Range: `0 < ИРа < 1`.

- `cᵢⱼ` — the frequency of co-occurrence of noun *xᵢ* with classifier
  *yⱼ* in the corpus. This is the *combinatorial selectivity*
  ([[si]]; СИ) of the noun for that classifier.

- `Sᵢ = Σⱼ cᵢⱼ` — total frequency of the noun's combinability with all
  classifiers of the class. Boriskina (p. 74) calls this absolute /
  relative value the **ПА** (показатель активности) — *activity index*
  of the noun within a single class. ПА is what the sixth column of the
  COEL table stores.

- **ПоКА** ([[poka]]; English CAC) — the *share* of the noun's total
  cross-class activity that goes to class *k*: `ПоКА(xᵢ, class_k) =
  Sᵢ(class_k) / Σ_l Sᵢ(class_l)`. ПоКА is therefore derived **from** ПА
  values; the two are distinct quantities and must not be confused.

**Light worked example (Boriskina p. 73–74):**

> The first row of the Liquidae table shows the noun *light*. *Light*
> co-occurs with all 13 of the class's classifiers, so `Q_light = 13`,
> `ИРа_light = 13/13 = 1`. The total frequency of *light* with
> Res Liquidae classifiers in COCA is `S_light = 643`. The
> per-class **ПА** is `ПА(light, Res Liquidae) = 0.066`; by
> contrast, `ПА(information, Res Liquidae) = 0.12`, so *information*
> is *roughly twice as active* in Res Liquidae as *light*, even
> though *light* may have higher absolute frequency overall. The
> derived **ПоКА** (share of *light*'s cross-class activity going to
> Res Liquidae) is reported in §3.1 as **33.08 %** — see §10 below.

### 8.6 — Stage 6: Interpretation (интерпретационный)

> *Лингвистическая интерпретация полученных результатов лежит за пределами
> алгоритма и относится к неформализуемой части исследования.* (p. 76)

The interpretation stage is **outside the formal algorithm** — it
involves comparing portraits across nouns, ranking classes within a
noun, predicting how the noun's combinatorics will expand, and writing
the linguistic narrative.

Three explicit interpretation tasks (Boriskina p. 77):

1. Explain why the noun has *this particular set* of cryptoclasses (not
   others).
2. Rank the cryptoclasses of the noun by likelihood of appearance in
   text.
3. Predict expansion of the noun's combinatorial range and the
   appearance of new metaphorical expressions.

For the project these are Phase 7 (statistics) and Phase 8 (clustering)
in `ROADMAP.md` — both come after Stage 5's quantitative output exists
in `outputs/poka.csv`.

---

## 9 — The quantitative apparatus: ИРа, СИ, ПоКА (reading guide)

The three indices are mutually independent — they measure different
things about the same `(noun, classifier_set)` interaction. Reading
guide for the project:

### 9.1 — ИРа (IDC) — index of combinatorial diversity

- What it measures: **breadth**. The share of the class's classifier
  inventory that the noun reaches at all.
- Range: `0 ≤ ИРа ≤ 1`.
- High ИРа (≥ 0.8): the noun combines with *most* of the class's
  classifiers — its cryptoclass-projection is "wide."
- Low ИРа (< 0.2): the noun combines with only a few classifiers —
  its projection is "narrow."
- ИРа = 0: the noun does **not** project into the class (it is not a
  member).
- ИРа is relatively **stable** across corpus updates (Principle 1 of
  §3.2 in Boriskina — see §10 of this file).

### 9.2 — СИ (combinatorial selectivity)

- What it measures: **concentration per classifier**. How often the
  noun appears with a *specific* classifier of the class.
- Range: `0 ≤ СИ ≤ ∞` (it is a raw frequency, not normalised).
- High СИ for one classifier + low СИ for others = the noun is "stuck"
  to one classifier, often via a frozen idiom (e.g. *take pity on smb*
  has СИ ~24 000+ in COCA, dominating *pity*'s entire profile).
- СИ is the *most variable* of the three indices across corpus updates
  (Principle 4 of §3.2).

### 9.3 — ПоКА (CAC) — cryptoclass activity coefficient

- What it measures: **depth/frequency**. The share of the noun's *total*
  cryptoclass activity that goes into this particular class.
- Range: `0 ≤ ПоКА ≤ 1` (it is a share / fraction).
- High ПоКА: the noun lives mostly in this class.
- Low ПоКА: the noun is only weakly associated with this class.
- Sums to 1 across all classes the noun projects into.

### 9.4 — How they combine in practice

For each `(noun, class)` cell:

| ИРа | ПоКА | Reading |
|---|---|---|
| high | high | Strong, broad membership — class is "central" to this noun. *Light* in Res Liquidae has ИРа=1, ПоКА=0.33. |
| high | low | The noun reaches many classifiers but only rarely — class is a "potential" projection, not dominant. *Light* in Res Filiformes has ИРа=0.88, ПоКА=0.008. |
| low | high | The noun reaches few classifiers but often, typically via a frozen idiom. *Pity* in Res Parvae: ПоКА=0.90 driven by `take pity on smb`. |
| low | low | Marginal membership — noun is in the class only occasionally and via few classifiers. *Light* in Res Rotundae: ИРа=1, but ПоКА=0.011 — protective. |

The two-index logic is what makes the analysis robust against
idiosyncratic frequency effects. A frozen idiom can inflate ПоКА but not
ИРа; a productive but rare pattern can lift ИРа but not ПоКА.

### 9.5 — For the Spanish project

The `outputs/poka.csv` table planned in `archive/plan-from-scratch.md`
Phase 6 should have one row per `(emonym, variant, cryptoclass)` with
columns `(S_raw, S_normalised_poka, IDC_ira)`. СИ values are stored per
`(emonym, variant, classifier_lemma)` and aggregated to ПоКА by sum.

---

## 10 — Cryptoclass portrait (§3.1) — the *light* worked example

Boriskina opens Chapter 3 with the portrait of *light* (a six-class noun
with very high IDC across all six). The portrait has two visualisations:

**Visualisation 1: IDC bar chart** (рис. 9 of the dissertation)

| Class | ИРа of *light* |
|---|---|
| Res Rotundae | 1.000 |
| Res Parvae | 1.000 |
| Res Liquidae | 1.000 |
| Res Filiformes | 0.875 |
| Res Acutae | 0.875 |
| Res Longae Penetrantes | 0.875 |

*Light* is unique in the COCA data for having such high breadth — it
combines with **all six** classes, almost saturating each.

**Visualisation 2: ПоКА pie chart** (рис. 10)

| Class | ПоКА of *light* |
|---|---|
| Res Parvae | 50.69% |
| Res Liquidae | 33.08% |
| Res Longae Penetrantes | 8.68% |
| Res Acutae | 5.65% |
| Res Rotundae | 1.13% |
| Res Filiformes | 0.77% |

Three observations Boriskina makes (p. 280–281):

1. **The two visualisations diverge**: high IDC in Res Rotundae does
   not translate into high CAC — *light* fits the ball-image
   collostructions but rarely, in author-creative contexts (*ball of
   light*, *rolled the light into scrolls*).
2. **The dominant classes are Res Parvae (50.69%) and Res Liquidae
   (33.08%)** — corresponding loosely to the two scientific theories of
   light (corpuscular = *Res Parvae*, wave = *Res Liquidae*). The
   coincidence is not a coincidence: science formalises what naïve
   categorisation already encodes.
3. **Cryptoclass activity by class is asymmetric across construction
   types.** In Res Parvae, *light* combines with classifiers mostly via
   the **objective** construction (`[take light]`). In Res Liquidae, it
   is predominantly **subject-intransitive** (`[light flows / pours /
   wells up]`). The construction-type breakdown matters: same class,
   different syntactic shape, different scientific image.

The portrait is the unit of comparison across nouns (and, in Donina's
extension, across variants of the same noun).

---

## 11 — Four principles of cryptoclass distribution (§3.2)

Boriskina's finding (p. 283): *Найти одинаковые портреты имён оказалось
практически невозможно: каждое имя специфично в своём криптоклассном
представлении.* No two nouns share the same portrait. But there are
**four general principles** that the distributions obey.

### 11.1 — Principle 1: Relative stability of IDC

ИРа of a noun across corpus updates is *relatively stable*. The number
of classifiers it co-occurs with (`n`) and the number it does *not*
co-occur with (`p = M − n`) shifts only slowly, typically through the
emergence of "author metaphors" — novel creative expressions that
eventually leak into mainstream usage.

The reason ИРа is stable: it reflects the "**прочность воспоминаний**"
(strength of memories) of the noun — Apresyan's image (1995: 267) of
a word as carrying with it the shadow of all past and possible future
contexts. High ИРа = many strong memories of the noun with class
classifiers. Low ИРа = few strong memories.

A worked example: *knowledge* (рис. 11 in the dissertation), ranked by
IDC:

| Class | ИРа of *knowledge* |
|---|---|
| Res Liquidae | 0.538 |
| Res Filiformes | 0.500 |
| Res Parvae | 0.444 |
| Res Longae Penetrantes | 0.250 |
| Res Acutae | 0.125 |

For *knowledge*, the feature [+fluid] is the most robustly remembered
("knowledge flows, drips, leaks"); the feature [+sharp] is the
weakest. *Knowledge* is therefore a primarily-fluid noun in the
English imagination.

Boriskina formalises this in the **law of cryptoclass distribution**
(*закон криптоклассного распределения*) — the combinability of a noun
*depends on which cryptoclasses the noun belongs to*. The law is the
counter-claim to the older intuition that nouns have "free" combinability
(*свободная сочетаемость*). They don't; the cryptoclass system
constrains.

### 11.2 — Principle 2: Maximum vs. minimum diversity of combinability

Nouns differ in whether they have **one or two strongly dominant
classes** (with maximum ИРа) or are **uniformly weak across all
projections** (minimum ИРа).

Examples Boriskina gives:

- **Maximum-in-one-class** (*disappointment*): Res Acutae ИРа = 0.625
  dominant over the other four projections (all below 0.25). The
  English-language culture has strongly fixed *disappointment* as a
  *sharp* phenomenon ("a stab of disappointment, pierced by
  disappointment").
- **Minimum / flat across projections** (*grace*): Res Liquidae 0.231,
  Res Parvae 0.222, Res Longae Penetrantes 0.125, Res Filiformes 0.125
  — the differences are slight, the noun is "fragmentary" across all
  classes. *Grace* is not fixed to any particular image.
- **Maximum-everywhere** (*fear*, рис. 16): Res Parvae 0.778, Res Filiformes
  0.750, Res Rotundae 0.667, Res Longae Penetrantes 0.625, Res Liquidae
  0.615, Res Acutae 0.500 — all six are ≥ 0.5, indicating *fear* has
  established memories in every class. Compare *light* above (same
  pattern at even higher level).

This is methodologically important: a low-IDC pattern across all classes
doesn't disprove cryptoclass membership — it indicates a *young* or
*peripheral* noun whose categorisation is still loose.

### 11.3 — Principle 3: Uniform vs. non-uniform cryptoclass activity

This principle is about ПоКА (CAC) rather than ИРа. Nouns differ in
whether their CAC is concentrated in one class or spread evenly.

Examples (Boriskina p. 288–290):

- **Maximally concentrated** (*emotion*): Res Liquidae 42.50%,
  Res Parvae 38.75%, Res Filiformes 13.75% — most activity goes to two
  classes.
- **Even more concentrated** (*abuse*): Res Parvae 93.9%, others
  marginal — almost entirely a Res Parvae phenomenon, driven by the
  high СИ of `take abuse` (СИ = 129 in COCA, per p. 289).
- **Evenly distributed** (*magic*): Res Liquidae 35.71%, Res Parvae
  33.33%, Res Filiformes 30.95% — three classes share activity almost
  equally. The phenomenon is rare; *magic* is one of the few examples.
- **Uniformly low across projections** (*availability*): present in
  three classes but with CAC values all ≤ 3. Such cases represent a
  *latent* potential of the language system — a noun whose
  cryptoclass-image is "neither used up nor yet activated."

### 11.4 — Principle 4: Variability of СИ

Combinatorial selectivity is the **most variable** of the three
quantitative parameters. СИ can shift when:

- the corpus is replenished with new texts;
- a classifier becomes lexicalised in a new construction;
- a frozen idiom is replaced by a competing form (Boriskina cites
  Dobrovolsky's Russian example *брать участие в XIX в.* → *принимать
  участие в XX в.* — the verb shifted from *брать* to *принимать* but
  remained inside the Res Parvae cluster).

### 11.5 — Consequence: a noun is not "freely combinable"

The conclusion from the four principles:

> *Закон криптоклассного распределения имён противоречит представлению о
> «всеядности» имени, которое бытует в лингвистике.* (p. 291)

The law of cryptoclass distribution **contradicts** the older intuition
that abstract nouns can combine freely. Their combinatorics is
constrained by the set of classes they project into and by the
distribution of ИРа and ПоКА across those projections.

---

## 12 — Five types of metaphoronyms (§3.3)

Comparing portraits across the five quantitative parameters
(number of projections, ПоКА, ИРа, СИ, evenness of distribution),
Boriskina identifies **five types** of metaphoronyms. The full
taxonomy is in §3.3.1 through §3.3.5; this file covers Type 1 in detail
(the dominant pattern), summarises Types 2–5, and leaves the full
extraction for `notes/cryptoclasses/_types-of-metaphoronyms.md` (TBD).

### 12.1 — Type 1: Cryptoclass dominant

> *Имена данного типа могут иметь от двух до шести криптоклассных
> проекций, но при этом они характеризуются максимальной активностью и
> максимальным разнообразием сочетаемости в одном и том же криптоклассе,
> который можно считать криптоклассной доминантой метафоронима.* (p. 293)

Nouns of Type 1 have between 2 and 6 projections, but their **maximal
IDC** and **maximal CAC** fall in the **same class** — the
*cryptoclass dominant* of the metaphoronym. This is the most common
pattern.

Boriskina identifies sub-types by which class is dominant:

**Type 1.1 — Res Parvae dominant.** A very common pattern. Includes the
nouns: *aim, contact, example, gain, impact, instance, thesis, aspect,
rate, humor, alternative, fight, sense, relation, relationship,
behavior, belief, chance, control, convention, mind, respect, debt,
charity, budget, environment, economy, economics, job, work, right,
donation, dream, duty, effort, fee, freedom, language, education,
thought, experience, deal, culture, crisis, case, error, excuse,
entertainment, fame, fault, danger, disease, issue*.

Examples (Boriskina p. 295):
- *risk*: Res Parvae 98.11%, Res Liquidae 1.89% — almost entirely
  "graspable."
- *mistake*: Res Parvae 95.83%, Res Liquidae 4.17% — note that *mistake*
  is literally *mis-take* (etymologically "to take wrongly"), confirming
  the deep tie between the lexical form and the Res Parvae image.
- *soul* (рис. 24): Res Parvae 71.29%, Res Liquidae 26.73%, Res Filiformes
  1.98%.
- *word* (рис. 25): Res Parvae 53.92%, Res Liquidae 33.78%, Res Filiformes
  6.24%, etc. (5 of 6 classes).
- *relationship* (рис. 27): Res Parvae 71.05%, Res Liquidae 14.47%,
  Res Filiformes 10.53%, others marginal.

**Type 1.2 — Res Liquidae dominant.** Includes: *love, sympathy, grace,
emotion, horror, terror, aid, guilt, music, secret, volume, waste,
wonder*.

Examples:
- *love* (рис. 28): IDC ranked Res Liquidae 0.615, Res Filiformes 0.500,
  Res Parvae 0.444, Res Longae Penetrantes 0.375, Res Rotundae 0.333,
  Res Acutae 0.250.
- *grace* (рис. 29): ПоКА Res Liquidae 41.67%, Res Filiformes 20.83%,
  Res Parvae 25.00%, Res Longae Penetrantes 12.50%.
- *emotion* (рис. 17): ПоКА Res Liquidae 42.50%, Res Parvae 38.75%,
  Res Filiformes 13.75%.

**Note for Spanish**: this typology is built from English. The Spanish
counterpart will need to be rebuilt empirically — but with the
expectation, given the typological universality of [+graspable] and
[+liquid] images, that Spanish emonyms will mostly fall into Types 1.1
and 1.2. *Miedo*, *tristeza*, and *amor* are the cases where the
prediction can be tested first.

### 12.2 — Type 2: Two equipotent dominant classes

(Not fully extracted from this read; the dissertation lists about 30
nouns under this sub-type, all with two near-equal CAC values.)

Indicator pattern: ПоКА of the top class is ≤ 1.5× the second. Example
candidates (English): *trust*, *hope*, *interest*. To verify against the
dissertation: read pp. 299–303 in a future session.

### 12.3 — Type 3: Three nearly-equal classes

Indicator: ПоКА spread evenly across three classes (each in 25–40%
range). Example: *magic* (cited above, рис. 19). Very rare.

### 12.4 — Type 4: Uniformly low across all projections

Example: *availability* — present in 3 classes but with CAC values all
< 3%. Indicates either a "depleted" or "not yet activated" noun.

### 12.5 — Type 5: One projection with extreme CAC (idiom-driven)

Pattern: a single class has ПоКА ≥ 90%, driven by a single high-СИ
classifier (typically a frozen idiom). Example: *pity* (рис. 21), with
Res Parvae ПоКА = 90% driven entirely by `take pity on smb`
(Boriskina p. 292 gives the share but not a raw СИ figure for this
expression).

The interpretation: when СИ of one classifier exceeds the *average* СИ
of the class by more than an order of magnitude, the **classifier
itself is grammaticalising** — it is no longer a free predicate but
a frozen expression. Other examples Boriskina cites on p. 292: *take
time* (СИ 21 465 сл./употрбл.) and *take care* (СИ 12 100). These
should arguably be removed from the active classifier set when
computing ПоКА, lest they distort the picture. *(This is a
methodological note relevant to the Spanish pipeline — see §13 below.)*

---

## 13 — Implications for Spanish (what carries over, what doesn't)

This section synthesises what the project inherits from Boriskina and
where the Spanish work must diverge or extend.

### 13.1 — What carries over directly

1. **Conceptual framework.** Cryptoclasses, classifiers, collostructions,
   metaphoronyms, prototypes — all directly usable for Spanish.
2. **Six inherited classes.** Res Liquidae, Filiformes, Rotundae, Longae
   Penetrantes, Acutae, Parvae — all admissible under the contrastive
   principle (each has a typological correlate). Spanish data confirms
   their relevance.
3. **The diagnostic-collostruction method.** The unit of analysis is the
   `(classifier_lemma, construction_type)` pair, exactly as in Boriskina.
4. **The quantitative apparatus.** ИРа, СИ, ПоКА are
   language-independent: they compute over any corpus, given the
   classifier set. Spanish indices will be computed by the same
   formulas.
5. **The cryptoclass portrait.** A vector across classes is the right
   unit of comparison for any language.
6. **The four principles of distribution.** They are formulated in
   language-neutral terms and should hold for Spanish.

### 13.2 — Where Spanish requires adaptation

1. **Two added classes.** Res Continens and Res Planae are not in
   Boriskina. They are admitted on (a) contrastive grounds and (b)
   prima facie corpus evidence. Their **factor-analysis confirmation**
   is `archive/plan-from-scratch.md` Phase 7 — they will be either
   retained, merged, or dropped depending on whether they behave as
   independent factors in the Varimax solution.

2. **Construction-type schema is finer.** Twelve slugs (per
   `data/SCHEMA.md`) rather than Boriskina's original seven. The
   refinement is mostly **locative split** — *Res Continens* requires
   distinguishing state-inside / motion-into / motion-out, which the
   original Russian-Englished schema collapsed.

3. **Gender as covariate.** Spanish has grammatical gender (Vinogradov
   VI) on top of cryptoclasses (Vinogradov I–III). The two systems
   coexist but the gender is **not the cryptoclass**: *miedo* (masc)
   and *tristeza* (fem) can both belong to Res Liquidae. Per
   `archive/plan-from-scratch.md` Phase 2's "Spanish-specific gotcha,"
   gender is treated as a covariate, not a stratifier. Empirical work
   should check whether gender correlates with cryptoclass distribution
   — Boriskina did not face this question.

4. **Corpora are stratified by variant.** Boriskina worked monolingually
   (COCA, COHA, BNC). Donina's extension to variants is what makes the
   Spanish project's data layout *variant-stratified* by default —
   every cell of `data/citations.tsv` carries a `country` field. The
   `(emonym × class × variant)` cube is the Spanish-specific data
   structure.

5. **Identification of idiom-driven distortions.** Boriskina's Type-5
   metaphoronyms (e.g. *pity* via *take pity on smb*) show how frozen
   idioms can dominate ПоКА artificially. Spanish has its own such
   patterns — *tener miedo*, *dar miedo*, *tener pena*, etc. — that
   may need to be either marked separately (the `idiomatic`
   construction-type slug exists in `data/SCHEMA.md`) or filtered out
   of ПоКА calculations. Decide per cryptoclass case in
   `notes/cryptoclasses/<class>.md`.

### 13.3 — Open methodological questions

These are framework-level questions the project should resolve before
Phase 4 (scaled collection):

- **Q1**: When the LLM filters KWIC hits for genuine cryptoclass use,
  what is the operational definition of "genuine" — Boriskina's
  echo-semic activation, or a coarser surface filter? The project's
  precision/recall metric is measured against the gold set, so the
  definition is empirical; but the LLM prompt design needs to
  encode Boriskina's distinction between *собственная сочетаемость* and
  *несобственная (метафорическая) сочетаемость* (Morkovkin 1984;
  Boriskina §1.2.2).

- **Q2**: How is `M` (the total number of classifiers per class)
  determined for Spanish? Boriskina derived `M` empirically from the
  English predicate inventory. For Spanish, `M` per class is a
  *project-defined* count fixed at the start of Phase 4. Once fixed it
  cannot be changed without re-computing all ИРа values. Locking the
  classifier inventory therefore precedes computing any quantitative
  index.

- **Q3**: Should the Spanish indices be reported per-variant or
  pooled? Per-variant is the scientific point (Donina's contribution),
  but pooled values exist as a "Spanish overall" reference. Best
  practice: report both, with pooled marked as such.

- **Q4**: How is **author creativity** (Boriskina §3.1 closing note)
  separated from established metaphoronymy? Boriskina's answer is
  *temporal stability across COCA's six-monthly updates*. For
  Spanish, the analogue is stability across corpus revisions of
  *Corpus del Español* and CORPES XXI. Phase 3 of `ROADMAP.md` should
  capture corpus-version provenance per citation so this question can
  be answered post-hoc.

### 13.4 — What this file does *not* cover

- **Chapter 2 case studies.** Boriskina's six chapters of class-by-class
  analysis (pp. 79–278) are not extracted here. Each class needs its
  own file in `notes/cryptoclasses/<class>.md`, with the full
  classifier inventory and the IDC/CAC distribution of the major
  English metaphoronyms. Future work.
- **Chapter 3 §§3.4–3.5.** The "parallel rows of features" (§3.4) and
  "the aggregate state of emotions" (§3.5) — the latter is **directly
  relevant** to the Spanish emonym project and should be the first
  follow-up extraction after this file. Future work; placeholder added
  to TBD list.
- **Appendices 1–3.** The 500-noun summary table and the two
  IDC/CAC-ranked feature hierarchies (pp. 363–442) are valuable
  reference but not yet extracted.

The unresolved items are tracked as follow-up TODOs at the bottom of
this file.

---

## 14 — Aggregate state of emotions (§3.5)

Boriskina §3.5 (pp. 328–333) is the single section in her dissertation
that **directly compares cryptoclass profiles across emotion nouns**.
Where §§2.1–2.6 work through each cryptoclass class-by-class (one class,
all its metaphoronyms), §3.5 inverts the matrix: one emonym at a time,
across all six classes. This is the closest English-data analog to what
the Spanish project produces in Phase 6 — and the section the Phase 1
*miedo* profile should be compared against directly.

### 14.1 — The framing question

The section opens by quoting Bragina (2007: 294), who quotes Arutyunova:

> «Почему эмоции уподобляются текучему телу (наблюдение Н.Д.
> Арутюновой), а воля – твердости?»

— "Why are emotions likened to a flowing body (Arutyunova's
observation), while will is likened to solidity?" Boriskina recasts
this as a special case of a more general question. Emotion-noun
combinability gives grounds **not only** for that one analogy:

- Why are emotions likened to a thread-like object?
- Why are emotions likened to a graspable, sharp, long-pointed, or
  round object?

The most general formulation, in cryptoclass terms:

> «Почему имя *love* является метафоронимом шести именных
> криптоклассов английского языка, а имя *passion* распределено
> только в трех «Res Liquidae», «Res Parvae», «Res Filiformes»?»

— "Why is *love* a metaphoronym of all six English nominal
cryptoclasses, while *passion* is distributed across only three?"
The very ability to *ask* such questions is, Boriskina argues, a step
toward new knowledge about the language's covert categoriality.

### 14.2 — The mythological-consciousness rationale

Two attributes of mythological-consciousness "remnants" preserved in
modern metaphor are directly relevant (citing Day 1996; Bragina 2007;
Apresyan 2011):

1. **The materiality of non-material entities** (вещность непредметных
   сущностей).
2. **The capacity to "know" them through touch** (способность
   «познавать» их вещность через осязание).

Both apply to emotion nouns. The cryptoclass framework operationalises
this: an emonym distributes across classes whose prototypes are
material, tactile objects, and the distribution is non-random.

### 14.3 — The empirical baseline: every emonym is in ≥ 3 classes

The result of cryptoclass analysis across Boriskina's 21 English
emotion nouns:

> «все они распределены как минимум в трех именных криптоклассах
> английского языка «Res Liquidae», «Res Parvae», «Res Filiformes»»

— **every** studied emonym is distributed across at least three of the
six cryptoclasses, and those three are always the same set: Liquidae,
Parvae, Filiformes. So in English-speaking consciousness emotions are
categorised not only as "flowing/pouring" things but also as
"thread-like" and as "graspable/manipulable" things.

Half the names are most strongly connected to the *liquidity* feature,
which manifests as the maximum diversity of their combinability with
Res Liquidae classifier-collostructions (highest ИРа / IDC there).

### 14.4 — Dominant class per emonym

By IDC dominance (Table 20, §14.7 below), Boriskina's English emonyms
group as:

- **Res Liquidae-dominant** (13 emonyms): *anger, comfort, confidence,
  excitement, grief, guilt, joy, passion, pleasure, pride, relief,
  shame, shock*. The default for English emotion nouns.
- **Res Filiformes-dominant** (3 emonyms): *emotion, shame, desire*.
- **Res Parvae-dominant** (5 emonyms): *feeling, fear, shock, surprise,
  happiness*.

  *Shame* and *shock* each appear in two of Boriskina's prose lists:
  *shame* in both Liquidae- and Filiformes-dominant, *shock* in both
  Liquidae- and Parvae-dominant. Table 20 disambiguates — *shame* is
  Fil 0.375 > Liq 0.308 (Filiformes-first) and *shock* is Par 0.333 >
  Liq 0.308 (Parvae-first). Treat the table as authoritative.
- **Res Acutae-dominant** (2 emonyms): *disappointment, pity*.

Res Rotundae and Res Longae Penetrantes are dominant for no emonym in
this data — they appear only as secondary or tertiary affiliations.
This anticipates Donina's later finding that Rotundae is consistently
the lowest-ranked class for emonyms across English variants.

### 14.5 — Equivalence classes by feature hierarchy

Beyond which class is dominant, §3.5 picks out emonyms sharing the
**same ordered sequence of features** — pairings Boriskina takes to be
empirically interesting even when she cannot explain them. From the
prose:

- *Love* and *hatred* — similar by IDC "memory strength" (Table 20):
  both Liquidae-dominant at high values (0.615 / 0.538), both six-
  class metaphoronyms. Their full sequences match for ranks 1–3
  (Liq → Fil → Par) but diverge at 4–6.
- *Hatred* shares a feature sequence with *sympathy* in Table 21
  (CAC); per the same Table 21, *love* shares an identical sequence
  with the six-class metaphoronyms *anger* and *fear* (Par → Liq →
  Fil → Pen → Acu → Rot). The IDC and CAC groupings need not agree.
- *Love, anger, fear* — same feature sequence in English **(Table 21
  / CAC)**. Boriskina hedges: «случайность или непознанная
  закономерность» — "coincidence or undiscovered pattern."
- *Pleasure, excitement, grief* — similar to *love / anger / fear*
  by hierarchy (also Table 21).
- *Relief* and *pride* — different in many respects but preserve
  mythological images in the same order: liquid → prickling → woven
  (Liquidae → Acutae → Filiformes). A striking parallel between two
  semantically distant emotions.
- *Sympathy, guilt, pleasure* — same IDC taxon (Table 20): their
  associative links with the five activated features rank in the
  same strength order (Liq > Par > Acu > Pen > Fil), though absolute
  IDC values differ (e.g. Guilt 0.615 vs Sympathy/Pleasure 0.385 at
  rank 1).
- *Grief, joy, passion* — close in informational content of their
  bound images. Order is liquid → graspable → thread.
- *Grief* and *joy* — category-identical in English by IDC. Same
  hedging: "coincidence or undiscovered pattern?"

### 14.6 — IDC vs CAC: the "aggregate state" conclusion

Table 21 (CAC, ПоКА) re-ranks emonyms by **raw corpus frequency** in
each class, where Table 20 ranks by **diversity** of classifier
combinations. The two rankings often diverge — *guilt* is Liquidae-
first in both, but Parvae **drops** from 2nd by IDC (0.556, just behind
Liq 0.615) to 3rd by CAC (17), where Res Longae Penetrantes (24)
overtakes it for the second slot.

Boriskina notes that the **"tactility" of most emonyms is maximally
communicatively loaded in modern English** — meaning that, by raw
frequency, Res Parvae leads for the bulk of emonyms. Exceptions where
Liquidae genuinely leads in raw count: *guilt, passion, emotion,
sympathy, relief*.

Comparing Liquidae (∑1) vs Parvae (∑2) raw counts for those "liquid"
exceptions, Boriskina arrives at her answer to the "aggregate state"
question:

> «Эмоции уподобляются и жидкому, и твердому, но скорее твердому
> (круглому как гнев или страх, или острому как жалость и
> облегчение)»

— "Emotions are likened to both liquid and solid, but more so to solid
(round like anger or fear, or sharp like pity and relief)." A telling
detail: *relief* shows equal corpus occurrence in Res Acutae and
Res Liquidae — for English speakers, relief is "both liquid and
prickling."

For *joy* specifically Boriskina cites Uspensky (1997: 152) — a
"light bright liquid that sometimes quietly spreads inside a person
and sometimes bubbles, plays, sparkles, overflows the person,
splashes over the edge" — and adds that *joy* also resembles a
prickling object "capable of penetrating the body like a spear"
(Res Acutae + Res Longae Penetrantes affinity).

### 14.7 — Table 20: IDC (ИРа) hierarchies

Ordered classes per emonym, with IDC values from Boriskina p. 331.
Six columns = the six classes ranked by decreasing IDC. Blank in 5th/
6th column = class present in the published table but IDC value not
shown (always at the long tail); "—" = class genuinely absent for
that emonym in the source. Verify against the PDF before citing.

| # | Emonym | 1st (IDC) | 2nd (IDC) | 3rd (IDC) | 4th (IDC) | 5th | 6th |
|---|---|---|---|---|---|---|---|
| 1 | Love | Liq 0.615 | Fil 0.500 | Par 0.444 | Pen 0.375 | Rot | Acu |
| 2 | Hatred | Liq 0.538 | Fil 0.375 | Par 0.333 | Rot 0.333 | Acu | Pen |
| 3 | Relief | Liq 0.538 | Acu 0.375 | Pen 0.375 | Fil 0.125 | Par 0.111 | — |
| 4 | Pride | Liq 0.385 | Acu 0.250 | Pen 0.125 | Fil 0.125 | Par 0.111 | — |
| 5 | Anger | Liq 0.769 | Rot 0.667 | Acu 0.500 | Pen 0.375 | Fil | Par |
| 6 | Guilt | Liq 0.615 | Par 0.556 | Acu 0.500 | Pen 0.375 | Fil | Rot |
| 7 | Pleasure | Liq 0.385 | Par 0.333 | Acu 0.250 | Pen 0.250 | Fil | — |
| 8 | Sympathy | Liq 0.385 | Par 0.333 | Acu 0.125 | Pen 0.125 | Fil | — |
| 9 | Passion | Liq 0.538 | Par 0.333 | Fil 0.125 | — | — | — |
| 10 | Grief | Liq 0.385 | Par 0.333 | Fil 0.125 | Pen 0.125 | — | — |
| 11 | Joy | Liq 0.462 | Par 0.444 | Fil 0.375 | Acu 0.375 | Pen | — |
| 12 | Fear | Par 0.778 | Fil 0.750 | Rot 0.667 | Pen 0.625 | Liq | Acu |
| 13 | Feeling | Par 0.556 | Liq 0.462 | Acu 0.375 | Fil 0.250 | — | — |
| 14 | Shock | Par 0.333 | Liq 0.308 | Acu 0.250 | Pen 0.125 | Fil 0.125 | — |
| 15 | Surprise | Par 0.333 | Liq 0.308 | Acu 0.125 | Pen 0.125 | Fil 0.125 | — |
| 16 | Happiness | Par 0.667 | Liq 0.308 | Fil 0.125 | — | — | — |
| 17 | Shame | Fil 0.375 | Liq 0.308 | Acu 0.250 | Par 0.222 | Pen | — |
| 18 | Emotion | Fil 0.625 | Liq 0.615 | Par 0.333 | Acu 0.250 | Pen | — |
| 19 | Desire | Fil 0.625 | Par 0.556 | Liq 0.385 | Pen 0.375 | Rot | Acu |
| 20 | Pity | Acu 0.250 | Liq 0.154 | Pen 0.125 | Fil 0.125 | Par 0.111 | — |
| 21 | Disappointment | Acu 0.625 | Pen 0.250 | Par 0.222 | Liq 0.154 | Fil | — |

Abbreviations: Liq = Res Liquidae, Fil = Res Filiformes, Par = Res
Parvae, Acu = Res Acutae, Pen = Res Longae Penetrantes, Rot = Res
Rotundae.

### 14.8 — Table 21: CAC (ПоКА) hierarchies

Ordered classes by raw corpus occurrence count (∑) per class, from
Boriskina pp. 332–333. The small number after the emonym name in the
source ("Имя        5" etc.) is the count of populated classes —
reproduced here as the *N classes* column.

| # | Emonym | N classes | 1st (∑) | 2nd (∑) | 3rd (∑) | 4th (∑) | 5th (∑) | 6th |
|---|---|---|---|---|---|---|---|---|
| 1 | Relief | 5 | Acu 110 | Liq 110 | Par 16 | Pen 6 | Fil 1 | — |
| 2 | Guilt | 6 | Liq 26 | Pen 24 | Par 17 | Acu 16 | Fil 5 | Rot |
| 3 | Passion | 3 | Liq 26 | Par 25 | Fil 12 | — | — | — |
| 4 | Emotion | 5 | Liq 34 | Par 31 | Fil 11 | Acu 3 | Pen 1 | — |
| 5 | Hatred | 6 | Liq 14 | Par 14 | Fil 3 | Pen 2 | Acu 1 | Rot |
| 6 | Sympathy | 5 | Liq 10 | Par 7 | Fil 1 | Pen 1 | Acu 1 | — |
| 7 | Shock | 5 | Par 27 | Acu 12 | Liq 6 | Pen 3 | Fil 1 | — |
| 8 | Desire | 6 | Par 18 | Fil 11 | Liq 9 | Pen 6 | Acu 4 | Rot |
| 9 | Feeling | 4 | Par 42 | Liq 36 | Acu 8 | Fil 7 | — | — |
| 10 | Happiness | 3 | Par 12 | Liq 6 | Fil 2 | — | — | — |
| 11 | Joy | 5 | Par 84 | Liq 22 | Fil 6 | Acu 3 | Pen 1 | — |
| 12 | Shame | 5 | Par 23 | Liq 16 | Fil 4 | Acu 3 | Pen 2 | — |
| 13 | Surprise | 5 | Par 10 | Liq 5 | Fil 2 | Acu 2 | Pen 1 | — |
| 14 | Anger | 6 | Par 112 | Liq 55 | Fil 24 | Pen 7 | Acu 5 | Rot |
| 15 | Love | 6 | Par 98 | Liq 91 | Fil 37 | Pen 7 | Acu 3 | Rot |
| 16 | Fear | 6 | Par 64 | Liq 47 | Fil 25 | Pen 23 | Acu 11 | Rot |
| 17 | Pleasure | 5 | Par 103 | Liq 14 | Pen 3 | Fil 3 | Acu 3 | — |
| 18 | Excitement | 5 | Par 17 | Liq 6 | Pen 4 | Fil 1 | Acu 1 | — |
| 19 | Grief | 4 | Par 18 | Liq 8 | Pen 3 | Fil 2 | — | — |
| 20 | Offense | 3 | Par 115 | Liq 6 | Rot 2 | — | — | — |
| 21 | Pity | 5 | Par 99 | Liq 4 | Pen 4 | Acu 2 | Fil 1 | — |

*Offense* and *Excitement* appear in Table 21 but not Table 20;
*Comfort* and *Confidence* are named in §3.5 prose as Liquidae-dominant
but appear in neither table.

### 14.9 — Implications for the Spanish project

What §3.5 produces for English is precisely the deliverable of the
Spanish project's Phase 6, mutatis mutandis:

- **Spanish Phase 6 outputs** are the analogs of Tables 20 and 21,
  but **eight-column** rather than six — the two added classes
  ([[res-continens]], [[res-planae]]) widen the matrix, and whether
  those columns hold up under Varimax (ROADMAP Phase 5/6) is the
  inventory question.
- **Phase 1 comparator for *miedo*.** Boriskina's *fear* IDC ranking
  is `Par 0.778 > Fil 0.750 > Rot 0.667 > Pen 0.625 > Liq … > Acu …`
  and its CAC ranking is `Par 64 > Liq 47 > Fil 25 > Pen 23 > Acu 11
  > Rot`. The Spanish *miedo* analysis should produce equivalent
  rankings; the immediate question is whether Par-dominance carries
  over to Spanish.
- **The "aggregate state" question for Spanish.** Boriskina's English
  answer was "more solid than liquid, mostly round-like or sharp."
  Spanish may answer differently — and the two added classes may
  shift the answer further by giving Spanish a vocabulary for
  "contained" ([[res-continens]]) and "level/flat" ([[res-planae]])
  framings of emotion that English-via-Boriskina doesn't formalise.
- **Equivalence-class analysis (§14.5)** — pairs and triples of
  emonyms with identical feature hierarchies — is a *finding*, not
  just a summary. The Spanish project should report similar
  pairings: if Spanish *amor / ira / miedo* turn out to share an
  ordering (as English *love / anger / fear* do), that is direct
  cross-linguistic evidence; if not, the divergence is itself the
  finding.
- **Per-emonym dominance is the headline number.** For each Spanish
  emonym, the single most important Phase 6 output is "which
  cryptoclass is dominant?" — compared, emonym-by-emonym, against
  Boriskina's English Table 20. Naïve baseline expectation based on
  the English-Spanish translation of the Phase 1 set:
  - *amor* → expected Liquidae (English *love* IDC: Liquidae)
  - *miedo* → expected Parvae (English *fear* IDC: Parvae)
  - *tristeza* → expected Liquidae (English *grief* IDC: Liquidae)
  - *alegría* → expected Liquidae (English *joy* IDC: Liquidae; CAC
    is Parvae, so the answer depends on which index is used as the
    headline)
  - *ira* → expected Liquidae (English *anger* IDC: Liquidae)
  Deviations from these expectations are the substantive cross-
  linguistic findings.

### 14.10 — Open questions raised by §3.5

- **Why are *grief* and *joy* category-identical in English by IDC?**
  Boriskina hedges. The Spanish equivalents — *tristeza* and
  *alegría* — provide a cross-linguistic test. If they are also
  IDC-identical in Spanish, the parallelism is unlikely to be
  coincidence.
- **Why are *love, anger, fear* on the same IDC sequence in English?**
  Same hedging. Spanish *amor, ira, miedo* test the same hypothesis.
- **Will the "every emonym is in ≥ 3 classes" finding extend to
  Spanish, and which three?** In English the three are Liquidae,
  Parvae, Filiformes. The Spanish hypothesis is that the same three
  hold; if not, the difference is reportable.
- **Where do [[res-continens]] and [[res-planae]] fit?** Boriskina's
  English data doesn't include either. The Spanish project's headline
  test of whether the two added classes are real cryptoclasses for
  Spanish is whether they enter the "≥ 3 classes per emonym" set or
  remain marginal — and this is what ROADMAP §Phase 6's Varimax gate
  ultimately decides.

---

## 15 — Reading map (page-level pointers)

For future sessions that need to verify against the source:

| Topic | Page range |
|---|---|
| Term list (canonical glossary) | 4 |
| Introduction (problem statement, hypotheses) | 5–17 |
| §1.1 Evolution of categoriality | 18–41 |
| §1.2 Characteristics of cryptoclass (nine I–IX) | 42–61 |
| §1.2.1 Contrastive principle | 44–47 |
| §1.2.2 Cryptoclass as grammatical lacuna | 46–47 |
| §1.2.3 Structure of cryptoclass | 47–50 |
| §1.2.4 Paleo-semantic interpretation | 55–60 |
| §1.2.5 Manifestation in collostructions | 61–64 |
| §1.3 Methodology — 6 stages | 65–78 |
| §1.3 Stage 1: Systemic features | 66–68 |
| §1.3 Stage 2: Classifier set | 68–69 |
| §1.3 Stage 3: Automatic query | 69–72 |
| §1.3 Stage 4: Test abstract noun combinability | 72 |
| §1.3 Stage 5: Quantitative analysis (formulas) | 72–76 |
| §1.3 Stage 6: Interpretation | 76–77 |
| Chapter 1 Выводы (conclusions) | 77–78 |
| §2.1 Res Liquidae | 81–141 |
| §2.2 Res Filiformes | 142–176 |
| §2.3 Res Rotundae | 177–191 |
| §2.4 Res Longae Penetrantes | 193–224 |
| §2.5 Res Acutae | 227–248 |
| §2.6 Res Parvae | 249–273 |
| §3.1 Portrait of *light* | 279–283 |
| §3.2 Four principles of distribution | 283–293 |
| §3.3 Types of metaphoronyms (5 types) | 293–306 |
| §3.4 Parallel rows of features | 307–327 |
| §3.5 Aggregate state of emotions | 328–333 |
| Chapter 3 Выводы | 334–337 |
| Заключение (general conclusion) | 338–341 |
| Литература (bibliography) | 342–362 |
| Приложение 1 (500-noun summary table) | 363–400 |
| Приложение 2 (IDC-ranked feature hierarchy) | 401–420 |
| Приложение 3 (CAC-ranked feature hierarchy) | 421–442 |

---

## 16 — Follow-up TODOs

1. Extract §3.4 (Параллельные ряды признаков имен, pp. 307–327) — likely
   contains the cross-class feature hierarchies that bear directly on
   the project's Phase 5 cryptoclass-inventory consolidation.
2. Extract Chapter 1 Выводы (pp. 77–78) and the Заключение (pp. 338–341)
   in full — they are condensed re-statements of the framework.
3. Extract one chapter of Chapter 2 (e.g. Res Liquidae §2.1) as a model
   of how Boriskina presents per-class analysis. This will inform the
   template for `notes/cryptoclasses/<class>.md`.
4. Cross-check the project's `data/SCHEMA.md` construction-type slugs
   against Boriskina's seven-type Russian schema (which appears at the
   start of Chapter 2 sub-sections; verify in a future session).
5. Resolve the four open methodological questions (Q1–Q4 in §13.3).

This file should be re-read alongside `notes/methodology-donina.md`
once the latter is written — many of Donina's choices (especially in
her §1.10) presuppose or modify Boriskina's framework, and the
correspondences should be made explicit at that point.
