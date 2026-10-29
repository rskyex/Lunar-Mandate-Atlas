// ═══════════════════════════════════════════════════════════════════
// F. Coalition Tracker — Timeline Data
// Artemis = Procedural commitment (sign once, bind to norms)
// ILRS = Iterative partnership enumeration (join, then scope expands)
// ═══════════════════════════════════════════════════════════════════

import type { Coalition } from './countries';

export type ConfidenceLevel = 'confirmed' | 'stated_intent' | 'reported';

export interface TimelineEvent {
  id: string;
  date: string;
  year: number;
  title: string;
  coalition: Coalition;
  significance: string;
  memberCount?: number;
  analyticNote?: string;
  confidence: ConfidenceLevel;
  /** What memberCount counts, when not obvious (e.g. countries and organisations). */
  memberCountNote?: string;
  /** Where the date and count were checked. */
  sourceUrl?: string;
}

// Dates and counts checked against the sources in sourceUrl on 2026-10-29.
// Artemis counts come from NASA's signatory list (signing dates).
const NASA_SIGNATORIES = 'https://www.nasa.gov/wp-content/uploads/2024/10/signatories-02.pdf';

const EVENTS: TimelineEvent[] = [
  {
    id: 'te-001',
    date: '1967-10',
    year: 1967,
    title: 'Outer Space Treaty enters into force (10 October 1967)',
    coalition: 'dual',
    significance: 'Establishes foundational ambiguity: "province of all mankind" without enforcement mechanism. The discretion points that LGT tracks originate here.',
    confidence: 'confirmed',
    sourceUrl: 'https://www.unoosa.org/res/oosadoc/data/documents/2017/stspace/stspace61rev_2_0_html/V1605998-ENGLISH.pdf',
  },
  {
    id: 'te-002',
    date: '2015-11',
    year: 2015,
    title: 'US Commercial Space Launch Competitiveness Act (signed 25 November 2015)',
    coalition: 'artemis',
    significance: 'First national legislation asserting resource extraction rights. Unilateral legislative interpretation of OST silence on resources.',
    analyticNote: 'Moral inoculation: grants rights to recovered resources while disclaiming sovereignty over any celestial body (sec. 403) — negative definition strategy.',
    confidence: 'confirmed',
    sourceUrl: 'https://www.govinfo.gov/content/pkg/PLAW-114publ90/html/PLAW-114publ90.htm',
  },
  {
    id: 'te-003',
    date: '2017-07',
    year: 2017,
    title: 'Luxembourg Space Resources Law (20 July 2017)',
    coalition: 'artemis',
    significance: 'Second state to assert resource rights. Article 1 declares space resources "susceptibles d’appropriation" (capable of being appropriated).',
    analyticNote: 'Displacement: shifts debate from "whether" to "how" extraction occurs — the permission is assumed.',
    confidence: 'confirmed',
    sourceUrl: 'https://legilux.public.lu/eli/etat/leg/loi/2017/07/20/a674/jo',
  },
  {
    id: 'te-004',
    date: '2020-10',
    year: 2020,
    title: 'Artemis Accords signed (8 founding signatories)',
    coalition: 'artemis',
    significance: 'Bilateral accord architecture: each state signs individually with the US, accepting a US-drafted normative framework. Bypasses COPUOS multilateral process.',
    memberCount: 8,
    analyticNote: 'Procedural commitment: signing locks in norms. The "critical mass" strategy — enough signatories make the framework de facto international law.',
    confidence: 'confirmed',
    sourceUrl: NASA_SIGNATORIES,
  },
  {
    id: 'te-005',
    date: '2021-03',
    year: 2021,
    title: 'China-Russia ILRS MoU signed (9 March 2021)',
    coalition: 'ilrs',
    significance: 'Founding intergovernmental agreement. Establishes two-tier partnership: founding partners (China, Russia) vs. joining partners (all others).',
    memberCount: 2,
    analyticNote: 'Iterative enumeration: the MoU starts the process; scope expands through phases without partner re-consent.',
    confidence: 'confirmed',
    sourceUrl: 'https://www.cnsa.gov.cn/english/n6465652/n6465653/c6811380/content.html',
  },
  {
    id: 'te-006',
    date: '2021-06',
    year: 2021,
    title: 'ILRS Roadmap and Guide for Partnership (V1.0) released',
    coalition: 'ilrs',
    significance: 'Released 16 June 2021 at GLEX, St Petersburg. Phases: reconnaissance 2021–2025, construction 2026–2035, utilization after 2036. Partners are invited to join phases already defined by CNSA and Roscosmos.',
    analyticNote: 'The "openness" claim ("all interested international partners") is the legitimation device. Compare Artemis "safety" framing — different vocabulary, same authority-accumulation.',
    confidence: 'confirmed',
    sourceUrl: 'https://www.cnsa.gov.cn/english/n6465652/n6465653/c6812150/content.html',
  },
  {
    id: 'te-007',
    date: '2022-12',
    year: 2022,
    title: 'Artemis Accords reach 23 signatories',
    coalition: 'artemis',
    significance: 'Rapid expansion creates normative momentum. Geographic diversity (Americas, Europe, Asia, Middle East, Africa) bolsters legitimacy claims.',
    memberCount: 23,
    confidence: 'confirmed',
    sourceUrl: NASA_SIGNATORIES,
  },
  {
    id: 'te-014',
    date: '2023-06',
    year: 2023,
    title: 'India signs Artemis Accords (27th signatory, 21 June 2023)',
    coalition: 'artemis',
    significance: 'The largest previously non-aligned space power joins the Artemis framework, signalling the pull of the procedural commitment model.',
    memberCount: 27,
    analyticNote: 'India keeps its own authorisation regime (IN-SPACe) while signing: commitment to Artemis principles coexists with national gatekeeping.',
    confidence: 'confirmed',
    sourceUrl: 'https://www.nasa.gov/news-release/nasa-welcomes-india-as-27th-artemis-accords-signatory',
  },
  {
    id: 'te-009',
    date: '2023-11',
    year: 2023,
    title: 'Artemis Accords reach 33 signatories',
    coalition: 'artemis',
    significance: 'Approaching critical mass. More signatories than the Moon Agreement has parties (17 as of October 2026; 18 at its peak, before Saudi Arabia’s withdrawal took effect in January 2024).',
    memberCount: 33,
    analyticNote: 'The speed of accumulation itself becomes a legitimation device — "momentum as authority."',
    confidence: 'confirmed',
    sourceUrl: NASA_SIGNATORIES,
  },
  {
    id: 'te-010',
    date: '2024-04',
    year: 2024,
    title: 'OSTP memorandum directs NASA to develop Coordinated Lunar Time (2 April 2024)',
    coalition: 'artemis',
    significance: 'Infrastructure becomes governance: defining time = defining the coordination layer for all cislunar operations.',
    analyticNote: 'Functional legitimacy in its purest form. No explicit claim to authority — just the technical standard everyone must use.',
    confidence: 'confirmed',
    sourceUrl: 'https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/04/Celestial-Time-Standardization-Policy.pdf',
  },
  {
    id: 'te-012',
    date: '2024-05',
    year: 2024,
    title: 'Artemis Accords reach 40 signatories',
    coalition: 'artemis',
    significance: 'De facto international norm status. Procedural weight approaching customary international law threshold.',
    memberCount: 40,
    confidence: 'confirmed',
    sourceUrl: NASA_SIGNATORIES,
  },
  {
    id: 'te-011',
    date: '2024-06',
    year: 2024,
    title: 'CNSA: ILRS cooperation documents with more than ten countries and international organisations',
    coalition: 'ilrs',
    significance: 'Expanding beyond the founding pair. April 2024 additions included Nicaragua, APSCO and the Arab Union for Astronomy and Space Sciences.',
    memberCount: 10,
    memberCountNote: 'more than ten countries and international organisations (CNSA, June 2024); no official country-only count found',
    analyticNote: 'Partnership enumeration accelerates. Each new partner validates the "open to all" claim while the architecture remains CNSA-determined.',
    confidence: 'confirmed',
    sourceUrl: 'https://www.cnsa.gov.cn/english/n6465652/n6465653/c10573094/content.html',
  },
  {
    id: 'te-013',
    date: '2025-04',
    year: 2025,
    title: 'CNSA restates ILRS plan: basic model by 2035, extended model in the 2040s',
    coalition: 'ilrs',
    significance: 'Basic model to be built at the lunar south pole by 2035, with Chang’e-7 and Chang’e-8 as parts of it. Replaces an earlier entry ("Phase 1 construction begins 2025-06") that no official source supports.',
    analyticNote: 'Fait accompli mechanism: once infrastructure is placed, governance must accommodate it rather than precede it.',
    confidence: 'stated_intent',
    sourceUrl: 'https://english.www.gov.cn/news/202504/24/content_WS680976d7c6d0868f4e8f2045.html',
  },
  {
    id: 'te-015',
    date: '2026-08',
    year: 2026,
    title: 'Chang’e-7 launch postponed from its 2026 window',
    coalition: 'ilrs',
    significance: 'The first mission named as part of the ILRS basic model does not meet launch conditions; no new date announced.',
    confidence: 'confirmed',
    sourceUrl: 'https://english.news.cn/20260823/eabbb60384b7477594e7fd84789044ae/c.html',
  },
  {
    id: 'te-016',
    date: '2026-10',
    year: 2026,
    title: 'Artemis Accords reach 78 signatories (Vietnam, 28 October 2026)',
    coalition: 'artemis',
    significance: 'The procedural commitment model keeps accumulating signatories well beyond the founding group.',
    memberCount: 78,
    confidence: 'confirmed',
    sourceUrl: 'https://www.nasa.gov/artemis-accords/',
  },
];

// Chronological order; the views read the last Artemis / ILRS entry with a memberCount as the current size.
export const TIMELINE_EVENTS: TimelineEvent[] = [...EVENTS].sort((a, b) => a.date.localeCompare(b.date));

export interface CoalitionSize {
  count: number;
  /** Month of the count (YYYY-MM). */
  asOf: string;
  /** "+" when the source gives a lower bound ("more than ten"). */
  lowerBound: boolean;
  note?: string;
  sourceUrl?: string;
}

/** Latest dated member count for a coalition, with its as-of month. */
export function latestCoalitionSize(coalition: Coalition): CoalitionSize | null {
  const e = [...TIMELINE_EVENTS].reverse().find((x) => x.coalition === coalition && x.memberCount);
  if (!e || !e.memberCount) return null;
  return { count: e.memberCount, asOf: e.date, lowerBound: Boolean(e.memberCountNote), note: e.memberCountNote, sourceUrl: e.sourceUrl };
}
