# Changelog

## Dataset 1.2.0 — 2026-10-29

Every discretion point now records `sourceUrl`, `pinpoint`, `formulationKind`
(verbatim | paraphrase) and `sourceStatus` (verified | unverified). Quotation marks are added by
the views for verbatim text only. All points were checked against their sources on 2026-10-29.

Quote corrections:

- dp-001 Outer Space Treaty: Article IX quoted verbatim, with the elision marked (the old text
  compressed the sentence). Source: UNOOSA text edition (the former UNOOSA treaty page returns 404).
- dp-003 Safety Zone: adds the second sentence of 11.7, which names the "safety zone".
- dp-004 Co-consultation: the 2021 instrument is a China–Russia intergovernmental MoU whose text is
  not public, so there is no checkable "Article 4". Replaced with CNSA's own summary of 9 March 2021.
- dp-005: "appropriate utilization of lunar resources" does not appear in the ILRS Guide, which has
  no Section 3.2. Replaced with the verbatim Preface sentence; term renamed "All Interested
  International Partners". The Guide is V1.0 of June 2021 (CNSA and Roscosmos), not 2023.
- dp-006 UAE: marked paraphrase and unverified. The 2019 law text could not be read, and the law
  was repealed by Federal Decree-Law No. 46 of 2023 (Art. 39), which has no such provision.
- dp-007 Japan: the Basic Space Act was passed by the Diet; "executive branch without legislative
  amendment" and the Cabinet Office holder are removed. Quotes Article 2 verbatim (official
  translation) and cites Articles 3 and 14 (national security). dp-014 merged into it.
- dp-008 Luxembourg: Article 1 reads "Les ressources de l'espace sont susceptibles
  d'appropriation" (capable of being appropriated), not "capable of being owned". The coding is
  reversed from a negative definition to an affirmative declaration; the term and implication are
  rewritten.
- dp-009 / dp-015 India: no "Space Activities Bill 2023" exists. dp-009 now quotes the Draft Space
  Activities Bill, 2017, s. 6(1); dp-015 quotes the Indian Space Policy 2023 definition of
  "Authorisation" (new registry document IN-ISP-2023). Neither text defines "authorised entity".
- dp-010: the 2024 lunar time instrument is an OSTP memorandum, not a Presidential Directive.
  Quotes Section 2(b) verbatim.
- dp-011 ESA: no ESA statement "welcoming" the Accords was found. Replaced with ESA's FAQ
  sentence on why ESA is not a signatory.
- dp-012: no 2024 "Phase 4" instrument found. Quotes CNSA's Wu Yanhua at the January 2022 SCIO
  briefing.
- dp-016 LunaNet: the quoted sentence was a paraphrase. Replaced with LNIS v5 (29 Jan 2025) §1;
  the holder notes joint NASA/ESA/JAXA authorship and NASA SCaN document control.
- dp-017: the full 51 U.S.C. 51303 sentence, with the sec. 403 disclaimer noted.
- Country profiles: quotes aligned with the corrected points and marked verbatim or paraphrase
  (Japan–NASA and UAE remain paraphrase, unverified). Japan, Luxembourg, OSTP, ILRS and India
  analysis text corrected to match.

Timeline:

- Outer Space Treaty entry into force 1967-10 (10 October 1967), was 1967-01.
- India signed the Artemis Accords on 21 June 2023 (27th signatory), was "2026-01 (reported)".
  India is now coded Artemis, not dual.
- "Artemis Accords surpass 40 signatories" (2025-01, count 43) corrected to 40 signatories in May
  2024; a 78-signatory entry (Vietnam, 28 October 2026) added from NASA's page.
- ILRS Guide for Partnership released June 2021 with the Roadmap (merged into one event); the
  "April 2023" entry is removed.
- "ILRS partners reach 12+ nations" replaced with CNSA's June 2024 wording: more than ten countries
  and international organisations.
- "ILRS Phase 1 construction begins 2025-06" removed: no official source; the Guide's 2021–2025
  phase is reconnaissance. Replaced with CNSA's April 2025 plan (basic model by 2035) and the
  postponement of Chang'e-7 from its 2026 window.
- Moon Agreement: 17 parties as of October 2026 (18 at peak).
- Every event links its source.

Copy and checks:

- README counts follow the data (11 profile documents, 15 registry documents, 16 points, 15
  events); coalition sizes carry as-of dates on the home page, tracker and README.
- `check:docs` also fails on a verbatim quote without a checked source, a quote stored in
  quotation marks, or README counts that differ from the data.

Accessibility:

- Registry rows are `<button aria-expanded aria-controls>`, so the evidence opens from the keyboard.
- The registry grid stacks to one column below 768 px; the legend, flow diagram and timeline also fit a 375 px screen without horizontal scroll.
- The detail overlay is a labelled dialog; Escape closes it and focus returns to the opener.
- Muted text raised from #484f58 (about 2:1) to #8590a0 (at least 5:1 on all backgrounds); stat
  labels use the full accent colour.

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
