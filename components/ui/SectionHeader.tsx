interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className ?? ''}`}>
      <h2
        className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4 inline-block relative"
        style={{
          '--tw-after-content': '""',
        } as React.CSSProperties}
      >
        <span className="relative">
          {title}
          <span
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 -bottom-2 block w-16 h-1 rounded-full"
            style={{ background: 'var(--color-primary)' }}
          />
        </span>
      </h2>
      {subtitle && (
        <p
          className="text-lg max-w-2xl mx-auto mt-6"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
