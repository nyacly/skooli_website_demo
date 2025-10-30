import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { Loader2 } from "lucide-react"
import { cva } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-tight transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[color-mix(in_srgb,var(--brand-emerald)_45%,var(--emerald-ink)_55%)]/35 disabled:pointer-events-none disabled:opacity-60 data-[state=loading]:pointer-events-none data-[state=loading]:opacity-90 [&_svg:not([data-no-shrink])]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--brand-emerald)] text-[var(--brand-white)] shadow-lg shadow-[color-mix(in_srgb,var(--brand-emerald)_65%,var(--emerald-ink)_35%)]/30 hover:bg-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)] focus-visible:ring-[color-mix(in_srgb,var(--brand-emerald)_65%,var(--emerald-ink)_35%)]/40",
        secondary:
          "bg-[color-mix(in_srgb,var(--brand-emerald)_12%,var(--brand-white)_88%)] text-[color-mix(in_srgb,var(--brand-emerald)_78%,var(--emerald-ink)_22%)] shadow-md shadow-black/10 hover:bg-[color-mix(in_srgb,var(--brand-emerald)_18%,var(--brand-white)_82%)]",
        outline:
          "border border-[color-mix(in_srgb,var(--brand-emerald)_45%,var(--emerald-haze)_55%)] bg-white text-[color-mix(in_srgb,var(--brand-emerald)_75%,var(--emerald-ink)_25%)] shadow-sm shadow-black/5 hover:border-[color-mix(in_srgb,var(--brand-emerald)_75%,var(--emerald-ink)_25%)] hover:text-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)]",
        ghost:
          "bg-transparent text-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)] hover:bg-[color-mix(in_srgb,var(--brand-emerald)_8%,var(--brand-white)_92%)]",
        link: "bg-transparent text-[var(--brand-emerald)] underline-offset-4 hover:text-[color-mix(in_srgb,var(--brand-emerald)_75%,var(--emerald-ink)_25%)] hover:underline",
        subtle:
          "bg-[color-mix(in_srgb,var(--brand-cream)_75%,var(--brand-white)_25%)] text-[color-mix(in_srgb,var(--brand-emerald)_72%,var(--emerald-ink)_28%)] shadow-sm shadow-black/10 hover:bg-[color-mix(in_srgb,var(--brand-cream)_65%,var(--brand-white)_35%)]",
      },
      size: {
        sm: "min-h-[40px] px-4 text-sm",
        default: "min-h-[44px] px-5 text-sm",
        lg: "min-h-[52px] px-6 text-base",
        icon: "size-11",
      },
      shape: {
        rounded: "rounded-xl",
        pill: "rounded-full",
        square: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      shape: "rounded",
    },
  }
)

const spinnerStyles = "size-4 animate-spin text-current"

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      shape,
      asChild = false,
      isLoading = false,
      loadingText,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : motion.button
    const { disabled, type, ...rest } = props
    const mergedDisabled = isLoading ? true : disabled
    const resolvedType = type ?? (asChild ? undefined : "button")
    const content = isLoading ? loadingText ?? children : children

    // Motion props for non-asChild buttons
    const motionProps = !asChild && !mergedDisabled ? {
      whileHover: { y: -2, scale: 1.02 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.15, ease: [0, 0, 0.2, 1] }
    } : {}

    return (
      <Comp
        ref={asChild ? undefined : ref}
        data-slot="button"
        data-state={isLoading ? "loading" : undefined}
        className={cn(buttonVariants({ variant, size, shape, className }))}
        aria-busy={isLoading || undefined}
        aria-disabled={asChild && mergedDisabled ? true : undefined}
        {...(!asChild ? { disabled: mergedDisabled, type: resolvedType } : {})}
        {...motionProps}
        {...rest}
      >
        {isLoading && <Loader2 aria-hidden="true" className={spinnerStyles} />}
        <span className="inline-flex items-center gap-2 leading-none">{content}</span>
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
