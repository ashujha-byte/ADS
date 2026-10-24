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
  'Ashu Digital Studio (ADS) is a high-performance creative studio and software agency. We combine modern web engineering, clean design systems, and rapid automation to scale digital products.'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'
  ),
  title: {
    default: 'ADS —  Connecting Ideas to Execution',
    template: '%s — Ashu Digital Studio (ADS)',
  },
  description,
  keywords: [
    'Ashu Digital Studio',
    'ADS',
    'ADS digital agency',
    'ADS studio New Delhi',
    'digital agency',
    'web development agency New Delhi',
    'full stack development',
    'UI UX design',
    'AI automation agency',
    'branding studio',
    'Next.js agency',
  ],
  applicationName: 'Ashu Digital Studio',
  authors: [{ name: 'Ashu Kumar Jha', url: 'https://ashudigitalstudio.in' }],
  creator: 'Ashu Kumar Jha',
  publisher: 'Ashu Digital Studio',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Ashu Digital Studio (ADS)',
    title: 'ADS — Connecting Ideas to Execution',
    description,
    url: '/',
    locale: 'en_IN',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'ADS — Connecting Ideas to Execution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADS —Connecting Ideas to Execution',
    description,
    images: ['/ads.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/you.png', type: 'image/x-icon' },
      { url: '/you.png', sizes: '32x32' },
    ],
    shortcut: '/you.png',
    apple: '/you.png',
  },
  verification: {
    google: 'Zlg6_VWMTg3U7n1A-3fqsuYAx_jKkuKS4obJIP18AYY',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#160408',
  width: 'device-width',
  initialScale: 1,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ashu Digital Studio',
  alternateName: ['ADS', 'ADS Studio', 'Ashu Digital Studio (ADS)'],
  url: 'https://ashudigitalstudio.in',
  logo: 'https://ashudigitalstudio.in/ads.svg',
  founder: {
    '@type': 'Person',
    name: 'Ashu Kumar Jha',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  description:
    'High-performance creative studio and software agency specializing in modern web engineering, 3D design systems, and AI automation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased bg-[#160408] text-[#f9f6f0]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}