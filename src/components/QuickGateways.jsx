import { Link } from 'react-router-dom'

const gateways = [
  {
    title: 'Our Impact',
    description: "How we're making a difference",
    to: '/vision-impact',
  },
  {
    title: 'Our Services',
    description: 'Learn more about what we offer',
    to: '/services',
  },
  {
    title: 'Investor Briefing',
    description: 'Opportunities in investing with us',
    to: '/funders',
  },
]

export default function QuickGateways() {
  return (
    <section className="bg-white py-16 sm:py-20" id="gateways">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Learn More</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gateways.map(({ title, description, to }) => (
            <Link
              key={title}
              to={to}
              className="group block rounded-lg bg-slate-50 p-6 transition hover:bg-slate-100"
            >
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-base text-slate-600">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
