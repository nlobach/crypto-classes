# Overview

A plain-language explanation of what this project is about and why. It assumes
no background in linguistics. For the working details, see `CLAUDE.md` and
`ROADMAP.md`.

## The basic puzzle

Languages quietly sort their nouns into categories that nobody explicitly
teaches and most speakers never notice. Some of these categories are visible —
in many languages, every noun is openly marked masculine or feminine, and you
cannot speak the language without picking one. But other categories are
**hidden**: they have no dedicated grammatical marker, yet they show up
consistently in the company a word keeps.

Consider English *fear*. Nobody declares that fear belongs to the category of
liquids. And yet, English speakers say *waves of fear*, *fear welled up in
him*, *drowning in fear*, *a flood of fear*, *fear poured out of her*. The
same word resists categories it doesn't belong to: *a sheet of fear* sounds
wrong, *a grain of fear* sounds wrong. Without ever stating the rule, the
language treats fear as a liquid.

This is what the Russian linguist Olga Boriskina, in her 2011 dissertation,
calls a **cryptoclass** — a "crypto-" (hidden) class of nouns, detectable not
by any visible marker but by the patterns of words they appear with. The
giveaway words — *waves of*, *drowning in*, *flood of* — she calls
**classifiers**, because they are the things that quietly classify the noun
behind your back.

## What Boriskina did, and what Donina did with it

Boriskina worked out the framework in detail for English and identified six
hidden categories of nouns, each named after a prototype: liquids
(*Res Liquidae*, prototype: water), threads (*Res Filiformes*), round things
(*Res Rotundae*), long penetrating things like spears (*Res Longae
Penetrantes*), sharp things like needles (*Res Acutae*), and small graspable
things like pebbles (*Res Parvae*). For each class she catalogued the
classifier vocabulary and a measure of how strongly any given noun belongs.

Her student Olga Donina, in 2016, took the next step: she compared how
**different national varieties of English** — American, British, Australian,
Indian, and so on — sort their emotion words into these hidden categories.
Does Australian English treat *grief* the same way American English does? Are
*sorrow* and *sadness* sorted into the same hidden classes everywhere, or do
regional Englishes drift apart in how they implicitly conceptualise feelings?
Donina built a method for measuring this across variants and ran it on 23
English emotion words across multiple national Englishes.

## What this project is

This project does for **Spanish** what Donina did for English. Spanish is
spoken as an official or majority language in 21 countries, and there is no
reason to expect Mexican Spanish, Argentine Spanish, Peninsular Spanish, and
Caribbean Spanish to sort emotions into the same hidden categories. The
project asks:

- Which hidden categories of nouns exist in Spanish?
- Where do Spanish emotion words — *miedo* (fear), *tristeza* (sadness),
  *amor* (love), *alegría* (joy), and eventually a longer list — sit inside
  those categories?
- Do the 21 national varieties of Spanish agree on this sorting, or do they
  diverge in ways that cluster geographically (Southern Cone vs. Caribbean
  vs. Peninsular vs. Andean vs. Mexican–Central American)?

Boriskina's six English cryptoclasses do not quite fit Spanish unchanged. Two
extra classes are needed: a category of **containers** (*Res Continens*) —
emotions you can be "full of", "empty of", "contained in" — and a category of
**flat surfaces** (*Res Planae*) — emotions with "levels", "depths", "heights",
"layers". So Spanish is being analysed against an extended inventory of eight
classes rather than the inherited six.

## How the work is actually done

The raw material is text: real Spanish sentences from large digital corpora,
tagged by country of origin where possible. For each emotion word, in each
country variant, the analyst looks for co-occurrences with the classifier
vocabulary of each cryptoclass. Enough hits in the right patterns count as
evidence that the word belongs to that class in that variant; the absence of
hits is evidence the other way. Numerical indices (Boriskina's IDC and CAC)
summarise how strongly a noun belongs to a class.

The hard part is volume. To make defensible claims about, say, Paraguayan
Spanish versus Salvadoran Spanish, you need thousands of carefully-classified
citations per variant — far more than can realistically be collected by hand.
The current dataset, gathered manually, is roughly one order of magnitude too
small. The project's strategy is therefore to turn the existing manual data
into a **gold-standard validation set**, then build an automated pipeline
that queries Spanish corpora at scale and uses a large language model to
filter and tag the results, calibrated against the gold set so that its error
rate is known and reportable.

## Why it matters

If different national varieties of Spanish sort emotions into measurably
different hidden categories, that is direct linguistic evidence that the
intuitive conceptualisation of feelings differs across the Spanish-speaking
world — quietly, below the level anyone notices. The cryptoclass framework
provides a principled way to detect and quantify those differences instead of
relying on impressions. The output of the project is intended as a
Spanish-language scholarly work that gives the field, for Spanish, what
Donina's dissertation gave it for English.
