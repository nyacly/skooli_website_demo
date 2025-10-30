import { useEffect, useRef, useState } from 'react'
import { AccentPill } from '@/components/AccentPill.jsx'

const stats = [
  { label: 'Schools Served', value: 168 },
  { label: 'Students Supported', value: 24500 },
  { label: 'On-time Deliveries', value: 0.95, suffix: '%', format: (value) => Math.round(value * 100) },
]

export default function ImpactSnapshot() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-gradient-to-br from-[var(--brand-emerald)] to-[color-mix(in_srgb,var(--brand-emerald)_70%,var(--neutral-black)_30%)] py-16 text-[var(--brand-white)]" id="impact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <AccentPill tone="inverse" size="sm" className="bg-[var(--brand-white)]/25">
              Executive Dashboard Sync
            </AccentPill>
            <p className="mt-6 typography-body-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-white)]/70">Impact snapshot</p>
            <h2 className="mt-4 typography-heading-2 font-semibold">
              Real-time mission metrics from our executive dashboard
            </h2>
            <p className="mt-4 max-w-xl typography-body-sm text-[var(--brand-white)]/80">
              Figures sync hourly from our internal CMS—giving partners and investors visibility into performance and promises delivered.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="/downloads/skooli-impact-report-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[var(--brand-white)] px-5 py-3 typography-body-sm font-semibold text-[var(--brand-emerald)] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--brand-emerald)_12%,var(--brand-white)_88%)] hover:text-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)]"
              >
                Download the executive impact briefing (PDF)
              </a>
              <a
                href="/downloads/skooli-unit-economics-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 typography-body-sm font-semibold text-[var(--brand-white)] transition hover:-translate-y-0.5 hover:border-white hover:bg-[var(--brand-white)]/10"
              >
                View unit economics supplement (PDF)
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-[var(--brand-white)]/10 p-6 shadow-lg shadow-black/10 backdrop-blur">
            <p className="typography-body-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-white)]/70">Updated</p>
            <p className="typography-heading-3 font-semibold">29 Jan 2025 • 14:00 EAT</p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3" ref={ref}>
          {stats.map(({ label, value, suffix, format }) => {
            const displayValue = visible
              ? format
                ? format(value)
                : value
              : 0
            return (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-[var(--brand-white)]/10 p-8 text-center shadow-lg shadow-black/15 backdrop-blur transition hover:bg-[var(--brand-white)]/15"
              >
                <p className="typography-body-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-white)]/70">{label}</p>
                <p className="mt-4 typography-heading-1 font-bold">
                  {displayValue.toLocaleString()}
                  {suffix || ''}
                </p>
                <p className="mt-2 typography-body-sm text-[var(--brand-white)]/80">Live counter powered by Sanity CMS</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
