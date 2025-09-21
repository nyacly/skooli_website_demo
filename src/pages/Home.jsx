import Hero from '@/components/Hero.jsx'
import HeroStats from '@/components/HeroStats.jsx'
import QuickGateways from '@/components/QuickGateways.jsx'
import ExpansionJourney from '@/components/ExpansionJourney.jsx'

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <HeroStats />
      <ExpansionJourney />
      <QuickGateways />
    </div>
  )
}
