import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { FileDown, Mail, LineChart, DollarSign, ArrowRight, ExternalLink } from 'lucide-react'

const thesisColumns = [
  {
    title: 'Recurring schools',
    summary: 'Active subscription campuses billed quarterly.',
    highlight: '68 partner schools',
    trend: [42, 48, 55, 61, 68],
  },
  {
    title: 'Wallet GMV',
    summary: 'Faith community wallets processed last twelve months.',
    highlight: '$4.3M processed',
    trend: [1.1, 1.9, 2.6, 3.5, 4.3],
  },
  {
    title: 'Delivery SLA',
    summary: 'Routes arriving inside 24h service window.',
    highlight: '94% on-time',
    trend: [76, 81, 87, 91, 94],
  },
]

const tractionSnapshot = [
  { label: 'Learners financed', value: '18,400', detail: '48% increase YoY via pastoral networks' },
  { label: 'Inventory turns', value: '7.2x', detail: 'Optimised through predictive procurement' },
  { label: 'Net retention', value: '128%', detail: 'Annual contracts across 3 dioceses' },
]

const projectionData = [
  { year: 'FY25', revenue: 2.3, ebitda: 0.1 },
  { year: 'FY26', revenue: 5.4, ebitda: 1.2 },
  { year: 'FY27', revenue: 9.8, ebitda: 2.8 },
]

const projectionAssumptions = [
  'Booked contracts: 52 anchor schools (signed) with 12-month average value of $44k.',
  'Regional expansion: phased launch into Western Uganda & Nairobi satellite (20% revenue contribution by FY27).',
  'EBITDA uplift: fleet leasing replaced with owned EV vans from Q2 FY26 (8pt gross margin improvement).',
]

const capTable = [
  { label: 'Founders', value: 70 },
  { label: 'ESOP', value: 10 },
  { label: 'Seed Investors', value: 20 },
]

const downloadLinks = [
  { name: 'Pitch Deck (Q3 2025)', href: '/downloads/skooli-pitch-deck-q3-2025.pdf' },
  { name: 'Unit Economics Model', href: '/downloads/skooli-unit-economics-2025.pdf' },
  { name: 'Impact Report 2025', href: '/downloads/skooli-impact-report-2025.pdf' },
]

