import { NavLink, Outlet, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Home', ref: '001' },
  { to: '/services', label: 'Services', ref: '002' },
  { to: '/case-files', label: 'Case Files', ref: '003' },
  { to: '/about', label: 'About', ref: '004' },
  { to: '/contact', label: 'Contact', ref: '005' },
]

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-dossier-ink">
      <header className="sticky top-0 z-[60] border-b border-dossier-rule/60 bg-dossier-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <NavLink to="/" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold tracking-tight text-dossier-paper">
              HARRY DRESDEN
            </span>
            <span className="case-label hidden text-dossier-amber sm:inline">
              Wizard for Hire
            </span>
          </NavLink>

          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `case-label rounded-sm px-3 py-2 transition-colors ${
                    isActive
                      ? 'bg-dossier-amber/15 text-dossier-amber'
                      : 'text-dossier-paper-dim hover:text-dossier-paper'
                  }`
                }
              >
                <span className="mr-1.5 opacity-60">{item.ref}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1" key={location.pathname}>
        <Outlet />
      </main>

      <footer className="border-t border-dossier-rule/60 bg-dossier-ink">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="font-display text-lg font-bold text-dossier-paper">
                HARRY DRESDEN
              </div>
              <p className="mt-2 max-w-xs text-sm text-dossier-paper-dim/80">
                Wizard for hire. Lost items found. Paranormal investigations.
                Consulting. Advice. Reasonable rates.
              </p>
            </div>
            <div>
              <div className="case-label text-dossier-amber">Office</div>
              <p className="mt-2 text-sm text-dossier-paper-dim/80">
                Chicago, Illinois
                <br />
                By appointment — and occasionally not
              </p>
            </div>
            <div>
              <div className="case-label text-dossier-amber">Terms</div>
              <p className="mt-2 text-sm text-dossier-paper-dim/80">
                No Love Potions, Endless Purses,
                <br />
                Parties or Other Entertainment.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-dossier-rule/40 pt-6 font-case text-xs tracking-wide text-dossier-paper-dim/50">
            Atmosphere only — a fan-made tribute to Jim Butcher&rsquo;s The Dresden Files.
            Not affiliated with the author or his publishers.
          </div>
        </div>
      </footer>
    </div>
  )
}
