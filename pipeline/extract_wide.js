#!/usr/bin/env node
// Extract citations from the 8 wide-format xlsx files in data/legacy-xlsx/
// into data/citations.tsv, per the schema in data/SCHEMA.md.
//
// Usage:  node pipeline/extract_wide.js
//
// Writes to data/citations.tsv (overwrites). The original long-form
// `RES LIQUIDAE.xlsx` is excluded; its cleaned wide-form counterpart
// `RES LIQUIDAE COR.xlsx` is included.

const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const REPO = path.resolve(__dirname, '..');
const REFS = path.join(REPO, 'data', 'legacy-xlsx');
const OUT = path.join(REPO, 'data', 'citations.tsv');

// Canonical ordering (matches CLAUDE.md and SCHEMA.md).
const COUNTRIES = ['AR','BO','CL','CO','CR','CU','DO','EC','ES','GT','HN','MX','NI','PA','PE','PR','PY','SV','UY','VE','US'];
const COUNTRY_SET = new Set(COUNTRIES);
const EMONYM_ORDER = ['miedo','amor','ira','tristeza','alegría'];

// File → (cryptoclass, abbrev). Mirrors data/cryptoclasses.tsv.
const FILES = [
  { file: 'Res Acutae.xlsx',        cryptoclass: 'Res Acutae',             abbrev: 'acu' },
  { file: 'RES CONTINENS.xlsx',     cryptoclass: 'Res Continens',          abbrev: 'con' },
  { file: 'Res Filiformes.xlsx',    cryptoclass: 'Res Filiformes',         abbrev: 'fil' },
  { file: 'RES LIQUIDAE COR.xlsx',  cryptoclass: 'Res Liquidae',           abbrev: 'liq' },
  { file: 'Res Parvae.xlsx',        cryptoclass: 'Res Parvae',             abbrev: 'par' },
  { file: 'Res Penentrantes.xlsx',  cryptoclass: 'Res Longae Penetrantes', abbrev: 'pen' },
  { file: 'Res Planae.xlsx',        cryptoclass: 'Res Planae',             abbrev: 'pla' },
  { file: 'Res Rotundae.xlsx',      cryptoclass: 'Res Rotundae',           abbrev: 'rot' },
];

// ---- Header → (construction_type, disputed) mapping --------------------

function normWS(s) {
  return String(s || '').replace(/\s+/g, ' ').trim().toLowerCase();
}

// Junk headers in column A (or empty cols) — return null to skip column.
const SKIP_HEADER_RX = /^(столбец 1|столбец \d+|идиом\.?\/?конструкци[ия]|идиомы?\/конструкции|идиом|idioma|z|\\|amor|alegría|alegria|wce|miedo|ira|tristeza|miedo|)$/;

function mapHeader(header, cryptoclass) {
  if (header == null) return null;
  const lower = normWS(header);
  if (!lower) return null;
  if (SKIP_HEADER_RX.test(lower)) return null;

  // СПОРНЫЕ ("disputed") columns are skipped at parse time per the Spanish
  // project's Conservative policy (audit-miedo.md): borderline citations are
  // excluded rather than carried with a flag.
  if (/спорны/.test(lower)) return { skip: true };

  // Res Parvae: three subtypes of глагольные транзитивные
  if (cryptoclass === 'Res Parvae') {
    if (/захват|удерж/.test(lower))       return { construction_type: 'verbal-objective-grasp' };
    if (/отпускан|бросок/.test(lower))     return { construction_type: 'verbal-objective-throw' };
    if (/собира|captar/.test(lower))       return { construction_type: 'verbal-objective-collect' };
  }

  // Res Continens: locative splits
  if (cryptoclass === 'Res Continens') {
    if (/извлечен|sacar de|salir de/.test(lower))                       return { construction_type: 'verbal-locative-out' };
    if (/помещен.*вместилищ|caer en|^помещение$/.test(lower))           return { construction_type: 'verbal-locative-into' };
    if (/локативн.*внутри|нахожден.*вместилищ|^локативн|estar en/.test(lower)) return { construction_type: 'verbal-locative-state' };
  }

  // Order matters: интранзитив contains "транзитив", so test first.
  if (/интранзит/.test(lower)) return { construction_type: 'verbal-subject-intransitive' };

  if (/субъект.*транзит|субект.*транзит/.test(lower)) return { construction_type: 'verbal-subject-transitive' };
  if (/^транзитив/.test(lower))                       return { construction_type: 'verbal-subject-transitive' };
  if (/^субъект/.test(lower))                         return { construction_type: 'verbal-subject-transitive' };

  if (/объект/.test(lower))      return { construction_type: 'verbal-objective' };
  if (/инструмент/.test(lower))  return { construction_type: 'verbal-instrumental' };
  if (/локативн/.test(lower))    return { construction_type: 'verbal-locative-state' };
  if (/атрибут/.test(lower))     return { construction_type: 'attributive' };
  if (/предикат/.test(lower))    return { construction_type: 'predicative' };
  if (/субстант/.test(lower))    return { construction_type: 'substantive' };
  if (/идиом/.test(lower))       return { construction_type: 'idiomatic' };

  return null;  // unrecognized header — skip whole column with warning
}

