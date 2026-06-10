const BRANDS = [
  'Kaspi Bank', 'Halyk Bank', 'Beeline KZ', 'Tele2 KZ',
  'Freedom Finance', 'BTS Digital', 'KazMunayGas', 'Air Astana',
  'KEGOC', 'Samruk-Kazyna', 'Esentai Mall', 'Prime Plaza',
  'BI Group', 'BAStau',
]

export function BrandsSection() {
  const doubled = [...BRANDS, ...BRANDS]

  return (
    <div
      className="py-10 overflow-hidden relative"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--bg-main), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--bg-main), transparent)' }}
      />

      <div
        className="flex animate-ticker"
        style={{ width: `calc(240px * ${doubled.length})` }}
      >
        {doubled.map((brand, i) => (
          <div
            key={i}
            className="w-60 flex items-center justify-center font-heading font-bold text-xl
              transition-opacity duration-300 cursor-default select-none"
            style={{
              color: 'var(--color-text-muted)',
              opacity: 0.4,
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.4')}
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  )
}
