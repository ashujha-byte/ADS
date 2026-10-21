import { About } from '@/components/nexus/about'
import { Concierge } from '@/components/nexus/concierge'
import { Contact } from '@/components/nexus/contact'
import { Faq } from '@/components/nexus/faq'
import { Footer } from '@/components/nexus/footer'
import { Hero } from '@/components/nexus/hero'
import { IntroProvider } from '@/components/nexus/intro'
import { Navbar } from '@/components/nexus/navbar'
import { Services } from '@/components/nexus/services'
import { Work } from '@/components/nexus/work'

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
