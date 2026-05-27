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

  if (/спорны/.test(lower)) {
    return { construction_type: 'disputed', disputed: true };
  }

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

// Try to identify which seed lemma actually appears in the citation.
// Returns the lemma string, or '' if no match.
function detectLemma(citation, seeds) {
  if (!seeds || !seeds.length) return '';
  const lower = ' ' + citation.toLowerCase() + ' ';
  for (const lemma of seeds) {
    const lemmaL = lemma.toLowerCase();
    // exact (covers phrasal substantives like "nivel de", "a punta de")
    if (lower.includes(' ' + lemmaL) || lower.includes(lemmaL + ' ')) return lemma;
    // verb stem: drop -ar/-er/-ir(-se)
    const verb = lemmaL.match(/^(.+?)(arse|erse|irse|ar|er|ir)$/);
    if (verb && verb[1].length >= 3 && lower.includes(verb[1])) return lemma;
    // adjective: drop final -o/-a/-e
    const adj = lemmaL.match(/^(.+?)[oae]$/);
    if (adj && adj[1].length >= 4 && lower.includes(adj[1])) return lemma;
  }
  return '';
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
  const out = [];
  const headerRow = ['id','cryptoclass','emonym','country','construction_type','classifier_lemma','citation_es','citation_ru','disputed','source_file','source_sheet','source_locator','notes'];
  out.push(headerRow.join('\t'));

  const warnings = [];
  const stats = { rows: 0, byClass: {}, byEmonym: {}, byCountry: {} };
  const idCounters = new Map();   // class+emonym+country → int

  for (const { file, cryptoclass, abbrev } of FILES) {
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
        if (!m) {
          if (String(headerRowVals[c] || '').trim()) {
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
          const fragments = splitCitations(cell);
          if (!fragments.length) continue;

          const seeds = seedMap.get(cryptoclass + '||' + colType.construction_type) || [];
          for (const frag of fragments) {
            const lemma = detectLemma(frag, seeds);
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
              lemma,
              tsvEsc(frag),
              '',                                  // citation_ru: filled by LIQUIDAE extractor only
              colType.disputed ? 't' : 'f',
              file,
              sn,
              `${colLetter(c)}${r + 1}`,
              '',
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
