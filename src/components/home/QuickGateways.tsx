'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Card } from '@/components/ui/Card'
import { Users, BookOpen, Building2, ArrowRight } from 'lucide-react'

const gateways = [
  {
    id: 'parent',
    title: 'Parent Portal',
    description: 'Track your child\'s school supplies, canteen balance, and receive real-time notifications.',
    icon: Users,
    href: '#',
    color: 'bg-blue-50 text-blue-600',
    features: ['Real-time tracking', 'Payment history', 'Notifications']
  },
  {
    id: 'student',
    title: 'Student Account',
    description: 'Access your learning materials, check canteen balance, and connect with peers.',
    icon: BookOpen,
    href: '#',
    color: 'bg-green-50 text-green-600',
    features: ['Learning materials', 'Peer network', 'Progress tracking']
  },
  {
    id: 'admin',
    title: 'School Admin',
    description: 'Manage school supplies, monitor deliveries, and access comprehensive analytics.',
    icon: Building2,
    href: '/for-schools',
    color: 'bg-purple-50 text-purple-600',
    features: ['Supply management', 'Analytics dashboard', 'Bulk ordering']
  }
]

export function QuickGateways() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-title">Quick Access Portals</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Choose your role to access personalized features designed for your specific needs in the Skooli ecosystem.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {gateways.map((gateway, index) => {
            const Icon = gateway.icon
            return (
              <AnimatedSection key={gateway.id} delay={index * 150}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <Link href={gateway.href} className="block h-full">
                    <div className="text-center">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl ${gateway.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-700 text-primary mb-3 group-hover:text-accent transition-colors">
                        {gateway.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {gateway.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {gateway.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-center text-accent font-600 group-hover:translate-x-1 transition-transform">
                        <span>Access Portal</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={500}>
          <div className="text-center mt-16">
            <div className="bg-neutral rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-700 text-primary mb-4">
                New to Skooli?
              </h3>
              <p className="text-gray-600 mb-6">
                Learn how our platform transforms education logistics through AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/how-it-works">
                  <button className="btn-primary">
                    Discover How It Works
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn-secondary">
                    Schedule a Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}