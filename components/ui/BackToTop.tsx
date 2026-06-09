'use client'
import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', toggle, { passive: true })
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Наверх"
      className="fixed bottom-8 left-8 z-[999] w-12 h-12 rounded-full flex items-center justify-center
        shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--color-primary)',
        color: 'white',
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
      }}
    >
      <ChevronUp size={20} />
    </button>
  )
}
