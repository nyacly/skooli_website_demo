import { Linkedin } from 'lucide-react'
import { AccentPill } from '@/components/AccentPill.jsx'

const founders = [
  {
    name: 'Christine Namaganda',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80',
    bio: 'Christine leads Skooli’s continental expansion, guiding strategic partnerships with ministries of education and major church networks. She built procurement programmes delivering 1.2M learner kits across East Africa and now stewards Skooli’s gospel-shaped governance.',
    metrics: [
      { label: 'Education supply deployments overseen', value: '48 national rollouts' },
      { label: 'Faith-based partner networks mobilised', value: '320 congregations' },
    ],
    linkedin: 'https://www.linkedin.com/in/christine-namaganda',
  },
  {
    name: 'Isaac Oryem',
    role: 'Co-founder & COO',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80',
    bio: 'Isaac architects Skooli’s distribution network, uniting cross-border freight, boda-boda riders, and diocesan volunteers. Previously a DHL operations chief, he pioneered temperature-controlled supply chains reaching 200+ rural health posts before translating that rigour to classrooms.',
    metrics: [
      { label: 'On-time delivery performance', value: '97.4% last mile' },
      { label: 'Team members coached & certified', value: '180 logistics staff' },
    ],
    linkedin: 'https://www.linkedin.com/in/isaac-oryem',
  },
  {
    name: 'Lydia Kaggwa',
    role: 'CTO',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    bio: 'Lydia leads the product, data, and AI engineering teams powering Skooli’s logistics intelligence. A former Andela principal engineer, she has shipped resilient platforms linking mobile money, ERP systems, and AI-powered routing that cut failed deliveries by 63%.',
    metrics: [
      { label: 'Digital transactions protected monthly', value: '52k payments' },
      { label: 'AI routing accuracy uplift', value: '+41% predictive' },
    ],
    linkedin: 'https://www.linkedin.com/in/lydia-kaggwa',
  },
]

const advisors = [
  {
    name: 'Dr. David Mulongo',
    focus: 'EdTech Strategy',
    tags: ['EdTech', 'Policy'],
    summary:
      'Former Ministry of Education director overseeing edtech pilots for 12,000 teachers; now mentors our digital pedagogy standards and evaluation frameworks.',
  },
  {
    name: 'Angela Wekesa',
    focus: 'Logistics',
    tags: ['Logistics', 'Operations'],
    summary:
      'Regional logistics leader who has deployed 200+ fleet management systems across East Africa and negotiates our ethical sourcing benchmarks.',
  },
  {
    name: 'Samuel Kato',
    focus: 'Finance & Impact',
    tags: ['Finance', 'Impact'],
    summary:
      'Impact investment advisor guiding blended finance deals for youth and education ventures, monitoring our SDG-aligned capital stack.',
  },
]

const cultureQuotes = [
  {
    staff: 'Naomi — Customer Success',
    quote: '“We pray with families before deliveries. That moment anchors our mission.”',
  },
  {
    staff: 'Joel — Warehouse Lead',
    quote: '“Every box is checked twice because each student is a child of God.”',
  },
  {
    staff: 'Esther — Partner Manager',
    quote: '“Transparency builds trust. Our dashboards keep donors accountable to students.”',
  },
]

export default function MeetTheTeam() {
  return (
    <div className="bg-[var(--brand-cream)]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <AccentPill size="sm" className="mx-auto tracking-[0.25em]">
            Meet the team
          </AccentPill>
          <h1 className="mt-4 text-4xl font-bold text-[var(--brand-emerald)]">Faithful leaders stewarding Skooli’s mission</h1>
          <p className="mt-4 text-base text-slate-600">
            Our team blends logistics, technology, and ministry experience to deliver for learners across Uganda.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Founders</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="flex h-full flex-col overflow-hidden rounded-3xl bg-white text-left shadow-lg shadow-black/5"
              >
                <img
                  src={founder.image}
                  alt={`${founder.name} portrait`}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--brand-emerald)]">{founder.name}</h3>
                    <AccentPill size="xs" className="mt-2 tracking-[0.2em]">
                      {founder.role}
                    </AccentPill>
                    <p className="mt-3 text-sm text-slate-600">{founder.bio}</p>
                  </div>
                  <dl className="mt-4 grid gap-3 rounded-2xl bg-[var(--brand-cream)]/70 p-4 text-sm text-[var(--brand-emerald)]">
                    {founder.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col">
                        <dt className="font-semibold">{metric.value}</dt>
                        <dd className="text-xs uppercase tracking-[0.3em] text-[var(--brand-emerald)]/70">
                          {metric.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <a
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-[var(--brand-emerald)] px-4 py-2 text-sm font-semibold text-[var(--brand-emerald)] shadow transition hover:bg-[var(--brand-emerald)] hover:text-white"
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="size-4" /> Connect on LinkedIn
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Advisors</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="rounded-3xl bg-[var(--brand-cream)] p-6 shadow-lg shadow-black/5">
                <h3 className="text-lg font-semibold text-[var(--brand-emerald)]">{advisor.name}</h3>
                <AccentPill size="xs" className="mt-2 tracking-[0.2em]">
                  {advisor.focus}
                </AccentPill>
                <p className="mt-3 text-sm text-slate-600">{advisor.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {advisor.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-emerald)] shadow">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Culture values</h2>
          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-4">
              {cultureQuotes.map((item) => (
                <div key={item.staff} className="min-w-[260px] rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                  <p className="text-sm text-slate-600">{item.quote}</p>
                  <p className="mt-4 text-sm font-semibold text-[var(--brand-emerald)]">{item.staff}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
