# Hispanosphere — Pustovalova & Boriskina

Extraction from Ю.А. Пустовалова, О.О. Борискина, "Испаноязычное
пространство: единство в многообразии" / "Hispanosphere: Unity in
Diversity," Voronezh State University. Working paper / conference
article [exact journal/year not specified in the document; internal
reference code [4] in the Voronezh group bibliography]. Russian text
with English abstract and parallel bibliography.

This file is the project's working reference for the sociolinguistic
and typological framing of Spanish variability that underlies the
variant-stratified design of `data/citations.tsv`. The article is
written by Pustovalova (PhD student) and Boriskina (doctoral
supervisor) explicitly as methodological groundwork for the
"subsequent research on the categorization of emotions across
different Spanish-language idioms, based on data from comparable
corpora" — i.e., the present project.

Russian original phrasing is preserved in italics where it is
citation-grade or where the English gloss would lose precision. Cross-
references like `[[idiom]]` point to `notes/glossary.md` entries.

---

## 0 — Why this article, why for the project

The article's declared purpose is to present the Spanish-speaking
world as *a structured continuum of idioms of varying status* and to
justify, terminologically and empirically, the cross-variant scope of
the emotion-categorisation project. Two of its claims are load-bearing
for the project:

1. The term **idiom** (*идиом*) is the correct unit of comparison for
   a polycentric language such as Spanish — preferable to *variant*,
   *dialect*, or *language* because it is theory-neutral and avoids
   the binary "language vs. dialect" hierarchy.
2. The **21 national standards** are established, documentable units
   that correspond to comparable national corpora — which is what
   makes the `(emonym × class × variant)` cube methodologically
   defensible.

The explicit link between this article and the cryptoclass project
appears in the abstract (both Russian and English) and in the
conclusion: *"Предложенная типологически ориентированная модель
описания испаноязычного континуума (как системы разностатусных
идиомов и норм) будет использована в дальнейшем как методологическая
основа для реализации исследования категоризации эмоций в
испаноязычных идиомах на материале сопоставимых корпусов."*

A companion article (reference [4] in the Voronezh bibliography) —
Пустовалова & Борискина (2023), "Именной криптокласс «Res Continens»
в испанском языке," *Вестник ВГУ. Сер.: Лингвистика и межкультурная
коммуникация*, № 4, с. 66–73 — applies the same team's work directly
to the eighth cryptoclass. See `notes/theory-zadobrivskaya.md` for
the English-language foundation.

---

## 1 — The term "idiom" and why it is preferred (Введение)

The article begins by noting that the standard dichotomy "language vs.
dialect" (*язык или диалект*) cannot capture the full complexity of
polycentric-language situations:

> *«Дихотомия "язык или диалект" не отражает всей сложности отношений
> между идиомами.»*

Under the term **вариант** (*variant*) in the Russian tradition,
language forms are understood as *"modifications of the invariant of a
language's system and structure"* (Dorofeev, citing the definition at
[14, с.103]). But this framing implies a single invariant and
hierarchises all variants against it.

The article instead proposes **идиом** (*idiom*, borrowed from
European typology) as the descriptive unit. Quoting Vinogradov's
*Linguistic Encyclopedic Dictionary* [19]:

> *«Идиом — понятие чисто функциональное и не предполагающее никаких
> специальных структурных характеристик.»*

— "Idiom is a purely functional concept that presupposes no special
structural characteristics." An idiom is:

- a **discrete** unit — it corresponds to a bounded portion of the
  language continuum;
- **form-neutral** — it can be a national standard, a regional
  dialect, a creole, or a hybrid; none of these carries a
  structurally-defined rank;
- common in the **Voronezh typological tradition** (Boriskina,
  Donina) and in the work of Shchennikova, Savitsky, Plekhanov,
  Kurovskaya.

**Project implication.** The `country` column in `data/citations.tsv`
uses ISO 3166-1 alpha-2 codes (AR, BO, CL, …) as shorthand for the
21 national idioms that are the project's primary analytical units.
The article justifies treating each country code as a *co-equal*
idiom rather than as a "deviation from standard Spanish."

---

## 2 — The Hispanosphere as a structured continuum

The article's central empirical and theoretical claim:

> *«Испаноязычный мир — это спектр разностатусных идиомов.»*
> — "The Spanish-speaking world is a spectrum of idioms of varying
> status."

This spectrum is not a list of equals — it is ordered by **status and
recognition**, from the supranational standard to hybrid forms. The
article maps out seven tiers; each tier is covered in §§3–9 below.

