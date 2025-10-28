import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, Sparkles, Route, Play } from 'lucide-react'

const carouselSlides = [
  {
    title: 'Classroom-ready kits',
    description: 'Filter by school, grade, and price to see approved packs and add optional extras.',
    color: 'from-[color-mix(in_srgb,var(--brand-emerald)_18%,white)] to-white',
  },
  {
    title: 'Local supplier marketplace',
    description: 'Verified Ugandan SMEs showcase stationery, uniforms, and health products.',
    color: 'from-[color-mix(in_srgb,var(--brand-gold)_22%,white)] to-white',
  },
  {
    title: 'Real-time availability',
    description: 'Live stock updates synced with our warehousing system to avoid disappointments.',
    color: 'from-[color-mix(in_srgb,var(--brand-cream)_70%,white)] to-white',
  },
]

const bundles = [
  {
    id: 'beginning',
    name: 'Beginning-of-Term Bundle',
    items: [
      'Uniform sets & shoes',
      'Class textbooks + exercise books',
      'Dormitory bedding starter kit',
      'Parent layaway for fees support',
    ],
  },
  {
    id: 'midterm',
    name: 'Mid-Term Refresh',
    items: [
      'Top-up stationery pack',
      'Healthy snack replenishment',
      'Sanitary care supplies',
      'Transport subsidy vouchers',
    ],
  },
  {
    id: 'examweek',
    name: 'Exam-Week Confidence Pack',
    items: [
      'Past paper compendium',
      'Blue/black pen packs',
      'Mindfulness audio access',
      'Nutrition boosters & hydration',
    ],
  },
]

const faqs = [
  {
    question: 'Do parents need a smartphone to use Skooli?',
    answer: 'No. Orders can be placed via our call centre and USSD short code for families without smartphones. Delivery updates are sent by SMS.',
  },
  {
    question: 'How fast are deliveries fulfilled?',
    answer: 'Urban schools receive deliveries within 48 hours. Upcountry routes are scheduled twice weekly with guaranteed 95% on-time performance.',
  },
  {
    question: 'Can schools customise bundles?',
    answer: 'Yes. School administrators approve catalogue items each term and can request custom items, including branded uniforms and lab equipment.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'Mobile money (MTN, Airtel), Visa/Mastercard, and bank transfers. Instalment plans are available for qualified parents and NGOs.',
  },
  {
    question: 'How do you ensure quality?',
    answer: 'Suppliers undergo quarterly audits. Every batch is inspected for quality and safety with certificates stored in our compliance vault.',
  },
  {
    question: 'Can donors sponsor specific students?',
    answer: 'Our platform supports voucher-based sponsorships tied to verified student profiles, ensuring resources reach intended beneficiaries.',
  },
  {
    question: 'What happens if an item is missing?',
    answer: 'Drivers capture proof-of-delivery photos. Any discrepancies trigger a replacement within 24 hours or a refund to the parent wallet.',
  },
  {
    question: 'Do you integrate with school finance systems?',
    answer: 'Yes. We offer CSV exports and APIs to sync with QuickBooks, Tally, and bespoke ministry finance platforms.',
  },
]

