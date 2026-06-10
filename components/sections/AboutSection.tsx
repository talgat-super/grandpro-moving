'use client'
import { useTranslations } from 'next-intl'
import { Users, Clock, Truck, Shield } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const STAT_ICONS = {
  clients: Users,
  years: Clock,
  trucks: Truck,
  guarantee: Shield,
} as const

const STAT_KEYS = ['clients', 'years', 'trucks', 'guarantee'] as const

export function AboutSection() {
  const t = useTranslations('about')

  return (
    <section id="about" className="py-16 md:py-28" style={{ background: 'var(--bg-main)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAT_KEYS.map(key => {
            const Icon = STAT_ICONS[key]
            return (
              <div
                key={key}
                className="group rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--color-border)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)'
                  e.currentTarget.style.boxShadow = '0 12px 36px var(--shadow-main)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'var(--active-badge)',
                    color: 'var(--color-primary)',
                  }}
                >
                  <Icon size={24} />
                </div>
                <p
                  className="font-heading text-4xl font-extrabold mb-2 tracking-tight"
                  style={{
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {t(`stats.${key}.value`)}
                </p>
                <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                  {t(`stats.${key}.label`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