const investorQuotes = [
  {
    quote: '“Skooli is unlocking last-mile education commerce with the discipline of a fintech.”',
    source: 'Nia Capital (Seed lead)',
  },
  {
    quote: '“The most operationally excellent partner in our East African education coalition.”',
    source: 'Global Faith Impact Alliance',
  },
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

  const thesisSparklines = useMemo(() => {
    return thesisColumns.map((column) => {
      const trend = column.trend
      const maxValue = Math.max(...trend)
      const minValue = Math.min(...trend)
      const coordinates = trend.map((value, index) => {
        const x = (index / (trend.length - 1)) * 120 + 8
        const scale = maxValue === minValue ? 1 : (value - minValue) / (maxValue - minValue)
        const y = 62 - scale * 44
        return { x, y }
      })
      const linePath = coordinates
        .map((point, index) => (index === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`))
        .join(' ')
      const areaPath = `${linePath} L${coordinates[coordinates.length - 1].x},68 L${coordinates[0].x},68 Z`
      return { linePath, areaPath }
    })
  }, [])

  return (
    <div className="bg-[var(--brand-cream)]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">Investor centre</p>
          <h1 className="mt-4 text-4xl font-bold text-[var(--brand-emerald)]">Back Africa’s education logistics backbone</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-600">
            Skooli is raising to scale our AI-enabled supply chain, deepen school integrations, and expand to three additional East African markets by 2027.
          </p>
          <img src="src/assets/logistics_backbone.png" alt="Skooli's logistics backbone" className="mt-8 w-full rounded-3xl shadow-lg" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {thesisColumns.map((column, index) => (
              <div
                key={column.title}
                className="relative overflow-hidden rounded-3xl border border-[var(--brand-emerald)]/10 bg-white p-6 shadow-lg shadow-black/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">{column.title}</p>
                    <h2 className="mt-3 text-xl font-semibold text-[var(--brand-emerald)]">{column.highlight}</h2>
                    <p className="mt-2 text-sm text-slate-600">{column.summary}</p>
                  </div>
                  <span className="rounded-full bg-[color-mix(in_srgb,var(--brand-emerald)_12%,#ffffff_88%)] px-3 py-1 text-xs font-semibold text-[var(--brand-emerald)]">
                    {column.trend[column.trend.length - 1] > column.trend[0] ? '+Growth' : 'Stable'}
                  </span>
                </div>
                <svg viewBox="0 0 140 70" className="mt-6 h-20 w-full">
                  <defs>
                    <linearGradient id={`heroGradient${index}`} x1="0" x2="1" y1="1" y2="0">
                      <stop offset="0%" stopColor="var(--brand-emerald)" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="var(--brand-gold)" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <path d={thesisSparklines[index].linePath} stroke="var(--brand-gold)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d={thesisSparklines[index].areaPath} fill={`url(#heroGradient${index})`} opacity="0.65" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-emerald)]/10 bg-[color-mix(in_srgb,var(--brand-emerald)_6%,#ffffff_94%)] py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-gold-dark)]">Traction snapshot</div>
          <div className="grid flex-1 gap-6 sm:grid-cols-3">
            {tractionSnapshot.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--brand-emerald)]/15 bg-white/60 p-4 text-center shadow-sm shadow-black/5">
                <p className="text-sm font-semibold text-[var(--brand-emerald)]">{item.label}</p>
                <p className="mt-2 text-xl font-bold text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)]">{item.value}</p>
                <p className="mt-1 text-xs text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Financial projections snapshot</h2>
              <p className="mt-4 text-sm text-slate-600">
                Revenue and EBITDA forecasts based on confirmed school contracts and expansion assumptions.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-[var(--brand-cream)] p-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  {projectionData.map((item) => (
                    <div key={item.year} className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow">
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">{item.year}</p>
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
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">Key assumptions</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {projectionAssumptions.map((assumption) => (
                  <li key={assumption} className="flex items-start gap-3">
                    <span className="mt-1 size-2 rounded-full bg-[var(--brand-gold)]" aria-hidden />
                    <span>{assumption}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div className="rounded-3xl bg-[var(--brand-emerald)] p-6 text-white shadow-lg shadow-black/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Funding ask</p>
              <p className="mt-3 text-lg">Seeking $2.5M seed extension (equity + revenue share) to finance inventory and product development.</p>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                <p className="flex items-center gap-3"><DollarSign className="size-4" /> Ticket sizes: $250k – $1M</p>
                <p className="flex items-center gap-3"><LineChart className="size-4" /> Target close: Q3 2025</p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Button
                  className="flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-[var(--brand-emerald)] hover:bg-white/90"
                  asChild
                >
                  <a href="https://calendly.com/skooli-investor/45min" target="_blank" rel="noopener noreferrer">
                    Investor Briefing
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 rounded-md border-white/50 bg-transparent px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  asChild
                >
                  <a href="/downloads/skooli-executive-summary-2025.pdf" target="_blank" rel="noopener noreferrer">
                    Executive Summary
                    <ExternalLink className="size-4" aria-hidden />
                  </a>
                </Button>
              </div>
              <div className="mt-8 space-y-4 rounded-2xl bg-white/10 p-4">
                {investorQuotes.map((item) => (
                  <blockquote key={item.source} className="text-sm text-white/80">
                    {item.quote}
                    <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{item.source}</span>
                  </blockquote>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">Due diligence support</p>
              <p className="mt-3 text-sm text-slate-600">We facilitate structured review calls, shared dashboards, and rapid follow-ups within 24 hours.</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-[var(--brand-emerald)]" aria-hidden />
                  <span>Data room access issued post-NDA with annotated financial model walkthrough.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-[var(--brand-emerald)]" aria-hidden />
                  <span>Impact verification calls with diocesan partners and logistics leads.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-[var(--brand-emerald)]" aria-hidden />
                  <span>Weekly investor notes summarising milestones, cash position, and risks.</span>
                </li>
              </ul>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">Due diligence contact</p>
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

      <section className="py-16" id="downloads">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">Download area</p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">Cap table</p>
              <div className="mt-4 grid gap-4">
                {capTable.map((slice) => (
                  <div key={slice.label} className="flex items-center justify-between rounded-2xl bg-[var(--brand-cream)] p-4 text-sm text-slate-600">
                    <span className="font-semibold text-[var(--brand-emerald)]">{slice.label}</span>
                    <span>{slice.value}%</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">Due diligence contact</p>
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
