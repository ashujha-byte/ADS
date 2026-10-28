import type { Metadata } from 'next'

import { Footer } from '@/components/ADS/footer'
import { Navbar } from '@/components/ADS/navbar'
import { StoreCatalog } from '@/components/ADS/store-catalog'

export const metadata: Metadata = {
  title: 'Publication Store',
  description:
    'Curated digital books and playbooks by Ashu Digital Services (ADS) on engineering, design systems, AI automation and brand growth. Purchase directly via WhatsApp.',
  applicationName: 'ADS',
  alternates: { 
    canonical: '/store',
  },
  openGraph: {
    type: 'website',
    siteName: 'ADS',
    title: 'Publication Store — ADS',
    description: 'Curated digital books and playbooks by Ashu Digital Services (ADS).',
    url: '/store',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'ADS Publication Store' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Publication Store — ADS',
    description: 'Curated digital books and playbooks by Ashu Digital Services (ADS).',
    images: ['/og.png'],
  },
}

// Google Search ko explicitly batane ke liye ki yeh ADS ka Store page hai
const storeSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Publication Store — ADS',
  description: 'Curated digital books and playbooks by Ashu Digital Services (ADS).',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ADS',
    alternateName: ['Ashu Digital Services', 'Ashu Digital Studio'],
    url: 'https://ads-official.vercel.app',
  },
}

export default function StorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      <Navbar />
      <main id="home" className="px-5 pb-24 pt-36 sm:px-8 md:pt-44 nav:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-linen-400">
            <span className="text-ruby-soft">Store</span>
            <span aria-hidden="true" className="h-px w-8 bg-linen-400/40" />
            The ADS Library
          </p>
          <h1 className="mt-8 max-w-4xl text-balance font-serif text-5xl leading-[1.05] text-linen sm:text-6xl lg:text-7xl">
            Playbooks from the <em className="text-ruby-soft">ADS</em> floor.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-linen-200 sm:text-lg">
            Our methods, distilled into curated digital books. Practical, beautifully designed and delivered instantly
            after purchase.
          </p>
          <StoreCatalog />
        </div>
      </main>
      <Footer />
    </>
  )
}