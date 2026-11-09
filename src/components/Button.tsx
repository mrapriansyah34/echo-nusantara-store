import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cx } from '../lib/cx'

type Variant = 'primary' | 'secondary' | 'gold' | 'ghost' | 'light'
type Size = 'md' | 'lg'

const base =
  'inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full text-[12px] font-medium uppercase tracking-[0.18em] transition-[background-color,color,border-color,transform] duration-300 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0'

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-cream hover:bg-espresso-soft',
  secondary: 'border border-hair-strong text-ink hover:border-ink hover:bg-cream',
  gold: 'bg-gold text-cream hover:bg-[#8f6e31]',
  ghost: 'text-muted hover:text-ink',
  light: 'border border-white/25 text-cream hover:border-white/60 hover:bg-white/5',
}

// Heights match the inputs they sit beside: md = 44px, lg = 54px. `wrap` lets
// long labels break onto two lines on narrow screens instead of forcing the
// whole layout wider than the viewport.
const sizes: Record<Size, string> = {
  md: 'h-11 whitespace-nowrap px-6',
  lg: 'h-[54px] whitespace-nowrap px-8',
}
const wrappedSizes: Record<Size, string> = {
  md: 'min-h-11 px-5 py-2.5 text-center leading-snug',
  lg: 'min-h-[54px] px-6 py-3 text-center leading-snug',
}

type Common = { variant?: Variant; size?: Size; wrap?: boolean; className?: string; children: ReactNode }
type ButtonProps =
  | (Common & { href: string } & ComponentPropsWithoutRef<'a'>)
  | (Common & { href?: undefined } & ComponentPropsWithoutRef<'button'>)

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', wrap = false, className, children, ...rest } = props
  const classes = cx(base, variants[variant], wrap ? wrappedSizes[size] : sizes[size], className)
  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as ComponentPropsWithoutRef<'a'>)}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...(rest as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}
