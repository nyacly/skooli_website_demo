import React from 'react'
import { Shield } from 'lucide-react'

const TrustedBySchools = () => {
  const schools = [
    { name: 'Kampala International School', location: 'Kampala' },
    { name: 'Makerere University', location: 'Kampala' },
    { name: 'Buganda Royal Institute', location: 'Mengo' },
    { name: 'St. Mary\'s College Kisubi', location: 'Wakiso' },
    { name: 'Gayaza High School', location: 'Gayaza' },
    { name: 'King\'s College Budo', location: 'Wakiso' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F4C81] mb-4">
            Trusted by Leading Schools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with educational institutions across Uganda to transform learning experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {schools.map((school, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
              title={`${school.name} - ${school.location}`}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#0F4C81] group-hover:scale-110 transition-all duration-300">
                <Shield className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="text-center">
                <h3 className="text-xs font-medium text-gray-700 group-hover:text-[#0F4C81] transition-colors leading-tight">
                  {school.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {school.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Join 50+ educational institutions already transforming their logistics
          </p>
        </div>
      </div>
    </section>
  )
}

export default TrustedBySchools

