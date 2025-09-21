import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Heart } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#mission' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Meet the Team', href: '#team' },
      { name: 'Careers', href: '#careers' }
    ],
    services: [
      { name: 'For Schools', href: '#schools' },
      { name: 'For Parents', href: '#parents' },
      { name: 'For Partners', href: '#partners' },
      { name: 'Technology & AI', href: '#technology' },
      { name: 'Investor Centre', href: '#investors' }
    ],
    resources: [
      { name: 'Impact Report', href: '#impact' },
      { name: 'News & Updates', href: '#news' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Support Center', href: '#support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Use', href: '#terms' },
      { name: 'Faith & Ethics', href: '#ethics' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Data Protection', href: '#data-protection' }
    ]
  }

  return (
    <footer className="bg-[#0F4C81] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Skooli</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Transforming education logistics across Africa. Ethically. 
                Efficiently. Faithfully.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F05A28] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  <p className="font-medium">Uganda HQ</p>
                  <p>Plot 12, Hassim Road, Buziga</p>
                  <p>Kampala, Uganda</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F05A28] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  <p className="font-medium">UK Office</p>
                  <p>128 City Road</p>
                  <p>London, EC1V 2NX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F05A28] flex-shrink-0" />
                <a href="mailto:hello@skooli.africa" className="text-sm text-white/80 hover:text-white transition-colors">
                  hello@skooli.africa
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F05A28] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F05A28] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F05A28] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              <p>© 2025 Skooli Technologies Group Ltd. All rights reserved.</p>
              <p className="mt-1">Registered in the United Kingdom and Uganda.</p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#F05A28] fill-current" />
              <span>for African education</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-white/60 italic">
              "Redefining Access. Restoring Dignity. Reshaping Education."
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

