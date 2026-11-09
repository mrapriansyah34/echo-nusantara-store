import { MessageCircle } from 'lucide-react'

import { brand } from '../content'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { useLocale } from '../lib/i18n'

export function Cta() {
  const { c } = useLocale()
  const { closing } = c

  return (
    <section id="tanya" className="scroll-mt-28 pb-20 lg:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden border border-gold/35 bg-cream">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 size-72 rounded-full bg-gold/10 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-28 -left-16 size-64 rounded-full bg-sage/10 blur-3xl"
            />

            <div className="relative grid min-w-0 gap-10 p-7 sm:p-14 lg:grid-cols-12 lg:items-center lg:gap-14">
              <div className="min-w-0 lg:col-span-5">
                <div className="aspect-square overflow-hidden border border-hair bg-paper-2">
                  <img
                    src="/images/konten-lifestyle.jpg"
                    alt={closing.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="min-w-0 lg:col-span-7">
                <p className="eyebrow mb-5 text-gold">{closing.eyebrow}</p>
                <h2 className="title-light max-w-xl text-balance text-[36px] text-ink sm:text-[48px] lg:text-[54px]">
                  {closing.title}
                </h2>
                <p className="mt-6 max-w-md text-pretty text-[16px] leading-[1.9] text-muted">
                  {closing.description}
                </p>

                <Button
                  href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(closing.message)}`}
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  wrap
                  className="mt-8 w-full sm:w-auto"
                >
                  <MessageCircle className="size-4" strokeWidth={1.5} />
                  {closing.button}
                </Button>

                <p className="mt-4 text-[11.5px] uppercase tracking-[0.18em] text-muted">
                  {brand.whatsappDisplay} · {closing.signature}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-8 gap-y-1 border-t border-hair pt-5 text-[12px] leading-relaxed text-muted">
                  <p>{brand.email}</p>
                  <p>{closing.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
