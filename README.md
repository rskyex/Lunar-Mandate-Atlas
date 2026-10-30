# LGT — Lunar Governance Tracker

A forensic analysis of how universalist language allocates institutional authority in cislunar space. It uses a three-stage coding scheme adapted from David Beetham's dimensions of legitimacy (*The Legitimation of Power*, 1991): the author's framework.

## Overview

LGT examines the "Double Movement" in lunar governance. Working proposition: documents that invoke a broader universal subject ("all humankind," "all interested countries") tend to leave more discretion with the actor invoking it. The registry illustrates this pattern; it does not measure breadth of claim or amount of authority, and its points were not selected to test it. The platform analyses 11 governance documents from 8 space-faring states and agencies (15 documents in the registry, including the Outer Space Treaty and the instruments cited by discretion points), mapping the mechanisms through which ambiguous language becomes operational power.

### Coding scheme (author's framework, adapted from Beetham)

Beetham's dimensions are conformity to rules, justifiability of the rules by shared beliefs, and expressed consent. The stages below are adapted from them, not identical to them.

| Stage | Question | Categories |
|-------|----------|------------|
| **1. Humanity Construction** | Who does the document claim to represent? | Scientific commons, future generations, global south, civilization |
| **2. Legitimacy Production** | What language legitimizes action? | Functional, normative, or epistemic translation devices |
| **3. Authority Architecture** | Who ultimately defines ambiguous terms? | Interpretive control, discretion mechanisms, power effects |

## Views

### Authority Map

Visualizes the Double Movement across 8 countries grouped by coalition. Each country card shows the universal claim vs. specific authority allocation, rules specificity (1–10, author judgement with no rubric; not a measure of binding provisions), legitimation strategy, and expandable governance documents with full 3-stage analysis.

### Discretion Registry

Searchable, filterable table of 16 power-deferral points where ambiguous language concentrates authority. Discretion types include open-ended qualifiers, procedural deferrals, definitional gaps, interpretive monopolies, and carve-outs. Each entry shows the characteristic formulation (marked verbatim or paraphrase, with source link and pinpoint), holder, and authority implications. Rows are keyboard-operable buttons. A codebook on the page gives each type's definition, decision test and anchor example, the holder and coalition rules, and the selection rule.

### Infrastructure Nexus

Maps 7 infrastructure categories (communications, navigation, power, ISRU, habitats, SSA, logistics) to their governance functions. Demonstrates how physical infrastructure creates dependency, which becomes standards, which becomes authority.

### Coalition Tracker

Dual-axis timeline of 15 events (1967–2026) tracking Artemis (78 signatories as of 28 October 2026, per NASA) vs. ILRS (cooperation documents with "more than ten countries and international organisations" as of June 2024, per CNSA; no official country-only count) expansion. Each event links its source. Includes side-by-side strategy comparison and confidence-level indicators for each event.

## Countries Tracked

| Coalition | Countries | Legitimation Strategy |
|-----------|-----------|-----------------------|
| **Artemis** | USA, Japan, Luxembourg, UAE, India (signed 21 June 2023), ESA member states (ESA itself is not a signatory) | Functional — safety, interoperability, transparency |
| **ILRS** | China, Russia | Normative — equality, inclusivity, mutual benefit |

## Data

- **8** countries/entities tracked
- **11** governance documents analysed in the country profiles (2008–2026)
- **15** documents in the documents registry
- **16** discretion points shown, **14** counted under the selection rule
- **7** infrastructure-governance nexus links
- **15** coalition timeline events

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
| `npm run build` | Check data and README counts, type-check and build for production |
| `npm run check:data` | Check document ids, quote sourcing (verbatim needs a checked source) and README counts |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## Faultline Research Platform

LGT is part of the [Faultline](https://faultline-nqmm.vercel.app/) research ecosystem, alongside:

- [Global Nuclear Infrastructure Atlas](https://globalnuclearinfrastructureatlas.vercel.app/)
- [Orbital Risk Tracker](https://orbitalrisktracker.vercel.app/)
- [Cyber Escalation Atlas](https://cyber-escalation-atlas.vercel.app/)
- [Space Mandate Atlas](https://space-mandate-atlas.vercel.app/)

## Author

[Risa Koyanagi](https://risakoyanagi.com) — Cambridge Future Scholar. Research on space governance, nuclear risk, emerging technology, legitimation theory, and dual-use systems.
