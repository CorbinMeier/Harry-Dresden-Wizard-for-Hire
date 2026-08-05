---
name: Harry Dresden — Wizard for Hire
description: In-universe noir business site for Chicago's only professional wizard.
colors:
  dossier-ink: "#0d0c0f"
  dossier-paper: "#efe6d4"
  dossier-paper-dim: "#d9cdae"
  dossier-amber: "#c9a876"
  dossier-amber-bright: "#e8b563"
  dossier-rule: "#443c33"
  neon-ground: "#0a0e12"
  neon-accent: "#d94fd0"
  neon-accent-2: "#6a4fd9"
  neon-mist: "#1a2a33"
  hardboiled-ground: "#101010"
  hardboiled-fog: "#2c2c2c"
  hardboiled-paper: "#e5e0d3"
  grimoire-ground: "#1c130a"
  grimoire-accent: "#e8b563"
  grimoire-deep: "#3d2914"
  gothic-ground: "#0b0a17"
  gothic-accent: "#6a5acd"
  gothic-mist: "#241f4a"
  desk-felt: "#10261c"
  desk-felt-dark: "#0a1810"
  manila: "#d9bd85"
  manila-dark: "#c2a36a"
  manila-shadow: "#7a6539"
  string-red: "#b3231c"
  cork: "#3b2a1c"
  cork-dark: "#241a11"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0.01em"
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Special Elite, Courier New, monospace"
    fontSize: "0.72rem"
    letterSpacing: "0.14em"
  micro-label:
    fontFamily: "Special Elite, Courier New, monospace"
    fontSize: "0.65rem"
    letterSpacing: "0.08em"
  board-body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "0.95rem"
    lineHeight: 1.6
components:
  button-primary:
    backgroundColor: "{colors.dossier-amber}"
    textColor: "{colors.dossier-ink}"
    rounded: "2px"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.dossier-paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.dossier-paper}"
    rounded: "2px"
    padding: "12px 24px"
---

# Design System: Harry Dresden — Wizard for Hire

## Overview

**Creative North Star: "The Case File Made Public"**

This site is staged as Harry Dresden's actual business site — the modern web presence for the wizard-detective from Jim Butcher's Dresden Files, run in-universe. The governing idea is that Harry's whole world lives across four distinct visual "cases," one per section, each its own atmosphere, held together by a single recurring artifact: the paper case file. Nav, footer, buttons, and labels are dressed as dossier chrome — typewriter labels, amber rule lines, parchment tones — so a visitor always knows which drawer of Harry's practice they've opened even as the backdrop shifts from neon-lit street to black-and-white detective office to candlelit study to gothic threshold to a literal green-felt case-file desk.

The system explicitly rejects a single uniform brand palette in favor of four committed worlds, each a Full palette / Drenched strategy in its own right, unified only by shared typography, shared chrome components (nav/footer/buttons), and one connective accent (dossier amber). This is a deliberate departure from "one hero color, neutrals everywhere" — the multiplicity IS the brand.

**Key Characteristics:**
- Four fully-committed worlds (Neon Threshold, Classic Hardboiled, The Grimoire, Gothic Threshold) plus a fifth interactive world (The Case Board) — not four color reskins of one layout, but four distinct atmospheres
- Dossier chrome (nav, footer, buttons, labels) stays visually constant across every world as the connective thread
- Typewriter/case-file motifs (redaction bars, case numbers, "Ref." tags, pinned photographs) recur as the system's signature device
- Photography-led hero sections: every page opens on a full-bleed generated photographic scene, never a flat color hero

## Colors

Each page world is a near-total palette commitment (Drenched strategy) rather than a shared brand palette with per-page accents; the dossier tones are the only cross-world constant.

