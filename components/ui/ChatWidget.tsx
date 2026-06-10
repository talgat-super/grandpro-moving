'use client'
import { useState } from 'react'
import { MessageCircle, X, Phone, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function ChatWidget() {
  const t = useTranslations('chat')
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-[998] flex flex-col items-end gap-3">
      {open && (
        <div
          className="w-72 rounded-xl overflow-hidden shadow-2xl"
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--color-border)',
            animation: 'fadeUp 0.2s ease forwards',
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center justify-between"
            style={{
              background: 'var(--bg-surface-elevated)',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
                {t('title')}
              </span>
              <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                · {t('online')}
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              aria-label="Закрыть"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3">
            <p className="text-sm text-center mb-4" style={{ color: 'var(--color-text-muted)' }}>
              {t('subtitle')}
            </p>

            <a
              href="https://wa.me/77077097422"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg font-semibold text-sm
                text-white transition-colors cursor-pointer"
              style={{ background: '#25D366' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#20BD5A')}
              onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
            >
              <MessageCircle size={18} />
              {t('whatsapp')}
            </a>

            <a
              href="https://t.me/grandpro_moving"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg font-semibold text-sm
                text-white transition-colors cursor-pointer"
              style={{ background: '#229ED9' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1A8EC3')}
              onMouseLeave={e => (e.currentTarget.style.background = '#229ED9')}
            >
              <Send size={18} />
              {t('telegram')}
            </a>

            <a
              href="tel:+77077097422"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg font-semibold text-sm
                transition-colors cursor-pointer"
              style={{
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            >
              <Phone size={18} />
              {t('phone')}
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={t('trigger')}
        className="w-14 h-14 rounded-full text-white flex items-center justify-center
          shadow-xl cursor-pointer transition-transform duration-200 hover:scale-105"
        style={{ background: 'var(--color-primary)' }}
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  )
}
