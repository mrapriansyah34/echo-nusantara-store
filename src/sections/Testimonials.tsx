import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { useLocale } from '../lib/i18n'

export function Testimonials() {
  const { c } = useLocale()
  const { testimonials } = c

  return (
    <section id="testimoni" className="band-dark scroll-mt-28 bg-espresso py-20 text-cream lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 border-b border-cream/12 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="mb-5 text-[11.5px] uppercase tracking-[0.26em] text-gold-soft">{testimonials.eyebrow}</p>
            <h2 className="title-light max-w-lg text-balance text-[38px] text-cream sm:text-[50px]">
              {testimonials.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[11.5px] uppercase tracking-[0.2em] text-cream/45">{testimonials.note}</p>
          </Reveal>
        </div>

        <div className="grid gap-10 pt-12 sm:grid-cols-3 sm:gap-8">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <figure className="flex h-full flex-col justify-between border-l border-cream/12 pl-6">
                <blockquote className="font-display text-[21px] italic leading-[1.5] text-cream/90">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <p className="text-[12px] uppercase tracking-[0.16em] text-cream">{item.name}</p>
                  <p className="mt-1 text-[11.5px] uppercase tracking-[0.18em] text-cream/40">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