### Primary (cross-world / dossier chrome)
- **Dossier Amber** (#c9a876): the one color that survives every world — nav active states, case labels, button fills, footer rule lines, pins.
- **Dossier Amber Bright** (#e8b563): hover/brighter variant of amber; also doubles as the Grimoire world's own accent.

### Neutral (cross-world)
- **Dossier Ink** (#0d0c0f): universal page/body background beneath every world image.
- **Dossier Paper** (#efe6d4): primary light text color against dark grounds, and the "note card" paper tone (#f2ead6 in practice) used for pinned cards on the detective board.
- **Dossier Paper Dim** (#d9cdae): secondary/muted text, dek copy, footer body text.
- **Dossier Rule** (#443c33): hairline dividers, borders on nav/footer/cards.

### Per-world palettes (each Drenched — the world IS the color)
- **Neon Threshold** (Home): ground #0a0e12, magenta accent #d94fd0, violet accent-2 #6a4fd9, teal-grey mist #1a2a33. Urban fantasy neon-noir: magic as intrusion on a mundane wet Chicago street.
- **Classic Hardboiled** (Services): ground #101010, fog #2c2c2c, paper #e5e0d3. True monochrome — the hero image itself is desaturated (`grayscale`) 1940s detective-office noir.
- **The Grimoire** (About): ground #1c130a, amber accent #e8b563, deep brown #3d2914. Candlelit warm sepia occult study.
- **Gothic Threshold** (Contact): ground #0b0a17, indigo accent #6a5acd, mist #241f4a. Liminal gas-lit gate, breathing indigo fog.
- **The Case Board** (Case Files): felt #10261c / #0a1810 (green velvet desk), manila #d9bd85 / #c2a36a / shadow #7a6539 (folders), string-red #b3231c (red string), cork #3b2a1c / #241a11 (detective board backdrop).

### Named Rules
**The One Thread Rule.** Dossier amber (#c9a876 / #e8b563) is the only color permitted to cross world boundaries. A new world may introduce its own palette freely, but nav, footer, buttons, and case-labels stay amber-on-dossier-ink regardless of which world's page they sit on.

**The Drenched World Rule.** A page world is not "dossier chrome plus one accent swapped in" — it's a full palette commitment (ground, accent, accent-2/mist) applied at page scale via a full-bleed photographic hero, gradient-faded into the page background of the same ground color.

## Typography

**Display Font:** Big Shoulders Display (with Arial Narrow, sans-serif fallback)
**Body Font:** Source Serif 4 (with Georgia, serif fallback)
**Label/Mono Font:** Special Elite (with Courier New, monospace fallback) — a typewriter face, used exclusively for dossier/case-file chrome

**Character:** A Chicago-referencing condensed industrial display face (Big Shoulders Display takes its name from the city) paired with a warm literary serif body and a typewriter label face — the pairing itself tells the story: newspaper-masthead confidence for headlines, a novel's own serif for reading, a case file's typewriter for everything administrative (nav, labels, footer fine print, case numbers).

### Hierarchy
- **Display** (700 weight, `clamp(2.5rem, 6vw, 4.5rem)` in practice via `text-5xl sm:text-6xl`, line-height 0.95): page hero headlines only (h1). Always `text-wrap: balance`.
- **Headline** (600–700 weight, `text-2xl`–`text-3xl`): section headers within a page (e.g. "What I do", "The Ledger").
- **Body** (400 weight, `text-base`–`text-lg`, line-height ~1.6, max ~65ch): paragraph copy, in-universe voice.
- **Label** (Special Elite, 0.72rem, letter-spacing 0.14em, uppercase — the `.case-label` utility): eyebrows, nav items, case ref numbers, footer categories, "Classified" tags.
- **Micro-label** (Special Elite, 0.65rem, uppercase, tracking-wide): a smaller step of the label face for the tightest chrome — folder status lines ("Closed · 2000"), pinned-card status lines ("Status: closed"). Same face and role as Label, one size down for secondary/tertiary metadata that must not compete with the primary label.
- **Board body** (Source Serif 4, 0.95rem, line-height relaxed): a slightly tightened step of Body reserved for the detective-board's pinned case-summary card, where the fixed card width benefits from a touch more density than the page-level `text-base`/`text-lg` steps.

### Named Rules
**The Typewriter-Never-Reads Rule.** Special Elite (the case/label face) is reserved for short administrative strings only — labels, numbers, nav — never body paragraphs. It authenticates the dossier conceit without hurting readability.

## Layout

Single-column, full-bleed hero sections per page (`min-h-[46vh]` to `min-h-[78vh]` depending on page density) followed by a `max-w-6xl` (or `max-w-3xl`/`max-w-5xl` for reading-dense pages like About/Contact) centered content container. Every hero uses the same construction: a full-bleed photographic `<img>`, a `bg-gradient-to-t` fade from the page's ground color at the bottom to transparent at top, page content anchored to the bottom of the hero via flex `justify-end`. The Case Files page departs from single-hero structure into a scattered grid (`grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`) of rotated folder cards, and its detective-board overlay is a fixed full-viewport layer with percentage-anchored pinned cards connected by SVG string.

Sticky top navigation (`sticky top-0 z-50`) with backdrop blur stays constant across all worlds. Standard content spacing rhythm follows Tailwind's default scale via utility classes (no bespoke spacing tokens beyond Tailwind defaults).

## Elevation & Depth

Flat-by-default, world-lit rather than shadow-lit: depth comes primarily from photographic lighting in the hero images and gradient fades, not from box-shadow layering. Where shadows do appear (folder/paper stack, pinned cards, polaroids, buttons on hover) they are soft and grounded (`shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl` — Tailwind defaults, no custom shadow tokens), simulating physical objects (paper, photographs, pinned cards) resting on a surface rather than UI chrome floating above content.

### Named Rules
**The Physical Object Rule.** Shadows exist only under things that are meant to read as physical objects sitting on or pinned to a surface (case folders, polaroids, pinned note cards) — never as generic card/panel elevation for UI grouping.

**The Scrim Rule.** Black-alpha overlays (`rgba(0,0,0,0.35–0.5)`) are a documented utility, not palette drift: they appear as the radial "paper grain" dot texture on the detective board, as `drop-shadow` under pinned photos/notes, and as the pin's own drop shadow. They are functional legibility/depth aids layered on top of world colors, never a fifth accent — always black at low alpha, never tinted.

**The Ground Scrim Rule.** Each hero section's photographic background is legible-ized with a two-stop linear gradient from the page's own ground color at ~55–75% alpha (e.g. `rgba(6,15,10,0.55)` → `rgba(6,15,10,0.75)` on the felt-textured Case Files hero) rather than a generic black scrim — the darkening always keys to that world's own ground color, keeping the tint on-world instead of neutral.

## Shapes

Minimal radius throughout (`rounded-sm` or sharp corners) — nothing rounder than a small `rounded-sm`, consistent with paper/dossier materials (folders, index cards, photographs) rather than soft app-UI surfaces. The one distinctive silhouette is the manila folder tab (a small rounded-top rectangle offset above the folder body) and the polaroid's deep bottom margin (`pb-4`/`pb-5`) mimicking an instant-film photo's white border.

## Components

### Navigation
Sticky, translucent dossier-ink background with blur, amber-on-transparent active/hover state via `case-label` styling, each item prefixed with a three-digit `case-label` ref number (e.g. "003"). Constant across every world; never re-themed per page.

### Buttons
- **Shape:** `rounded-sm` (2px), never fully rounded.
- **Primary:** dossier amber background, dossier-ink text, `case-label`-style uppercase tracked text, padding `px-6 py-3`. Hover inverts to dossier-paper background.
- **Ghost/Secondary:** transparent background, dossier-paper border/text, hover shifts border+text to the current world's accent color (not amber) — the one place a per-world accent is allowed on a chrome component.

### Cards / Pinned Notes (Case Files signature component)
- **Corner style:** sharp (no radius).
- **Background:** #f2ead6 (paper), or white for photographs.
- **Shadow:** `shadow-2xl`, simulating a physical card pinned to a board.
- **Signature behavior:** every note/photo carries a small red circular "pin" (`bg-string-red`, `rounded-full`, drop-shadow) at its top edge, and red SVG string lines connect related cards, drawn only after their fly-in animation completes.

### Manila Folder (Case Files signature component)
Three fanned paper sheets peeking from behind a manila-gradient folder body (`linear-gradient(180deg, manila, manila-dark)`), a folder tab, and a paperclipped polaroid on top of the cover (photo has the highest z-index of the stack, then folder body, then papers). Rest state carries a small deterministic per-folder rotation (desk-scatter effect, not grid-aligned); hover fans the papers outward in different directions and lifts the polaroid; click triggers a shared-element flight to the detective board.

### Inputs / Fields (Contact form)
Transparent background, `border-dossier-rule/50`, focus state shifts border to the current world's accent (Gothic accent on the Contact page). No radius.

## Do's and Don'ts

### Do:
- **Do** keep dossier amber (#c9a876 / #e8b563) as the only color permitted on shared chrome (nav, footer, primary buttons, case labels) regardless of which world's page it sits on.
- **Do** open every page on a full-bleed photographic hero with a bottom-anchored headline, gradient-faded to the page's own ground color.
- **Do** commit each page world fully (ground + accent + accent-2/mist) rather than blending worlds or introducing a shared "brand" hue beyond amber.
- **Do** reserve Special Elite (typewriter face) for short administrative/label strings only.
- **Do** keep corners sharp (`rounded-sm` at most) everywhere — this is a paper-and-dossier system, not a soft app-UI system.

### Don't:
- **Don't** introduce a fifth shared accent color beyond dossier amber; per-world accents stay scoped to their own page.
- **Don't** round any component beyond `rounded-sm` (2px) — no `rounded-lg`/`rounded-xl`/pill shapes anywhere in this system.
- **Don't** use Special Elite for paragraph body copy; it's a label face only.
- **Don't** add generic UI drop-shadows to non-physical elements (nav bars, plain content sections); shadows are reserved for things simulating physical paper objects.
- **Don't** flatten the Case Files page's world-specific interaction (fanned papers, shared-element flight, red string) into a generic modal — it is this system's signature component and should stay distinctive.
