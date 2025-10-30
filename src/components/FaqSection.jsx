export default function FaqSection({ items, heading = 'Frequently asked questions' }) {
  if (!Array.isArray(items) || items.length === 0) {
    return null
  }

  return (
    <section className="bg-white py-24" id="faq">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">{heading}</h2>
          <p className="mt-3 text-sm text-slate-600">
            Answers to the school leaders we speak with every week. Reach out if you need anything more bespoke.
          </p>
        </div>
        <div className="mt-10 space-y-4">
          {items.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-3xl border border-[color-mix(in_srgb,var(--brand-emerald)_20%,transparent)] bg-[var(--brand-cream)]/60 p-5 shadow-sm transition hover:border-[var(--brand-emerald)]/40"
            >
              <summary className="cursor-pointer text-left text-base font-semibold text-[var(--brand-emerald)]">
                {question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
