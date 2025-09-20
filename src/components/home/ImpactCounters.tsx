'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Counter } from '@/components/ui/Counter'
import { School, Users, Package, MapPin, Clock, Award } from 'lucide-react'

const counters = [
  {
    id: 'schools',
    icon: School,
    label: 'Schools Served',
    value: 52,
    suffix: '+',
    description: 'Across 8 districts in Uganda',
    color: 'text-blue-600'
  },
  {
    id: 'students',
    icon: Users,
    label: 'Students Supported',
    value: 15420,
    suffix: '+',
    description: 'From primary to university level',
    color: 'text-green-600'
  },
  {
    id: 'deliveries',
    icon: Package,
    label: 'On-time Deliveries',
    value: 95,
    suffix: '%',
    description: 'Consistently reliable service',
    color: 'text-purple-600'
  },
  {
    id: 'districts',
    icon: MapPin,
    label: 'Districts Covered',
    value: 12,
    suffix: '',
    description: 'Expanding across East Africa',
    color: 'text-red-600'
  },
  {
    id: 'response',
    icon: Clock,
    label: 'Average Response Time',
    value: 2,
    suffix: 'hrs',
    description: 'Customer support excellence',
    color: 'text-indigo-600'
  },
  {
    id: 'satisfaction',
    icon: Award,
    label: 'Customer Satisfaction',
    value: 98,
    suffix: '%',
    description: 'Based on quarterly surveys',
    color: 'text-orange-600'
  }
]

export function ImpactCounters() {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral via-white to-primary-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-title">Our Growing Impact</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Real-time metrics showcasing how Skooli is transforming education logistics across Africa.
            </p>
          </div>
        </AnimatedSection>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {counters.map((counter, index) => {
            const Icon = counter.icon
            return (
              <AnimatedSection key={counter.id} delay={index * 150}>
                <div className="bg-white rounded-card p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${counter.color.replace('text-', 'bg-').replace('600', '50')} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${counter.color}`} />
                  </div>

                  {/* Counter */}
                  <div className="mb-4">
                    <Counter 
                      end={counter.value}
                      suffix={counter.suffix}
                      className={`text-4xl md:text-5xl ${counter.color} group-hover:scale-105 transition-transform duration-300`}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-700 text-primary mb-3 group-hover:text-accent transition-colors">
                    {counter.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {counter.description}
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="mt-4 w-full bg-gray-100 rounded-full h-1 overflow-hidden">
                    <div 
                      className={`h-full ${counter.color.replace('text-', 'bg-')} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`}
                    ></div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Live Updates Section */}
        <AnimatedSection delay={900}>
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-700 text-primary mb-2">Live Platform Activity</h3>
              <p className="text-gray-600">Real-time updates from the Skooli ecosystem</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Live Delivery Tracking */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm font-600 text-green-700">Live Deliveries</span>
                  </div>
                  <span className="text-green-600 font-700">23 Active</span>
                </div>
                <div className="text-xs text-green-600">
                  Currently tracking deliveries across Kampala, Wakiso, and Mukono districts
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm font-600 text-blue-700">New Orders</span>
                  </div>
                  <span className="text-blue-600 font-700">8 Today</span>
                </div>
                <div className="text-xs text-blue-600">
                  Schools placing orders for next term supplies
                </div>
              </div>

              {/* Support Response */}
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm font-600 text-purple-700">Support</span>
                  </div>
                  <span className="text-purple-600 font-700">&lt; 2min</span>
                </div>
                <div className="text-xs text-purple-600">
                  Average response time today
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={1200}>
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-700 text-primary mb-4">
                Become Part of Our Growing Community
              </h3>
              <p className="text-gray-600 mb-8">
                Join the schools, students, and families already benefiting from our AI-powered education logistics platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Start Your Journey
                </button>
                <button className="btn-secondary">
                  See Success Stories
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}