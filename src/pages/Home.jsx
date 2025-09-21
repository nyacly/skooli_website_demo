import Hero from '@/components/Hero.jsx'
import QuickGateways from '@/components/QuickGateways.jsx'
import TrustedBySchools from '@/components/TrustedBySchools.jsx'
import HowItWorksPreview from '@/components/HowItWorksPreview.jsx'
import ImpactSnapshot from '@/components/ImpactSnapshot.jsx'
import ExpansionJourney from '@/components/ExpansionJourney.jsx'
import NewsletterCTA from '@/components/NewsletterCTA.jsx'

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <QuickGateways />
      <TrustedBySchools />
      <HowItWorksPreview />
      <ImpactSnapshot />
      <NewsletterCTA />
    </div>
  )
}
