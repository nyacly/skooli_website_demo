import { useEffect, useState } from 'react'
import { ShieldCheck, Wallet, BarChart3, CalendarDays, Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Trusted supply',
    description: 'Approved vendors with quality checks, packaging standards, and on-time delivery SLAs.',
  },
  {
    icon: Wallet,
    title: 'Cashless canteen',
    description: 'Student wallets connect to bursar dashboards for allowance control and reconciliations.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Real-time dashboards on utilisation, sponsored learners, and supplier performance.',
  },
]

const timeline = [
  { label: 'Signing', description: 'MOU + vendor onboarding workshop', weeks: 0 },
  { label: 'Onboarding (2 wks)', description: 'Portal setup, staff training, parent comms', weeks: 2 },
  { label: 'First Delivery (4 wks)', description: 'Pilot grade distribution + review session', weeks: 4 },
]

const testimonials = [
  {
    name: 'Mr. Ocen — Headteacher, Gulu Archdiocese',
    quote: '“The Skooli dashboard tells me exactly which students have received supplies. Parents trust us again.”',
    rating: 5,
  },
  {
    name: 'Sr. Immaculate — Administrator, Kampala',
    quote: '“Cashless canteens improved accountability. We reinvested savings into science labs.”',
    rating: 5,
  },
  {
    name: 'Mr. Ssenoga — Deputy Head, Wakiso',
    quote: '“Our bursar closed monthly books three days earlier thanks to automated reconciliations.”',
    rating: 4,
  },
]

export default function ForSchools() {
  return (
    <div className="bg-[#F7F5EF]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">For schools</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#0F4C81]">A reliable partner for school administrators</h1>
              <p className="mt-4 text-base text-slate-600">
                Streamline procurement, enhance parent confidence, and receive analytics designed for school leadership.
              </p>
            </div>
            <div className="rounded-3xl bg-[#0F4C81] p-6 text-white shadow-lg shadow-black/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Bursar hotline</p>
              <p className="mt-2 text-lg">Dedicated school support: +256 414 000 221 (Mon–Sat 8am–8pm)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4" id="admin">
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map(({ icon, title, description }) => {
              const BenefitIcon = icon
              return (
                <div key={title} className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                  <BenefitIcon className="size-6 text-[#0F4C81]" />
                  <h3 className="mt-4 text-lg font-semibold text-[#0F4C81]">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#0F4C81]">Admin portal tour</h2>
              <p className="mt-4 text-sm text-slate-600">
                Monitor stock alerts, student allowances, and delivery schedules in a single pane. Below is a live animation of the dashboard tiles rotating every few seconds.
              </p>
            </div>
            <div className="rounded-3xl bg-[#F7F5EF] p-6 shadow-lg shadow-black/5">
              <PortalLoop />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">Implementation timeline</p>
          <div className="mt-8 overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-black/5">
            <div className="relative">
              <div className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-[#0F4C81]/20" aria-hidden="true" />
              <div className="relative grid gap-6 text-center sm:grid-cols-3">
                {timeline.map((milestone) => (
                  <div key={milestone.label} className="relative">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#0F4C81] text-white shadow">
                      <CalendarDays className="size-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#0F4C81]">{milestone.label}</h3>
                    <p className="mt-2 text-sm text-slate-600">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl bg-[#F7F5EF] p-6 shadow-lg shadow-black/5">
                <div className="flex items-center gap-2 text-[#F05A28]">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <Quote className="mt-4 size-6 text-[#0F4C81]" />
                <p className="mt-4 text-sm text-slate-600">{testimonial.quote}</p>
                <p className="mt-4 text-sm font-semibold text-[#0F4C81]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#0F4C81]">Ready for a 20-minute demo?</h2>
          <p className="mt-3 text-sm text-slate-600">
            Book a slot with our school success team. We’ll customise the walkthrough to your context and send a follow-up proposal.
          </p>
          <Button
            className="mt-6 rounded-md bg-[#F05A28] px-8 py-3 text-white shadow hover:bg-[#e14a1e]"
            asChild
          >
            <a href="https://calendly.com/skooli-schools/20min-demo" target="_blank" rel="noreferrer">
              Book a 20-min demo
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

function PortalLoop() {
  const cards = [
    {
      title: 'Inventory alerts',
      description: 'Exercise books for S2 below threshold at Gulu campus. Auto reorder triggered.',
    },
    {
      title: 'Allowance logs',
      description: '12,430 transactions logged this term. 98% parent approval response.',
    },
    {
      title: 'Delivery tracker',
      description: 'Route #14 arriving at King’s College Budo • ETA 08:15 • Driver: Namara',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const totalCards = cards.length

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards)
    }, 2500)
    return () => clearInterval(interval)
  }, [totalCards])

  return (
    <div className="space-y-4">
      {cards.map((card, index) => (
        <div
          key={card.title}
          className={`rounded-2xl border p-4 shadow-lg shadow-black/5 transition ${
            activeIndex === index ? 'border-[#F05A28] bg-white' : 'border-transparent bg-white/80'
          }`}
        >
          <h3 className="text-sm font-semibold text-[#0F4C81]">{card.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{card.description}</p>
        </div>
      ))}
    </div>
  )
}
