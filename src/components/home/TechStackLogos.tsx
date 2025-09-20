'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'

const techStack = [
  {
    name: 'React',
    logo: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDkuODYxQTIuMTM5IDIuMTM5IDAgMCAwIDkuODYxIDEyQTIuMTM5IDIuMTM5IDAgMCAwIDEyIDE0LjEzOUEyLjEzOSAyLjEzOSAwIDAgMCAxNC4xMzkgMTJBMi4xMzkgMi4xMzkgMCAwIDAgMTIgOS44NjFaIiBmaWxsPSIjNjFEQUZCIi8+PHBhdGggZD0iTTIxIDEyQzIxIDEzLjI1IDE3LjE5NSAxNC4yOTQgMTIgMTQuMjk0QzYuODA1IDE0LjI5NCAzIDEzLjI1IDMgMTJDMyAxMC43NSA2LjgwNSA5LjcwNiAxMiA5LjcwNkMxNy4xOTUgOS43MDYgMjEgMTAuNzUgMjEgMTJaIiBzdHJva2U9IiM2MURBRkIiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xNi41IDIwLjc5NEMxNS43MzMgMjIuMDQ0IDEzLjI5MiAyMS4zOTEgMTAuNSAxOC4wOTdDNy43MDggMTQuODAzIDYuMzY3IDEwLjk1IDcuMTM0IDkuNzA2QzcuOTAxIDguNDU2IDEwLjM0MiA5LjEwOSAxMy4xMzQgMTIuNDAzQzE1LjkyNiAxNS42OTcgMTcuMjY3IDE5LjU1IDE2LjUgMjAuNzk0WiIgc3Ryb2tlPSIjNjFEQUZCIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTYuNSAzLjIwNkMxNy4yNjcgMS45NTYgMTUuOTI2IC0xLjg5NyAxMy4xMzQgMS4zOTdDMTAuMzQyIDQuNjkxIDkuMDAxIDguNTQ0IDkuNzY4IDkuNzg4QzEwLjUzNSAxMS4wMzIgMTIuOTc2IDEwLjM3OSAxNS43NjggNy4wODVDMTguNTYgMy43OTEgMTkuOTAxLTAuMDYyIDE5LjEzNCAtMS4zMDZaIiBzdHJva2U9IiM2MURBRkIiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==',
    category: 'Frontend'
  },
  {
    name: 'Tailwind CSS',
    logo: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDZDOS4zMyA2IDcuNjcgNy4zMyA3IDEwQzguMzMgOC42NyAxMCA4LjY3IDEyIDEwQzE0IDExLjMzIDE2IDExLjMzIDE3IDEwQzE2LjMzIDcuMzMgMTQuNjcgNiAxMiA2WiIgZmlsbD0iIzA2QjZENCIvPjxwYXRoIGQ9Ik03IDEwQzQuMzMgMTAgMi42NyAxMS4zMyAyIDE0QzMuMzMgMTIuNjcgNS4zMyAxMi42NyA3IDE0QzkgMTUuMzMgMTEgMTUuMzMgMTIgMTRDMTEuMzMgMTEuMzMgOS42NyAxMCA3IDEwWiIgZmlsbD0iIzA2QjZENCIvPjwvc3ZnPg==',
    category: 'Styling'
  },
  {
    name: 'Django',
    logo: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgM1YxOUMxMC4zMyAxOSAxMyAxNi4zMyAxMyAxM1Y5QzEzIDUuNjcgMTAuMzMgMyA3IDNaIiBmaWxsPSIjMDkyRTIwIi8+PHBhdGggZD0iTTE3IDNWMTlDMjAuMzMgMTkgMjMgMTYuMzMgMjMgMTNWOUMyMyA1LjY3IDIwLjMzIDMgMTcgM1oiIGZpbGw9IiMwOTJFMjAiLz48L3N2Zz4=',
    category: 'Backend'
  },
  {
    name: 'PostgreSQL',
    logo: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJDNy4wMyAyIDMgNi4wMyAzIDExUzYuMDMgMjAgMTIgMjBIMTVWMThIMTJDOC4xMyAxOCA1IDE0Ljg3IDUgMTFTOC4xMyA0IDEyIDRTMTkgNy4xMyAxOSAxMVYxM0MxOSAxNC4xIDEzLjkgMTUgMTMgMTVTNyAxNC4xIDcgMTNWMTFDNyA5LjkgNy45IDkgOSA5UzExIDkuOSAxMSAxMVYxM0MxMSAxMy41NSAxMS40NSAxNCAxMiAxNFMxMyAxMy41NSAxMyAxM1YxMUMxMyA3LjEzIDkuODcgNCAxMiA0WiIgZmlsbD0iIzMzNkU5MiIvPjwvc3ZnPg==',
    category: 'Database'
  },
  {
    name: 'Microsoft Azure',
    logo: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJMMTAgMTBIMTRMMTIgMjJMOCAxM0gxNkwxMiAyWiIgZmlsbD0iIzAwNzhENCIvPjwvc3ZnPg==',
    category: 'Cloud'
  },
  {
    name: 'LangChain',
    logo: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJDNy4wMyAyIDMgNi4wMyAzIDExUzYuMDMgMjAgMTIgMjBTMjEgMTcuOTcgMjEgMTNTMTcuOTcgMiAxMiAyWk0xMiA0QzE2Ljg3IDQgMTkgOC4xMyAxOSAxM1MxNi44NyAyMiAxMiAyMlM1IDE4LjEzIDUgMTNTOC4xMyA0IDEyIDRaIiBmaWxsPSIjNzQ3NDc0Ii8+PHBhdGggZD0iTTEyIDZMOSA5TDEyIDEyTDE1IDlMMTIgNloiIGZpbGw9IiM3NDc0NzQiLz48cGF0aCBkPSJNMTIgMTJMOSAxNUwxMiAxOEwxNSAxNUwxMiAxMloiIGZpbGw9IiM3NDc0NzQiLz48L3N2Zz4=',
    category: 'AI/ML'
  }
]

export function TechStackLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-700 text-primary mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to deliver reliable, scalable, and secure education logistics solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techStack.map((tech, index) => (
            <AnimatedSection key={tech.name} delay={index * 100}>
              <div className="group">
                <div className="bg-white rounded-card p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                  {/* Logo */}
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-600 text-gray-900 text-sm mb-2">
                    {tech.name}
                  </h3>

                  {/* Category */}
                  <span className="text-xs text-gray-500 px-2 py-1 bg-gray-50 rounded-full">
                    {tech.category}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Technology Benefits */}
        <AnimatedSection delay={600}>
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-600 text-primary mb-2">Scalable Architecture</h3>
                <p className="text-sm text-gray-600">Cloud-native infrastructure that grows with demand across multiple countries.</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-600 text-primary mb-2">Enterprise Security</h3>
                <p className="text-sm text-gray-600">Bank-level encryption and compliance with international data protection standards.</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-600 text-primary mb-2">AI-Powered Intelligence</h3>
                <p className="text-sm text-gray-600">Machine learning algorithms optimize routes, predict demand, and enhance user experience.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Performance Metrics */}
        <AnimatedSection delay={800}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: '99.9%', label: 'Uptime', desc: 'Platform availability' },
              { metric: '<100ms', label: 'Response Time', desc: 'Average API latency' },
              { metric: '256-bit', label: 'Encryption', desc: 'Data protection standard' },
              { metric: '24/7', label: 'Monitoring', desc: 'System health tracking' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="text-xl font-700 text-primary mb-1">{item.metric}</div>
                  <div className="text-sm font-600 text-gray-700 mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}