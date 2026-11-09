import { cx } from '../lib/cx'
import { brand } from '../content'
import { PartnerMark } from './PartnerMark'

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <a
      href="#top"
      aria-label={`${brand.name} — kembali ke atas`}
      className={cx('group inline-flex shrink-0 flex-col whitespace-nowrap leading-none', className)}
    >
      <span
        className={cx(
          'font-display text-[15px] tracking-[0.26em] transition-colors sm:text-[19px] sm:tracking-[0.34em]',
          light ? 'text-cream' : 'text-ink',
        )}
      >
        {brand.name}
      </span>
      <span
        className={cx(
          'mt-1.5 hidden text-[9px] uppercase tracking-[0.24em] sm:block',
          light ? 'text-cream/45' : 'text-muted/80',
        )}
      >
        {brand.line} · <PartnerMark />
      </span>
    </a>
  )
}
