import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'

const NewsletterCTA = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call to Mailchimp
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1000)
  }

  if (isSubscribed) {
    return (
      <section className="py-20 bg-[#F7F5EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg shadow-black/5 p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#0F4C81] mb-4">
              Welcome to Our Community!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Thank you for subscribing. You'll receive updates about our impact, 
              new partnerships, and opportunities to get involved in transforming 
              education across Africa.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-[#F7F5EF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#F05A28] rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F4C81] mb-4">
              Stay Connected with Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Get exclusive updates on our impact, new partnerships, and opportunities 
              to join us in transforming education logistics across Africa.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-[#F05A28] hover:bg-[#E04A1F] text-white px-6 py-3 rounded-md font-semibold transition-colors whitespace-nowrap"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Join 500+ educators, parents, and partners already in our community. 
              Unsubscribe anytime.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0F4C81] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="font-semibold text-[#0F4C81] mb-2">Impact Updates</h3>
              <p className="text-sm text-gray-600">Monthly reports on our progress and achievements</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0F4C81] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">🤝</span>
              </div>
              <h3 className="font-semibold text-[#0F4C81] mb-2">Partnership News</h3>
              <p className="text-sm text-gray-600">First to know about new school partnerships</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0F4C81] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">💡</span>
              </div>
              <h3 className="font-semibold text-[#0F4C81] mb-2">Get Involved</h3>
              <p className="text-sm text-gray-600">Exclusive opportunities to support our mission</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterCTA

