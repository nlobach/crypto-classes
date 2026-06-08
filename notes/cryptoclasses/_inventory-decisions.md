# Cryptoclass inventory — decisions log

Running record of decisions about which cryptoclasses / classifiers are
kept, excluded, or flagged for the Spanish emonym profile. Referenced by
ROADMAP Phase 5 (inventory consolidation) and the per-class files in this
directory. Newest first.

---

## 2026-06-08 — Res Parvae: `quitarse` candidate + medio-passive subject finding (FLAGGED, data held)

**Status.** Decision logged; **nothing committed to data or manuscript yet** (user
elected "notes only, hold data + manuscript"). This entry reserves the analysis
so the next data drop can be processed against a fixed plan.

**Candidate.** Add **`quitar` / `quitarse`** to Res Parvae. Semantic fit is clean:
*quitar una piedra* / *quité todas las piedras* is removal of a small
hand-graspable object — the constitutive [+small-graspable] feature.

**The analytical decision (user's call).** The emonym evidence —
*decidió tomar un primer colectivo y que también **se quitó ese miedo*** (AR);
***se quitaba el miedo** en el cuerpo* (ES) — is read as **medio-passive with the
emonym as grammatical SUBJECT** (*se (le) quita el miedo* = "the fear goes away"),
**not** reflexive-benefactive object (*alguien se quita el miedo* = "sheds it").
Construction-type therefore = **`verbal-subject-intransitive`**.

**Why this is a finding, not a tagging detail.** Res Parvae currently has **zero**
subject-role rows by documented design (`res-parvae.md` §"Construction-type
structure"): "small objects are patients-not-agents … patients-not-agents."
`quitarse` would be the **first subject-role attestation in the class**. The
finding *refines rather than overturns* that claim — it splits a conflation:

- **Semantic role** — the emonym in *se quita el miedo* is still a **patient/theme**
  (the fear *undergoes* removal; it is not an agent). The "patients-not-agents"
  generalisation holds.
- **Grammatical role** — that patient **surfaces as grammatical subject** via the
  medio-passive (an unaccusative subject, exactly like *el miedo fluye*). The
  "small objects do not surface as subjects" half of the claim is **refuted for
  Spanish**.

So the revised wording will be: *Parvae emonyms are patients, but Spanish licenses
the patient-emonym as the unaccusative subject of a medio-passive removal verb.*

**Seed form.** `quitarse` (pronominal), matching the Filiformes
`verbal-subject-intransitive` convention (*desatarse, tejerse, enrollarse,
entrelazarse*). Literal prototype stays transitive (*quitar una piedra*); only the
emonym attaches via the medio-passive.

**Open / held until data.**
1. **Volume.** Only 2 illustrative citations seen so far (*miedo*, AR + ES) — below
   the ≥5 critical-mass threshold. User reports "much more" exists. Held pending the
   full set; the finding is *qualitative* until then.
2. **Provenance route.** These citations are **not** in `Res Parvae.xlsx`, and
   `extract_wide.js` overwrites `citations.tsv` — so a **sidecar + downstream
   loader** (mirroring `emonym-reassignments.tsv` / `duplicate-drops.tsv`) is the
   persistence plan once data arrives. Not built yet.
3. **Per-citation subject check.** Each incoming citation must be confirmed as the
   *medio-passive subject* reading; any that are reflexive-benefactive (emonym =
   object) route to a `verbal-objective` slot instead, not here.
4. **Index impact.** Adding a 5th construction type to Parvae will raise its ИРа
   (construction-type diversity); ПоКА/СИ effect TBD on the actual counts. To be
   measured on re-run, not assumed.

**Reversibility.** Trivial — nothing is committed; this is a planning entry.

---

## 2026-06-07 — Manuscript inventory revision (3 classifier/prototype edits)

**Context.** While folding the full 8-class classifier inventory into the RU
methodology section (`manuscript/metodologia-prototipo-metaforonimo-ru.md` §5),
three corrections were made to the canonical sources at the user's instruction.

**Decisions.**

1. **Res Acutae — drop the idiomatic type entirely.** `al filo de` removed
   (joining `a punta de`, already out 2026-06): both are grammaticalised
   *locuciones prepositivas* with no live sharp image; never attested. Res Acutae
   now has **no idiomatic classifier**.
2. **Res Parvae — prototype `guijarro` → `piedra`.** Canonical эталон in
   `data/cryptoclasses.tsv` is now *piedra* (the more basic, higher-frequency
   term); `guijarro` demoted to a listed variant. Propagated to the glossary
   (already *piedra*), `notes/cryptoclasses/res-parvae.md`, and the manuscript
   (§2.2 prototype table, §5.6 header).
3. **Res Continens — remove two never-attested forms.** `sumirse en`
   (verbal-locative-state) and `obturado` (attributive) dropped.

**Impact.** `pipeline/compute_indices.js` re-run after the edits: **all M
unchanged** (LIQ 13 · FIL 14 · ROT 7 · PEN 6 · ACU 11 · PAR 15 · PLA 5 ·
CON 23) and `data/derived/cryptoclass-indices.md` byte-identical — the three
removed forms had **zero corpus citations**, so no ПоКА/ИРа change and no
downstream regeneration of profiles or the autoreferat needed. All edits are
inline-documented in `data/classifiers.tsv` notes and reversible.

---

## 2026-06-02 — *miedo* gold-set cleanup: Problem 1.5 (mis-filed rows)

**Decision.** 14 rows filed under *miedo* whose citation is about a different
lexeme (valid classifier lemma, but no `miedo` token) are corrected as
downstream curation:

| Rows | Text | Disposition |
|---|---|---|
| 9 `círculo de tristeza` | *"círculo (vicioso) de tristeza"* | **reassigned → tristeza** |
| 2 `envuelto en ira` | *"envuelto/s en ira"* | **reassigned → ira** |
| 3 `temor` | *"está/sumidos en el temor"* | **excluded** (distinct lexeme) |

**Reassignment mechanism.** New sidecar `data/derived/emonym-reassignments.tsv`
(id → correct emonym) + loader `pipeline/reassignments.js`. `build_gold.js` and
`membership_matrix.js` set each row's *effective* emonym from this map before
binning, so a reassigned row leaves *miedo* and joins the target emonym's gold
set when that set is built. `citations.tsv` is untouched; ids keep their
original (now-misleading) `*-miedo-*` slug for provenance. Reversible (delete a
TSV row).

**Why reassign, not delete.** These are genuine *Res Rotundae* citations — just
for the wrong emonym. Deleting would lose real *tristeza*/*ira* evidence;
reassigning preserves it under the correct lexeme.

**Why `temor` is excluded, not reassigned.** *temor* is a near-synonym of
*miedo* but a **distinct lexeme**, and Donina's method profiles one lexeme per
emonym. It is outside the current 5-emonym scope, so the 3 rows are excluded
from *miedo* (in `build_gold.js`, reason `wrong-lexeme`) rather than routed.
**`temor` is recorded as a Phase-4 emonym candidate** (alongside the
*cariño*/*rabia* splits already noted in `CLAUDE.md`).

**Effect on the *miedo* gold set.** 405 → **391** (11 reassigned out, 3 `temor`
excluded). Res Rotundae 57 → 46 (9 of *miedo*'s 10 `círculo de` rows were
actually *tristeza*); Res Continens 181 → 178. No membership verdict flips.
`profile-miedo.md` and `audit-miedo.md` regenerated at n = 391. With Problems 1,
2, and 1.5 all resolved, the *miedo* gold set is final pending Phase-2 volume.

---

## 2026-06-02 — Duplicate policy: US-exclusion rule + Problem 2 APPLIED

**Refinement to the cross-country survivor rule.** A duplicated string is, by
definition, not variant-distinctive, so it must not be credited to a variant
where it could distort a per-variant threshold. The rule (baked into
`pipeline/dedupe.js`, so the drop-list regenerates faithfully):

1. **US never survives** a cross-country duplicate. US Spanish corpora are
   dominated by syndicated / republished origin-country text, so a string shared
   with another variant is treated as that variant's; the US copy is the artefact.
2. Among the remaining members, **keep the strongest-corpus variant** — but only
   if it is one of `AR, ES, MX, CO, CL` (the variants with large independent
   corpora, a genuinely "safe home").
3. If no strong-corpus member remains, the string is pan-Hispanic /
   non-diagnostic with no safe home → **drop the whole group** (credit nobody).

**Why not keep the *weaker* variant** (the initial instinct): that maximises the
exact failure mode we want to avoid — manufacturing coverage for a thin variant
from non-independent evidence, which is where a spurious Phase-6 membership
signal would come from. Keeping the redundant copy in an already-saturated strong
variant cannot trip a threshold; keeping it in a thin one can.

**Effect on the drop-list.** 8 US-keeper groups re-tagged: 1 flips to keep CL
(strong home present), 7 drop entirely. Drop-list **79 → 86 rows**. Row-identical
to a hand-tagged check on `drop_id/keep_id/reason`.

**Problem 2 now APPLIED** (was "staged, not applied" in the entry below):

- New shared helper `pipeline/drop_ids.js` (`loadDropIds()`); both
  `build_gold.js` and `membership_matrix.js` skip any id on the drop-list.
- `gold-miedo` refrozen **411 → 405** (6 genuine *miedo* duplicates dropped; the
  other 7 of 13 *miedo* drops overlapped the existing exclusion set, so the
  excluded sidecar went 99 → 92). Membership matrix unchanged — green-light set
  still 8 cells, no verdict flipped (the dedup was conservative).
- `profile-miedo.md` + `audit-miedo.md` regenerated on the curated gold set via
  `coverage_miedo.js --from-gold` / `aggregate_profile.js --from-gold`; staleness
  banners removed; **`audit-miedo.md` §6 corrected** (only the AR disputed row was
  parse-skipped; `fil-miedo-co-0001` re-entered and is a downstream exclusion).

---

## 2026-06-01 — Dataset-wide duplicate policy: Problem 2 (drop-list, STAGED not applied)

> **Superseded 2026-06-02** (entry above): the drop-list is now applied, and the
> cross-country survivor rule was revised (US never survives; drop-all when no
> strong-corpus home). The 50/keep-strongest figures below are the pre-revision
> record.

**Decision.** Duplicates are removed by a single deterministic pass
(`pipeline/dedupe.js`) that emits a drop-list sidecar
(`data/derived/duplicate-drops.tsv`); `data/citations.tsv` is left untouched and
downstream consumers filter the listed ids. Reversible (delete a row from the
list). **Status: drop-list generated and reviewed; NOT yet wired into
`build_gold.js` / `membership_matrix.js` and the profile/audit are NOT yet
regenerated.** Resume point: `notes/gold-cleanup-status.md`.

**Scale.** 2,993 rows → **79 drops (2.6 %)** in four rule classes:

| Rule | Drops | Survivor / decision |
|---|---:|---|
| non-citation fragment (no emotion word) | 16 | dropped wholesale (extractor grabbed a seed/header, e.g. `Encontrar`×9, `sacar`×2, `INUNDAR DE/CON`, `brote de`, `flujo`) |
| cross-country duplicate | 50 | keep the **strongest variant** (most citations ≈ likely source; strips thin-variant padding) |
| cross-emonym duplicate | 4 | keep the row whose **emonym token is present** in the text (auto-corrects the mis-file) |
| exact same-cell repeat | 9 | keep lowest id |

**Why "admit but don't double-count".** A duplicated sentence (syndicated wire
copy, a pan-Hispanic construction, or a quotation) is not *independent* evidence
for a second variant. It is immaterial to a pooled profile (±1 per class) but
**manufactures spurious correlation** between variants in the Phase-6 per-variant
Pearson matrix — worst for thin variants (e.g. EC had 5 *miedo* citations, 3 of
them AR/ES duplicates → 2 unique). So duplicates are collapsed for statistics,
not because the text can't legitimately recur.

**Rescued from the junk rule (keep-override in `dedupe.js`).** Two rows the
"no emotion word" rule flagged were genuine citations truncated mid-token:
`liq-amor-es-0027` (*"…que fluya el amo[r]"*) and `fil-alegría-uy-0004`
(*"[alegría] desatada el domingo al ganar…"*). Kept.

**Not handled here.** The 3 `temor` rows filed under *miedo* (`está/sumidas en
el temor`) are a synonym/mis-filing question, deliberately left in place. The
broader mis-filing set (~11 rows about *tristeza*/*ira* under *miedo* that are
**not** duplicates, e.g. `círculo de tristeza`) is a separate integrity pass.

---

## 2026-06-01 — *miedo* gold-set cleanup: Problem 1 (blank-lemma rows)

**Decision.** Resolved all **13** blank-`classifier_lemma` *miedo* rows in the
gold set: **7 corrected** (legacy xlsx column mis-tags), **6 excluded**.
Implemented as downstream curation in `pipeline/build_gold.js` (`CORRECTIONS`
map + new `exclusionReason` rules); `data/citations.tsv` is left as the faithful
raw extraction. Gold set **417 → 411**; excluded sidecar **93 → 99**;
blank-lemma rows in `gold-miedo.tsv` → **0**.

**Corrections (7, kept).** Lemmas (`fluir`, `rebosar`) already exist in the
Liquidae seed list under *verbal-subject-intransitive*; these rows came up
blank only because the legacy xlsx filed them in the wrong construction-type
column, and `detectLemma` scopes seed-matching to the row's column.

| id | was ct | → ct | lemma |
|---|---|---|---|
| `liq-miedo-{bo,do,es,pe}-0001` | verbal-objective | verbal-subject-intransitive | `fluir` |
| `liq-miedo-es-0012` | verbal-instrumental | verbal-subject-intransitive | `rebosar` ("a rebosar de … miedos") |
| `liq-miedo-ve-0001` | substantive | verbal-subject-transitive | `rebosar` ("el miedo lo rebosó") |
| `liq-miedo-mx-0004` | substantive | *(unchanged)* | `rebosar` ("el reboso", nominalisation) |

**Exclusions (6, → `gold-miedo-excluded.tsv`).**

| id(s) | reason |
|---|---|
| `con-miedo-{ar-0015,cl-0014,co-0011}`, `liq-miedo-ve-0005` | non-citation fragments — blank lemma **and** no `miedo` token ("Encontrar", "corazones blaugranas,") |
| `fil-miedo-co-0001` | disputed reflexive-bind ("se amarraron a sus miedos") — Continens-into, not Filiformes |
| `con-miedo-mx-0027` | `profundo miedo`: intensity attributive, not the container schema |

**Two judgment calls (reversible, flagged for review).**
- *`profundo`* — **excluded**, reversing the earlier "keep" default. `profundo`
  is an intensity adjective, not the flat container image; adding it as a
  Continens attributive seed would over-recruit (*profundo amor*, *profunda
  tristeza*) across every emonym on re-extraction. To reverse: delete the
  `con-miedo-mx-0027` rule in `build_gold.js` (and only then consider seeding).
- *`Se amarraron a sus miedos`* (`fil-miedo-co-0001`) — re-excluded as disputed.
  ⚠️ **Audit discrepancy:** `audit-miedo.md` §6 claims this row was deleted by
  the Conservative disputed policy and that "0 disputed remain". It had in fact
  re-entered `citations.tsv` (494→510 growth) as a *non-disputed* row in a
  normal column (locator E5). The audit's claim is stale and is corrected by
  this exclusion. **`audit-miedo.md` §6 needs a note to this effect.**

**Newly surfaced, NOT fixed here (separate problem).** The same token check
found **~11–14 rows filed under *miedo* whose citation is about another
emotion**: 9× `círculo de tristeza` (→ *tristeza*), 2× `envuelto en ira`
(→ *ira*), 3× `el temor` (→ *temor*, a near-synonym — defensibility open).
These have valid lemmas so they are outside Problem 1 (blank-lemma) scope, but
they are a gold-set integrity issue to triage separately before per-variant
statistics.

**Deferred.** Profile/audit numeric regeneration (`profile-miedo.md`,
`audit-miedo.md`) is held until Problem 2 (cross-country duplicates) is also
resolved, so the markdown is recomputed once, not twice.

---

## 2026-06-01 — Generalise the `nivel de` exclusion to all five emonyms (class-wide)

**Decision.** The `nivel de` exclusion from Res Planae (recorded below for
*miedo* only) is **generalised to all five in-scope emonyms** — *miedo,
tristeza, amor, alegría, ira* — class-wide. This resolves the first open item
of the miedo-only entry below. The rule is now applied in the analysis by
default (`pipeline/membership_matrix.js`; pass `--raw` to keep `nivel de`).

**Evidence (all five).** `nivel de` is *the* dominant Res Planae classifier for
every emonym, the canonical frozen-idiom signature — high raw frequency, near-
zero classifier breadth:

| emonym | `nivel de` / Res Planae total |
|---|---|
| miedo | 93 / 94 |
| tristeza | 18 / 20 |
| amor | 75 / 79 |
| alegría | 25 / 27 |
| **ira** | **32 / 32 (100 %)** |

**Effect (preliminary answer to the Varimax-gate question).** With `nivel de`
removed class-wide, **Res Planae recruits no emonym**: non-member for *miedo*
and *ira*, marginal for *tristeza, amor, alegría* (see
`data/derived/membership-matrix.md`, the cross-emonym membership matrix). On
current Spanish data the flat-surface class does **not** project emotion — a
clean preliminary negative result that sharpens, but does not yet settle, the
Phase-5/6 Varimax inventory gate (`res-planae.md`). Treat as proof-of-method,
pooled across variants, not the final per-variant finding.

**Reversibility.** Unchanged from below — the raw rows stay in
`data/citations.tsv`; the exclusion is a downstream curation rule. `node
pipeline/membership_matrix.js --raw` reproduces the un-excluded matrix.

---

## 2026-06-01 — Exclude `nivel de` from Res Planae (measurement collocation)

**Decision.** The substantive classifier `nivel de` (*nivel de miedo* =
"level of fear") is **excluded** from Res Planae for cryptoclass-statistics
purposes. It is a quantifying / measurement collocation ("the *level* of
fear rose"), not an enactment of the flat-surface (*plano / llano / liso*)
image that defines Res Planae.

**Scope.** Applied now to the *miedo* gold set and aggregate profile.
The rationale is emonym-general, so the same rule is a **candidate for all
emonyms** in Res Planae — but that wider application is deferred (it
reshapes the whole class) and flagged as an open item below.

**Evidence (miedo).** 93 of 94 Res Planae *miedo* citations carried
`nivel de`; the lone remainder is one genuine attributive (`llano`:
*"un miedo simple y llano"*, CO). So the classifier breadth was minimal
(IDC 0.222) while the raw frequency share was large (CAC 18.4 %, rank 2) —
the canonical frozen-idiom signature Boriskina warns about
(`notes/theory-boriskina.md` §11.4). Excluding it removes a pure
frequency artefact, not genuine class membership.

**Effect on miedo.**
- Res Planae drops from 94 → **1** citation (only `llano`), i.e. *miedo*
  is **below critical mass** in Res Planae and effectively does **not**
  project into the class on current data.
- Pooled total 510 → **417**; CAC recomputed in `data/derived/profile-miedo.md`.
- Res Continens becomes the unambiguous dominant class (45.1 %).

**Reversibility.** The 93 rows remain in `data/citations.tsv` (the
complete raw extraction is not edited). The exclusion is a curation rule
applied downstream — in `pipeline/build_gold.js` and the analysis. To
reverse, drop the filter.

**Open items.**
- ~~Apply the same exclusion to *amor, alegría, tristeza, ira* in Res Planae?~~
  **Resolved 2026-06-01** — generalised class-wide; see the entry above. Their
  `nivel de` shares were indeed similar (highest: *ira* at 32/32).
- Does Res Planae survive at all for Spanish emonyms once `nivel de` is
  removed class-wide? This is exactly the Varimax gate question in
  `res-planae.md` — the exclusion makes that test sharper. **Preliminary answer
  (2026-06-01):** no emonym is recruited (non-member or marginal across the
  board) — see the entry above and `data/derived/membership-matrix.md`. Final
  determination still waits on the Phase-6 Varimax run.
