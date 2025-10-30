import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import * as animations from '@/lib/animations.js'

/**
 * AnimateOnScroll component
 * Wraps children and animates them when they enter the viewport
 */

export default function AnimateOnScroll({
  children,
  animation = 'fadeInUp',
  threshold = 0.2,
  once = true,
  className,
  delay = 0,
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once,
    amount: threshold,
    margin: "0px 0px -100px 0px"
  })

  // Get the animation variant
  const animationVariant = typeof animation === 'string'
    ? animations[animation]
    : animation

  // Add delay if specified
  const variantWithDelay = delay > 0 ? {
    ...animationVariant,
    transition: {
      ...animationVariant.transition,
      delay
    }
  } : animationVariant

  return (
    <motion.div
      ref={ref}
      initial={variantWithDelay.initial}
      animate={isInView ? variantWithDelay.animate : variantWithDelay.initial}
      exit={variantWithDelay.exit}
      transition={variantWithDelay.transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
