import * as React from 'react'
import { AlertCircle } from 'lucide-react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils.js'
import { Button } from '@/components/ui/button.jsx'

/**
 * ErrorState component for consistent error display across the site
 * Supports inline, section, and page variants
 */

const errorStateVariants = cva('flex items-center gap-3', {
  variants: {
    variant: {
      inline: 'flex-row text-sm',
      section: 'flex-col text-center py-8 px-4',
      page: 'flex-col items-center justify-center text-center min-h-[50vh] px-4'
    }
  },
  defaultVariants: {
    variant: 'inline'
  }
})

const iconSizeVariants = {
  inline: 'size-4',
  section: 'size-8',
  page: 'size-12'
}

const titleVariants = {
  inline: 'text-sm font-medium',
  section: 'typography-heading-3 font-semibold',
  page: 'typography-heading-1 font-bold'
}

const messageVariants = {
  inline: 'text-xs',
  section: 'typography-body-md',
  page: 'typography-body-lg'
}

const ErrorState = React.forwardRef(
  (
    {
      className,
      variant = 'inline',
      title,
      message,
      action,
      onRetry,
      icon: CustomIcon,
      ...props
    },
    ref
  ) => {
    const Icon = CustomIcon || AlertCircle

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="polite"
        className={cn(errorStateVariants({ variant }), className)}
        {...props}
      >
        <Icon
          className={cn(
            'text-[var(--destructive)] flex-shrink-0',
            iconSizeVariants[variant]
          )}
          aria-hidden="true"
        />
        <div className={cn('flex flex-col gap-2', variant !== 'inline' && 'items-center')}>
          {title && (
            <h3
              className={cn('text-[var(--destructive)]', titleVariants[variant])}
            >
              {title}
            </h3>
          )}
          {message && (
            <p
              className={cn(
                'text-[color-mix(in_srgb,var(--destructive)_80%,var(--emerald-ink)_20%)]',
                messageVariants[variant]
              )}
            >
              {message}
            </p>
          )}
          {(action || onRetry) && (
            <div className={cn('flex gap-3 mt-2', variant === 'page' && 'mt-4')}>
              {onRetry && (
                <Button
                  onClick={onRetry}
                  variant="outline"
                  size={variant === 'inline' ? 'sm' : 'default'}
                  className="border-[var(--destructive)] text-[var(--destructive)] hover:bg-[var(--destructive)] hover:text-white"
                >
                  Try Again
                </Button>
              )}
              {action}
            </div>
          )}
        </div>
      </div>
    )
  }
)

ErrorState.displayName = 'ErrorState'

export { ErrorState }
