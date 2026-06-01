// Shared loader for emonym reassignments (data/derived/emonym-reassignments.tsv).
// Some legacy-xlsx rows are filed under the wrong emonym sheet (e.g. a
// `círculo de tristeza` citation sitting in the miedo sheet). This maps the
// affected citation id to its CORRECT emonym, applied as downstream curation
// (citations.tsv is left untouched). Consumers set the row's effective emonym
// from this map before binning, so the row leaves the wrong emonym's gold set
// and joins the right one. Reversible (delete a row from the TSV).
//
// See notes/cryptoclasses/_inventory-decisions.md (Problem 1.5).

const fs = require('fs');
const path = require('path');

function loadReassignments(repo = path.resolve(__dirname, '..')) {
  const file = path.join(repo, 'data', 'derived', 'emonym-reassignments.tsv');
  if (!fs.existsSync(file)) return new Map();
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(Boolean);
  const h = lines.shift().split('\t');
  const iId = h.indexOf('id'), iTo = h.indexOf('to_emonym');
  const m = new Map();
  for (const l of lines) {
    const c = l.split('\t');
    if (c[iId] && c[iTo]) m.set(c[iId], c[iTo].toLowerCase());
  }
  return m;
}

module.exports = { loadReassignments };
