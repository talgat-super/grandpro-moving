'use client'
import { useEffect, useState } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Sun, Moon, Menu, X, Phone, Globe, ChevronDown, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { key: 'services', href: '#services' },
  { key: 'calculator', href: '#calculator' },
  { key: 'about', href: '#about' },
  { key: 'reviews', href: '#reviews' },
  { key: 'contacts', href: '#contact' },
] as const

const LOCALES = [
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'kz', label: 'Қазақша', short: 'KZ' },
  { code: 'en', label: 'English', short: 'EN' },
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
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!langOpen) return
    const handler = (e: MouseEvent) => {
      if (!(e.target as Element).closest('#lang-switcher')) setLangOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [langOpen])

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
    setLangOpen(false)
  }

  const currentLocale = LOCALES.find(l => l.code === locale)

  return (
    <header
      className="fixed z-50 transition-all duration-300"
      style={{ top: '16px', left: '16px', right: '16px' }}
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
            {/* ── Language Switcher ── */}
            <div id="lang-switcher" className="relative hidden sm:block">
              <motion.button
                onClick={() => setLangOpen(v => !v)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-bold cursor-pointer"
                style={{
                  background: langOpen
                    ? 'var(--active-badge)'
                    : 'var(--bg-surface-elevated)',
                  border: langOpen
                    ? '1.5px solid var(--color-primary)'
                    : '1.5px solid var(--color-border)',
                  color: 'var(--color-text)',
                  boxShadow: langOpen ? '0 0 0 3px rgba(14,165,233,0.13)' : 'none',
                  transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
                }}
                aria-label="Language selector"
                aria-expanded={langOpen}
              >
                <Globe size={13} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '12px', letterSpacing: '0.05em' }}>
                  {currentLocale?.short}
                </span>
                <motion.span
                  animate={{ rotate: langOpen ? 180 : 0 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  className="flex items-center"
                >
                  <ChevronDown size={12} style={{ color: 'var(--color-text-muted)' }} />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -12, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.94 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full mt-3 right-0 min-w-[168px] rounded-2xl overflow-hidden z-[200]"
                    style={{
                      background: 'var(--glass-bg)',
                      backdropFilter: 'blur(28px)',
                      WebkitBackdropFilter: 'blur(28px)',
                      border: '1px solid var(--glass-border)',
                      boxShadow: '0 20px 56px var(--shadow-main), 0 0 0 1px var(--glass-border)',
                    }}
                  >
                    {LOCALES.map((lang, i) => {
                      const isActive = locale === lang.code
                      return (
                        <motion.button
                          key={lang.code}
                          onClick={() => switchLocale(lang.code)}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.18 }}
                          whileHover={{ x: 3 }}
                          className="flex items-center gap-3 w-full px-4 py-3 text-sm cursor-pointer"
                          style={{
                            background: isActive ? 'var(--active-badge)' : 'transparent',
                            color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                            borderTop: i > 0 ? '1px solid var(--color-border)' : 'none',
                            transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => {
                            if (!isActive)
                              (e.currentTarget as HTMLElement).style.background =
                                'var(--bg-surface-elevated)'
                          }}
                          onMouseLeave={e => {
                            if (!isActive)
                              (e.currentTarget as HTMLElement).style.background = 'transparent'
                          }}
                        >
                          <span
                            className="w-7 h-7 rounded-xl flex items-center justify-center text-[11px] font-extrabold shrink-0"
                            style={{
                              background: isActive
                                ? 'var(--gradient-primary)'
                                : 'var(--bg-surface-elevated)',
                              color: isActive ? 'white' : 'var(--color-text-muted)',
                              letterSpacing: '0.04em',
                            }}
                          >
                            {lang.short}
                          </span>
                          <span className="font-medium flex-grow text-left">{lang.label}</span>
                          {isActive && (
                            <motion.span
                              initial={{ scale: 0, rotate: -45 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                              className="flex items-center"
                            >
                              <Check size={14} style={{ color: 'var(--color-primary)' }} />
                            </motion.span>
                          )}
                        </motion.button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Theme Toggle ── */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              whileHover={{ scale: 1.1, rotate: 8 }}
              whileTap={{ scale: 0.9, rotate: -8 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer"
              style={{
                background: 'var(--bg-surface-elevated)',
                border: '1.5px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {mounted ? (
                  <motion.span
                    key={theme ?? 'init'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center"
                  >
                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                  </motion.span>
                ) : (
                  <span className="w-4 h-4 block" />
                )}
              </AnimatePresence>
            </motion.button>

            {/* ── Call CTA ── */}
            <motion.a
              href="tel:+77077097422"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm text-white cursor-pointer"
              style={{ background: 'var(--color-primary)', transition: 'background 0.2s' }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLElement).style.background = 'var(--color-primary-hover)')
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLElement).style.background = 'var(--color-primary)')
              }
            >
              <Phone size={14} />
              {t('callUs')}
            </motion.a>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center cursor-pointer"
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center"
                >
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[-1]"
            onClick={() => setMenuOpen(false)}
            style={{ background: 'rgba(0,0,0,0.35)' }}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile drawer ── */}
      <motion.div
        initial={false}
        animate={{ x: menuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 320, damping: 32 }}
        className="lg:hidden fixed top-0 right-0 h-screen w-72 z-[1001] pt-20 px-6"
        style={{
          background: 'var(--bg-surface)',
          boxShadow: '-10px 0 40px rgba(0,0,0,0.25)',
        }}
      >
        <nav className="flex flex-col gap-5">
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item.key}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : 24 }}
              transition={{ delay: menuOpen ? i * 0.055 + 0.08 : 0 }}
              className="text-lg font-semibold transition-colors cursor-pointer"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--color-primary)')
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)')
              }
            >
              {t(item.key)}
            </motion.a>
          ))}

          {/* Language pills in mobile */}
          <div className="flex gap-2 pt-2">
            {LOCALES.map(lang => (
              <button
                key={lang.code}
                onClick={() => { switchLocale(lang.code); setMenuOpen(false) }}
                className="flex-1 py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-200"
                style={{
                  background:
                    locale === lang.code ? 'var(--gradient-primary)' : 'var(--bg-surface-elevated)',
                  color: locale === lang.code ? 'white' : 'var(--color-text-muted)',
                  border: `1.5px solid ${locale === lang.code ? 'transparent' : 'var(--color-border)'}`,
                }}
              >
                {lang.short}
              </button>
            ))}
          </div>

          <a
            href="tel:+77077097422"
            className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-center justify-center text-white mt-2 cursor-pointer"
            style={{ background: 'var(--color-primary)' }}
          >
            <Phone size={16} />
            +7 707 709-74-22
          </a>
        </nav>
      </motion.div>
    </header>
  )
}
