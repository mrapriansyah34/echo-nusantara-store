import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { useLocale } from '../lib/i18n'

export function Brew() {
  const { c } = useLocale()
  const { brew } = c

  return (
    <section id="seduh" className="scroll-mt-28 py-20 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal y={24}>
              <div className="relative aspect-square overflow-hidden border border-hair bg-paper-2">
                <img
                  src="/images/konten-cara-seduh.jpg"
                  alt="Empat langkah menyeduh sarang burung walet kering"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-5">{brew.eyebrow}</p>
              <h2 className="title-light max-w-md text-balance text-[38px] text-ink sm:text-[50px]">{brew.title}</h2>
              <p className="mt-6 max-w-md text-pretty text-[16px] leading-[1.9] text-muted">{brew.description}</p>
            </Reveal>

            <div className="mt-10 grid gap-px border border-hair bg-hair sm:grid-cols-2">
              {brew.steps.map((step, index) => (
                <Reveal key={step.index} delay={index * 0.05} className="bg-paper">
                  <div className="h-full p-6">
                    <span className="font-display text-[34px] leading-none text-gold/70">{step.index}</span>
                    <h3 className="mt-4 font-display text-[22px] text-ink">{step.title}</h3>
                    <p className="mt-2 text-[15.5px] leading-[1.8] text-muted">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
