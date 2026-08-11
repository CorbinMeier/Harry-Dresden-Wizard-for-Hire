import { useEffect, useMemo, useState } from 'react'
import type { CaseFile } from '../data/books'
import { EVIDENCE_PHOTOS } from '../data/evidencePhotos'

interface CaseFolderProps {
  file: CaseFile
  index: number
  isOpen: boolean
  isSelected: boolean
  onOpen: (id: string, rect: DOMRect) => void
}

// Deterministic pseudo-random scatter so the desk looks tossed-together, not gridded
function seededAngle(seed: number, spread: number) {
  const x = Math.sin(seed * 999.7) * 10000
  return ((x - Math.floor(x)) - 0.5) * spread
}

function shooDirection(seed: number) {
  const angle = seededAngle(seed * 3.1, 360) * (Math.PI / 180)
  const distance = 900 + (seed % 3) * 220
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    rotate: seededAngle(seed * 7.7, 140),
  }
}

const PAPER_SHEETS = [
  { inset: 'inset-x-2', hoverClass: 'group-hover:-translate-y-4 group-hover:-rotate-3 group-hover:-translate-x-1.5', z: 'z-0' },
  { inset: 'inset-x-3', hoverClass: 'group-hover:-translate-y-6 group-hover:rotate-2 group-hover:translate-x-2', z: 'z-[1]' },
  { inset: 'inset-x-2.5', hoverClass: 'group-hover:-translate-y-8 group-hover:-rotate-1 group-hover:translate-x-0.5', z: 'z-[2]' },
]

export default function CaseFolder({ file, index, isOpen, isSelected, onOpen }: CaseFolderProps) {
  const restRotate = useMemo(() => seededAngle(index + 1, 7), [index])
  const photoRotate = useMemo(() => seededAngle(index + 11, 10), [index])
  const shoo = useMemo(() => shooDirection(index + 1), [index])

  // Deal the folders onto the desk on first mount instead of popping in at rest
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60 + index * 40)
    return () => clearTimeout(t)
  }, [index])

  let style: React.CSSProperties
  if (!mounted) {
    style = {
      transform: 'translateY(48px) scale(0.92)',
      opacity: 0,
      transition: 'none',
    }
  } else if (isOpen) {
    // The opened folder is emptied (its contents fly to the board) and thrown
    // aside along with every other folder — nothing stays lifted mid-desk.
    style = {
      transform: `translate(${shoo.x}px, ${shoo.y}px) rotate(${shoo.rotate}deg)`,
      opacity: 0,
      pointerEvents: 'none',
      transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease',
    }
  } else {
    style = {
      transform: `rotate(${restRotate}deg)`,
      transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease',
    }
  }

  const contentsHidden = isSelected && isOpen

  return (
    <button
      type="button"
      onClick={(e) => onOpen(file.id, e.currentTarget.getBoundingClientRect())}
      disabled={isOpen}
      className="group relative z-30 aspect-[4/3] w-full cursor-pointer text-left focus:outline-none"
      style={style}
      aria-label={`Open case file: ${file.title}`}
    >
      {/* Paper sheets, fanned — each drifts a different direction on hover */}
      {PAPER_SHEETS.map((sheet, i) => (
        <div
          key={i}
          className={`absolute ${sheet.inset} ${sheet.z} top-0 h-[86%] rounded-sm bg-[#f2ead6] shadow-md transition-all duration-500 ease-out ${sheet.hoverClass} ${contentsHidden ? '!opacity-0 !duration-150' : 'opacity-100'}`}
        >
          {i === PAPER_SHEETS.length - 1 && (
            <div className="space-y-2 p-3 pt-4 opacity-70">
              <div className="h-1.5 w-4/5 bg-dossier-ink/15" />
              <div className="h-1.5 w-3/5 bg-dossier-ink/15" />
              <div className="h-1.5 w-2/3 bg-dossier-ink/15" />
            </div>
          )}
        </div>
      ))}

      {/* Folder body (front flap) — sits above the papers, below the photo */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-[78%] rounded-b-sm rounded-tr-sm bg-manila shadow-xl transition-transform duration-500 ease-out group-hover:translate-y-2"
        style={{
          backgroundImage:
            'linear-gradient(180deg, var(--color-manila) 0%, var(--color-manila-dark) 100%)',
        }}
      >
        {/* Folder tab */}
        <div className="absolute -top-4 left-4 h-4 w-24 rounded-t-sm bg-manila" />
        <div className="flex h-full flex-col justify-end p-3">
          <div className="case-label text-manila-shadow">
            No. {String(file.number).padStart(2, '0')}
          </div>
          <div className="font-display text-base font-bold leading-tight text-dossier-ink">
            {file.title}
          </div>
          <div className="mt-1 font-case text-[0.65rem] uppercase tracking-wide text-manila-shadow">
            {file.status === 'sealed' ? 'Sealed' : 'Closed'} &middot; {file.year}
          </div>
        </div>
      </div>

      {/* Polaroid — pinned to the FRONT of the folder cover, on top of everything.
          Rotation rides a CSS variable (not the transform property) so Tailwind's
          hover translate utility can still compose into the same transform. */}
      <div
        className={`absolute top-[22%] right-2 z-20 h-24 w-20 rotate-[var(--photo-rot)] bg-white p-1.5 pb-4 shadow-lg transition-all duration-500 ease-out group-hover:-translate-y-3 ${contentsHidden ? '!opacity-0 !duration-150' : 'opacity-100'}`}
        style={{ '--photo-rot': `${photoRotate}deg` } as React.CSSProperties}
      >
        <img src={EVIDENCE_PHOTOS[file.photo]} alt="" className="h-full w-full object-cover" />

        {/* Paperclip, biting the top-left corner of the photo itself */}
        <svg
          className="absolute -left-2.5 -top-2.5 h-8 w-8 rotate-[-32deg] text-dossier-paper-dim/80 drop-shadow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M8 9V6a4 4 0 1 1 8 0v10a2.5 2.5 0 0 1-5 0V8" strokeLinecap="round" />
        </svg>
      </div>
    </button>
  )
}
