import Hero from '@/components/Hero.jsx'
import HeroStats from '@/components/HeroStats.jsx'
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
      <HeroStats />
      <QuickGateways />
      <TrustedBySchools />
      <ExpansionJourney />
      <HowItWorksPreview />
      <ImpactSnapshot />
      <NewsletterCTA />
    </div>
  )
}
