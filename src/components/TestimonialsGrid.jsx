import { Star, Quote } from 'lucide-react'

export default function TestimonialsGrid({ testimonials }) {
  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl bg-[var(--brand-cream)] p-6 shadow-lg shadow-black/5"
            >
              <div className="flex items-center gap-2 text-[var(--brand-gold)]" aria-hidden="true">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <Quote className="mt-4 size-6 text-[var(--brand-emerald)]" aria-hidden="true" />
              <p className="mt-4 text-sm text-slate-600">{testimonial.quote}</p>
              <p className="mt-4 text-sm font-semibold text-[var(--brand-emerald)]">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
