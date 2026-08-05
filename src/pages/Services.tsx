import { Link } from 'react-router-dom'
import hardboiled from '../assets/worlds/hardboiled.webp'

const CASE_FILES = [
  {
    ref: '01',
    title: 'Paranormal Investigation',
    body: 'Hauntings, curses, things that leave marks no animal makes. I go in, find out what it is, and — where possible — make it stop being your problem.',
    note: 'Most common call. Most likely to actually be raccoons. I check anyway.',
  },
  {
    ref: '02',
    title: 'Lost Items Found',
    body: 'People, pets, heirlooms, and the occasional stolen artifact that really should not be stolen. Tracking is one of the oldest tricks a wizard has, and one of the most reliable.',
    note: 'Bring something the missing thing touched. It matters more than you’d think.',
  },
  {
    ref: '03',
    title: 'Consulting — CPD Special Investigations',
    body: 'Occasional contract work with the department on cases that don’t close with normal forensics. I don’t carry a badge. I carry context.',
    note: 'By referral only. I don’t freelance this one for the general public.',
  },
  {
    ref: '04',
    title: 'Advice',
    body: 'Not every strange thing needs a wizard on-site. Sometimes a phone call and twenty minutes of straight answers is worth more than a house call.',
    note: 'Flat rate. Cheapest thing on this list and often the most useful.',
  },
  {
    ref: '05',
    title: 'Wards & Protection',
    body: 'Doors, thresholds, and property lines that actually mean something. If you need your home to stop being an open invitation, this is that.',
    note: 'Takes longer than people expect. Done right, it lasts.',
  },
]

export default function Services() {
  return (
    <div className="bg-hardboiled-ground">
      <section className="relative overflow-hidden">
        <img
          src={hardboiled}
          alt="High-contrast black-and-white 1940s detective office at night, venetian-blind shadows across a cluttered desk"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hardboiled-ground via-hardboiled-ground/75 to-hardboiled-ground/25" />

        <div className="relative mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-6 pb-14 pt-28">
          <div className="case-label mb-3 text-hardboiled-paper/70">
            Case File &middot; Services Rendered
          </div>
          <h1 className="max-w-2xl font-display text-5xl font-bold leading-[0.95] text-hardboiled-paper sm:text-6xl">
            The Ledger.
          </h1>
          <p className="mt-5 max-w-lg text-hardboiled-paper/75">
            Five things I get hired for, in the order they actually come in.
            Reasonable rates. No love potions, endless love, or other
            entertainment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="divide-y divide-hardboiled-paper/15">
          {CASE_FILES.map((item) => (
            <div key={item.ref} className="grid gap-4 py-8 sm:grid-cols-[3.5rem_1fr]">
              <div className="font-case text-sm text-hardboiled-paper/40">
                {item.ref}
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-hardboiled-paper">
                  {item.title}
                </h2>
                <p className="mt-2 max-w-2xl text-hardboiled-paper/75">{item.body}</p>
                <p className="mt-3 font-case text-xs uppercase tracking-wide text-hardboiled-paper/40">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-hardboiled-paper/15 pt-10">
          <p className="max-w-md text-hardboiled-paper/70">
            Not sure which of these fits your situation? That&rsquo;s what the
            first phone call is for.
          </p>
          <Link
            to="/contact"
            className="rounded-sm border border-hardboiled-paper/40 px-6 py-3 font-case text-sm uppercase tracking-wide text-hardboiled-paper transition-colors hover:border-hardboiled-paper hover:bg-hardboiled-paper hover:text-hardboiled-ground"
          >
            Open a case
          </Link>
        </div>
      </section>
    </div>
  )
}
