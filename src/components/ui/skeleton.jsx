import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils.js'

/**
 * Skeleton component for loading states
 * Shows animated placeholder content while data is loading
 */

const skeletonVariants = cva(
  'animate-pulse bg-[color-mix(in_srgb,var(--brand-emerald)_8%,var(--brand-white)_92%)]',
  {
    variants: {
      variant: {
        text: 'rounded-md h-4',
        circular: 'rounded-full',
        rectangular: 'rounded-lg',
        card: 'rounded-2xl'
      }
    },
    defaultVariants: {
      variant: 'text'
    }
  }
)

const Skeleton = React.forwardRef(
  ({ className, variant, width, height, ...props }, ref) => {
    const style = {}

    if (width) {
      style.width = typeof width === 'number' ? `${width}px` : width
    }

    if (height) {
      style.height = typeof height === 'number' ? `${height}px` : height
    }

    return (
      <div
        ref={ref}
        data-slot="skeleton"
        className={cn(skeletonVariants({ variant }), className)}
        style={style}
        {...props}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'

/**
 * Pre-configured skeleton variants for common use cases
 */

// Text line skeleton (for paragraphs)
const SkeletonText = ({ lines = 3, className, ...props }) => {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          width={index === lines - 1 ? '70%' : '100%'}
        />
      ))}
    </div>
  )
}

// Avatar skeleton (circular)
const SkeletonAvatar = ({ size = 40, className, ...props }) => {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      className={className}
      {...props}
    />
  )
}

// Image skeleton (rectangular)
const SkeletonImage = ({ width = '100%', height = 200, className, ...props }) => {
  return (
    <Skeleton
      variant="rectangular"
      width={width}
      height={height}
      className={className}
      {...props}
    />
  )
}

// Card skeleton (complete card structure)
const SkeletonCard = ({ showImage = true, textLines = 3, className, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[color-mix(in_srgb,var(--emerald-haze)_25%,var(--brand-white)_75%)] bg-white p-6 shadow-lg',
        className
      )}
      {...props}
    >
      {showImage && <SkeletonImage height={160} className="mb-4" />}
      <Skeleton variant="text" width="60%" height="1.5rem" className="mb-3" />
      <SkeletonText lines={textLines} />
    </div>
  )
}

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonImage, SkeletonCard }
