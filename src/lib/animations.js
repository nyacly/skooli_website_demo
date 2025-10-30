/**
 * Animation utilities for Framer Motion
 * Centralized animation variants for consistent motion across the site
 */

// Fade animations
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
}

// Scale animations
export const scaleIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
  transition: { duration: 0.2, ease: [0, 0, 0.2, 1] }
}

export const scaleInBounce = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
  transition: { duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }
}

// Slide animations
export const slideInRight = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
  transition: { duration: 0.4, ease: [0, 0, 0.2, 1] }
}

export const slideInLeft = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
  transition: { duration: 0.4, ease: [0, 0, 0.2, 1] }
}

// Stagger animations for lists/grids
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerContainerFast = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
}

export const staggerItemScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] }
  }
}

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] }
  }
}

// Hover animations (use with whileHover)
export const hoverLift = {
  y: -2,
  scale: 1.02,
  transition: { duration: 0.15, ease: [0, 0, 0.2, 1] }
}

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: [0, 0, 0.2, 1] }
}

// Tap animations (use with whileTap)
export const tapScale = {
  scale: 0.98,
  transition: { duration: 0.1 }
}

// Card hover animation
export const cardHover = {
  y: -4,
  scale: 1.01,
  transition: { duration: 0.2, ease: [0, 0, 0.2, 1] }
}

// Success checkmark animation sequence
export const checkmarkDraw = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.2 }
    }
  }
}

export const checkmarkCircle = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.68, -0.55, 0.265, 1.55]
    }
  }
}

// Viewport animation settings for scroll-triggered animations
export const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px"
}

export const viewportSettingsLarge = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -150px 0px"
}
