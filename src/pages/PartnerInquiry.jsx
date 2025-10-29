import { AccentPill } from '@/components/AccentPill.jsx'
import leadershipGradient from '@/assets/leadership-gradient.svg'
import leadershipPortrait from '@/assets/leadership-portrait.svg'

export default function PartnerInquiry() {
  return (
    <div className="bg-[var(--brand-cream)]">
      <section
        className="relative overflow-hidden py-16 text-white"
        style={{
          backgroundImage: `linear-gradient(110deg, rgba(2,47,38,0.92), rgba(0,152,119,0.88)), url(${leadershipPortrait})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0 opacity-75"
          style={{ backgroundImage: `url(${leadershipGradient})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative mx-auto max-w-6xl px-4">
          <AccentPill tone="inverse" className="bg-white/15">
            Partner Inquiry
          </AccentPill>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[var(--brand-emerald)] sm:text-5xl">
            Let's build something great together
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[var(--brand-emerald)]">
            Tell us about your organization and how you'd like to collaborate. A partnership lead will respond within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
            <iframe
              src="https://tally.so/embed/3EjAAq?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Partner Inquiry"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
