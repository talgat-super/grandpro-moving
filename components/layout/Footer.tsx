import { useTranslations } from 'next-intl'

const NAV_LINKS = [
  { href: '#services', label: 'Услуги' },
  { href: '#calculator', label: 'Калькулятор' },
  { href: '#about', label: 'О компании' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contact', label: 'Контакты' },
]

const INSTAGRAM_PATH = 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'

export function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer
      className="pt-16 pb-8"
      style={{
        background: '#060B18',
        color: '#9AA4B2',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl font-extrabold text-white mb-3">
              Grand<span style={{ color: 'var(--color-primary)' }}>Pro</span>
            </p>
            <p className="text-sm leading-relaxed mb-5">{t('tagline')}</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/grandpro_moving"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={INSTAGRAM_PATH} />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h5 className="text-white font-semibold mb-4">{t('links')}</h5>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors cursor-pointer hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h5 className="text-white font-semibold mb-4">{t('contacts')}</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+77001234567" className="hover:text-white transition-colors">
                  +7 (700) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@grandpro.kz" className="hover:text-white transition-colors">
                  info@grandpro.kz
                </a>
              </li>
              <li>пр. Аль-Фараби, 77/7</li>
              <li>Esentai Tower, Алматы</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-white font-semibold mb-4">{t('legal')}</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  {t('terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 text-center text-sm"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          © {year} GrandPro Moving. {t('copyright')}
        </div>
      </div>
    </footer>
  )
}
