import { cloneElement, isValidElement, useId } from 'react'

import { cn } from '@/lib/utils.js'

export function FormField({
  id,
  label,
  children,
  description,
  error,
  required,
  optionalLabel = 'Optional',
  className,
  labelClassName,
  descriptionClassName,
  errorClassName,
}) {
  const generatedId = useId()
  const fieldId = id ?? generatedId
  const descriptionId = description ? `${fieldId}-description` : undefined
  const errorId = error ? `${fieldId}-error` : undefined
  const describedBy = [descriptionId, errorId].filter(Boolean).join(' ') || undefined

  let control = children
  if (typeof children === 'function') {
    control = children({
      id: fieldId,
      required,
      'aria-describedby': describedBy,
      'aria-invalid': error ? true : undefined,
    })
  } else if (isValidElement(children)) {
    const childProps = children.props ?? {}
    const mergedDescribedBy = [childProps['aria-describedby'], describedBy]
      .filter(Boolean)
      .join(' ') || undefined
    control = cloneElement(children, {
      id: childProps.id ?? fieldId,
      required: childProps.required ?? required,
      'aria-describedby': mergedDescribedBy,
      'aria-invalid': childProps['aria-invalid'] ?? (error ? true : undefined),
    })
  }

  return (
    <div className={cn('space-y-2', className)}>
      <label
        htmlFor={fieldId}
        className={cn(
          'flex items-center gap-2 text-sm font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_82%,var(--emerald-ink)_18%)]',
          labelClassName
        )}
      >
        <span>{label}</span>
        {!required ? (
          <span className="text-xs font-normal text-slate-500">{optionalLabel}</span>
        ) : null}
      </label>
      {control}
      {description ? (
        <p
          id={descriptionId}
          className={cn(
            'text-sm text-[color-mix(in_srgb,var(--brand-emerald)_40%,var(--emerald-canopy)_60%)]',
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
      {error ? (
        <p
          id={errorId}
          role="alert"
          className={cn(
            'text-sm font-medium text-[color-mix(in_srgb,var(--brand-emerald)_15%,#b91c1c_85%)]',
            errorClassName
          )}
        >
          {error}
        </p>
      ) : null}
    </div>
  )
}
