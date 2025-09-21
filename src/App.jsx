import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, ChevronDown } from 'lucide-react'
import './App.css'

// Import components (we'll create these)
import Hero from './components/Hero'
import QuickGateways from './components/QuickGateways'
import TrustedBySchools from './components/TrustedBySchools'
import HowItWorksPreview from './components/HowItWorksPreview'
import ImpactSnapshot from './components/ImpactSnapshot'
import NewsletterCTA from './components/NewsletterCTA'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'Services', href: '#services' },
    { name: 'Investor Centre', href: '#investors' },
  ]

  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#0F4C81]">Skooli</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Button className="nav-cta">
                Join Our Impact
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#0F4C81] hover:text-[#F05A28] transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-[#0F4C81] hover:text-[#F05A28] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-3 py-2">
                  <Button className="w-full nav-cta">
                    Join Our Impact
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <QuickGateways />
        <TrustedBySchools />
        <HowItWorksPreview />
        <ImpactSnapshot />
        <NewsletterCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

