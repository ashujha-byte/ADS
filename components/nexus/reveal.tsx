'use client'

import { motion } from 'framer-motion'

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-linen-400">
      <span className="text-ruby-soft">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-linen-400/40" />
      {label}
    </p>
  )
}
