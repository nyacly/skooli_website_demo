import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { QuickGateways } from '@/components/home/QuickGateways'
import { TrustedSchools } from '@/components/home/TrustedSchools'
import { HowItWorksPreview } from '@/components/home/HowItWorksPreview'
import { ImpactCounters } from '@/components/home/ImpactCounters'
import { NewsletterCTA } from '@/components/home/NewsletterCTA'
import { TechStackLogos } from '@/components/home/TechStackLogos'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickGateways />
        <TrustedSchools />
        <HowItWorksPreview />
        <ImpactCounters />
        <TechStackLogos />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  )
}