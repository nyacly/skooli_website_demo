export default function HeroStats() {
  const items = [
    { value: '30%+', label: 'Parent adoption in first 60 days' },
    { value: '95%', label: 'On-time service level delivery' },
    { value: '4.8/5', label: 'Facilitator satisfaction from pilot surveys' },
  ]
  return (
    <section className="-mt-10 bg-transparent pb-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 rounded-2xl bg-[color-mix(in_srgb,var(--brand-white)_95%,transparent)] p-4 shadow-xl shadow-black/5 backdrop-blur sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center rounded-xl p-4 text-center">
              <div>
                <p className="typography-heading-3 font-bold text-[var(--brand-emerald)]">{item.value}</p>
                <p className="mt-1 typography-body-sm font-medium text-[color-mix(in_srgb,var(--brand-emerald)_25%,var(--emerald-canopy)_75%)]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