// ---- Citation splitting ----------------------------------------------

// Split a cell into individual citation fragments.
// The legacy convention: items separated by newlines, each line typically
// starts with a number prefix (1, 1), 1., #1, º1, etc.). First item may
// or may not have a prefix.
// Recognized noise patterns inside cells:
//   - "Total 29", "TOTAL: 4"            — aggregate footer
//   - "SOLTAR 0", "desatar 26"           — bare "VERB N" label = "N more not shown"
//   - "agarrar miedo 8"                  — "VERB EMONYM N" variant of the same
//   - "A PUNTA DE", "APUNTAR"            — section-marker label in caps
//   - "tejer 1 (citation in parens)"     — VERB N + parens; the parens IS the real citation
// Numbering prefixes ("1 ", "1) ", "1. ", "#1 ", "º7 ") are stripped per-line.
function splitCitations(cell) {
  const text = String(cell || '');
  if (!text.trim()) return [];
  if (text.trim() === '—') return [];

  const lines = text.split(/\r?\n/);
  const out = [];
  for (let raw of lines) {
    let line = raw.trim();
    if (!line || line === '—' || line === '-') continue;

    // strip leading numbering ("1 ", "1) ", "1. ", "#1 ", "º7 ")
    line = line.replace(/^[#º]?\s*\d+\s*[\.\)]?\s+/, '').trim();
    if (!line) continue;

    // "VERB N (real citation)" → extract the parens content
    const paren = line.match(/^[A-Za-zÁÉÍÓÚÑáéíóúñ]+(?:\s+[A-Za-záéíóúñ]+)?\s+\d+\s*\((.+)\)\s*$/);
    if (paren) { out.push(paren[1].trim()); continue; }

    // "Total 29", "TOTAL: 4", "Total: 5)", "Total 29)"
    if (/^total\s*:?\s*\d+\s*\)?\s*$/i.test(line)) continue;

    // bare "VERB N", "VERB EMONYM N", "VERB" — count-labels, not citations
    if (line.length <= 40 && /^[a-záéíóúñ]+(?:se)?\s*(?:miedo|amor|ira|tristeza|alegría)?\s+\d+\s*$/i.test(line)) continue;
    if (line.length <= 35 && /^[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ\s]*\d*\s*$/.test(line)) continue;

    // "desatar2", "verter11" — verb+digit, no space
    if (line.length <= 25 && /^[a-záéíóúñ]+\d+\s*$/i.test(line)) continue;

    // stray bare numbers / orphan numbering: "18", "8)", "3.", "4-11"
    if (/^\d+\s*[\.\)]?\s*$/.test(line)) continue;
    if (/^\d+\s*-\s*\d+\s*$/.test(line)) continue;

    // section header inside a cell: "DESATAR LA ALEGRÍA:" or lowercase variant
    if (line.length <= 40 && /^[A-Za-záéíóúñÁÉÍÓÚÑ][A-Za-záéíóúñÁÉÍÓÚÑ\s]*:\s*$/.test(line)) continue;

    out.push(line);
  }
  return out;
}

