'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Search } from 'lucide-react'
import Image from 'next/image'
import { useDeferredValue, useMemo, useState } from 'react'
import { type Book, books, whatsappLink } from '@/lib/site'

const categories = ['All', 'Engineering', 'Design', 'Automation', 'Growth'] as const
type Category = (typeof categories)[number]

function BookCard({ book, priority }: { book: Book; priority: boolean }) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-wine-900">
        <Image
          src={book.cover || '/placeholder.svg'}
          alt={`Cover of ${book.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-wine-950/70 px-3 py-1 text-[0.7rem] text-linen-200">
          {book.category}
        </span>
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-2xl text-linen">{book.title}</h2>
          <span className="shrink-0 text-sm tabular-nums text-linen-200">{book.price}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-linen-400">{book.subtitle}</p>
        <p className="mt-2 text-xs text-linen-400">{book.pages} pages · PDF + ePub</p>
        <a
          href={whatsappLink(`Hi Nexus, I want to purchase "${book.title}" (${book.price}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-linen-200/25 px-5 py-3 text-sm text-linen transition-colors duration-300 hover:border-linen hover:bg-linen hover:text-wine-950"
        >
          Buy on WhatsApp
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export function StoreCatalog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Category>('All')
  const deferredQuery = useDeferredValue(query)

  const results = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase()
    return books.filter(
      (b) =>
        (category === 'All' || b.category === category) &&
        (!q || `${b.title} ${b.subtitle} ${b.category}`.toLowerCase().includes(q)),
    )
  }, [deferredQuery, category])

  return (
    <section aria-label="Book catalog" className="mt-14">
      <div className="flex flex-col gap-5 border-y border-linen-200/10 py-6 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-linen-400" aria-hidden="true" />
          <label htmlFor="store-search" className="sr-only">
            Search books
          </label>
          <input
            id="store-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search playbooks…"
            className="w-full rounded-full border border-linen-200/15 bg-wine-900 py-3 pl-11 pr-4 text-base text-linen placeholder:text-linen-400 focus:border-ruby-soft focus:outline-none sm:text-sm"
          />
        </div>
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                category === c
                  ? 'bg-linen text-wine-950'
                  : 'border border-linen-200/15 text-linen-200 hover:border-linen-200/50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {results.length} {results.length === 1 ? 'book' : 'books'} found
      </p>

      {results.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-serif text-2xl text-linen">No playbooks match your search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setCategory('All')
            }}
            className="mt-4 text-sm text-ruby-soft underline-offset-4 hover:underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <motion.ul layout className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {results.map((b, i) => (
              <motion.li
                key={b.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <BookCard book={b} priority={i < 3} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </section>
  )
}
