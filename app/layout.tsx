import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

const description =
  'Nexus is a high-performance creative studio and software agency. We combine modern web engineering, clean design systems, and rapid automation to scale digital products.'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'
  ),
  title: {
    default: 'NEXUS — Connecting Ideas to Execution',
    template: '%s — NEXUS',
  },
  description,
  keywords: [
    'digital agency',
    'web development agency New Delhi',
    'full stack development',
    'UI UX design',
    'AI automation agency',
    'branding studio',
    'Next.js agency',
  ],
  applicationName: 'NEXUS',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'NEXUS',
    title: 'NEXUS — Connecting Ideas to Execution',
    description,
    url: '/',
    locale: 'en_IN',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'NEXUS — Connecting Ideas to Execution' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXUS — Connecting Ideas to Execution',
    description,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/nexus-brand-logo.svg' },
      { url: '/nexus-brand-logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/nexus-brand-logo.svg',
    apple: '/nexus-brand-logo.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#160408',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased bg-[#160408] text-[#f9f6f0]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}