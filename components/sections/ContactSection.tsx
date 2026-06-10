'use client'
import { useTranslations } from 'next-intl'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactForm } from '@/components/forms/ContactForm'

export function ContactSection() {
  const t = useTranslations('contact')

  const contactItems = [
    { icon: Phone, label: t('phone'), value: '+7 (700) 123-45-67', href: 'tel:+77001234567' },
    { icon: Mail, label: t('email'), value: 'info@grandpro.kz', href: 'mailto:info@grandpro.kz' },
    { icon: MapPin, label: t('address'), value: 'пр. Аль-Фараби, 77/7, Esentai Tower, Алматы', href: null },
    { icon: Clock, label: t('hours'), value: t('hoursValue'), href: null },
  ]

  return (
    <section id="contact" className="py-16 md:py-28" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {contactItems.map(item => (
              <div key={item.label} className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-primary)',
                  }}
                >
                  <item.icon size={20} />
                </div>
                <div>
                  <h5 className="font-semibold mb-0.5" style={{ color: 'var(--color-text)' }}>
                    {item.label}
                  </h5>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm transition-colors cursor-pointer"
                      style={{ color: 'var(--color-text-muted)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map mock */}
            <div
              className="w-full h-52 rounded-xl overflow-hidden relative"
              style={{
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  color: 'var(--color-text-muted)',
                }}
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ color: 'var(--color-primary)', animation: 'pulsePin 2s ease-in-out infinite' }}
              >
                <MapPin size={40} fill="currentColor" style={{ opacity: 0.8 }} />
              </div>
              <a
                href="https://2gis.kz/almaty"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md text-xs font-semibold
                  cursor-pointer transition-colors"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              >
                {t('open2gis')}
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-xl p-8"
            style={{
              background: 'var(--bg-main)',
              border: '1px solid var(--color-border)',
            }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
