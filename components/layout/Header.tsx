'use client'
import { useEffect, useState } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Sun, Moon, Menu, X, Phone } from 'lucide-react'

const NAV_ITEMS = [
  { key: 'services', href: '#services' },
  { key: 'calculator', href: '#calculator' },
  { key: 'about', href: '#about' },
  { key: 'reviews', href: '#reviews' },
  { key: 'contacts', href: '#contact' },
] as const

export function Header() {
  const t = useTranslations('nav')
  const { theme, setTheme } = useTheme()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <header
      className="fixed z-50 transition-all duration-300"
      style={{
        top: '16px',
        left: '16px',
        right: '16px',
      }}
    >
      <div
        className="max-w-[1280px] mx-auto rounded-2xl transition-all duration-300"
        style={{
          padding: scrolled ? '0.625rem 1.5rem' : '0.875rem 1.5rem',
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--glass-border)',
          boxShadow: scrolled
            ? '0 8px 40px var(--shadow-main), 0 0 0 1px var(--glass-border)'
            : '0 4px 24px rgba(0,0,0,0.12)',
        }}
      >
      <div className="flex items-center justify-between">
        <a href="#" className="font-heading text-2xl font-extrabold tracking-tight">
          Grand<span style={{ color: 'var(--color-primary)' }}>Pro</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map(item => (
            <a
              key={item.key}
              href={item.href}
              className="relative font-medium text-sm group cursor-pointer transition-colors duration-200"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              {t(item.key)}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full transition-[width] duration-200 group-hover:w-full"
                style={{ background: 'var(--color-primary)' }}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <select
            value={locale}
            onChange={e => switchLocale(e.target.value)}
            className="hidden sm:block px-3 py-2 rounded-md text-sm font-semibold cursor-pointer transition-colors"
            style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
            aria-label="Language selector"
          >
            <option value="ru">RU</option>
            <option value="kz">KZ</option>
            <option value="en">EN</option>
          </select>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 rounded-md flex items-center justify-center cursor-pointer transition-colors"
            style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
            aria-label="Toggle theme"
          >
            {mounted ? (theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />) : <span className="w-4 h-4 block" />}
          </button>

          <a
            href="tel:+77001234567"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm
              text-white transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            style={{ background: 'var(--color-primary)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-hover)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-primary)')}
          >
            <Phone size={14} />
            {t('callUs')}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center cursor-pointer"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setMenuOpen(false)}
          style={{ background: 'rgba(0,0,0,0.3)' }}
        />
      )}

      <div
        className="lg:hidden fixed top-0 right-0 h-screen w-72 z-[1001] pt-20 px-6 transition-transform duration-300"
        style={{
          background: 'var(--bg-surface)',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.2)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <nav className="flex flex-col gap-5">
          {NAV_ITEMS.map(item => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold transition-colors cursor-pointer"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              {t(item.key)}
            </a>
          ))}
          <select
            value={locale}
            onChange={e => { switchLocale(e.target.value); setMenuOpen(false) }}
            className="px-3 py-2 rounded-md text-sm font-semibold cursor-pointer mt-2"
            style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
          >
            <option value="ru">RU — Русский</option>
            <option value="kz">KZ — Қазақша</option>
            <option value="en">EN — English</option>
          </select>
          <a
            href="tel:+77001234567"
            className="flex items-center gap-2 px-4 py-3 rounded-lg font-semibold text-center
              justify-center text-white mt-2 cursor-pointer"
            style={{ background: 'var(--color-primary)' }}
          >
            <Phone size={16} />
            +7 700 123-45-67
          </a>
        </nav>
      </div>
    </header>
  )
}
