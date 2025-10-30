import * as React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { cn } from '@/lib/utils.js'

/**
 * NavLink component for navigation items
 * Uses react-router-dom's NavLink with styled variants
 */

// Desktop navigation link styles
const desktopActiveStyles = 'text-[var(--brand-emerald)] ring-1 ring-[var(--brand-emerald)]/20 shadow-[0_10px_28px_rgba(5,56,44,0.12)] after:bg-[var(--brand-emerald)]'
const desktopInactiveStyles = 'text-slate-700 hover:-translate-y-0.5 hover:text-[var(--brand-emerald)] hover:shadow-[0_12px_30px_rgba(5,56,44,0.16)] hover:after:bg-[var(--brand-emerald)]/70'
const desktopBaseStyles = 'relative rounded-md border border-[color-mix(in_srgb,var(--emerald-haze)_25%,var(--brand-white)_75%)] bg-white px-4 py-2 text-sm font-semibold shadow-[0_6px_18px_rgba(13,37,29,0.08)] transition-all duration-200 after:absolute after:inset-x-3 after:bottom-1 after:h-1 after:rounded-full after:bg-transparent after:transition-colors after:content-[\'\'] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)]'

// Mobile navigation link styles
const mobileActiveStyles = 'bg-[rgba(0,152,119,0.1)] text-[var(--brand-emerald)]'
const mobileInactiveStyles = 'text-slate-600 hover:bg-[rgba(0,152,119,0.08)] hover:text-[var(--brand-emerald)]'
const mobileBaseStyles = 'rounded-md px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)]'

const NavLink = React.forwardRef(({ className, variant = 'desktop', to, children, onClick, ...props }, ref) => {
  const baseStyles = variant === 'mobile' ? mobileBaseStyles : desktopBaseStyles
  const activeStyles = variant === 'mobile' ? mobileActiveStyles : desktopActiveStyles
  const inactiveStyles = variant === 'mobile' ? mobileInactiveStyles : desktopInactiveStyles

  return (
    <RouterNavLink
      ref={ref}
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          baseStyles,
          isActive ? activeStyles : inactiveStyles,
          className
        )
      }
      {...props}
    >
      {children}
    </RouterNavLink>
  )
})

NavLink.displayName = 'NavLink'

export { NavLink }
