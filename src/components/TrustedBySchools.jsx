import { Shield } from 'lucide-react'

const schools = [
  { name: 'Gayaza High School', tooltip: 'National pilot school partner since 2022' },
  { name: 'St. Henry’s College', tooltip: 'STEM inventory automated with Skooli' },
  { name: 'Bishop Cypriano Kihangire', tooltip: 'Faith-based distribution partner' },
  { name: 'Ndejje SS', tooltip: 'Boarding supplies delivered every term' },
  { name: 'Seeta High', tooltip: 'Cashless canteen + analytics rollout' },
  { name: 'King’s College Budo', tooltip: 'Scholar support bundles for 500 learners' },
]

export default function TrustedBySchools() {
  return (
    <section className="bg-[var(--brand-cream)] py-16" id="trusted-by">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-emerald)]/20 bg-[var(--brand-white)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)]">
              Trusted by schools
            </p>
            <h2 className="mt-4 typography-heading-2 font-semibold text-[var(--brand-emerald)]">Serving Uganda’s most trusted institutions</h2>
          </div>
          <p className="max-w-xl typography-body-sm text-[color-mix(in_srgb,var(--emerald-bough)_85%,var(--emerald-mist)_15%)]">
            From rural diocesan schools to national academies, Skooli powers reliable delivery and transparent reporting.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {schools.map((school) => (
            <div
              key={school.name}
              className="group flex h-24 items-center justify-center gap-2 rounded-2xl border border-[color-mix(in_srgb,var(--emerald-haze)_25%,var(--brand-white)_75%)] bg-[var(--brand-white)] px-4 text-center typography-body-sm font-semibold tracking-wide text-[color-mix(in_srgb,var(--emerald-bough)_70%,var(--emerald-mist)_30%)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand-emerald)] hover:shadow-md"
              title={school.tooltip}
            >
              <Shield className="size-4 text-[color-mix(in_srgb,var(--brand-emerald)_40%,var(--emerald-bough)_60%)] transition group-hover:text-[var(--brand-emerald)]" aria-hidden="true" />
              <span className="uppercase">{school.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
