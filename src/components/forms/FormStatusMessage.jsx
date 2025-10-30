import { cn } from '@/lib/utils.js'

export function FormStatusMessage({
  tone = 'polite',
  variant = 'info',
  children,
  className,
}) {
  if (!children) return null

  const variantClasses = {
    info: 'bg-[color-mix(in_srgb,var(--brand-emerald)_12%,var(--brand-white)_88%)] text-[color-mix(in_srgb,var(--brand-emerald)_60%,var(--emerald-canopy)_40%)]',
    success:
      'bg-[color-mix(in_srgb,var(--brand-emerald)_18%,var(--brand-white)_82%)] text-[color-mix(in_srgb,var(--brand-emerald)_75%,var(--emerald-ink)_25%)]',
    error:
      'bg-[color-mix(in_srgb,#b91c1c_18%,var(--brand-white)_82%)] text-[color-mix(in_srgb,#7f1d1d_70%,var(--brand-emerald)_30%)]',
  }

  return (
    <div
      role={variant === 'error' ? 'alert' : 'status'}
      aria-live={tone}
      className={cn('rounded-xl px-4 py-3 text-sm font-medium', variantClasses[variant], className)}
    >
      {children}
    </div>
  )
}
