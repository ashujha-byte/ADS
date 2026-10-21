'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { createContext, useContext, useEffect, useState } from 'react'

const IntroContext = createContext(true)

export function useIntroReady() {
  return useContext(IntroContext)
}

let introPlayed = false
const LETTERS = ['N', 'E', 'X', 'U', 'S']

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(() => !introPlayed)
  const [ready, setReady] = useState(() => introPlayed)

  useEffect(() => {
    if (!showSplash) return
    document.documentElement.style.overflow = 'hidden'
    const timer = window.setTimeout(() => {
      introPlayed = true
      setShowSplash(false)
      setReady(true)
    }, 2100)
    return () => {
      window.clearTimeout(timer)
      document.documentElement.style.overflow = ''
    }
  }, [showSplash])

  return (
    <IntroContext.Provider value={ready}>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            role="status"
            aria-label="Loading NEXUS"
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-wine-950"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,29,52,0.35),transparent_60%)]"
            />
            <motion.div
              className="relative flex font-serif text-5xl text-linen sm:text-7xl md:text-8xl"
              initial={{ letterSpacing: '0.05em' }}
              animate={{ letterSpacing: '0.38em' }}
              transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={letter}
                  initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.15 + i * 0.16, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  )
}
