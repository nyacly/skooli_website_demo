'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

const footerNavigation = {
  company: [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Vision & Impact', href: '/vision-impact' },
    { name: 'Meet the Team', href: '/meet-the-team' },
    { name: 'News & Updates', href: '/news-updates' },
  ],
  solutions: [
    { name: 'For Schools', href: '/for-schools' },
    { name: 'For Funders', href: '/for-funders' },
    { name: 'Partner With Us', href: '/partner-with-us' },
    { name: 'Technology & AI', href: '/technology-ai' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Help Center', href: '#' },
    { name: 'Status', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Faith & Ethics', href: '/legal/ethics' },
    { name: 'Cookies Policy', href: '/legal/cookies' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    try {
      // TODO: Implement Mailchimp integration
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      console.log('Newsletter subscription:', email)
      setEmail('')
      // Show success message
    } catch (error) {
      console.error('Newsletter subscription error:', error)
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-primary-700">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-700 mb-4 text-white">
              Stay Updated on Our Impact
            </h3>
            <p className="text-primary-100 mb-8">
              Get the latest updates on how we're transforming education logistics across Africa.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-button text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                required
              />
              <Button 
                type="submit" 
                variant="accent" 
                loading={isSubscribing}
                className="sm:w-auto"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-700 text-lg">S</span>
              </div>
              <span className="font-700 text-xl text-white">Skooli</span>
            </div>
            <p className="text-primary-100 mb-6 text-sm leading-relaxed">
              Transforming Education Logistics Across Africa. Ethically. Efficiently. Faithfully.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-primary-100">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+256 700 000 000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@skooli.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-600 text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-primary-100 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-600 text-white mb-4">Solutions</h4>
                <ul className="space-y-2">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-primary-100 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-600 text-white mb-4">Support</h4>
                <ul className="space-y-2">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-primary-100 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-600 text-white mb-4">Legal</h4>
                <ul className="space-y-2">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-primary-100 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-primary-100 text-sm">
              © 2024 Skooli. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-primary-100 hover:text-white transition-colors duration-200"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}