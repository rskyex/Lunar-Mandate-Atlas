// ═══════════════════════════════════════════════════════════════════
// D. Global Scope — Tier 1 Countries
// Each entry maps the "Double Movement": universal claim → specific authority
// ═══════════════════════════════════════════════════════════════════

import type { TranslationDeviceType, HumanityReferent, InfrastructureType } from './constants';
import { getDocument, type DocumentId } from './documents';

export type Coalition = 'artemis' | 'ilrs' | 'dual' | 'independent';

// ─── Stage 1-3 Analysis Framework (Beetham-Koyanagi) ─────────────
export interface Stage1_HumanityConstruction {
  referent: string;        // Who does this document claim to represent?
  referentCategory: HumanityReferent;
  audienceTarget: string;  // Who is the intended audience for this claim?
}

export interface Stage2_LegitimacyProduction {
  justificatoryVocabulary: string[];  // The "magic words" used
  translationDevice: TranslationDeviceType;
  legitimationNarrative: string;      // How the vocabulary produces acceptance
}

export interface Stage3_AuthorityArchitecture {
  interpretiveControl: string;   // Who ultimately defines the ambiguous terms?
  discretionMechanism: string;   // How is that control exercised?
  powerEffect: string;           // What authority does this produce?
}

interface GovernanceDocumentEntry {
  /** Id of this country-profile entry (used to open its detail view). */
  id: string;
  /** The document this entry analyses, from the documents registry (src/data/documents.ts). */
  documentId: DocumentId;
  coalition: Coalition;
  /** Verbatim text without surrounding quotation marks, or a paraphrase (see formulationKind). */
  characteristicFormulation: string;
  formulationKind: 'verbatim' | 'paraphrase';
  translationType: TranslationDeviceType;
  humanityReferent: HumanityReferent;
  infrastructureLink: InfrastructureType[];
  authorityMechanism: string;
  // Stage 1-3 Analysis
  stage1: Stage1_HumanityConstruction;
  stage2: Stage2_LegitimacyProduction;
  stage3: Stage3_AuthorityArchitecture;
}

export interface GovernanceDocument extends GovernanceDocumentEntry {
  /** Canonical title and year from the documents registry. */
  title: string;
  year: number;
}

interface CountryEntry extends Omit<Country, 'documents'> {
  documents: GovernanceDocumentEntry[];
}

export interface Country {
  id: string;
  name: string;
  code: string;
  coalition: Coalition;
  primaryAudience: string;
  legitimationStrategy: string;
  documents: GovernanceDocument[];
  rulesDensity: number; // 1-10 scale: density of binding provisions (author judgement; no rubric yet)
  universalistClaim: string;
  specificAuthority: string;
}

