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
      setEmail('')
      setTimeout(() => setStatus('idle'), 4000)
    }, 800)
  }

  return (
    <section className="bg-white py-16" id="newsletter">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[var(--brand-cream)] p-10 shadow-lg shadow-black/5 sm:p-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Newsletter</p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--brand-emerald)]">Executive updates delivered monthly</h2>
              <p className="mt-3 text-sm text-slate-600">
                Subscribe for Mailchimp briefings on impact milestones, product launches, and fundraising notes. No spam—just actionable updates.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@organisation.com"
                className="h-12 flex-1 rounded-full border border-[var(--brand-emerald)]/20 bg-white px-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[var(--brand-gold)] focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="flex h-12 items-center justify-center rounded-full bg-[var(--brand-gold)] px-6 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--brand-gold)_80%,#000_20%)]"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Submitting…' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
                <Send className="ml-2 size-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
