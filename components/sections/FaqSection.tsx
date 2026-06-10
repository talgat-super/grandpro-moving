'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Plus, Minus } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function FaqSection() {
  const t = useTranslations('faq')
  const [open, setOpen] = useState<number | null>(null)
  const items = t.raw('items') as Array<{ q: string; a: string }>

  return (
    <section className="py-16 md:py-28" style={{ background: 'var(--bg-main)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <div className="max-w-2xl mx-auto space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl transition-all duration-200"
              style={{
                background: 'var(--bg-surface)',
                border: open === i ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                boxShadow: open === i ? '0 4px 20px var(--shadow-main)' : 'none',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="font-heading font-semibold pr-4" style={{ color: 'var(--color-text)' }}>
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: open === i ? 'var(--color-primary)' : 'var(--active-badge)',
                    color: open === i ? 'white' : 'var(--color-primary)',
                  }}
                >
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '300px' : '0px' }}
              >
                <p
                  className="px-6 pb-6 text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}
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
