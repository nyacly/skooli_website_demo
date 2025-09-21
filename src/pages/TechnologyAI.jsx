import { useState } from 'react'
import { Bot, Map, Shield, Lock, Briefcase } from 'lucide-react'

const agents = [
  {
    id: 'parent-chatbot',
    name: 'Parent Chatbot',
    summary: 'Answers FAQs in Luganda, Luo, and English; nudges parents about deadlines.',
    tech: 'Built with GPT-4o mini, Twilio WhatsApp, and custom translation models.',
  },
  {
    id: 'route-optimizer',
    name: 'Route Optimizer',
    summary: 'Calculates the fastest routes factoring in weather, road conditions, and school timetables.',
    tech: 'Powered by Routific, Azure Maps, and internal telemetry.',
  },
  {
    id: 'demand-forecaster',
    name: 'Demand Forecaster',
    summary: 'Predicts bundle quantities per school and grade using historic ordering patterns.',
    tech: 'Time series modelling with Prophet and reinforcement learning adjustments.',
  },
  {
    id: 'pricing-engine',
    name: 'Pricing Engine',
    summary: 'Balances affordability with supplier margins and donor subsidies.',
    tech: 'Elasticity modelling, rule-based guardrails, and Azure Functions for daily recalculations.',
  },
  {
    id: 'bi-dashboard',
    name: 'BI Dashboard',
    summary: 'Executive analytics for investors, ministries, and diocesan leadership.',
    tech: 'Built with Metabase, Azure Synapse, and LangChain connectors.',
  },
]

const techStack = [
  { name: 'React' },
  { name: 'Tailwind CSS' },
  { name: 'Django' },
  { name: 'Postgres' },
  { name: 'Azure' },
  { name: 'LangChain' },
]

export default function TechnologyAI() {
  const [openCard, setOpenCard] = useState('parent-chatbot')

  return (
    <div className="bg-[#F7F5EF]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">Technology & AI</p>
          <h1 className="mt-4 text-4xl font-bold text-[#0F4C81]">Infrastructure that keeps mission promises</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-600">
            Skooli’s stack blends modern web technology, AI copilots, and secure integrations with mobile money and warehousing partners.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-[#0F4C81]">Architecture overview</h2>
          <p className="mt-4 text-sm text-slate-600">
            Clickable diagram showing how our web app, AI layer, logistics API, mobile money integrations, and warehouses connect.
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-[#0F4C81]">AI agent ecosystem</h2>
          <p className="mt-4 text-sm text-slate-600">Tap each card to reveal the underlying technology.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => {
              const isOpen = openCard === agent.id
              return (
                <button
                  key={agent.id}
                  type="button"
                  onClick={() => setOpenCard((prev) => (prev === agent.id ? '' : agent.id))}
                  className={`flex h-full flex-col rounded-3xl border p-6 text-left shadow-lg shadow-black/5 transition ${
                    isOpen ? 'border-[#F05A28] bg-[#F7F5EF]' : 'border-transparent bg-white hover:border-[#F05A28]/40 hover:bg-[#F7F5EF]'
                  }`}
                >
                  <div className="flex items-center gap-3 text-[#0F4C81]">
                    <Bot className="size-5" />
                    <h3 className="text-lg font-semibold">{agent.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{agent.summary}</p>
                  {isOpen && <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#F05A28]">{agent.tech}</p>}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-[#0F4C81]">Security & compliance</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
              <Shield className="size-6 text-[#0F4C81]" />
              <h3 className="mt-4 text-lg font-semibold text-[#0F4C81]">ISO 27001 Roadmap</h3>
              <p className="mt-2 text-sm text-slate-600">Certification journey underway with quarterly control audits and documentation.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
              <Lock className="size-6 text-[#0F4C81]" />
              <h3 className="mt-4 text-lg font-semibold text-[#0F4C81]">Encryption</h3>
              <p className="mt-2 text-sm text-slate-600">Data encrypted at rest (AES-256) and in transit (TLS 1.3). Field-level encryption for student identifiers.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
              <Map className="size-6 text-[#0F4C81]" />
              <h3 className="mt-4 text-lg font-semibold text-[#0F4C81]">Privacy compliance</h3>
              <p className="mt-2 text-sm text-slate-600">Aligned with GDPR and Uganda Data Protection Act. Consent workflows for parents and guardians.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-[#0F4C81]">Tech stack</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech.name} className="rounded-full bg-[#F7F5EF] px-4 py-2 text-sm font-semibold text-[#0F4C81] shadow">
                {tech.name}
              </span>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-[#F7F5EF] p-6 shadow-lg shadow-black/5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">Open roles</p>
            <p className="mt-3 text-sm text-slate-600">We’re expanding our engineering and AI teams. Join the waitlist for future roles.</p>
            <a
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-[#0F4C81] px-4 py-2 text-sm font-semibold text-[#0F4C81] shadow hover:bg-[#0F4C81] hover:text-white"
              href="https://www.skooli.africa/careers"
              target="_blank"
              rel="noreferrer"
            >
              <Briefcase className="size-4" /> View careers page
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function ArchitectureDiagram() {
  return (
    <svg viewBox="0 0 600 260" className="h-72 w-full" aria-labelledby="architectureTitle architectureDesc">
      <title id="architectureTitle">Skooli architecture diagram</title>
      <desc id="architectureDesc">Diagram showing web app, AI layer, logistics API, mobile money, and warehouses.</desc>
      <rect x="20" y="30" width="160" height="80" rx="20" fill="#0F4C81" opacity="0.9" />
      <text x="100" y="75" textAnchor="middle" fontSize="14" fill="white">Web App</text>

      <rect x="220" y="30" width="160" height="80" rx="20" fill="#F05A28" opacity="0.9" />
      <text x="300" y="75" textAnchor="middle" fontSize="14" fill="white">AI Layer</text>

      <rect x="420" y="30" width="160" height="80" rx="20" fill="#0F4C81" opacity="0.9" />
      <text x="500" y="75" textAnchor="middle" fontSize="14" fill="white">Logistics API</text>

      <rect x="120" y="160" width="160" height="80" rx="20" fill="#F7F5EF" stroke="#0F4C81" strokeWidth="2" />
      <text x="200" y="205" textAnchor="middle" fontSize="14" fill="#0F4C81">Mobile Money</text>

      <rect x="320" y="160" width="160" height="80" rx="20" fill="#F7F5EF" stroke="#0F4C81" strokeWidth="2" />
      <text x="400" y="205" textAnchor="middle" fontSize="14" fill="#0F4C81">Warehouses</text>

      <line x1="180" y1="70" x2="220" y2="70" stroke="#0F4C81" strokeWidth="4" markerEnd="url(#arrow)" />
      <line x1="380" y1="70" x2="420" y2="70" stroke="#0F4C81" strokeWidth="4" markerEnd="url(#arrow)" />
      <line x1="300" y1="110" x2="200" y2="160" stroke="#F05A28" strokeWidth="4" markerEnd="url(#arrow)" />
      <line x1="300" y1="110" x2="400" y2="160" stroke="#F05A28" strokeWidth="4" markerEnd="url(#arrow)" />

      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#F05A28" />
        </marker>
      </defs>
    </svg>
  )
}
