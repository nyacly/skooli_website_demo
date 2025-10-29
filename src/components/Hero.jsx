import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button.jsx'
import { AccentPill } from '@/components/AccentPill.jsx'

const heroFallback = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
      <defs>
        <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stop-color='#009877'/>
          <stop offset='100%' stop-color='rgba(0,152,119,0)'/>
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
          <source type="image/jpeg" srcSet="/assets/branding/skooli_banner_image.jpg" sizes="100vw" />
          <img
            src="/assets/branding/skooli_banner_image.jpg"
            alt="Skooli facilitator guiding learners in class"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            sizes="100vw"
            onError={handleHeroImageError}
          />
        </picture>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgba(0,152,119,0.85)] via-[rgba(2,45,36,0.65)] to-transparent"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-left text-white sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <AccentPill tone="inverse" size="sm" className="bg-white/20">
            Executive briefing
          </AccentPill>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Operational assurance for national education pilots
          </h1>
          <p className="mt-6 text-xl font-medium text-white/90">
            Skooli deploys accountable facilitators, verified suppliers, and transparent financial rails so ministries see auditable results from the first cohort through national scale.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="rounded-md bg-[var(--brand-emerald)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--brand-emerald)_80%,#032823_20%)]"
              asChild
            >
              <Link to="/downloads/skooli-impact-report-2025.pdf" target="_blank" rel="noreferrer noopener">
                Review the executive impact brief
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
