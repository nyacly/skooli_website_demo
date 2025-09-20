'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Shield, Star } from 'lucide-react'

const schools = [
  { 
    id: 1, 
    name: 'Kampala International School', 
    logo: 'KIS',
    district: 'Kampala',
    students: 1200,
    rating: 4.9
  },
  { 
    id: 2, 
    name: 'St. Mary\'s College Kisubi', 
    logo: 'SMC',
    district: 'Wakiso',
    students: 2400,
    rating: 4.8
  },
  { 
    id: 3, 
    name: 'Makerere College School', 
    logo: 'MCS',
    district: 'Kampala',
    students: 1800,
    rating: 4.9
  },
  { 
    id: 4, 
    name: 'Gayaza High School', 
    logo: 'GHS',
    district: 'Wakiso',
    students: 1500,
    rating: 4.7
  },
  { 
    id: 5, 
    name: 'King\'s College Budo', 
    logo: 'KCB',
    district: 'Wakiso',
    students: 1600,
    rating: 4.8
  },
  { 
    id: 6, 
    name: 'Nabisunsa Girls School', 
    logo: 'NGS',
    district: 'Kampala',
    students: 1100,
    rating: 4.9
  }
]

export function TrustedSchools() {
  return (
    <section className="py-20 bg-neutral">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-accent mr-2" />
              <span className="text-accent font-600 text-sm uppercase tracking-wide">Trusted Partners</span>
            </div>
            <h2 className="section-title">Serving Uganda's Leading Schools</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              From primary to tertiary institutions, schools across Uganda trust Skooli for their logistics needs.
            </p>
          </div>
        </AnimatedSection>

        {/* Schools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {schools.map((school, index) => (
            <AnimatedSection key={school.id} delay={index * 100}>
              <div className="group cursor-pointer">
                <div className="bg-white rounded-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-primary-200">
                  {/* Logo */}
                  <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="font-700 text-lg text-primary group-hover:text-white">
                      {school.logo}
                    </span>
                  </div>

                  {/* School Name */}
                  <h3 className="font-600 text-gray-900 text-sm mb-2 leading-tight">
                    {school.name}
                  </h3>

                  {/* Location */}
                  <p className="text-xs text-gray-500 mb-2">
                    {school.district} District
                  </p>

                  {/* Students Count */}
                  <p className="text-xs text-gray-600 mb-3">
                    {school.students.toLocaleString()} students
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600 ml-1">{school.rating}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Row */}
        <AnimatedSection delay={600}>
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-700 text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600">Partner Schools</div>
              </div>
              <div>
                <div className="text-3xl font-700 text-accent mb-2">95%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-700 text-primary mb-2">15K+</div>
                <div className="text-sm text-gray-600">Students Served</div>
              </div>
              <div>
                <div className="text-3xl font-700 text-accent mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonial Quote */}
        <AnimatedSection delay={800}>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <blockquote className="text-xl italic text-gray-700 mb-6">
              "Skooli has transformed how we manage our school supplies. The AI-powered logistics ensure our students never run out of essential materials, and the transparency gives parents peace of mind."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary font-600">MN</span>
              </div>
              <div className="text-left">
                <div className="font-600 text-gray-900">Mrs. Margaret Nalwoga</div>
                <div className="text-sm text-gray-600">Head Teacher, Kampala International School</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}