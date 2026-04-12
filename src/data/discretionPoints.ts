// ═══════════════════════════════════════════════════════════════════
// C. Authority Architecture — Discretion Points
// Terms where power is deferred; the forensic core of LGAT
// ═══════════════════════════════════════════════════════════════════

export type DiscretionType =
  | 'open_ended_qualifier'
  | 'procedural_deferral'
  | 'definitional_gap'
  | 'interpretive_monopoly'
  | 'carve_out';

export interface DiscretionPoint {
  id: string;
  term: string;
  document: string;
  documentId: string;
  section: string;
  type: DiscretionType;
  holder: string;
  implication: string;
  coalition: 'artemis' | 'ilrs' | 'national' | 'ost';
  characteristicFormulation: string;
}

export const DISCRETION_TYPE_LABELS: Record<DiscretionType, string> = {
  open_ended_qualifier: 'Open-ended Qualifier',
  procedural_deferral: 'Procedural Deferral',
  definitional_gap: 'Definitional Gap',
  interpretive_monopoly: 'Interpretive Monopoly',
  carve_out: 'Carve-out',
};

export const DISCRETION_POINTS: DiscretionPoint[] = [
  {
    id: 'dp-001',
    term: 'Due Regard',
    document: 'Outer Space Treaty',
    documentId: 'OST-1967',
    section: 'Article IX',
    type: 'open_ended_qualifier',
    holder: 'Each State Party (self-judging)',
    implication: 'No external arbiter determines what constitutes "due regard." Each spacefaring state defines the threshold of consideration owed to others, creating asymmetric obligation based on capability.',
    coalition: 'ost',
    characteristicFormulation: '"States Parties shall conduct exploration... with due regard to the corresponding interests of all other States Parties."',
  },
  {
    id: 'dp-002',
    term: 'Harmful Interference',
    document: 'Artemis Accords',
    documentId: 'AA-2020',
    section: 'Section 11',
    type: 'open_ended_qualifier',
    holder: 'Signatory / Drafting party (USA)',
    implication: 'Sets the boundary for deconfliction without a central judge. The drafting party retains interpretive control over what constitutes "harmful" activity near its operations.',
    coalition: 'artemis',
    characteristicFormulation: '"Signatories intend to use their experience... to contribute to multilateral efforts to develop international practices and rules applicable to the preservation of outer space heritage."',
  },
  {
    id: 'dp-003',
    term: 'Safety Zone',
    document: 'Artemis Accords',
    documentId: 'AA-2020',
    section: 'Section 11.7',
    type: 'procedural_deferral',
    holder: 'Operating State (unilateral notification)',
    implication: 'Functional exclusion zones without treaty basis. The "notifying" state defines the perimeter, converting operational presence into territorial-adjacent authority.',
    coalition: 'artemis',
    characteristicFormulation: '"The Signatories intend to provide notification of their activities and coordinate with any relevant actor to avoid harmful interference."',
  },
  {
    id: 'dp-004',
    term: 'Co-consultation',
    document: 'ILRS Memorandum of Understanding',
    documentId: 'ILRS-MOU-2021',
    section: 'Article 4',
    type: 'procedural_deferral',
    holder: 'CNSA / Roscosmos (founding partners)',
    implication: 'Consultation without voting rights. Joining partners are consulted but founding states retain architectural control over station design, location, and operational rules.',
    coalition: 'ilrs',
    characteristicFormulation: '"Partners shall carry out cooperation on the basis of equality, mutual benefit and consensus through consultation."',
  },
  {
    id: 'dp-005',
    term: 'Appropriate Utilization',
    document: 'ILRS Guide for Partnership',
    documentId: 'ILRS-GUIDE-2023',
    section: 'Section 3.2',
    type: 'definitional_gap',
    holder: 'CNSA (architectural lead)',
    implication: 'Resource use framed as "appropriate" without defining limits, allowing the lead agency to set extraction norms through precedent rather than negotiation.',
    coalition: 'ilrs',
    characteristicFormulation: '"ILRS will be open to all interested countries and international partners, dedicated to... the appropriate utilization of lunar resources."',
  },
  {
    id: 'dp-006',
    term: 'National Interest',
    document: 'UAE Federal Law No. 12 (Space Sector)',
    documentId: 'UAE-LAW-2019',
    section: 'Article 7',
    type: 'carve_out',
    holder: 'UAE Space Agency',
    implication: 'Data sharing obligations yield to undefined "national interest," creating a black-box override for transparency commitments.',
    coalition: 'national',
    characteristicFormulation: '"The Agency may... restrict access to data or information if disclosure would affect the national interest or security of the State."',
  },
  {
    id: 'dp-007',
    term: 'Peaceful Purposes',
    document: 'Japan Basic Space Law',
    documentId: 'JP-BSL-2008',
    section: 'Article 2 (reinterpreted 2008)',
    type: 'interpretive_monopoly',
    holder: 'Cabinet Office (post-2008 reinterpretation)',
    implication: 'Shift from "non-military" to "non-aggressive" interpretation. The executive branch claimed authority to redefine a constitutional constraint without legislative amendment.',
    coalition: 'national',
    characteristicFormulation: '"Space development shall be carried out... for the purpose of contributing to... international peace and security."',
  },
  {
    id: 'dp-008',
    term: 'Appropriation (negative definition)',
    document: 'Luxembourg Space Resources Law',
    documentId: 'LUX-SRL-2017',
    section: 'Article 1',
    type: 'definitional_gap',
    holder: 'Luxembourg Government (unilateral legislative act)',
    implication: 'Defines what appropriation is NOT (national sovereignty claim) to permit what it IS (commercial extraction). Reframes OST Article II through silence on resource rights.',
    coalition: 'national',
    characteristicFormulation: '"Space resources are capable of being owned." [Distinct from sovereignty over celestial bodies]',
  },
  {
    id: 'dp-009',
    term: 'Centralized Authorization',
    document: 'India Space Activities Bill',
    documentId: 'IN-SAB-2023',
    section: 'Chapter III',
    type: 'interpretive_monopoly',
    holder: 'IN-SPACe (Indian National Space Promotion and Authorization Centre)',
    implication: 'Single gateway authorization concentrates interpretive authority over all commercial and international space activity involving Indian entities.',
    coalition: 'national',
    characteristicFormulation: '"No person shall undertake any space activity unless authorized by the Central Government."',
  },
  {
    id: 'dp-010',
    term: 'Lunar Time Standard',
    document: 'OSTP Coordinated Lunar Time (LTC) Framework',
    documentId: 'US-OSTP-LTC-2024',
    section: 'Presidential Directive',
    type: 'interpretive_monopoly',
    holder: 'NASA / OSTP (USA)',
    implication: 'Authority over reference frames. Whoever defines the time standard for cislunar space defines the coordination infrastructure all actors must adopt.',
    coalition: 'artemis',
    characteristicFormulation: '"NASA shall establish a unified lunar time standard... to ensure interoperability, safety, and precision of operations."',
  },
  {
    id: 'dp-011',
    term: 'Multilateral Alignment',
    document: 'ESA Statement on Artemis Accords Principles',
    documentId: 'ESA-STMT-2023',
    section: 'Director General Statement',
    type: 'procedural_deferral',
    holder: 'ESA Member States (collective)',
    implication: 'Defers to existing multilateral frameworks (COPUOS) while participating operationally in Artemis, creating dual-track legitimation.',
    coalition: 'artemis',
    characteristicFormulation: '"ESA welcomes the principles... and will continue to work within the UN framework for the development of international norms."',
  },
  {
    id: 'dp-012',
    term: 'Phase 4 Exploration',
    document: 'CNSA Lunar Exploration Programme Phase 4',
    documentId: 'CN-LEP4-2024',
    section: 'Programme Architecture',
    type: 'procedural_deferral',
    holder: 'CNSA (state agency)',
    implication: 'Phased programme structure allows iterative expansion of scope without requiring partner re-consent at each stage. Architectural decisions cascade.',
    coalition: 'ilrs',
    characteristicFormulation: '"Phase 4 will establish the basic model for the ILRS, conducting scientific exploration and technological verification."',
  },
];
