// ═══════════════════════════════════════════════════════════════════
// LGAT — Lunar Governance Authority Tracker
// Data Engine & Coding Categories
// Based on Beetham-Koyanagi Legitimation Triad (Cambridge 2026)
// ═══════════════════════════════════════════════════════════════════

// ─── A. Infrastructure Types ─────────────────────────────────────
export type InfrastructureType =
  | 'comms'
  | 'nav'
  | 'power'
  | 'ISRU'
  | 'habitats'
  | 'SSA'
  | 'logistics';

export const INFRASTRUCTURE_TYPES: Record<InfrastructureType, { label: string; description: string }> = {
  comms: { label: 'Communications', description: 'Relay networks, deep-space links, lunar surface comms' },
  nav: { label: 'Navigation', description: 'Lunar GPS, positioning reference frames, time standards' },
  power: { label: 'Power Systems', description: 'Nuclear fission, solar arrays, power distribution grids' },
  ISRU: { label: 'In-Situ Resource Utilization', description: 'Water ice extraction, regolith processing, oxygen production' },
  habitats: { label: 'Habitats', description: 'Surface bases, pressurized modules, radiation shielding' },
  SSA: { label: 'Space Situational Awareness', description: 'Debris tracking, collision avoidance, orbital monitoring' },
  logistics: { label: 'Logistics', description: 'Supply chains, landing pads, surface transportation' },
};

// ─── B. Legitimation Framework ───────────────────────────────────

// B.1 Humanity Construction — Referent Categories
export type HumanityReferent =
  | 'scientific_commons'
  | 'future_generations'
  | 'global_south'
  | 'civilisation';

export const HUMANITY_REFERENTS: Record<HumanityReferent, { label: string; description: string }> = {
  scientific_commons: { label: 'Scientific Commons', description: 'Knowledge as shared heritage; open data mandates' },
  future_generations: { label: 'Future Generations', description: 'Intergenerational equity; sustainability framing' },
  global_south: { label: 'Global South', description: 'Developing states as beneficiaries of space activity' },
  civilisation: { label: 'Civilisation', description: 'Species-level survival; multi-planetary imperative' },
};

// B.2 Humanity Construction — Target Audience
export type LegitimationAudience =
  | 'implementers_partners'
  | 'global_south_developing'
  | 'domestic_public'
  | 'scientific_community';

export const LEGITIMATION_AUDIENCES: Record<LegitimationAudience, { label: string; coalition: string }> = {
  implementers_partners: { label: 'Implementers / Partners', coalition: 'Artemis' },
  global_south_developing: { label: 'Global South / Developing States', coalition: 'ILRS' },
  domestic_public: { label: 'Domestic Public', coalition: 'National' },
  scientific_community: { label: 'Scientific Community', coalition: 'Both' },
};

// B.3 Translation Devices
export type TranslationDeviceType = 'functional' | 'normative' | 'epistemic';

export const TRANSLATION_DEVICE_TYPES: Record<TranslationDeviceType, { label: string; description: string; color: string }> = {
  functional: { label: 'Functional', description: 'Capability-based: safety, interoperability, standards', color: 'cyan' },
  normative: { label: 'Normative', description: 'Values-based: equality, inclusivity, ethics', color: 'amber' },
  epistemic: { label: 'Epistemic', description: 'Expertise-based: scientific authority, technical knowledge', color: 'cyan' },
};

export type TranslationVocabulary =
  | 'safety_sustainability'
  | 'equality_inclusivity'
  | 'sovereignty'
  | 'interoperability'
  | 'transparency'
  | 'peaceful_purposes';

export const TRANSLATION_VOCABULARIES: Record<TranslationVocabulary, { label: string; type: TranslationDeviceType }> = {
  safety_sustainability: { label: 'Safety / Sustainability', type: 'functional' },
  equality_inclusivity: { label: 'Equality / Inclusivity', type: 'normative' },
  sovereignty: { label: 'Sovereignty', type: 'normative' },
  interoperability: { label: 'Interoperability', type: 'functional' },
  transparency: { label: 'Transparency', type: 'functional' },
  peaceful_purposes: { label: 'Peaceful Purposes', type: 'normative' },
};
