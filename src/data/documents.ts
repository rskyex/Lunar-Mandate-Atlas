// ═══════════════════════════════════════════════════════════════════
// Documents registry — one record per governing document.
// Discretion points and country profiles refer to documents by `id` only;
// titles shown on the site come from here. `aliases` lists other titles the
// same document has appeared under. `url` is null where no stable public
// source has been confirmed. `npm run check:docs` fails on unknown ids.
// Ids are stable identifiers: a year in an id is not necessarily the document's
// year (see `year`). Records reviewed against their sources on 2026-10-29.
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
    // The former UNOOSA treaty page returns 404; this is UNOOSA's text edition (ST/SPACE/61/Rev.2).
    url: 'https://www.unoosa.org/res/oosadoc/data/documents/2017/stspace/stspace61rev_2_0_html/V1605998-ENGLISH.pdf',
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
    title: 'China–Russia intergovernmental Memorandum of Understanding on the ILRS (9 March 2021)',
    aliases: ['Roscosmos–CNSA Memorandum of Understanding on the ILRS', 'ILRS Memorandum of Understanding', 'Roscosmos-CNSA MoU on ILRS', 'Memorandum of Understanding between the Government of the People’s Republic of China and the Government of the Russian Federation Regarding Cooperation for the Construction of the International Lunar Research Station'],
    year: 2021,
    // The MoU text is not public; CNSA's news release summarises it.
    url: null,
  },
  {
    id: 'ILRS-GUIDE-2023',
    title: 'ILRS Guide for Partnership (V1.0, CNSA and Roscosmos)',
    aliases: ['ILRS Guide for Partnership', 'International Lunar Research Station (ILRS) Guide for Partnership'],
    // Released 16 June 2021 with the ILRS Roadmap; there is no 2023 edition.
    year: 2021,
    url: 'https://www.cnsa.gov.cn/english/n6465652/n6465653/c6812150/content.html',
  },
  {
    id: 'CN-LEP4-2024',
    title: 'SCIO briefing on "China’s Space Program: A 2021 Perspective" (lunar exploration Phase 4)',
    aliases: ['CNSA Lunar Exploration Programme Phase 4', 'CNSA Lunar Exploration Phase 4'],
    // No 2024 instrument with the former title was found; the Phase 4 goal is stated at this briefing.
    year: 2022,
    url: 'https://www.cnsa.gov.cn/english/n6465684/n6760328/n6760329/c6813197/content.html',
  },
  {
    id: 'UAE-LAW-2019',
    title: 'UAE Federal Law No. 12 of 2019 on the Regulation of the Space Sector',
    aliases: ['UAE Federal Law No. 12 (Space Sector)', 'Federal Law No. 12 on Space Sector Regulation'],
    year: 2019,
    // Text not readable online; repealed by Federal Decree-Law No. 46 of 2023 (Art. 39),
    // https://uaelegislation.gov.ae/en/legislations/2129
    url: null,
  },
  {
    id: 'JP-BSL-2008',
    title: 'Japan Basic Space Law',
    aliases: ['Basic Space Law', 'Basic Space Act (Act No. 43 of 2008)'],
    year: 2008,
    url: 'https://www.japaneselawtranslation.go.jp/en/laws/view/4194/en',
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
    url: 'https://legilux.public.lu/eli/etat/leg/loi/2017/07/20/a674/jo',
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
    title: 'Draft Space Activities Bill, 2017 (India)',
    // Formerly listed as a 2023 bill; no bill was published in 2023. This is the
    // Department of Space draft released for consultation in November 2017.
    aliases: ['India Space Activities Bill', 'Space Activities Bill'],
    year: 2017,
    url: 'https://prsindia.org/files/bills_acts/bills_parliament/1970/Draft%20Space%20Activities%20Bill%202017.pdf',
  },
  {
    id: 'IN-ISP-2023',
    title: 'Indian Space Policy 2023',
    aliases: ['Indian Space Policy - 2023'],
    year: 2023,
    url: 'https://www.isro.gov.in/media_isro/pdf/IndianSpacePolicy2023.pdf',
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
    title: 'ESA: Gateway MoU and Artemis Accords – FAQs',
    // No ESA statement on the Accords' principles was found; ESA is not a signatory.
    aliases: ['ESA Statement on Artemis Accords Principles', 'ESA Artemis Accords Statement'],
    year: 2026,
    url: 'https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Gateway_MoU_and_Artemis_Accords_FAQs',
  },
  {
    id: 'NASA-LUNANET',
    title: 'LunaNet Interoperability Specification (Version 5)',
    aliases: ['LunaNet Interoperability Specification', 'LunaNet Architecture'],
    year: 2025,
    url: 'https://www.nasa.gov/wp-content/uploads/2025/02/lunanet-interoperability-specification-v5-baseline.pdf',
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