The terminology is pluricentrism (*плюрицентризм*): Spanish is not
a single monolithic system but a set of overlapping norms that coexist
as an "evolutionary divergence":

> *«Не пришло время для перехода количественных изменений в
> испаноязычном мире в новое качество в виде отдельных национальных
> языков.»*

— the quantitative differences among Spanish idioms have not yet
reached the threshold of qualitative change into separate national
languages. High lexical similarity (≈ 90%) and mutual intelligibility
across idioms support this assessment.

The **evidence base** the article uses:
- Ethnologue (7 159 languages as of 07.12.2025): lists nine Spanish-
  related entries (Spanish, Spanish-based creoles, Spanish Charapa,
  Spanish Sign Language, Spanish Quichua, Spanish Caló,
  Cebuano-Spanish-English, Judeo Spanish, Abakay Spanish).
- ISO 639-3: three entries (Spanish Castilian, Loreto-Ucayali
  Spanish, Spanish Sign Language).
- The *Nueva gramática de la lengua española* (RAE, 2009–2011) [24],
  which explicitly declares a polycentric approach: *"Various uses
  of the language in different regions are considered fully
  legitimate provided they are widespread among educated speakers
  in that region and do not threaten the integrity of the system
  as a whole."*

---

## 3 — Supranational standard (наднациональный стандарт)

The top tier. The article distinguishes several closely related labels,
all circling the same referent:

| Term | Context / use |
|---|---|
| *español panhispánico* | Regulated by the 22 Academies of Spanish; the article's preferred term for the institutional norm. Documents: *DLE*, *Ortografía*, *Nueva gramática*. |
| *español internacional* | Used in the DIES-M project for international media compatibility. |
| *español general* | Used for global media communication. |
| *español latino* | Audiovisual translation, Latin American + Hispanic North American market. |
| *español neutro* | Telecommunications and dubbing, especially Southern Cone. Maximally de-localised. |

The *norma panhispánica* was consolidated at the **XI Congress of the
Association of Academies of Spanish Language** (Mexico, 1998), which
brought together all 22 Academies and adopted the motto *"Единство в
многообразии"* / "Unity in Diversity." This event is the
institutional origin of the polycentric policy.

Key observation: *español neutro* is an **artificial construct** —
not a natural form of the language but a deliberately de-localised
register. The article distinguishes natural forms (literary norms,
regional dialects) from this artificial supranational construct.

**Project implication.** The project's corpora are stratified by
*national* idiom; the supranational standard is relevant as context
but is not itself a data-collection target. When a corpus sentence
cannot be assigned to a single country code, it is excluded from
`data/citations.tsv` — consistent with the article's insistence on
the distinctiveness of national-level idioms.

---

## 4 — National literary norms / national standards (литературные нормы)

Twenty-one national standards are recognised: **Spain** plus
**twenty independent states** of the Americas and Africa.

The article gives a detailed overview of the **constitutional status**
of Spanish in Latin American countries:

| Status type | Countries |
|---|---|
| Spanish sole official language | Guatemala, El Salvador, Costa Rica, Cuba, Panama, Honduras, Uruguay |
| Spanish + indigenous languages (bilingual) | Mexico, Nicaragua, Peru, Bolivia, Colombia, Paraguay |
| No constitutional declaration (de facto) | Argentina, Chile, Dominican Republic |

**Equatorial Guinea** is treated as a special case (see §6 below);
the *Corpus del Español (Web/Dialects)* by Mark Davies [36] covers
**twenty variants** (i.e., Equatorial Guinea not included), while
**CORPES XXI** does include it.

The article cites Moreno Fernández [12, 13] and Zamora Munné & Guitart
[35] as the main sources for the linguistic characterisation of these
variants.

**Project implication.** The project's 21 country codes (AR, BO, CL,
CO, CR, CU, DO, EC, ES, GT, HN, MX, NI, PA, PE, PR, PY, SV, UY, VE,
US) map directly onto the 21 national standards the article
recognises. US Spanish is included as the 21st (the article cites
projections that by mid-21st century the US may have the world's
largest number of Spanish speakers). Equatorial Guinea is **not** in
the project's 21-code list — consistent with its status as a
*territorial* rather than national standard in the article's
taxonomy; see §6.

---

## 5 — Regional idioms (региональные идиомы)

Idioms at sub-national level within a country. Classically described
as dialects. The article follows Lapesa [37] and Alvar [38] in
identifying the following zones for **Spain**:

