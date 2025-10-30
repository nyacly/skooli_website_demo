import { NewsletterSignupModule } from '@/components/NewsletterSignupModule.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { impactInsights } from '@/data/impactInsights.js'

export default function NewsletterCTA() {
  return (
    <section className="bg-white py-16" id="newsletter">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--brand-white)] via-[var(--brand-cream)] to-[color-mix(in_srgb,var(--brand-emerald)_12%,var(--brand-white)_88%)] p-8 shadow-xl shadow-black/10 sm:p-12 lg:p-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-[color-mix(in_srgb,var(--brand-emerald)_10%,var(--brand-white)_90%)] px-4 py-2 typography-body-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-emerald)] shadow-inner shadow-white">
                  Executive Dashboard Sync
                </span>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--brand-emerald)]/20 bg-[color-mix(in_srgb,var(--brand-cream)_75%,var(--brand-white)_25%)] px-3 py-1 typography-body-xs font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)]">
                  Newsletter
                </p>
                <h2 className="mt-4 typography-heading-2 font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_88%,var(--emerald-ink)_12%)]">
                  Executive updates delivered monthly
                </h2>
                <p className="mt-3 typography-body-sm text-[color-mix(in_srgb,var(--brand-emerald)_35%,var(--emerald-canopy)_65%)]">
                  Subscribe for Mailchimp briefings on impact milestones, product launches, and treasury notes. Every confirmation email now includes the latest PDF dashboard sync for your leadership team.
                </p>
              </div>
              <NewsletterSignupModule layout="horizontal" includeDownloadLink className="flex flex-col items-start gap-4 lg:items-end" />
            </div>

            <Card
              variant="surface"
              padding="lg"
              className="rounded-3xl border border-[var(--brand-emerald)]/15 bg-white/70 backdrop-blur-sm"
            >
              <CardHeader className="gap-3 p-0 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-emerald)]/20 bg-[color-mix(in_srgb,var(--brand-cream)_70%,var(--brand-white)_30%)] px-3 py-1 typography-body-xs font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)]">
                    Impact Insights
                  </span>
                  <CardTitle className="mt-2 typography-heading-4 text-[var(--brand-emerald)]">
                    Operational highlights from the latest quarter
                  </CardTitle>
                </div>
                <span className="rounded-full border border-[var(--brand-emerald)]/15 bg-[color-mix(in_srgb,var(--brand-emerald)_8%,var(--brand-white)_92%)] px-4 py-1 typography-body-xs font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)]">
                  Q3 2025
                </span>
              </CardHeader>
              <CardContent className="gap-6 p-0">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {impactInsights.map((item) => (
                    <Card
                      key={item.label}
                      variant="muted"
                      padding="sm"
                      className="gap-[var(--space-xs)] border-[var(--brand-emerald)]/20 bg-[color-mix(in_srgb,var(--brand-cream)_65%,var(--brand-white)_35%)]"
                    >
                      <span className="typography-body-xs font-semibold uppercase tracking-[0.3em] text-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)]">
                        {item.label}
                      </span>
                      <CardTitle className="typography-heading-3 font-bold text-[var(--brand-emerald)]">
                        {item.metric}
                      </CardTitle>
                      <CardDescription className="typography-body-xs text-slate-600">
                        {item.detail}
                      </CardDescription>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
