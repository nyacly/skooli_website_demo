'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Vision & Impact', href: '/vision-impact' },
  { name: 'For Schools', href: '/for-schools' },
  { 
    name: 'Partnership',
    href: '/partner-with-us',
    submenu: [
      { name: 'Partner With Us', href: '/partner-with-us' },
      { name: 'Technology & AI', href: '/technology-ai' },
      { name: 'Meet the Team', href: '/meet-the-team' },
    ]
  },
  { name: 'News & Updates', href: '/news-updates' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmenuToggle = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName)
  }

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full transition-all duration-200',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100' 
        : 'bg-white border-b border-gray-100'
    )}>
      <nav className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-700 text-lg">S</span>
              </div>
              <span className="font-700 text-xl text-primary">Skooli</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-200 font-600"
                      onMouseEnter={() => setOpenSubmenu(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Submenu */}
                    <div 
                      className={cn(
                        'absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 transition-all duration-200',
                        openSubmenu === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      )}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                          onClick={() => setOpenSubmenu(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-600"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/for-funders">
              <Button variant="secondary" size="sm">
                Investor Centre
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="accent" size="sm">
                Join Our Impact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'md:hidden transition-all duration-200 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => handleSubmenuToggle(item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-primary hover:bg-white rounded-md transition-colors duration-200 font-600"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        openSubmenu === item.name ? 'rotate-180' : ''
                      )} />
                    </button>
                    
                    {openSubmenu === item.name && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-white rounded-md transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-white rounded-md transition-colors duration-200 font-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 space-y-2 border-t border-gray-200">
              <Link href="/for-funders" className="block">
                <Button variant="secondary" size="sm" className="w-full">
                  Investor Centre
                </Button>
              </Link>
              <Link href="/contact" className="block">
                <Button variant="accent" size="sm" className="w-full">
                  Join Our Impact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}