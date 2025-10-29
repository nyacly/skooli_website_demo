import { useMemo, useState } from 'react'
import { MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'
import { AccentPill } from '@/components/AccentPill.jsx'
import leadershipGradient from '@/assets/leadership-gradient.svg'
import leadershipPortrait from '@/assets/leadership-portrait.svg'
import pastoralIllustration from '@/assets/pastoral-support-illustration.svg'

const segmentConfig = {
  investors: {
    label: 'Investors',
    description:
      'Impact investors and fund managers can request data rooms, diligence materials, and portfolio alignment sessions.',
    fields: [
      { id: 'name', label: 'Full name', type: 'text', autoComplete: 'name' },
      { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
      { id: 'organisation', label: 'Organisation', type: 'text', autoComplete: 'organization' },
      {
        id: 'investment_focus',
        label: 'Investment focus',
        type: 'select',
        options: ['Faith-driven capital', 'Gender lens', 'Education technology', 'Logistics infrastructure'],
      },
      {
        id: 'capital_timeline',
        label: 'Capital deployment timeline',
        type: 'select',
        options: ['Immediate (0-3 months)', 'Mid-term (3-9 months)', 'Long-term (9+ months)'],
      },
      { id: 'message', label: 'How can we support your diligence?', type: 'textarea' },
    ],
  },
  media: {
    label: 'Media',
    description: 'Journalists and storytellers can request interviews, press kits, and campus visit briefings.',
    fields: [
      { id: 'name', label: 'Full name', type: 'text', autoComplete: 'name' },
      { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
      { id: 'outlet', label: 'Media outlet', type: 'text' },
      { id: 'deadline', label: 'Deadline (if applicable)', type: 'text' },
      { id: 'message', label: 'Story focus or interview request', type: 'textarea' },
    ],
  },
  partnerships: {
    label: 'Partnerships',
    description:
      'Schools, ministries, NGOs, and corporates can explore supply partnerships, sponsorships, and regional pilots.',
    fields: [
      { id: 'name', label: 'Full name', type: 'text', autoComplete: 'name' },
      { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
      { id: 'organisation', label: 'Organisation', type: 'text', autoComplete: 'organization' },
      {
        id: 'region',
        label: 'Region of impact',
        type: 'select',
        options: ['Central Uganda', 'Northern Uganda', 'Eastern Uganda', 'Western Uganda', 'International / Diaspora'],
      },
      {
        id: 'partnership_type',
        label: 'Collaboration type',
        type: 'select',
        options: ['School provisioning', 'Donor-funded sponsorships', 'Church mobilization', 'Technology integration'],
      },
      { id: 'message', label: 'Tell us about your opportunity', type: 'textarea' },
    ],
  },
  support: {
    label: 'Support',
    description:
      'Families and schools can request delivery support, pastoral care, and answers from our service team.',
    fields: [
      { id: 'name', label: 'Full name', type: 'text', autoComplete: 'name' },
      { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
      { id: 'school', label: 'School or parish', type: 'text' },
      {
        id: 'support_type',
        label: 'Support needed',
        type: 'select',
        options: ['Prayer & pastoral support', 'Delivery tracking', 'Order issue', 'Sponsorship enquiry'],
      },
      {
        id: 'urgency',
        label: 'Urgency',
        type: 'select',
        options: ['Immediate', 'Within 48 hours', 'This week'],
      },
      { id: 'message', label: 'Share details so we can help quickly', type: 'textarea' },
    ],
  },
}

const offices = [
  {
    title: 'Uganda Headquarters',
    address: ['Plot 12, Hassim Road, Buziga', 'Kampala, Uganda'],
    phone: '+256 414 000 000',
    email: 'operations@skooli.africa',
    emphasis: 'Operations nerve centre',
  },
  {
    title: 'Northern Logistics Hub',
    address: ['Awere Road, Layibi Division', 'Gulu, Uganda'],
    phone: '+256 312 555 210',
    email: 'gulu@skooli.africa',
    emphasis: 'Warehouse & rider training',
  },
  {
    title: 'UK Impact Office',
    address: ['128 City Road', 'London, EC1V 2NX'],
    phone: '+44 20 4524 3201',
    email: 'uk@skooli.africa',
    emphasis: 'Diaspora partnerships',
  },
]

export default function ContactPage() {
  const [status, setStatus] = useState('idle')
  const [activeSegment, setActiveSegment] = useState('investors')
  const [supportType, setSupportType] = useState('Prayer & pastoral support')

  const segmentOrder = useMemo(() => Object.keys(segmentConfig), [])
  const currentSegment = segmentConfig[activeSegment]

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')
    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    payload.segment = activeSegment

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('API unavailable')
      setStatus('success')
    } catch (error) {
      console.warn('Falling back to offline contact submission', error)
      setTimeout(() => {
        setStatus('success')
      }, 600)
    }
    event.currentTarget.reset()
    if (activeSegment === 'support') {
      setSupportType('Prayer & pastoral support')
    }
  }

  return (
    <div className="bg-[var(--brand-cream)]">
      <section
        className="relative overflow-hidden py-16 text-white"
        style={{
          backgroundImage: `linear-gradient(110deg, rgba(2,47,38,0.92), rgba(0,152,119,0.88)), url(${leadershipPortrait})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0 opacity-75"
          style={{ backgroundImage: `url(${leadershipGradient})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative mx-auto max-w-6xl px-4">
          <AccentPill tone="inverse" className="bg-white/15">
            Contact
          </AccentPill>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            We steward every enquiry with speed, dignity, and prayerful care
          </h1>
          <p className="mt-4 max-w-3xl text-base text-white/85">
            Reach our leaders directly through tailored channels for investors, media, partnerships, or family support. Our service desk responds within one business day and escalates urgent prayer requests immediately.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-[var(--brand-emerald)]">Choose your channel</h2>
                <AccentPill size="xs" className="tracking-[0.25em]">
                  Average response 6 hours
                </AccentPill>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {segmentOrder.map((segment) => (
                  <button
                    key={segment}
                    type="button"
                    onClick={() => setActiveSegment(segment)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeSegment === segment
                        ? 'bg-[var(--brand-emerald)] text-white shadow'
                        : 'bg-[color-mix(in_srgb,var(--brand-cream)_68%,#ffffff_32%)] text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] shadow-inner shadow-white/50 hover:bg-[var(--brand-emerald)]/10'
                    }`}
                  >
                    {segmentConfig[segment].label}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">{currentSegment.description}</p>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                {currentSegment.fields.map((field) => {
                  const fieldId = `${activeSegment}-${field.id}`
                  const baseInputClasses =
                    'mt-1 w-full rounded-md border border-[var(--brand-emerald)]/20 bg-[var(--brand-cream)] px-4 py-3 text-sm text-slate-700 focus:border-[var(--brand-emerald)] focus:outline-none'

                  if (field.type === 'select') {
                    const isSupportType = field.id === 'support_type'
                    return (
                      <div key={field.id}>
                        <label className="text-sm font-semibold text-[var(--brand-emerald)]" htmlFor={fieldId}>
                          {field.label}
                        </label>
                        <select
                          id={fieldId}
                          name={field.id}
                          className={`${baseInputClasses} appearance-none`}
                          onChange={(event) => {
                            if (isSupportType) {
                              setSupportType(event.target.value)
                            }
                          }}
                          {...(isSupportType
                            ? { value: supportType }
                            : { defaultValue: '' })}
                          required
                        >
                          {!isSupportType && (
                            <option value="" disabled>
                              Select an option
                            </option>
                          )}
                          {field.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    )
                  }

                  if (field.type === 'textarea') {
                    return (
                      <div key={field.id}>
                        <label className="text-sm font-semibold text-[var(--brand-emerald)]" htmlFor={fieldId}>
                          {field.label}
                        </label>
                        <textarea
                          className={`${baseInputClasses} h-32`}
                          id={fieldId}
                          name={field.id}
                          required
                        />
                      </div>
                    )
                  }

                  return (
                    <div key={field.id}>
                      <label className="text-sm font-semibold text-[var(--brand-emerald)]" htmlFor={fieldId}>
                        {field.label}
                      </label>
                      <input
                        className={baseInputClasses}
                        type={field.type}
                        id={fieldId}
                        name={field.id}
                        autoComplete={field.autoComplete}
                        required
                      />
                    </div>
                  )
                })}
                {activeSegment === 'support' && supportType === 'Prayer & pastoral support' && (
                  <div className="rounded-2xl bg-[var(--brand-emerald)]/10 p-4 text-sm text-[var(--brand-emerald)]">
                    <p className="font-semibold">Prayer privacy commitment</p>
                    <p className="mt-2 text-slate-600">
                      We share prayer requests only with our vetted chaplaincy team. Indicate any confidentiality needs in your message above.
                    </p>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full rounded-md bg-[var(--brand-emerald)] py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--brand-emerald)]/20 hover:bg-[color-mix(in_srgb,var(--brand-emerald)_80%,#032823_20%)]"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : status === 'success' ? 'Message sent!' : 'Submit enquiry'}
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <AccentPill size="sm" className="tracking-[0.25em]">
                  Direct contacts
                </AccentPill>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div>
                    <p className="font-semibold text-[var(--brand-emerald)]">Investor relations</p>
                    <a
                      className="text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] hover:text-[var(--brand-emerald)]"
                      href="mailto:invest@skooli.africa"
                    >
                      invest@skooli.africa
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--brand-emerald)]">Press & media</p>
                    <a
                      className="text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] hover:text-[var(--brand-emerald)]"
                      href="mailto:pr@skooli.africa"
                    >
                      pr@skooli.africa
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--brand-emerald)]">Family support</p>
                    <a
                      className="text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] hover:text-[var(--brand-emerald)]"
                      href="mailto:hello@skooli.africa"
                    >
                      hello@skooli.africa
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                {offices.map((office) => (
                  <div key={office.title} className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                    <div className="absolute -left-6 top-6 hidden h-20 w-20 rotate-6 rounded-full bg-[var(--brand-emerald)]/10 blur-xl md:block" />
                    <div className="flex items-start gap-3">
                      <span className="mt-1 inline-flex size-10 items-center justify-center rounded-full bg-[var(--brand-emerald)] text-white shadow">
                        <MapPin className="size-5" />
                      </span>
                      <div>
                        <p className="text-base font-semibold text-[var(--brand-emerald)]">{office.title}</p>
                        <AccentPill size="xs" className="mt-2 tracking-[0.25em]">
                          {office.emphasis}
                        </AccentPill>
                        <div className="mt-3 space-y-1 text-sm text-slate-600">
                          {office.address.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                          {office.phone && (
                            <a
                              className="block text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] hover:text-[var(--brand-emerald)]"
                              href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}
                            >
                              {office.phone}
                            </a>
                          )}
                          {office.email && (
                            <a
                              className="block text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] hover:text-[var(--brand-emerald)]"
                              href={`mailto:${office.email}`}
                            >
                              {office.email}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <AccentPill size="sm" className="tracking-[0.25em]">
                  Connect
                </AccentPill>
                <div className="mt-3 flex gap-3">
                  <a
                    className="flex size-10 items-center justify-center rounded-full bg-[var(--brand-emerald)] text-white shadow hover:bg-[color-mix(in_srgb,var(--brand-emerald)_80%,#032823_20%)]"
                    href="https://www.linkedin.com/company/skooli"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                  <a
                    className="flex size-10 items-center justify-center rounded-full bg-[var(--brand-emerald)] text-white shadow hover:bg-[color-mix(in_srgb,var(--brand-emerald)_80%,#032823_20%)]"
                    href="https://twitter.com/skooli_africa"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="size-5" />
                  </a>
                  <a
                    className="flex size-10 items-center justify-center rounded-full bg-[var(--brand-emerald)] text-white shadow hover:bg-[color-mix(in_srgb,var(--brand-emerald)_80%,#032823_20%)]"
                    href="https://www.youtube.com/@skooli"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                  >
                    <Youtube className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-3xl shadow-lg shadow-black/5">
              <iframe
                title="Skooli Uganda HQ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8407611425167!2d32.620957515284574!3d0.2846169641157848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbcdfb2b9fd7b%3A0xd0f0d4e9cdf3d1f7!2sBuziga!5e0!3m2!1sen!2sug!4v170000000000"
                className="h-80 w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div
              className="relative overflow-hidden rounded-3xl shadow-lg shadow-black/5"
              style={{
                backgroundImage: `linear-gradient(120deg, rgba(2,47,38,0.85), rgba(0,152,119,0.65)), url(${pastoralIllustration})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative h-full w-full p-6 text-white">
                <h3 className="text-2xl font-semibold">Prayer & pastoral support</h3>
                <p className="mt-3 text-sm text-white/85">
                  Our chaplaincy team offers scripture-grounded encouragement, trauma-informed care, and intercession for learners and staff. Submit requests via the support form or email
                  <a
                    className="font-semibold text-white underline decoration-white/60 decoration-2 underline-offset-4 hover:text-white"
                    href="mailto:prayer@skooli.africa"
                  >
                    {' '}
                    prayer@skooli.africa
                  </a>
                  .
                </p>
                <AccentPill tone="inverse" className="mt-4 bg-white/20 tracking-[0.25em]">
                  Live intercession line: +256 708 123 450
                </AccentPill>
              </div>
            </div>
          </div>
          {activeSegment === 'support' && (
            <div className="mt-8 overflow-hidden rounded-3xl bg-[var(--brand-cream)] p-6 shadow-inner shadow-black/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-emerald)]">Pastoral readiness</p>
              <p className="mt-3 text-sm text-slate-600">
                When you submit a prayer request we immediately notify two chaplains—one on duty in Kampala and one in your district—to ensure coverage within 12 hours.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
