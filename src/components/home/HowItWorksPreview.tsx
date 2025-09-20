'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Package, Truck, CheckCircle } from 'lucide-react'

const steps = [
  {
    id: 1,
    icon: Package,
    title: 'Smart Cataloguing',
    description: 'AI-curated product catalog with school-specific recommendations and bulk pricing.',
    details: ['Automated inventory management', 'Custom product bundles', 'Seasonal planning'],
    color: 'bg-blue-50 text-blue-600 border-blue-200'
  },
  {
    id: 2,
    icon: Truck,
    title: 'Optimized Delivery',
    description: 'Route optimization ensures 95% on-time delivery with real-time tracking throughout Uganda.',
    details: ['GPS tracking', 'Route optimization', 'Weather-aware logistics'],
    color: 'bg-green-50 text-green-600 border-green-200'
  },
  {
    id: 3,
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Comprehensive quality checks, delivery confirmation, and 24/7 support for peace of mind.',
    details: ['Quality verification', 'Digital confirmation', 'Issue resolution'],
    color: 'bg-purple-50 text-purple-600 border-purple-200'
  }
]

export function HowItWorksPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-title">How Skooli Works</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Our three-step process leverages AI and local expertise to deliver educational supplies efficiently across Africa.
            </p>
          </div>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimatedSection key={step.id} delay={index * 200}>
                  <div className="text-center group">
                    {/* Step Number */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className={`w-20 h-20 rounded-2xl ${step.color} border-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-10 h-10" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-700">
                          {step.id}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-700 text-primary mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 mb-6">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center justify-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect Card */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-neutral rounded-lg p-4 border border-gray-100">
                        <div className="text-sm text-gray-700">
                          Step {step.id} is optimized for maximum efficiency and reliability.
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={600}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-700 mb-4">
                Ready to Experience the Full Process?
              </h3>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                Discover how our comprehensive platform handles everything from supply chain management to delivery tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/how-it-works">
                  <Button variant="accent" size="lg" className="group">
                    See Full Process
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/for-schools">
                  <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-primary-50">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Process Stats */}
        <AnimatedSection delay={800}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Average Delivery Time', value: '24hrs', desc: 'Within Kampala' },
              { label: 'Route Optimization', value: '35%', desc: 'Fuel savings' },
              { label: 'Quality Score', value: '98.5%', desc: 'Customer satisfaction' },
              { label: 'Cost Reduction', value: '40%', desc: 'Vs. traditional methods' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-card p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-700 text-primary mb-2 group-hover:text-accent transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-600 text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-600">
                    {stat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}