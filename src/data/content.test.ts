import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { CASE_FILES } from './books'
import { TEAM } from './team'
import { EVIDENCE_PHOTOS } from './evidencePhotos'

// Content invariants locked in by the 2026-08-11 contextual accuracy audit
// (issues #2-#32). These guard canon facts and copy rules that are easy to
// reintroduce by accident — see PRODUCT.md for the rules behind them.

const SRC = fileURLToPath(new URL('..', import.meta.url))

function readSource(...parts: string[]) {
  return readFileSync(join(SRC, ...parts), 'utf8')
}

const PAGES = ['Home', 'Services', 'CaseFiles', 'About', 'Contact'] as const

const allCopy = [
  ...PAGES.map((page) => readSource('pages', `${page}.tsx`)),
  readSource('components', 'Layout.tsx'),
  readSource('data', 'books.ts'),
  readSource('data', 'team.ts'),
].join('\n')

describe('case file record', () => {
  it('holds one file per published novel, numbered in order', () => {
    expect(CASE_FILES).toHaveLength(17)
    expect(CASE_FILES.map((f) => f.number)).toEqual(
      Array.from({ length: 17 }, (_, i) => i + 1),
    )
  })

  it('keeps years of record in publication order', () => {
    const years = CASE_FILES.map((f) => f.year)
    expect(years).toEqual([...years].sort((a, b) => a - b))
    expect(years[0]).toBe(2000)
    expect(years.at(-1)).toBe(2020)
  })

  it('gives every file an evidence photo that exists', () => {
    for (const file of CASE_FILES) {
      expect(EVIDENCE_PHOTOS[file.photo], `photo for ${file.id}`).toBeDefined()
    }
  })

  it('redacts every classified line rather than describing it', () => {
    for (const file of CASE_FILES) {
      expect(file.redacted).toHaveLength(3)
      for (const line of file.redacted) {
        expect(line, `${file.id}: "${line}"`).toMatch(/█/)
      }
    }
  })
})

describe('canon accuracy', () => {
  it('does not call Ortega a wizard (Death Masks — he is Red Court)', () => {
    const deathMasks = CASE_FILES.find((f) => f.id === 'death-masks')!
    expect(deathMasks.summary).not.toMatch(/rival wizard/i)
  })

  it('does not move the apartment fire out of Changes', () => {
    const bloodRites = CASE_FILES.find((f) => f.id === 'blood-rites')!
    expect(bloodRites.redacted.join(' ')).not.toMatch(/apartment/i)
  })

  it('does not claim werewolf casework before Fool Moon', () => {
    const foolMoon = CASE_FILES.find((f) => f.id === 'fool-moon')!
    expect(foolMoon.summary).not.toMatch(/worked werewolf cases before/i)
  })

  it('does not invent a three-day deadline in Summer Knight', () => {
    const summerKnight = CASE_FILES.find((f) => f.id === 'summer-knight')!
    expect(summerKnight.summary).not.toMatch(/three days/i)
  })

  it('does not claim a single female FBI agent is the Fool Moon reveal', () => {
    const foolMoon = CASE_FILES.find((f) => f.id === 'fool-moon')!
    expect(foolMoon.redacted.join(' ')).not.toMatch(/FBI agent .*\bshe\b/i)
  })

  it('does not duplicate the family reveal across two files', () => {
    const familyReveals = CASE_FILES.filter((f) =>
      f.redacted.some((line) => /family (relation|situation)/i.test(line)),
    )
    expect(familyReveals.map((f) => f.id)).toEqual(['blood-rites'])
  })

  it('keeps the Red Court out of the present tense', () => {
    expect(allCopy).not.toMatch(/Red Court/i)
  })

  it('anchors Toot-toot in time rather than fixing his height', () => {
    const toot = TEAM.find((m) => m.id === 'toot')!
    expect(toot.bio).toMatch(/six inches tall the day I met him/i)
  })

  it('does not understate Bob as centuries old', () => {
    const bob = TEAM.find((m) => m.id === 'bob')!
    expect(bob.bio).not.toMatch(/centuries/i)
  })
})

describe('copy rules', () => {
  it('names the listing consistently — phone book, never Yellow Pages', () => {
    expect(allCopy).not.toMatch(/yellow pages/i)
  })

  it('carries the ad terms verbatim wherever they appear', () => {
    const terms = allCopy.match(/No Love Potions[^.<]*/gi) ?? []
    expect(terms.length).toBeGreaterThan(0)
    for (const term of terms) {
      expect(term.replace(/\s+/g, ' ')).toMatch(/^No Love Potions, Endless Purses,/)
    }
  })

  it('attributes no invented quote to Harry', () => {
    expect(readSource('pages', 'Home.tsx')).not.toMatch(/&mdash; H\. Dresden/)
  })

  it('has no raven or other imported-from-elsewhere messenger', () => {
    expect(allCopy).not.toMatch(/raven/i)
  })

  it('tells the user plainly that the contact form sends nothing', () => {
    expect(readSource('pages', 'Contact.tsx')).toMatch(/Nothing you typed/i)
  })

  it('leaves no truncated "Est." label in the copy', () => {
    expect(allCopy).not.toMatch(/Est\. (Practice|atmosphere)/i)
  })

  it('keeps the fan-made attribution in the footer', () => {
    const layout = readSource('components', 'Layout.tsx')
    expect(layout).toMatch(/fan-made tribute to Jim Butcher/i)
    expect(layout).toMatch(/Not affiliated/i)
  })
})

describe('build hygiene', () => {
  it('ships no dev-time live-reload injection in index.html', () => {
    const html = readFileSync(join(SRC, '..', 'index.html'), 'utf8')
    expect(html).not.toMatch(/impeccable-live/)
    expect(html).not.toMatch(/localhost:\d+/)
  })
})