const COUNTRY_ENTRIES: CountryEntry[] = [
  {
    id: 'usa',
    name: 'United States',
    code: 'US',
    coalition: 'artemis',
    primaryAudience: 'Implementers / Partners',
    legitimationStrategy: 'Procedural leadership through standard-setting. Converts operational capability into normative authority via "safety" and "interoperability" framing.',
    rulesDensity: 8,
    universalistClaim: '"For all humanity" — framed through capability and access',
    specificAuthority: 'Defines safety zones, time standards, and interoperability requirements that all partners must adopt.',
    documents: [
      {
        id: 'doc-usa-01',
        documentId: 'AA-2020',
        coalition: 'artemis',
        characteristicFormulation: 'The Accords represent a political commitment to the principles described herein, many of which provide for operational implementation of important obligations contained in the Outer Space Treaty and other instruments.',
        formulationKind: 'verbatim',
        translationType: 'functional',
        humanityReferent: 'scientific_commons',
        infrastructureLink: ['comms', 'nav', 'logistics'],
        authorityMechanism: 'Bilateral accord architecture bypassing COPUOS multilateral process. Each signatory accepts US-drafted norms individually.',
        stage1: {
          referent: 'Scientific community and future lunar operators as proxies for "all humanity"',
          referentCategory: 'scientific_commons',
          audienceTarget: 'Implementers and partners with operational capability — states that can contribute to Artemis missions',
        },
        stage2: {
          justificatoryVocabulary: ['Safety', 'Sustainability', 'Interoperability', 'Transparency', 'Deconfliction'],
          translationDevice: 'functional',
          legitimationNarrative: 'Frames US-drafted norms as technical necessities ("safety," "interoperability") rather than political choices. The procedural vocabulary makes acceptance appear apolitical.',
        },
        stage3: {
          interpretiveControl: 'USA as drafting party retains interpretive authority over key terms: "harmful interference," "safety zones," "due regard"',
          discretionMechanism: 'Bilateral signature architecture — each state signs individually with the US, not with each other. No collective amendment process.',
          powerEffect: 'Creates a hub-and-spoke normative network with the US at the center. Critical mass of signatories converts soft norms into de facto international law.',
        },
      },
      {
        id: 'doc-usa-02',
        documentId: 'US-OSTP-LTC-2024',
        coalition: 'artemis',
        characteristicFormulation: 'NASA, with support from partnering departments and agencies, will establish the approach to LTC as the international standard through existing standards bodies, and among the Artemis Accords signatories.',
        formulationKind: 'verbatim',
        translationType: 'functional',
        humanityReferent: 'scientific_commons',
        infrastructureLink: ['nav', 'comms'],
        authorityMechanism: 'Authority over reference frames. Defining time = defining the coordination layer. All actors must synchronize to US-defined standard.',
        stage1: {
          referent: 'All cislunar operators framed as beneficiaries of temporal coordination',
          referentCategory: 'scientific_commons',
          audienceTarget: 'Technical community and Artemis partners who require precision timing for operations',
        },
        stage2: {
          justificatoryVocabulary: ['Interoperability', 'Safety', 'Precision'],
          translationDevice: 'functional',
          legitimationNarrative: 'Presents temporal authority as a pure engineering requirement. The political dimension (who controls the reference frame) is invisible behind technical necessity.',
        },
        stage3: {
          interpretiveControl: 'NASA / OSTP defines the time standard; all actors must synchronize to it',
          discretionMechanism: 'An OSTP policy memorandum to federal agencies (2 April 2024) tasks NASA with defining the standard and establishing it internationally; no multilateral governance process sets it',
          powerEffect: 'Whoever defines time defines the coordination infrastructure. Functional authority without explicit political claim.',
        },
      },
    ],
  },
  {
    id: 'china',
    name: 'China',
    code: 'CN',
    coalition: 'ilrs',
    primaryAudience: 'Global South / Developing States',
    legitimationStrategy: 'Normative appeal to inclusivity and equality. Positions ILRS as "open to all countries" while retaining architectural control through phased development.',
    rulesDensity: 5,
    universalistClaim: '"Open to all interested countries" — framed through equality and shared benefit',
    specificAuthority: 'CNSA controls station architecture, phase definitions, and partner onboarding criteria.',
    documents: [
      {
        id: 'doc-cn-01',
        documentId: 'ILRS-GUIDE-2023',
        coalition: 'ilrs',
        characteristicFormulation: 'CNSA and ROSCOMOS jointly invite all interested international partners to cooperate and contribute more for the peaceful exploration and use of Moon in the interests of all humankind, adhering to the principles of equality, openness and integrity.',
        formulationKind: 'verbatim',
        translationType: 'normative',
        humanityReferent: 'global_south',
        infrastructureLink: ['habitats', 'ISRU', 'power'],
        authorityMechanism: 'Iterative partnership enumeration. Partners join individually through MoUs that reference ILRS architecture without co-designing it.',
        stage1: {
          referent: 'Global South and developing states as the primary beneficiaries of Chinese-led lunar cooperation',
          referentCategory: 'global_south',
          audienceTarget: 'Developing states seeking space access without the capital requirements of independent programmes',
        },
        stage2: {
          justificatoryVocabulary: ['Equality', 'Mutual Benefit', 'Inclusivity', 'Openness', 'Peaceful Use'],
          translationDevice: 'normative',
          legitimationNarrative: 'Positions ILRS as the democratic alternative to Artemis. "Open to all" vocabulary creates moral contrast with US bilateral architecture. Inclusivity as legitimation device.',
        },
        stage3: {
          interpretiveControl: 'CNSA and Roscosmos, as joint authors of the Guide, define station architecture, phase scope, and partner onboarding criteria',
          discretionMechanism: 'Partners join phases already designed by CNSA. "Consultation" without co-design rights. Architecture determines what partners can and cannot do.',
          powerEffect: 'Normative openness coexists with architectural control. The invitation is universal; the blueprint is not.',
        },
      },
      {
        id: 'doc-cn-02',
        documentId: 'CN-LEP4-2024',
        coalition: 'ilrs',
        characteristicFormulation: 'The goal of the fourth phase for the Chinese lunar exploration program is to build a basic model of an international lunar scientific research station.',
        formulationKind: 'verbatim',
        translationType: 'epistemic',
        humanityReferent: 'scientific_commons',
        infrastructureLink: ['ISRU', 'power', 'habitats', 'nav'],
        authorityMechanism: 'Phased programme creates fait accompli. Partners consent to "Phase 4" without visibility into Phases 5-6 scope expansion.',
        stage1: {
          referent: 'Scientific community as validator of Chinese technological achievement',
          referentCategory: 'scientific_commons',
          audienceTarget: 'International scientific community and prospective ILRS partners',
        },
        stage2: {
          justificatoryVocabulary: ['Scientific Exploration', 'Technological Verification', 'Phased Development'],
          translationDevice: 'epistemic',
          legitimationNarrative: 'Technical expertise as the basis for leadership. Phase structure presents expanding authority as a natural progression of scientific capability.',
        },
        stage3: {
          interpretiveControl: 'CNSA unilaterally defines what each "phase" entails; scope expansion occurs between phases without partner re-consent',
          discretionMechanism: 'Phased architecture — partners agree to Phase 4 terms but Phase 5-6 scope is determined later by CNSA',
          powerEffect: 'Cascading consent: early agreement to a limited phase creates path dependency for accepting expanded scope later.',
        },
      },
    ],
  },
  {
    id: 'russia',
    name: 'Russia',
    code: 'RU',
    coalition: 'ilrs',
    primaryAudience: 'Bilateral partner (China)',
    legitimationStrategy: 'Bilateral authority construction. MoU with CNSA positions Roscosmos as co-founding partner with privileged consultation rights.',
    rulesDensity: 3,
    universalistClaim: '"Mutual benefit and equality" — framed through bilateral partnership',
    specificAuthority: 'Co-founding status grants architectural veto and privileged consultation not available to later joiners.',
    documents: [
      {
        id: 'doc-ru-01',
        documentId: 'ILRS-MOU-2021',
        coalition: 'ilrs',
        characteristicFormulation: 'CNSA and ROSCOSMOS will adhere to the principle of “co consultation, joint construction, and shared benefits”, facilitate extensive cooperation in the ILRS, open to all interested countries and international partners',
        formulationKind: 'verbatim',
        translationType: 'normative',
        humanityReferent: 'civilisation',
        infrastructureLink: ['habitats', 'logistics', 'power'],
        authorityMechanism: 'Bilateral foundation creates two-tier partnership. Founding partners vs. joining partners have asymmetric influence.',
        stage1: {
          referent: 'Civilisation-level framing: space cooperation as counter-hegemonic alternative to US-led order',
          referentCategory: 'civilisation',
          audienceTarget: 'Bilateral partner (China) and states seeking alternatives to the Artemis framework',
        },
        stage2: {
          justificatoryVocabulary: ['Equality', 'Mutual Benefit', 'Bilateral Cooperation'],
          translationDevice: 'normative',
          legitimationNarrative: '"Equality" between founding partners legitimises the bilateral core while obscuring the asymmetry between founders and later joiners.',
        },
        stage3: {
          interpretiveControl: 'Founding partners (CNSA + Roscosmos) hold co-design authority over ILRS architecture',
          discretionMechanism: 'Two-tier partnership: founding MoU grants architectural veto not available to subsequent partners joining via the Guide for Partnership',
          powerEffect: 'Co-founding status creates a privileged inner circle. "Equality" applies between founders, not between founders and joiners.',
        },
      },
    ],
  },
  {
    id: 'japan',
    name: 'Japan',
    code: 'JP',
    coalition: 'artemis',
    primaryAudience: 'Domestic Public / Alliance Partners',
    legitimationStrategy: 'Statutory reframing of a constitutional constraint. The Basic Space Act (passed by the Diet in 2008) keeps the pacifist principle but adds national security as a purpose, opening the reading of "peaceful" from "non-military" towards "non-aggressive."',
    rulesDensity: 7,
    universalistClaim: '"Peaceful purposes and international cooperation" — framed through constitutional commitment',
    specificAuthority: 'The Act does not define "peaceful"; the Government, in applying Articles 2 and 14, decides what it permits in practice.',
    documents: [
      {
        id: 'doc-jp-01',
        documentId: 'JP-BSL-2008',
        coalition: 'artemis',
        characteristicFormulation: 'Outer space development and use is to be conducted in accordance with the provisions of treaties and other international agreements concerning outer space use and development, including the Treaty on Principles Governing the Activities of States in the Exploration and Use of Outer Space, including the Moon and Other Celestial Bodies, in accordance with the pacifist principles of the Constitution of Japan.',
        formulationKind: 'verbatim',
        translationType: 'epistemic',
        humanityReferent: 'civilisation',
        infrastructureLink: ['SSA', 'nav', 'comms'],
        authorityMechanism: 'Legislative reframing. The 2008 Act, enacted by the Diet, pairs the pacifist principle (Art. 2) with national security (Arts. 3, 14) and leaves the boundary undefined, so the Government draws it in application.',
        stage1: {
          referent: 'Japanese public and constitutional order — "peace" as a domestically constructed referent',
          referentCategory: 'civilisation',
          audienceTarget: 'Domestic public (constitutional legitimacy) and alliance partners (US-Japan security framework)',
        },
        stage2: {
          justificatoryVocabulary: ['Peaceful Purposes', 'International Peace and Security', 'Pacifism'],
          translationDevice: 'epistemic',
          legitimationNarrative: 'The constitutional constraint is restated in statute alongside a national-security purpose, so the same "pacifist principles" language now sits beside an enabling clause.',
        },
        stage3: {
          interpretiveControl: 'The Government, applying an Act passed by the Diet that leaves "peaceful" undefined',
          discretionMechanism: 'Statutory pairing of the pacifist principle with national security, without a definition of the boundary between them',
          powerEffect: 'Reservation of "peaceful use" interpretation to domestic law enables progressive dual-use capability under constitutional cover.',
        },
      },
      {
        id: 'doc-jp-02',
        documentId: 'JP-NASA-2022',
        coalition: 'artemis',
        characteristicFormulation: 'Japan will provide critical capabilities for the Gateway habitation module and lunar surface mobility, ensuring interoperability with Artemis architecture.',
        formulationKind: 'paraphrase',
        translationType: 'functional',
        humanityReferent: 'scientific_commons',
        infrastructureLink: ['habitats', 'logistics', 'nav'],
        authorityMechanism: 'Contribution-as-alignment. Japan secures operational roles (Gateway module, lunar rover) in exchange for accepting Artemis normative framework.',
        stage1: {
          referent: 'Scientific community as beneficiary of Japanese technological contribution',
          referentCategory: 'scientific_commons',
          audienceTarget: 'Artemis coalition partners and domestic industry benefiting from NASA contracts',
        },
        stage2: {
          justificatoryVocabulary: ['Interoperability', 'Critical Capabilities', 'Partnership'],
          translationDevice: 'functional',
          legitimationNarrative: 'Technical contribution legitimises alignment. Japan demonstrates value through hardware (Gateway module, rover) rather than through normative claims.',
        },
        stage3: {
          interpretiveControl: 'NASA retains architectural authority; Japan operates within US-defined technical standards',
          discretionMechanism: 'Contribution-in-kind model: Japan provides hardware, accepts Artemis norms, and gains operational access',
          powerEffect: 'Secures seat at the operational table while deferring normative authority to the US. Functional participation without normative co-authorship.',
        },
      },
    ],
  },
  {
    id: 'india',
    name: 'India',
    code: 'IN',
    // Signed the Artemis Accords on 21 June 2023 (27th signatory):
    // https://www.nasa.gov/news-release/nasa-welcomes-india-as-27th-artemis-accords-signatory
    coalition: 'artemis',
    primaryAudience: 'Domestic Industry / Global South',
    legitimationStrategy: 'Centralized gateway authority. Single authorization body (IN-SPACe) controls all space activity, combining "opening up" rhetoric with concentrated permission power.',
    rulesDensity: 6,
    universalistClaim: '"Democratizing access to space" — framed through market liberalization',
    specificAuthority: 'IN-SPACe holds exclusive authorization power over all commercial and international space activity by Indian entities.',
    documents: [
      {
        id: 'doc-in-01',
        documentId: 'IN-ISP-2023',
        coalition: 'artemis',
        characteristicFormulation: '“Authorisation” shall mean the permission granted by IN-SPACe to any entity working in the Space sector;',
        formulationKind: 'verbatim',
        translationType: 'normative',
        humanityReferent: 'future_generations',
        infrastructureLink: ['comms', 'nav', 'ISRU'],
        authorityMechanism: 'Centralized authorization creates single point of interpretive control. "Opening the sector" paradoxically concentrates authority.',
        stage1: {
          referent: 'Indian domestic industry and the "New Space" ecosystem as agents of national development',
          referentCategory: 'future_generations',
          audienceTarget: 'Domestic commercial actors, startups, and international partners seeking access to Indian launch and satellite capabilities',
        },
        stage2: {
          justificatoryVocabulary: ['Development', 'Commercial Opening', 'Authorization', 'National Capability'],
          translationDevice: 'normative',
          legitimationNarrative: '"Democratizing access to space" through centralized authorization. The normative claim of openness is delivered via a single gateway that concentrates all permission power.',
        },
        stage3: {
          interpretiveControl: 'IN-SPACe, as the single-window authorising agency, subject to Government directives (Indian Space Policy 2023, Section 5)',
          discretionMechanism: 'Single-gateway authorization: all commercial and international space activity by Indian entities requires IN-SPACe approval, with undefined selection criteria',
          powerEffect: 'Market liberalization rhetoric concentrates authority. "Opening up" creates a gatekeeper with unchecked discretion over who participates.',
        },
      },
    ],
  },
  {
    id: 'luxembourg',
    name: 'Luxembourg',
    code: 'LU',
    coalition: 'artemis',
    primaryAudience: 'Commercial Actors / Space Industry',
    legitimationStrategy: 'Legislative fait accompli. Article 1 declares space resources "susceptibles d’appropriation" (capable of being appropriated), using the very term OST Article II applies to celestial bodies.',
    rulesDensity: 4,
    universalistClaim: '"Resources benefit from legal certainty" — framed through rule of law',
    specificAuthority: 'Unilaterally declares space resources appropriable and licenses extraction (Art. 2) without multilateral consent.',
    documents: [
      {
        id: 'doc-lu-01',
        documentId: 'LUX-SRL-2017',
        coalition: 'artemis',
        characteristicFormulation: 'Les ressources de l’espace sont susceptibles d’appropriation.',
        formulationKind: 'verbatim',
        translationType: 'epistemic',
        humanityReferent: 'future_generations',
        infrastructureLink: ['ISRU', 'logistics'],
        authorityMechanism: 'Affirmative declaration: resources are appropriable, while "space resources" and their boundary with celestial bodies are left undefined. Exploits the definitional gap in OST Article II.',
        stage1: {
          referent: 'Commercial space actors and future resource extractors as agents of economic progress',
          referentCategory: 'future_generations',
          audienceTarget: 'Space mining industry, venture capital, and states considering similar legislation',
        },
        stage2: {
          justificatoryVocabulary: ['Legal Certainty', 'Ownership', 'Rule of Law', 'Investment Security'],
          translationDevice: 'epistemic',
          legitimationNarrative: 'Epistemic authority through legal expertise. Luxembourg treats resources as appropriable while celestial bodies are not, drawing that boundary through domestic statute and creating an interpretive precedent.',
        },
        stage3: {
          interpretiveControl: 'Luxembourg legislature and licensing ministers decide what counts as an appropriable space resource',
          discretionMechanism: 'Affirmative declaration with an undefined object: "space resources" is not defined, so the reach of the appropriation rule is set by mission authorisations',
          powerEffect: 'Creates a legal precedent that other states can adopt. Shifts the burden of proof: extraction is assumed legal unless proven to be "appropriation."',
        },
      },
    ],
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    code: 'AE',
    coalition: 'artemis',
    primaryAudience: 'International Community / Domestic Diversification',
    legitimationStrategy: 'Data sharing commitment with national security carve-out. Transparency as legitimation device with a built-in escape clause.',
    rulesDensity: 5,
    universalistClaim: '"Transparency and international cooperation" — framed through data sharing',
    specificAuthority: '"National interest" override allows selective opacity despite formal transparency commitments.',
    documents: [
      {
        id: 'doc-ae-01',
        documentId: 'UAE-LAW-2019',
        coalition: 'artemis',
        characteristicFormulation: 'The Agency may restrict access to data or information if disclosure would affect the national interest or security of the State.',
        formulationKind: 'paraphrase',
        translationType: 'functional',
        humanityReferent: 'scientific_commons',
        infrastructureLink: ['comms', 'SSA'],
        authorityMechanism: 'Transparency-with-carve-out. The "national interest" exception is self-judging and undefined, creating a black-box override.',
        stage1: {
          referent: 'International scientific community as beneficiary of UAE data-sharing commitments',
          referentCategory: 'scientific_commons',
          audienceTarget: 'International community and Artemis partners; domestic diversification stakeholders',
        },
        stage2: {
          justificatoryVocabulary: ['Transparency', 'Data Sharing', 'International Cooperation', 'National Interest'],
          translationDevice: 'functional',
          legitimationNarrative: 'Functional transparency commitment as legitimation device — the UAE positions itself as a responsible data-sharing actor, with a built-in escape clause for "national interest."',
        },
        stage3: {
          interpretiveControl: 'UAE Space Agency defines what constitutes "national interest" triggering the data restriction clause',
          discretionMechanism: 'Self-judging carve-out: "national interest" is undefined and invoked at the Agency\'s sole discretion',
          powerEffect: 'Broad data-sharing exemption creates a black-box override. Transparency commitments yield to an undefined national security concept.',
        },
      },
    ],
  },
  {
    id: 'esa',
    name: 'ESA / European Union',
    code: 'EU',
    coalition: 'artemis',
    primaryAudience: 'Multilateral Institutions / Member States',
    legitimationStrategy: 'Dual-track legitimation: participates operationally in Artemis while maintaining rhetorical commitment to COPUOS multilateralism.',
    rulesDensity: 6,
    universalistClaim: '"Multilateral rules-based order" — framed through institutional process',
    specificAuthority: 'Defers authority to "future multilateral norms" while locking in operational participation now — the norms will have to accommodate the facts.',
    documents: [
      {
        id: 'doc-esa-01',
        documentId: 'ESA-STMT-2023',
        coalition: 'artemis',
        characteristicFormulation: 'they are only open to signature by individual states, which is why ESA is not a signatory nor is it involved in the process',
        formulationKind: 'verbatim',
        translationType: 'normative',
        humanityReferent: 'scientific_commons',
        infrastructureLink: ['nav', 'comms', 'habitats'],
        authorityMechanism: 'Procedural legitimation through institutional hedging. Endorses Artemis principles while reserving multilateral escape route.',
        stage1: {
          referent: 'Multilateral institutional order — "rules-based" governance as the referent for European space identity',
          referentCategory: 'scientific_commons',
          audienceTarget: 'ESA member states, EU institutions, and COPUOS multilateral process participants',
        },
        stage2: {
          justificatoryVocabulary: ['Multilateralism', 'UN Framework', 'International Norms', 'Rules-Based Order'],
          translationDevice: 'normative',
          legitimationNarrative: 'Normative commitment to multilateralism as a "safety standard." ESA frames its Artemis participation as compatible with COPUOS, creating dual-track legitimation that hedges both ways.',
        },
        stage3: {
          interpretiveControl: 'ESA member states collectively defer to "future multilateral norms" while operationally participating in Artemis now',
          discretionMechanism: 'Institutional hedging: endorses Artemis principles without formal signature, preserving escape route to COPUOS if political winds shift',
          powerEffect: 'Operational facts precede multilateral norms. By the time COPUOS develops rules, Artemis architecture is already built. The norms must accommodate the facts, not the other way around.',
        },
      },
    ],
  },
];

export const COUNTRIES: Country[] = COUNTRY_ENTRIES.map((c) => ({
  ...c,
  documents: c.documents.map((d) => {
    const doc = getDocument(d.documentId);
    return { ...d, title: doc.title, year: doc.year };
  }),
}));
