import * as React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils.js'

const navLinkVariants = cva(
  'relative font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)]',
  {
    variants: {
      variant: {
        desktop: [
          'rounded-md border border-[color-mix(in_srgb,var(--emerald-haze)_25%,var(--brand-white)_75%)] bg-white px-4 py-2 text-sm shadow-[0_6px_18px_rgba(13,37,29,0.08)]',
          'after:absolute after:inset-x-3 after:bottom-1 after:h-1 after:rounded-full after:bg-transparent after:transition-colors after:content-[""]',
          'data-[active]:text-[var(--brand-emerald)] data-[active]:ring-1 data-[active]:ring-[var(--brand-emerald)]/20 data-[active]:shadow-[0_10px_28px_rgba(5,56,44,0.12)] data-[active]:after:bg-[var(--brand-emerald)]',
          'data-[inactive]:text-slate-700 data-[inactive]:hover:-translate-y-0.5 data-[inactive]:hover:text-[var(--brand-emerald)] data-[inactive]:hover:shadow-[0_12px_30px_rgba(5,56,44,0.16)] data-[inactive]:hover:after:bg-[var(--brand-emerald)]/70'
        ],
        mobile: [
          'rounded-md px-3 py-2 text-sm',
          'data-[active]:bg-[rgba(0,152,119,0.1)] data-[active]:text-[var(--brand-emerald)]',
          'data-[inactive]:text-slate-600 data-[inactive]:hover:bg-[rgba(0,152,119,0.08)] data-[inactive]:hover:text-[var(--brand-emerald)]'
        ]
      }
    },
    defaultVariants: {
      variant: 'desktop'
    }
  }
)

const NavLink = React.forwardRef(({ className, variant, to, children, onClick, ...props }, ref) => {
  return (
    <RouterNavLink
      ref={ref}
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          navLinkVariants({ variant }),
          className
        )
      }
      data-active={undefined}
      data-inactive={undefined}
      {...props}
      // Custom data attributes based on active state
      style={undefined}
    >
      {({ isActive }) => (
        <span data-active={isActive ? '' : undefined} data-inactive={!isActive ? '' : undefined}>
          {children}
        </span>
      )}
    </RouterNavLink>
  )
})

NavLink.displayName = 'NavLink'

export { NavLink, navLinkVariants }
