import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Heart, Send } from 'lucide-react'
import leadershipGradient from '@/assets/leadership-gradient.svg'
import leadershipPortrait from '@/assets/leadership-portrait.svg'

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
    <footer className="section-shell relative overflow-hidden text-[color-mix(in_srgb,var(--brand-emerald)_88%,var(--emerald-ink)_12%)]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(135deg, color-mix(in srgb, var(--brand-white) 95%, transparent), color-mix(in srgb, var(--brand-cream) 88%, transparent)), url(${leadershipPortrait})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0 opacity-70 mix-blend-luminosity"
        style={{ backgroundImage: `url(${leadershipGradient})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="relative section-container">
        <div className="grid grid-cols-1 gap-[var(--space-2xl)] md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-[var(--space-lg)]">
            <div>
              <h2 className="typography-heading-3 font-bold text-[var(--brand-emerald)]">Skooli</h2>
              <p className="mt-[var(--space-sm)] max-w-xs typography-body-sm text-[color-mix(in_srgb,var(--brand-emerald)_78%,var(--emerald-ink)_22%)]">
                Education logistics built for every Ugandan learner. Ethically sourced.
                Efficiently delivered. Faithfully stewarded.
              </p>
            </div>
            <div className="space-y-[var(--space-sm)] typography-body-sm text-[color-mix(in_srgb,var(--brand-emerald)_78%,var(--emerald-ink)_22%)]">
              <div className="flex items-start gap-[var(--space-sm)]">
                <MapPin className="mt-0.5 size-5 text-[var(--brand-emerald)]" />
                <div>
                  <p className="typography-body-sm font-semibold text-[var(--brand-emerald)]">Uganda HQ</p>
                  <p>Plot 12, Hassim Road, Buziga</p>
                  <p>Kampala, Uganda</p>
                </div>
              </div>
              <div className="flex items-start gap-[var(--space-sm)]">
                <MapPin className="mt-0.5 size-5 text-[var(--brand-emerald)]" />
                <div>
                  <p className="typography-body-sm font-semibold text-[var(--brand-emerald)]">UK Office</p>
                  <p>128 City Road</p>
                  <p>London, EC1V 2NX</p>
                </div>
              </div>
              <div className="flex items-center gap-[var(--space-sm)]">
                <Mail className="size-5 text-[var(--brand-emerald)]" />
                <a className="typography-body-sm font-semibold text-[var(--brand-emerald)] transition hover:text-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)]" href="mailto:hello@skooli.africa">
                  hello@skooli.africa
                </a>
              </div>
              <div className="flex items-center gap-[var(--space-sm)]">
                <Phone className="size-5 text-[var(--brand-emerald)]" />
                <a className="typography-body-sm font-semibold text-[var(--brand-emerald)] transition hover:text-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)]" href="tel:+256414000000">
                  +256 414 000 000
                </a>
              </div>
            </div>
            <div className="flex gap-[var(--space-sm)]">
              <a
                className="flex size-10 items-center justify-center rounded-full border border-[var(--brand-emerald)]/20 bg-[var(--brand-white)] text-[var(--brand-emerald)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--brand-emerald)] hover:text-[var(--brand-white)]"
                href="https://www.linkedin.com/company/skooli"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                className="flex size-10 items-center justify-center rounded-full border border-[var(--brand-emerald)]/20 bg-[var(--brand-white)] text-[var(--brand-emerald)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--brand-emerald)] hover:text-[var(--brand-white)]"
                href="https://twitter.com/skooli_africa"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a
                className="flex size-10 items-center justify-center rounded-full border border-[var(--brand-emerald)]/20 bg-[var(--brand-white)] text-[var(--brand-emerald)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--brand-emerald)] hover:text-[var(--brand-white)]"
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
            <h3 className="typography-heading-4 font-semibold text-[var(--brand-emerald)]">Company</h3>
            <ul className="mt-[var(--space-md)] space-y-[var(--space-2xs)] typography-body-sm text-[color-mix(in_srgb,var(--brand-emerald)_78%,var(--emerald-ink)_22%)]">
              {footerSections.company.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-[var(--brand-emerald)]" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="typography-heading-4 font-semibold text-[var(--brand-emerald)]">Services</h3>
            <ul className="mt-[var(--space-md)] space-y-[var(--space-2xs)] typography-body-sm text-[color-mix(in_srgb,var(--brand-emerald)_78%,var(--emerald-ink)_22%)]">
              {footerSections.services.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-[var(--brand-emerald)]" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="typography-heading-4 font-semibold text-[var(--brand-emerald)]">Resources & Legal</h3>
            <ul className="mt-[var(--space-md)] space-y-[var(--space-2xs)] typography-body-sm text-[color-mix(in_srgb,var(--brand-emerald)_78%,var(--emerald-ink)_22%)]">
              {[...footerSections.resources, ...footerSections.legal].map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-[var(--brand-emerald)]" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-[var(--space-xl)] space-y-[var(--space-2xs)] rounded-2xl border border-[var(--brand-emerald)]/15 bg-[color-mix(in_srgb,var(--brand-cream)_75%,var(--brand-white)_25%)] p-[var(--space-md)] shadow-sm">
              <p className="typography-body-sm font-semibold text-[var(--brand-emerald)]">Stay in the loop</p>
              <p className="typography-body-xs text-[color-mix(in_srgb,var(--brand-emerald)_60%,var(--emerald-ink)_40%)]">Monthly executive briefings on logistics, impact and technology.</p>
              <form
                className="flex items-center gap-[var(--space-2xs)]"
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
                  className="h-10 flex-1 rounded-full border border-[var(--brand-emerald)]/25 bg-[var(--brand-white)] px-[var(--space-xs)] typography-body-sm text-[color-mix(in_srgb,var(--brand-emerald)_80%,var(--emerald-ink)_20%)] placeholder:text-[color-mix(in_srgb,var(--brand-emerald)_45%,var(--emerald-haze)_55%)] focus:border-[var(--brand-emerald)] focus:outline-none"
                  type="email"
                  name="email"
                  aria-label="Email for newsletter"
                  placeholder="you@organisation.com"
                  required
                />
                <button
                  type="submit"
                  className="flex h-10 items-center justify-center rounded-full bg-[var(--brand-emerald)] px-[var(--space-sm)] typography-body-sm font-semibold text-[var(--brand-white)] shadow-sm shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)]"
                >
                  <Send className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-[var(--space-3xl)] border-t border-[var(--brand-emerald)]/20 pt-[var(--space-md)]">
          <div className="flex flex-col gap-[var(--space-md)] typography-body-sm text-[color-mix(in_srgb,var(--brand-emerald)_72%,var(--emerald-ink)_28%)] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Skooli Technologies Group Ltd. All rights reserved.</p>
            <div className="flex items-center gap-[var(--space-2xs)]">
              <span>Made with</span>
              <Heart className="size-4 text-[var(--brand-emerald)]" />
              <span>for African education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
