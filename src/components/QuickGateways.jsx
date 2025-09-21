import React from 'react'
import { Users, Package, Heart, ArrowRight } from 'lucide-react'

const QuickGateways = () => {
  const gateways = [
    {
      icon: Users,
      number: '3',
      label: 'Pilot Schools',
      description: 'Leading educational institutions partnering with us',
      href: '#schools'
    },
    {
      icon: Package,
      number: '1,000+',
      label: 'Products',
      description: 'Educational supplies and resources available',
      href: '#products'
    },
    {
      icon: Heart,
      number: 'Serving',
      label: 'Families Across Uganda',
      description: 'Empowering communities through education',
      href: '#impact'
    }
  ]

  return (
    <section className="py-16 bg-[#0F4C81]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gateways.map((gateway, index) => {
            const IconComponent = gateway.icon
            return (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => window.location.href = gateway.href}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#F05A28] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {gateway.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {gateway.label}
                  </h3>
                  
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {gateway.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-[#F05A28] group-hover:text-white transition-colors">
                    <span className="text-sm font-medium mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default QuickGateways