- North (central/northern Castilian)
- Andalusian
- Canarian
- Murcian (transitional)
- Extremaduran (transitional)

Co-existence of the national literary norm with regional dialects
produces **functional bilingualism** in significant areas of Spain —
a point the article notes but does not develop further.

For **Latin America**, the article notes that regional dialects are
less sharply bounded and that the distinction between territorial and
regional idioms is often driven by extra-linguistic factors (identity,
institutional support) rather than structural criteria.

**Project implication.** Regional idioms are **below** the
project's resolution level. The project treats each country code as
one unit; sub-national variation is not captured in the current
21-code schema. This is a deliberate choice: the available comparable
corpora are organised by country, not by region.

---

## 6 — Territorial idioms (территориальные идиомы)

The article defines a territorial idiom (following Firsova [17]) as an
idiom that lacks:
- the rank of *state language*;
- a national literary norm;
- use as the mother tongue by "an absolute number of inhabitants."

**Equatorial Guinea** is the central case. The article notes a
controversy between the RAE's conservative position and J. Lipski's
[39] substantial empirical evidence that Equatorial Guinea Spanish
meets the criteria for a *national standard*. Lipski, supported by
Schlumpf [40], argues that initially-stigmatised contact features have
stabilised into systemic properties of the emerging idiom.

Key corpus implication: CREA **does not** represent Equatorial Guinea
Spanish; CORPES XXI **does** (though with a territorial rather than
national designation). *Español latino* (used in media), while
positioned as a supranational norm, also functions as a *territorial
idiom* in some contexts — the article notes this ambiguity.

**Project implication.** The project currently uses the 21-country
list from `CLAUDE.md`, which **excludes** Equatorial Guinea. The
article's discussion of Equatorial Guinea confirms this exclusion is
consistent with the available corpus coverage (CORPES XXI includes it
but only at territorial level). If future work extends to CORPES XXI-
based collection, Equatorial Guinea could be added as a 22nd idiom.

---

## 7 — Identity idioms (идиомы национальной идентичности)

A fuzzy, receding tier. The article, citing the Instituto Cervantes
annual report, identifies Spanish identity idioms in:
- USA (southwestern states: California, Texas, New Mexico, Arizona,
  Florida)
- Philippines
- Western Sahara
- Morocco
- Andorra

These are *colonial traces* — remnants of Spanish imperial expansion
that have not fully stabilised into either national standards or
creoles. They are:

> *«Неукоснительно "отмирают" и вытесняются либо креолами на
> испаноязычной основе, либо конкурирующими языками.»*

The Philippine Chavacano (a creolised form) is given as an example
of a former identity idiom now reclassified as a creole.

The article notes that **US Spanish** is in a transitional zone — the
southwestern states idiom is an identity idiom, while broader US
Spanish functions as a national standard for the purposes of academic
research and media. The present project treats US as a national
standard (code: US in the 21-code list).

---

## 8 — Creole idioms (идиомы креольской природы)

Spanish-based creoles documented in Ethnologue and the literature:

| Name | Location | Notes |
|---|---|---|
| Chavacano | Philippines | Most studied; used in Zamboanga City; classified as creole in Ethnologue. |
| Palenquero | Colombia | African-Spanish creole; Palenque de San Basilio. |
| Spanish Caló | Iberian Peninsula | Para-Romani language, Romani-influenced. |
| Abakay Spanish | — | Ethnologue entry; details not elaborated in article. |
| Judeo Spanish (Ladino) | Former Ottoman territories | Ethnologue entry; historical Sephardic diaspora. |
| Spanish Charapa | Peru (Loreto, Ucayali) | Amazon Spanish variety; also ISO 639-3 entry. |
| Papiamento | Curaçao, Aruba, Bonaire | Spanish/Portuguese/Dutch/African mix; not in Ethnologue Spanish section but discussed. |

**Project implication.** Creoles are **outside** the project's scope.
The 21-country list covers national standards only; no creole is
assigned a country code in `data/citations.tsv`.

---

## 9 — Hybrids: Spanglish, Portuñol, and espaguifranglés

The article treats **hybrid forms** as the most recent and dynamic
tier — *Español en contacto* in its modern form.

**Spanglish** (Spanish-English contact, primarily US and Caribbean):
Lipski's definition [42] — *"a continuum of hybrid practices"* where
speakers combine Spanish and English resources by communicative
situation, with patterns stable enough to be called systematic.

**Portuñol** (Spanish-Portuguese contact, Uruguay and River Plate
border zone): characterised as *"stabilised mixed forms of
communication,"* also called *fronterizo* (ES) / *fronteirço* (PT) in
Uruguay. *Cocoliche*, an Italian-Spanish hybrid from mass Italian
immigration, is noted as a River Plate precedent.

**Espaguifranglés** (Equatorial Guinea): Mohamadou's term [45] for a
Spanish-French-English-pichinglis (*pichinglis* = pijin English) hybrid
of Equatorial Guinea; described as a *"norma viva"* — not an
accidental mixture but a stabilising local norm.

**Project implication.** Hybrids are outside the project's scope for
the same reason as creoles.

---

## 10 — "Unity in Diversity" — the political and linguistic principle

The article uses the motto *"Единство в многообразии"* (from the 1998
XI Congress) both analytically and critically. On the one hand:

> *«Принцип "Единство в многообразии" … используется в геополитических
> целях: испанский, согласно статистическим данным, является вторым
> по распространённости языком мира после китайского.»*

The article is not naïvely pro-RAE; it acknowledges that the unity
narrative also serves the RAE's institutional interests. But it
concludes that the label *"Spanish language"* is justified both
practically and scientifically: lexical similarity ≈ 90%, mutual
intelligibility high enough to sustain a single publishing market,
and no idiom has yet undergone sufficient change to become a distinct
language.

The article's **consensus summary** (citing the broader field):
modern researchers agree that the Spanish-speaking world is *a single
linguistic space with inherent diversity and sufficient structural
stability*. High phonetic and structural variation does not threaten
mutual intelligibility.

**Project implication.** This consensus is what makes the project's
variant-comparative design meaningful: if Spanish idioms were mutually
unintelligible, comparing cryptoclass profiles across 21 variants
would be comparing different languages, not variants of one. The
≈ 90% lexical similarity and the single literary norm mean that
the 21-idiom comparison is a **within-language study**.

---

## 11 — Theoretical background the article builds on

The article synthesises several Russian and foreign traditions. Only
those relevant to the project are noted here:

### 11.1 — Voronezh Linguo-Variantology school (Лингвовариантология)

The article explicitly identifies the **Воронежская лексико-
типологическая школа** (Voronezh lexicotypological school) as one of
the four major Russian traditions it draws on [9–10]. References [9]
and [10] are:

- [9] Борискина О.О., Донина О.В. "Эмотивная лексика в аспекте
  ареальной вариативности" (*Vestnik VGU*, 2016, №4, с. 41–45) —
  direct antecedent to both Donina's dissertation and the present
  article.
- [10] Донина О.В., Борискина О.О. *Вариативность в языке и культуре*
  (Voronezh, 2022) — a monograph that consolidates the cross-variant
  methodology.

### 11.2 — Moreno Fernández on Spanish geographic variation

F. Moreno Fernández [12, 13] is the principal foreign-language source
for the classification of Spanish variants. His *La lengua española en
su geografía* (2020) [12] is the up-to-date descriptive map of all
national and regional forms; *Las variedades de la lengua española y
su enseñanza* (2010) [13] provides the pedagogical-normative
framing.

### 11.3 — Davies corpus

Mark Davies' *Corpus del Español: Web/Dialects* [36] is cited as the
primary evidence that twenty national variants can be compared on
comparable corpora. URL: http://www.corpusdelespanol.org/web-dial/

This is one of the corpora proposed for the project's Phase 3 in
`ROADMAP.md`. The article's citation confirms its suitability for
variant-stratified collection.

---

## 12 — Key references in the article relevant to the project

| Ref. | Citation | Relevance |
|---|---|---|
| [1] | Donina 2017 (PhD diss.) | Donina's 532-page dissertation — the methodological model. See `notes/methodology-donina.md`. |
| [2] | Donina & Boriskina 2023, *Эмоции в английских языках* | Cross-variant English emonym study; post-dissertation synthesis. |
| [3] | Boriskina & Zadobrivskaya 2019, Vestnik VGU 2, с. 68–74 | Res Continens in English across Anglosphere linguocultures. See `notes/theory-zadobrivskaya.md`. |
| [4] | Pustovalova & Boriskina 2023, Vestnik VGU 4, с. 66–73 | **Res Continens in Spanish** — direct empirical precedent for the Spanish 8th-class data. |
| [9] | Boriskina & Donina 2016, Vestnik VGU 4, с. 41–45 | Emotive lexis from an areal-variation perspective; founding article of this project's comparative frame. |
| [10] | Donina & Boriskina 2022, *Вариативность в языке и культуре* | Monograph consolidating the cross-variant methodology. |
| [12] | Moreno Fernández 2020, *La lengua española en su geografía* | Geographic classification of Spanish variants — master reference. |
| [36] | Davies, *Corpus del Español: Web/Dialects* | The 20-variant comparable corpus. Primary planned corpus for Phase 3. |

