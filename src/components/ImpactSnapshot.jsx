import { useEffect, useRef, useState } from 'react'

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
    <section className="bg-gradient-to-br from-[var(--brand-emerald)] to-[color-mix(in_srgb,var(--brand-emerald)_70%,#000_30%)] py-16 text-white" id="impact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Impact snapshot</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Real-time mission metrics from our executive dashboard
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/80">
              Figures sync hourly from our internal CMS—giving partners and investors visibility into performance and promises delivered.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Updated</p>
            <p className="text-2xl font-semibold">29 Jan 2025 • 14:00 EAT</p>
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
                className="rounded-2xl bg-white/10 p-8 text-center shadow-lg shadow-black/10 backdrop-blur transition hover:bg-white/15"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">{label}</p>
                <p className="mt-4 text-4xl font-bold">
                  {displayValue.toLocaleString()}
                  {suffix || ''}
                </p>
                <p className="mt-2 text-sm text-white/80">Live counter powered by Sanity CMS</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
