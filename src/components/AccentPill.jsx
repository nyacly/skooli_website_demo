import { cn } from '@/lib/utils.js'

const toneStyles = {
  emerald: {
    text: 'text-[color-mix(in_srgb,var(--brand-emerald)_88%,#032823_12%)]',
    border: 'border-[var(--brand-emerald)]/20',
    background: 'bg-[color-mix(in_srgb,var(--brand-cream)_72%,#ffffff_28%)]',
    shadow: 'shadow-white/60',
  },
  inverse: {
    text: 'text-white',
    border: 'border-white/30',
    background: 'bg-white/10',
    shadow: 'shadow-black/20',
  },
}

const sizeStyles = {
  xs: 'px-3 py-1 text-[10px] sm:text-xs',
  sm: 'px-4 py-1.5 text-xs sm:text-sm',
}

export function AccentPill({
  // eslint-disable-next-line no-unused-vars
  as: Component = 'p',
  tone = 'emerald',
  size = 'xs',
  icon: Icon,
  children,
  className,
  ...props
}) {
  const toneStyle = toneStyles[tone] ?? toneStyles.emerald
  const sizeStyle = sizeStyles[size] ?? sizeStyles.xs

  return (
    <Component
      className={cn(
        'inline-flex items-center gap-2 rounded-full border font-semibold uppercase tracking-[0.3em] shadow-inner',
        toneStyle.text,
        toneStyle.border,
        toneStyle.background,
        toneStyle.shadow,
        sizeStyle,
        className,
      )}
      {...props}
    >
      {Icon ? <Icon className="size-3.5 sm:size-4" aria-hidden="true" /> : null}
      {children}
    </Component>
  )
}
