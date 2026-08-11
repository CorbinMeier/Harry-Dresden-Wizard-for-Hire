# Harry Dresden — Wizard for Hire

A fan-made, in-universe business website for Harry Dresden, the wizard-detective of
Jim Butcher's *The Dresden Files*. It is staged as the site Harry would actually run
for his practice — not a wiki about him. Not affiliated with the author or his
publishers.

## Stack

React 19 · Vite 8 · Tailwind CSS v4 · React Router 7 · TypeScript · Oxlint · Vitest

## Pages

Each page carries its own visual "world" while sharing one type system, nav, and footer.

| Route | Page | World |
| --- | --- | --- |
| `/` | Home | Neon Threshold — modern Chicago street, magic intruding on the mundane |
| `/services` | Services | Classic Hardboiled — 1940s black-and-white detective office |
| `/case-files` | Case Files | Records Room — folders on desk felt, opening onto a pinned evidence board |
| `/about` | About | The Grimoire — candlelit study, warm sepia |
| `/contact` | Contact | Gothic Threshold — indigo gas-lit gate and mist |

## Content rules

Copy is bound by `PRODUCT.md`. In short: in-universe voice throughout, back-of-book
spoiler level only, and no fabricated canon — every character detail, date, and event
reference must be checkable against the books. The Case Files page holds that line with
its redaction conceit: intake and summary stay at blurb level, and anything past it is
blacked out rather than described.

Content invariants from the accuracy audit are locked in by `src/data/content.test.ts` —
run the tests before changing copy in `src/data/` or the page files.

## Commands

```bash
npm install
npm run dev      # dev server
npm run lint     # oxlint
npm run check    # tsc --noEmit
npm test         # vitest run
npm run build    # tsc -b && vite build
```

## Notes

- Evidence photos and world art live in `src/assets/`; they are imported, not served
  from `public/`, so Vite fingerprints them.
- The contact form is a prop. It has no backend and states so on submit.
