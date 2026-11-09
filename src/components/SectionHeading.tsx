import { cx } from '../lib/cx'
import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <Reveal className={cx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="title-light text-balance text-[38px] text-ink sm:text-[52px] lg:text-[60px]">{title}</h2>
      {description && (
        <p className="mt-6 max-w-xl text-pretty text-[16px] leading-[1.85] text-muted">{description}</p>
      )}
    </Reveal>
  )
}
