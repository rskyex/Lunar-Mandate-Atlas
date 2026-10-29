// Fails if a discretion point or country profile references a document id that
// is not in the documents registry (src/data/documents.ts), or if the registry
// itself has duplicate ids or a title/alias shared by two documents. Also fails
// if a discretion point's quote is marked verbatim without a checked source, if
// a paraphrase is wrapped in quotation marks, or if the counts in README.md
// differ from the data.
// Run: npm run check:docs (also runs before every build).
import { readFileSync } from 'node:fs';
import { createServer } from 'vite';

const server = await createServer({
  configFile: false,
  appType: 'custom',
  logLevel: 'error',
  // No dependency pre-bundling: the script only loads local data modules.
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true, hmr: false, ws: false },
});

const errors = [];
const counts = {};
try {
  const { DOCUMENTS } = await server.ssrLoadModule('/src/data/documents.ts');
  const ids = new Set();
  const names = new Map();
  for (const d of DOCUMENTS) {
    if (ids.has(d.id)) errors.push(`registry: duplicate id ${d.id}`);
    ids.add(d.id);
    for (const name of [d.title, ...d.aliases]) {
      const key = name.toLowerCase();
      if (names.has(key) && names.get(key) !== d.id) errors.push(`registry: "${name}" is used by ${names.get(key)} and ${d.id}`);
      names.set(key, d.id);
    }
  }

  const check = (where, id) => {
    if (!ids.has(id)) errors.push(`${where}: unknown document id "${id}"`);
  };
  let refs = 0;
  // Load the data modules; a module that resolves titles throws on an unknown id.
  try {
    const { DISCRETION_POINTS } = await server.ssrLoadModule('/src/data/discretionPoints.ts');
    for (const p of DISCRETION_POINTS) {
      if (!Array.isArray(p.documentIds) || p.documentIds.length === 0) errors.push(`${p.id}: documentIds must be a non-empty array`);
      for (const id of p.documentIds ?? []) { check(p.id, id); refs++; }
      // Quotes: verbatim needs a source that was checked; quotation marks are added by the views.
      if (!['verbatim', 'paraphrase'].includes(p.formulationKind)) errors.push(`${p.id}: formulationKind must be verbatim or paraphrase`);
      if (!['verified', 'unverified'].includes(p.sourceStatus)) errors.push(`${p.id}: sourceStatus must be verified or unverified`);
      if (p.formulationKind === 'verbatim' && (!p.sourceUrl || p.sourceStatus !== 'verified')) errors.push(`${p.id}: verbatim formulation needs a sourceUrl and sourceStatus "verified"`);
      if (!p.pinpoint) errors.push(`${p.id}: pinpoint is empty`);
      if (/^\s*["“]/.test(p.characteristicFormulation) && /["”]\s*$/.test(p.characteristicFormulation)) errors.push(`${p.id}: characteristicFormulation is wrapped in quotation marks; store the text bare`);
    }
    counts.points = DISCRETION_POINTS.length;
  } catch (e) {
    errors.push(`discretionPoints.ts: ${e.message}`);
  }
  try {
    const { COUNTRIES } = await server.ssrLoadModule('/src/data/countries.ts');
    for (const c of COUNTRIES) for (const d of c.documents) { check(`${c.id}/${d.id}`, d.documentId); refs++; }
    counts.countries = COUNTRIES.length;
    counts.profileDocs = COUNTRIES.reduce((n, c) => n + c.documents.length, 0);
  } catch (e) {
    errors.push(`countries.ts: ${e.message}`);
  }

  counts.registry = ids.size;
  const { TIMELINE_EVENTS } = await server.ssrLoadModule('/src/data/timeline.ts');
  const { INFRA_GOVERNANCE_LINKS } = await server.ssrLoadModule('/src/data/infrastructure.ts');
  counts.events = TIMELINE_EVENTS.length;
  counts.links = INFRA_GOVERNANCE_LINKS.length;

  // README "Data" list must match the data.
  const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
  const expect = [
    ['countries', /\*\*(\d+)\*\* countries\/entities tracked/],
    ['profileDocs', /\*\*(\d+)\*\* governance documents analysed in the country profiles/],
    ['registry', /\*\*(\d+)\*\* documents in the documents registry/],
    ['points', /\*\*(\d+)\*\* discretion points/],
    ['links', /\*\*(\d+)\*\* infrastructure-governance nexus links/],
    ['events', /\*\*(\d+)\*\* coalition timeline events/],
  ];
  for (const [key, re] of expect) {
    const m = readme.match(re);
    if (!m) errors.push(`README: no line matching ${re}`);
    else if (Number(m[1]) !== counts[key]) errors.push(`README: says ${m[1]} for ${key}, data has ${counts[key]}`);
  }

  if (!errors.length) console.log(`check:docs passed (${refs} references to ${ids.size} registry documents; README counts match)`);
} finally {
  await server.close();
}

if (errors.length) {
  for (const e of errors) console.error(`FAIL ${e}`);
  console.error(`check:docs failed (${errors.length} problem(s))`);
  process.exit(1);
}
