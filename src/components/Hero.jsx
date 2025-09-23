import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'

const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=2400&q=80'

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-start overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE_URL}
          alt="A teacher helping students in a classroom"
          className="h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          sizes="100vw"
        />
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
              className="rounded-md bg-[#F05A28] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#e14a1e]"
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
