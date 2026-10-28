// Fails if a discretion point or country profile references a document id that
// is not in the documents registry (src/data/documents.ts), or if the registry
// itself has duplicate ids or a title/alias shared by two documents.
// Run: npm run check:docs (also runs before every build).
import { createServer } from 'vite';

const server = await createServer({
  configFile: false,
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true, hmr: false, ws: false },
});

const errors = [];
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
    }
  } catch (e) {
    errors.push(`discretionPoints.ts: ${e.message}`);
  }
  try {
    const { COUNTRIES } = await server.ssrLoadModule('/src/data/countries.ts');
    for (const c of COUNTRIES) for (const d of c.documents) { check(`${c.id}/${d.id}`, d.documentId); refs++; }
  } catch (e) {
    errors.push(`countries.ts: ${e.message}`);
  }

  if (!errors.length) console.log(`check:docs passed (${refs} references to ${ids.size} registry documents)`);
} finally {
  await server.close();
}

if (errors.length) {
  for (const e of errors) console.error(`FAIL ${e}`);
  console.error(`check:docs failed (${errors.length} problem(s))`);
  process.exit(1);
}
