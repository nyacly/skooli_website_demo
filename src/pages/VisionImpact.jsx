import { useMemo, useState } from 'react'
import { Compass, Globe2, Users2, HeartHandshake, Quote, ArrowLeft, ArrowRight } from 'lucide-react'

const pillars = [
  {
    title: 'Service',
    description: 'We show up for learners, families, and schools with empathy and excellence.',
  },
  {
    title: 'Integrity',
    description: 'Transparent reporting, ethical sourcing, and faith-rooted accountability.',
  },
  {
    title: 'Stewardship',
    description: 'Every shilling is optimised for maximum educational impact and sustainability.',
  },
]

const districts = [
  { id: 'kampala', name: 'Kampala', cx: 120, cy: 120, radius: 22, schools: 46 },
  { id: 'wakiso', name: 'Wakiso', cx: 150, cy: 140, radius: 26, schools: 34 },
  { id: 'gulu', name: 'Gulu', cx: 210, cy: 80, radius: 20, schools: 18 },
  { id: 'arua', name: 'Arua', cx: 70, cy: 60, radius: 18, schools: 12 },
  { id: 'mbale', name: 'Mbale', cx: 260, cy: 140, radius: 19, schools: 15 },
  { id: 'mbarara', name: 'Mbarara', cx: 120, cy: 190, radius: 21, schools: 22 },
]

const sdgTiles = [
  {
    sdg: 'SDG 4 — Quality Education',
    metric: '28,400 learners equipped with termly supplies',
    icon: Globe2,
  },
  {
    sdg: 'SDG 8 — Decent Work',
    metric: '312 seasonal jobs created for youth & mothers',
    icon: Users2,
  },
  {
    sdg: 'SDG 9 — Industry & Innovation',
    metric: '45 local suppliers digitised via logistics APIs',
    icon: HeartHandshake,
  },
]

const stories = [
  {
    name: 'Grace — Parent, Lira',
    narrative:
      '“My son received his science kit on the first day of term. For the first time, we didn’t scramble last minute or overpay in town.”',
  },
  {
    name: 'Brian — Student, Wakiso',
    narrative:
      '“The Skooli delivery team called me by name and prayed with our class. The packages even included affirmations for exam week.”',
  },
  {
    name: 'Sr. Immaculate — Headteacher, Hoima',
    narrative:
      '“We now monitor deliveries online. Our board can see dashboards with punctuality, spend, and stories of sponsored learners.”',
  },
]

