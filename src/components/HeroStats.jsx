export default function HeroStats() {
  const items = [
    { value: '3', label: 'Pilot Schools' },
    { value: '1,000+', label: 'Products' },
    { value: 'Serving', label: 'Families Across Uganda' },
  ]
  return (
    <section className="-mt-10 bg-transparent pb-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 rounded-2xl bg-white/95 p-4 shadow-xl shadow-black/5 backdrop-blur sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center rounded-xl p-4 text-center">
              <div>
                <p className="text-2xl font-bold text-[#0F4C81] sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
