// Prototype-verification analysis of the directed-association experiment.
// Reads the Google-Forms xlsx export and, per cryptoclass column, ranks the
// elicited objects by (a) first-mention salience and (b) total frequency,
// then compares the top item to the canonical эталон in prototypes.tsv.
//
// Usage: node data/experiment/analyze_prototypes.js [path-to-xlsx]
const XLSX = require("xlsx");
const fs = require("fs");

const XLSX_PATH = process.argv[2] ||
  "data/experiment/ассоциативный эксперимент.xlsx";

// Form column index -> cryptoclass (the form's order differs from canonical)
const COLS = {
  1: "Res Liquidae",
  2: "Res Acutae",
  3: "Res Filiformes",
  4: "Res Rotundae",
  5: "Res Parvae",
  6: "Res Longae Penetrantes",
  7: "Res Planae",
  8: "Res Continens",
};
const FREE_COL = 9, AGE_COL = 10, VAR_COL = 11, EDU_COL = 12;

// canonical prototypes from prototypes.tsv
const canon = {};
fs.readFileSync("data/experiment/prototypes.tsv", "utf8")
  .trim().split("\n").slice(1).forEach((l) => {
    const c = l.split("\t");
    canon[c[0]] = c[4];
  });

const norm = (s) =>
  String(s).toLowerCase().trim()
    .replace(/^["'\s.]+|["'\s.]+$/g, "")
    .replace(/^(un|una|unos|unas|el|la|los|las)\s+/, "")
    .replace(/\s+/g, " ")
    .replace(/s$/, "");          // crude plural fold for counting

const splitItems = (cell) =>
  String(cell).split(/[,;.\n/]/).map((x) => x.trim()).filter(Boolean);

const wb = XLSX.readFile(XLSX_PATH);
const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],
  { header: 1, defval: "" }).slice(1).filter((r) => r.length > 1);

console.log(`Respondents: ${rows.length}\n`);

// demographics
const tally = (arr) => arr.reduce((m, v) => (m[v] = (m[v]||0)+1, m), {});
const varCounts = tally(rows.map((r) => String(r[VAR_COL]).trim()).filter(Boolean));
console.log("Variedad de español (raw):");
Object.entries(varCounts).sort((a,b)=>b[1]-a[1])
  .forEach(([k,v]) => console.log(`  ${v}\t${k}`));

console.log("\n" + "=".repeat(70));
for (const [idx, cls] of Object.entries(COLS)) {
  const first = {}, total = {};
  for (const r of rows) {
    const items = splitItems(r[idx]);
    if (!items.length) continue;
    const f = norm(items[0]);
    if (f) first[f] = (first[f]||0)+1;
    for (const it of items) { const k = norm(it); if (k) total[k] = (total[k]||0)+1; }
  }
  const topFirst = Object.entries(first).sort((a,b)=>b[1]-a[1]).slice(0,6);
  const topTotal = Object.entries(total).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const elicited = topFirst[0] ? topFirst[0][0] : "—";
  const match = norm(canon[cls]) === elicited;
  const answered = Object.values(first).reduce((a,b)=>a+b,0);
  const distinctFirst = Object.keys(first).length;
  const sal = topFirst[0] ? Math.round(100*topFirst[0][1]/answered) : 0;
  console.log(`\n## ${cls}  | canonical: ${canon[cls]}  | elicited: ${elicited}  ${match ? "MATCH" : "DIFFERS"}`);
  console.log(`  salience: ${elicited} ${topFirst[0]?topFirst[0][1]:0}/${answered} first-mentions = ${sal}%  | distinct first-items: ${distinctFirst}`);
  console.log(`  first-mention: ${topFirst.map(([k,v])=>`${k}(${v})`).join(", ")}`);
  console.log(`  total freq   : ${topTotal.map(([k,v])=>`${k}(${v})`).join(", ")}`);
}
