import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"
import { Skeleton, SkeletonText } from "@/components/ui/skeleton.jsx"

const cardVariants = cva(
  "group/card relative flex flex-col gap-5 rounded-2xl border shadow-lg shadow-black/5 transition-shadow",
  {
    variants: {
      variant: {
        default:
          "border-[color-mix(in_srgb,var(--brand-emerald)_18%,var(--emerald-haze)_82%)] bg-[var(--brand-white)] text-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)]",
        surface:
          "border-[color-mix(in_srgb,var(--brand-emerald)_22%,var(--brand-white)_78%)] bg-[color-mix(in_srgb,var(--brand-white)_96%,var(--brand-cream)_4%)] text-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)]",
        muted:
          "border-[var(--brand-emerald)]/18 bg-[color-mix(in_srgb,var(--brand-cream)_72%,var(--brand-white)_28%)] text-[color-mix(in_srgb,var(--brand-emerald)_78%,var(--emerald-ink)_22%)]",
        glass:
          "border-white/25 bg-white/12 text-white backdrop-blur",
        inverted:
          "border-[color-mix(in_srgb,var(--emerald-ink)_70%,var(--brand-emerald)_30%)] bg-[color-mix(in_srgb,var(--emerald-ink)_92%,var(--brand-emerald)_8%)] text-white",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      interactive: {
        false: "",
        true: "transition-transform hover:-translate-y-1 hover:shadow-xl focus-within:-translate-y-1 focus-within:shadow-xl focus-within:ring-[3px] focus-within:ring-[color-mix(in_srgb,var(--brand-emerald)_45%,var(--emerald-ink)_55%)]/30",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      interactive: false,
    },
  }
)

function Card({
  className,
  variant,
  padding,
  interactive,
  isLoading = false,
  asChild = false,
  children,
  ...props
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="card"
      className={cn(
        "outline-none",
        cardVariants({ variant, padding, interactive, className })
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <CardHeader>
            <Skeleton variant="text" width="60%" height="1.5rem" />
            <Skeleton variant="text" width="90%" height="1rem" className="mt-2" />
          </CardHeader>
          <CardContent>
            <Skeleton variant="rectangular" width="100%" height="200px" />
          </CardContent>
        </>
      ) : (
        children
      )}
    </Comp>
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-2",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-semibold leading-tight", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-[color-mix(in_srgb,var(--brand-emerald)_45%,var(--emerald-canopy)_55%)]", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div data-slot="card-content" className={cn("flex flex-col gap-4", className)} {...props} />
  );
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center gap-3", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
