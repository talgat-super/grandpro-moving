'use client'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'center' | 'left'
}

export function SectionHeader({ title, subtitle, className, align = 'center' }: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-16 ${align === 'center' ? 'text-center' : ''} ${className ?? ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2
        className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tight mb-4 inline-block relative"
        style={{ color: 'var(--color-text)' }}
      >
        {title}
        <motion.span
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 -bottom-3 block h-1 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '52px', opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              'linear-gradient(90deg, var(--color-primary), var(--color-accent, var(--color-primary-hover)))',
          }}
        />
      </h2>
      {subtitle && (
        <motion.p
          className={`text-lg leading-relaxed mt-7 ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
          style={{ color: 'var(--color-text-muted)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
