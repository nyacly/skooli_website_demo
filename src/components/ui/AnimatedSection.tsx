'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'zoom'
  delay?: number
  threshold?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  className,
  animation = 'slideUp',
  delay = 0,
  threshold = 0.1,
  once = true
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (once && hasAnimated) return
          
          setTimeout(() => {
            setIsVisible(true)
            if (once) setHasAnimated(true)
          }, delay)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold, once, hasAnimated])

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out'
    
    if (!isVisible) {
      switch (animation) {
        case 'fade':
          return `${baseClasses} opacity-0`
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-8`
        case 'slideLeft':
          return `${baseClasses} opacity-0 translate-x-8`
        case 'slideRight':
          return `${baseClasses} opacity-0 -translate-x-8`
        case 'zoom':
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0 translate-y-8`
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
    >
      {children}
    </div>
  )
}