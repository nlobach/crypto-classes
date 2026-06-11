#!/usr/bin/env node
// Render the per-emonym "cryptoclass portrait" pie charts (SVG, no deps).
//
// Data source: data/derived/cryptoclass-indices.md — the same generated table
// the manuscript cites, so the figures can never drift from the published
// numbers. Each pie slice = ПоКА (share of the emonym's corpus frequency held
// by the class); the HATCHED part of a slice = the share of that class's
// frequency carried by its single lead classifier (СИ) — i.e. the
// phraseologically bound portion. Solid colour = free, productive
// combinability. This makes Figure-level sense of положение 1 (bound vs
// productive membership) instead of letting a raw-frequency pie contradict it.
//
// Usage: node pipeline/render_portraits.js
// Output: data/derived/figures/portrait-<emonym>.svg (5 files)

const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const SRC = REPO + '/data/derived/cryptoclass-indices.md';
const OUT = REPO + '/data/derived/figures';

const EM = ['miedo', 'tristeza', 'amor', 'alegría', 'ira'];
const SLUG = { miedo: 'miedo', tristeza: 'tristeza', amor: 'amor', 'alegría': 'alegria', ira: 'ira' };
const ABBR = ['LIQ', 'FIL', 'ROT', 'PEN', 'ACU', 'PAR', 'PLA', 'CON'];
const LATIN = { LIQ: 'Res Liquidae', FIL: 'Res Filiformes', ROT: 'Res Rotundae', PEN: 'Res Longae Penetrantes', ACU: 'Res Acutae', PAR: 'Res Parvae', PLA: 'Res Planae', CON: 'Res Continens' };
// palette mirrors Donina's chart colours for the six original classes,
// so the committee sees a familiar coding; PLA/CON are the two later classes.
const COLOR = { ACU: '#4f81bd', FIL: '#c0504d', LIQ: '#9bbb59', PEN: '#8064a2', PAR: '#4bacc6', ROT: '#f79646', PLA: '#948a54', CON: '#d4a017' };

const md = fs.readFileSync(SRC, 'utf8');

// ---- parse the generated markdown tables ----
function parseTable(heading) {
  const i = md.indexOf('## ' + heading);
  if (i < 0) throw new Error('section not found: ' + heading);
  const rows = md.slice(i).split('\n').filter(l => l.startsWith('| *'));
  const out = {};
  for (const r of rows.slice(0, EM.length)) {
    const c = r.split('|').map(s => s.trim());
    const em = c[1].replace(/\*/g, '');
    out[em] = {};
    ABBR.forEach((a, k) => { out[em][a] = c[2 + k]; });
  }
  return out;
}
const S = parseTable('Sᵢ — corpus frequency');           // strings of ints
const SI = parseTable('СИ — lead-classifier share (%)'); // strings or '·'

const N = {};
const nLine = md.match(/^N per emonym: (.+)$/m)[1];
for (const m of nLine.matchAll(/\*([^*]+)\* (\d+)/g)) N[m[1]] = +m[2];

// lead-classifier names from the "Lead classifier + top-3" section (Sᵢ ≥ 20)
const LEAD = {};
{
  const i = md.indexOf('## Lead classifier');
  let em = null;
  for (const line of md.slice(i).split('\n')) {
    const h = line.match(/^\*\*(.+)\*\*$/);
    if (h) { em = h[1]; LEAD[em] = {}; continue; }
    const m = line.match(/^- (\w+) \(.*?\): ([^\s,]+(?: [^\s,]+)*?) \d/);
    if (m && em) LEAD[em][m[1]] = m[2];
  }
}

// ---- formatting helpers ----
const fmtN = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const fmtPct = p => p >= 10 ? String(Math.round(p)) : p >= 1 ? (Math.round(p * 10) / 10).toFixed(1).replace('.', ',') : '&#60;1';
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

// ---- geometry ----
function arcPath(cx, cy, r, a0, a1) {
  if (a1 - a0 < 1e-4) return null;
  const large = a1 - a0 > Math.PI ? 1 : 0;
  const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
  const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
  return `M ${cx} ${cy} L ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`;
}

fs.mkdirSync(OUT, { recursive: true });

