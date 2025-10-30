import { NewsletterSignupModule } from '@/components/NewsletterSignupModule.jsx'
import { impactInsights } from '@/data/impactInsights.js'

export default function NewsletterCTA() {
  return (
    <section className="bg-white py-16" id="newsletter">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white via-[var(--brand-cream)] to-[color-mix(in_srgb,var(--brand-emerald)_12%,#ffffff_88%)] p-10 shadow-xl shadow-black/10 sm:p-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-[color-mix(in_srgb,var(--brand-emerald)_10%,#ffffff_90%)] px-4 py-2 typography-body-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-emerald)] shadow-inner shadow-white">
                  Executive Dashboard Sync
                </span>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--brand-emerald)]/20 bg-[color-mix(in_srgb,var(--brand-cream)_75%,#ffffff_25%)] px-3 py-1 typography-body-xs font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)]">
                  Newsletter
                </p>
                <h2 className="mt-4 typography-heading-2 font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_88%,#032823_12%)]">
                  Executive updates delivered monthly
                </h2>
                <p className="mt-3 typography-body-sm text-[color-mix(in_srgb,var(--brand-emerald)_35%,#05382c_65%)]">
                  Subscribe for Mailchimp briefings on impact milestones, product launches, and treasury notes. Every confirmation email now includes the latest PDF dashboard sync for your leadership team.
                </p>
              </div>
              <NewsletterSignupModule layout="horizontal" includeDownloadLink className="flex flex-col items-start gap-4" />
            </div>

            <div className="rounded-3xl border border-[var(--brand-emerald)]/15 bg-white/70 p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-emerald)]/20 bg-[color-mix(in_srgb,var(--brand-cream)_70%,#ffffff_30%)] px-3 py-1 typography-body-xs font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)]">
                    Impact Insights
                  </p>
                  <h3 className="mt-2 typography-heading-4 font-semibold text-[var(--brand-emerald)]">Operational highlights from the latest quarter</h3>
                </div>
                <span className="rounded-full border border-[var(--brand-emerald)]/15 bg-[color-mix(in_srgb,var(--brand-emerald)_8%,#ffffff_92%)] px-4 py-1 typography-body-xs font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)]">
                  Q3 2025
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {impactInsights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[var(--brand-emerald)]/20 bg-[color-mix(in_srgb,var(--brand-cream)_65%,#ffffff_35%)] p-4">
                    <p className="typography-body-xs font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--brand-emerald)_85%,#032823_15%)]">{item.label}</p>
                    <p className="mt-3 typography-heading-3 font-bold text-[var(--brand-emerald)]">{item.metric}</p>
                    <p className="mt-2 typography-body-xs text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
