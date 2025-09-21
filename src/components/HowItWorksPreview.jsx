import { Link } from 'react-router-dom'
import { ShoppingBag, Route, Gift } from 'lucide-react'

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
    <section className="bg-white py-16" id="how-it-works-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">How it works</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0F4C81] sm:text-4xl">A frictionless supply chain from cart to classroom</h2>
          </div>
          <Link
            to="/how-it-works"
            className="text-sm font-semibold text-[#F05A28] transition hover:text-[#0F4C81]"
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
                className="rounded-2xl bg-[#F7F5EF] p-8 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0F4C81] shadow-md">
                  <StepIcon className="size-6" aria-hidden="true" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#0F4C81]">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
