'use client'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/ui/SectionHeader'

const STAT_KEYS = ['clients', 'years', 'trucks', 'guarantee'] as const

export function AboutSection() {
  const t = useTranslations('about')

  return (
    <section id="about" className="py-24" style={{ background: 'var(--bg-main)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAT_KEYS.map(key => (
            <div
              key={key}
              className="rounded-xl p-8 text-center transition-shadow hover:shadow-md"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <p
                className="font-heading text-5xl font-extrabold mb-2 tracking-tight"
                style={{ color: 'var(--color-primary)' }}
              >
                {t(`stats.${key}.value`)}
              </p>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                {t(`stats.${key}.label`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
