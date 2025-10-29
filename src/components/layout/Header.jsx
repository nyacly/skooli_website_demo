import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const navItems = [
  { name: 'About', to: '/about-us' },
  { name: 'Impact', to: '/vision-impact' },
  { name: 'For Schools', to: '/schools' },
  { name: 'For Business', to: '/for-business' },
  { name: 'Investor centre', to: '/funders' },
  { name: 'Join our impact', to: '/partner' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-[var(--brand-emerald)]">
          <span className="text-2xl font-bold tracking-tight">Skooli</span>
        </Link>
        <nav className="hidden items-center gap-3 lg:flex">
          {navItems.map(({ name, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold shadow-[0_6px_18px_rgba(13,37,29,0.08)] transition-all duration-200 after:absolute after:inset-x-3 after:bottom-1 after:h-1 after:rounded-full after:bg-transparent after:transition-colors after:content-[''] ${
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
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md border border-slate-200 p-2 text-[var(--brand-emerald)] shadow-sm transition hover:border-[color-mix(in_srgb,var(--brand-emerald)_70%,#032823_30%)] hover:text-[color-mix(in_srgb,var(--brand-emerald)_70%,#032823_30%)] lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white/95 shadow-lg shadow-black/5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navItems.map(({ name, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
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
                className="w-full rounded-md py-2 text-sm font-semibold text-[var(--brand-emerald)] hover:text-[color-mix(in_srgb,var(--brand-emerald)_80%,#032823_20%)]"
                asChild
              >
                <Link to="/funders#investor-deck" onClick={closeMenu}>
                  Investor Deck
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
