import { Suspense, lazy, useEffect, useState } from 'react'
import { ShieldCheck, Wallet, BarChart3, CalendarDays, Activity, BadgeCheck, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import ComplianceKit from '@/components/ComplianceKit.jsx'
import { AccentPill } from '@/components/AccentPill.jsx'

const TestimonialsGrid = lazy(() => import('@/components/TestimonialsGrid.jsx'))
const FaqSection = lazy(() => import('@/components/FaqSection.jsx'))

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

const riskCallouts = [
  {
    title: 'Supply continuity',
    detail: 'Dual sourcing per category plus 30-day safety stock across Kampala and Gulu warehouses.',
  },
  {
    title: 'Data governance',
    detail: 'Role-based access, encryption at rest, and parent consent workflows reviewed quarterly.',
  },
  {
    title: 'Financial integrity',
    detail: 'Daily reconciliation of wallets with reversal protocols and bank-backed trust accounts.',
  },
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

const faqItems = [
  {
    question: 'How quickly can we move from signing to first deliveries?',
    answer: 'We align with your academic calendar. Most schools move from MOU to first cohort deliveries within four weeks, including staff training and parent onboarding.',
  },
  {
    question: 'Do you integrate with existing finance systems?',
    answer: 'Yes. Our finance rails export reconciliation files for Tally, QuickBooks, and Sage. We also provide real-time dashboards for bursars and treasurers.',
  },
  {
    question: 'How are safeguarding and data privacy handled?',
    answer: 'We operate with audited safeguarding protocols, role-based access controls, and parent consent flows that map to Uganda’s Data Protection and Privacy Act.',
  },
  {
    question: 'Can parents without smartphones participate?',
    answer: 'Absolutely. Parents can opt into USSD and call-centre flows. Our facilitators also support in-person enrolment during school visit days.',
  },
]

export default function ForSchools() {
  return (
    <div className="bg-[var(--brand-cream)]">
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <AccentPill size="sm" className="tracking-[0.25em]">
            For schools
          </AccentPill>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-[var(--brand-emerald)]">A reliable partner for school administrators</h1>
              <p className="mt-4 text-base text-slate-600">
                Streamline procurement, enhance parent confidence, and receive analytics designed for school leadership.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-[var(--brand-emerald)]/10 px-4 py-2 text-sm font-semibold text-[var(--brand-emerald)]">
                  <BadgeCheck className="size-4" aria-hidden="true" /> ≥30% parent adoption in first term
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--brand-emerald)_12%,#ffffff_88%)] px-4 py-2 text-sm font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)]">
                  <Activity className="size-4" aria-hidden="true" /> ≥95% delivery SLA maintained
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[var(--brand-emerald)] to-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] p-6 text-white shadow-lg shadow-black/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Bursar hotline</p>
              <p className="mt-2 text-lg">Dedicated school support: +256 414 000 221 (Mon–Sat 8am–8pm)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4" id="admin">
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map(({ icon, title, description }) => {
              const BenefitIcon = icon
              return (
                <div key={title} className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                  <BenefitIcon className="size-6 text-[var(--brand-emerald)]" />
                  <h3 className="mt-4 text-lg font-semibold text-[var(--brand-emerald)]">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Admin portal tour</h2>
              <p className="mt-4 text-sm text-slate-600">
                Monitor stock alerts, student allowances, and delivery schedules in a single pane. Below is a live animation of the dashboard tiles rotating every few seconds.
              </p>
            </div>
            <div className="rounded-3xl bg-[var(--brand-cream)] p-6 shadow-lg shadow-black/5">
              <PortalLoop />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <AccentPill size="sm" className="tracking-[0.25em]">
            Implementation timeline
          </AccentPill>
          <div className="mt-8 overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-black/5">
            <div className="relative">
              <div className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-[var(--brand-emerald)]/20" aria-hidden="true" />
              <div className="relative grid gap-6 text-center sm:grid-cols-3">
                {timeline.map((milestone) => (
                  <div key={milestone.label} className="relative">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[var(--brand-emerald)] text-white shadow">
                      <CalendarDays className="size-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[var(--brand-emerald)]">{milestone.label}</h3>
                    <p className="mt-2 text-sm text-slate-600">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <AccentPill size="sm" className="tracking-[0.25em]">
                Risk mitigation
              </AccentPill>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--brand-emerald)]">Controls that de-risk your procurement board</h2>
              <p className="mt-3 text-sm text-slate-600">
                Every partnership is underpinned by proactive risk ownership—from diversified suppliers to data privacy audits—so school governors stay confident in scale decisions.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {riskCallouts.map((item) => (
                  <div key={item.title} className="rounded-3xl bg-white p-4 shadow-lg shadow-black/5">
                    <AlertTriangle className="size-5 text-[var(--brand-emerald)]" aria-hidden="true" />
                    <h3 className="mt-3 text-sm font-semibold text-[var(--brand-emerald)]">{item.title}</h3>
                    <p className="mt-2 text-xs text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <RiskMitigationMatrix />
              </div>
              <ComplianceKit
                className="bg-[var(--brand-cream)]"
                title="Compliance guardrails"
                blurb="Rapid access to reviewed templates that satisfy procurement committees and safeguarding boards."
              />
            </div>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <section className="bg-white py-24" aria-label="Testimonials loading">
            <div className="mx-auto max-w-6xl px-4">
              <div className="grid gap-8 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse rounded-3xl bg-[var(--brand-cream)]/60 p-6 shadow-lg shadow-black/5"
                  >
                    <div className="h-4 w-24 rounded bg-white/70" />
                    <div className="mt-6 h-6 w-16 rounded bg-white/70" />
                    <div className="mt-4 space-y-2">
                      <div className="h-4 w-full rounded bg-white/70" />
                      <div className="h-4 w-5/6 rounded bg-white/70" />
                      <div className="h-4 w-2/3 rounded bg-white/70" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        }
      >
        <TestimonialsGrid testimonials={testimonials} />
      </Suspense>

      <Suspense
        fallback={
          <section className="bg-white py-24" aria-label="Frequently asked questions loading">
            <div className="mx-auto max-w-5xl px-4">
              <div className="mx-auto h-6 w-64 animate-pulse rounded bg-[var(--brand-emerald)]/10" />
              <div className="mt-8 space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-20 animate-pulse rounded-3xl bg-[var(--brand-emerald)]/5"
                  />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <FaqSection items={faqItems} heading="Questions schools often ask" />
      </Suspense>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Ready for a 20-minute demo?</h2>
          <p className="mt-3 text-sm text-slate-600">
            Book a slot with our school success team. We’ll customise the walkthrough to your context and send a follow-up proposal.
          </p>
          <Button
            className="mt-6 rounded-md bg-[var(--brand-emerald)] px-8 py-3 text-white shadow-lg shadow-[var(--brand-emerald)]/20 hover:bg-[color-mix(in_srgb,var(--brand-emerald)_80%,#032823_20%)]"
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
            activeIndex === index
              ? 'border-[var(--brand-emerald)] bg-white'
              : 'border-transparent bg-white/80'
          }`}
        >
          <h3 className="text-sm font-semibold text-[var(--brand-emerald)]">{card.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{card.description}</p>
        </div>
      ))}
    </div>
  )
}

function RiskMitigationMatrix() {
  return (
    <svg
      viewBox="0 0 320 220"
      className="h-full w-full"
      role="img"
      aria-labelledby="riskMatrixTitle riskMatrixDesc"
    >
      <title id="riskMatrixTitle">Risk mitigation matrix</title>
      <desc id="riskMatrixDesc">Matrix plotting likelihood versus impact with highlighted mitigation tactics.</desc>
      <rect x="0" y="0" width="320" height="220" rx="24" fill="var(--brand-cream)" />
      <g transform="translate(48 36)">
        <text x="-24" y="60" transform="rotate(-90 -24 60)" fill="var(--brand-emerald)" fontSize="12" fontWeight="600">
          Impact
        </text>
        <text x="72" y="152" fill="var(--brand-emerald)" fontSize="12" fontWeight="600">
          Likelihood
        </text>
        <rect x="0" y="0" width="200" height="140" fill="white" stroke="var(--brand-emerald)" strokeWidth="1" />
        {[0, 1, 2].map((index) => (
          <line
            key={`h-${index}`}
            x1="0"
            y1={(index + 1) * 35}
            x2="200"
            y2={(index + 1) * 35}
            stroke="var(--brand-emerald)"
            strokeOpacity="0.15"
          />
        ))}
        {[0, 1, 2].map((index) => (
          <line
            key={`v-${index}`}
            x1={(index + 1) * 50}
            y1="0"
            x2={(index + 1) * 140}
            y2="140"
            stroke="var(--brand-emerald)"
            strokeOpacity="0.15"
          />
        ))}
        <g>
          <rect
            x="24"
            y="92"
            width="56"
            height="32"
            rx="8"
            fill="color-mix(in srgb, var(--brand-emerald) 68%, var(--brand-emerald-light) 32%)"
            fillOpacity="0.2"
          />
          <text x="28" y="112" fill="var(--brand-emerald)" fontSize="10" fontWeight="600">
            Late deliveries
          </text>
          <text x="28" y="124" fill="var(--brand-emerald)" fontSize="9">
            Backup fleet & alerts
          </text>
        </g>
        <g>
          <rect x="96" y="48" width="72" height="32" rx="8" fill="var(--brand-emerald)" fillOpacity="0.2" />
          <text x="102" y="66" fill="var(--brand-emerald)" fontSize="10" fontWeight="600">
            Data breach
          </text>
          <text x="102" y="78" fill="var(--brand-emerald)" fontSize="9">
            ISO27001 controls
          </text>
        </g>
        <g>
          <rect
            x="136"
            y="16"
            width="48"
            height="32"
            rx="8"
            fill="color-mix(in srgb, var(--brand-emerald) 68%, var(--brand-emerald-light) 32%)"
            fillOpacity="0.25"
          />
          <text x="140" y="36" fill="var(--brand-emerald)" fontSize="10" fontWeight="600">
            Fraud
          </text>
          <text x="140" y="48" fill="var(--brand-emerald)" fontSize="9">
            Daily reconciliations
          </text>
        </g>
      </g>
      <g transform="translate(220 48)">
        <text x="0" y="0" fill="var(--brand-emerald)" fontSize="12" fontWeight="700">
          Mitigation levers
        </text>
        <text x="0" y="18" fill="var(--brand-emerald)" fontSize="10">
          • Supplier scorecards monthly
        </text>
        <text x="0" y="34" fill="var(--brand-emerald)" fontSize="10">
          • Encryption & access reviews
        </text>
        <text x="0" y="50" fill="var(--brand-emerald)" fontSize="10">
          • Independent finance audits
        </text>
        <text x="0" y="66" fill="var(--brand-emerald)" fontSize="10">
          • Incident drills each term
        </text>
      </g>
    </svg>
  )
}
