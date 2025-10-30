import { Link } from 'react-router-dom'
import { ShoppingBag, Route, Gift } from 'lucide-react'
import { AccentPill } from '@/components/AccentPill.jsx'

const steps = [
  {
    title: 'Shop Online',
    description: 'Families browse curated bundles, add layaway, and pay via mobile money.',
    icon: ShoppingBag,
  },
  {
    title: 'We Deliver',
    description: 'Smart routing connects warehouses to school gates with live tracking.',
    icon: Route,
  },
  {
    title: 'Students Receive',
    description: 'Uniformed handovers and verified signatures ensure every child is covered.',
    icon: Gift,
  },
]

export default function HowItWorksPreview() {
  return (
    <section className="bg-[var(--brand-white)] py-16" id="how-it-works-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <AccentPill size="sm" className="tracking-[0.25em]">
              How it works
            </AccentPill>
            <h2 className="mt-4 typography-heading-2 font-semibold text-[var(--brand-emerald)]">A frictionless supply chain from cart to classroom</h2>
          </div>
          <Link
            to="/how-it-works"
            className="typography-body-sm font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)] transition hover:text-[var(--brand-emerald)]"
          >
            Explore the full playbook →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ title, description, icon }, index) => {
            const StepIcon = icon
            return (
              <div
                key={title}
                className="rounded-2xl bg-[var(--brand-cream)] p-8 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-white)] text-[var(--brand-emerald)] shadow-md">
                  <StepIcon className="size-6" aria-hidden="true" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--emerald-bough)_45%,var(--emerald-mist)_55%)]">Step {index + 1}</p>
                <h3 className="mt-2 typography-heading-4 font-semibold text-[var(--brand-emerald)]">{title}</h3>
                <p className="mt-2 typography-body-sm text-[color-mix(in_srgb,var(--emerald-bough)_65%,var(--emerald-mist)_35%)]">{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
