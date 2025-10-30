import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'

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
    ? 'flex w-full max-w-md flex-col gap-[var(--space-xs)] md:flex-row'
    : 'flex w-full flex-col gap-[var(--space-xs)]'

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className={formClasses}>
        <Input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@organisation.com"
          aria-label="Email address"
          size="lg"
          density="relaxed"
          variant="default"
          className={isHorizontal ? 'flex-1 rounded-full bg-[var(--brand-white)]' : 'w-full rounded-full bg-[var(--brand-white)]'}
        />
        <Button
          type="submit"
          shape="pill"
          size="lg"
          variant="primary"
          className="whitespace-nowrap"
          isLoading={status === 'loading'}
          loadingText="Delivering…"
        >
          {status === 'success' ? 'Briefing Sent!' : 'Send briefing PDF'}
          {status !== 'loading' ? <Send className="size-4" aria-hidden="true" /> : null}
        </Button>
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
