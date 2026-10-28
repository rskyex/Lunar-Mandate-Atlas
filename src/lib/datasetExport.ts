// Versioned, client-side exports of the discretion point registry for verifiers.
// Generated from the same data module the site uses (src/data/discretionPoints.ts).
import { DISCRETION_POINTS, DISCRETION_TYPE_LABELS } from '../data';
import type { DiscretionPoint } from '../data';

// Bump these whenever discretion point records change.
// DATASET_LAST_UPDATED is the date of the last change to src/data.
export const DATASET_VERSION = '1.0.0';
export const DATASET_LAST_UPDATED = '2026-04-12';
export const SITE_URL = 'https://lunar-mandate-atlas.vercel.app';

export const DISCRETION_COLUMNS: { key: string; description: string }[] = [
  { key: 'id', description: 'Stable record identifier.' },
  { key: 'term', description: 'The term where discretion is deferred.' },
  { key: 'document', description: 'Governing document the term appears in.' },
  { key: 'documentId', description: 'Short document identifier used across the site.' },
  { key: 'section', description: 'Section or article of the document.' },
  { key: 'type', description: 'Discretion type code.' },
  { key: 'typeLabel', description: 'Readable discretion type.' },
  { key: 'holder', description: 'Who holds interpretive control over the term (researcher coding).' },
  { key: 'coalition', description: 'artemis, ilrs, national or ost.' },
  { key: 'characteristicFormulation', description: 'Characteristic wording associated with the term.' },
  { key: 'implication', description: 'Researcher interpretation of the implication for authority.' },
];

export interface DatasetMeta {
  dataset: string;
  version: string;
  lastUpdated: string;
  recordCount: number;
  note: string;
  source: string;
}

export const discretionMeta: DatasetMeta = {
  dataset: 'Lunar Governance Authority Tracker: discretion points',
  version: DATASET_VERSION,
  lastUpdated: DATASET_LAST_UPDATED,
  recordCount: DISCRETION_POINTS.length,
  note: 'holder and implication are researcher coding; check characteristicFormulation against the source document.',
  source: `${SITE_URL}/#data`,
};

function row(p: DiscretionPoint): Record<string, string> {
  return {
    id: p.id,
    term: p.term,
    document: p.document,
    documentId: p.documentId,
    section: p.section,
    type: p.type,
    typeLabel: DISCRETION_TYPE_LABELS[p.type],
    holder: p.holder,
    coalition: p.coalition,
    characteristicFormulation: p.characteristicFormulation,
    implication: p.implication,
  };
}

function csvCell(v: string): string {
  return /[",\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

export function discretionCsv(): string {
  const head = Object.entries(discretionMeta).map(([k, v]) => `# ${k}: ${v}`);
  const header = DISCRETION_COLUMNS.map((c) => c.key).join(',');
  const rows = DISCRETION_POINTS.map(row).map((r) =>
    DISCRETION_COLUMNS.map((c) => csvCell(r[c.key] ?? '')).join(','),
  );
  return [...head, header, ...rows].join('\n');
}

export function discretionJson(): string {
  return JSON.stringify({ meta: discretionMeta, records: DISCRETION_POINTS }, null, 2);
}

export function downloadText(filename: string, content: string, mime: string): void {
  const blob = new Blob([content], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
