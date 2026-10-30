// ═══════════════════════════════════════════════════════════════════
// Codebook for the discretion point registry (dataset 1.3.0)
// The registry view renders this text; `npm run check:docs` checks that every
// point carries the fields it needs. Coding is the author's.
// ═══════════════════════════════════════════════════════════════════

import type { DiscretionType } from './discretionPoints';

export const UNIT_DEFINITION =
  'A discretion point is a clause in an adopted instrument where applying an operative term needs a judgement the text does not settle, together with the actor the text leaves to make that judgement.';

export interface TypeRule {
  type: DiscretionType;
  definition: string;
  test: string;
  /** Ids of verified, counted points that illustrate the type; empty when none qualifies. */
  anchors: string[];
}

/** Apply the tests in this order; the first "yes" decides the type. */
export const TYPE_RULES: TypeRule[] = [
  {
    type: 'carve_out',
    definition: 'An exception that switches off an obligation stated elsewhere, triggered by a condition the beneficiary judges (for example national interest or security).',
    test: 'Does the clause suspend an otherwise applicable obligation?',
    anchors: [],
  },
  {
    type: 'interpretive_monopoly',
    definition: 'One named actor decides the meaning or application of a term, and others outside its own jurisdiction are bound by that decision.',
    test: 'Is a single named actor given the decision, and are other states or partners bound by it?',
    anchors: [],
  },
  {
    type: 'procedural_deferral',
    definition: 'The substance is left to a later procedure, body or phase (notification, consultation, future standards, licensing, programme phases) instead of being settled in the text.',
    test: 'Does the clause say the matter will be settled later rather than settling it?',
    anchors: ['dp-003'],
  },
  {
    type: 'open_ended_qualifier',
    definition: 'An evaluative standard ("due regard", "as appropriate", "harmful") that modulates an obligation and is judged by the obligated party.',
    test: 'Is the term a standard qualifying a duty, applied by the party that owes it?',
    anchors: ['dp-001', 'dp-013'],
  },
  {
    type: 'definitional_gap',
    definition: 'An operative term on which rights or duties turn, left undefined in the instrument.',
    test: 'Do rights or duties turn on the term, and is it undefined in the text and its definitions?',
    anchors: ['dp-008'],
  },
];

export const EMPTY_TYPE_NOTE =
  'Under these tests no verified point is an interpretive monopoly or a carve-out. National licensing over a state’s own nationals is ordinary jurisdiction (Outer Space Treaty, Art. VI), so it is coded as procedural deferral. The empty categories are reported, not removed: authority in this registry accrues through deferral and undefined terms rather than explicit monopolies.';

export const HOLDER_RULE =
  'The holder is the actor who makes the judgement in the first instance under the text: the named actor where the text names one; "Each [party] (self-judging)" where each party judges its own activities. Influence over drafting or practice (for example a drafting party) is described in the implication, not recorded as the holder.';

export const COALITION_RULE =
  'The coalition tag follows the instrument, not the state: ost for the Outer Space Treaty; artemis for the Artemis Accords and Artemis programme documents; ilrs for ILRS documents; national for statutes and national policy, whatever coalition the state has joined.';

export const SELECTION_RULE =
  'A point is counted when (1) its instrument is adopted and on the public record — a treaty in force, a signed political commitment, an enacted statute, an official policy or an official programme statement — and its text was read; and (2) it meets the unit definition and passes one type test. Drafts and unreadable texts are shown with the reason but not counted. The points were selected by the author from the documents in the registry; the registry is not an exhaustive census of discretionary terms in those documents.';
