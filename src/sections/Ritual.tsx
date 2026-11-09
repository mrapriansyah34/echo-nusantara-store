import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { useLocale } from '../lib/i18n'

export function Ritual() {
  const { c } = useLocale()
  const { ritual } = c

  return (
    <section id="ritual" className="scroll-mt-28 py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-5">{ritual.eyebrow}</p>
              <h2 className="title-light text-balance text-[38px] text-ink sm:text-[50px] lg:text-[58px]">
                {ritual.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <p className="max-w-md text-pretty text-[16px] leading-[1.9] text-muted lg:ml-auto lg:text-right">
                {ritual.intro}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-px border-t border-hair sm:grid-cols-3 sm:border sm:bg-hair">
          {ritual.steps.map((step, index) => (
            <Reveal key={step.index} delay={index * 0.08} className="bg-paper">
              <div className="h-full p-7 sm:p-9">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[44px] leading-none text-gold/70">{step.index}</span>
                  <span className="text-[11.5px] uppercase tracking-[0.2em] text-muted">{ritual.stepLabel} {index + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-[26px] text-ink">{step.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.85] text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