export default function VisionImpact() {
  const [activeDistrict, setActiveDistrict] = useState(districts[0])
  const [storyIndex, setStoryIndex] = useState(0)

  const nextStory = () => setStoryIndex((index) => (index + 1) % stories.length)
  const prevStory = () => setStoryIndex((index) => (index - 1 + stories.length) % stories.length)

  const highlightedDistrict = useMemo(
    () => districts.find((district) => district.id === activeDistrict.id) ?? districts[0],
    [activeDistrict.id],
  )

  return (
    <div className="bg-[var(--brand-cream)]">
      <section className="bg-white py-16" id="mission">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="relative overflow-hidden rounded-3xl bg-[var(--brand-emerald)] p-10 text-white shadow-lg shadow-black/10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border-4 border-white/20" />
              <div className="pointer-events-none absolute bottom-10 right-8 text-white/20">
                <span className="text-6xl font-bold">✝</span>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Mission</p>
              <h1 className="mt-6 text-4xl font-bold leading-tight">
                “Every learner equipped. Every school empowered.”
              </h1>
              <p className="mt-4 text-lg text-white/90">— CEO, Christian Foundations</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">{pillar.title}</p>
                    <p className="mt-2 text-sm text-white/80">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-[var(--brand-cream)] p-10 shadow-lg shadow-black/5">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
                <Compass className="size-5" /> Vision 2030
              </div>
              <p className="mt-5 text-lg text-[var(--brand-emerald)]">
                Skooli envisions an Africa where access to education supplies is never a barrier to learning or dignity.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                We combine data, logistics, and ministry partnerships to strengthen education ecosystems—one on-time delivery at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="rounded-3xl bg-white p-8 shadow-lg shadow-black/5">
              <svg
                viewBox="0 0 320 240"
                className="h-72 w-full"
                role="img"
                aria-labelledby="ugandaMapTitle"
              >
                <title id="ugandaMapTitle">Uganda impact map with Skooli districts</title>
                <rect x="0" y="0" width="320" height="240" fill="var(--brand-cream)" rx="32" />
                {districts.map((district) => (
                  <g key={district.id}>
                    <circle
                      cx={district.cx}
                      cy={district.cy}
                      r={district.radius}
                      fill={district.id === highlightedDistrict.id ? 'var(--brand-gold)' : 'var(--brand-emerald)'}
                      fillOpacity={district.id === highlightedDistrict.id ? 0.85 : 0.65}
                      className="cursor-pointer transition hover:fill-[var(--brand-gold)]"
                      onMouseEnter={() => setActiveDistrict(district)}
                      onFocus={() => setActiveDistrict(district)}
                      tabIndex={0}
                    />
                    <text
                      x={district.cx}
                      y={district.cy - district.radius - 6}
                      textAnchor="middle"
                      fontSize="11"
                      fill="var(--brand-emerald)"
                      fontWeight="600"
                    >
                      {district.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Impact map</p>
              <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">
                District coverage grows every term
              </h2>
              <p className="text-sm text-slate-600">
                Hover over each cluster to explore how many schools and students are served.
              </p>
              <div className="rounded-2xl bg-white p-6 shadow-lg shadow-black/5">
                <p className="text-sm font-semibold text-[var(--brand-emerald)]">{highlightedDistrict.name}</p>
                <p className="mt-2 text-sm text-slate-600">
                  <strong>{highlightedDistrict.schools}</strong> partner schools •
                  <strong> {highlightedDistrict.schools * 480}</strong> students supported
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[var(--brand-gold)]">Data refreshed weekly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">SDG alignment</p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--brand-emerald)]">Anchored to global goals</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sdgTiles.map(({ sdg, metric, icon }) => {
              const SdgIcon = icon
              return (
                <div
                  key={sdg}
                  className="group rounded-3xl bg-[var(--brand-cream)] p-6 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:bg-[var(--brand-emerald)]"
                >
                  <div className="flex items-center gap-3 text-[var(--brand-emerald)] group-hover:text-white">
                    <SdgIcon className="size-5" />
                    <p className="text-sm font-semibold uppercase tracking-[0.3em]">{sdg}</p>
                  </div>
                  <p className="mt-4 text-base text-slate-600 group-hover:text-white/90">{metric}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Story carousel</p>
          <div className="relative mt-8 overflow-hidden rounded-3xl bg-white p-10 shadow-lg shadow-black/10">
            <Quote className="absolute left-6 top-6 size-8 text-[var(--brand-gold)]" />
            <p className="text-lg text-[var(--brand-emerald)]">{stories[storyIndex].narrative}</p>
            <p className="mt-6 text-sm font-semibold text-slate-600">{stories[storyIndex].name}</p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={prevStory}
                className="flex items-center gap-2 rounded-full border border-[var(--brand-emerald)]/30 px-4 py-2 text-sm font-semibold text-[var(--brand-emerald)] hover:border-[var(--brand-emerald)]"
              >
                <ArrowLeft className="size-4" /> Prev
              </button>
              <div className="flex items-center gap-1">
                {stories.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-8 rounded-full ${index === storyIndex ? 'bg-[var(--brand-gold)]' : 'bg-slate-200'}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={nextStory}
                className="flex items-center gap-2 rounded-full border border-[var(--brand-emerald)]/30 px-4 py-2 text-sm font-semibold text-[var(--brand-emerald)] hover:border-[var(--brand-emerald)]"
              >
                Next <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
