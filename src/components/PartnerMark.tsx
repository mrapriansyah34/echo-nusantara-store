import { brand } from '../content'
import { cx } from '../lib/cx'

// RN.CURATED is the official partner mark — always shown as a quiet gold tag
// so it reads as a credential rather than another line of small print.
export function PartnerMark({ className }: { className?: string }) {
  return (
    <span
      className={cx(
        'inline-block whitespace-nowrap rounded-[3px] bg-gold/15 px-1.5 py-0.5 font-medium text-gold',
        className,
      )}
    >
      {brand.partner}
    </span>
  )
}
