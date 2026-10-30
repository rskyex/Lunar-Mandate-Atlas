// ═══════════════════════════════════════════════════════════════════
// C. Authority Architecture — Discretion Points
// Terms where power is deferred; the forensic core of LGT
//
// Every point records where its wording comes from: sourceUrl and pinpoint
// locate it, formulationKind says whether characteristicFormulation is the
// source's own words (verbatim) or the researcher's summary (paraphrase), and
// sourceStatus says whether the wording was checked against that source.
// Checked against the sources on 2026-10-29. Types, holders, coalition tags and
// inclusion follow the codebook in ./codebook.ts (dataset 1.3.0).
// ═══════════════════════════════════════════════════════════════════

import { documentTitles, type DocumentId } from './documents';

export type DiscretionType =
  | 'open_ended_qualifier'
  | 'procedural_deferral'
  | 'definitional_gap'
  | 'interpretive_monopoly'
  | 'carve_out';

export type FormulationKind = 'verbatim' | 'paraphrase';
export type SourceStatus = 'verified' | 'unverified';

interface DiscretionPointEntry {
  id: string;
  term: string;
  /** Ids in the documents registry (src/data/documents.ts); several when the point spans documents. */
  documentIds: DocumentId[];
  section: string;
  type: DiscretionType;
  holder: string;
  implication: string;
  coalition: 'artemis' | 'ilrs' | 'national' | 'ost';
  /** Verbatim text without surrounding quotation marks, or a paraphrase. */
  characteristicFormulation: string;
  formulationKind: FormulationKind;
  /** Where the wording was read; null when no checkable source was found. */
  sourceUrl: string | null;
  /** Exact location in that source (article, section, page). */
  pinpoint: string;
  sourceStatus: SourceStatus;
  /** Counted under the codebook's selection rule. */
  included: boolean;
  /** Why a point is shown but not counted. */
  exclusionReason?: string;
}

export interface DiscretionPoint extends DiscretionPointEntry {
  /** Canonical title(s) from the documents registry. */
  document: string;
}

export const DISCRETION_TYPE_LABELS: Record<DiscretionType, string> = {
  open_ended_qualifier: 'Open-ended Qualifier',
  procedural_deferral: 'Procedural Deferral',
  definitional_gap: 'Definitional Gap',
  interpretive_monopoly: 'Interpretive Monopoly',
  carve_out: 'Carve-out',
};

const OST_URL = 'https://www.unoosa.org/res/oosadoc/data/documents/2017/stspace/stspace61rev_2_0_html/V1605998-ENGLISH.pdf';
const AA_URL = 'https://www.nasa.gov/wp-content/uploads/2022/11/Artemis-Accords-signed-13Oct2020.pdf';

