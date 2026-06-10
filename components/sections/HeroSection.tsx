'use client'
import { useTranslations } from 'next-intl'
import { ArrowRight, ChevronDown, Shield, Truck, Users, Award } from 'lucide-react'
import { QuickForm } from '@/components/forms/QuickForm'

export function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section
      className="min-h-screen flex items-center relative pt-24 pb-16 overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-text-muted) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.04,
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

          {/* Left: Content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{
                background: 'rgba(var(--color-primary-rgb, 3,105,161), 0.1)',
                border: '1px solid var(--color-primary)',
                color: 'var(--color-primary)',
              }}
            >
              <Award size={14} />
              {t('badge')}
            </div>

            <h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              {t('title')}{' '}
              <span style={{ color: 'var(--color-primary)' }}>{t('titleAccent')}</span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {t('subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold
                  text-white transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{ background: 'var(--color-primary)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-hover)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-primary)')}
              >
                {t('ctaPrimary')}
                <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold
                  transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                }}
              >
                {t('ctaSecondary')}
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8"
              style={{ borderTop: '1px solid var(--color-border)' }}
            >
              {[
                { icon: Users, value: '12 000+', label: t('stats.clients') },
                { icon: Truck, value: '10', label: t('stats.years') },
                { icon: Truck, value: '47', label: t('stats.trucks') },
                { icon: Shield, value: '100%', label: t('stats.guarantee') },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-heading text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    {stat.value}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick form */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div
              className="p-8 rounded-xl shadow-2xl"
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(16px)',
                border: '1px solid var(--glass-border)',
              }}
            >
              <h3 className="font-heading text-xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                {t('formTitle')}
              </h3>
              <QuickForm />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer
          transition-colors"
        style={{ color: 'var(--color-text-muted)' }}
        aria-label="Scroll down"
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
