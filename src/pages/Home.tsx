import { Link } from 'react-router-dom'
import neonThreshold from '../assets/worlds/neon-threshold.webp'

const SERVICES = [
  {
    title: 'Paranormal Investigation',
    body: 'Something in your house, your business, or your case file that doesn’t add up in the normal world? I find out what it actually is.',
  },
  {
    title: 'Lost Items Found',
    body: 'Missing persons, missing objects, missing explanations. If conventional methods came up empty, that’s usually when I get the call.',
  },
  {
    title: 'Consulting',
    body: 'Occasional work with Chicago PD Special Investigations on cases that don’t fit the department’s usual paperwork.',
  },
  {
    title: 'Advice',
    body: 'Sometimes you don’t need a wizard to solve your problem — just someone who knows enough to tell you what you’re dealing with.',
  },
]

export default function Home() {
  return (
    <div className="bg-neon-ground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={neonThreshold}
          alt="Rain-slicked Chicago street at night with a faint violet glow rising from a storm drain"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neon-ground via-neon-ground/70 to-neon-ground/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-ground/80 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32">
          <div className="case-label mb-4 text-neon-accent">
            Chicago, Illinois &middot; Private Practice
          </div>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] text-dossier-paper sm:text-6xl md:text-7xl">
            Wizard&nbsp;for&nbsp;Hire.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-dossier-paper-dim">
            Lost items found. Paranormal investigations. Consulting. Advice.
            Reasonable rates. If it happened after dark and the police report
            reads &ldquo;cause undetermined,&rdquo; you probably want to talk
            to me instead.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="rounded-sm bg-neon-accent px-6 py-3 font-case text-sm uppercase tracking-wide text-dossier-ink transition-colors hover:bg-dossier-paper"
            >
              See services
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-dossier-paper/30 px-6 py-3 font-case text-sm uppercase tracking-wide text-dossier-paper transition-colors hover:border-neon-accent hover:text-neon-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Overview strip */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-dossier-rule/50 pb-4">
          <h2 className="font-display text-2xl font-bold text-dossier-paper sm:text-3xl">
            What I do
          </h2>
          <Link
            to="/services"
            className="case-label whitespace-nowrap text-neon-accent hover:text-dossier-paper"
          >
            Full services &rarr;
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div key={service.title} className="border-l border-dossier-rule/50 pl-5">
              <h3 className="font-display text-xl font-semibold text-dossier-paper">
                {service.title}
              </h3>
              <p className="mt-2 text-dossier-paper-dim/85">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reassurance / positioning strip */}
      <section className="border-t border-dossier-rule/40 bg-dossier-ink py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-2xl text-dossier-paper sm:text-3xl">
            There&rsquo;s exactly one listing under &lsquo;Wizards.&rsquo;
            That&rsquo;s not an accident.
          </p>
          <p className="case-label mt-6 text-dossier-amber">
            Under &lsquo;Wizards&rsquo; &middot; Chicago
          </p>
        </div>
      </section>
    </div>
  )
}
