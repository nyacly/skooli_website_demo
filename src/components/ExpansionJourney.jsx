const expansionMapFallback = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
      <defs>
        <linearGradient id='expansionGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stop-color='var(--brand-emerald)'/>
          <stop offset='100%' stop-color='rgba(0,0,0,0)'/>
        </linearGradient>
      </defs>
      <rect width='1200' height='800' fill='url(#expansionGradient)' />
      <text x='50%' y='50%' font-family='Inter, Arial, sans-serif' font-size='42' fill='var(--brand-white)' text-anchor='middle'>
        Upload skooli_african_map.webp to public/assets/branding
      </text>
    </svg>`
)}`

const expansionMapSources = {
  webp: '/assets/branding/skooli_african_map.webp',
  png: '/assets/branding/skooli_african_map.png',
}

const legendItems = [
  { name: 'Pilot districts (Uganda)', background: 'color-mix(in srgb, var(--brand-gold) 85%, transparent)', border: 'color-mix(in srgb, var(--brand-white) 25%, transparent)' },
  { name: 'Scale-ready hubs (Kenya)', background: 'color-mix(in srgb, var(--brand-emerald) 65%, transparent)', border: 'color-mix(in srgb, var(--brand-white) 25%, transparent)' },
  { name: 'Expansion markets (Ghana)', background: 'color-mix(in srgb, var(--brand-cream) 75%, transparent)', border: 'color-mix(in srgb, var(--brand-white) 40%, transparent)' },
]

import { AccentPill } from '@/components/AccentPill.jsx'

const phases = [
  {
    title: 'Pilot to proof',
    timeline: 'Q3 2024 – Q1 2025',
    summary: 'Focused activations across Ugandan districts delivering verified procurement and facilitator deployment benchmarks.',
  },
  {
    title: 'Scale enablement',
    timeline: 'Q2 2025 – Q1 2026',
    summary: 'Kenyan hubs ready for replication with harmonised onboarding playbooks and treasury integrations.',
  },
  {
    title: 'Expansion pipeline',
    timeline: 'Q2 2026 onward',
    summary: 'Ghana and adjacent ECOWAS markets progressing through diligence with brand-aligned operators.',
  },
]

const handleMapError = (event) => {
  if (event.currentTarget.dataset.fallbackApplied === 'true') {
    return
  }

  event.currentTarget.dataset.fallbackApplied = 'true'
  event.currentTarget.src = expansionMapFallback
  event.currentTarget.removeAttribute('srcset')
}

export default function ExpansionJourney() {
  return (
    <section className="bg-[color-mix(in_srgb,var(--brand-emerald)_70%,var(--neutral-black)_30%)] py-16 text-white sm:py-20" id="expansion-journey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-max items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 shadow-lg shadow-black/10 backdrop-blur">
              Expansion journey
            </p>
            <h2 className="mt-6 typography-heading-2 font-semibold tracking-tight text-white">
              From pilot validation to multi-country scale
            </h2>
            <ul className="mt-8 space-y-4">
              {legendItems.map((item) => (
                <li key={item.name} className="flex items-center">
                  <span
                    className="mr-4 inline-block size-4 rounded-full border"
                    style={{ background: item.background, borderColor: item.border }}
                  />
                  <span className="typography-body-md font-medium text-white/85">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden">
            <figure className="mx-auto max-w-xl rounded-3xl bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur lg:max-w-lg">
              <picture>
                <source type="image/webp" srcSet={expansionMapSources.webp} sizes="(max-width: 1024px) 100vw, 50vw" />
                <source type="image/png" srcSet={expansionMapSources.png} sizes="(max-width: 1024px) 100vw, 50vw" />
                <img
                  src={expansionMapSources.png}
                  alt="Africa map with Skooli pilot, scale, and expansion countries tinted in emerald and gold"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={handleMapError}
                />
              </picture>
              <figcaption className="mt-6 space-y-4 rounded-2xl bg-white/10 p-4 text-left text-white/90">
                {phases.map(({ title, timeline, summary }) => (
                  <div key={title}>
                    <AccentPill tone="inverse" size="xs" className="tracking-[0.25em]">
                      {timeline}
                    </AccentPill>
                    <p className="mt-1 typography-heading-4 font-semibold text-white">{title}</p>
                    <p className="mt-2 typography-body-sm text-white/85">{summary}</p>
                  </div>
                ))}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
