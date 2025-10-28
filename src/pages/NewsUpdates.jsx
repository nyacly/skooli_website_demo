import { useMemo, useState } from 'react'
import { newsEntries } from '@/lib/cms.js'
import { Button } from '@/components/ui/button.jsx'
import { CalendarDays, Tag } from 'lucide-react'

const categories = ['All', 'Impact', 'Tech', 'Press']

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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">News & updates</p>
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
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                      activeCategory === category
                        ? 'border-[var(--brand-gold)] bg-[var(--brand-cream)] text-[var(--brand-emerald)]'
                        : 'border-transparent bg-white text-slate-600 hover:border-[var(--brand-gold)]/40 hover:bg-[var(--brand-cream)]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                {filteredEntries.map((entry) => (
                  <article key={entry.id} className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--brand-gold)]">
                      <CalendarDays className="size-4" /> {entry.date}
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold text-[var(--brand-emerald)]">{entry.title}</h2>
                    <p className="mt-3 text-sm text-slate-600">{entry.excerpt}</p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--brand-cream)] px-3 py-1 text-xs font-semibold text-[var(--brand-emerald)]">
                      <Tag className="size-3" /> {entry.category}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Join our newsletter</p>
                <p className="mt-3 text-sm text-slate-600">Receive monthly insights on logistics, impact, and technology.</p>
                <form
                  className="mt-4 flex flex-col gap-3"
                  onSubmit={(event) => {
                    event.preventDefault()
                    const email = event.currentTarget.email.value
                    if (email) {
                      window.open(`https://skooli.us7.list-manage.com/subscribe?MERGE0=${encodeURIComponent(email)}`, '_blank')
                      event.currentTarget.reset()
                    }
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    required
                    className="h-11 rounded-md border border-[var(--brand-emerald)]/20 bg-[var(--brand-cream)] px-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[var(--brand-gold)] focus:outline-none"
                    placeholder="you@example.com"
                  />
                  <Button type="submit" className="rounded-md bg-[var(--brand-gold)] text-white hover:bg-[color-mix(in_srgb,var(--brand-gold)_80%,#000_20%)]">
                    Subscribe
                  </Button>
                </form>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-black/5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Twitter</p>
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
