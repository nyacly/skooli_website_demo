import { useId } from 'react'

import { cn } from '@/lib/utils.js'

export function FormFieldset({
  legend,
  description,
  children,
  className,
  legendClassName,
  descriptionClassName,
  bodyClassName,
}) {
  const descriptionId = useId()
  const describedBy = description ? `${descriptionId}-text` : undefined

  return (
    <fieldset
      className={cn('space-y-4 rounded-2xl border border-[var(--brand-emerald)]/15 p-4', className)}
      {...(describedBy ? { 'aria-describedby': describedBy } : {})}
    >
      <legend
        className={cn(
          'text-sm font-semibold uppercase tracking-[0.25em] text-[color-mix(in_srgb,var(--brand-emerald)_75%,var(--emerald-ink)_25%)]',
          legendClassName
        )}
      >
        {legend}
      </legend>
      {description ? (
        <p
          id={`${descriptionId}-text`}
          className={cn('text-sm text-[color-mix(in_srgb,var(--brand-emerald)_45%,var(--emerald-canopy)_55%)]', descriptionClassName)}
        >
          {description}
        </p>
      ) : null}
      <div className={cn('space-y-3', bodyClassName)}>{children}</div>
    </fieldset>
  )
}
