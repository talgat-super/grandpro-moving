'use client'
import { useEffect } from 'react'

export function ScrollProgress() {
  useEffect(() => {
    const el = document.getElementById('scroll-progress')
    if (!el) return

    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      el.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%'
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return <div id="scroll-progress" aria-hidden="true" />
}
