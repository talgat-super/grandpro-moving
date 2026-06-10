'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronDown } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function FaqSection() {
  const t = useTranslations('faq')
  const [open, setOpen] = useState<number | null>(null)
  const items = t.raw('items') as Array<{ q: string; a: string }>

  return (
    <section className="py-24" style={{ background: 'var(--bg-main)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <div className="max-w-2xl mx-auto space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left
                  transition-colors cursor-pointer"
                style={{ color: 'var(--color-text)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-surface-elevated)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                aria-expanded={open === i}
              >
                <span className="font-heading font-semibold pr-4">{item.q}</span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: 'var(--color-primary)',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '300px' : '0px' }}
              >
                <p
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
