'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { formatPrice } from '@/lib/utils'
import { Clock } from 'lucide-react'

const BASE_PRICES = { apartment: 25000, office: 35000, international: 80000, rigging: 45000 }
const OPTION_PRICES = { lift: 8000, pack: 15000, assemble: 10000, truck: 20000 }

type MoveType = keyof typeof BASE_PRICES

export function CalculatorSection() {
  const t = useTranslations('calculator')
  const [moveType, setMoveType] = useState<MoveType>('apartment')
  const [distance, setDistance] = useState(10)
  const [furniture, setFurniture] = useState(20)
  const [workers, setWorkers] = useState(2)
  const [options, setOptions] = useState({ lift: false, pack: false, assemble: false, truck: false })

  const toggleOption = (key: keyof typeof options) =>
    setOptions(o => ({ ...o, [key]: !o[key] }))

  const basePrice = BASE_PRICES[moveType]
  const distPrice = distance * 500
  const furniPrice = furniture * 300
  const workersPrice = workers * 5000
  const optsTotal = Object.entries(options)
    .filter(([, v]) => v)
    .reduce((sum, [k]) => sum + OPTION_PRICES[k as keyof typeof OPTION_PRICES], 0)
  const total = basePrice + distPrice + furniPrice + workersPrice + optsTotal
  const hours = Math.ceil(furniture / 10 + distance / 30 + workers * 0.5)

  const inputBorderStyle = {
    background: 'var(--bg-main)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text)',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    width: '100%',
    outline: 'none',
  } as React.CSSProperties

  return (
    <section id="calculator" className="py-16 md:py-28" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--color-border)', background: 'var(--bg-surface)', boxShadow: '0 24px 64px var(--shadow-main)' }}
        >
          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">

            {/* Inputs */}
            <div className="p-8 md:p-10">
              <h3
                className="font-heading font-bold mb-5 pb-3"
                style={{
                  color: 'var(--color-primary)',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                {t('moveType')}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {(['apartment', 'office', 'international', 'rigging'] as MoveType[]).map(type => (
                  <button
                    key={type}
                    onClick={() => setMoveType(type)}
                    className="py-2.5 px-3 rounded-lg text-sm font-semibold border transition-all cursor-pointer"
                    style={{
                      background: moveType === type ? 'var(--color-primary)' : 'var(--bg-surface-elevated)',
                      color: moveType === type ? 'white' : 'var(--color-text)',
                      border: moveType === type ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                    }}
                  >
                    {t(type)}
                  </button>
                ))}
              </div>

              {[
                { label: t('distance'), value: distance, setValue: setDistance, min: 1, max: 200, unit: 'км' },
                { label: t('furniture'), value: furniture, setValue: setFurniture, min: 5, max: 100, unit: 'м³' },
                { label: t('workers'), value: workers, setValue: setWorkers, min: 1, max: 8, unit: 'чел' },
              ].map(s => (
                <div key={s.label} className="mb-6">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span style={{ color: 'var(--color-text)' }}>{s.label}</span>
                    <span className="font-bold" style={{ color: 'var(--color-primary)' }}>
                      {s.value} {s.unit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={s.min}
                    max={s.max}
                    value={s.value}
                    onChange={e => s.setValue(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{ background: 'var(--bg-main)', accentColor: 'var(--color-primary)' }}
                  />
                </div>
              ))}

              <h3
                className="font-heading font-bold mb-4 pb-3"
                style={{
                  color: 'var(--color-primary)',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                {t('options')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { key: 'lift', label: t('optLift') },
                  { key: 'pack', label: t('optPack') },
                  { key: 'assemble', label: t('optAssemble') },
                  { key: 'truck', label: t('optTruck') },
                ].map(opt => (
                  <label
                    key={opt.key}
                    className="flex items-center gap-3 p-3.5 rounded-lg transition-colors cursor-pointer"
                    style={{
                      background: 'var(--bg-main)',
                      border: options[opt.key as keyof typeof options]
                        ? '1px solid var(--color-primary)'
                        : '1px solid var(--color-border)',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={options[opt.key as keyof typeof options]}
                      onChange={() => toggleOption(opt.key as keyof typeof options)}
                      className="w-4 h-4 cursor-pointer"
                      style={{ accentColor: 'var(--color-primary)' }}
                    />
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div
              className="p-8 md:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l"
              style={{
                background: 'var(--bg-surface-elevated)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div>
                <h3 className="font-heading text-xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                  {t('estimateTitle')}
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    { label: t('basePrice'), value: basePrice },
                    { label: t('distancePrice'), value: distPrice },
                    { label: t('furniture_label'), value: furniPrice },
                    { label: t('workers_label'), value: workersPrice },
                    ...(optsTotal > 0 ? [{ label: t('extra'), value: optsTotal }] : []),
                  ].map(item => (
                    <div key={item.label} className="flex justify-between text-sm">
                      <span style={{ color: 'var(--color-text-muted)' }}>{item.label}</span>
                      <span className="font-semibold" style={{ color: 'var(--color-text)' }}>
                        {formatPrice(item.value)}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="pt-5 mt-2"
                  style={{ borderTop: '2px dashed var(--color-border)' }}
                >
                  <p className="text-sm mb-1" style={{ color: 'var(--color-text-muted)' }}>{t('total')}</p>
                  <p
                    className="font-heading text-4xl font-extrabold tracking-tight"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {formatPrice(total)}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    <Clock size={14} />
                    {t('time')}: ~{hours} {t('hours')}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="#contact"
                  className="block w-full py-3.5 rounded-xl font-bold text-center text-white
                    transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{ background: 'var(--gradient-primary)', boxShadow: '0 4px 16px rgba(14,165,233,0.3)' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 24px rgba(14,165,233,0.5)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(14,165,233,0.3)')}
                >
                  {t('bookBtn')}
                </a>
                <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>
                  {t('disclaimer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
