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
  'Ashu Digital Services (ADS) is a high-performance creative studio and software agency. We combine modern web engineering, clean design systems, and rapid automation to scale digital products.'

const siteUrl = 'https://ashudigitalservices.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : siteUrl
  ),
  title: {
    default: 'ADS | Connecting Ideas to Execution',
    template: '%s — ADS',
  },
  description,
  keywords: [
    'ADS',
    'ADS',
    'ADS',
    'ADS',
    'ADS New Delhi',
    'digital agency',
    'web development agency New Delhi',
    'full stack development',
    'UI UX design',
    'AI automation agency',
    'branding studio',
    'Next.js agency',
  ],
  applicationName: 'ADS',
  authors: [{ name: 'Ashu Jha', url: siteUrl }],
  creator: 'Ashu Jha',
  publisher: 'ADS',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'ADS',
    title: 'ADS | Connecting Ideas to Execution',
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
    title: 'ADS| Connecting Ideas to Execution',
    description,
    images: ['/og.png'],
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
      { url: '/ashu1.png', type: 'image/png' },
      { url: '/ashu1.png', sizes: '32x32' },
    ],
    shortcut: '/ashu1.png',
    apple: '/ashu1.png',
  },
  verification: {
    google: 'nn-Y4btMcmwIfc3rlUDKr3ZwlhilJw21TCh2fMtz5PU',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#160408',
  width: 'device-width',
  initialScale: 1,
}

// Google ko batata hai ki is domain ka official site name "Ashu Digital Services" hai (Vercel nahi)
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ADS',
  alternateName: ['ADS', 'Ashu Digital Services (ADS)', 'Ashu Digital Studio'],
  url: siteUrl,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ADS',
  alternateName: ['ADS', 'Ashu Digital Studio'],
  url: siteUrl,
  logo: `${siteUrl}/ashu.png`,
  founder: {
    '@type': 'Person',
    name: 'Ashu Jha',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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