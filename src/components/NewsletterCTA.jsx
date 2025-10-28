import { useState } from 'react'
import { Send } from 'lucide-react'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      window.open(`https://skooli.us7.list-manage.com/subscribe?MERGE0=${encodeURIComponent(email)}`, '_blank', 'noopener')
      window.open('/downloads/skooli-pitch-deck.pdf', '_blank', 'noopener')
      setEmail('')
      setTimeout(() => setStatus('idle'), 4000)
    }, 800)
  }

  return (
    <section className="bg-white py-16" id="newsletter">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white via-[var(--brand-cream)] to-[color-mix(in_srgb,var(--brand-emerald)_12%,#ffffff_88%)] p-10 shadow-xl shadow-black/10 sm:p-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-[color-mix(in_srgb,var(--brand-emerald)_10%,#ffffff_90%)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-emerald)] shadow-inner shadow-white">
                Executive Dashboard Sync
              </span>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Newsletter</p>
              <h2 className="mt-4 text-3xl font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_88%,#032823_12%)]">
                Executive updates delivered monthly
              </h2>
              <p className="mt-3 text-sm text-[color-mix(in_srgb,var(--brand-emerald)_35%,#05382c_65%)]">
                Subscribe for Mailchimp briefings on impact milestones, product launches, and treasury notes. Every confirmation email now includes the latest PDF dashboard sync for your leadership team.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@organisation.com"
                className="h-12 flex-1 rounded-full border border-[color-mix(in_srgb,var(--brand-emerald)_25%,#ffffff)] bg-white px-4 text-sm text-[color-mix(in_srgb,var(--brand-emerald)_75%,#05382c_25%)] placeholder:text-[color-mix(in_srgb,var(--brand-emerald)_35%,#8b9f99_65%)] focus:border-[var(--brand-gold)] focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="flex h-12 items-center justify-center rounded-full bg-[var(--brand-emerald)] px-6 text-sm font-semibold text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)]"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Delivering…' : status === 'success' ? 'Briefing Sent!' : 'Send briefing PDF'}
                <Send className="ml-2 size-4" aria-hidden="true" />
              </button>
            </form>
            <a
              href="/downloads/skooli-pitch-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-[var(--brand-emerald)] underline decoration-[var(--brand-gold)] decoration-2 underline-offset-4 transition hover:text-[var(--brand-gold)]"
            >
              Download the board briefing packet (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
