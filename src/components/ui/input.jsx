import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from '@/lib/utils.js'

const inputVariants = cva(
  "flex w-full min-w-0 items-center border bg-white font-medium text-[color-mix(in_srgb,var(--brand-emerald)_72%,var(--emerald-ink)_28%)] placeholder:text-[color-mix(in_srgb,var(--brand-emerald)_45%,var(--emerald-haze)_55%)] transition-[border,box-shadow,background-color,color] focus-visible:outline-none focus-visible:border-[color-mix(in_srgb,var(--brand-emerald)_75%,var(--emerald-ink)_25%)] focus-visible:ring-[3px] focus-visible:ring-[color-mix(in_srgb,var(--brand-emerald)_45%,var(--emerald-ink)_55%)]/30 disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-[color-mix(in_srgb,rgba(220,38,38,1)_70%,var(--brand-emerald)_30%)] aria-invalid:ring-[color-mix(in_srgb,rgba(220,38,38,1)_55%,var(--brand-emerald)_45%)]/30",
  {
    variants: {
      variant: {
        default: "border-[color-mix(in_srgb,var(--brand-emerald)_25%,var(--emerald-haze)_75%)] bg-[var(--brand-white)]",
        subtle: "border-transparent bg-[color-mix(in_srgb,var(--brand-cream)_70%,var(--brand-white)_30%)] focus-visible:border-[color-mix(in_srgb,var(--brand-emerald)_35%,var(--emerald-ink)_65%)]",
        inverted: "border-white/40 bg-white/10 text-white placeholder:text-white/60 focus-visible:border-white focus-visible:ring-white/40",
      },
      size: {
        sm: "min-h-[40px] rounded-lg px-3 text-sm",
        default: "min-h-[44px] rounded-xl px-4 text-sm",
        lg: "min-h-[48px] rounded-2xl px-5 text-base",
      },
      density: {
        relaxed: "py-3",
        compact: "py-2",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        density: "compact",
        className: "py-2",
      },
      {
        size: "default",
        density: "compact",
        className: "py-2.5",
      },
      {
        size: "lg",
        density: "relaxed",
        className: "py-3.5",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      density: "compact",
    },
  }
)

function Input({ className, type = "text", variant, size, density, ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, size, density, className }))}
      {...props}
    />
  );
}

const ForwardedInput = React.forwardRef(Input)
ForwardedInput.displayName = "Input"

export { ForwardedInput as Input, inputVariants }
