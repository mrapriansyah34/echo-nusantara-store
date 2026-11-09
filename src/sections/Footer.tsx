import { brand } from '../content'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { PartnerMark } from '../components/PartnerMark'
import { useLocale } from '../lib/i18n'

export function Footer() {
  const { c } = useLocale()
  const { footer } = c

  return (
    <footer className="border-t border-hair bg-paper pt-16">
      <Container>
        <div className="grid gap-12 border-b border-hair pb-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs text-[15.5px] leading-[1.85] text-muted">{footer.blurb}</p>
            <p className="mt-6 text-[11.5px] uppercase tracking-[0.2em] text-ink-soft">{brand.instagram}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <p className="text-[11.5px] uppercase tracking-[0.22em] text-muted">{column.title}</p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#koleksi" className="text-[15.5px] text-ink-soft/80 transition-colors hover:text-gold">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-hair py-6">
          <p className="text-[11.5px] uppercase tracking-[0.2em] text-muted">{footer.shippingLabel}</p>
          {footer.couriers.map((courier) => (
            <span key={courier} className="text-[11.5px] uppercase tracking-[0.14em] text-ink-soft/60">
              {courier}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4 py-8 text-[11.5px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {footer.legal} <PartnerMark />.
          </p>
          <p className="max-w-md leading-relaxed sm:text-right">{footer.disclaimer}</p>
        </div>
      </Container>

      <div className="overflow-hidden border-t border-hair pt-6">
        <p
          aria-hidden
          className="select-none whitespace-nowrap text-center font-display text-[clamp(2.4rem,10.4vw,9rem)] leading-[0.8] tracking-[0.04em] text-ink/[0.07]"
        >
          ECHO NUSANTARA
        </p>
      </div>
    </footer>
  )
}
