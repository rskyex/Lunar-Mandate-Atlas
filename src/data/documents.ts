// ═══════════════════════════════════════════════════════════════════
// Documents registry — one record per governing document.
// Discretion points and country profiles refer to documents by `id` only;
// titles shown on the site come from here. `aliases` lists other titles the
// same document has appeared under. `url` is null where no stable public
// source has been confirmed. `npm run check:docs` fails on unknown ids.
// ═══════════════════════════════════════════════════════════════════

export interface DocumentRecord {
  id: string;
  title: string;
  aliases: string[];
  year: number;
  url: string | null;
}

export const DOCUMENTS = [
  {
    id: 'OST-1967',
    title: 'Outer Space Treaty',
    aliases: ['Treaty on Principles Governing the Activities of States in the Exploration and Use of Outer Space, including the Moon and Other Celestial Bodies'],
    year: 1967,
    url: 'https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/introouterspacetreaty.html',
  },
  {
    id: 'AA-2020',
    title: 'Artemis Accords',
    aliases: ['The Artemis Accords: Principles for Cooperation in the Civil Exploration and Use of the Moon, Mars, Comets, and Asteroids for Peaceful Purposes'],
    year: 2020,
    url: 'https://www.nasa.gov/wp-content/uploads/2022/11/Artemis-Accords-signed-13Oct2020.pdf',
  },
  {
    id: 'ILRS-MOU-2021',
    title: 'Roscosmos–CNSA Memorandum of Understanding on the ILRS',
    aliases: ['ILRS Memorandum of Understanding', 'Roscosmos-CNSA MoU on ILRS'],
    year: 2021,
    url: null,
  },
  {
    id: 'ILRS-GUIDE-2023',
    title: 'ILRS Guide for Partnership',
    aliases: ['International Lunar Research Station (ILRS) Guide for Partnership'],
    year: 2023,
    url: 'https://www.cnsa.gov.cn/english/n6465652/n6465653/c6812150/content.html',
  },
  {
    id: 'CN-LEP4-2024',
    title: 'CNSA Lunar Exploration Programme Phase 4',
    aliases: ['CNSA Lunar Exploration Phase 4'],
    year: 2024,
    url: null,
  },
  {
    id: 'UAE-LAW-2019',
    title: 'UAE Federal Law No. 12 of 2019 on the Regulation of the Space Sector',
    aliases: ['UAE Federal Law No. 12 (Space Sector)', 'Federal Law No. 12 on Space Sector Regulation'],
    year: 2019,
    url: null,
  },
  {
    id: 'JP-BSL-2008',
    title: 'Japan Basic Space Law',
    aliases: ['Basic Space Law', 'Basic Space Act (Act No. 43 of 2008)'],
    year: 2008,
    url: null,
  },
  {
    id: 'JP-NASA-2022',
    title: 'JAXA-NASA Artemis MoU (Gateway / HLS)',
    aliases: ['JAXA-NASA Artemis MoU'],
    year: 2022,
    url: null,
  },
  {
    id: 'LUX-SRL-2017',
    title: 'Luxembourg Space Resources Law',
    aliases: ['Space Resources Law', 'Law of 20 July 2017 on the exploration and use of space resources'],
    year: 2017,
    url: null,
  },
  {
    id: 'US-CSLCA-2015',
    title: 'U.S. Commercial Space Launch Competitiveness Act',
    aliases: ['US CSLCA', 'Public Law 114-90'],
    year: 2015,
    url: 'https://www.govinfo.gov/content/pkg/PLAW-114publ90/html/PLAW-114publ90.htm',
  },
  {
    id: 'IN-SAB-2023',
    title: 'India Space Activities Bill',
    aliases: ['Space Activities Bill'],
    year: 2023,
    url: null,
  },
  {
    id: 'US-OSTP-LTC-2024',
    title: 'OSTP Coordinated Lunar Time (LTC) Framework',
    aliases: ['Policy on Celestial Time Standardization in Support of Future Space Operations (OSTP memorandum, 2 April 2024)'],
    year: 2024,
    url: 'https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/04/Celestial-Time-Standardization-Policy.pdf',
  },
  {
    id: 'ESA-STMT-2023',
    title: 'ESA Statement on Artemis Accords Principles',
    aliases: ['ESA Artemis Accords Statement'],
    year: 2023,
    url: null,
  },
  {
    id: 'NASA-LUNANET',
    title: 'LunaNet Interoperability Specification',
    aliases: ['LunaNet Architecture'],
    year: 2022,
    url: 'https://www.nasa.gov/directorates/somd/space-communications-navigation-program/lunanet-interoperability-specification/',
  },
] as const satisfies readonly DocumentRecord[];

export type DocumentId = (typeof DOCUMENTS)[number]['id'];

const BY_ID = new Map<string, DocumentRecord>(DOCUMENTS.map((d) => [d.id, d]));

export function getDocument(id: DocumentId): DocumentRecord {
  const doc = BY_ID.get(id);
  if (!doc) throw new Error(`Unknown document id: ${id}`);
  return doc;
}

export function isDocumentId(id: string): id is DocumentId {
  return BY_ID.has(id);
}

/** Canonical titles joined for display, e.g. "Japan Basic Space Law + JAXA-NASA Artemis MoU (Gateway / HLS)". */
export function documentTitles(ids: readonly DocumentId[]): string {
  return ids.map((id) => getDocument(id).title).join(' + ');
}
