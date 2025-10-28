import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[var(--brand-cream)] px-4 py-24 text-center">
      <h1 className="text-5xl font-bold text-[var(--brand-emerald)]">404</h1>
      <p className="mt-4 max-w-lg text-base text-slate-600">
        We couldn’t find that page. Explore Skooli’s executive site from the home page instead.
      </p>
      <Button className="mt-6 rounded-md bg-[var(--brand-gold)] px-6 py-3 text-white hover:bg-[color-mix(in_srgb,var(--brand-gold)_80%,#000_20%)]" asChild>
        <Link to="/">Return home</Link>
      </Button>
    </div>
  )
}
