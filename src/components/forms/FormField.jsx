import { cloneElement, isValidElement, useId } from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'

import { cn } from '@/lib/utils.js'

export function FormField({
  id,
  label,
  children,
  description,
  error,
  required,
  optionalLabel = 'Optional',
  showSuccess = false,
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
        <div
          id={errorId}
          role="alert"
          aria-live="polite"
          className={cn(
            'flex items-center gap-2 text-sm font-medium text-[color-mix(in_srgb,var(--brand-emerald)_15%,#b91c1c_85%)] animate-in fade-in slide-in-from-top-1 duration-200',
            errorClassName
          )}
        >
          <AlertCircle className="size-4 flex-shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      ) : null}
      {showSuccess && !error ? (
        <div
          className="flex items-center gap-2 text-sm font-medium text-[color-mix(in_srgb,var(--brand-emerald)_85%,#16a34a_15%)] animate-in fade-in slide-in-from-top-1 duration-200"
        >
          <CheckCircle className="size-4 flex-shrink-0" aria-hidden="true" />
          <span>Looks good!</span>
        </div>
      ) : null}
    </div>
  )
}
