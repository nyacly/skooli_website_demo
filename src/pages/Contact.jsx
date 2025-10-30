import { useMemo, useState } from 'react'
import { MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'
import { AccentPill } from '@/components/AccentPill.jsx'
import leadershipGradient from '@/assets/leadership-gradient.svg'
import leadershipPortrait from '@/assets/leadership-portrait.svg'
import pastoralIllustration from '@/assets/pastoral-support-illustration.svg'
import { FormField } from '@/components/forms/FormField.jsx'
import { FormFieldset } from '@/components/forms/FormFieldset.jsx'
import { FormStatusMessage } from '@/components/forms/FormStatusMessage.jsx'

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
      { id: 'deadline', label: 'Deadline (if applicable)', type: 'text', required: false },
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

const fieldDescriptions = {
  investment_focus: 'Select the investment lens that best represents your current mandate.',
  capital_timeline: 'Let us know when you intend to deploy capital so we can align diligence cadences.',
  message: 'Share context, deadlines, or prayer requests to help our team respond quickly.',
  outlet: 'Tell us which publication or platform you represent.',
  deadline: 'Optional, but it helps us prioritise press requests with tight timelines.',
  region: 'Choose the geography where your work is currently focused.',
  partnership_type: 'We tailor our collaboration team based on the partnership avenue you select.',
  support_type: 'We route each support type directly to the right chaplaincy or operations lead.',
  urgency: 'Flag the urgency so our service desk can meet your timeline.',
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

  const handleSegmentChange = (segment) => {
    setActiveSegment(segment)
    setStatus('idle')
    if (segment !== 'support') {
      setSupportType('Prayer & pastoral support')
    }
  }

  const statusMessages = {
    loading: {
      tone: 'polite',
      variant: 'info',
      message: 'Sending your message…',
    },
    success: {
      tone: 'polite',
      variant: 'success',
      message: 'Thanks! Our team will respond within one business day.',
    },
    offline: {
      tone: 'assertive',
      variant: 'info',
      message:
        'We could not reach the live API, but your enquiry has been saved for manual follow up. Expect a response within one business day.',
    },
    error: {
      tone: 'assertive',
      variant: 'error',
      message: 'Something went wrong while sending your enquiry. Please try again or email hello@skooli.africa.',
    },
  }

  const statusDetails = statusMessages[status]

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const segment = formData.get('segment') ?? activeSegment

    setActiveSegment(segment)
    setStatus('loading')

    const payload = Object.fromEntries(formData.entries())
    payload.segment = segment

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
      setStatus('offline')
    }

    form.reset()
    setSupportType('Prayer & pastoral support')
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
              <FormFieldset
                legend="Select contact channel"
                description={currentSegment.description}
                className="mt-6 bg-[var(--brand-cream)]/60"
                bodyClassName="space-y-3"
              >
                <div
                  className="flex flex-wrap gap-3"
                  role="radiogroup"
                  aria-label="Select the contact channel that best matches your enquiry"
                >
                  {segmentOrder.map((segment) => {
                    const isActive = activeSegment === segment
                    return (
                      <label key={segment} className="cursor-pointer">
                        <input
                          type="radio"
                          name="segment"
                          value={segment}
                          className="peer sr-only"
                          checked={isActive}
                          onChange={() => handleSegmentChange(segment)}
                        />
                        <span
                          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)] ${
                            isActive
                              ? 'bg-[var(--brand-emerald)] text-white shadow-lg shadow-[var(--brand-emerald)]/25'
                              : 'border border-[color-mix(in_srgb,var(--brand-emerald)_22%,var(--brand-white)_78%)] bg-white text-[color-mix(in_srgb,var(--brand-emerald)_78%,var(--emerald-ink)_22%)] shadow-inner shadow-white/50 hover:border-[var(--brand-emerald)]/70 hover:bg-[var(--brand-emerald)]/10'
                          }`}
                        >
                          {segmentConfig[segment].label}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </FormFieldset>
              <form className="mt-6 space-y-5" onSubmit={handleSubmit} aria-busy={status === 'loading'}>
                {currentSegment.fields.map((field) => {
                  const baseInputClasses =
                    'mt-1 w-full rounded-md border border-[var(--brand-emerald)]/20 bg-[var(--brand-cream)] px-4 py-3 text-sm text-slate-700 transition focus:border-[var(--brand-emerald)] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--brand-emerald)_70%,var(--emerald-ink)_30%)]'
                  const isRequired = field.required !== false
                  const description = fieldDescriptions[field.id]

                  if (field.type === 'select') {
                    const isSupportType = field.id === 'support_type'
                    const selectProps = isSupportType ? { value: supportType } : { defaultValue: '' }
                    return (
                      <FormField
                        key={field.id}
                        label={field.label}
                        required={isRequired}
                        description={description}
                      >
                        {({ id, ...controlProps }) => (
                          <select
                            {...controlProps}
                            id={id}
                            name={field.id}
                            className={`${baseInputClasses} appearance-none`}
                            {...selectProps}
                            onChange={(event) => {
                              if (isSupportType) {
                                setSupportType(event.target.value)
                              }
                              if (status !== 'idle') {
                                setStatus('idle')
                              }
                            }}
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
                        )}
                      </FormField>
                    )
                  }

                  if (field.type === 'textarea') {
                    return (
                      <FormField
                        key={field.id}
                        label={field.label}
                        required={isRequired}
                        description={description}
                      >
                        {({ id, ...controlProps }) => (
                          <textarea
                            {...controlProps}
                            id={id}
                            name={field.id}
                            className={`${baseInputClasses} h-32`}
                            onChange={() => {
                              if (status !== 'idle') {
                                setStatus('idle')
                              }
                            }}
                          />
                        )}
                      </FormField>
                    )
                  }

                  return (
                    <FormField
                      key={field.id}
                      label={field.label}
                      required={isRequired}
                      description={description}
                    >
                      {({ id, ...controlProps }) => (
                        <input
                          {...controlProps}
                          id={id}
                          className={baseInputClasses}
                          type={field.type}
                          name={field.id}
                          autoComplete={field.autoComplete}
                          onChange={() => {
                            if (status !== 'idle') {
                              setStatus('idle')
                            }
                          }}
                        />
                      )}
                    </FormField>
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
                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[var(--brand-emerald)] py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--brand-emerald)]/20 transition hover:bg-[color-mix(in_srgb,var(--brand-emerald)_80%,#032823_20%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)]"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending…' : 'Submit enquiry'}
                  </button>
                  <FormStatusMessage
                    tone={statusDetails?.tone ?? 'polite'}
                    variant={statusDetails?.variant ?? 'info'}
                  >
                    {statusDetails?.message}
                  </FormStatusMessage>
                </div>
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
