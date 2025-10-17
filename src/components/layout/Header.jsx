import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'How It Works', to: '/how-it-works' },
  { name: 'Vision & Impact', to: '/vision-impact' },
  { name: 'Partner With Us', to: '/partner' },
  { name: 'For Funders', to: '/funders' },
  { name: 'For Schools', to: '/schools' },
  { name: 'Technology & AI', to: '/technology-ai' },
  { name: 'Meet the Team', to: '/team' },
  { name: 'News & Updates', to: '/news' },
  { name: 'Contact', to: '/contact' },
  { name: 'Legal & Ethics', to: '/legal' },
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
            className="rounded-md bg-[#F05A28] px-5 py-2 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-[#e14a1e]"
            asChild
          >
            <Link to="/shop-now">Shop Now</Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-md border-[#0F4C81] px-5 py-2 text-sm font-semibold text-[#0F4C81] shadow transition hover:-translate-y-0.5 hover:bg-[#0F4C81] hover:text-white"
            asChild
          >
            <Link to="/partner">Partner</Link>
          </Button>
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
              <Button className="w-full rounded-md bg-[#F05A28] py-2 text-sm font-semibold text-white" asChild>
                <Link to="/shop-now" onClick={closeMenu}>
                  Shop Now
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-md border-[#0F4C81] py-2 text-sm font-semibold text-[#0F4C81]"
                asChild
              >
                <Link to="/partner" onClick={closeMenu}>
                  Partner
                </Link>
              </Button>
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
