import { useEffect, useState } from 'react'
import { ShieldCheck, BookOpen, HeartHandshake, Download } from 'lucide-react'
import { AccentPill } from '@/components/AccentPill.jsx'

const compliancePacks = [
  {
    title: 'Uganda Ministry of Education compliance pack',
    description: 'Policy summaries, delivery assurance templates, and safeguarding forms tailored to Ugandan districts.',
    fileName: 'Skooli Uganda_ Comprehensive Compliance Framework 2025.pdf',
    size: '4.2 MB PDF',
  },
  {
    title: 'UK Charity Commission governance kit',
    description: 'Trustee briefing decks, data processing registers, and quarterly assurance checklist for UK supporters.',
    fileName: 'Skooli_ UK Governance Upgrade for African Logistics.pdf',
    size: '3.4 MB PDF',
  },
  {
    title: 'Faith-aligned safeguarding framework',
    description: 'Chaplains’ code of conduct, parental consent forms, and counselling referral pathways for ministry partners.',
    fileName: 'Uganda Education Logistics Safeguarding Framework.pdf',
    size: '2.8 MB PDF',
  },
]

export default function LegalEthics() {
  const [analyticsCookies, setAnalyticsCookies] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.localStorage.getItem('skooli-analytics-cookies') !== 'disabled'
  })
  const [cookieBannerVisible, setCookieBannerVisible] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.localStorage.getItem('skooli-cookie-consent') !== 'accepted'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('skooli-analytics-cookies', analyticsCookies ? 'enabled' : 'disabled')
  }, [analyticsCookies])

  const storeConsent = (status) => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('skooli-cookie-consent', status)
  }

  const handleAcceptAll = () => {
    setAnalyticsCookies(true)
    setCookieBannerVisible(false)
    storeConsent('accepted')
  }

  const handleManagePreferences = () => {
    setCookieBannerVisible(false)
    storeConsent('customised')
    const cookieSection = document.getElementById('cookies')
    if (cookieSection) {
      cookieSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-[var(--brand-cream)]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <AccentPill size="sm" className="tracking-[0.25em]">
            Legal & ethics
          </AccentPill>
          <h1 className="mt-4 text-4xl font-bold text-[var(--brand-emerald)]">Our commitments to privacy, trust, and faith</h1>
          <p className="mt-4 text-base text-slate-600">
            Skooli protects family data, honours Ugandan and UK regulations, and operates with a Christ-centered ethic.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5" id="privacy">
            <div className="flex items-center gap-3 text-[var(--brand-emerald)]">
              <ShieldCheck className="size-6" />
              <h2 className="text-3xl font-semibold">Privacy Policy</h2>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              We collect parent contact details, student identifiers, purchase history, and delivery confirmations solely for service fulfilment.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Data is encrypted, stored in EU and Ugandan data centres, and retained for seven years.</li>
              <li>
                • Parents can request deletion or correction via{' '}
                <a
                  className="font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] underline decoration-[color-mix(in_srgb,var(--brand-emerald)_45%,#032823_55%)] decoration-2 underline-offset-4 hover:text-[var(--brand-emerald)]"
                  href="mailto:privacy@skooli.africa"
                >
                  privacy@skooli.africa
                </a>
                .
              </li>
              <li>• Student data is never sold or shared outside approved ministries and donors bound by agreements.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5" id="terms">
            <div className="flex items-center gap-3 text-[var(--brand-emerald)]">
              <BookOpen className="size-6" />
              <h2 className="text-3xl font-semibold">Terms of Use</h2>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Skooli provides procurement, logistics, and digital wallet services for Ugandan schools and diaspora partners. By using the platform, you agree to:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Use services for educational purposes within Uganda and the UK.</li>
              <li>• Respect payment schedules and notify Skooli of fraudulent activity.</li>
              <li>• Accept that Ugandan law governs service delivery while corporate headquarters comply with UK regulations.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5" id="faith">
            <div className="flex items-center gap-3 text-[var(--brand-emerald)]">
              <HeartHandshake className="size-6" />
              <h2 className="text-3xl font-semibold">Faith & Ethics Statement</h2>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              We operate from Christian values—service, integrity, stewardship—while upholding a non-discrimination pledge for all staff and beneficiaries.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Chaplains offer optional prayer at deliveries. Participation is voluntary and culturally sensitive across faith traditions.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5" id="compliance">
            <div className="flex items-center gap-3 text-[var(--brand-emerald)]">
              <Download className="size-6" />
              <h2 className="text-3xl font-semibold">Downloadable compliance packs</h2>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Access ready-to-use documentation for regulators, donors, and chaplaincy partners. Each pack is refreshed bi-annually and includes editable templates plus audit trails.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {compliancePacks.map((pack) => {
                const encodedFile = `/downloads/${encodeURIComponent(pack.fileName)}`
                return (
                  <a
                    key={pack.title}
                    href={encodedFile}
                    download={pack.fileName}
                    className="group flex h-full flex-col justify-between rounded-3xl bg-[var(--brand-cream)]/80 p-5 text-left shadow transition hover:-translate-y-1 hover:bg-[var(--brand-emerald)]/90"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[var(--brand-emerald)] group-hover:text-white">{pack.title}</p>
                      <p className="mt-3 text-xs text-slate-600 group-hover:text-white/90">{pack.description}</p>
                    </div>
                    <div className="mt-5 flex items-center justify-between text-xs font-semibold text-[var(--brand-emerald)] group-hover:text-white">
                      <span>{pack.size}</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[var(--brand-emerald)] group-hover:bg-white group-hover:text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)]">
                        <Download className="size-3" /> PDF
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5" id="cookies">
            <h2 className="text-2xl font-semibold text-[var(--brand-emerald)]">Cookie preferences</h2>
            <p className="mt-2 text-sm text-slate-600">Control how we use cookies on our executive website.</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-[var(--brand-cream)] px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--brand-emerald)]">Essential cookies</p>
                  <p className="text-xs text-slate-600">Required for authentication, cart, and delivery tracking.</p>
                </div>
                <span className="rounded-full bg-[var(--brand-emerald)] px-3 py-1 text-xs font-semibold text-white">Always on</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-[var(--brand-cream)] px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--brand-emerald)]">Analytics cookies</p>
                  <p className="text-xs text-slate-600">Help us improve parent and school experiences.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAnalyticsCookies((prev) => !prev)}
                  className={`flex items-center rounded-full border px-4 py-1 text-xs font-semibold transition ${
                    analyticsCookies
                      ? 'border-[var(--brand-emerald)] bg-[color-mix(in_srgb,var(--brand-emerald)_88%,#032823_12%)] text-white shadow'
                      : 'border-[var(--brand-emerald)] bg-white text-[var(--brand-emerald)]'
                  }`}
                >
                  {analyticsCookies ? 'Enabled' : 'Disabled'}
                </button>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Preferences are stored locally on your device. Change them anytime or email{' '}
              <a
                className="font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)] underline decoration-[color-mix(in_srgb,var(--brand-emerald)_45%,#032823_55%)] decoration-2 underline-offset-4 hover:text-[var(--brand-emerald)]"
                href="mailto:privacy@skooli.africa"
              >
                privacy@skooli.africa
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {cookieBannerVisible && (
        <div className="fixed bottom-6 left-1/2 z-40 w-[min(90%,32rem)] -translate-x-1/2 rounded-3xl bg-[var(--brand-emerald)]/95 p-6 text-white shadow-2xl shadow-black/30 ring-1 ring-white/20">
          <AccentPill tone="inverse" className="bg-white/20 tracking-[0.25em]">
            Cookies & stewardship
          </AccentPill>
          <p className="mt-3 text-sm text-white/90">
            We use essential cookies to run Skooli and analytics cookies to understand how leaders engage with our resources. Accept all or customise your preferences.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[var(--brand-emerald)] shadow transition hover:bg-white/90"
            >
              Accept all cookies
            </button>
            <button
              type="button"
              onClick={handleManagePreferences}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-white/50 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Manage preferences
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
