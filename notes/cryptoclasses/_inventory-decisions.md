# Cryptoclass inventory — decisions log

Running record of decisions about which cryptoclasses / classifiers are
kept, excluded, or flagged for the Spanish emonym profile. Referenced by
ROADMAP Phase 5 (inventory consolidation) and the per-class files in this
directory. Newest first.

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
