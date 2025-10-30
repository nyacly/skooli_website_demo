import * as React from 'react'
import { Inbox } from 'lucide-react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils.js'
import { Button } from '@/components/ui/button.jsx'

/**
 * EmptyState component for consistent empty state display
 * Shows when there's no data, no results, or empty lists
 */

const emptyStateVariants = cva('flex flex-col items-center justify-center text-center', {
  variants: {
    variant: {
      compact: 'py-6 px-4 gap-2',
      default: 'py-12 px-4 gap-4',
      spacious: 'py-20 px-4 gap-6'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

const iconSizeVariants = {
  compact: 'size-8',
  default: 'size-12',
  spacious: 'size-16'
}

const titleVariants = {
  compact: 'typography-heading-4 font-semibold',
  default: 'typography-heading-3 font-semibold',
  spacious: 'typography-heading-2 font-bold'
}

const descriptionVariants = {
  compact: 'typography-body-sm',
  default: 'typography-body-md',
  spacious: 'typography-body-lg'
}

const EmptyState = React.forwardRef(
  (
    {
      className,
      variant = 'default',
      icon: CustomIcon,
      title,
      description,
      action,
      ...props
    },
    ref
  ) => {
    const Icon = CustomIcon || Inbox

    return (
      <div
        ref={ref}
        className={cn(emptyStateVariants({ variant }), className)}
        {...props}
      >
        <Icon
          className={cn(
            'text-[color-mix(in_srgb,var(--brand-emerald)_40%,var(--emerald-mist)_60%)]',
            iconSizeVariants[variant]
          )}
          aria-hidden="true"
        />
        <div className="flex flex-col gap-2 max-w-md">
          {title && (
            <h3 className={cn('text-[var(--emerald-ink)]', titleVariants[variant])}>
              {title}
            </h3>
          )}
          {description && (
            <p
              className={cn(
                'text-[var(--emerald-bough)]',
                descriptionVariants[variant]
              )}
            >
              {description}
            </p>
          )}
        </div>
        {action && <div className="mt-2">{action}</div>}
      </div>
    )
  }
)

EmptyState.displayName = 'EmptyState'

export { EmptyState }
