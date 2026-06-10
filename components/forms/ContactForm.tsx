'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Loader2, CheckCircle } from 'lucide-react'

export function ContactForm() {
  const t = useTranslations('contact.form')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) form.reset()
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const fieldStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    background: 'var(--bg-main)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text)',
    outline: 'none',
    transition: 'border-color 0.2s',
  } as React.CSSProperties

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--color-primary)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--color-border)'
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            className="block text-sm font-medium mb-1.5"
            htmlFor="cf-name"
            style={{ color: 'var(--color-text)' }}
          >
            {t('name')}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            style={fieldStyle}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1.5"
            htmlFor="cf-phone"
            style={{ color: 'var(--color-text)' }}
          >
            {t('phone')}
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            style={fieldStyle}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
      </div>

      <div>
        <label
          className="block text-sm font-medium mb-1.5"
          htmlFor="cf-service"
          style={{ color: 'var(--color-text)' }}
        >
          {t('service')}
        </label>
        <select
          id="cf-service"
          name="service"
          style={{ ...fieldStyle, cursor: 'pointer', appearance: 'none' } as React.CSSProperties}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <option value="">{t('servicePlaceholder')}</option>
          <option value="apartment">Квартирный переезд</option>
          <option value="office">Офисный переезд</option>
          <option value="international">Международный</option>
          <option value="rigging">Такелаж</option>
          <option value="packing">Упаковка</option>
          <option value="storage">Хранение</option>
        </select>
      </div>

      <div>
        <label
          className="block text-sm font-medium mb-1.5"
          htmlFor="cf-message"
          style={{ color: 'var(--color-text)' }}
        >
          {t('message')}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          placeholder={t('messagePlaceholder')}
          style={{ ...fieldStyle, resize: 'vertical' } as React.CSSProperties}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-2 text-emerald-500 font-medium text-sm">
          <CheckCircle size={16} />
          {t('success')}
        </div>
      )}
      {status === 'error' && (
        <p className="text-red-500 font-medium text-sm">{t('error')}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-lg font-semibold text-white flex items-center
          justify-center gap-2 cursor-pointer transition-all duration-200
          hover:-translate-y-0.5 disabled:opacity-70"
        style={{ background: 'var(--color-primary)' }}
        onMouseEnter={e => !loading && (e.currentTarget.style.background = 'var(--color-primary-hover)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-primary)')}
      >
        {loading && <Loader2 size={16} className="animate-spin" />}
        {loading ? t('sending') : t('submit')}
      </button>
    </form>
  )
}
