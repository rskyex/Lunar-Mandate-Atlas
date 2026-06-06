# LGAT — Lunar Governance Authority Tracker

A forensic analysis of how universalist language allocates institutional authority in cislunar space. Built on the **Beetham-Koyanagi Legitimation Triad** framework.

## Overview

LGAT examines the "Double Movement" in lunar governance: how universal claims ("for all humanity," "open to all countries") simultaneously produce concentrated institutional authority. The platform tracks 13 governance documents from 8 major space-faring nations and coalitions, mapping the mechanisms through which ambiguous language becomes operational power.

### The Beetham-Koyanagi Legitimation Triad

| Stage | Question | Categories |
|-------|----------|------------|
| **1. Humanity Construction** | Who does the document claim to represent? | Scientific commons, future generations, global south, civilization |
| **2. Legitimacy Production** | What language legitimizes action? | Functional, normative, or epistemic translation devices |
| **3. Authority Architecture** | Who ultimately defines ambiguous terms? | Interpretive control, discretion mechanisms, power effects |

## Views

### Authority Map

Visualizes the Double Movement across 8 countries grouped by coalition. Each country card shows the universal claim vs. specific authority allocation, rules density score (1–10), legitimation strategy, and expandable governance documents with full 3-stage analysis.

### Discretion Registry

Searchable, filterable table of 17 power-deferral points where ambiguous language concentrates authority. Discretion types include open-ended qualifiers, procedural deferrals, definitional gaps, interpretive monopolies, and carve-outs. Each entry shows the characteristic formulation, holder, and authority implications.

### Infrastructure Nexus

Maps 7 infrastructure categories (communications, navigation, power, ISRU, habitats, SSA, logistics) to their governance functions. Demonstrates how physical infrastructure creates dependency, which becomes standards, which becomes authority.

### Coalition Tracker

Dual-axis timeline of 14 events (1967–2026) tracking Artemis (43+ signatories) vs. ILRS (12+ partners) expansion. Includes side-by-side strategy comparison and confidence-level indicators for each event.

## Countries Tracked

| Coalition | Countries | Legitimation Strategy |
|-----------|-----------|-----------------------|
| **Artemis** | USA, Japan, Luxembourg, UAE, ESA | Functional — safety, interoperability, transparency |
| **ILRS** | China, Russia | Normative — equality, inclusivity, mutual benefit |
| **Dual-aligned** | India | Hybrid — sovereign flexibility with selective engagement |

## Data

- **8** countries/entities tracked
- **13** governance documents analyzed (2008–2024)
- **17** discretion points identified
- **7** infrastructure-governance nexus links
- **14** coalition timeline events

## Visual Design

Dark-mode interface with a lunar atmosphere theme:

- Star field backdrop with cyan and amber accent stars
- Lunar terrain gradient and topographic grid overlay
- Moon crescent glow and crater surface textures
- Orbit pulse animation on the hero section
- Semantic color coding — cyan (Artemis/functional), amber (ILRS/normative), red (authority/power)
- Typography: Inter (body) + IBM Plex Mono (data labels, IDs, tags)

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS v4
- Vite 8

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## Faultline Research Platform

LGAT is part of the [Faultline](https://faultline-nqmm.vercel.app/) research ecosystem, alongside:

- [Global Nuclear Infrastructure Atlas](https://globalnuclearinfrastructureatlas.vercel.app/)
- [Orbital Risk Tracker](https://orbitalrisktracker.vercel.app/)
- [Cyber Escalation Atlas](https://cyber-escalation-atlas.vercel.app/)
- [Space Mandate Atlas](https://space-mandate-atlas.vercel.app/)

## Author

[Risa Koyanagi](https://risakoyanagi.com) — Cambridge Future Scholar. Research on space governance, nuclear risk, emerging technology, legitimation theory, and dual-use systems.
