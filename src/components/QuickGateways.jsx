import { Link } from 'react-router-dom'
import { ShieldCheck, ServerCog, BarChart3 } from 'lucide-react'
import { AccentPill } from '@/components/AccentPill.jsx'
import { Card, CardDescription, CardTitle } from '@/components/ui/card.jsx'

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
    <section className="section-shell bg-[var(--brand-white)]" id="gateways">
      <div className="section-container">
        <div className="flex flex-col items-start justify-between gap-[var(--space-xl)] md:flex-row md:items-end">
          <div>
            <AccentPill size="sm" className="tracking-[0.25em]">
              Our Services
            </AccentPill>
            <h2 className="mt-[var(--space-sm)] typography-heading-2 font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_82%,var(--emerald-ink)_18%)]">
              Enterprise-ready solutions for every stakeholder
            </h2>
          </div>
          <p className="max-w-xl typography-body-md text-[color-mix(in_srgb,var(--brand-emerald)_35%,var(--emerald-canopy)_65%)]">
            Each of our services is designed with enterprise-grade security and reporting, ensuring that stakeholders at every level have the tools they need to succeed.
          </p>
        </div>
        <div className="mt-[var(--space-2xl)] grid gap-[var(--space-lg)] sm:grid-cols-2 lg:grid-cols-3">
          {gateways.map(({ title, description, icon, to }) => {
            const IconComponent = icon
            return (
              <Card
                key={title}
                asChild
                variant="surface"
                padding="lg"
                interactive
                className="justify-between"
              >
                <Link
                  to={to}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color-mix(in_srgb,var(--brand-emerald)_70%,var(--emerald-ink)_30%)]"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--brand-emerald)_12%,var(--brand-white)_88%)] text-[var(--brand-emerald)] shadow-md shadow-black/5 transition group-hover/card:bg-[var(--brand-emerald)] group-hover/card:text-[var(--brand-white)]">
                    <IconComponent className="size-6" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-[var(--space-2xs)]">
                    <CardTitle className="typography-heading-4 text-[var(--brand-emerald)]">{title}</CardTitle>
                    <CardDescription className="typography-body-sm text-[color-mix(in_srgb,var(--brand-emerald)_35%,var(--emerald-canopy)_65%)]">
                      {description}
                    </CardDescription>
                  </div>
                  <span className="inline-flex items-center justify-start typography-body-sm font-semibold text-[var(--brand-emerald)] transition group-hover/card:text-[color-mix(in_srgb,var(--brand-emerald)_70%,var(--emerald-ink)_30%)]">
                    Explore
                    <svg
                      className="ml-[var(--space-2xs)] size-4 transition group-hover/card:translate-x-1"
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
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
