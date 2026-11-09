import { useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { motion, useScroll } from 'motion/react'

import { brand } from '../content'
import { useLocale } from '../lib/i18n'
import { useStore } from '../lib/store'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { Preferences } from '../components/Preferences'

export function Nav() {
  const { count, setOpen } = useStore()
  const { c } = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  return (
    <header className="sticky top-0 z-40">
      <motion.div
        aria-hidden
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gold/80"
      />
      <div className="band-dark hidden bg-espresso py-2 text-center text-[11.5px] uppercase tracking-[0.22em] text-cream/65 sm:block">
        {c.nav.announcement}
      </div>

      <div className="border-b border-hair bg-paper/92 backdrop-blur-md">
        <Container className="flex h-[74px] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex">
            {c.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-[11.5px] uppercase tracking-[0.22em] text-ink-soft/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Preferences className="hidden sm:flex" />

            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="hidden text-[11.5px] uppercase tracking-[0.2em] text-ink-soft/80 transition-colors hover:text-gold xl:block"
            >
              {c.nav.cta.label}
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`${c.nav.cartAria}, ${count}`}
              className="relative inline-flex h-11 items-center gap-2 rounded-full border border-hair-strong px-4 text-[11.5px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-ink hover:bg-cream"
            >
              <ShoppingBag className="size-4" strokeWidth={1.4} />
              <span className="hidden sm:inline">{c.nav.cartLabel}</span>
              <motion.span
                key={count}
                initial={{ scale: 0.6, opacity: 0.2 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                className="grid size-5 place-items-center rounded-full bg-ink text-[11.5px] tracking-normal text-cream"
              >
                {count}
              </motion.span>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={c.nav.menuAria}
              className="grid size-11 place-items-center rounded-full border border-hair-strong text-ink lg:hidden"
            >
              {menuOpen ? <X className="size-4" strokeWidth={1.4} /> : <Menu className="size-4" strokeWidth={1.4} />}
            </button>
          </div>
        </Container>

        {menuOpen && (
          <div className="border-t border-hair bg-cream lg:hidden">
            <Container className="grid gap-1 py-4">
              {c.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-hair/70 py-3 text-[12px] uppercase tracking-[0.2em] text-ink-soft last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="pt-3 text-[12px] uppercase tracking-[0.2em] text-gold"
              >
                {c.nav.cta.label}
              </a>
              <div className="mt-3 flex items-center justify-between border-t border-hair/70 pt-4 sm:hidden">
                <span className="text-[11.5px] uppercase tracking-[0.2em] text-muted">
                  {c.nav.themeLabel}
                </span>
                <Preferences />
              </div>
            </Container>
          </div>
        )}
      </div>
    </header>
  )
}
