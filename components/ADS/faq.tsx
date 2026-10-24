'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { faqs } from '@/lib/site'
import { Reveal } from './reveal'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" className="relative overflow-hidden bg-[#f9f6f0] px-5 py-24 sm:px-8 md:py-36 nav:px-10">
      {/* Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-32 top-1/3 size-96 rounded-full bg-[#8b1d34]/[0.035] blur-3xl" 
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        {/* Left Column: Heading & Context */}
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-[#8b1d34]/20 bg-[#8b1d34]/[0.05] px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-[#8b1d34] uppercase">
          
            <span className="h-1 w-1 rounded-full bg-[#8b1d34]" />
            <span>Inquiries</span>
          </div>

          <h2 className="mt-8 text-balance font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[#160408] sm:text-5xl lg:text-6xl">
            Questions,{' '}
            <span className="italic font-medium text-[#8b1d34] underline decoration-[#8b1d34]/30 underline-offset-8">
              answered
            </span>
            .
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#5e4b4f] sm:text-base">
            Everything you need to know about our sprints, engineering standards, and working model. Can&apos;t find what you&apos;re looking for? Message our team directly.
          </p>

          <div className="mt-8">
            <a
              href="https://wa.me/919572497103?text=Hi%20Nexus%2C%20I%20have%20a%20question%20regarding%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#8b1d34]/30 bg-white px-6 py-2.5 text-xs font-semibold tracking-wide text-[#160408] shadow-sm transition-all duration-300 hover:border-[#8b1d34] hover:bg-[#8b1d34] hover:text-[#f9f6f0] sm:text-sm"
            >
              <span>Ask Directly</span>
              <span className="text-[#8b1d34] group-hover:text-white">↗</span>
            </a>
          </div>
        </Reveal>

        {/* Right Column: FAQ Accordion List */}
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4">
            {faqs.map((f, i) => {
              const isOpen = open === i
              const panelId = `${baseId}-panel-${i}`
              const buttonId = `${baseId}-button-${i}`

              return (
                <div
                  key={f.q}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-[#8b1d34]/40 bg-white shadow-[0_8px_30px_rgba(139,29,52,0.08)]'
                      : 'border-[#160408]/10 bg-white/70 hover:border-[#8b1d34]/25 hover:bg-white'
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 p-6 text-left sm:p-7"
                    >
                      <span className="font-serif text-xl font-medium tracking-tight text-[#160408] sm:text-2xl">
                        {f.q}
                      </span>
                      <span
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:size-10 ${
                          isOpen
                            ? 'rotate-45 border-[#8b1d34] bg-[#8b1d34] text-[#f9f6f0]'
                            : 'border-[#160408]/15 bg-[#f9f6f0] text-[#160408]'
                        }`}
                      >
                        <Plus className="size-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#160408]/5 px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                          <p className="max-w-2xl text-sm leading-relaxed text-[#5e4b4f] sm:text-base">
                            {f.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}