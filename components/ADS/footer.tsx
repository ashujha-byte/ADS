'use client'

import { ArrowUp, ArrowUpRight, Globe } from 'lucide-react'
import Link from 'next/link'
import { navLinks, socials } from '@/lib/site'
import { LogoMark } from './logo-mark'

// Social Media Platform Icon Component (Clean Inline SVG - No Lucide Import Error)
function SocialIcon({ label }: { label: string }) {
  const name = label.toLowerCase()

  if (name.includes('insta')) {
    return (
      <svg className="size-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }

  if (name.includes('twitter') || name.includes('x')) {
    return (
      <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }

  if (name.includes('git')) {
    return (
      <svg className="size-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    )
  }

  if (name.includes('linked')) {
    return (
      <svg className="size-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }

  if (name.includes('youtube')) {
    return (
      <svg className="size-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    )
  }

  return <Globe className="size-4" />
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f9f6f0] border-t border-[#160408]/10 px-5 pb-12 pt-20 sm:px-8 nav:px-10">
      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.2fr]">
          
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-[#160408] transition-colors hover:text-[#8b1d34]" aria-label="ADS home">
             
              <span className="font-serif text-2xl tracking-[0.38em]">ADS</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#5e4b4f]">
              Connecting ideas to execution. A high-performance creative studio and software agency from New Delhi, working worldwide.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#8b1d34]/20 bg-[#8b1d34]/[0.05] px-3.5 py-1 text-xs font-medium text-[#8b1d34]">
              <span className="size-2 rounded-full bg-[#8b1d34] animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Column 2: Navigation Index */}
          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8b1d34]">Index</p>
            <ul className="mt-6 grid grid-cols-2 gap-3.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link 
                    href={l.href} 
                    className="text-sm font-medium text-[#4a3539] transition-colors duration-200 hover:text-[#8b1d34]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/store" 
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#4a3539] transition-colors duration-200 hover:text-[#8b1d34]"
                >
                  Book Store
                  <ArrowUpRight className="size-3 text-[#8b1d34]" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Social Media with Icons */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8b1d34]">Connect</p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-[#160408]/10 bg-white px-4 py-2 text-xs font-medium text-[#160408] shadow-[0_2px_8px_rgba(22,4,8,0.03)] transition-all duration-300 hover:border-[#8b1d34] hover:bg-[#8b1d34] hover:text-[#f9f6f0] hover:shadow-md"
                  >
                    <span className="text-[#8b1d34] transition-colors group-hover:text-[#f9f6f0]">
                      <SocialIcon label={s.label} />
                    </span>
                    <span>{s.label}</span>
                    <ArrowUpRight className="size-3 opacity-60 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-[#160408]/10 pt-8 text-xs font-medium text-[#735a5f] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()}Ashu Digital Services. All rights reserved.</p>
          <a 
            href="#home" 
            className="group inline-flex items-center gap-2 text-[#160408] transition-colors hover:text-[#8b1d34]"
          >
            <span>Back to top</span>
            <span className="flex size-6 items-center justify-center rounded-full border border-[#160408]/15 bg-white transition-all duration-200 group-hover:border-[#8b1d34] group-hover:bg-[#8b1d34] group-hover:text-[#f9f6f0]">
              <ArrowUp className="size-3" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}