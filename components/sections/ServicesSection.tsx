import { useTranslations } from 'next-intl'
import { Home, Building2, Globe, Package, Box, Warehouse } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const SERVICE_ICONS = [Home, Building2, Globe, Package, Box, Warehouse]
const SERVICE_KEYS = ['apartment', 'office', 'international', 'rigging', 'packing', 'storage'] as const

export function ServicesSection() {
  const t = useTranslations('services')

  return (
    <section id="services" className="py-24" style={{ background: 'var(--bg-main)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_KEYS.map((key, i) => {
            const Icon = SERVICE_ICONS[i]
            return (
              <div
                key={key}
                className="group relative flex flex-col overflow-hidden rounded-xl p-8
                  transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--color-border)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 15px 35px var(--shadow-main)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-1 origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                  style={{ background: 'var(--color-primary)' }}
                />

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    background: 'var(--bg-surface-elevated)',
                    color: 'var(--color-primary)',
                  }}
                >
                  <Icon size={28} />
                </div>

                <h3 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                  {t(`items.${key}.title`)}
                </h3>

                <p className="text-sm leading-relaxed flex-grow mb-5" style={{ color: 'var(--color-text-muted)' }}>
                  {t(`items.${key}.desc`)}
                </p>

                <span
                  className="text-sm font-semibold flex items-center gap-1 transition-[gap] duration-200 group-hover:gap-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {t('learnMore')}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
