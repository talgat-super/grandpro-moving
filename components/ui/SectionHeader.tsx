interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'center' | 'left'
}

export function SectionHeader({ title, subtitle, className, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''} ${className ?? ''}`}>
      <h2
        className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tight mb-4 inline-block relative"
        style={{ color: 'var(--color-text)' }}
      >
        {title}
        <span
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 -bottom-3 block h-1 rounded-full"
          style={{
            width: '52px',
            background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent, var(--color-primary-hover)))',
          }}
        />
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed mt-7 ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
          style={{ color: 'var(--color-text-muted)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
