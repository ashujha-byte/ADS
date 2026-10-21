'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { INQUIRY_LINK } from '@/lib/site'

type Message = { id: number; from: 'bot' | 'user'; text: string }

const quickReplies = ['Pricing', 'Tech stack', 'Delivery time', 'Start a project'] as const

function answerFor(input: string): string {
  const q = input.toLowerCase()
  if (/(price|pricing|cost|budget|quote|rate|charge)/.test(q))
    return 'Every project gets a fixed, milestone-based quote after a short discovery call — no surprise invoices. Share your brief on WhatsApp and we reply with an estimate within 24 hours.'
  if (/(stack|tech|technology|framework|next|react|language)/.test(q))
    return 'We build with Next.js, React, TypeScript and Tailwind CSS on the frontend, Node.js and Postgres on the backend, deployed on Vercel. AI work uses leading language models with custom tooling.'
  if (/(time|timeline|deliver|long|deadline|week|fast)/.test(q))
    return 'Landing pages: 1–2 weeks. Full websites: 3–5 weeks. Apps and custom software: 6–12 weeks. You get a clear timeline with weekly progress updates.'
  if (/(start|project|hire|contact|whatsapp|talk|call)/.test(q))
    return "Wonderful. Tap \"Continue on WhatsApp\" below and a strategist will pick up your inquiry personally."
  if (/(hi|hello|hey|namaste)/.test(q)) return 'Hello! Ask me about pricing, our tech stack, or delivery timelines.'
  return "Great question — that one deserves a human. Tap \"Continue on WhatsApp\" and our team will answer right away."
}

export function Concierge() {
  const [open, setOpen] = useState(false)
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: 'bot', text: "Hi, I'm the Nexus concierge. How can I help you today?" },
  ])
  const nextId = useRef(1)
  const timer = useRef<number | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current)
  }, [])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed || typing) return
    setMessages((m) => [...m, { id: nextId.current++, from: 'user', text: trimmed }])
    setInput('')
    setTyping(true)
    timer.current = window.setTimeout(() => {
      setMessages((m) => [...m, { id: nextId.current++, from: 'bot', text: answerFor(trimmed) }])
      setTyping(false)
    }, 700)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[9998] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {open && (
          <motion.div
            id="concierge-panel"
            role="dialog"
            aria-label="Nexus AI concierge"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'bottom right' }}
            className="flex h-[min(540px,calc(100svh-8rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-linen-200/15 bg-wine-900 shadow-2xl shadow-black/50"
          >
            <div className="flex items-center justify-between border-b border-linen-200/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-ruby font-serif text-linen">N</span>
                <div>
                  <p className="text-sm font-medium text-linen">Nexus Concierge</p>
                  <p className="flex items-center gap-1.5 text-xs text-linen-400">
                    <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    Online 24/7
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close concierge"
                className="flex size-9 items-center justify-center rounded-full text-linen-200 transition-colors hover:bg-linen-200/10"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-5 py-5" aria-live="polite">
              {messages.map((m) => (
                <div key={m.id} className={m.from === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <p
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.from === 'user' ? 'rounded-br-sm bg-ruby text-linen' : 'rounded-bl-sm bg-wine-800 text-linen-200'
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))}
              {typing && (
                <div className="flex gap-1 px-1 py-2" aria-label="Concierge is typing">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="size-1.5 animate-bounce rounded-full bg-linen-400"
                      style={{ animationDelay: `${d * 120}ms` }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-linen-200/10 px-4 pb-4 pt-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickReplies.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => send(r)}
                    className="rounded-full border border-linen-200/15 px-3 py-1 text-xs text-linen-200 transition-colors hover:border-linen-200/50 hover:text-linen"
                  >
                    {r}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  send(input)
                }}
                className="flex items-center gap-2 rounded-full border border-linen-200/15 bg-wine-950 py-1 pl-4 pr-1"
              >
                <label htmlFor="concierge-input" className="sr-only">
                  Ask the concierge
                </label>
                <input
                  ref={inputRef}
                  id="concierge-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (e.nativeEvent.isComposing || e.keyCode === 229)) e.preventDefault()
                  }}
                  placeholder="Ask about pricing, stack…"
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-transparent text-base text-linen placeholder:text-linen-400 focus:outline-none sm:text-sm"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  disabled={!input.trim() || typing}
                  className="flex size-8 items-center justify-center rounded-full bg-linen text-wine-950 transition-opacity disabled:opacity-40"
                >
                  <ArrowUp className="size-4" aria-hidden="true" />
                </button>
              </form>
              <a
                href={INQUIRY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center text-xs text-ruby-soft underline-offset-4 hover:underline"
              >
                Continue on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close AI concierge' : 'Open AI concierge'}
        aria-expanded={open}
        aria-controls="concierge-panel"
        className="relative flex size-14 items-center justify-center rounded-full bg-ruby font-serif text-2xl text-linen shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {!open && <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-ruby/40 [animation-duration:2.5s]" />}
        <span className="relative">{open ? <X className="size-5" aria-hidden="true" /> : 'N'}</span>
      </button>
    </div>
  )
}
