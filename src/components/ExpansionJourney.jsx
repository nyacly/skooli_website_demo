const expansionMapPng = '/assets/branding/skooli_african_map.png'

const expansionMapFallback = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
      <defs>
        <linearGradient id='expansionGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stop-color='#009877'/>
          <stop offset='100%' stop-color='#FFD700'/>
        </linearGradient>
      </defs>
      <rect width='1200' height='800' fill='url(#expansionGradient)' />
      <text x='50%' y='50%' font-family='Inter, Arial, sans-serif' font-size='42' fill='#ffffff' text-anchor='middle'>
        Upload skooli_african_map.png to public/assets/branding
      </text>
    </svg>`
)}`

const legendItems = [
  { name: 'Pilot districts', background: 'var(--brand-gold)', border: 'transparent' },
  { name: 'National roll-out', background: 'rgba(255,255,255,0.2)', border: 'rgba(255,255,255,0.4)' },
  {
    name: 'Expansion markets',
    background: 'color-mix(in srgb, var(--brand-emerald) 35%, transparent)',
    border: 'rgba(255,255,255,0.4)',
  },
]

const handleMapError = (event) => {
  if (event.currentTarget.dataset.fallbackApplied === 'true') {
    return
  }

  event.currentTarget.dataset.fallbackApplied = 'true'
  event.currentTarget.src = expansionMapFallback
}

export default function ExpansionJourney() {
  return (
    <section className="bg-[color-mix(in_srgb,var(--brand-emerald)_70%,#000_30%)] py-16 text-white sm:py-20" id="expansion-journey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Expansion Journey</h2>
            <ul className="mt-8 space-y-4">
              {legendItems.map((item) => (
                <li key={item.name} className="flex items-center">
                  <span
                    className="mr-4 inline-block size-4 rounded-full border"
                    style={{ background: item.background, borderColor: item.border }}
                  />
                  <span className="text-lg font-medium text-slate-300">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden">
            <picture>
              <img
                src={expansionMapPng}
                alt="Map of Africa highlighting Skooli expansion journey"
                loading="lazy"
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={handleMapError}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
