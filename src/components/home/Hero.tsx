'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-neutral via-white to-neutral overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative">
        <div className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="slideUp">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-600 mb-8">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Transforming Education Logistics
              </div>

              {/* Main Headline */}
              <h1 className="hero-title text-balance">
                Transforming Education Logistics 
                <span className="text-accent"> Across Africa</span>
              </h1>

              {/* Sub-headline */}
              <p className="hero-subtitle text-balance">
                Ethically. Efficiently. Faithfully.
                <br />
                Connecting schools with essential supplies while driving sustainable impact through AI-powered logistics.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link href="/for-funders">
                  <Button variant="primary" size="lg" className="group">
                    Explore Our Mission
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link href="/exec">
                  <Button variant="secondary" size="lg" className="group">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center"
                      >
                        <span className="text-xs font-600 text-primary-600">{i}</span>
                      </div>
                    ))}
                  </div>
                  <span>Trusted by 50+ schools</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span>95% on-time delivery rate</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <span>ISO 27001 compliant</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Hero Image/Illustration */}
      <AnimatedSection animation="slideUp" delay={300}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Placeholder for hero image - replace with actual image */}
              <div className="aspect-video bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-700 text-white">S</span>
                  </div>
                  <h3 className="text-2xl font-700 text-primary mb-2">Skooli Platform Preview</h3>
                  <p className="text-gray-600">AI-Powered Education Logistics Dashboard</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-600 text-gray-700">Live Tracking</span>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-600 text-primary">250+ Schools</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-700 text-primary">95%</div>
                    <div className="text-xs text-gray-600">On-time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-700 text-accent">15K+</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-700 text-primary">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 text-white fill-current">
          <path d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,69.3C672,64,768,64,864,74.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}