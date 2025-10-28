import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { FileDown, Mail, LineChart, DollarSign } from 'lucide-react'

const thesisColumns = [
  {
    title: 'Market',
    points: [
      'Uganda’s $180M annual school supplies spend remains fragmented and informal.',
      'Parents and donors demand traceability and price certainty for education spend.',
      'Regional expansion potential into Kenya, Rwanda, and faith-based school networks.',
    ],
  },
  {
    title: 'Moat',
    points: [
      'Exclusive distribution agreements with 45 mission and ministry schools.',
      'Proprietary logistics stack combining AI routing + faith-community pickup hubs.',
      'Ethos-driven brand trusted by parents, pastors, and policy makers.',
    ],
  },
  {
    title: 'Monetisation',
    points: [
      'Margin on curated bundles (18% blended gross margin).',
      'Subscription analytics for schools, NGOs, and ministries.',
      'Transaction fees on cashless wallets and mobile money flows.',
    ],
  },
]

const projectionData = [
  { year: 'Year 1', revenue: 1.2, ebitda: -0.2 },
  { year: 'Year 2', revenue: 3.6, ebitda: 0.5 },
  { year: 'Year 3', revenue: 7.8, ebitda: 1.6 },
]

const capTable = [
  { label: 'Founders', value: 70 },
  { label: 'ESOP', value: 10 },
  { label: 'Seed Investors', value: 20 },
]

const downloadLinks = [
  { name: 'Pitch Deck', href: '/downloads/skooli-pitch-deck.pdf' },
  { name: 'Unit Economics', href: '/downloads/skooli-unit-economics.pdf' },
  { name: 'Impact Report', href: '/downloads/skooli-impact-report.pdf' },
]

export default function FundersInvestors() {
  const [email, setEmail] = useState('')
  const [unlocked, setUnlocked] = useState(false)

  const sparklinePath = useMemo(() => {
    const maxRevenue = Math.max(...projectionData.map((item) => item.revenue))
    const points = projectionData
      .map((item, index) => {
        const x = (index / (projectionData.length - 1)) * 120 + 10
        const y = 60 - (item.revenue / maxRevenue) * 40
        return `${x},${y}`
      })
      .join(' ')
    return `M${points.replace(/ /g, ' L')}`
  }, [])

  return (
    <div className="bg-[var(--brand-cream)]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Investor centre</p>
          <h1 className="mt-4 text-4xl font-bold text-[var(--brand-emerald)]">Back Africa’s education logistics backbone</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-600">
            Skooli is raising to scale our AI-enabled supply chain, deepen school integrations, and expand to three additional East African markets by 2027.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {thesisColumns.map((column) => (
              <div key={column.title} className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <h2 className="text-xl font-semibold text-[var(--brand-emerald)]">{column.title}</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {column.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Financial projections snapshot</h2>
              <p className="mt-4 text-sm text-slate-600">
                Revenue and EBITDA forecasts based on confirmed school contracts and expansion assumptions.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-[var(--brand-cream)] p-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  {projectionData.map((item) => (
                    <div key={item.year} className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow">
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-gold)]">{item.year}</p>
                      <p className="mt-3 text-lg font-semibold text-[var(--brand-emerald)]">Revenue ${item.revenue.toFixed(1)}M</p>
                      <p className="text-sm text-emerald-600">EBITDA ${item.ebitda.toFixed(1)}M</p>
                    </div>
                  ))}
                </div>
                <svg viewBox="0 0 140 70" className="mt-6 h-16 w-full">
                  <path d={sparklinePath} stroke="var(--brand-gold)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="rounded-3xl bg-[var(--brand-emerald)] p-6 text-white shadow-lg shadow-black/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Funding ask</p>
              <p className="mt-3 text-lg">Seeking $2.5M seed extension (equity + revenue share) to finance inventory and product development.</p>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                <p className="flex items-center gap-3"><DollarSign className="size-4" /> Ticket sizes: $250k – $1M</p>
                <p className="flex items-center gap-3"><LineChart className="size-4" /> Target close: Q3 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="downloads">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Download area</p>
              <p className="mt-3 text-sm text-slate-600">Enter your work email to unlock investor materials.</p>
              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                onSubmit={(event) => {
                  event.preventDefault()
                  if (email.trim()) {
                    setUnlocked(true)
                  }
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 flex-1 rounded-md border border-[var(--brand-emerald)]/20 bg-[var(--brand-cream)] px-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[var(--brand-gold)] focus:outline-none"
                  placeholder="you@fund.org"
                  aria-label="Work email"
                />
                <Button type="submit" className="h-12 rounded-md bg-[var(--brand-gold)] px-6 text-white hover:bg-[color-mix(in_srgb,var(--brand-gold)_80%,#000_20%)]">
                  Unlock files
                </Button>
              </form>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {downloadLinks.map((link) => (
                  <a
                    key={link.name}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                      unlocked ? 'border-[var(--brand-emerald)] text-[var(--brand-emerald)] hover:border-[var(--brand-gold)]' : 'border-dashed border-slate-300 text-slate-400'
                    }`}
                    href={unlocked ? link.href : undefined}
                    aria-disabled={!unlocked}
                    tabIndex={unlocked ? 0 : -1}
                  >
                    {link.name}
                    <FileDown className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Cap table</p>
              <div className="mt-4 grid gap-4">
                {capTable.map((slice) => (
                  <div key={slice.label} className="flex items-center justify-between rounded-2xl bg-[var(--brand-cream)] p-4 text-sm text-slate-600">
                    <span className="font-semibold text-[var(--brand-emerald)]">{slice.label}</span>
                    <span>{slice.value}%</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--brand-gold)]">Due diligence contact</p>
              <a className="mt-2 flex items-center gap-2 text-sm font-semibold text-[var(--brand-emerald)]" href="mailto:invest@skooli.africa">
                <Mail className="size-4" /> invest@skooli.africa
              </a>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
                <iframe
                  title="Schedule due diligence call"
                  src="https://calendly.com/skooli-investor/30min"
                  className="h-64 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="investor-deck">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Ready to review the investor deck?</h2>
          <p className="mt-4 text-sm text-slate-600">
            Unlock the downloads above or request a personal walkthrough with our founders.
          </p>
          <Button
            className="mt-6 rounded-md bg-[var(--brand-gold)] px-6 py-3 text-white shadow hover:bg-[color-mix(in_srgb,var(--brand-gold)_80%,#000_20%)]"
            asChild
          >
            <a href="mailto:invest@skooli.africa?subject=Investor%20Deck%20Request">Request briefing</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
