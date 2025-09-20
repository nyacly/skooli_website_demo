export interface NavItem {
  title: string
  href: string
  description?: string
  external?: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image?: string
  rating: number
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  category: 'Impact' | 'Tech' | 'Press'
  publishedAt: string
  image?: string
  slug: string
  author: string
}

export interface School {
  id: string
  name: string
  logo?: string
  district: string
  studentsCount: number
  joinedAt: string
}

export interface Counter {
  id: string
  label: string
  value: number
  suffix?: string
  animationDuration?: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  category: 'NGO' | 'Government' | 'Supplier' | 'Church'
  description: string
  website?: string
}

export interface Investment {
  series: string
  amount: string
  investors: string[]
  date: string
  status: 'completed' | 'in-progress'
}

export interface Metric {
  id: string
  name: string
  value: string | number
  change?: number
  period: string
}

export interface AIAgent {
  id: string
  name: string
  description: string
  technology: string[]
  status: 'live' | 'development' | 'planned'
  icon: string
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  message: string
  type: 'general' | 'investor' | 'school' | 'partner' | 'press'
}

export interface NewsletterSubscription {
  email: string
  source: string
}

export interface CalendlyEvent {
  url: string
  title: string
  duration: number
  description: string
}