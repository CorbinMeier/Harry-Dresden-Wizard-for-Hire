import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { CaseFile } from '../data/books'
import { EVIDENCE_PHOTOS } from '../data/evidencePhotos'

export type BoardPhase = 'opening' | 'open' | 'closing' | 'restoring'

interface DetectiveBoardProps {
  file: CaseFile
  phase: BoardPhase
  originRect: DOMRect
  onCloseRequest: () => void
  onAnimationComplete: () => void
}

interface AnchorSpec {
  id: string
  x: number
  y: number
  rotate: number
  width: number
}

// Left column, stacked top to bottom: photo, title, intake. Center: the case summary. Right: classified notes.
const PHOTO: AnchorSpec = { id: 'photo', x: 19, y: 14, rotate: -4, width: 150 }
const TITLE: AnchorSpec = { id: 'title', x: 19, y: 35, rotate: 2, width: 230 }
const INTAKE: AnchorSpec = { id: 'intake', x: 19, y: 58, rotate: -3, width: 220 }
const SUMMARY: AnchorSpec = { id: 'summary', x: 46, y: 50, rotate: -1.5, width: 320 }
const REDACTED: AnchorSpec[] = [
  { id: 'r0', x: 80, y: 18, rotate: 4, width: 210 },
  { id: 'r1', x: 83, y: 50, rotate: -5, width: 210 },
  { id: 'r2', x: 80, y: 82, rotate: 3, width: 210 },
]

const STRINGS: [string, string][] = [
  ['summary', 'photo'],
  ['summary', 'title'],
  ['summary', 'intake'],
  ['summary', 'r0'],
  ['summary', 'r1'],
  ['summary', 'r2'],
]

const STAGGER_MS = 70
const FLIGHT_MS = 1000
// Cards sit still at the folder's spot for this long — enough time for the
// folders' own 0.6s float-back transition to finish — before fading away.
const RESTORE_DELAY_MS = 550
const RESTORE_FADE_MS = 200
const RESTORE_TOTAL_MS = RESTORE_DELAY_MS + RESTORE_FADE_MS

