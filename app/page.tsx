import { About } from '@/components/ADS/about'
import { Concierge } from '@/components/ADS/concierge'
import { Contact } from '@/components/ADS/contact'
import { Faq } from '@/components/ADS/faq'
import { Footer } from '@/components/ADS/footer'
import { Hero } from '@/components/ADS/hero'
import { IntroProvider } from '@/components/ADS/intro'
import { Navbar } from '@/components/ADS/navbar'
import { Services } from '@/components/ADS/services'
import { Work } from '@/components/ADS/work'

export default function HomePage() {
  return (
    <IntroProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Concierge />
    </IntroProvider>
  )
}
