import { Linkedin } from 'lucide-react'

const founders = [
  {
    name: 'Christine Namaganda',
    role: 'Founder & CEO',
    initials: 'CN',
    bio: 'Former procurement lead for a pan-African NGO, Christine blends supply chain rigour with a pastoral heart for families.',
    linkedin: 'https://www.linkedin.com/in/christine-namaganda',
  },
  {
    name: 'Isaac Oryem',
    role: 'Co-founder & COO',
    initials: 'IO',
    bio: 'Ex-DHL operations manager with expertise in cold-chain logistics and church mobilization across northern Uganda.',
    linkedin: 'https://www.linkedin.com/in/isaac-oryem',
  },
  {
    name: 'Lydia Kaggwa',
    role: 'CTO',
    initials: 'LK',
    bio: 'Full-stack engineer formerly at Andela, building resilient platforms connecting mobile money, AI routing, and school systems.',
    linkedin: 'https://www.linkedin.com/in/lydia-kaggwa',
  },
]

const advisors = [
  {
    name: 'Dr. David Mulongo',
    focus: 'EdTech Strategy',
    tags: ['EdTech', 'Policy'],
    summary: 'Former director at the Ministry of Education overseeing edtech pilots and teacher development.',
  },
  {
    name: 'Angela Wekesa',
    focus: 'Logistics',
    tags: ['Logistics', 'Operations'],
    summary: 'Regional logistics leader who has deployed 200+ fleet management systems across East Africa.',
  },
  {
    name: 'Samuel Kato',
    focus: 'Finance & Impact',
    tags: ['Finance', 'Impact'],
    summary: 'Impact investment advisor guiding blended finance deals for youth and education ventures.',
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
    <div className="bg-[#F7F5EF]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">Meet the team</p>
          <h1 className="mt-4 text-4xl font-bold text-[#0F4C81]">Faithful leaders stewarding Skooli’s mission</h1>
          <p className="mt-4 text-base text-slate-600">
            Our team blends logistics, technology, and ministry experience to deliver for learners across Uganda.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-[#0F4C81]">Founders</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {founders.map((founder) => (
              <div key={founder.name} className="rounded-3xl bg-white p-6 text-center shadow-lg shadow-black/5">
                <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-[#0F4C81] text-3xl font-bold text-white">
                  {founder.initials}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#0F4C81]">{founder.name}</h3>
                <p className="text-sm font-semibold text-[#F05A28]">{founder.role}</p>
                <p className="mt-3 text-sm text-slate-600">{founder.bio}</p>
                <a
                  className="mt-4 inline-flex items-center gap-2 rounded-md border border-[#0F4C81] px-4 py-2 text-sm font-semibold text-[#0F4C81] shadow hover:bg-[#0F4C81] hover:text-white"
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="size-4" /> Connect
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-[#0F4C81]">Advisors</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="rounded-3xl bg-[#F7F5EF] p-6 shadow-lg shadow-black/5">
                <h3 className="text-lg font-semibold text-[#0F4C81]">{advisor.name}</h3>
                <p className="text-sm font-semibold text-[#F05A28]">{advisor.focus}</p>
                <p className="mt-3 text-sm text-slate-600">{advisor.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {advisor.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0F4C81] shadow">
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
          <h2 className="text-3xl font-semibold text-[#0F4C81]">Culture values</h2>
          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-4">
              {cultureQuotes.map((item) => (
                <div key={item.staff} className="min-w-[260px] rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                  <p className="text-sm text-slate-600">{item.quote}</p>
                  <p className="mt-4 text-sm font-semibold text-[#0F4C81]">{item.staff}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