for (const em of EM) {
  const total = N[em];
  const cells = ABBR
    .map(a => ({ a, s: +S[em][a], si: SI[em][a] === '·' ? 0 : +SI[em][a] }))
    .filter(c => c.s > 0)
    .sort((x, y) => y.s - x.s);

  const W = 790, H = 470, cx = 258, cy = 240, R = 152;
  const svg = [];
  svg.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Georgia, 'Times New Roman', serif">`);
  svg.push(`<defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#ffffff" stroke-width="2.1"/></pattern></defs>`);
  svg.push(`<rect width="${W}" height="${H}" fill="#ffffff"/>`);
  svg.push(`<text x="24" y="34" font-size="20" font-weight="bold"><tspan font-style="italic">${em}</tspan> — криптоклассный портрет (N = ${fmtN(total)})</text>`);

  // slices
  let f = 0; // running fraction of the full turn
  const outside = [];
  for (const c of cells) {
    const share = c.s / total;
    const a0 = -Math.PI / 2 + f * 2 * Math.PI;
    const a1 = -Math.PI / 2 + (f + share) * 2 * Math.PI;
    const aB = a0 + (a1 - a0) * (c.si / 100); // bound | free boundary
    const col = COLOR[c.a];
    // bound (hatched) part first, then free (solid) part
    const pB = arcPath(cx, cy, R, a0, aB);
    const pF = arcPath(cx, cy, R, aB, a1);
    if (pB) {
      svg.push(`<path d="${pB}" fill="${col}" fill-opacity="0.55" stroke="#ffffff" stroke-width="1"/>`);
      svg.push(`<path d="${pB}" fill="url(#hatch)" stroke="none"/>`);
    }
    if (pF) svg.push(`<path d="${pF}" fill="${col}" stroke="#ffffff" stroke-width="1"/>`);

    const poka = 100 * share;
    const mid = (a0 + a1) / 2;
    if (poka >= 8) {
      const lx = cx + 0.62 * R * Math.cos(mid), ly = cy + 0.62 * R * Math.sin(mid);
      svg.push(`<text x="${lx.toFixed(1)}" y="${(ly + 6).toFixed(1)}" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">${fmtPct(poka)} %</text>`);
    } else if (poka >= 1.2) {
      outside.push({ a: c.a, mid, poka });
    }
    f += share;
  }

  // outside labels for small slices, stacked per side to avoid collisions
  for (const side of [-1, 1]) {
    const grp = outside.filter(o => (Math.cos(o.mid) >= 0 ? 1 : -1) === side)
      .map(o => ({ ...o, ax: cx + (R + 3) * Math.cos(o.mid), ay: cy + (R + 3) * Math.sin(o.mid) }))
      .sort((p, q) => p.ay - q.ay);
    let prevY = -1e9;
    for (const o of grp) {
      const ly = Math.max(o.ay, prevY + 17);
      prevY = ly;
      const lx = cx + side * (R + 28);
      svg.push(`<line x1="${o.ax.toFixed(1)}" y1="${o.ay.toFixed(1)}" x2="${(lx - side * 2).toFixed(1)}" y2="${ly.toFixed(1)}" stroke="#999999" stroke-width="0.8"/>`);
      svg.push(`<text x="${(lx + side * 2).toFixed(1)}" y="${(ly + 4).toFixed(1)}" font-size="12.5" fill="#444444" text-anchor="${side > 0 ? 'start' : 'end'}">${o.a} ${fmtPct(o.poka)} %</text>`);
    }
  }

  // legend
  let ly = 78;
  const lx = 462;
  for (const c of cells) {
    const poka = 100 * c.s / total;
    const col = COLOR[c.a];
    svg.push(`<rect x="${lx}" y="${ly - 12}" width="14" height="14" fill="${col}" stroke="#888888" stroke-width="0.5"/>`);
    svg.push(`<text x="${lx + 22}" y="${ly}" font-size="13.5"><tspan font-style="italic">${LATIN[c.a]}</tspan> — ${fmtPct(poka)} %</text>`);
    const lead = (LEAD[em] || {})[c.a];
    // suppress the concentration note for cells below critical mass (Sᵢ < 5):
    // a "100 % on the lead classifier" claim is vacuous for 1-2 occurrences
    if (c.si > 0 && c.s >= 5) {
      const tail = lead ? ` — ведущий: <tspan font-style="italic">${esc(lead)}</tspan>` : '';
      svg.push(`<text x="${lx + 22}" y="${ly + 15}" font-size="11.5" fill="#777777">штриховка ${Math.round(c.si)} % частоты класса${tail}</text>`);
      ly += 40;
    } else { ly += 26; }
  }

  // how-to-read footer with the two swatches
  const fy = H - 46;
  svg.push(`<rect x="24" y="${fy - 11}" width="13" height="13" fill="#9c9c9c"/>`);
  svg.push(`<text x="44" y="${fy}" font-size="12" fill="#444444">сплошной цвет — свободная, продуктивная сочетаемость (живой образ)</text>`);
  svg.push(`<rect x="24" y="${fy + 11}" width="13" height="13" fill="#9c9c9c" fill-opacity="0.55"/><rect x="24" y="${fy + 11}" width="13" height="13" fill="url(#hatch)"/>`);
  svg.push(`<text x="44" y="${fy + 22}" font-size="12" fill="#444444">штриховка — частота, лежащая на одном ведущем обороте (связанная сочетаемость, СИ)</text>`);
  svg.push(`<text x="24" y="${fy + 40}" font-size="11" fill="#999999">Сектор — доля криптокласса в корпусной сочетаемости эмонима (ПоКА). Источник: data/derived/cryptoclass-indices.md</text>`);
  svg.push('</svg>');

  const file = OUT + `/portrait-${SLUG[em]}.svg`;
  fs.writeFileSync(file, svg.join('\n'));
  console.log('wrote', path.relative(REPO, file),
    '| slices:', cells.map(c => `${c.a} ${fmtPct(100 * c.s / total)}%`).join(', '));
}
console.log('done');
