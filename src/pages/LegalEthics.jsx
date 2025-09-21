import { useState } from 'react'
import { ShieldCheck, BookOpen, HeartHandshake } from 'lucide-react'

export default function LegalEthics() {
  const [analyticsCookies, setAnalyticsCookies] = useState(true)

  return (
    <div className="bg-[#F7F5EF]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05A28]">Legal & ethics</p>
          <h1 className="mt-4 text-4xl font-bold text-[#0F4C81]">Our commitments to privacy, trust, and faith</h1>
          <p className="mt-4 text-base text-slate-600">
            Skooli protects family data, honours Ugandan and UK regulations, and operates with a Christ-centered ethic.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5" id="privacy">
            <div className="flex items-center gap-3 text-[#0F4C81]">
              <ShieldCheck className="size-6" />
              <h2 className="text-3xl font-semibold">Privacy Policy</h2>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              We collect parent contact details, student identifiers, purchase history, and delivery confirmations solely for service fulfilment.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Data is encrypted, stored in EU and Ugandan data centres, and retained for seven years.</li>
              <li>• Parents can request deletion or correction via <a className="font-semibold text-[#F05A28]" href="mailto:privacy@skooli.africa">privacy@skooli.africa</a>.</li>
              <li>• Student data is never sold or shared outside approved ministries and donors bound by agreements.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5" id="terms">
            <div className="flex items-center gap-3 text-[#0F4C81]">
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
            <div className="flex items-center gap-3 text-[#0F4C81]">
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

          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5" id="cookies">
            <h2 className="text-2xl font-semibold text-[#0F4C81]">Cookie preferences</h2>
            <p className="mt-2 text-sm text-slate-600">Control how we use cookies on our executive website.</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-[#F7F5EF] px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#0F4C81]">Essential cookies</p>
                  <p className="text-xs text-slate-600">Required for authentication, cart, and delivery tracking.</p>
                </div>
                <span className="rounded-full bg-[#0F4C81] px-3 py-1 text-xs font-semibold text-white">Always on</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-[#F7F5EF] px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#0F4C81]">Analytics cookies</p>
                  <p className="text-xs text-slate-600">Help us improve parent and school experiences.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAnalyticsCookies((prev) => !prev)}
                  className={`flex items-center rounded-full border px-4 py-1 text-xs font-semibold transition ${
                    analyticsCookies ? 'border-[#F05A28] bg-[#F05A28] text-white' : 'border-[#0F4C81] text-[#0F4C81]'
                  }`}
                >
                  {analyticsCookies ? 'Enabled' : 'Disabled'}
                </button>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Preferences are stored locally on your device. Change them anytime or email <a className="font-semibold text-[#F05A28]" href="mailto:privacy@skooli.africa">privacy@skooli.africa</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
