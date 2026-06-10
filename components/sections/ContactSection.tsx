'use client'
import { useTranslations } from 'next-intl'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactForm } from '@/components/forms/ContactForm'
import { Map2GIS } from '@/components/ui/Map2GIS'

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

            {/* 2GIS Map */}
            <div className="relative">
              <Map2GIS height="340px" />
              <a
                href="https://2gis.kz/almaty/geo/9430030545481524"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                  text-xs font-semibold cursor-pointer transition-all duration-200 z-10"
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  boxShadow: '0 2px 12px var(--shadow-main)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-primary)'
                  el.style.color = 'var(--color-primary)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.color = 'var(--color-text)'
                }}
              >
                <ExternalLink size={11} />
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
