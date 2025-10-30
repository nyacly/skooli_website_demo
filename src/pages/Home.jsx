import Hero from '@/components/Hero.jsx'
import HeroStats from '@/components/HeroStats.jsx'
import QuickGateways from '@/components/QuickGateways.jsx'
import TrustedBySchools from '@/components/TrustedBySchools.jsx'
import HowItWorksPreview from '@/components/HowItWorksPreview.jsx'
import ImpactSnapshot from '@/components/ImpactSnapshot.jsx'
import ExpansionJourney from '@/components/ExpansionJourney.jsx'
import NewsletterCTA from '@/components/NewsletterCTA.jsx'
import AnimateOnScroll from '@/components/AnimateOnScroll.jsx'

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <AnimateOnScroll animation="fadeInUp">
        <HeroStats />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeInUp">
        <QuickGateways />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeIn">
        <TrustedBySchools />
      </AnimateOnScroll>
      <AnimateOnScroll animation="slideInRight">
        <ExpansionJourney />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeInUp">
        <HowItWorksPreview />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeInUp">
        <ImpactSnapshot />
      </AnimateOnScroll>
      <AnimateOnScroll animation="scaleIn">
        <NewsletterCTA />
      </AnimateOnScroll>
    </div>
  )
}