---

## 13 — Implications for the project (synthesis)

### 13.1 — Terminological standardisation

The project should use **idiom** (*идиом*) consistently in its
methodological discussion — not "variant" or "dialect" — to align with
the Boriskina-Pustovalova framework and to avoid inadvertently
ranking any of the 21 national standards as more or less "correct"
than others. In the Spanish-language scholarly output (manuscript/),
the equivalent term is *variedad* or *idiolecto* depending on context;
the article does not resolve this for Spanish — it writes in Russian
and uses *idиом* as a Russian technical term.

### 13.2 — 21 vs. 20 vs. 22

- **21** is the project's operational count (CLAUDE.md).
- **20** is the Davies corpus count (excludes Equatorial Guinea).
- **22** is the RAE's count of Academies (includes Philippines and US,
  which some lists omit).

The article supports 21 as the right number for a corpus-based
academic study: 20 from Davies + US as a 21st (explicitly discussed
in the article as a demographically significant idiom).

### 13.3 — Comparable corpora as a prerequisite

The article's methodological premise — *"на материале сопоставимых
корпусов"* (on the basis of comparable corpora) — is the same
prerequisite stated in `ROADMAP.md` Phase 3. Without comparability
of corpus design (genre, time period, size), cross-variant IDC/CAC
comparison is not interpretable. The article names CORPES XXI and
the Davies *Web/Dialects* corpus as the primary resources meeting
this criterion.

### 13.4 — Corpus coverage of weak variants

The article explicitly acknowledges that Central American, Caribbean,
and African idioms are underrepresented in the major corpora. This
directly explains the **weak / absent** variants in the project's
current data (GT, HN, SV, NI, CR, PR per `CLAUDE.md`). The
article's corpus analysis confirms these gaps are systemic, not
accidental — they reflect unequal institutional documentation of
Spanish idioms.

---

## 14 — Reading map

The article is a single text without numbered sections; the following
maps content to themes for future reference:

| Theme | Location in article |
|---|---|
| Abstract (RU + EN) | Top of document — contains the explicit link to the emotion-categorisation project |
| Definition of idiom | Введение, paragraph starting *"Для нашего подхода…"* |
| Justification for "Unity in Diversity" | "Испаноязычный мир" section, paragraph on the 1998 Congress |
| Supranational standards taxonomy | "Наднациональный стандарт" subsection |
| Constitutional status of Spanish (Latin America) | "Литературные нормы" subsection |
| Equatorial Guinea controversy (Lipski vs. RAE) | "Территориальные идиомы" subsection |
| Identity idioms (US, Philippines, etc.) | "Идиомы национальной идентичности" subsection |
| Spanglish / Portuñol / espaguifranglés | "Гибриды" subsection |
| Conclusion (explicit link to emotion project) | Заключение |

---

## 15 — Follow-up TODOs

1. **Locate and read Pustovalova & Boriskina 2023** (*Vestnik VGU*
   4:66–73) — the article on *Res Continens* in Spanish. This is
   reference [4] in the present article and represents the closest
   prior empirical work on the 8th cryptoclass in Spanish. Relevant
   to `notes/cryptoclasses/res-continens.md` (planned).

2. **Locate and read Boriskina & Donina 2016** (Vestnik VGU 4:41–45)
   — "Эмотивная лексика в аспекте ареальной вариативности." This is
   the 4-page founding comparative article; its classifier seeds and
   variant selection criteria should inform the project's Phase 0.

3. **Locate and read Donina & Boriskina 2023**, *Эмоции в английских
   языках* — the post-dissertation monograph. Likely contains
   consolidated Tables 20 and 21 equivalents and updated methodology.

4. **Check the Davies corpus** (corpusdelespanol.org/web-dial/) for
   the exact country codes and genre breakdown — needed to evaluate
   whether its coverage of the weak variants (GT, HN, SV, NI, CR, PR)
   has improved relative to the project's current gaps.

5. **Resolve the 21-country US-Spanish question** — the article treats
   US Spanish as a demographically legitimate 21st idiom. Verify that
   the project's US data in `data/citations.tsv` is corpus-sourced
   from US-Spanish corpora and not inadvertently from Castilian
   sources.
