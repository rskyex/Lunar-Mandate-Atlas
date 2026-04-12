// ═══════════════════════════════════════════════════════════════════
// E. Infrastructure-Governance Nexus
// How infrastructure creates "Functional Legitimacy"
// Infrastructure as Translation Device: operational → normative power
// ═══════════════════════════════════════════════════════════════════

import type { InfrastructureType } from './constants';
import type { Coalition } from './countries';

export interface InfraGovernanceLink {
  id: string;
  infrastructure: InfrastructureType;
  controller: string;
  coalition: Coalition;
  governanceFunction: string;
  translationMechanism: string;
  dependencyCreated: string;
  example: string;
}

export const INFRA_GOVERNANCE_LINKS: InfraGovernanceLink[] = [
  {
    id: 'igl-001',
    infrastructure: 'nav',
    controller: 'NASA / OSTP',
    coalition: 'artemis',
    governanceFunction: 'Temporal Authority',
    translationMechanism: 'Defining Coordinated Lunar Time (LTC) creates a reference frame all cislunar actors must synchronize to. Operational necessity becomes normative infrastructure.',
    dependencyCreated: 'Any actor conducting precision operations (landing, docking, resource extraction) must adopt the US-defined time standard.',
    example: 'OSTP Lunar Time Standard directive (2024)',
  },
  {
    id: 'igl-002',
    infrastructure: 'comms',
    controller: 'NASA (LunaNet)',
    coalition: 'artemis',
    governanceFunction: 'Information Architecture',
    translationMechanism: 'Relay network architecture determines who can communicate, when, and through what protocols. Network access = operational permission.',
    dependencyCreated: 'Actors without independent relay capability must route through LunaNet, accepting its protocols and potentially its monitoring.',
    example: 'LunaNet interoperability standards',
  },
  {
    id: 'igl-003',
    infrastructure: 'power',
    controller: 'CNSA (ILRS Phase 4)',
    coalition: 'ilrs',
    governanceFunction: 'Resource Distribution Authority',
    translationMechanism: 'Nuclear fission power plant at lunar south pole creates dependency. Power sharing agreements become governance instruments.',
    dependencyCreated: 'Partners relying on shared power infrastructure accept operational rules set by the power provider.',
    example: 'ILRS nuclear power plant for south pole base',
  },
  {
    id: 'igl-004',
    infrastructure: 'ISRU',
    controller: 'Multiple (contested)',
    coalition: 'artemis',
    governanceFunction: 'Resource Rights Precedent',
    translationMechanism: 'First extraction creates operational precedent. "Safety zones" around extraction sites convert resource use into spatial authority.',
    dependencyCreated: 'Subsequent actors must demonstrate they will not cause "harmful interference" to established operations.',
    example: 'Artemis Accords Section 11 + Luxembourg Space Resources Law',
  },
  {
    id: 'igl-005',
    infrastructure: 'SSA',
    controller: 'US Space Command / 18th SDS',
    coalition: 'artemis',
    governanceFunction: 'Surveillance & Awareness Monopoly',
    translationMechanism: 'Comprehensive tracking capability creates information asymmetry. The actor who "sees" the space environment defines what constitutes risk.',
    dependencyCreated: 'States without independent SSA rely on US data for collision avoidance, accepting US threat assessments.',
    example: 'Space fence radar + cislunar domain awareness expansion',
  },
  {
    id: 'igl-006',
    infrastructure: 'habitats',
    controller: 'CNSA / Roscosmos (ILRS)',
    coalition: 'ilrs',
    governanceFunction: 'Presence as Precedent',
    translationMechanism: 'Permanent presence converts occupancy into operational authority. Habitat location choices pre-empt future resource access by establishing "prior use."',
    dependencyCreated: 'Later arrivals must coordinate with established presence, accepting de facto spatial claims.',
    example: 'ILRS south pole base site selection',
  },
  {
    id: 'igl-007',
    infrastructure: 'logistics',
    controller: 'NASA (Gateway + HLS)',
    coalition: 'artemis',
    governanceFunction: 'Access Control',
    translationMechanism: 'Controlling the logistics chain (orbital station, lander, surface transport) determines who can reach the lunar surface and when.',
    dependencyCreated: 'Partners without independent landing capability must coordinate through NASA logistics architecture.',
    example: 'Lunar Gateway as staging point + HLS contract structure',
  },
];
