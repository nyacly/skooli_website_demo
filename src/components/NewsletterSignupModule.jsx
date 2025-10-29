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
    ? 'flex w-full max-w-md flex-col gap-3 sm:flex-row'
    : 'flex w-full flex-col gap-3'

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className={formClasses}>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@organisation.com"
          className={`h-12 flex-1 rounded-full border border-[color-mix(in_srgb,var(--brand-emerald)_25%,#ffffff)] bg-white px-4 text-sm text-[color-mix(in_srgb,var(--brand-emerald)_75%,#05382c_25%)] placeholder:text-[color-mix(in_srgb,var(--brand-emerald)_35%,#8b9f99_65%)] focus:border-[var(--brand-emerald)] focus:outline-none ${
            isHorizontal ? '' : 'w-full'
          }`}
          aria-label="Email address"
        />
        <button
          type="submit"
          className="flex h-12 items-center justify-center rounded-full bg-[var(--brand-emerald)] px-6 text-sm font-semibold text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] whitespace-nowrap"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Delivering…' : status === 'success' ? 'Briefing Sent!' : 'Send briefing PDF'}
          <Send className="ml-2 size-4" aria-hidden="true" />
        </button>
      </form>
      {includeDownloadLink ? (
        <a
          href="/downloads/skooli-pitch-deck-q3-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--brand-emerald)] underline decoration-[color-mix(in_srgb,var(--brand-emerald)_45%,#032823_55%)] decoration-2 underline-offset-4 transition hover:text-[color-mix(in_srgb,var(--brand-emerald)_80%,#032823_20%)]"
        >
          Download the board briefing packet (PDF)
        </a>
      ) : null}
    </div>
  )
}
