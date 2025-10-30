import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'

const primaryNavItems = [
  { name: 'Shop Now', to: '/shop-now' },
  { name: 'About Us', to: '/about-us' },
  { name: 'Vision & Impact', to: '/vision-impact' },
  { name: 'For Schools', to: '/schools' },
  { name: 'For Business', to: '/for-business' },
  { name: 'Technology & AI', to: '/technology-ai' },
  { name: 'Funders & Investors', to: '/funders' },
  { name: 'Partner With Us', to: '/partner' },
  { name: 'Contact', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const firstNavLinkRef = useRef(null)
  const bodyLockRef = useRef(false)

  useEffect(() => {
    if (open && firstNavLinkRef.current) {
      firstNavLinkRef.current.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  useEffect(() => {
    const body = document.body
    if (open) {
      bodyLockRef.current = !body.classList.contains('overflow-hidden')
      body.classList.add('overflow-hidden')
    } else if (bodyLockRef.current) {
      body.classList.remove('overflow-hidden')
      bodyLockRef.current = false
    }

    return () => {
      if (bodyLockRef.current) {
        body.classList.remove('overflow-hidden')
        bodyLockRef.current = false
      }
    }
  }, [open])

  const closeMenu = () => {
    setOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_srgb,var(--emerald-haze)_25%,var(--brand-white)_75%)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:py-4 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-[var(--brand-emerald)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)]"
        >
          <span className="text-2xl font-bold tracking-tight">Skooli</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-3 lg:flex">
          {primaryNavItems.map(({ name, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative rounded-md border border-[color-mix(in_srgb,var(--emerald-haze)_25%,var(--brand-white)_75%)] bg-white px-4 py-2 text-sm font-semibold shadow-[0_6px_18px_rgba(13,37,29,0.08)] transition-all duration-200 after:absolute after:inset-x-3 after:bottom-1 after:h-1 after:rounded-full after:bg-transparent after:transition-colors after:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)] ${
                  isActive
                    ? 'text-[var(--brand-emerald)] ring-1 ring-[var(--brand-emerald)]/20 shadow-[0_10px_28px_rgba(5,56,44,0.12)] after:bg-[var(--brand-emerald)]'
                    : 'text-slate-700 hover:-translate-y-0.5 hover:text-[var(--brand-emerald)] hover:shadow-[0_12px_30px_rgba(5,56,44,0.16)] hover:after:bg-[var(--brand-emerald)]/70'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            className="rounded-md px-3 py-2 text-sm font-semibold text-[var(--brand-emerald)] shadow-[0_6px_18px_rgba(13,37,29,0.08)] transition-colors hover:bg-[var(--brand-emerald)] hover:text-white focus-visible:ring-[var(--brand-emerald)]"
            asChild
          >
            <Link to="/funders#investor-deck">Investor Deck</Link>
          </Button>
        </div>
        <Button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          variant="outline"
          size="icon"
          shape="square"
          className={`border-[color-mix(in_srgb,var(--emerald-haze)_25%,var(--brand-white)_75%)] text-[var(--brand-emerald)] shadow-sm transition hover:border-[color-mix(in_srgb,var(--brand-emerald)_70%,var(--emerald-ink)_30%)] hover:text-[color-mix(in_srgb,var(--brand-emerald)_70%,var(--emerald-ink)_30%)] lg:hidden ${
            open ? 'bg-[color-mix(in_srgb,var(--brand-emerald)_8%,var(--brand-white)_92%)]' : ''
          }`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-haspopup="true"
          ref={toggleRef}
        >
          <span className="relative block h-5 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-transform duration-300 ease-out ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-all duration-200 ease-out ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-transform duration-300 ease-out ${
                open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'
              }`}
            />
          </span>
        </Button>
      </div>
      <div
        id="mobile-navigation"
        className={`origin-top overflow-hidden border-t border-[color-mix(in_srgb,var(--emerald-haze)_25%,var(--brand-white)_75%)] bg-white/95 shadow-lg shadow-black/5 transition-[max-height,opacity,transform] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[32rem] scale-y-100 opacity-100' : 'pointer-events-none max-h-0 scale-y-95 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav
          aria-label="Mobile"
          className={`mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 transition-transform duration-300 ease-out ${
            open ? 'translate-y-0' : '-translate-y-2'
          }`}
        >
          {primaryNavItems.map(({ name, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              ref={(element) => {
                if (element && primaryNavItems[0].to === to) {
                  firstNavLinkRef.current = element
                }
              }}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)] ${
                  isActive
                    ? 'bg-[rgba(0,152,119,0.1)] text-[var(--brand-emerald)]'
                    : 'text-slate-600 hover:bg-[rgba(0,152,119,0.08)] hover:text-[var(--brand-emerald)]'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Button
              variant="ghost"
              className="w-full rounded-md py-2 text-sm font-semibold text-[var(--brand-emerald)] hover:text-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)]"
              asChild
            >
              <Link to="/funders#investor-deck" onClick={closeMenu}>
                Investor Deck
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
