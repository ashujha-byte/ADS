'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import { INQUIRY_LINK } from '@/lib/site'
import { useIntroReady } from './intro'

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  const ready = useIntroReady()

  return (
    <section id="home" className="relative flex min-h-svh items-center justify-center overflow-hidden px-5 pb-16 pt-28">
      {/* 1. CRYSTAL CLEAR BACKGROUND VIDEO (NO RED GLOW) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover object-center opacity-85"
          src="https://www.pexels.com/download/video/8818313/" 
        />
        {/* Sirf light black vignette taaki text readable ho, koi red color nahi */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center text-center"
        initial="hidden"
        animate={ready ? 'show' : 'hidden'}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* Top Tagline with Linen & Red Wine line */}
        <motion.p
          variants={item}
          className="flex items-center gap-3 whitespace-nowrap text-[0.65rem] uppercase tracking-[0.25em] text-[#d9cec1] sm:text-xs sm:tracking-[0.3em]"
        >
            
          <span>ADS</span>
           <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#8b1d34]" />
          <span>Digital agency</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#8b1d34]" />
          <span>Worldwide</span>
        </motion.p>
        {/* Headline with Red Wine outline & Off-White gradient */}
        <motion.h1
          variants={item}
          className="mt-8 whitespace-nowrap font-serif text-[clamp(1.4rem,5.4vw,6.75rem)] leading-[1.05] tracking-tight text-[#f9f6f0]"
        >
          Connecting{' '}
          <span className="italic text-transparent [-webkit-text-stroke:1.5px_#8b1d34]">
            Ideas
          </span>{' '}
          <span className="bg-gradient-to-r from-[#f9f6f0] via-[#eedcd0] to-[#f9f6f0] bg-clip-text text-transparent">
            to Execution.
          </span>
       
        </motion.h1>

        {/* Off-White Clean Paragraph */}
        <motion.p
          variants={item}
          className="mt-8 max-w-[680px] text-pretty text-base leading-relaxed text-[#d9cec1] [text-wrap:balance] sm:text-lg"
        >
          ADS is a high-performance creative studio and software agency. We combine modern web engineering, clean
          design systems, and rapid automation to scale digital products.
        </motion.p>

        {/* Action Buttons: Red Wine Primary & Off-White Bordered Secondary */}
        <motion.div variants={item} className="mt-10 flex flex-row items-center gap-3">
          {/* Red Wine Primary Button */}
          <a
            href={INQUIRY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#8b1d34] border border-[#a3243f] px-6 py-3 text-sm font-semibold tracking-wide text-[#f9f6f0] shadow-lg shadow-[#8b1d34]/40 transition-all duration-300 hover:bg-[#9e203c] hover:border-[#f9f6f0]/40 sm:px-7"
          >
            Direct Inquiry
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          {/* Off-White Linen Bordered Secondary Button */}
          <a
            href="#services"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#f9f6f0]/30 bg-black/30 backdrop-blur-md px-6 py-3 text-sm font-medium text-[#f9f6f0] transition-all duration-300 hover:border-[#8b1d34] hover:bg-[#8b1d34]/20 sm:px-7"
          >
            Know More
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}