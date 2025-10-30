import { useState } from 'react'
import { Send } from 'lucide-react'

export function NewsletterSignupModule({ layout = 'horizontal', includeDownloadLink = false, className = '' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      window.open(`https://skooli.us7.list-manage.com/subscribe?MERGE0=${encodeURIComponent(email)}`, '_blank', 'noopener')
      window.open('/downloads/skooli-pitch-deck-q3-2025.pdf', '_blank', 'noopener')
      setEmail('')
      setTimeout(() => setStatus('idle'), 4000)
    }, 800)
  }

  const isHorizontal = layout === 'horizontal'
  const formClasses = isHorizontal
    ? 'flex w-full max-w-md flex-col gap-[var(--space-xs)] sm:flex-row'
    : 'flex w-full flex-col gap-[var(--space-xs)]'

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className={formClasses}>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@organisation.com"
          className={`h-12 flex-1 rounded-full border border-[color-mix(in_srgb,var(--brand-emerald)_25%,var(--brand-white))] bg-[var(--brand-white)] px-[var(--space-sm)] typography-body-sm text-[color-mix(in_srgb,var(--brand-emerald)_75%,var(--emerald-canopy)_25%)] placeholder:text-[color-mix(in_srgb,var(--brand-emerald)_40%,var(--emerald-bough)_60%)] focus:border-[var(--brand-emerald)] focus:outline-none ${
            isHorizontal ? '' : 'w-full'
          }`}
          aria-label="Email address"
        />
        <button
          type="submit"
          className="flex h-12 items-center justify-center rounded-full bg-[var(--brand-emerald)] px-[var(--space-md)] typography-body-sm font-semibold text-[var(--brand-white)] shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)] whitespace-nowrap"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Delivering…' : status === 'success' ? 'Briefing Sent!' : 'Send briefing PDF'}
          <Send className="ml-[var(--space-2xs)] size-4" aria-hidden="true" />
        </button>
      </form>
      {includeDownloadLink ? (
        <a
          href="/downloads/skooli-pitch-deck-q3-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[var(--space-sm)] inline-flex items-center typography-body-sm font-semibold text-[var(--brand-emerald)] underline decoration-[color-mix(in_srgb,var(--brand-emerald)_45%,var(--emerald-ink)_55%)] decoration-2 underline-offset-4 transition hover:text-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)]"
        >
          Download the board briefing packet (PDF)
        </a>
      ) : null}
    </div>
  )
}
