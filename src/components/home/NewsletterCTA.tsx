'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { Mail, CheckCircle } from 'lucide-react'
import { trackEvent } from '@/lib/utils'

export function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubscribing || isSubscribed) return

    setIsSubscribing(true)

    try {
      // TODO: Implement actual Mailchimp API integration
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call
      
      // Track the newsletter subscription event
      trackEvent('newsletter_subscribed', {
        source: 'homepage_cta',
        email: email
      })

      setIsSubscribed(true)
      setEmail('')
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 5000)

    } catch (error) {
      console.error('Newsletter subscription error:', error)
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-600">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Icon */}
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Mail className="w-10 h-10 text-white" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-700 mb-6 text-white">
              Stay Connected with Our Journey
            </h2>

            {/* Description */}
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get exclusive updates on our impact across Africa, new features, success stories, and insights from the education logistics frontier.
            </p>

            {/* Newsletter Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="bg-white bg-opacity-10 rounded-2xl p-2 backdrop-blur-sm border border-white border-opacity-20">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-accent-500"
                      required
                      disabled={isSubscribing || isSubscribed}
                    />
                    <Button 
                      type="submit" 
                      variant="accent" 
                      size="md"
                      loading={isSubscribing}
                      disabled={!email || isSubscribing || isSubscribed}
                      className="sm:w-auto whitespace-nowrap"
                    >
                      {isSubscribing ? 'Subscribing...' : 'Subscribe Now'}
                    </Button>
                  </div>
                </div>

                {/* Privacy Note */}
                <p className="text-sm text-primary-200 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              /* Success State */
              <div className="max-w-md mx-auto">
                <div className="bg-green-500 bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm border border-green-400 border-opacity-30">
                  <CheckCircle className="w-12 h-12 text-green-300 mx-auto mb-4" />
                  <h3 className="text-xl font-600 text-white mb-2">
                    Welcome to the Skooli Community!
                  </h3>
                  <p className="text-green-100">
                    You'll receive our next update with exclusive insights from across our network.
                  </p>
                </div>
              </div>
            )}

            {/* Social Proof */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                <div className="text-2xl font-700 text-white mb-2">2,500+</div>
                <div className="text-primary-100 text-sm">Subscribers</div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                <div className="text-2xl font-700 text-white mb-2">Weekly</div>
                <div className="text-primary-100 text-sm">Impact Updates</div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                <div className="text-2xl font-700 text-white mb-2">Exclusive</div>
                <div className="text-primary-100 text-sm">Insights & Reports</div>
              </div>
            </div>

            {/* What You'll Receive */}
            <div className="mt-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
              <h3 className="text-xl font-600 text-white mb-6">What you'll receive:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  'Monthly impact reports from schools across Uganda',
                  'Behind-the-scenes stories from our field teams',
                  'Early access to new features and platform updates',
                  'Invitations to exclusive webinars and events',
                  'Insights from our AI and logistics innovations',
                  'Success stories from students, teachers, and parents'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-primary-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 text-center">
              <p className="text-primary-200 text-sm">
                Questions about our newsletter? Contact us at{' '}
                <a href="mailto:newsletter@skooli.com" className="text-white underline hover:text-accent transition-colors">
                  newsletter@skooli.com
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}