export default function ExpansionJourney() {
  return (
    <section className="bg-[#0B3A60] py-16 text-white" id="expansion-journey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Expansion Journey</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Where we are and where were headed</h2>
            <p className="mt-3 max-w-xl text-sm text-white/80">Pilots begin in Uganda and expand to regional hubs across East Africa, followed by subsequent country rollouts.</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2"><span className="inline-block size-3 rounded-full bg-[#7BB3D6]" /> Pilot</div>
            <div className="flex items-center gap-2"><span className="inline-block size-3 rounded-full bg-[#F5A25C]" /> Subsequent Countries</div>
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl bg-white/5 shadow-lg shadow-black/10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Feb657e2225a74a4699503a4763b81a78%2F3a6b61b3133048129df2eac65806b467?format=webp&width=1600"
            alt="Map of Africa highlighting Skooli expansion journey"
            loading="lazy"
            className="w-full h-auto"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>
    </section>
  )
}
