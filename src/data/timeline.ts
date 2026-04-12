// ═══════════════════════════════════════════════════════════════════
// F. Coalition Tracker — Timeline Data
// Artemis = Procedural commitment (sign once, bind to norms)
// ILRS = Iterative partnership enumeration (join, then scope expands)
// ═══════════════════════════════════════════════════════════════════

import type { Coalition } from './countries';

export interface TimelineEvent {
  id: string;
  date: string;
  year: number;
  title: string;
  coalition: Coalition;
  significance: string;
  memberCount?: number;
  analyticNote?: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'te-001',
    date: '1967-01',
    year: 1967,
    title: 'Outer Space Treaty enters into force',
    coalition: 'dual',
    significance: 'Establishes foundational ambiguity: "province of all mankind" without enforcement mechanism. The discretion points that LGAT tracks originate here.',
  },
  {
    id: 'te-002',
    date: '2015-11',
    year: 2015,
    title: 'US Commercial Space Launch Competitiveness Act',
    coalition: 'artemis',
    significance: 'First national legislation asserting resource extraction rights. Unilateral legislative interpretation of OST silence on resources.',
    analyticNote: 'Moral inoculation: frames extraction as "not appropriation" — negative definition strategy.',
  },
  {
    id: 'te-003',
    date: '2017-07',
    year: 2017,
    title: 'Luxembourg Space Resources Law',
    coalition: 'artemis',
    significance: 'Second state to assert resource rights. Creates a European legal anchor for the "resources ≠ sovereignty" interpretation.',
    analyticNote: 'Displacement: shifts debate from "whether" to "how" extraction occurs — the permission is assumed.',
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
  },
  {
    id: 'te-005',
    date: '2021-03',
    year: 2021,
    title: 'China-Russia ILRS MoU signed',
    coalition: 'ilrs',
    significance: 'Founding bilateral agreement. Establishes two-tier partnership: founding partners (China, Russia) vs. joining partners (all others).',
    memberCount: 2,
    analyticNote: 'Iterative enumeration: the MoU starts the process; scope expands through phases without partner re-consent.',
  },
  {
    id: 'te-006',
    date: '2021-06',
    year: 2021,
    title: 'ILRS Roadmap released',
    coalition: 'ilrs',
    significance: 'Three-phase timeline (2025-2035) published. Partners invited to join phases already architecturally defined by CNSA.',
  },
  {
    id: 'te-007',
    date: '2022-12',
    year: 2022,
    title: 'Artemis Accords reach 23 signatories',
    coalition: 'artemis',
    significance: 'Rapid expansion creates normative momentum. Geographic diversity (Americas, Europe, Asia, Middle East, Africa) bolsters legitimacy claims.',
    memberCount: 23,
  },
  {
    id: 'te-008',
    date: '2023-04',
    year: 2023,
    title: 'ILRS Guide for Partnership published',
    coalition: 'ilrs',
    significance: '"Open to all interested countries" — normative appeal to inclusivity while architectural decisions remain with CNSA.',
    memberCount: 10,
    analyticNote: 'The "openness" claim is the legitimation device. Compare Artemis "safety" framing — different vocabulary, same authority-accumulation.',
  },
  {
    id: 'te-009',
    date: '2023-11',
    year: 2023,
    title: 'Artemis Accords reach 33 signatories',
    coalition: 'artemis',
    significance: 'Approaching critical mass. More signatories than Moon Agreement (18 ratifications over 40 years).',
    memberCount: 33,
    analyticNote: 'The speed of accumulation itself becomes a legitimation device — "momentum as authority."',
  },
  {
    id: 'te-010',
    date: '2024-04',
    year: 2024,
    title: 'OSTP directs NASA to establish Coordinated Lunar Time',
    coalition: 'artemis',
    significance: 'Infrastructure becomes governance: defining time = defining the coordination layer for all cislunar operations.',
    analyticNote: 'Functional legitimacy in its purest form. No explicit claim to authority — just the technical standard everyone must use.',
  },
  {
    id: 'te-011',
    date: '2024-06',
    year: 2024,
    title: 'ILRS partners reach 12+ nations',
    coalition: 'ilrs',
    significance: 'Expanding beyond initial bilateral. Venezuela, South Africa, Pakistan, Egypt join — Global South appeal materializes.',
    memberCount: 12,
    analyticNote: 'Partnership enumeration accelerates. Each new partner validates the "open to all" claim while the architecture remains CNSA-determined.',
  },
  {
    id: 'te-012',
    date: '2025-01',
    year: 2025,
    title: 'Artemis Accords surpass 40 signatories',
    coalition: 'artemis',
    significance: 'De facto international norm status. Procedural weight approaching customary international law threshold.',
    memberCount: 43,
  },
];
