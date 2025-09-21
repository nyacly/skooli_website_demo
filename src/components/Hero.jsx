import { Link } from 'react-router-dom'
import { ArrowRight, UsersRound } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
// Using provided attachment for hero background
const HERO_IMG_URL = 'https://cdn.builder.io/api/v1/image/assets%2Feb657e2225a74a4699503a4763b81a78%2Fe9cdffd3a65549fbb8751e6354a30d35?format=webp&width=1600'

export default function Hero() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG_URL}
          alt="Smiling student receiving a Skooli delivery"
          className="h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0F4C81]/30" aria-hidden="true" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/80">Skooli Executive</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          The Smarter Way to Shop for School
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90">
          Seamlessly source, finance, and deliver essential learning materials so every Ugandan student starts the term ready to thrive.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-md bg-[#F05A28] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#e14a1e]"
            asChild
          >
            <Link to="/shop-now">
              Shop Now
              <ArrowRight className="ml-2 size-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-md border-2 border-white/90 bg-white/10 px-8 py-4 text-base font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-white hover:text-[#0F4C81]"
            asChild
          >
            <Link to="/partner">
              Partner With Us
            </Link>
          </Button>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-white/80">
          <div className="flex items-center gap-2">
            <UsersRound className="size-5" aria-hidden="true" />
            Trusted by education ministries and faith-based networks across Uganda
          </div>
        </div>
      </div>
    </section>
  )
}
