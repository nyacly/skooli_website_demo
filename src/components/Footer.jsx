import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Heart, Send } from 'lucide-react'

const footerSections = {
  company: [
    { label: 'Our Story', to: '/vision-impact' },
    { label: 'Mission & Values', to: '/vision-impact#mission' },
    { label: 'Meet the Team', to: '/team' },
    { label: 'Newsroom', to: '/news' },
  ],
  services: [
    { label: 'Shop Now', to: '/shop-now' },
    { label: 'For Schools', to: '/schools' },
    { label: 'Partner With Us', to: '/partner' },
    { label: 'Technology & AI', to: '/technology-ai' },
  ],
  resources: [
    { label: 'Impact Report', to: '/funders#downloads' },
    { label: 'Investor Deck', to: '/funders#investor-deck' },
    { label: 'FAQs', to: '/how-it-works#faq' },
    { label: 'Support Centre', to: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/legal#privacy' },
    { label: 'Terms of Use', to: '/legal#terms' },
    { label: 'Faith & Ethics', to: '/legal#faith' },
    { label: 'Cookies', to: '/legal#cookies' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-emerald)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Skooli</h2>
              <p className="mt-4 max-w-xs text-sm text-white/80">
                Education logistics built for every Ugandan learner. Ethically sourced.
                Efficiently delivered. Faithfully stewarded.
              </p>
            </div>
            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-[var(--brand-gold)]" />
                <div>
                  <p className="font-semibold">Uganda HQ</p>
                  <p>Plot 12, Hassim Road, Buziga</p>
                  <p>Kampala, Uganda</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-[var(--brand-gold)]" />
                <div>
                  <p className="font-semibold">UK Office</p>
                  <p>128 City Road</p>
                  <p>London, EC1V 2NX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-[var(--brand-gold)]" />
                <a className="hover:text-white" href="mailto:hello@skooli.africa">
                  hello@skooli.africa
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-[var(--brand-gold)]" />
                <a className="hover:text-white" href="tel:+256414000000">
                  +256 414 000 000
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                className="flex size-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[var(--brand-gold)]"
                href="https://www.linkedin.com/company/skooli"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                className="flex size-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[var(--brand-gold)]"
                href="https://twitter.com/skooli_africa"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a
                className="flex size-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[var(--brand-gold)]"
                href="https://www.youtube.com/@skooli"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {footerSections.company.map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-white" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {footerSections.services.map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-white" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Resources & Legal</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {[...footerSections.resources, ...footerSections.legal].map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-white" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 rounded-2xl bg-white/10 p-4">
              <p className="text-sm font-semibold">Stay in the loop</p>
              <p className="text-xs text-white/70">Monthly executive briefings on logistics, impact and technology.</p>
              <form
                className="flex items-center gap-2"
                onSubmit={(event) => {
                  event.preventDefault()
                  const form = event.currentTarget
                  const email = form.email.value
                  if (email) {
                    window.open(`https://skooli.us7.list-manage.com/subscribe?MERGE0=${encodeURIComponent(email)}`)
                    form.reset()
                  }
                }}
              >
                <input
                  className="h-10 flex-1 rounded-full border border-white/30 bg-white/20 px-3 text-sm text-white placeholder:text-white/70 focus:border-[var(--brand-gold)] focus:outline-none"
                  type="email"
                  name="email"
                  aria-label="Email for newsletter"
                  placeholder="you@organisation.com"
                  required
                />
                <button
                  type="submit"
                  className="flex h-10 items-center justify-center rounded-full bg-[var(--brand-gold)] px-3 text-sm font-semibold text-white shadow hover:bg-[color-mix(in_srgb,var(--brand-gold)_80%,#000_20%)]"
                >
                  <Send className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Skooli Technologies Group Ltd. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="size-4 text-[var(--brand-gold)]" />
              <span>for African education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