const ENTRIES: DiscretionPointEntry[] = [
  {
    id: 'dp-001',
    term: 'Due Regard',
    documentIds: ['OST-1967'],
    section: 'Article IX',
    type: 'open_ended_qualifier',
    holder: 'Each State Party (self-judging)',
    implication: 'No external arbiter determines what constitutes "due regard." Each spacefaring state defines the threshold of consideration owed to others, creating asymmetric obligation based on capability.',
    coalition: 'ost',
    characteristicFormulation: 'States Parties to the Treaty … shall conduct all their activities in outer space, including the Moon and other celestial bodies, with due regard to the corresponding interests of all other States Parties to the Treaty.',
    formulationKind: 'verbatim',
    sourceUrl: OST_URL,
    pinpoint: 'Article IX, first sentence (UNOOSA, International Space Law: United Nations Instruments, ST/SPACE/61/Rev.2)',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-002',
    term: 'Harmful Interference',
    documentIds: ['AA-2020'],
    section: 'Section 11, para. 4',
    type: 'open_ended_qualifier',
    holder: 'Each Signatory (self-judging)',
    implication: 'Sets the boundary for deconfliction without a central judge. The drafting party retains interpretive control over what constitutes "harmful" activity near its operations.',
    coalition: 'artemis',
    characteristicFormulation: 'The Signatories commit to seek to refrain from any intentional actions that may create harmful interference with each other’s use of outer space in their activities under these Accords.',
    formulationKind: 'verbatim',
    sourceUrl: AA_URL,
    pinpoint: 'Section 11 (Deconfliction of Space Activities), para. 4',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-003',
    term: 'Safety Zone',
    documentIds: ['AA-2020'],
    section: 'Section 11, para. 7',
    type: 'procedural_deferral',
    holder: 'Operating Signatory (sets and notifies the safety zone)',
    implication: 'Functional exclusion zones without treaty basis. The "notifying" state defines the perimeter, converting operational presence into territorial-adjacent authority.',
    coalition: 'artemis',
    characteristicFormulation: 'In order to implement their obligations under the Outer Space Treaty, the Signatories intend to provide notification of their activities and commit to coordinating with any relevant actor to avoid harmful interference. The area wherein this notification and coordination will be implemented to avoid harmful interference is referred to as a ‘safety zone’.',
    formulationKind: 'verbatim',
    sourceUrl: AA_URL,
    pinpoint: 'Section 11 (Deconfliction of Space Activities), para. 7, first two sentences',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-004',
    term: 'Co-consultation',
    documentIds: ['ILRS-MOU-2021'],
    section: 'MoU text not public; CNSA summary of 9 March 2021',
    type: 'procedural_deferral',
    holder: 'CNSA / Roscosmos (founding partners)',
    implication: 'Consultation without voting rights. Joining partners are consulted but founding states retain architectural control over station design, location, and operational rules. The MoU itself is not public, so its terms cannot be checked; the wording here is CNSA’s summary.',
    coalition: 'ilrs',
    characteristicFormulation: 'CNSA and ROSCOSMOS will adhere to the principle of “co consultation, joint construction, and shared benefits”, facilitate extensive cooperation in the ILRS, open to all interested countries and international partners',
    formulationKind: 'verbatim',
    sourceUrl: 'https://www.cnsa.gov.cn/english/n6465652/n6465653/c6811380/content.html',
    pinpoint: 'CNSA news release, 9 March 2021, second paragraph (summary of the intergovernmental MoU; the MoU text is not public)',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-005',
    term: 'All Interested International Partners',
    documentIds: ['ILRS-GUIDE-2023'],
    section: 'Preface, p. 2',
    type: 'definitional_gap',
    holder: 'CNSA / Roscosmos (joint authors and conveners)',
    implication: 'Open invitation framed by "the interests of all humankind" without defining who qualifies as a partner or how benefits are shared. The two founding agencies set the terms of partnership.',
    coalition: 'ilrs',
    characteristicFormulation: 'CNSA and ROSCOMOS jointly invite all interested international partners to cooperate and contribute more for the peaceful exploration and use of Moon in the interests of all humankind, adhering to the principles of equality, openness and integrity.',
    formulationKind: 'verbatim',
    sourceUrl: 'https://www.cnsa.gov.cn/english/n6465652/n6465653/c6812150/content.html',
    pinpoint: 'Guide for Partnership (V1.0), June 2021, Preface, p. 2 (published as page images; "ROSCOMOS" as in the source)',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-006',
    term: 'National Interest',
    documentIds: ['UAE-LAW-2019'],
    section: 'Article 7 (as cited; not checked)',
    type: 'carve_out',
    holder: 'UAE Space Agency',
    implication: 'Data sharing obligations yield to undefined "national interest," creating a black-box override for transparency commitments. Unverified: the 2019 law text could not be read, and the law was repealed by Federal Decree-Law No. 46 of 2023 (Art. 39), which has no such provision.',
    coalition: 'national',
    characteristicFormulation: 'The Agency may restrict access to data or information if disclosure would affect the national interest or security of the State.',
    formulationKind: 'paraphrase',
    sourceUrl: null,
    pinpoint: 'Article 7 as previously cited; no official text found',
    sourceStatus: 'unverified',
    included: false,
    exclusionReason: 'Text unverified: the 2019 law could not be read, and it was repealed by Federal Decree-Law No. 46 of 2023.',
  },
  {
    id: 'dp-007',
    term: 'Peaceful Use (pacifist principles / national security)',
    documentIds: ['JP-BSL-2008'],
    section: 'Article 2; see also Articles 3 and 14',
    type: 'definitional_gap',
    holder: 'National Diet (statute, 2008); the Government in applying it',
    implication: 'The Act, passed by the Diet, keeps outer space use "in accordance with the pacifist principles of the Constitution" (Art. 2) while directing the government to promote space use "to contribute to Japan’s national security" (Art. 14). It does not define what peaceful use excludes, so the line between non-military and defensive use is drawn by the Government in applying the Act.',
    coalition: 'national',
    characteristicFormulation: 'Outer space development and use is to be conducted in accordance with the provisions of treaties and other international agreements concerning outer space use and development, including the Treaty on Principles Governing the Activities of States in the Exploration and Use of Outer Space, including the Moon and Other Celestial Bodies, in accordance with the pacifist principles of the Constitution of Japan.',
    formulationKind: 'verbatim',
    sourceUrl: 'https://www.japaneselawtranslation.go.jp/en/laws/view/4194/en',
    pinpoint: 'Basic Space Act (Act No. 43 of 2008), Article 2 (official English translation, Japanese Law Translation database)',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-008',
    term: 'Space Resources Capable of Appropriation',
    documentIds: ['LUX-SRL-2017'],
    section: 'Article 1',
    type: 'definitional_gap',
    holder: 'Luxembourg legislature; ministers for the economy and space activities (mission authorisation, Art. 2)',
    implication: 'The law states affirmatively that space resources can be appropriated, using the word that OST Article II applies to outer space and celestial bodies. It does not define "space resources" or where a resource ends and a celestial body begins; that boundary is set nationally, through mission authorisation by the ministers (Art. 2).',
    coalition: 'national',
    characteristicFormulation: 'Les ressources de l’espace sont susceptibles d’appropriation.',
    formulationKind: 'verbatim',
    sourceUrl: 'https://legilux.public.lu/eli/etat/leg/loi/2017/07/20/a674/jo',
    pinpoint: 'Loi du 20 juillet 2017, Art. 1er (Mémorial A 674). In English: space resources are capable of being appropriated (researcher’s translation)',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-009',
    term: 'Licence Requirement (draft)',
    documentIds: ['IN-SAB-2023'],
    section: 'Chapter III, section 6(1)',
    type: 'procedural_deferral',
    holder: 'Central Government (licensing authority under the draft)',
    implication: 'Single gateway licensing concentrates authority over all commercial space activity involving Indian entities in the Central Government. This is a 2017 draft published for consultation, not enacted law.',
    coalition: 'national',
    characteristicFormulation: 'No person shall carry on any commercial space activity except with a licence referred to in sub-section (1) of section 7',
    formulationKind: 'verbatim',
    sourceUrl: 'https://prsindia.org/files/bills_acts/bills_parliament/1970/Draft%20Space%20Activities%20Bill%202017.pdf',
    pinpoint: 'Draft Space Activities Bill, 2017 (Department of Space), Chapter III, s. 6(1), p. 5 (copy hosted by PRS Legislative Research)',
    sourceStatus: 'verified',
    included: false,
    exclusionReason: 'Draft bill (2017) published for consultation, never enacted.',
  },
  {
    id: 'dp-010',
    term: 'Lunar Time Standard',
    documentIds: ['US-OSTP-LTC-2024'],
    section: 'OSTP memorandum, Section 2(b)',
    type: 'procedural_deferral',
    holder: 'NASA (tasked by OSTP)',
    implication: 'Authority over reference frames. Whoever defines the time standard for cislunar space defines the coordination infrastructure all actors must adopt. The instrument is an OSTP policy memorandum to federal agencies, not a Presidential Directive.',
    coalition: 'national',
    characteristicFormulation: 'NASA, with support from partnering departments and agencies, will establish the approach to LTC as the international standard through existing standards bodies, and among the Artemis Accords signatories.',
    formulationKind: 'verbatim',
    sourceUrl: 'https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/04/Celestial-Time-Standardization-Policy.pdf',
    pinpoint: 'OSTP memorandum of 2 April 2024, Section 2 (Policy Guidance), item b',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-011',
    term: 'Non-signatory Participation',
    documentIds: ['ESA-STMT-2023'],
    section: 'FAQ: "What are the Artemis Accords?"',
    type: 'procedural_deferral',
    holder: 'ESA member states, each deciding whether to sign',
    implication: 'ESA participates operationally in Artemis (Gateway) but cannot sign the Accords; signature is left to its member states one by one, creating dual-track legitimation. No ESA statement "welcoming the principles" was found; the earlier wording is withdrawn.',
    coalition: 'artemis',
    characteristicFormulation: 'they are only open to signature by individual states, which is why ESA is not a signatory nor is it involved in the process',
    formulationKind: 'verbatim',
    sourceUrl: 'https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Gateway_MoU_and_Artemis_Accords_FAQs',
    pinpoint: 'ESA, Gateway MoU and Artemis Accords – FAQs, answer to "What are the Artemis Accords?"',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-012',
    term: 'Phase 4 Exploration',
    documentIds: ['CN-LEP4-2024'],
    section: 'SCIO briefing, 28 January 2022 (Wu Yanhua, CNSA)',
    type: 'procedural_deferral',
    holder: 'CNSA (state agency)',
    implication: 'Phased programme structure allows iterative expansion of scope without requiring partner re-consent at each stage. Architectural decisions cascade.',
    coalition: 'ilrs',
    characteristicFormulation: 'The goal of the fourth phase for the Chinese lunar exploration program is to build a basic model of an international lunar scientific research station.',
    formulationKind: 'verbatim',
    sourceUrl: 'https://www.cnsa.gov.cn/english/n6465684/n6760328/n6760329/c6813197/content.html',
    pinpoint: 'SCIO briefing on the white paper "China’s Space Program: A 2021 Perspective" (transcript on CNSA site, dated 2022-01-30), remarks of Wu Yanhua',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-013',
    term: 'As Appropriate',
    documentIds: ['AA-2020'],
    section: 'Section 1 (Purpose and Scope), second paragraph',
    type: 'open_ended_qualifier',
    holder: 'Each Signatory (self-judging)',
    implication: '"As appropriate" delegates implementation entirely to the signatory. No external standard defines what is or is not appropriate, allowing each actor to calibrate compliance to their own interests.',
    coalition: 'artemis',
    characteristicFormulation: 'The Signatories intend to implement the principles set out in these Accords through their own activities by taking, as appropriate, measures such as mission planning and contractual mechanisms with entities acting on their behalf.',
    formulationKind: 'verbatim',
    sourceUrl: AA_URL,
    pinpoint: 'Section 1 (Purpose and Scope), second paragraph, last sentence',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-015',
    term: 'Authorisation by IN-SPACe',
    documentIds: ['IN-ISP-2023'],
    section: 'Definitions, no. 1; Section 5',
    type: 'procedural_deferral',
    holder: 'IN-SPACe, subject to Government directives',
    implication: 'Authorisation is defined only as permission granted by IN-SPACe; the criteria are left to IN-SPACe "subject to relevant Government directives" (Section 5). A policy document, not legislation.',
    coalition: 'national',
    characteristicFormulation: '“Authorisation” shall mean the permission granted by IN-SPACe to any entity working in the Space sector;',
    formulationKind: 'verbatim',
    sourceUrl: 'https://www.isro.gov.in/media_isro/pdf/IndianSpacePolicy2023.pdf',
    pinpoint: 'Indian Space Policy 2023, Definitions, no. 1, p. 3',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-016',
    term: 'Interoperability Standards',
    documentIds: ['NASA-LUNANET'],
    section: 'Section 1 (Introduction)',
    type: 'procedural_deferral',
    holder: 'NASA SCaN Control Board (document control); NASA, ESA and JAXA (authors)',
    implication: 'The specification is written and approved jointly by NASA, ESA and JAXA, but the document is controlled by NASA’s SCaN board. Mutual agreement on paper coexists with a US-held control point for the baseline standards.',
    coalition: 'artemis',
    characteristicFormulation: 'Interoperability across this network-of-networks can be achieved through negotiation of mutually-agreed-upon standards and interfaces that are reflected in this document.',
    formulationKind: 'verbatim',
    sourceUrl: 'https://www.nasa.gov/wp-content/uploads/2025/02/lunanet-interoperability-specification-v5-baseline.pdf',
    pinpoint: 'LunaNet Interoperability Specification, Version 5 (29 January 2025), Section 1, p. 9; authorship in Section 1.1',
    sourceStatus: 'verified',
    included: true,
  },
  {
    id: 'dp-017',
    term: 'Ownership vs. Appropriation',
    documentIds: ['LUX-SRL-2017', 'US-CSLCA-2015'],
    section: '51 U.S.C. 51303 / Luxembourg Art. 1',
    type: 'definitional_gap',
    holder: 'National legislatures (Luxembourg, USA)',
    implication: 'The boundary between "ownership of extracted resources" (permitted) and "appropriation of celestial bodies" (prohibited by OST) is drawn unilaterally by national legislation without international adjudication. The US Act pairs the grant of rights with a disclaimer of sovereignty over any celestial body (sec. 403).',
    coalition: 'national',
    characteristicFormulation: 'A United States citizen engaged in commercial recovery of an asteroid resource or a space resource under this chapter shall be entitled to any asteroid resource or space resource obtained, including to possess, own, transport, use, and sell the asteroid resource or space resource obtained in accordance with applicable law, including the international obligations of the United States.',
    formulationKind: 'verbatim',
    sourceUrl: 'https://www.govinfo.gov/content/pkg/PLAW-114publ90/html/PLAW-114publ90.htm',
    pinpoint: 'Pub. L. 114-90, Title IV, sec. 402, adding 51 U.S.C. 51303',
    sourceStatus: 'verified',
    included: true,
  },
];

export const DISCRETION_POINTS: DiscretionPoint[] = ENTRIES.map((p) => ({
  ...p,
  document: documentTitles(p.documentIds),
}));
