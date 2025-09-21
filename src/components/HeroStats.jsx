export default function HeroStats() {
  const items = [
    { value: '3', label: 'Pilot Schools' },
    { value: '1,000+', label: 'Products' },
    { value: 'Serving', label: 'Families Across Uganda' },
  ]
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-5xl font-bold tracking-tight text-slate-900">{item.value}</p>
              <p className="mt-2 text-base text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