export default function DetectiveBoard({
  file,
  phase,
  originRect,
  onCloseRequest,
  onAnimationComplete,
}: DetectiveBoardProps) {
  const boardRef = useRef<HTMLDivElement>(null)
  const [boardRect, setBoardRect] = useState<DOMRect | null>(null)
  const [atBoard, setAtBoard] = useState(false)
  const pinRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const [pinPoints, setPinPoints] = useState<Record<string, { x: number; y: number }>>({})

  useLayoutEffect(() => {
    function measure() {
      if (boardRef.current) setBoardRect(boardRef.current.getBoundingClientRect())
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Pin position = the center of the actual rendered pin marker, measured
  // directly from its own DOM node once cards have landed — not derived or
  // approximated from the card's bounding box.
  useLayoutEffect(() => {
    function measurePins() {
      const next: Record<string, { x: number; y: number }> = {}
      for (const [id, el] of Object.entries(pinRefs.current)) {
        if (!el) continue
        const rect = el.getBoundingClientRect()
        next[id] = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      }
      setPinPoints(next)
    }
    if (phase === 'open') {
      measurePins()
      window.addEventListener('resize', measurePins)
      return () => window.removeEventListener('resize', measurePins)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'opening') {
      setAtBoard(false)
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => setAtBoard(true))
        return () => cancelAnimationFrame(raf2)
      })
      const t = setTimeout(onAnimationComplete, FLIGHT_MS + STAGGER_MS * 6 + 60)
      return () => {
        cancelAnimationFrame(raf1)
        clearTimeout(t)
      }
    }
    if (phase === 'open') {
      setAtBoard(true)
    }
    if (phase === 'closing') {
      setAtBoard(false)
      const t = setTimeout(onAnimationComplete, FLIGHT_MS + STAGGER_MS * 6 + 60)
      return () => clearTimeout(t)
    }
    if (phase === 'restoring') {
      const t = setTimeout(onAnimationComplete, RESTORE_TOTAL_MS)
      return () => clearTimeout(t)
    }
  }, [phase, onAnimationComplete])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && phase === 'open') onCloseRequest()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, onCloseRequest])

  if (!boardRect) {
    return <div ref={boardRef} className="pointer-events-none fixed left-1/2 top-1/2 h-[min(880px,86vh)] w-[min(1120px,94vw)] -translate-x-1/2 -translate-y-1/2" />
  }

  const originX = originRect.left + originRect.width / 2
  const originY = originRect.top + originRect.height * 0.32

  function endPixel(a: AnchorSpec) {
    return {
      x: boardRect!.left + (a.x / 100) * boardRect!.width,
      y: boardRect!.top + (a.y / 100) * boardRect!.height,
    }
  }

  const items = [PHOTO, TITLE, INTAKE, SUMMARY, ...REDACTED]

  // While cards are flying back to the folder (or sitting there fading), drop
  // below the folders' own z-30 so they visibly tuck under the folder cover
  // instead of floating on top of it.
  const boardZIndex = phase === 'closing' || phase === 'restoring' ? 'z-20' : 'z-50'

  return (
    <div className={`fixed inset-0 ${boardZIndex}`}>
      <div
        ref={boardRef}
        className="pointer-events-none fixed left-1/2 top-1/2 h-[min(880px,86vh)] w-[min(1120px,94vw)] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, rgba(90,60,30,0.35), transparent 60%), radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)',
          backgroundSize: 'auto, 4px 4px',
        }}
      />

      <button
        type="button"
        onClick={onCloseRequest}
        disabled={phase !== 'open'}
        className="fixed right-6 top-24 z-20 flex items-center gap-2 rounded-sm border border-dossier-paper/25 bg-dossier-ink/70 px-4 py-2 font-case text-xs uppercase tracking-wide text-dossier-paper transition-opacity hover:border-dossier-amber hover:text-dossier-amber"
        style={{ opacity: phase === 'open' ? 1 : 0, transition: 'opacity 300ms ease' }}
      >
        Close file &times;
      </button>

      {/* Red string, pin to pin — drawn only once the pages have landed and been measured */}
      <svg className="pointer-events-none fixed inset-0 h-full w-full" style={{ opacity: phase === 'open' ? 1 : 0, transition: 'opacity 350ms ease 200ms' }}>
        {STRINGS.map(([aId, bId], i) => {
          const p1 = pinPoints[aId]
          const p2 = pinPoints[bId]
          if (!p1 || !p2) return null
          return (
            <line
              key={i}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="var(--color-string-red)"
              strokeWidth="2"
              style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.5))' }}
            />
          )
        })}
      </svg>

      {items.map((anchor, i) => {
        const end = endPixel(anchor)
        const x = atBoard ? end.x : originX
        const y = atBoard ? end.y : originY
        const rotate = atBoard ? anchor.rotate : restRotateForFolder(i)
        const scale = atBoard ? 1 : 0.32
        const delay = atBoard ? i * STAGGER_MS : (items.length - i) * STAGGER_MS * 0.6

        const style: React.CSSProperties = {
          position: 'fixed',
          left: 0,
          top: 0,
          width: anchor.width,
          transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rotate}deg) scale(${scale})`,
          opacity: phase === 'restoring' ? 0 : 1,
          transition:
            phase === 'restoring'
              ? `opacity ${RESTORE_FADE_MS}ms ease ${RESTORE_DELAY_MS}ms`
              : `transform ${FLIGHT_MS}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          zIndex: 10 + i,
        }

        const setPinRef = (el: HTMLDivElement | null) => {
          pinRefs.current[anchor.id] = el
        }

        if (anchor.id === 'photo') {
          return (
            <div key={anchor.id} style={style} className="bg-white p-2 pb-5 shadow-2xl">
              <Pin pinRef={setPinRef} />
              <img src={EVIDENCE_PHOTOS[file.photo]} alt="" className="h-32 w-full object-cover" />
            </div>
          )
        }

        return (
          <div key={anchor.id} style={style} className="bg-[#f2ead6] p-4 shadow-2xl">
            <Pin pinRef={setPinRef} />
            {anchor.id === 'title' && (
              <>
                <div className="case-label text-dossier-amber">
                  Case No. {String(file.number).padStart(2, '0')} &middot; {file.year}
                </div>
                <div className="font-display text-2xl font-bold text-dossier-ink">{file.title}</div>
                <div className="mt-1 font-case text-[0.65rem] uppercase tracking-wide text-dossier-ink/50">
                  Status: {file.status}
                </div>
              </>
            )}
            {anchor.id === 'intake' && (
              <>
                <div className="case-label text-dossier-amber">Intake</div>
                <p className="mt-1 text-sm text-dossier-ink/80">{file.intake}</p>
              </>
            )}
            {anchor.id === 'summary' && (
              <>
                <div className="case-label text-dossier-amber">Case Summary</div>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-dossier-ink/85">{file.summary}</p>
              </>
            )}
            {anchor.id.startsWith('r') && (
              <>
                <div className="case-label text-string-red">Classified</div>
                <p className="mt-1 text-sm text-dossier-ink/80">
                  {file.redacted[Number(anchor.id.slice(1))]}
                </p>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

function restRotateForFolder(i: number) {
  return i % 2 === 0 ? -6 : 6
}

function Pin({ pinRef }: { pinRef: (el: HTMLDivElement | null) => void }) {
  return (
    <div
      ref={pinRef}
      className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-string-red shadow-[0_2px_3px_rgba(0,0,0,0.5)]"
    />
  )
}
