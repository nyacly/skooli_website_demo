import { useState } from 'react'
import { Compass, Globe2, Users2, HeartHandshake, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import { AccentPill } from '@/components/AccentPill.jsx'

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
  const [storyIndex, setStoryIndex] = useState(0)
  const [mapLoadError, setMapLoadError] = useState(false)
  const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const canRenderMap = typeof mapsApiKey === 'string' && mapsApiKey.trim().length > 0 && !mapLoadError

  const nextStory = () => setStoryIndex((index) => (index + 1) % stories.length)
  const prevStory = () => setStoryIndex((index) => (index - 1 + stories.length) % stories.length)

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
              <p className="mt-4 text-lg text-white/90">— Christine Namaganda, Founder & CEO</p>
              <p className="mt-6 text-base text-white/80">
                We mobilise churches, district governments, and diaspora donors to deliver verified learning materials within
                48 hours of each term starting. Our model keeps children in class, advances gender equity, and ensures local
                suppliers prosper alongside the schools they serve.
              </p>
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
              <AccentPill size="sm" icon={Compass} className="tracking-[0.25em]">
                Vision 2030
              </AccentPill>
              <p className="mt-5 text-lg text-[var(--brand-emerald)]">
                Skooli envisions an Africa where access to education supplies is never a barrier to learning or dignity.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                Each delivery cycle is mapped to the UN Sustainable Development Goals: we uplift quality education (SDG 4),
                dignify livelihoods through decent work (SDG 8), and modernise rural logistics with ethical technology (SDG 9).
                Transparent dashboards ensure every donor and ministry partner sees the progress their contributions unlock.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-black/5">
              {canRenderMap ? (
                <APIProvider apiKey={mapsApiKey} onError={() => setMapLoadError(true)}>
                  <Map
                    defaultCenter={{ lat: 1.3733, lng: 32.2903 }}
                    defaultZoom={6}
                    disableDefaultUI
                    style={{ height: '400px', width: '100%', border: 'none' }}
                  />
                </APIProvider>
              ) : (
                <div className="flex h-[400px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-[var(--brand-emerald)]/30 bg-[color-mix(in_srgb,var(--brand-emerald)_4%,white)] p-6 text-center">
                  <img
                    src="/assets/branding/skooli_african_map.png"
                    alt="Illustrated map of Uganda highlighting Skooli's impact regions"
                    className="h-40 w-auto"
                    loading="lazy"
                  />
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-emerald)]">
                      Map preview unavailable
                    </p>
                    <p className="text-sm text-slate-600">
                      Map preview unavailable. Please check that the Google Maps API key is properly configured.
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-6">
              <AccentPill size="sm" className="tracking-[0.25em]">
                Impact map
              </AccentPill>
              <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">
                Our footprint is growing every term
              </h2>
              <p className="text-sm text-slate-600">
                From Kampala to remote villages, we are reaching learners across Uganda. Our interactive dashboards (available
                to partners) provide real-time data on school engagement, supply chain efficiency, and student outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <AccentPill size="sm" className="tracking-[0.25em]">
            SDG alignment
          </AccentPill>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--brand-emerald)]">Anchored to global goals</h2>
          <p className="mt-3 text-sm text-slate-600">
            Every cohort of learners we serve is linked to a Sustainable Development Goal target and tracked through quarterly
            evidence reviews shared with boards, funders, and district leaders.
          </p>
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
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--brand-emerald)_76%,var(--brand-emerald-light)_24%)] group-hover:text-white/80">
                    Independently verified twice yearly
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <AccentPill size="sm" className="mx-auto tracking-[0.25em]">
            Story carousel
          </AccentPill>
          <div className="relative mt-8 overflow-hidden rounded-3xl bg-white p-10 shadow-lg shadow-black/10">
            <Quote className="absolute left-6 top-6 size-8 text-[color-mix(in_srgb,var(--brand-emerald)_76%,var(--brand-emerald-light)_24%)]" />
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
                    className={`h-2 w-8 rounded-full ${
                      index === storyIndex
                        ? 'bg-[color-mix(in_srgb,var(--brand-emerald)_76%,var(--brand-emerald-light)_24%)]'
                        : 'bg-slate-200'
                    }`}
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
