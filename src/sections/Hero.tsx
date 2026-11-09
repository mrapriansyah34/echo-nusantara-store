import { useRef } from 'react'
import { ArrowUpRight, Snowflake } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

import { useLocale } from '../lib/i18n'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { FlyingSwallows } from '../components/FlyingSwallows'
import { ProductPlate } from '../components/ProductPlate'
import { Reveal } from '../components/Reveal'

export function Hero() {
  const { c } = useLocale()
  const { hero, marquee } = c

  // The main still drifts a little against the scroll for depth. Motion values
  // update outside React, so this never re-renders the section.
  const plateRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: plateRef, offset: ['start end', 'end start'] })
  const drift = useTransform(scrollYProgress, [0, 1], [26, -26])
  const reduceMotion = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-paper-2/50 to-transparent" aria-hidden />
      <FlyingSwallows />

      <Container className="relative pb-14 pt-14 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-gold/70" />
                <p className="eyebrow text-gold">{hero.eyebrow}</p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="title-light text-[clamp(3.1rem,8vw,6.4rem)] text-ink">
                <span className="block">{hero.title[0]}</span>
                <span className="block italic text-ink-soft">{hero.title[1]}</span>
                <span className="block">
                  {hero.title[2]}
                  <span className="text-gold">.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-md text-pretty text-[16px] leading-[1.9] text-muted">{hero.description}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button href={hero.primary.href} size="lg">
                  {hero.primary.label}
                  <ArrowUpRight className="size-4" strokeWidth={1.4} />
                </Button>
                <Button href={hero.secondary.href} variant="secondary" size="lg">
                  {hero.secondary.label}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3">
                {hero.facts.map((fact, index) => (
                  <li key={fact} className="flex items-center gap-5">
                    {index > 0 && <span className="size-1 rounded-full bg-gold-soft" aria-hidden />}
                    <span className="text-[11.5px] uppercase tracking-[0.2em] text-muted">{fact}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1} y={26}>
              <div className="relative" ref={plateRef}>
                <motion.div
                  style={reduceMotion ? undefined : { y: drift }}
                  className="relative aspect-square overflow-hidden border border-hair bg-cream shadow-[0_40px_80px_-50px_rgb(25_21_17/0.55)]"
                >
                  <ProductPlate
                    image="/images/set-8-kurma-8.jpg"
                    alt={hero.imageAlt}
                    kind="drink"
                    tone="amber"
                    artCount={5}
                  />
                </motion.div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-[11.5px] uppercase tracking-[0.22em] text-ink-soft/70">{hero.captions[0]}</p>
                  <span className="inline-flex items-center gap-1.5 text-[11.5px] uppercase tracking-[0.14em] text-muted">
                    <Snowflake className="size-3" strokeWidth={1.5} /> {hero.coldServed}
                  </span>
                </div>

                <div className="animate-float absolute -bottom-10 -left-6 hidden w-36 sm:block lg:-left-16 lg:w-40">
                  <div className="relative aspect-square overflow-hidden border border-cream bg-cream shadow-[0_30px_60px_-35px_rgb(25_21_17/0.6)]">
                    <ProductPlate image="/images/dry-nest-100-cup.jpg" alt={hero.imageAltSecondary} kind="dry" tone="gold" artCount={1} />
                  </div>
                  <p className="mt-2 text-[9.5px] uppercase tracking-[0.2em] text-muted">{hero.captions[1]}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <div className="marquee-mask overflow-hidden border-y border-hair py-4">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marquee.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center">
                  <span className="px-8 font-display text-[19px] italic tracking-tight text-ink/70">{item}</span>
                  <span className="size-1 rounded-full bg-gold-soft" aria-hidden />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
