import { useMemo, useState } from 'react'
import { newsEntries } from '@/lib/cms.js'
import { NewsletterSignupModule } from '@/components/NewsletterSignupModule.jsx'
import { impactInsights } from '@/data/impactInsights.js'
import { CalendarDays, Tag } from 'lucide-react'

const categories = ['All', 'Impact', 'Tech', 'Press']

const categoryPalette = {
  Impact: 'bg-[color-mix(in_srgb,var(--brand-emerald)_12%,#ffffff_88%)] text-[var(--brand-emerald)] border-[var(--brand-emerald)]/20',
  Tech: 'bg-[color-mix(in_srgb,var(--brand-gold)_15%,#ffffff_85%)] text-[color-mix(in_srgb,var(--brand-emerald)_70%,#4c3410_30%)] border-[var(--brand-gold)]/30',
  Press: 'bg-[color-mix(in_srgb,var(--brand-emerald)_8%,#fdf4d5_92%)] text-[color-mix(in_srgb,var(--brand-emerald)_65%,#6d4b12_35%)] border-[var(--brand-emerald)]/10',
}

export default function NewsUpdates() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredEntries = useMemo(() => {
    if (activeCategory === 'All') return newsEntries
    return newsEntries.filter((entry) => entry.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="bg-[var(--brand-cream)]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">News & updates</p>
          <h1 className="mt-4 text-4xl font-bold text-[var(--brand-emerald)]">Stories from the field and product desk</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-600">
            We publish quarterly impact notes, technology deep dives, and press announcements from Skooli’s mission across Uganda.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const isActive = activeCategory === category
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                        isActive
                          ? 'border-[var(--brand-emerald)] bg-[color-mix(in_srgb,var(--brand-emerald)_15%,#ffffff_85%)] text-[var(--brand-emerald)] shadow-sm shadow-black/10'
                          : 'border-transparent bg-white text-slate-600 hover:border-[var(--brand-emerald)]/20 hover:bg-[var(--brand-cream)]'
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>

              <div className="mt-8 space-y-6">
                {filteredEntries.map((entry) => (
                  <article key={entry.id} className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/5">
                    {entry.image ? (
                      <div className="relative h-48 w-full overflow-hidden">
                        <img src={entry.image} alt={entry.imageAlt} className="h-full w-full object-cover" />
                        <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/60 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-emerald)]">
                          {entry.category}
                        </span>
                      </div>
                    ) : null}
                    <div className="space-y-4 p-6">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">
                        <CalendarDays className="size-4" /> {entry.date}
                      </div>
                      <h2 className="text-2xl font-semibold text-[var(--brand-emerald)]">{entry.title}</h2>
                      <p className="text-sm text-slate-600">{entry.excerpt}</p>
                      <div
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${
                          categoryPalette[entry.category] ?? 'bg-[var(--brand-cream)] text-[var(--brand-emerald)] border-[var(--brand-emerald)]/15'
                        }`}
                      >
                        <Tag className="size-3" /> {entry.category}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">Join our newsletter</p>
                <p className="mt-3 text-sm text-slate-600">Receive monthly insights on logistics, impact, and technology.</p>
                <NewsletterSignupModule layout="vertical" includeDownloadLink={false} className="mt-4" />
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">Impact insights</p>
                <p className="mt-3 text-sm text-slate-600">Quick metrics from our investor dashboard.</p>
                <div className="mt-4 space-y-4">
                  {impactInsights.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[var(--brand-emerald)]/15 bg-[var(--brand-cream)]/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">{item.label}</p>
                      <p className="mt-2 text-xl font-bold text-[var(--brand-emerald)]">{item.metric}</p>
                      <p className="mt-1 text-xs text-slate-600">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">Twitter</p>
                <p className="mt-3 text-sm text-slate-600">Latest threads from @skooli_africa.</p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
                  <iframe
                    title="Skooli Twitter feed"
                    src="https://twitframe.com/show?url=https://twitter.com/skooli_africa"
                    className="h-64 w-full"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
