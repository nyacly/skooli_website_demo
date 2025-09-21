import React, { useState, useEffect, useRef } from 'react'
import { School, Users, Truck, Award } from 'lucide-react'

const ImpactSnapshot = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    schools: 0,
    students: 0,
    deliveries: 0,
    satisfaction: 0
  })
  
  const sectionRef = useRef(null)

  const stats = [
    {
      icon: School,
      key: 'schools',
      target: 3,
      label: 'Schools Served',
      suffix: '',
      color: 'text-[#F05A28]'
    },
    {
      icon: Users,
      key: 'students',
      target: 1250,
      label: 'Students Supported',
      suffix: '+',
      color: 'text-[#0F4C81]'
    },
    {
      icon: Truck,
      key: 'deliveries',
      target: 95,
      label: 'On-time Deliveries',
      suffix: '%',
      color: 'text-[#10B981]'
    },
    {
      icon: Award,
      key: 'satisfaction',
      target: 98,
      label: 'Satisfaction Rate',
      suffix: '%',
      color: 'text-[#8B5CF6]'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    stats.forEach((stat) => {
      let current = 0
      const increment = stat.target / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.target) {
          current = stat.target
          clearInterval(timer)
        }
        
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(current)
        }))
      }, stepDuration)
    })
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F4C81] mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Measurable results that demonstrate our commitment to transforming 
            education logistics across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>

                <div className="mb-4">
                  <span className={`text-4xl md:text-5xl font-bold ${stat.color} animate-counter`}>
                    {counters[stat.key]}
                  </span>
                  <span className={`text-2xl font-bold ${stat.color}`}>
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                  {stat.label}
                </h3>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-[#F7F5EF] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Be part of the transformation. Every partnership, every delivery, 
              every student equipped brings us closer to our vision of accessible, 
              quality education for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#F05A28] hover:bg-[#E04A1F] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Partner With Us
              </button>
              <button className="border-2 border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white px-6 py-3 rounded-md font-semibold transition-all">
                View Impact Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactSnapshot

