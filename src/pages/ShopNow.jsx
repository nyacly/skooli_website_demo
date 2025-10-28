import { ShoppingBag, ShieldCheck, Smartphone, Clock, Sparkles, PackageSearch } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const benefits = [
  {
    title: 'Curated school bundles',
    description: 'Term-ready kits aligned to each school’s approved list—uniforms, stationery, and hygiene essentials.',
    icon: ShoppingBag,
  },
  {
    title: 'Layaway & mobile money',
    description: 'Break payments into up to 4 instalments via MTN MoMo or Airtel Money with instant receipts.',
    icon: Smartphone,
  },
  {
    title: 'Delivery guarantees',
    description: 'Every package insured, geo-tagged, and signed for on campus to protect your investment.',
    icon: ShieldCheck,
  },
  {
    title: 'Termly reminders',
    description: 'SMS and WhatsApp nudges keep you on schedule for top-up orders and exam-week refreshers.',
    icon: Clock,
  },
]

const bundles = [
  {
    name: 'Primary Starter Pack',
    price: 'UGX 185,000',
    items: ['2 uniforms', 'Exercise books (24)', 'Mathematical set', 'Reusable water bottle'],
  },
  {
    name: 'Boarding Essentials',
    price: 'UGX 320,000',
    items: ['Duvet & bed sheets', 'Mosquito net', 'Laundry kit', 'Prayer journal'],
  },
  {
    name: 'Exam Booster Kit',
    price: 'UGX 98,000',
    items: ['Past papers', 'Revision guides', 'Healthy snacks', 'Blue/black pens (12)'],
  },
]

export default function ShopNow() {
  return (
    <div className="bg-[var(--brand-cream)]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Parents & guardians</p>
          <h1 className="mt-4 text-4xl font-bold text-[var(--brand-emerald)]">Shop, schedule, and track every supply with confidence</h1>
          <p className="mt-6 text-base text-slate-600">
            The Skooli Parent Portal puts everything in one place: curated bundles, secure payments, and live delivery alerts so your child never misses a school day.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button className="rounded-md bg-[var(--brand-gold)] px-8 py-3 text-white shadow hover:bg-[color-mix(in_srgb,var(--brand-gold)_80%,#000_20%)]">
              Launch Parent Portal
            </Button>
            <Button
              variant="outline"
              className="rounded-md border-[var(--brand-emerald)] px-8 py-3 text-[var(--brand-emerald)] shadow hover:bg-[var(--brand-emerald)] hover:text-white"
            >
              Download Product Catalogue
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16" id="parent-portal">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Why parents love Skooli</h2>
              <p className="text-base text-slate-600">
                Each feature is designed for flexibility and transparency. Switch between children, approve spending, and monitor deliveries without leaving your phone.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map(({ title, description, icon }) => {
                  const BenefitIcon = icon
                  return (
                    <div key={title} className="rounded-3xl bg-white p-5 shadow-lg shadow-black/5">
                      <div className="flex items-center gap-3 text-[var(--brand-emerald)]">
                        <BenefitIcon className="size-5" aria-hidden="true" />
                        <h3 className="text-base font-semibold">{title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-slate-600">{description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-xl shadow-black/10">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
                <Sparkles className="size-5" />
                Demo view
              </div>
              <div className="mt-6 space-y-4 text-left">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Child accounts</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--brand-emerald)]">Naomi | P6 · Ethan | S2</p>
                  <p className="mt-1 text-sm text-slate-600">Toggle between learners and approve top-up budgets instantly.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Delivery status</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--brand-emerald)]">Warehouse scan complete</p>
                  <p className="mt-1 text-sm text-slate-600">Driver Moses heads to Gayaza High. ETA 08:30 with SMS alerts.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Savings</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--brand-emerald)]">UGX 64,000 saved this term</p>
                  <p className="mt-1 text-sm text-slate-600">Earn credit when friends join via your referral code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="student-account">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Cashless student account</h2>
              <p className="mt-4 text-base text-slate-600">
                Top up allowances and decide where students can spend—canteen, bookshop, or emergency supplies. Every purchase is itemised and available to parents and school finance teams.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li>• Spend controls by category and daily limits</li>
                <li>• Instant notifications for every transaction</li>
                <li>• Digital receipts shared with school bursars</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-3xl bg-[var(--brand-cream)] p-8 shadow-lg shadow-black/5">
                <h3 className="text-lg font-semibold text-[var(--brand-emerald)]">What parents say</h3>
                <p className="mt-3 text-sm text-slate-600">
                  “Skooli’s wallet replaced sending cash through boda riders. I get alerts, my daughter feels trusted, and I know she has what she needs.”
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--brand-emerald)]">— Sarah L., Kampala</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Featured bundles</p>
            <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Term-perfect packs families rely on</h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600">
              Every bundle is co-designed with partner schools and refreshed each term based on curriculum updates and pastoral needs.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {bundles.map((bundle) => (
              <div key={bundle.name} className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <div className="flex items-center gap-3 text-[var(--brand-emerald)]">
                  <PackageSearch className="size-5" />
                  <h3 className="text-lg font-semibold">{bundle.name}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">Includes:</p>
                <ul className="mt-2 flex-1 space-y-2 text-sm text-slate-600">
                  {bundle.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-lg font-semibold text-[var(--brand-emerald)]">{bundle.price}</p>
                <Button className="mt-4 rounded-md bg-[var(--brand-gold)] text-white hover:bg-[color-mix(in_srgb,var(--brand-gold)_80%,#000_20%)]">
                  Pre-order
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
