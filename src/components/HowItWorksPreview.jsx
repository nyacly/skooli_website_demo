import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ShoppingCart, Truck, GraduationCap, ArrowRight } from 'lucide-react'

const HowItWorksPreview = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Shop Online',
      description: 'Parents browse and purchase educational supplies through our user-friendly platform',
      color: 'bg-[#F05A28]'
    },
    {
      icon: Truck,
      title: 'We Deliver',
      description: 'Our smart logistics network ensures 95% on-time delivery to schools across Uganda',
      color: 'bg-[#0F4C81]'
    },
    {
      icon: GraduationCap,
      title: 'Students Receive',
      description: 'Students get their supplies directly at school, ready to focus on learning',
      color: 'bg-[#10B981]'
    }
  ]

  return (
    <section className="py-20 bg-[#F7F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F4C81] mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process makes educational supply management simple, 
            efficient, and reliable for families and schools across Africa.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                        <span className="text-sm font-bold text-[#0F4C81]">{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-8 mb-4">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-[#0F4C81] hover:bg-[#0A3A66] text-white px-8 py-4 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all"
          >
            Learn More About Our Process
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksPreview

