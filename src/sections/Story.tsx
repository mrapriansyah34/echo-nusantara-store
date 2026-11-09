import { Leaf } from 'lucide-react'

import { Container } from '../components/Container'
import { ProductPlate } from '../components/ProductPlate'
import { Reveal } from '../components/Reveal'
import { useLocale } from '../lib/i18n'

export function Story() {
  const { c } = useLocale()
  const { craft, story } = c

  return (
    <section id="cerita" className="scroll-mt-28 border-y border-hair bg-cream py-20 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal y={24}>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden border border-hair bg-paper-2">
                  <ProductPlate
                    image="/images/gua-kapur-kalimantan.jpg"
                    alt={story.imageAlt}
                    kind="dry"
                    tone="gold"
                    artCount={2}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-[11.5px] uppercase tracking-[0.2em] text-muted">{story.caption}</p>
                  <Leaf className="size-4 text-muted" strokeWidth={1.3} />
                </div>
                <p className="mt-4 max-w-xs text-[11.5px] uppercase leading-relaxed tracking-[0.18em] text-muted">
                  {story.sideNote}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <Reveal>
              <p className="eyebrow mb-5">{craft.eyebrow}</p>
              <h2 className="title-light max-w-xl text-balance text-[38px] text-ink sm:text-[50px] lg:text-[58px]">
                {craft.title}
              </h2>
            </Reveal>

            <div className="mt-8 max-w-xl space-y-5">
              {craft.body.map((paragraph, index) => (
                <Reveal key={paragraph} delay={0.06 * (index + 1)}>
                  <p className="text-pretty text-[15.5px] leading-[1.9] text-ink-soft/85">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.18}>
              <dl className="mt-12 grid grid-cols-2 gap-px border border-hair bg-hair sm:grid-cols-4">
                {craft.specs.map((spec) => (
                  <div key={spec.label} className="bg-cream p-5">
                    <dt className="text-[11.5px] uppercase tracking-[0.18em] text-muted">{spec.label}</dt>
                    <dd className="mt-3 font-display text-[34px] leading-none text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-8 border-l border-gold/60 pl-4 font-display text-[17px] italic text-ink-soft/80">
                {craft.note}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-hair pt-6">
                <span className="text-[11.5px] uppercase tracking-[0.2em] text-muted">{story.certified}</span>
                {craft.certs.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full border border-hair-strong px-3 py-1 text-[11.5px] uppercase tracking-[0.16em] text-ink-soft/80"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
