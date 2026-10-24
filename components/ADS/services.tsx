'use client'

import { ArrowUpRight } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { Reveal } from './reveal'

const studioServices = [
  {
    title: 'Full-Stack Web Applications',
    category: 'CORE ARCHITECTURE',
    description:
      'Typed, tested, and edge-deployed web applications engineered with Next.js, React, TypeScript, and Supabase. Optimized for 100/100 Lighthouse performance and zero layout shifts.',
    tags: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel Edge'],
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
  },
  {
    
    title: 'App & SaaS Development',
    category: 'DESIGN & MOTION',
    description:
      'Editorial luxury aesthetic fused with fluid micro-interactions, responsive physics, and 3D web elements. We design interfaces that command attention and elevate brand prestige.',
    tags: ['Framer Motion', 'Spline 3D', 'Three.js', 'Design Systems', 'Micro-Interactions'],
    image:
      'https://images.pexels.com/photos/6963589/pexels-photo-6963589.jpeg',
  },
  {
  
    title: 'E-Commerce & Dropshipping Systems',
    category: 'COMMERCE ARCHITECTURE',
    description:
      'High-converting apparel & brand storefronts built on Shopify and custom headless setups. Integrated with automated print-on-demand fulfillment pipelines and secure payment rails.',
    tags: ['Shopify Liquid', 'Custom Headless', 'Qikink / POD API', 'Conversion UI', 'Payment Gateways'],
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
  },
  {
   
    title: 'AI Agents & Workflow Automation',
    category: 'LEVERAGE & SCALE',
    description:
      'End-to-end integration of intelligent AI assistants, CRM webhooks, and automated background syncs. Turn manual operational bottlenecks into autonomous digital pipelines.',
    tags: ['OpenAI / Gemini APIs', 'Make.com Blueprints', 'Webhook Pipelines', 'Autonomous Agents'],
    image:
      'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
  },
  {
    index: '',
    title: 'Logo, Branner & Brand Identity Design.',
    category: 'CREATIVE DIRECTION',
    description:
      'Minimalist typography guidelines, editorial vector logos, and AI-assisted generative mockups. Built to establish immediate market authority from day one.',
    tags: ['Visual Identity', 'Typography Rhythm', 'Ad Mockups', 'Social Scaling Assets'],
    image:
      'https://images.pexels.com/photos/18441115/pexels-photo-18441115.jpeg',
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f9f6f0] px-5 py-28 sm:px-8 md:py-36 nav:px-10">
      {/* Ambient Background Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 size-[32rem] rounded-full bg-[#8b1d34]/[0.035] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-[#160408]/10 pb-12">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#8b1d34]/20 bg-[#8b1d34]/[0.05] px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-[#8b1d34] uppercase">
              
              <span className="h-1 w-1 rounded-full bg-[#8b1d34]" />
              <span>Capabilities</span>
            </div>

            <h2 className="mt-8 max-w-2xl font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[#160408] sm:text-5xl lg:text-6xl text-balance">
              Disciplines engineered for{' '}
              <span className="italic font-medium text-[#8b1d34] underline decoration-[#8b1d34]/30 underline-offset-8">
                execution
              </span>
              .
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-[#5e4b4f] md:text-base">
              From low-latency Next.js engineering to autonomous commerce workflows. Every solution is custom-coded for speed, aesthetics, and scalable growth.
            </p>
          </Reveal>
        </div>

        {/* Services Cards */}
        <div className="mt-14 flex flex-col gap-8">
          {studioServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-[#160408]/10 bg-white shadow-[0_6px_30px_rgba(22,4,8,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8b1d34]/40 hover:shadow-[0_20px_45px_rgba(139,29,52,0.1)]">
                <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-12 md:items-center md:p-10">
                  
                  {/* Left Column */}
                  <div className="flex flex-col justify-between md:col-span-7">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#8b1d34]">
                          {s.index}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-[#8b1d34]/40" />
                        <span className="text-[11px] font-semibold tracking-widest text-[#8b1d34] uppercase">
                          {s.category}
                        </span>
                      </div>

                      <h3 className="mt-4 font-serif text-2xl font-medium tracking-tight text-[#160408] sm:text-3xl lg:text-4xl group-hover:text-[#8b1d34] transition-colors duration-200">
                        {s.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#5e4b4f] sm:text-base">
                        {s.description}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[#160408]/10 bg-[#f9f6f0] px-3 py-1 text-xs font-medium text-[#4a3539] transition-colors duration-200 group-hover:border-[#8b1d34]/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* WhatsApp Action Button */}
                    <div className="mt-8 pt-4">
                      <a
                        href={whatsappLink(`Hi Nexus, I would like to inquire about ${s.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#8b1d34] px-6 py-2.5 text-xs font-semibold tracking-wide text-[#f9f6f0] shadow-md shadow-[#8b1d34]/30 transition-all duration-300 hover:bg-[#a62440] hover:shadow-lg sm:text-sm"
                      >
                        <span>Start Project</span>
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Standard Image Tag (No Next.js Config Error) */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#160408]/10 bg-[#160408] md:col-span-5 md:aspect-[4/3]">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160408]/60 via-transparent to-transparent" />
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}