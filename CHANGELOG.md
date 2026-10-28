# Changelog

## Dataset 1.1.0 — 2026-10-28

Data corrections (checked against the signed Artemis Accords of 13 October 2020):

- dp-002 Harmful Interference: Section 11 → 11.4, with the verbatim 11.4 sentence (the previous
  quote was Section 9 heritage wording).
- dp-003 Safety Zone: verbatim 11.7 sentence.
- dp-013 As Appropriate: Section 5 (Registration) → Section 1 (Purpose and Scope), second
  paragraph, quoted verbatim; the previous quote does not appear in the text.
- US country profile (Artemis Accords): quote replaced with the verbatim Section 1 sentence.
- New documents registry (`src/data/documents.ts`): one id, canonical title, aliases and URL per
  document. Discretion points and country profiles reference it by id; combined ids are arrays.
  Downloads gain `documentIds` and `documentUrls` columns.
- `npm run check:docs` (alias `check:data`, run before each build) fails on unknown document ids.
