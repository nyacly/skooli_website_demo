import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button.jsx'

const heroPrimarySrc = '/assets/branding/skooli_banner_image.jpg'

const heroFallback = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
      <defs>
        <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stop-color='#009877'/>
          <stop offset='100%' stop-color='#FCE6AE'/>
        </linearGradient>
      </defs>
      <rect width='1200' height='800' fill='url(#g)' />
      <text x='50%' y='50%' font-family='Inter, Arial, sans-serif' font-size='42' fill='#ffffff' text-anchor='middle'>
        Upload skooli_banner_image.jpg to public/assets/branding
      </text>
    </svg>`
)}`

const handleHeroImageError = (event) => {
  if (event.currentTarget.dataset.fallbackApplied === 'true') {
    return
  }

  event.currentTarget.dataset.fallbackApplied = 'true'
  event.currentTarget.src = heroFallback
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-start overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <picture>
          <img
            src={heroPrimarySrc}
            alt="Students learning with a Skooli teacher in a bright classroom"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            sizes="100vw"
            onError={handleHeroImageError}
          />
        </picture>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-left text-white sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Transforming Education Logistics Across Africa
          </h1>
          <p className="mt-6 text-2xl font-medium text-white/90">
            Ethically. Efficiently. Faithfully.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="rounded-md bg-[var(--brand-gold)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--brand-gold)_80%,#000_20%)]"
              asChild
            >
              <Link to="/vision-impact">
                Explore Our Mission
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
