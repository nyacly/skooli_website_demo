import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const navItems = [
  { name: 'About', to: '/how-it-works' },
  { name: 'Impact', to: '/vision-impact' },
  { name: 'Services', to: '/schools' },
  { name: 'Investor centre', to: '/funders' },
  { name: 'Join our impact', to: '/partner' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-[#0F4C81]">
          <span className="text-2xl font-bold tracking-tight">Skooli</span>
        </Link>
        <nav className="hidden items-center gap-3 lg:flex">
          {navItems.map(({ name, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md bg-white border border-slate-200 text-sm font-semibold transition-all duration-200 border-b-2 ${
                  isActive
                    ? 'text-[#0F4C81] border-b-[#F05A28]'
                    : 'text-slate-700 border-b-transparent hover:border-b-[#F05A28] hover:text-[#0F4C81]'
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
            className="rounded-md px-3 py-2 text-sm font-semibold text-[#0F4C81] hover:text-[#F05A28]"
            asChild
          >
            <Link to="/funders#investor-deck">Investor Deck</Link>
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md border border-slate-200 p-2 text-[#0F4C81] shadow-sm transition hover:border-[#F05A28] hover:text-[#F05A28] lg:hidden"
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
                    isActive ? 'bg-[#0F4C81]/5 text-[#0F4C81]' : 'text-slate-600 hover:bg-[#0F4C81]/5 hover:text-[#0F4C81]'
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button
                variant="ghost"
                className="w-full rounded-md py-2 text-sm font-semibold text-[#0F4C81] hover:text-[#F05A28]"
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
