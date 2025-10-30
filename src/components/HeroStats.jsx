export default function HeroStats() {
  const items = [
    { value: '30%+', label: 'Parent adoption in first 60 days' },
    { value: '95%', label: 'On-time service level delivery' },
    { value: '4.8/5', label: 'Facilitator satisfaction from pilot surveys' },
  ]
  return (
    <section className="section-shell bg-transparent sm:-mt-16 lg:-mt-20" data-spacing="tight">
      <div className="section-container max-w-6xl">
        <div className="grid gap-[var(--space-md)] rounded-2xl bg-[color-mix(in_srgb,var(--brand-white)_95%,transparent)] p-[var(--space-md)] shadow-xl shadow-black/5 backdrop-blur sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center rounded-xl p-[var(--space-md)] text-center">
              <div>
                <p className="typography-heading-3 font-bold text-[var(--brand-emerald)]">{item.value}</p>
                <p className="mt-[var(--space-3xs)] typography-body-sm font-medium text-[color-mix(in_srgb,var(--brand-emerald)_25%,var(--emerald-canopy)_75%)]">
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
