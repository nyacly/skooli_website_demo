import { Link } from 'react-router-dom'
import { ShieldCheck, ServerCog, BarChart3 } from 'lucide-react'
import { AccentPill } from '@/components/AccentPill.jsx'

const gateways = [
  {
    title: 'For Businesses',
    description: 'Discover partnership opportunities, corporate social responsibility initiatives, and how your business can drive innovation in education.',
    icon: ShieldCheck,
    to: '/for-business',
  },
  {
    title: 'For Schools',
    description: 'Learn how Skooli can streamline your supply chain, digitize orders, and provide quality resources for your students.',
    icon: ServerCog,
    to: '/schools',
  },
  {
    title: 'Partner With Us',
    description: 'Join our network of suppliers, NGOs, and community agents to make a lasting impact on education in Africa.',
    icon: BarChart3,
    to: '/partner',
  },
]

export default function QuickGateways() {
  return (
    <section className="bg-white py-16" id="gateways">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <AccentPill size="sm" className="tracking-[0.25em]">
              Our Services
            </AccentPill>
            <h2 className="mt-4 text-3xl font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_88%,#032823_12%)] sm:text-4xl">
              Enterprise-ready solutions for every stakeholder
            </h2>
          </div>
          <p className="max-w-xl text-base text-[color-mix(in_srgb,var(--brand-emerald)_35%,#05382c_65%)]">
            Each of our services is designed with enterprise-grade security and reporting, ensuring that stakeholders at every level have the tools they need to succeed.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gateways.map(({ title, description, icon, to }) => {
            const IconComponent = icon
            return (
              <Link
                key={title}
                to={to}
                className="group flex flex-col justify-between rounded-2xl border border-[color-mix(in_srgb,var(--brand-emerald)_25%,#ffffff)] bg-white p-6 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--brand-emerald)_70%,#032823_30%)] hover:shadow-xl"
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
