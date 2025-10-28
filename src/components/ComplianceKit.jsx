import { FileDown, ShieldCheck, ScrollText } from 'lucide-react'
import { cn } from '@/lib/utils'

const documents = [
  {
    title: 'Memorandum of Understanding',
    description: 'Defines governance, rollout scope, and responsibilities for each party.',
    href: '/templates/mou-template.pdf',
    icon: ScrollText,
  },
  {
    title: 'Privacy Agreement',
    description: 'Details data protection safeguards, consent flows, and retention timelines.',
    href: '/templates/privacy-agreement.pdf',
    icon: ShieldCheck,
  },
  {
    title: 'Supplier Service Agreement',
    description: 'Outlines service levels, escalation paths, and inventory assurance requirements.',
    href: '/templates/supplier-service-agreement.pdf',
    icon: FileDown,
  },
]

export default function ComplianceKit({ className, title = 'Compliance kit', blurb = 'Standard templates to fast-track legal reviews and procurement approval.' }) {
  return (
    <div className={cn('rounded-3xl bg-white p-6 shadow-lg shadow-black/5', className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">{title}</p>
      <p className="mt-3 text-sm text-slate-600">{blurb}</p>
      <ul className="mt-6 space-y-4">
        {documents.map((document) => {
          const Icon = document.icon
          return (
            <li key={document.title} className="flex flex-col gap-2 rounded-2xl border border-[var(--brand-emerald)]/10 bg-[var(--brand-cream)]/40 p-4 transition hover:border-[var(--brand-gold)]/40">
              <div className="flex items-start gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-[var(--brand-emerald)]/10 text-[var(--brand-emerald)]">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--brand-emerald)]">{document.title}</p>
                  <p className="text-xs text-slate-600">{document.description}</p>
                </div>
              </div>
              <div>
                <a
                  href={document.href}
                  download
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--brand-gold)] hover:text-[color-mix(in_srgb,var(--brand-gold)_80%,#000_20%)]"
                >
                  Download template
                  <FileDown className="size-3" aria-hidden="true" />
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
