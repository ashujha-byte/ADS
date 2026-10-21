'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { DISCUSS_LINK, navLinks } from '@/lib/site'

const desktopLinks = navLinks.filter((l) => ['Home', 'About', 'Services', 'Work'].includes(l.label))

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Scroll listener taaki page scroll hone par navbar hamesha visible rahe
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const toggle = toggleRef.current
    return () => {
      document.documentElement.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      toggle?.focus()
    }
  }, [open])

  return (
    <header 
      className={`fixed left-0 top-0 z-[9999] h-20 w-full transition-all duration-300 ${
        scrolled 
          ? 'border-b border-[#f9f6f0]/10 bg-[#160408]/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.35)]' 
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 nav:grid nav:grid-cols-[1fr_auto_1fr] nav:px-10"
      >
        {/* Desktop Links with Red Wine Hover */}
        <ul className="hidden items-center gap-7 nav:flex">
          {desktopLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-linen-200 transition-colors duration-250 hover:text-[#c43354]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/store"
              className="group inline-flex items-center gap-1 rounded-full border border-linen-200/20 px-3.5 py-1 text-xs text-linen-200 transition-all duration-250 hover:border-[#8b1d34] hover:bg-[#8b1d34]/15 hover:text-[#e04d6e]"
            >
              <span>Book Store</span>
              <ArrowUpRight className="size-3 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </li>
        </ul>

        {/* Center NEXUS Brand with Red Wine Hover */}
        <Link
          href="/"
          aria-label="NEXUS home"
          className="font-serif text-xl tracking-[0.42em] text-linen transition-colors duration-300 hover:text-[#c43354] nav:pl-[0.42em] nav:text-2xl"
        >
          NEXUS
        </Link>

        {/* Right Action: Luxury Red Wine Glass CTA Button */}
        <div className="hidden justify-end nav:flex">
          <a
            href={DISCUSS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#f9f6f0]/25 bg-[#8b1d34] px-6 py-2.5 text-xs font-semibold tracking-wide text-[#f9f6f0] shadow-[0_4px_20px_rgba(139,29,52,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f9f6f0]/50 hover:bg-[#a62440] hover:shadow-[0_6px_25px_rgba(139,29,52,0.65)] active:translate-y-0"
          >
            <span className="relative z-10 tracking-wider">Let&apos;s Discuss</span>
            <ArrowUpRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex size-11 items-center justify-center rounded-full border border-linen-200/20 text-linen transition-colors duration-200 hover:border-[#8b1d34] hover:text-[#c43354] nav:hidden"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              aria-hidden="true"
              className="fixed inset-0 z-[10000] bg-[#0c0205]/70 backdrop-blur-sm nav:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="fixed right-0 top-0 z-[10001] flex h-dvh w-full max-w-sm flex-col border-l border-linen-200/10 bg-[#160408]/95 px-6 pb-8 pt-5 backdrop-blur-2xl nav:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-10 items-center justify-between border-b border-linen-200/10 pb-4">
                <span className="font-serif text-lg tracking-[0.42em] text-linen">NEXUS</span>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  aria-expanded={open}
                  className="flex size-10 items-center justify-center rounded-full border border-linen-200/20 text-linen transition-colors hover:border-[#8b1d34] hover:text-[#c43354]"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-8 flex flex-col">
                {[...navLinks, { label: 'Book Store', href: '/store' }].map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-linen-200/10 py-4 text-linen transition-colors hover:text-[#c43354]"
                    >
                      <span className="w-6 text-xs text-[#8b1d34]">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-serif text-2xl transition-transform duration-200 group-hover:translate-x-1">{link.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Drawer Red Wine CTA */}
              <a
                href={DISCUSS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex w-full items-center justify-center gap-2 rounded-full border border-[#f9f6f0]/30 bg-[#8b1d34] py-4 text-sm font-semibold tracking-wide text-[#f9f6f0] shadow-[0_4px_20px_rgba(139,29,52,0.4)] transition-all hover:bg-[#a62440]"
              >
                <span>{"Let's Discuss on WhatsApp"}</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}