export default function HowItWorks() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [activeSlide, setActiveSlide] = useState(0)
  const [openBundle, setOpenBundle] = useState('beginning')

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setActiveSlide(emblaApi.selectedScrollSnap())
    }
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="bg-[var(--brand-cream)]">
      <section className="relative overflow-hidden bg-[var(--brand-emerald)] py-20 text-white">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <svg className="h-full w-full" viewBox="0 0 400 200" preserveAspectRatio="none">
            <path d="M0 120 C80 80, 160 160, 240 110 S360 90, 400 140" stroke="white" strokeWidth="4" fill="none" strokeDasharray="12 12" />
          </svg>
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">Supply chain journey</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">From marketplace to classroom in three precise moves</h1>
          <p className="mx-auto max-w-3xl text-base text-white/80">
            Explore the Skooli workflow optimised for Ugandan schools—digitised orders, AI-powered logistics, and dignified student experiences.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Step 1 — Parents shop online</h2>
              <p className="text-base text-slate-600">
                Parents log in through the Parent Portal or USSD to browse curated bundles. The catalogue adapts to each school’s approved suppliers with real-time stock visibility.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="embla" ref={emblaRef}>
                  <div className="flex">
                    {carouselSlides.map((slide, index) => (
                      <div
                        className="min-w-0 flex-[0_0_100%]"
                        key={slide.title}
                        aria-hidden={activeSlide !== index}
                      >
                        <div className={`h-full rounded-2xl bg-gradient-to-br ${slide.color} p-8 text-left`}> 
                          <h3 className="text-xl font-semibold text-[var(--brand-emerald)]">{slide.title}</h3>
                          <p className="mt-4 text-sm text-slate-600">{slide.description}</p>
                          <div className="mt-6 h-40 rounded-xl border border-dashed border-[var(--brand-emerald)]/30 bg-white/60 p-4 text-xs uppercase tracking-wide text-slate-500">
                            Screenshot placeholder
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 bg-[var(--brand-cream)] px-4 py-3">
                  <button
                    type="button"
                    onClick={scrollPrev}
                    className="flex items-center gap-2 rounded-full border border-[var(--brand-emerald)]/30 px-4 py-2 text-sm font-semibold text-[var(--brand-emerald)] hover:border-[var(--brand-emerald)]"
                  >
                    <ArrowLeft className="size-4" /> Prev
                  </button>
                  <div className="flex items-center gap-2">
                    {carouselSlides.map((slide, index) => (
                      <span
                        key={slide.title}
                        className={`h-2 w-6 rounded-full ${index === activeSlide ? 'bg-[var(--brand-gold)]' : 'bg-slate-300'}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={scrollNext}
                    className="flex items-center gap-2 rounded-full border border-[var(--brand-emerald)]/30 px-4 py-2 text-sm font-semibold text-[var(--brand-emerald)] hover:border-[var(--brand-emerald)]"
                  >
                    Next <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-[var(--brand-cream)] p-8 shadow-lg shadow-black/5">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
                <Sparkles className="size-5" />
                Assisted shopping
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Community agents guide parents at churches and SACCO halls using tablets connected to the same catalogue.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.4em] text-slate-500">Channels</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Parent web portal</li>
                <li>• USSD *284*21#</li>
                <li>• Toll-free call centre (0800 150 900)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Step 2 — Smart logistics</h2>
              <p className="mt-4 text-base text-slate-600">
                Our AI-driven routing engine optimises loading from Kampala and Gulu warehouses. Each delivery vehicle carries IoT trackers that feed into the control tower dashboard.
              </p>
              <div className="mt-6 flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-emerald)] shadow">
                <Route className="size-4" /> SLA badge: <span className="text-[var(--brand-gold)]">95% on-time</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Dispatchers adjust for weather, traffic, and school calendars. Automated SMS alerts inform schools 30 minutes before arrival.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-black/5">
              <AnimatedRouteMap />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--brand-emerald)]">Step 3 — Students receive with dignity</h2>
              <p className="mt-4 text-base text-slate-600">
                Uniformed Skooli agents coordinate with school administrators to hand over packages. Every student signs digitally and the system updates parents instantly.
              </p>
              <div className="mt-6 rounded-2xl bg-[var(--brand-cream)] p-6 text-sm text-slate-600">
                “The excitement on distribution day is unmatched. Our children feel seen and supported.” — Head Teacher, Arua.
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg shadow-black/10">
              <iframe
                title="Student testimonial"
                src="https://www.youtube.com/embed/Yr4j3Z7Y6u4"
                className="h-64 w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="flex items-center gap-2 bg-[var(--brand-emerald)] px-4 py-3 text-sm font-semibold text-white">
                <Play className="size-4" /> 30-second testimonial
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">School cycle bundles</p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--brand-emerald)]">Packages tuned to the academic calendar</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Choose from pre-approved bundles or co-create with our merchandising team. Each accordion reveals what’s inside and the impact it unlocks.
          </p>
          <div className="mt-8 rounded-2xl bg-white p-2 shadow-lg shadow-black/5">
            {bundles.map((bundle) => {
              const isOpen = openBundle === bundle.id
              return (
                <div key={bundle.id} className="border-b border-slate-200 last:border-none">
                  <button
                    type="button"
                    onClick={() => setOpenBundle((prev) => (prev === bundle.id ? '' : bundle.id))}
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-semibold text-[var(--brand-emerald)]"
                    aria-expanded={isOpen}
                  >
                    {bundle.name}
                    <span className={`transition-transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <ul className="space-y-2 text-sm text-slate-600">
                        {bundle.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="faq">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="md:w-1/3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">FAQ</p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--brand-emerald)]">Answers for families, schools, and donors</h2>
              <p className="mt-4 text-sm text-slate-600">
                Need something more specific? Reach us via <a href="mailto:hello@skooli.africa" className="font-semibold text-[var(--brand-gold)]">hello@skooli.africa</a>.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="grid gap-4 md:grid-cols-2">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl bg-[var(--brand-cream)] p-5 shadow-lg shadow-black/5">
                    <p className="text-sm font-semibold text-[var(--brand-emerald)]">{faq.question}</p>
                    <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function AnimatedRouteMap() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let animationFrame
    const animate = () => {
      setProgress((prev) => {
        const next = prev + 0.01
        return next > 1 ? 0 : next
      })
      animationFrame = requestAnimationFrame(animate)
    }
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  const dashOffset = 1 - progress

  return (
    <svg viewBox="0 0 360 220" className="h-64 w-full" aria-labelledby="logisticsMapTitle logisticsMapDesc">
      <title id="logisticsMapTitle">Animated map of Uganda delivery route</title>
      <desc id="logisticsMapDesc">Illustration of logistics flow from Kampala warehouse to northern districts.</desc>
      <rect x="0" y="0" width="360" height="220" rx="24" fill="var(--brand-cream)" />
      <path d="M90 180 L120 120 L170 150 L220 90 L280 110" stroke="var(--brand-emerald)" strokeWidth="6" strokeLinecap="round" fill="none" strokeDasharray="1" strokeDashoffset={dashOffset} />
      <circle cx="90" cy="180" r="12" fill="var(--brand-emerald)" />
      <circle cx="280" cy="110" r="12" fill="var(--brand-gold)" />
      <text x="70" y="205" fill="var(--brand-emerald)" fontSize="12" fontWeight="600">Kampala Hub</text>
      <text x="250" y="100" fill="var(--brand-gold)" fontSize="12" fontWeight="600">Gulu Cluster</text>
      <text x="130" y="70" fill="var(--brand-emerald)" fontSize="11">Dynamic rerouting</text>
      <text x="200" y="190" fill="var(--brand-emerald)" fontSize="11">Cold-chain ready</text>
    </svg>
  )
}
