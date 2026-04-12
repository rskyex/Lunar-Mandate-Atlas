// ═══════════════════════════════════════════════════════════════════
// D. Global Scope — Tier 1 Countries
// Each entry maps the "Double Movement": universal claim → specific authority
// ═══════════════════════════════════════════════════════════════════

import type { TranslationDeviceType, HumanityReferent, InfrastructureType } from './constants';

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

export interface GovernanceDocument {
  id: string;
  title: string;
  year: number;
  coalition: Coalition;
  characteristicFormulation: string;
  translationType: TranslationDeviceType;
  humanityReferent: HumanityReferent;
  infrastructureLink: InfrastructureType[];
  authorityMechanism: string;
  // Stage 1-3 Analysis
  stage1: Stage1_HumanityConstruction;
  stage2: Stage2_LegitimacyProduction;
  stage3: Stage3_AuthorityArchitecture;
}

export interface Country {
  id: string;
  name: string;
  code: string;
  coalition: Coalition;
  primaryAudience: string;
  legitimationStrategy: string;
  documents: GovernanceDocument[];
  rulesDensity: number; // 1-10 scale: density of binding provisions
  universalistClaim: string;
  specificAuthority: string;
}

export const COUNTRIES: Country[] = [
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
        title: 'Artemis Accords',
        year: 2020,
        coalition: 'artemis',
        characteristicFormulation: '"The Signatories... affirm that cooperative activities should be conducted in accordance with the principles set forth in the Outer Space Treaty."',
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
        title: 'OSTP Coordinated Lunar Time (LTC) Framework',
        year: 2024,
        coalition: 'artemis',
        characteristicFormulation: '"NASA shall establish a unified lunar time standard... to ensure interoperability, safety, and precision of operations."',
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
          discretionMechanism: 'Presidential directive creates executive authority over a technical standard that has no multilateral governance process',
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
        title: 'ILRS Guide for Partnership',
        year: 2023,
        coalition: 'ilrs',
        characteristicFormulation: '"ILRS will be open to all interested countries and international partners, dedicated to the peaceful use and appropriate utilization of lunar resources for the benefit of all humankind."',
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
          interpretiveControl: 'CNSA defines "appropriate utilization," station architecture, phase scope, and partner onboarding criteria',
          discretionMechanism: 'Partners join phases already designed by CNSA. "Consultation" without co-design rights. Architecture determines what partners can and cannot do.',
          powerEffect: 'Normative openness coexists with architectural control. The invitation is universal; the blueprint is not.',
        },
      },
      {
        id: 'doc-cn-02',
        title: 'CNSA Lunar Exploration Phase 4',
        year: 2024,
        coalition: 'ilrs',
        characteristicFormulation: '"Phase 4 will establish the basic model for the ILRS, conducting scientific exploration and technological verification."',
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
        title: 'Roscosmos-CNSA MoU on ILRS',
        year: 2021,
        coalition: 'ilrs',
        characteristicFormulation: '"The Parties shall cooperate on the basis of equality and mutual benefit in the creation of the ILRS."',
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
    legitimationStrategy: 'Reinterpretation of constitutional constraints. "Peaceful purposes" redefined from "non-military" to "non-aggressive," enabling dual-use space capability.',
    rulesDensity: 7,
    universalistClaim: '"Peaceful purposes and international cooperation" — framed through constitutional commitment',
    specificAuthority: 'Cabinet Office holds interpretive monopoly over what "peaceful" means in practice, enabling progressive militarization.',
    documents: [
      {
        id: 'doc-jp-01',
        title: 'Basic Space Law',
        year: 2008,
        coalition: 'artemis',
        characteristicFormulation: '"Space development shall be carried out... in accordance with the pacifism of the Constitution... for the purpose of contributing to international peace and security."',
        translationType: 'epistemic',
        humanityReferent: 'civilisation',
        infrastructureLink: ['SSA', 'nav', 'comms'],
        authorityMechanism: 'Executive reinterpretation without amendment. The 2008 law shifted "peaceful" from non-military to non-aggressive, concentrating definitional power in the Cabinet.',
        stage1: {
          referent: 'Japanese public and constitutional order — "peace" as a domestically constructed referent',
          referentCategory: 'civilisation',
          audienceTarget: 'Domestic public (constitutional legitimacy) and alliance partners (US-Japan security framework)',
        },
        stage2: {
          justificatoryVocabulary: ['Peaceful Purposes', 'International Peace and Security', 'Pacifism'],
          translationDevice: 'epistemic',
          legitimationNarrative: 'Epistemic reinterpretation: "non-military" redefined as "non-aggressive" through expert legal opinion. Constitutional constraint becomes enabling clause through interpretive shift.',
        },
        stage3: {
          interpretiveControl: 'Cabinet Office holds exclusive authority to define what "peaceful" means in the space context',
          discretionMechanism: 'Executive reinterpretation without legislative amendment — a semantic shift that bypasses parliamentary process',
          powerEffect: 'Reservation of "peaceful use" interpretation to domestic law enables progressive dual-use capability under constitutional cover.',
        },
      },
      {
        id: 'doc-jp-02',
        title: 'JAXA-NASA Artemis MoU (Gateway / HLS)',
        year: 2022,
        coalition: 'artemis',
        characteristicFormulation: '"Japan will provide critical capabilities for the Gateway habitation module and lunar surface mobility, ensuring interoperability with Artemis architecture."',
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
    coalition: 'dual',
    primaryAudience: 'Domestic Industry / Global South',
    legitimationStrategy: 'Centralized gateway authority. Single authorization body (IN-SPACe) controls all space activity, combining "opening up" rhetoric with concentrated permission power.',
    rulesDensity: 6,
    universalistClaim: '"Democratizing access to space" — framed through market liberalization',
    specificAuthority: 'IN-SPACe holds exclusive authorization power over all commercial and international space activity by Indian entities.',
    documents: [
      {
        id: 'doc-in-01',
        title: 'Space Activities Bill',
        year: 2023,
        coalition: 'dual',
        characteristicFormulation: '"No person shall undertake any space activity unless authorized by the Central Government through the designated body."',
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
          interpretiveControl: 'IN-SPACe (Central Government body) holds exclusive authority to define "authorized entity" criteria',
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
    legitimationStrategy: 'Legislative fait accompli. Unilateral definition of resource rights through negative framing ("not appropriation") that exploits OST silence.',
    rulesDensity: 4,
    universalistClaim: '"Resources benefit from legal certainty" — framed through rule of law',
    specificAuthority: 'Unilaterally defines what "appropriation" is NOT, permitting commercial extraction without multilateral consent.',
    documents: [
      {
        id: 'doc-lu-01',
        title: 'Space Resources Law',
        year: 2017,
        coalition: 'artemis',
        characteristicFormulation: '"Space resources are capable of being owned." — Distinct from sovereignty over celestial bodies.',
        translationType: 'epistemic',
        humanityReferent: 'future_generations',
        infrastructureLink: ['ISRU', 'logistics'],
        authorityMechanism: 'Negative definition strategy: defines what appropriation is NOT to permit what it IS. Exploits the definitional gap in OST Article II.',
        stage1: {
          referent: 'Commercial space actors and future resource extractors as agents of economic progress',
          referentCategory: 'future_generations',
          audienceTarget: 'Space mining industry, venture capital, and states considering similar legislation',
        },
        stage2: {
          justificatoryVocabulary: ['Legal Certainty', 'Ownership', 'Rule of Law', 'Investment Security'],
          translationDevice: 'epistemic',
          legitimationNarrative: 'Epistemic authority through legal expertise. Luxembourg defines the boundary between "appropriation" (prohibited) and "ownership" (permitted) through domestic statute, creating an interpretive precedent.',
        },
        stage3: {
          interpretiveControl: 'Luxembourg Government unilaterally defines the line between prohibited "appropriation" and permitted "ownership"',
          discretionMechanism: 'Negative definition: defines what appropriation is NOT rather than what it IS, claiming the remainder as permitted by default',
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
        title: 'Federal Law No. 12 on Space Sector Regulation',
        year: 2019,
        coalition: 'artemis',
        characteristicFormulation: '"The Agency may... restrict access to data or information if disclosure would affect the national interest or security of the State."',
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
        title: 'ESA Statement on Artemis Accords Principles',
        year: 2023,
        coalition: 'artemis',
        characteristicFormulation: '"ESA welcomes the principles... and will continue to work within the UN framework for the development of international norms."',
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
