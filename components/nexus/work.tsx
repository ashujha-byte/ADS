'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { type Project, projects } from '@/lib/site'
import { Reveal, SectionLabel } from './reveal'

const INITIAL = 4

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#160408]/10 bg-[#160408] shadow-[0_4px_24px_rgba(22,4,8,0.06)]">
        <img
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} — ${project.category} project by Nexus`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-105"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#160408]/75 via-transparent to-transparent" />
        <ul className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full bg-[#160408]/80 backdrop-blur-md px-3 py-1 text-[0.7rem] text-[#f9f6f0] border border-[#f9f6f0]/15">
              {t}
            </li>
          ))}
        </ul>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} live site`}
          className="absolute bottom-4 right-4 flex size-12 items-center justify-center rounded-full bg-[#f9f6f0] text-[#160408] transition-all duration-300 group-hover:bg-[#8b1d34] group-hover:text-[#f9f6f0] group-hover:rotate-45 shadow-lg"
        >
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </a>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl font-medium text-[#160408] transition-colors duration-200 group-hover:text-[#8b1d34]">{project.title}</h3>
          <p className="mt-1 text-sm text-[#735a5f]">{project.category}</p>
        </div>
        <span className="text-sm font-mono tabular-nums text-[#8b1d34]">{project.year}</span>
      </div>
    </article>
  )
}

export function Work() {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.slice(0, INITIAL)
  const extra = projects.slice(INITIAL)

  return (
    <section id="work" className="relative overflow-hidden bg-[#f9f6f0] px-5 py-24 sm:px-8 md:py-36 nav:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-[#8b1d34]/20 bg-[#8b1d34]/[0.05] px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-[#8b1d34] uppercase">
            <span>03</span>
            <span className="h-1 w-1 rounded-full bg-[#8b1d34]" />
            <span>Selected Work</span>
          </div>
          <h2 className="mt-8 max-w-2xl font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[#160408] sm:text-5xl lg:text-6xl text-balance">
            Crafted for brands that refuse to{' '}
            <span className="italic font-medium text-[#8b1d34] underline decoration-[#8b1d34]/30 underline-offset-8">
              blend in
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1} className={i % 2 === 1 ? 'md:mt-16' : undefined}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
          <AnimatePresence initial={false}>
            {showAll &&
              extra.map((p, i) => (
                <motion.div
                  key={p.title}
                  className={i % 2 === 1 ? 'md:mt-16' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {extra.length > 0 && (
          <div className="mt-16 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full border border-[#8b1d34]/30 bg-white px-7 py-3 text-sm font-semibold text-[#160408] shadow-sm transition-all duration-300 hover:border-[#8b1d34] hover:bg-[#8b1d34] hover:text-[#f9f6f0]"
            >
              {showAll ? 'Show less' : 'View all work'}
              {showAll ? <Minus className="size-4" aria-hidden="true" /> : <Plus className="size-4" aria-hidden="true" />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}