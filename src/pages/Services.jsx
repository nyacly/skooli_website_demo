export default function Services() {
  const services = [
    {
      name: 'School Supplies Procurement',
      description: 'We source and deliver all essential school supplies, from textbooks and stationery to uniforms and sports equipment. Our streamlined process ensures you get the best quality products at competitive prices.',
    },
    {
      name: 'Logistics and Delivery',
      description: 'Our robust logistics network ensures timely and reliable delivery of supplies to schools across Uganda. We handle everything from warehousing to last-mile delivery, so you can focus on education.',
    },
    {
      name: 'Financial Solutions',
      description: 'We offer flexible financial solutions, including layaway plans and financing options, to help schools and parents manage their expenses effectively.',
    },
    {
      name: 'Technology Integration',
      description: 'We provide schools with access to our advanced platform for easy procurement, inventory management, and real-time tracking of deliveries. Our technology solutions are designed to improve efficiency and transparency.',
    },
  ]

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Services</h1>
          <p className="mt-4 text-lg text-slate-600">
            We provide a comprehensive range of services to support schools in their mission to deliver quality education.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map(service => (
            <div key={service.name} className="rounded-lg bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
              <p className="mt-2 text-base text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
