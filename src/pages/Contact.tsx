import { useState } from 'react'
import gothicThreshold from '../assets/worlds/gothic-threshold.webp'

type ContactMethod = 'raven' | 'service' | 'note'

const METHODS: { id: ContactMethod; label: string; placeholder: string }[] = [
  { id: 'raven', label: 'By Raven', placeholder: 'Which window should it tap on?' },
  { id: 'service', label: 'Answering Service', placeholder: 'Best number to ring back' },
  { id: 'note', label: 'Leave a Note', placeholder: 'Where should I look for it?' },
]

const FAIL_LINES = [
  'Bad call. The temperature just dropped ten degrees.',
  'You felt that draft, right? That wasn’t the weather.',
  'That is exactly what a Red Court thrall would say yes to.',
  'The smile got wider. That’s your cue to reconsider.',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [method, setMethod] = useState<ContactMethod>('service')
  const [verified, setVerified] = useState(false)
  const [swapped, setSwapped] = useState(false)
  const [failLine, setFailLine] = useState<string | null>(null)
  const activeMethod = METHODS.find((m) => m.id === method)!

  function handleWrongAnswer() {
    setFailLine(FAIL_LINES[Math.floor(Math.random() * FAIL_LINES.length)])
    setSwapped((s) => !s)
  }

  function handleCorrectAnswer() {
    setFailLine(null)
    setVerified(true)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!verified) return
    setSubmitted(true)
  }

  return (
    <div className="bg-gothic-ground">
      <section className="relative overflow-hidden">
        <img
          src={gothicThreshold}
          alt="Foggy gothic gate at night lit by a wrought iron gas lamp, indigo mist beyond"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gothic-ground via-gothic-ground/75 to-gothic-ground/25" />

        <div className="relative mx-auto flex min-h-[46vh] max-w-6xl flex-col justify-end px-6 pb-14 pt-28">
          <div className="case-label mb-3 text-gothic-accent">
            The Threshold
          </div>
          <h1 className="max-w-2xl font-display text-5xl font-bold leading-[0.95] text-dossier-paper sm:text-6xl">
            Get in Touch.
          </h1>
          <p className="mt-5 max-w-lg text-dossier-paper-dim">
            Every case starts at a door. This is mine.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:grid-cols-[1fr_1.3fr]">
        <div className="space-y-8">
          <div>
            <div className="case-label text-gothic-accent">Phone</div>
            <p className="mt-2 text-lg text-dossier-paper">
              Listed in the book. Under &ldquo;Wizards.&rdquo;
            </p>
          </div>
          <div>
            <div className="case-label text-gothic-accent">Office Hours</div>
            <p className="mt-2 text-dossier-paper-dim">
              Whenever the problem is. Some things don&rsquo;t wait for
              business hours, and neither do I.
            </p>
          </div>
          <div>
            <div className="case-label text-gothic-accent">Before You Call</div>
            <p className="mt-2 text-dossier-paper-dim">
              Have the basics ready: what happened, when, and what the
              official explanation was — if there was one. It saves us both
              time.
            </p>
          </div>
          <div className="border-t border-dossier-rule/40 pt-6 font-case text-xs uppercase tracking-wide text-dossier-paper-dim/50">
            Reasonable rates. No Love Potions, Endless Purses, Parties or
            Other Entertainment.
          </div>
        </div>

        {/* The form itself is a physical sheet of paper — cream stock, a slight
            resting tilt, a real drop shadow — not a glass panel. */}
        <div className="relative -rotate-1 bg-[#f2ead6] p-8 shadow-2xl">
          <div className="absolute -top-2 left-10 h-4 w-16 -rotate-3 bg-dossier-amber/50" />

          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <MethodIcon id={method} active large />
              <div className="case-label mt-4 text-gothic-accent">Message Received</div>
              <p className="mt-3 max-w-sm text-dossier-ink/70">
                {method === 'raven' && 'The window’s open. She knows the way.'}
                {method === 'service' && 'The service will pass it along the next time I check in.'}
                {method === 'note' && 'Found it. I’ll leave word the same way.'}
                {' '}If this is urgent and it can&rsquo;t wait, call the number in
                the book instead.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="case-label text-dossier-ink/50">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full border border-dossier-ink/20 bg-transparent px-3 py-2.5 text-dossier-ink outline-none transition-colors focus:border-gothic-accent"
                />
              </div>
              <div>
                <div className="case-label text-dossier-ink/50">How Should the Answer Reach You?</div>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {METHODS.map((m) => {
                    const active = m.id === method
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMethod(m.id)}
                        aria-pressed={active}
                        className={`flex flex-col items-center gap-1.5 border px-2 py-3 text-center transition-all duration-200 ${
                          active
                            ? 'border-gothic-accent bg-gothic-accent/10 text-gothic-accent shadow-[0_0_12px_-2px_var(--color-gothic-accent)]'
                            : 'border-dossier-ink/15 text-dossier-ink/45 hover:border-dossier-ink/30 hover:text-dossier-ink/70'
                        }`}
                      >
                        <MethodIcon id={m.id} active={active} />
                        <span className="font-case text-[0.65rem] uppercase leading-tight tracking-wide">
                          {m.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  placeholder={activeMethod.placeholder}
                  className="mt-3 w-full border border-dossier-ink/20 bg-transparent px-3 py-2.5 text-dossier-ink outline-none transition-colors placeholder:text-dossier-ink/35 focus:border-gothic-accent"
                />
              </div>
              <div>
                <label htmlFor="situation" className="case-label text-dossier-ink/50">
                  What&rsquo;s going on?
                </label>
                <textarea
                  id="situation"
                  name="situation"
                  required
                  rows={5}
                  className="mt-2 w-full border border-dossier-ink/20 bg-transparent px-3 py-2.5 text-dossier-ink outline-none transition-colors focus:border-gothic-accent"
                />
              </div>

              <div>
                <div className="case-label text-dossier-ink/50">One More Thing</div>
                {verified ? (
                  <div className="mt-2 flex items-center gap-3 border border-gothic-accent bg-gothic-accent/10 px-4 py-3">
                    <svg className="h-6 w-6 shrink-0 text-gothic-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12.5 9.5 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-dossier-ink">Confirmed: not Red Court. Probably.</span>
                  </div>
                ) : (
                  <div className="mt-2 border border-dossier-ink/15 bg-dossier-ink/[0.03] p-4">
                    <p className="text-sm text-dossier-ink/75">
                      Someone&rsquo;s at the door, smiling a little too wide.
                      <br />
                      &ldquo;Won&rsquo;t you invite me in?&rdquo;
                    </p>
                    {failLine && (
                      <p className="mt-2 font-case text-xs uppercase tracking-wide text-string-red">
                        {failLine}
                      </p>
                    )}
                    <div className={`mt-3 flex gap-3 ${swapped ? 'flex-row-reverse' : ''}`}>
                      <button
                        type="button"
                        onClick={handleWrongAnswer}
                        className="flex-1 rounded-sm bg-gothic-accent px-4 py-2.5 font-case text-xs uppercase tracking-wide text-dossier-ink shadow-md transition-transform hover:scale-[1.02]"
                      >
                        Sure, come on in
                      </button>
                      <button
                        type="button"
                        onClick={handleCorrectAnswer}
                        className="flex-1 border border-dossier-ink/20 px-4 py-2.5 font-case text-xs uppercase tracking-wide text-dossier-ink/55 transition-colors hover:border-dossier-ink/40 hover:text-dossier-ink"
                      >
                        Not a chance.
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={!verified}
                className="w-full rounded-sm bg-gothic-accent px-6 py-3 font-case text-sm uppercase tracking-wide text-dossier-ink transition-all hover:bg-gothic-mist disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-gothic-accent"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

function MethodIcon({ id, active, large }: { id: ContactMethod; active: boolean; large?: boolean }) {
  const size = large ? 'h-10 w-10' : 'h-5 w-5'
  const color = active ? 'text-gothic-accent' : 'text-dossier-ink/40'

  if (id === 'raven') {
    return (
      <svg className={`${size} ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          d="M3 14c2-1 3.5-3 4-5 .6 1 1.7 1.6 3 1.6s2.4-.6 3-1.6c.5 2 2 4 4 5-1.6.3-2.8 0-3.8-.8-.3 1.4-1.2 2.6-2.6 3.2l.4 3.6h-2l.4-3.6c-1.4-.6-2.3-1.8-2.6-3.2-1 .8-2.2 1.1-3.8.8Z"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.4" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (id === 'service') {
    return (
      <svg className={`${size} ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="9" r="5" strokeLinecap="round" />
        <path d="M9 9a3 3 0 0 1 3-3" strokeLinecap="round" />
        <path d="M7 20v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 20h14" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg className={`${size} ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 4h14v13l-4 3-3-2-3 2-4-3Z" strokeLinejoin="round" />
      <path d="M8 8h8M8 11.5h5" strokeLinecap="round" />
    </svg>
  )
}
