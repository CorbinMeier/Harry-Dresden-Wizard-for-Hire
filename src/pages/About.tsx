import grimoire from '../assets/worlds/grimoire.webp'
import { TEAM } from '../data/team'

export default function About() {
  return (
    <div className="bg-grimoire-ground">
      <section className="relative overflow-hidden">
        <img
          src={grimoire}
          alt="Candlelit wizard's study with leather-bound grimoires, dried herbs, and a faint chalk circle on the floor"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-grimoire-ground via-grimoire-ground/70 to-grimoire-ground/20" />

        <div className="relative mx-auto flex min-h-[56vh] max-w-6xl flex-col justify-end px-6 pb-14 pt-28">
          <div className="case-label mb-3 text-grimoire-accent">
            Personal File &middot; H. Dresden
          </div>
          <h1 className="max-w-2xl font-display text-5xl font-bold leading-[0.95] text-dossier-paper sm:text-6xl">
            About the Wizard.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 text-lg leading-relaxed text-dossier-paper-dim">
          <p>
            My name is Harry Dresden. Yes — that&rsquo;s a real name, and yes,
            I really do go by &ldquo;wizard&rdquo; on my business card. I&rsquo;m
            the only listing under that heading in the Chicago phone book, and
            as far as I know, that&rsquo;s not because I&rsquo;m hiding
            competition. It&rsquo;s because most people in my line of work
            would rather you never find out they exist.
          </p>
          <p>
            I disagree with that approach. If something in your life doesn&rsquo;t
            add up — if the explanation the world wants to hand you doesn&rsquo;t
            fit what you actually saw, heard, or lost — I&rsquo;d rather you be
            able to look me up than spend a year convincing yourself you
            imagined it.
          </p>
          <p>
            I work out of Chicago. I keep odd hours, because the work keeps
            odd hours. I do the occasional favor for people who can&rsquo;t
            pay much and the occasional job for people who can pay quite a
            lot, and I try not to let the second kind change how I do the
            first kind.
          </p>
          <p>
            I&rsquo;m not going to pretend this job is tidy. Some cases close
            clean. Some don&rsquo;t close the way anyone would have wanted.
            What I can tell you is that I take the work seriously, I tell
            clients the truth even when it costs me the job, and I don&rsquo;t
            bill for a house call I didn&rsquo;t need to make.
          </p>
          <p className="font-display text-2xl text-dossier-paper">
            If you need a wizard, I&rsquo;m the one in the book.
          </p>
        </div>

        <div className="mt-14 border-t border-grimoire-accent/20 pt-8">
          <div className="case-label text-grimoire-accent">On File</div>
          <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm text-dossier-paper-dim/85 sm:grid-cols-2">
            <div className="flex justify-between border-b border-dossier-rule/30 pb-2 sm:justify-start sm:gap-3">
              <dt className="font-case uppercase tracking-wide text-dossier-paper-dim/50">
                Practice
              </dt>
              <dd>Independent, since before the Yellow Pages had a website</dd>
            </div>
            <div className="flex justify-between border-b border-dossier-rule/30 pb-2 sm:justify-start sm:gap-3">
              <dt className="font-case uppercase tracking-wide text-dossier-paper-dim/50">
                Based in
              </dt>
              <dd>Chicago, Illinois</dd>
            </div>
            <div className="flex justify-between border-b border-dossier-rule/30 pb-2 sm:justify-start sm:gap-3">
              <dt className="font-case uppercase tracking-wide text-dossier-paper-dim/50">
                Consults with
              </dt>
              <dd>CPD Special Investigations, on referral</dd>
            </div>
            <div className="flex justify-between border-b border-dossier-rule/30 pb-2 sm:justify-start sm:gap-3">
              <dt className="font-case uppercase tracking-wide text-dossier-paper-dim/50">
                Will not do
              </dt>
              <dd>Love Potions, Endless Purses, Parties, Other Entertainment</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-t border-grimoire-accent/20 bg-grimoire-deep/30 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="case-label text-grimoire-accent">Not Alone in This</div>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-dossier-paper sm:text-4xl">
            The People I Trust With the Hard Cases.
          </h2>
          <p className="mt-4 max-w-2xl text-dossier-paper-dim">
            I do a lot of this alone, but not all of it, and not the parts that
            matter most. These are the people — and the occasional
            non-people — I actually call when a case goes sideways.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div key={member.id} className="group">
                <div className="overflow-hidden bg-dossier-ink/40 shadow-xl">
                  <img
                    src={member.photo}
                    alt={`Personnel photograph of ${member.name}`}
                    className="aspect-[3/4] w-full object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="font-display text-xl font-bold text-dossier-paper">
                    {member.name}
                  </div>
                  <div className="case-label mt-1 text-grimoire-accent">
                    {member.role}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-dossier-paper-dim/85">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
