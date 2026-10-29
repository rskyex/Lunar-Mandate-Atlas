// Versioned, client-side exports of the discretion point registry for verifiers.
// Generated from the same data module the site uses (src/data/discretionPoints.ts).
import { DISCRETION_POINTS, DISCRETION_TYPE_LABELS, getDocument } from '../data';
import type { DiscretionPoint } from '../data';

// Bump these whenever discretion point records change.
// DATASET_LAST_UPDATED is the date of the last change to src/data.
export const DATASET_VERSION = '1.2.0';
export const DATASET_LAST_UPDATED = '2026-10-29';
export const SITE_URL = 'https://lunar-mandate-atlas.vercel.app';

export const DISCRETION_COLUMNS: { key: string; description: string }[] = [
  { key: 'id', description: 'Stable record identifier.' },
  { key: 'term', description: 'The term where discretion is deferred.' },
  { key: 'document', description: 'Canonical title(s) of the governing document(s), from the documents registry.' },
  { key: 'documentIds', description: 'Document registry id(s), separated by " | " when a point spans several documents.' },
  { key: 'documentUrls', description: 'Source URL(s) from the documents registry, where confirmed, separated by " | ".' },
  { key: 'section', description: 'Section or article of the document.' },
  { key: 'type', description: 'Discretion type code.' },
  { key: 'typeLabel', description: 'Readable discretion type.' },
  { key: 'holder', description: 'Who holds interpretive control over the term (researcher coding).' },
  { key: 'coalition', description: 'artemis, ilrs, national or ost.' },
  { key: 'characteristicFormulation', description: 'Characteristic wording associated with the term (no surrounding quotation marks).' },
  { key: 'formulationKind', description: 'verbatim (the source’s own words) or paraphrase (researcher summary).' },
  { key: 'sourceUrl', description: 'Where the wording was read; empty when no checkable source was found.' },
  { key: 'pinpoint', description: 'Exact location in the source (article, section, page).' },
  { key: 'sourceStatus', description: 'verified (checked against sourceUrl) or unverified.' },
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
  dataset: 'Lunar Governance Tracker: discretion points',
  version: DATASET_VERSION,
  lastUpdated: DATASET_LAST_UPDATED,
  recordCount: DISCRETION_POINTS.length,
  note: 'holder and implication are researcher coding. characteristicFormulation is verbatim or paraphrase as stated in formulationKind, located by sourceUrl and pinpoint.',
  source: `${SITE_URL}/#data`,
};

function row(p: DiscretionPoint): Record<string, string> {
  return {
    id: p.id,
    term: p.term,
    document: p.document,
    documentIds: p.documentIds.join(' | '),
    documentUrls: p.documentIds.map((id) => getDocument(id).url ?? '').filter(Boolean).join(' | '),
    section: p.section,
    type: p.type,
    typeLabel: DISCRETION_TYPE_LABELS[p.type],
    holder: p.holder,
    coalition: p.coalition,
    characteristicFormulation: p.characteristicFormulation,
    formulationKind: p.formulationKind,
    sourceUrl: p.sourceUrl ?? '',
    pinpoint: p.pinpoint,
    sourceStatus: p.sourceStatus,
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
  const documents = [...new Set(DISCRETION_POINTS.flatMap((p) => p.documentIds))].map(getDocument);
  return JSON.stringify({ meta: discretionMeta, documents, records: DISCRETION_POINTS }, null, 2);
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
