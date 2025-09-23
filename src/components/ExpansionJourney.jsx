import MapImg from '@/assets/map_of_africa.png'

const legendItems = [
  { name: 'Pilot', color: 'bg-blue-400' },
  { name: 'National', color: 'bg-orange-400' },
  { name: 'Subsequent Countries', color: 'bg-yellow-400' },
]

export default function ExpansionJourney() {
  return (
    <section className="bg-[#0B3A60] py-16 text-white sm:py-20" id="expansion-journey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Expansion Journey</h2>
            <ul className="mt-8 space-y-4">
              {legendItems.map(item => (
                <li key={item.name} className="flex items-center">
                  <span className={`mr-4 inline-block size-4 rounded-full ${item.color}`} />
                  <span className="text-lg font-medium text-slate-300">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden">
            <img
              src={MapImg}
              alt="Map of Africa highlighting Skooli expansion journey"
              loading="lazy"
              className="w-full h-auto object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
