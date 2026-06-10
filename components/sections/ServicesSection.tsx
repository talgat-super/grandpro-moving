'use client'
import { useTranslations } from 'next-intl'
import { Home, Building2, Globe, Package, Box, Warehouse } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const SERVICE_ICONS = [Home, Building2, Globe, Package, Box, Warehouse]
const SERVICE_KEYS = ['apartment', 'office', 'international', 'rigging', 'packing', 'storage'] as const

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function ServicesSection() {
  const t = useTranslations('services')

  return (
    <section id="services" className="py-16 md:py-28" style={{ background: 'var(--bg-main)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_KEYS.map((key, i) => {
            const Icon = SERVICE_ICONS[i]
            const num = String(i + 1).padStart(2, '0')
            return (
              <motion.div
                key={key}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="group relative flex flex-col overflow-hidden rounded-2xl p-8
                  transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--color-border)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = '0 20px 48px var(--shadow-main)'
                  el.style.borderColor = 'var(--color-primary)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = 'none'
                  el.style.borderColor = 'var(--color-border)'
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-0.5 origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                  style={{ background: 'var(--gradient-primary)' }}
                />

                {/* Background number */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-4 right-5 font-heading font-extrabold select-none pointer-events-none leading-none"
                  style={{
                    fontSize: '5.5rem',
                    color: 'var(--color-primary)',
                    opacity: 0.06,
                  }}
                >
                  {num}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'var(--active-badge)',
                    color: 'var(--color-primary)',
                    border: '1px solid var(--color-primary)',
                    borderOpacity: 0.3,
                  }}
                >
                  <Icon size={26} />
                </div>

                <h3 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                  {t(`items.${key}.title`)}
                </h3>

                <p
                  className="text-sm leading-relaxed flex-grow mb-6"
                  style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}
                >
                  {t(`items.${key}.desc`)}
                </p>

                <span
                  className="inline-flex items-center gap-1.5 text-sm font-bold transition-[gap] duration-200 group-hover:gap-2.5"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {t('learnMore')}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
