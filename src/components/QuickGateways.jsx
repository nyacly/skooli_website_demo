import { Link } from 'react-router-dom'
import { UserRound, GraduationCap, Building2 } from 'lucide-react'

const gateways = [
  {
    title: 'Parent Portal',
    description: 'Track orders, manage layaway plans, and unlock family discounts.',
    icon: UserRound,
    to: '/shop-now#parent-portal',
  },
  {
    title: 'Student Account',
    description: 'Cashless allowances, school store access, and delivery alerts.',
    icon: GraduationCap,
    to: '/shop-now#student-account',
  },
  {
    title: 'School Admin',
    description: 'Consolidated procurement, analytics, and SLA oversight dashboards.',
    icon: Building2,
    to: '/schools#admin',
  },
]

export default function QuickGateways() {
  return (
    <section className="bg-white py-16" id="gateways">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Quick gateways</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--brand-emerald)] sm:text-4xl">Purpose-built portals for each stakeholder</h2>
          </div>
          <p className="max-w-xl text-base text-slate-600">
            Access the right experience instantly—parents, students, and administrators each get a tailored, secure entry point powered by Skooli.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gateways.map(({ title, description, icon, to }) => {
            const IconComponent = icon
            return (
            <Link
              key={title}
              to={to}
              className="group flex h-[200px] w-full flex-col justify-between rounded-2xl border border-slate-100 bg-[var(--brand-cream)] p-6 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:border-[var(--brand-gold)]/60 hover:shadow-xl"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--brand-emerald)] shadow-md shadow-black/5 transition group-hover:bg-[var(--brand-emerald)] group-hover:text-white">
                <IconComponent className="size-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand-emerald)]">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              </div>
            </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
