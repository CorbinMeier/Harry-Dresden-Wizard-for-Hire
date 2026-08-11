# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite + Tailwind CSS (user's explicit choice, not delegated)

## Users

Existing fans of Jim Butcher's Dresden Files book series, experiencing the site as an in-universe artifact. Not aimed at converting new readers; public-facing content should still avoid spoiling non-readers.

## Product Purpose

An in-universe business website: the site fans would find if Harry Dresden — wizard for hire, "Lost Items Found, Paranormal Investigations, Consulting, Advice" (the books' iconic Yellow Pages ad) — actually had a modern web presence. It is a fan-made art piece staged as Harry's own site, not a wiki about him. Success is the site feeling like a real, functioning small-business site that happens to be run by a wizard, complete with a distinct visual "world" per section reflecting the different facets of his world (streets, office, study, threshold).

## Positioning

Not a reference wiki, fan-fiction hub, or meta fan tribute — it is built and voiced as if Harry Dresden commissioned it himself for his practice. The in-universe conceit (real business, real services, wizard's voice) is the whole differentiator versus a generic fan site.

## Operating Context

Site map (confirmed): Home, Services, Case Files, About, Contact — a standard small-business structure, in-universe.
- **Home** — general overview of Harry's services, links through to Services. Visual world: Neon Threshold (modern Chicago street, magic as intrusion on the mundane).
- **Services** — the actual offerings (paranormal investigation, consulting, lost items, etc., per his classic ad). Visual world: Classic Hardboiled (black-and-white 1940s detective-office noir).
- **Case Files** — the casework record, one folder per book, opening onto a pinned evidence board. Visual world: Records Room (desk felt, manila folders, red string). Spoiler control is structural: `intake` and `summary` stay at back-of-book level, and everything past that line lives in `redacted[]`, written as a blacked-out gap rather than as a described reveal. A `redacted` line that still reads as a spoiler when the blocks are removed is a bug.
  - The `year` field is the **year of record** — the book's publication year, not an in-universe filing date. The books' internal chronology is far more compressed than 2000–2020, so the gaps between file years (notably 15 → 16) are publication gaps and are not to be "corrected" into story time.
- **About** — who Harry is, in-universe bio/voice. Visual world: The Grimoire (candlelit study, warm sepia, occult). The team roster is explicitly filed as of the early case files, since several members' roles do not survive the later ones.
- **Contact** — how to reach him. Visual world: Gothic Threshold (indigo gas-lit gate/liminal mist) — assumed fit (a "threshold" reads naturally as a contact/entry page); confirm or reassign when reviewed.

Public-facing pages must be spoiler-free: "back of book" concepts (e.g. werewolves, mirror realities/the Nevernever) can be referenced at the premise level, but specific plot details, character fates, or book-specific reveals must not be included.

## Capabilities and Constraints

- Each core page (Home, Services, About, Contact) carries its own visual world from the four explored directions (Neon Threshold, Classic Hardboiled, The Grimoire, Gothic Threshold) rather than one uniform theme site-wide — the design system must support a per-page world shift while staying recognizably one site (shared type system, nav, footer, etc. carry continuity across the four worlds).
- No spoiler content on public-facing pages beyond back-of-book/premise-level concepts.
- Not intended for non-fan/new-reader onboarding; deep genre familiarity can be assumed for fans, but nothing spoiler-specific should be surfaced publicly regardless.
- In-universe voice: copy should read as if written/commissioned by Harry Dresden for his own practice, not as fan commentary about him.

## Evidence on Hand

None supplied by the client. Future work must not fabricate specific canon details, quotes, or character bios — only reference publicly known, non-spoiler premise elements (noir Chicago wizard-detective setting, established public concepts like werewolves, the Nevernever/mirror realities) at a general level.

Two rules follow from the 2026-08-11 contextual accuracy audit (issues #2–#32):

- **No invented quotes.** Nothing on the site may be set in quotation marks and attributed to a character or source unless it is a real line from the books. Harry's own site copy is first-person by default — it does not need to be quoted to sound like him.
- **Checkable details only.** Every named character trait, court, rank, date, and event reference must be verifiable against the books or a canon reference. Where a detail changes across the series (Toot-toot's height, Murphy's job, Michael's active service), the copy must anchor itself in time rather than assert a single present tense.

## Product Principles

- In-universe first: it's Harry's business site, not a fan page about Harry — voice, copy, and framing commit to that conceit throughout.
- Atmosphere and noir tone over completeness — this is an art piece, not a database.
- Per-page world, one site: each of the four sections owns a distinct visual world, but shared systems (type, nav, footer) keep it legible as one coherent site rather than four disconnected pages.
- Spoiler discipline: public pages stay at back-of-book/premise level only.
- Fan-to-fan voice: written for people who already know and love the series.

## Accessibility & Inclusion

No product-specific requirement established yet.
