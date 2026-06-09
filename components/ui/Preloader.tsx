'use client'
import { useEffect, useState } from 'react'

export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setHidden(true), 400)
          return 100
        }
        return Math.min(100, p + Math.random() * 20)
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: '#0B132B',
        opacity: progress >= 100 ? 0 : 1,
        transition: 'opacity 0.4s ease',
        pointerEvents: progress >= 100 ? 'none' : 'all',
      }}
      aria-hidden="true"
    >
      <div className="font-heading text-2xl font-extrabold text-white mb-6 tracking-wide">
        Grand<span style={{ color: 'var(--color-primary)' }}>Pro</span>
      </div>
      <div className="w-48 h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
        <div
          className="h-full rounded-full transition-[width] duration-100"
          style={{ width: `${progress}%`, background: 'var(--color-primary)' }}
        />
      </div>
    </div>
  )
}