// ---- classifier_lemma detection --------------------------------------

// Load seed lemmas per (cryptoclass, construction_type) from classifiers.tsv.
function loadSeedLemmas() {
  const tsv = fs.readFileSync(path.join(REPO, 'data', 'classifiers.tsv'), 'utf8');
  const lines = tsv.split(/\r?\n/);
  const headers = lines.shift().split('\t');
  const idxClass = headers.indexOf('cryptoclass');
  const idxType  = headers.indexOf('construction_type');
  const idxSeeds = headers.indexOf('seed_lemmas_es');
  const map = new Map();
  for (const line of lines) {
    if (!line.trim()) continue;
    const cols = line.split('\t');
    const key = cols[idxClass] + '||' + cols[idxType];
    const seeds = (cols[idxSeeds] || '').split(',').map(s => s.trim()).filter(Boolean);
    map.set(key, seeds);
  }
  return map;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Unicode-aware word-boundary helpers. JS's built-in `\b` is ASCII-only and
// treats Spanish accented letters as non-word characters, which breaks
// boundaries on "está", "más", "envió" etc. We use \p{L} lookarounds instead.
function containsAsWord(cit, phrase) {
  return new RegExp('(?<!\\p{L})' + escapeRe(phrase) + '(?!\\p{L})', 'u').test(cit);
}
function startsWord(cit, prefix) {
  return new RegExp('(?<!\\p{L})' + escapeRe(prefix), 'u').test(cit);
}

// Generate candidate stems for a Spanish lemma (verb or adjective/participle).
// Used to bridge inflected surface forms back to the canonical lemma.
function generateStems(word) {
  const out = [];
  // Verb infinitive: drop -arse / -erse / -irse / -ar / -er / -ir.
  const v = word.match(/^(.+?)(arse|erse|irse|ar|er|ir)$/);
  if (v) {
    const stem = v[1];
    out.push(stem);
    // Spanish stem-changing ("boot") verbs: stressed vowel diphthongises.
    //   e → ie  (atravesar → atraviesa, pensar → piensa, retorcer → retuerce)
    //   o → ue  (contar → cuenta, doler → duele)
    //   e → i   (only in -ir verbs: pedir → pide)
    const e2ie = stem.replace(/e([^aeiouáéíóú]*)$/, 'ie$1');
    if (e2ie !== stem) out.push(e2ie);
    const o2ue = stem.replace(/o([^aeiouáéíóú]*)$/, 'ue$1');
    if (o2ue !== stem) out.push(o2ue);
    if (v[2].startsWith('ir')) {
      const e2i = stem.replace(/e([^aeiouáéíóú]*)$/, 'i$1');
      if (e2i !== stem) out.push(e2i);
    }
    // Orthographic alternation before back vowels.
    //   g → j  (coger → cojo, recoger → recojo)
    //   c → z  (vencer → venzo)
    if (stem.endsWith('g')) out.push(stem.slice(0, -1) + 'j');
    if (stem.endsWith('c')) out.push(stem.slice(0, -1) + 'z');
  }
  // Adjective / past participle: drop final -o / -a / -e to cover gender / number.
  const a = word.match(/^(.+?)[oae]$/);
  if (a) out.push(a[1]);
  return out;
}

// Try to identify which seed lemma actually appears in the citation.
// Returns the lemma string, or '' if no match.
//
// Strategy, in order:
//   1. Exact phrase match with Unicode-aware word boundaries
//      (tolerates punctuation: "agudo," still matches the lemma "agudo").
//   2. Single-word seed → try stem variants at word start.
//   3. Compound seed (e.g. "vivir en", "envuelto en") → require the tail
//      tokens to appear in the citation, then stem-match the head.
function detectLemma(citation, seeds) {
  if (!seeds || !seeds.length) return '';
  const cit = citation.toLowerCase();

  for (const lemma of seeds) {
    const lemmaL = lemma.toLowerCase();

    // 1. Exact phrase match.
    if (containsAsWord(cit, lemmaL)) return lemma;

    const parts = lemmaL.split(/\s+/);
    if (parts.length === 1) {
      for (const stem of generateStems(lemmaL)) {
        if (stem.length >= 2 && startsWord(cit, stem)) return lemma;
      }
    } else {
      // Compound seed: tail tokens must appear, then stem-match the head.
      const head = parts[0];
      const tail = parts.slice(1).join(' ');
      if (!containsAsWord(cit, tail)) continue;
      for (const stem of generateStems(head)) {
        if (stem.length >= 2 && startsWord(cit, stem)) return lemma;
      }
      // Also accept the bare head as a whole word (e.g. "envuelto" itself).
      if (head.length >= 2 && containsAsWord(cit, head)) return lemma;
    }
  }
  return '';
}

// ---- Frequency-aware cell parsing ------------------------------------
// Some wide cells encode explicit corpus frequencies rather than (or in
// addition to) pasted example sentences. See data/SCHEMA.md "Frequency
// formats". This parser segments a cell into classifier blocks and assigns
// each a corpus frequency, so downstream SUM(frequency) reflects construction
// productivity instead of merely counting the example sentences that happened
// to be typed. Gated to FREQ_PARSE_FILES; all other files keep splitCitations
// (each fragment = one occurrence, frequency 1). Rolled out one class at a time.
const FREQ_PARSE_FILES = new Set(['Res Parvae.xlsx', 'Res Acutae.xlsx', 'RES LIQUIDAE COR.xlsx']);

function firstWordLower(s) {
  const m = String(s || '').match(/\p{L}+/u);
  return m ? m[0].toLowerCase() : '';
}

// Classifier-head set for a column, derived from that column's seed lemmas:
// the first content word of each seed (e.g. `inundar`, `coger`, `puñado` from
// `puñado de`). Function words are dropped so multi-word seeds like `a punta de`
// don't register `a` as a head.
const HEAD_STOP = new Set(['de','en','es','al','por','con','la','el','un','una','a','se','que']);
function buildHeadSet(seeds) {
  const s = new Set();
  for (const seed of (seeds || [])) {
    const w = (String(seed).trim().split(/\s+/)[0] || '').toLowerCase();
    if (w.length >= 3 && !HEAD_STOP.has(w)) s.add(w);
  }
  // `entregar` heads grasp blocks in the legacy data; it is also a seed now, so
  // this set picks it up automatically.
  return s;
}

// A line opens a new classifier block only if it *looks like a heading* — not
// merely a prose sentence that happens to start with a classifier word. The
// first word must be a known head AND the line must be: (a) a classifier phrase
// followed by a count ("coger miedo 199", "INUNDAR 14"); (b) an ALLCAPS label
// ("AGARRAR AMOR", "SOLTAR"); or (c) a bare 1–2-word label ("traer amor").
function looksLikeHeader(line, headSet) {
  const t = String(line).trim();
  if (!headSet.has(firstWordLower(t))) return false;
  if (/^[\p{L}]+(?:\s+[\p{L}.]+){0,2}\s+\d/u.test(t)) return true;   // (a) count
  if (/^[A-ZÁÉÍÓÚÑ]{3,}\b/u.test(t)) return true;                     // (b) ALLCAPS
  if (t.split(/\s+/).length <= 2) return true;                       // (c) bare label
  return false;
}

// A line that is a section-marker / bare classifier label rather than a real
// occurrence: ALLCAPS with no lowercase letters ("A PUNTA DE", "APUNTAR",
// "AL FILO DE"). These announce a group of examples; they are not citations
// themselves and must not be counted. (Headed count lines like "INUNDAR 14"
// are intercepted earlier by looksLikeHeader, so they never reach here.)
function isNoiseLabel(s) {
  const t = String(s).trim();
  return t.length <= 30 && /\p{Lu}/u.test(t) && !/\p{Ll}/u.test(t);
}

// Strip leading numbering ("1 ", "2) ", "#3 ") and a wrapping pair of parens.
function cleanExample(s) {
  let t = String(s || '').trim();
  t = t.replace(/^[#º]?\s*\d+\s*[\.\):]?\s+/, '').trim();
  const p = t.match(/^\((.+)\)$/);
  if (p) t = p[1].trim();
  else t = t.replace(/^\(/, '').replace(/\)\s*$/, '').trim();  // unbalanced parens
  return t;
}

// Resolve one classifier block to citation records:
//   { citation, frequency, freq_role, lemma, note }
// freq_role: inline | total | example | illustrative | absent
function resolveBlock(head, rest, seeds, classSeeds, headSet, emonym) {
  const recs = [];
  const headWord = firstWordLower(head);
  const fullText = [head, ...rest].join(' ');
  // Lemma priority: a seed matched in the header (column seeds first, then the
  // class-wide inventory for classifiers the compiler filed under another
  // column — e.g. REBOSAR inside the Liquidae instrumental column), else the
  // explicit classifier head word, and only as a last resort — for headerless
  // orphan blocks — scan the example prose (which can mis-fire: short verb stems
  // like `tra-` (traer) false-match words such as "trabajo").
  const lemma = detectLemma(head, seeds)
              || (headSet.has(headWord) ? headWord : '')
              || detectLemma(fullText, seeds)
              || detectLemma(head, classSeeds)
              || detectLemma(fullText, classSeeds);
  // Label for authoritative/absent rows that have no quoted sentence. When the
  // block has no explicit classifier head (examples-first cells), fall back to
  // the lemma detected from the example text.
  const label = `${(headWord || lemma || '?')}${emonym ? ' ' + emonym : ''}`;

  // Header shape: <head> [<emonym-word>] [number] [inline example prose]
  const hm = head.match(/^(\p{L}+)(?:\s+(\p{L}+))?\s*(?:[–-]\s*)?(\d+)?\s*(.*)$/su);
  const headNum = hm && hm[3] != null && hm[3] !== '' ? parseInt(hm[3], 10) : null;
  let headInline = hm ? (hm[4] || '').trim() : '';
  // If the "second word" the regex grabbed was prose (not the emonym) and no
  // number followed, fold it back into the inline remainder.
  if (hm && hm[2] && hm[2].toLowerCase() !== emonym && headNum == null) {
    headInline = (hm[2] + ' ' + headInline).trim();
  }

  // Example lines = inline header prose + rest, MINUS any "Total: N" footer
  // (a count line, never an example).
  const isTotalLine = s => /^total\s*:?\s*\d+/i.test(String(s).trim());
  const exLines = [];
  if (headInline) exLines.push(headInline);
  for (const r of rest) if (!isTotalLine(r)) exLines.push(r);
  const examples = exLines.map(cleanExample).filter(s => s && !isNoiseLabel(s));

  // A "Total: N" line overrides everything (authoritative corpus total).
  const totalM = fullText.match(/\btotal\s*:?\s*(\d+)/i);
  // A leading "1" that opens a 1,2,3 run is example-numbering, not a frequency.
  const numIsNumbering = headNum === 1 && rest.some(r => /^\s*2\b/.test(r));

  if (totalM) {
    const N = parseInt(totalM[1], 10);
    recs.push({ citation: label, frequency: N, freq_role: 'total', lemma, note: `freq:total ${N}` });
    for (const ex of examples) recs.push({ citation: ex, frequency: 0, freq_role: 'illustrative', lemma, note: '' });
    return recs;
  }

  if (headNum != null && !numIsNumbering) {
    if (headNum === 0) {
      recs.push({ citation: label, frequency: 0, freq_role: 'absent', lemma, note: 'freq:absent (searched, 0)' });
      for (const ex of examples) recs.push({ citation: ex, frequency: 1, freq_role: 'example', lemma, note: 'FLAG: example under 0-label' });
      return recs;
    }
    if (examples.length === 0) {
      recs.push({ citation: label, frequency: headNum, freq_role: 'inline', lemma, note: `freq:inline ${headNum}` });
      return recs;
    }
    if (headNum === examples.length) {           // exhaustive: examples ARE the count
      for (const ex of examples) recs.push({ citation: ex, frequency: 1, freq_role: 'example', lemma, note: '' });
      return recs;
    }
    if (headNum > examples.length) {             // stated total > sample shown
      recs.push({ citation: label, frequency: headNum, freq_role: 'inline', lemma, note: `freq:inline ${headNum} (+${examples.length} illustrative)` });
      for (const ex of examples) recs.push({ citation: ex, frequency: 0, freq_role: 'illustrative', lemma, note: '' });
      return recs;
    }
    // headNum < examples.length (and not 1-numbering) — data inconsistency.
    recs.push({ citation: label, frequency: headNum, freq_role: 'inline', lemma, note: `FLAG: stated ${headNum} < ${examples.length} examples shown` });
    for (const ex of examples) recs.push({ citation: ex, frequency: 0, freq_role: 'illustrative', lemma, note: '' });
    return recs;
  }

  // No usable header number (absent, or numbering) — count examples, weight 1.
  if (examples.length === 0) {
    recs.push({ citation: label, frequency: 0, freq_role: 'absent', lemma, note: 'freq:absent (no number, no example)' });
    return recs;
  }
  for (const ex of examples) recs.push({ citation: ex, frequency: 1, freq_role: 'example', lemma, note: '' });
  return recs;
}

// Does a header line carry an explicit count, and does it have inline example
// prose after that count? (Used to detect a "pure summary" label — number, no
// inline example — which may summarize the examples that *precede* it.)
function headHasNum(head) {
  const hm = String(head).match(/^(\p{L}+)(?:\s+(\p{L}+))?\s*(?:[–-]\s*)?(\d+)?\s*(.*)$/su);
  return hm && hm[3] != null && hm[3] !== '';
}
function headHasInline(head) {
  const hm = String(head).match(/^(\p{L}+)(?:\s+(\p{L}+))?\s*(?:[–-]\s*)?(\d+)?\s*(.*)$/su);
  if (!hm) return false;
  if (hm[3] != null && hm[3] !== '') return (hm[4] || '').trim().length > 0;  // prose after the count
  return false;
}

function parseFreqCell(cellText, seeds, classSeeds, emonym) {
  const raw = String(cellText || '');
  if (!raw.trim() || raw.trim() === '—') return [];
  const lines = raw.replace(/\r/g, '').split('\n').map(s => s.trim())
                   .filter(s => s && s !== '—' && s !== '-');
  if (!lines.length) return [];
  // Head detection uses the class-wide seed inventory so a classifier filed in
  // the "wrong" column is still recognised as a heading.
  const headSet = buildHeadSet(classSeeds && classSeeds.length ? classSeeds : seeds);

  // Tag each line as a heading or an example.
  const items = lines.map(ln => looksLikeHeader(ln, headSet)
    ? { type: 'label', head: ln } : { type: 'ex', line: ln });

  // Build blocks, attaching each label's example lines. Examples after a label
  // belong to it (count-first, Format 2). Examples *before* a label belong to it
  // only when it is a "pure summary" — has a count, no inline example, and no
  // following examples (Format 4: examples then `DERRAMAR 5`); otherwise those
  // leading examples are an orphan block (classifier implied by the column).
  const blocks = [];
  let i = 0, pending = [];
  while (i < items.length) {
    if (items[i].type === 'ex') { pending.push(items[i].line); i++; continue; }
    const head = items[i].head; i++;
    const after = [];
    while (i < items.length && items[i].type === 'ex') { after.push(items[i].line); i++; }
    // Format 4 (examples then `DERRAMAR 5`) only when the label is a pure summary
    // AND the preceding examples are the *same* classifier — otherwise the
    // examples belong to the column's implied classifier (e.g. coger examples
    // before an `agarrar miedo 2` label are not agarrar's).
    const isSummary = headHasNum(head) && !headHasInline(head) && after.length === 0;
    const labelLemma = detectLemma(head, classSeeds) || (headSet.has(firstWordLower(head)) ? firstWordLower(head) : '');
    // The preceding examples belong to this summary only if the label's OWN
    // classifier actually occurs in them. Test just that one lemma — testing the
    // whole inventory lets a short stem of another seed (e.g. manar's `man-`)
    // false-match a word like "manos" and wrongly reject the claim → double count.
    const pendMatches = pending.length && labelLemma && detectLemma(pending.join(' '), [labelLemma]);
    if (pending.length && isSummary && pendMatches) {
      blocks.push({ head, rest: pending });   // Format 4: claim preceding examples
      pending = [];
    } else {
      if (pending.length) { blocks.push({ head: '', rest: pending }); pending = []; }
      blocks.push({ head, rest: after });
    }
  }
  if (pending.length) blocks.push({ head: '', rest: pending });

  const recs = [];
  for (const b of blocks) {
    recs.push(...resolveBlock(b.head, b.rest, seeds, classSeeds, headSet, emonym));
  }
  return recs;
}

// ---- Main ------------------------------------------------------------

function tsvEsc(s) {
  // TSV: flatten tabs and newlines inside fields.
  return String(s == null ? '' : s).replace(/\t/g, ' ').replace(/\r?\n/g, ' ').trim();
}

function colLetter(n) {
  // 0 -> A, 1 -> B, ...
  let s = '';
  n = n + 1;
  while (n > 0) {
    const r = (n - 1) % 26;
    s = String.fromCharCode(65 + r) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

function main() {
  const seedMap = loadSeedLemmas();
  // Class-wide seed inventory (union across all construction types), used by the
  // frequency parser to recognise classifiers filed under another column.
  const classSeedMap = new Map();
  for (const [k, v] of seedMap) {
    const cls = k.split('||')[0];
    if (!classSeedMap.has(cls)) classSeedMap.set(cls, []);
    classSeedMap.get(cls).push(...v);
  }
  const out = [];
  const headerRow = ['id','cryptoclass','emonym','country','construction_type','classifier_lemma','citation_es','citation_ru','disputed','source_file','source_sheet','source_locator','notes','frequency','freq_role'];
  out.push(headerRow.join('\t'));

  const warnings = [];
  const stats = { rows: 0, byClass: {}, byEmonym: {}, byCountry: {} };
  const idCounters = new Map();   // class+emonym+country → int

  for (const { file, cryptoclass, abbrev } of FILES) {
    const useFreq = FREQ_PARSE_FILES.has(file);
    const fpath = path.join(REFS, file);
    if (!fs.existsSync(fpath)) { warnings.push(`missing file: ${file}`); continue; }
    const wb = XLSX.readFile(fpath);

    // sort sheets in canonical emonym order
    const sheetOrder = wb.SheetNames.slice().sort((a, b) => {
      const ai = EMONYM_ORDER.indexOf(a.toLowerCase());
      const bi = EMONYM_ORDER.indexOf(b.toLowerCase());
      return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
    });

    for (const sn of sheetOrder) {
      const emonymLower = sn.toLowerCase().trim();
      if (!EMONYM_ORDER.includes(emonymLower)) {
        warnings.push(`${file}: skipping non-emonym sheet "${sn}"`);
        continue;
      }
      const ws = wb.Sheets[sn];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: '' });

      // Locate header row: the row immediately preceding the first country-code row.
      let firstCountryIdx = -1;
      for (let i = 0; i < rows.length; i++) {
        const c0 = String(rows[i][0] || '').trim().toUpperCase();
        if (COUNTRY_SET.has(c0)) { firstCountryIdx = i; break; }
      }
      if (firstCountryIdx < 0) {
        warnings.push(`${file} // ${sn}: no country-code rows found`);
        continue;
      }
      const headerIdx = firstCountryIdx - 1;
      if (headerIdx < 0) {
        warnings.push(`${file} // ${sn}: country rows start at row 0, no header`);
        continue;
      }
      const headerRowVals = rows[headerIdx];

      // Map each column → construction_type (or null).
      const colTypes = [];
      for (let c = 0; c < headerRowVals.length; c++) {
        if (c === 0) { colTypes.push(null); continue; }  // col A = country, skip
        const m = mapHeader(headerRowVals[c], cryptoclass);
        if (!m || m.skip) {
          if (m === null && String(headerRowVals[c] || '').trim()) {
            warnings.push(`${file} // ${sn}: unmapped header col ${colLetter(c)}: "${String(headerRowVals[c]).slice(0, 80)}"`);
          }
          colTypes.push(null);
        } else {
          colTypes.push(m);
        }
      }

      // Iterate country rows, then citation columns.
      for (let r = firstCountryIdx; r < rows.length; r++) {
        const cc = String(rows[r][0] || '').trim().toUpperCase();
        if (!COUNTRY_SET.has(cc)) continue;

        for (let c = 1; c < rows[r].length; c++) {
          const colType = colTypes[c];
          if (!colType) continue;
          const cell = rows[r][c];
          const seeds = seedMap.get(cryptoclass + '||' + colType.construction_type) || [];

          // Frequency-aware files resolve explicit corpus counts; all others
          // keep the legacy convention of one fragment = one occurrence.
          let records;
          if (useFreq) {
            records = parseFreqCell(cell, seeds, classSeedMap.get(cryptoclass) || [], emonymLower);
          } else {
            records = splitCitations(cell).map(frag => ({
              citation: frag, frequency: 1, freq_role: 'example',
              lemma: detectLemma(frag, seeds), note: '',
            }));
          }
          if (!records.length) continue;

          for (const rec of records) {
            const key = `${abbrev}-${emonymLower}-${cc.toLowerCase()}`;
            const n = (idCounters.get(key) || 0) + 1;
            idCounters.set(key, n);
            const id = `${key}-${String(n).padStart(4, '0')}`;

            out.push([
              id,
              cryptoclass,
              emonymLower,
              cc,
              colType.construction_type,
              rec.lemma || '',
              tsvEsc(rec.citation),
              '',                                  // citation_ru: filled by LIQUIDAE extractor only
              colType.disputed ? 't' : 'f',
              file,
              sn,
              `${colLetter(c)}${r + 1}`,
              tsvEsc(rec.note || ''),
              String(rec.frequency),
              rec.freq_role,
            ].join('\t'));

            stats.rows++;
            stats.byClass[cryptoclass] = (stats.byClass[cryptoclass] || 0) + 1;
            stats.byEmonym[emonymLower] = (stats.byEmonym[emonymLower] || 0) + 1;
            stats.byCountry[cc] = (stats.byCountry[cc] || 0) + 1;
          }
        }
      }
    }
  }

  fs.writeFileSync(OUT, out.join('\n') + '\n', 'utf8');

  // Summary to stderr.
  const lines = [];
  lines.push(`Wrote ${stats.rows} citation rows to ${path.relative(REPO, OUT)}`);
  lines.push('');
  lines.push('By cryptoclass:');
  for (const [k, v] of Object.entries(stats.byClass).sort((a, b) => b[1] - a[1])) lines.push(`  ${v.toString().padStart(4)}  ${k}`);
  lines.push('By emonym:');
  for (const [k, v] of Object.entries(stats.byEmonym).sort((a, b) => b[1] - a[1])) lines.push(`  ${v.toString().padStart(4)}  ${k}`);
  lines.push('By country (top):');
  const byCountrySorted = Object.entries(stats.byCountry).sort((a, b) => b[1] - a[1]);
  for (const [k, v] of byCountrySorted) lines.push(`  ${v.toString().padStart(4)}  ${k}`);
  if (warnings.length) {
    lines.push('');
    lines.push(`Warnings (${warnings.length}):`);
    for (const w of warnings) lines.push(`  - ${w}`);
  }
  process.stderr.write(lines.join('\n') + '\n');
}

main();
