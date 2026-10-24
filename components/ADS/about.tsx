'use client'

import { Reveal } from './reveal'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

const pillars = [
  {
    title: 'Full-Stack Web Engineering',
    tag: 'NEXT.JS & TYPESCRIPT',
    text: 'High-performance, edge-deployed web apps built with Next.js, React, and Supabase. Clean codebases, sub-second load times, and rock-solid SEO.',
  },
  {
    title: 'Interactive UI/UX & Motion',
    tag: 'FRAMER MOTION & 3D',
    text: 'Luxury, editorial design systems powered by dynamic micro-interactions, responsive layouts, and immersive visual storytelling that convert.',
  },
  {
    title: 'Commerce & AI Automation',
    tag: 'ECOMMERCE & AUTOMATION',
    text: 'End-to-end online store architectures, supplier integrations, and AI workflow pipelines built to turn repetitive tasks into scalable leverage.',
  },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f9f6f0] px-5 py-28 sm:px-8 md:py-36 nav:px-10">
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[#8b1d34]/[0.04] blur-3xl" 
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section Label */}
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-[#8b1d34]/20 bg-[#8b1d34]/[0.05] px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-[#8b1d34] uppercase">
          
            <span className="h-1 w-1 rounded-full bg-[#8b1d34]" />
            <span>About</span>
          </div>
        </Reveal>

        {/* Narrative Section */}
        <div className="mt-12 grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-20">
          <Reveal>
            <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[#160408] sm:text-5xl lg:text-6xl text-balance">
              Building digital products where{' '}
              <span className="italic font-medium text-[#8b1d34] underline decoration-[#8b1d34]/30 underline-offset-8">
                engineering
              </span>{' '}
              meets conversion.
            </h2>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-[#8b1d34]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-[#8b1d34]" /> Full-Stack Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-[#8b1d34]" /> Kinetic UI/UX Systems
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-[#8b1d34]" /> Scalable Automation
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center gap-6 text-base leading-relaxed text-[#4a3539] md:text-lg">
            <p>
              ADS is an end-to-end creative engineering studio. We engineer sub-second web applications, interactive visual brand experiences, and autonomous workflows tailored to scale modern businesses.
            </p>
            <p className="text-sm leading-relaxed text-[#735a5f] md:text-base">
              We don&apos;t build disposable templates. From custom Next.js architectures and high-converting e-commerce engines to automated backend pipelines, we bridge the gap between aesthetic prestige and commercial performance.
            </p>
          </Reveal>
        </div>

        {/* 3 Pillars Cards */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#160408]/10 bg-white p-8 shadow-[0_4px_24px_rgba(22,4,8,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8b1d34]/40 hover:shadow-[0_16px_36px_rgba(139,29,52,0.12)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#8b1d34]">
                      0{i + 1}
                    </span>
                    <span className="rounded-full bg-[#8b1d34]/[0.06] px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-[#8b1d34]">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-medium tracking-tight text-[#160408] group-hover:text-[#8b1d34] transition-colors duration-200">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#5e4b4f]">
                    {p.text}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-1.5 text-xs font-semibold text-[#8b1d34] opacity-80 group-hover:opacity-100">
                  <span>Explore Standard</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}