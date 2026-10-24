'use client'

import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { INQUIRY_LINK, PHONE_DISPLAY, WHATSAPP_NUMBER, whatsappLink } from '@/lib/site'
import { Reveal } from './reveal'

const triggers = [
  'New Website',
  'E-Commerce Store',
  '3D UI / UX Design',
  'AI Automation Agents',
  'Branding & Identity',
  'Something Else',
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#f9f6f0] px-5 py-24 sm:px-8 md:py-36 nav:px-10">
      <div className="relative mx-auto max-w-[1400px]">
        {/* Main Banner Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#160408]/15 bg-black px-6 py-16 shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:px-12 md:py-24">
          
          {/* CLEAR BACKGROUND IMAGE (NO RED WINE GLOW) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/33681749/pexels-photo-33681749.jpeg"
              alt="Nexus Studio Atmosphere"
              loading="lazy"
              className="size-full object-cover object-center opacity-75"
            />
            {/* Clean neutral tint for clear text readability without color distortion */}
            <div className="absolute inset-0 bg-black/55" />
          </div>

          {/* Card Foreground Content */}
          <div className="relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-[#f9f6f0] uppercase backdrop-blur-md">
              
                <span className="h-1.5 w-1.5 rounded-full bg-[#8b1d34]" />
                <span>Contact</span>
              </div>

              <h2 className="mt-8 max-w-4xl font-serif text-4xl font-normal leading-[1.08] tracking-tight text-[#f9f6f0] sm:text-6xl lg:text-7xl text-balance">
                Have an idea?{' '}
                <span className="italic font-medium text-transparent [-webkit-text-stroke:1.5px_#f9f6f0]">
                  Let&apos;s
                </span>{' '}
                <span className="bg-gradient-to-r from-[#f9f6f0] via-[#eedcd0] to-[#f9f6f0] bg-clip-text text-transparent">
                  execute it.
                </span>
              </h2>
            </Reveal>

            {/* Quick Trigger Chips */}
            <Reveal delay={0.1}>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-[#d9cec1]">
                I need help with
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {triggers.map((t) => (
                  <li key={t}>
                    <a
                      href={whatsappLink(`Hi Nexus, I need help with: ${t}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-medium text-[#f9f6f0] backdrop-blur-md transition-all duration-200 hover:border-[#8b1d34] hover:bg-[#8b1d34] sm:text-sm"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={0.15} className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={INQUIRY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#8b1d34] border border-[#a3243f] px-8 py-4 text-sm font-semibold tracking-wide text-[#f9f6f0] shadow-lg shadow-[#8b1d34]/40 transition-all duration-300 hover:bg-[#a62440] hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>

              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-black/40 px-8 py-4 text-sm font-medium text-[#f9f6f0] backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-black/60"
              >
                <Phone className="size-4" aria-hidden="true" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}