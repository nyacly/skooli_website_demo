import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const navItems = [
  { name: 'About', to: '/team' },
  { name: 'Impact', to: '/vision-impact' },
  { name: 'Services', to: '/services' },
  { name: 'Investor Centre', to: '/funders' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0B3A60]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-white">
          <span className="text-2xl font-bold tracking-tight">Skooli</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(({ name, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
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
            <Link to="/partner">Join Our Impact</Link>
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md border border-slate-700 p-2 text-white shadow-sm transition hover:border-slate-500 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-700 bg-[#0B3A60] shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navItems.map(({ name, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button
                className="w-full rounded-md bg-[#F05A28] py-2 text-sm font-semibold text-white"
                asChild
              >
                <Link to="/partner" onClick={closeMenu}>
                  Join Our Impact
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
