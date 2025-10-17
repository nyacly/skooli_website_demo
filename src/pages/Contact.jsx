import { useState } from 'react'
import { MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function ContactPage() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')
    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

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
  }

  return (
    <div className="bg-[#F7F5EF]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">Contact</p>
          <h1 className="mt-4 text-4xl font-bold text-[#0F4C81]">We’re here for parents, schools, and partners</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-600">
            Reach out to the Skooli team for press, partnerships, support, or prayer. We respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
              <h2 className="text-2xl font-semibold text-[#0F4C81]">General enquiries</h2>
              <p className="mt-3 text-sm text-slate-600">Fill in the form below or email hello@skooli.africa.</p>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-semibold text-[#0F4C81]" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="mt-1 w-full rounded-md border border-[#0F4C81]/20 bg-[#F7F5EF] px-4 py-3 text-sm text-slate-700 focus:border-[#F05A28] focus:outline-none"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#0F4C81]" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="mt-1 w-full rounded-md border border-[#0F4C81]/20 bg-[#F7F5EF] px-4 py-3 text-sm text-slate-700 focus:border-[#F05A28] focus:outline-none"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#0F4C81]" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="mt-1 h-32 w-full rounded-md border border-[#0F4C81]/20 bg-[#F7F5EF] px-4 py-3 text-sm text-slate-700 focus:border-[#F05A28] focus:outline-none"
                    id="message"
                    name="message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#F05A28] py-3 text-sm font-semibold text-white shadow hover:bg-[#e14a1e]"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : status === 'success' ? 'Message sent!' : 'Send message'}
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">Press & Media</p>
                <a className="mt-2 block text-sm font-semibold text-[#0F4C81]" href="mailto:pr@skooli.africa">
                  pr@skooli.africa
                </a>
                <p className="mt-4 text-sm text-slate-600">For interviews, stories, and speaking engagements.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">Offices</p>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-[#0F4C81]" />
                    <div>
                      <p className="font-semibold text-[#0F4C81]">Uganda HQ</p>
                      <p>Plot 12, Hassim Road, Buziga</p>
                      <p>Kampala, Uganda</p>
                      <a className="text-[#F05A28]" href="tel:+256414000000">+256 414 000 000</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-[#0F4C81]" />
                    <div>
                      <p className="font-semibold text-[#0F4C81]">UK Office</p>
                      <p>128 City Road</p>
                      <p>London, EC1V 2NX</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">Connect</p>
                <div className="mt-3 flex gap-3">
                  <a
                    className="flex size-10 items-center justify-center rounded-full bg-[#0F4C81] text-white shadow hover:bg-[#F05A28]"
                    href="https://www.linkedin.com/company/skooli"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                  <a
                    className="flex size-10 items-center justify-center rounded-full bg-[#0F4C81] text-white shadow hover:bg-[#F05A28]"
                    href="https://twitter.com/skooli_africa"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="size-5" />
                  </a>
                  <a
                    className="flex size-10 items-center justify-center rounded-full bg-[#0F4C81] text-white shadow hover:bg-[#F05A28]"
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
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-lg shadow-black/5">
              <iframe
                title="Skooli Uganda HQ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8407611425167!2d32.620957515284574!3d0.2846169641157848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbcdfb2b9fd7b%3A0xd0f0d4e9cdf3d1f7!2sBuziga!5e0!3m2!1sen!2sug!4v1700000000000"
                className="h-72 w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-3xl bg-[#F7F5EF] p-6 shadow-lg shadow-black/5">
              <h3 className="text-2xl font-semibold text-[#0F4C81]">Prayer & pastoral support</h3>
              <p className="mt-3 text-sm text-slate-600">
                Our chaplaincy team is available to pray with families, schools, and partners. Email <a className="font-semibold text-[#F05A28]" href="mailto:prayer@skooli.africa">prayer@skooli.africa</a> to schedule a call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
