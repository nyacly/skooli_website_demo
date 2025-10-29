import { Link } from 'react-router-dom'
import { ShieldCheck, ServerCog, BarChart3 } from 'lucide-react'
import { AccentPill } from '@/components/AccentPill.jsx'

const gateways = [
  {
    title: 'Enterprise Control Center',
    description: 'Real-time governance dashboards, escalation workflows, and enterprise authentication baked in.',
    icon: ShieldCheck,
    to: '/enterprise#governance',
  },
  {
    title: 'Integration Hub',
    description: 'Secure APIs for SIS, ERP, and treasury systems with data residency controls for each market.',
    icon: ServerCog,
    to: '/platform#integrations',
  },
  {
    title: 'Partner Success Desk',
    description: 'Dedicated facilitator enablement, compliance tooling, and multi-country SLA monitoring.',
    icon: BarChart3,
    to: '/support#partner-success',
  },
]

export default function QuickGateways() {
  return (
    <section className="bg-white py-16" id="gateways">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <AccentPill size="sm" className="tracking-[0.25em]">
              Quick gateways
            </AccentPill>
            <h2 className="mt-4 text-3xl font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_88%,#032823_12%)] sm:text-4xl">
              Enterprise-ready touchpoints for every operator
            </h2>
          </div>
          <p className="max-w-xl text-base text-[color-mix(in_srgb,var(--brand-emerald)_35%,#05382c_65%)]">
            Each tile is wired for enterprise security and reporting so procurement leaders, technology teams, and field facilitators land on the exact controls they need.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gateways.map(({ title, description, icon, to }) => {
            const IconComponent = icon
            return (
              <Link
                key={title}
                to={to}
                className="group flex h-[220px] w-full flex-col justify-between rounded-2xl border border-[color-mix(in_srgb,var(--brand-emerald)_25%,#ffffff)] bg-white p-6 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--brand-emerald)_70%,#032823_30%)] hover:shadow-xl"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--brand-emerald)_12%,#ffffff_88%)] text-[var(--brand-emerald)] shadow-md shadow-black/5 transition group-hover:bg-[var(--brand-emerald)] group-hover:text-white">
                  <IconComponent className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--brand-emerald)]">{title}</h3>
                  <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--brand-emerald)_35%,#05382c_65%)]">{description}</p>
                </div>
                <span className="inline-flex items-center justify-start text-sm font-semibold text-[var(--brand-emerald)] transition group-hover:text-[color-mix(in_srgb,var(--brand-emerald)_70%,#032823_30%)]">
                  Explore
                  <svg
                    className="ml-2 size-4 transition group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
