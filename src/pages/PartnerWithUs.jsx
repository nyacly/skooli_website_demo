import { useState } from 'react'
import { Building, Landmark, Handshake, Church, BarChart3, PieChart, LineChart, ClipboardCheck, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import ComplianceKit from '@/components/ComplianceKit.jsx'
import { AccentPill } from '@/components/AccentPill.jsx'

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

const stakeholderGrid = [
  {
    title: 'Administration',
    benefit: 'Single control tower for procurement, finance, and safeguarding audit trails.',
    collateral: { label: 'Leadership launch brief', href: '/templates/mou-template.pdf', download: true },
  },
  {
    title: 'Parents',
    benefit: 'Flexible payment options with multilingual communications and hotline support.',
    collateral: { label: 'Parent communication pack', href: '/templates/parent-communication-pack.pdf', download: true },
  },
  {
    title: 'Students',
    benefit: 'Bundled wellness support, inclusive sizing, and dignity-first distribution.',
    collateral: { label: 'Student onboarding guide', href: '/templates/student-onboarding-guide.pdf', download: true },
  },
  {
    title: 'Government',
    benefit: 'Policy-aligned procurement with API access for ministry oversight and PPDA compliance.',
    collateral: { label: 'Data sharing template', href: '/templates/data-sharing-template.pdf', download: true },
  },
  {
    title: 'Suppliers',
    benefit: 'Guaranteed demand forecasts, quality audits, and digitised payments.',
    collateral: { label: 'Supplier service agreement', href: '/templates/supplier-service-agreement.pdf', download: true },
  },
  {
    title: 'Faith leaders',
    benefit: 'Story-driven mobilisation kits with safeguarding guidelines and transparent reporting.',
    collateral: { label: 'Faith leader briefing', href: '/templates/faith-leader-brief.pdf', download: true },
  },
]

export default function PartnerWithUs() {
  const [activeSegment, setActiveSegment] = useState('ngos')
  const segment = segments[activeSegment]

  return (
    <div className="bg-[var(--brand-cream)]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <AccentPill size="sm" className="tracking-[0.25em]">
            Partnerships
          </AccentPill>
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
                className="mt-6 rounded-md bg-[var(--brand-emerald)] px-6 py-3 text-white shadow-lg shadow-[var(--brand-emerald)]/20 hover:bg-[color-mix(in_srgb,var(--brand-emerald)_80%,#032823_20%)]"
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
                    ? 'border-[var(--brand-emerald)] bg-[color-mix(in_srgb,var(--brand-cream)_82%,#ffffff_18%)] text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] shadow-inner shadow-white/60'
                    : 'border-transparent bg-white hover:border-[var(--brand-emerald)]/40 hover:bg-[color-mix(in_srgb,var(--brand-cream)_82%,#ffffff_18%)]'
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
                    ? 'border-[var(--brand-emerald)] bg-[color-mix(in_srgb,var(--brand-cream)_82%,#ffffff_18%)] text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] shadow-inner shadow-white/60'
                    : 'border-transparent bg-white hover:border-[var(--brand-emerald)]/40 hover:bg-[color-mix(in_srgb,var(--brand-cream)_82%,#ffffff_18%)]'
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
                    ? 'border-[var(--brand-emerald)] bg-[color-mix(in_srgb,var(--brand-cream)_82%,#ffffff_18%)] text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] shadow-inner shadow-white/60'
                    : 'border-transparent bg-white hover:border-[var(--brand-emerald)]/40 hover:bg-[color-mix(in_srgb,var(--brand-cream)_82%,#ffffff_18%)]'
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
                    ? 'border-[var(--brand-emerald)] bg-[color-mix(in_srgb,var(--brand-cream)_82%,#ffffff_18%)] text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] shadow-inner shadow-white/60'
                    : 'border-transparent bg-white hover:border-[var(--brand-emerald)]/40 hover:bg-[color-mix(in_srgb,var(--brand-cream)_82%,#ffffff_18%)]'
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

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div>
              <AccentPill size="sm" className="tracking-[0.25em]">
                Stakeholder alignment
              </AccentPill>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--brand-emerald)]">Value narratives tailored to every decision maker</h2>
              <p className="mt-3 text-sm text-slate-600">
                Ensure every stakeholder group understands the programme promise and has ready-to-share collateral for swift
                internal approvals.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {stakeholderGrid.map((stakeholder) => (
                  <div key={stakeholder.title} className="flex flex-col justify-between rounded-3xl bg-white p-5 shadow-lg shadow-black/5">
                    <div>
                      <p className="text-sm font-semibold text-[var(--brand-emerald)]">{stakeholder.title}</p>
                      <p className="mt-2 text-xs text-slate-600">{stakeholder.benefit}</p>
                    </div>
                    <a
                      href={stakeholder.collateral.href}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] underline decoration-[color-mix(in_srgb,var(--brand-emerald)_40%,#032823_60%)] decoration-2 underline-offset-4 hover:text-[var(--brand-emerald)]"
                      download={stakeholder.collateral.download}
                    >
                      {stakeholder.collateral.label}
                      <ExternalLink className="size-3" aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <ComplianceKit title="Legal & compliance hub" blurb="MoU, privacy, and supplier templates pre-vetted for procurement teams and donors." />
          </div>
        </div>
      </section>
    </div>
  )
}
