import { useCallback, useState } from 'react'
import { CASE_FILES } from '../data/books'
import CaseFolder from '../components/CaseFolder'
import DetectiveBoard, { type BoardPhase } from '../components/DetectiveBoard'
import felt from '../assets/casefiles/felt.webp'

export default function CaseFiles() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [phase, setPhase] = useState<BoardPhase | 'idle'>('idle')
  const [originRect, setOriginRect] = useState<DOMRect | null>(null)

  const openFile = CASE_FILES.find((f) => f.id === openId) ?? null

  const handleOpen = useCallback((id: string, rect: DOMRect) => {
    setOpenId(id)
    setOriginRect(rect)
    setPhase('opening')
  }, [])

  const handleCloseRequest = useCallback(() => {
    setPhase('closing')
  }, [])

  const handleAnimationComplete = useCallback(() => {
    setPhase((prev) => {
      if (prev === 'opening') return 'open'
      // The flown-back cards have reached the folder's spot — let the folders
      // float back into place first; the board keeps them faded in briefly
      // longer, so nothing disappears out from under a folder still settling.
      if (prev === 'closing') return 'restoring'
      if (prev === 'restoring') {
        setOpenId(null)
        setOriginRect(null)
        return 'idle'
      }
      return prev
    })
  }, [])

  return (
    <div className="relative">
      <div
        className="relative overflow-hidden border-b-8 border-desk-felt-dark bg-desk-felt bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(6,15,10,0.55), rgba(6,15,10,0.75)), url(${felt})` }}
      >
        <div
          className="mx-auto max-w-6xl px-6 pb-4 pt-28 transition-opacity duration-500 ease-out"
          style={{ opacity: phase === 'idle' ? 1 : 0 }}
        >
          <div className="case-label text-dossier-amber">Chicago Wizard &middot; Records Room</div>
          <h1 className="mt-3 max-w-2xl font-display text-5xl font-bold leading-[0.95] text-dossier-paper sm:text-6xl">
            The Case Files.
          </h1>
          <p className="mt-5 max-w-xl text-dossier-paper-dim">
            Two decades of casework, seventeen files deep, kept the way I actually keep
            it — which is to say, not very well. Pull a folder to read what I can tell
            you. Some of it is still classified, for both our sakes.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-16 px-6 pb-32 pt-20 sm:grid-cols-3 lg:grid-cols-4">
          {CASE_FILES.map((file, i) => (
            <CaseFolder
              key={file.id}
              file={file}
              index={i}
              isOpen={phase === 'opening' || phase === 'open' || phase === 'closing'}
              isSelected={openId === file.id}
              onOpen={handleOpen}
            />
          ))}
        </div>
      </div>

      {openFile && originRect && phase !== 'idle' && (
        <DetectiveBoard
          file={openFile}
          phase={phase}
          originRect={originRect}
          onCloseRequest={handleCloseRequest}
          onAnimationComplete={handleAnimationComplete}
        />
      )}
    </div>
  )
}
