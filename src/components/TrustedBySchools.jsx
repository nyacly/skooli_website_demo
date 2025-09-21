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
    <section className="bg-[#F7F5EF] py-16" id="trusted-by">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">Trusted by schools</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0F4C81]">Serving Uganda’s most trusted institutions</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600">
            From rural diocesan schools to national academies, Skooli powers reliable delivery and transparent reporting.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {schools.map((school) => (
            <div
              key={school.name}
              className="group flex h-24 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-center text-sm font-semibold tracking-wide text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0F4C81] hover:shadow-md"
              title={school.tooltip}
            >
              <Shield className="size-4 text-slate-400 transition group-hover:text-[#0F4C81]" aria-hidden="true" />
              <span className="uppercase">{school.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
