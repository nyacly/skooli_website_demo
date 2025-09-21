import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Play } from 'lucide-react'
import heroImage from '../assets/Skooli_website_template.jpeg'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Students learning with teacher"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforming Education Logistics
            <span className="block">Across Africa</span>
          </h1>
          
          <div className="space-y-4 mb-8">
            <p className="text-xl md:text-2xl text-white font-semibold">
              Ethically.
            </p>
            <p className="text-xl md:text-2xl text-white font-semibold">
              Efficiently.
            </p>
            <p className="text-xl md:text-2xl text-white font-semibold">
              Faithfully.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#F05A28] hover:bg-[#E04A1F] text-white px-8 py-4 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all"
            >
              Explore Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0F4C81] px-8 py-4 text-lg font-semibold rounded-md backdrop-blur-sm transition-all"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

