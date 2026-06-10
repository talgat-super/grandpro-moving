'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Loader2, CheckCircle } from 'lucide-react'

export function QuickForm() {
  const t = useTranslations('hero')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSent(true)
      else setError(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    background: 'var(--bg-main)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text)',
    transition: 'border-color 0.2s',
    outline: 'none',
  } as React.CSSProperties

  if (sent) {
    return (
      <div className="text-center py-8">
        <CheckCircle size={48} className="mx-auto mb-4" style={{ color: 'var(--color-primary)' }} />
        <p className="font-semibold text-lg">Спасибо! Перезвоним в течение 15 минут.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        required
        placeholder={t('formName')}
        style={inputStyle}
        onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
        onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
      />
      <input
        name="phone"
        type="tel"
        required
        placeholder={t('formPhone')}
        style={inputStyle}
        onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
        onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
      />
      <select
        name="service"
        style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' } as React.CSSProperties}
        onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
        onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
      >
        <option value="">— {t('formService')} —</option>
        <option value="apartment">Квартирный переезд</option>
        <option value="office">Офисный переезд</option>
        <option value="international">Международный</option>
        <option value="rigging">Такелаж</option>
      </select>
      {error && (
        <p className="text-red-500 text-sm">Ошибка. Позвоните: +7 707 709-74-22</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center
          gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70"
        style={{ background: 'var(--color-primary)' }}
        onMouseEnter={e => !loading && (e.currentTarget.style.background = 'var(--color-primary-hover)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-primary)')}
      >
        {loading && <Loader2 size={16} className="animate-spin" />}
        {t('formSubmit')}
      </button>
    </form>
  )
}
