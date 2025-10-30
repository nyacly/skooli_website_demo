import { FileDown, ShieldCheck, ScrollText } from 'lucide-react'
import { cn } from '@/lib/utils.js'
import { AccentPill } from '@/components/AccentPill.jsx'

const defaultDocuments = [
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

export default function ComplianceKit({
  className,
  title = 'Compliance kit',
  blurb = 'Standard templates to fast-track legal reviews and procurement approval.',
  documents = defaultDocuments,
}) {
  return (
    <div className={cn('rounded-3xl bg-[var(--brand-white)] p-6 shadow-lg shadow-black/5', className)}>
      <AccentPill size="sm" className="tracking-[0.25em]">
        {title}
      </AccentPill>
      <p className="mt-3 typography-body-sm text-[var(--emerald-bough)]">{blurb}</p>
      <ul className="mt-6 space-y-4">
        {documents.map((document) => {
          const Icon = document.icon
          return (
            <li key={document.title} className="flex flex-col gap-2 rounded-2xl border border-[var(--brand-emerald)]/10 bg-[var(--brand-cream)]/40 p-4 transition hover:border-[color-mix(in_srgb,var(--brand-emerald)_70%,var(--emerald-ink)_30%)]/40">
              <div className="flex items-start gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-[var(--brand-emerald)]/10 text-[var(--brand-emerald)]">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="typography-body-sm font-semibold text-[var(--brand-emerald)]">{document.title}</p>
                  <p className="typography-body-xs text-[var(--emerald-bough)]">{document.description}</p>
                </div>
              </div>
              <div>
                <a
                  href={document.href}
                  download
                  className="inline-flex items-center gap-2 typography-body-xs font-semibold text-[color-mix(in_srgb,var(--brand-emerald)_85%,var(--emerald-ink)_15%)] underline decoration-[color-mix(in_srgb,var(--brand-emerald)_45%,var(--emerald-ink)_55%)] decoration-2 underline-offset-4 hover:text-[var(--brand-emerald)]"
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
