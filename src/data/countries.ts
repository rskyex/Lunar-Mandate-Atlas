// ═══════════════════════════════════════════════════════════════════
// D. Global Scope — Tier 1 Countries
// Each entry maps the "Double Movement": universal claim → specific authority
// ═══════════════════════════════════════════════════════════════════

import type { TranslationDeviceType, HumanityReferent, InfrastructureType } from './constants';

export type Coalition = 'artemis' | 'ilrs' | 'dual' | 'independent';

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
        translationType: 'normative',
        humanityReferent: 'civilisation',
        infrastructureLink: ['SSA', 'nav', 'comms'],
        authorityMechanism: 'Executive reinterpretation without amendment. The 2008 law shifted "peaceful" from non-military to non-aggressive, concentrating definitional power in the Cabinet.',
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
        translationType: 'functional',
        humanityReferent: 'future_generations',
        infrastructureLink: ['comms', 'nav', 'ISRU'],
        authorityMechanism: 'Centralized authorization creates single point of interpretive control. "Opening the sector" paradoxically concentrates authority.',
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
        translationType: 'functional',
        humanityReferent: 'future_generations',
        infrastructureLink: ['ISRU', 'logistics'],
        authorityMechanism: 'Negative definition strategy: defines what appropriation is NOT to permit what it IS. Exploits the definitional gap in OST Article II.',
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
      },
    ],
  },
];
