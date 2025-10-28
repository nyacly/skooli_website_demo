import { useState } from 'react'
import { Building, Landmark, Handshake, Church, BarChart3, PieChart, LineChart, ClipboardCheck, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const segments = {
  ngos: {
    title: 'NGOs & Sponsors',
    overview:
      'Deploy transparent, auditable programmes with real-time dashboards on attendance, delivery, and impact outcomes.',
    value: [
      'Impact dashboards with disaggregated data',
      'Instant beneficiary verification via QR check-in',
      'Faith-friendly stories and student testimonials',
    ],
    caseStudy: 'Compassion International pilot — 500 students equipped across 8 districts with 99.2% delivery success.',
  },
  governments: {
    title: 'Governments',
    overview: 'Align procurement to ministry policies while retaining full visibility and audit trails.',
    value: [
      'Ministry of Education dashboard with SLA controls',
      'Draft MoES MOU template ready for review',
      'Automated reporting to Inspectorate and district officials',
    ],
    caseStudy: 'MoES MOU draft ready — streamlining school package distribution for national rollout.',
  },
  suppliers: {
    title: 'Suppliers',
    overview:
      'Reach guaranteed demand, receive fair payment terms, and plug into a digitised procurement network.',
    value: [
      'Guaranteed purchase orders per term',
      'Local warehousing and quality assurance support',
      'Supplier success team with onboarding playbooks',
    ],
    caseStudy: 'Local stationery vendor scaled from 3 to 28 schools through Skooli demand planning.',
  },
  churches: {
    title: 'Churches',
    overview: 'Mobilise congregations for student sponsorship and share impact stories with donors each Sunday.',
    value: [
      'Donation APIs connect giving platforms to student profiles',
      'Branded church kits with testimonies and visuals',
      'Training for youth pastors on data privacy and safeguarding',
    ],
    caseStudy: 'Church-led sponsorship pilot reached 220 vulnerable students within 6 weeks.',
  },
}

const sharedBenefits = [
  {
    icon: BarChart3,
    title: 'Data dashboard access',
    description: 'Partner-only analytics with filters for district, gender, disability inclusion, and delivery timelines.',
  },
  {
    icon: PieChart,
    title: 'Transparent reporting',
    description: 'Export investor-grade reports, share infographics, and embed widgets on your own platforms.',
  },
  {
    icon: LineChart,
    title: 'Guaranteed impact',
    description: 'Every shilling traced from procurement order to student handover with audit-ready documentation.',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance-ready',
    description: 'Aligned to Ugandan PPDA guidelines, donor requirements, and safeguarding protocols.',
  },
]

export default function PartnerWithUs() {
  const [activeSegment, setActiveSegment] = useState('ngos')
  const segment = segments[activeSegment]

  return (
    <div className="bg-[var(--brand-cream)]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Partnerships</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-[var(--brand-emerald)]">Partner with Skooli to scale dignified access</h1>
              <p className="mt-4 text-base text-slate-600">
                Whether you are a philanthropic sponsor, government ministry, supplier, or church network, Skooli offers infrastructure built for collaboration.
              </p>
            </div>
            <div className="rounded-3xl bg-[var(--brand-emerald)] p-6 text-white shadow-lg shadow-black/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Dynamic Typeform</p>
              <p className="mt-2 text-lg">Tell us how you’d like to collaborate and a partnership lead will respond within 48 hours.</p>
              <Button
                className="mt-6 rounded-md bg-[var(--brand-gold)] px-6 py-3 text-white shadow hover:bg-[color-mix(in_srgb,var(--brand-gold)_80%,#000_20%)]"
                asChild
              >
                <a href="https://form.typeform.com/to/skooli-partner" target="_blank" rel="noreferrer">
                  Open Partner Inquiry <ExternalLink className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
            <div className="grid gap-4 sm:grid-cols-4">
              <button
                type="button"
                className={`flex flex-col items-start gap-2 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                  activeSegment === 'ngos'
                    ? 'border-[var(--brand-gold)] bg-[var(--brand-cream)] text-[var(--brand-emerald)]'
                    : 'border-transparent bg-white hover:border-[var(--brand-gold)]/40 hover:bg-[var(--brand-cream)]'
                }`}
                onClick={() => setActiveSegment('ngos')}
              >
                <Building className="size-5 text-[var(--brand-emerald)]" />
                NGOs & Sponsors
              </button>
              <button
                type="button"
                className={`flex flex-col items-start gap-2 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                  activeSegment === 'governments'
                    ? 'border-[var(--brand-gold)] bg-[var(--brand-cream)] text-[var(--brand-emerald)]'
                    : 'border-transparent bg-white hover:border-[var(--brand-gold)]/40 hover:bg-[var(--brand-cream)]'
                }`}
                onClick={() => setActiveSegment('governments')}
              >
                <Landmark className="size-5 text-[var(--brand-emerald)]" />
                Governments
              </button>
              <button
                type="button"
                className={`flex flex-col items-start gap-2 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                  activeSegment === 'suppliers'
                    ? 'border-[var(--brand-gold)] bg-[var(--brand-cream)] text-[var(--brand-emerald)]'
                    : 'border-transparent bg-white hover:border-[var(--brand-gold)]/40 hover:bg-[var(--brand-cream)]'
                }`}
                onClick={() => setActiveSegment('suppliers')}
              >
                <Handshake className="size-5 text-[var(--brand-emerald)]" />
                Suppliers
              </button>
              <button
                type="button"
                className={`flex flex-col items-start gap-2 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                  activeSegment === 'churches'
                    ? 'border-[var(--brand-gold)] bg-[var(--brand-cream)] text-[var(--brand-emerald)]'
                    : 'border-transparent bg-white hover:border-[var(--brand-gold)]/40 hover:bg-[var(--brand-cream)]'
                }`}
                onClick={() => setActiveSegment('churches')}
              >
                <Church className="size-5 text-[var(--brand-emerald)]" />
                Churches
              </button>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">{segment.title}</h2>
                <p className="mt-4 text-sm text-slate-600">{segment.overview}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {segment.value.map((valuePoint) => (
                    <li key={valuePoint}>• {valuePoint}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-[var(--brand-cream)] p-6 shadow-inner">
                <p className="text-sm font-semibold text-[var(--brand-emerald)]">Case study</p>
                <p className="mt-3 text-sm text-slate-600">{segment.caseStudy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-4">
            {sharedBenefits.map(({ icon, title, description }) => {
              const BenefitIcon = icon
              return (
                <div key={title} className="rounded-3xl bg-[var(--brand-cream)] p-6 shadow-lg shadow-black/5">
                  <BenefitIcon className="size-6 text-[var(--brand-emerald)]" />
                  <h3 className="mt-4 text-lg font-semibold text-[var(--brand-emerald)]">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
