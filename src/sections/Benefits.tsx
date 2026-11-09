import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { useLocale } from '../lib/i18n'

export function Benefits() {
  const { c } = useLocale()
  const { benefits } = c

  return (
    <section id="manfaat" className="scroll-mt-28 border-y border-hair bg-cream py-20 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal y={24}>
              <div className="relative">
                <div className="relative aspect-square overflow-hidden border border-hair bg-paper-2">
                  <img
                    src="/images/konten-manfaat-mangkuk.jpg"
                    alt="Sarang burung walet yang sudah diseduh di mangkuk kaca"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-8 -right-4 w-28 border border-cream bg-cream shadow-[0_24px_50px_-30px_rgb(25_21_17/0.5)] sm:w-36 lg:-right-8">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/images/konten-manfaat-jar.jpg"
                      alt="Jar ECHO Nusantara dengan label manfaat"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-4">
            <Reveal>
              <p className="eyebrow mb-5">{benefits.eyebrow}</p>
              <h2 className="title-light max-w-lg text-balance text-[38px] text-ink sm:text-[50px]">
                {benefits.title}
              </h2>
              <p className="mt-6 max-w-md text-pretty text-[16px] leading-[1.9] text-muted">
                {benefits.description}
              </p>
            </Reveal>

            <div className="mt-10 border-t border-hair">
              {benefits.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="flex gap-5 border-b border-hair py-5">
                    <span className="w-6 shrink-0 font-display text-[16px] tracking-[0.18em] text-gold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-[22px] leading-snug text-ink">{item.title}</h3>
                      <p className="mt-1.5 text-[16px] leading-[1.8] text-muted">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10 flex items-start gap-4 border border-hair bg-paper p-4">
                <div className="size-20 shrink-0 overflow-hidden bg-paper-2">
                  <img
                    src="/images/konten-funfact.jpg"
                    alt="Seseorang memegang jar ECHO Nusantara"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-[11.5px] uppercase tracking-[0.22em] text-gold">{benefits.funFact.title}</p>
                  <p className="mt-2 max-w-sm text-[15.5px] leading-relaxed text-muted">{benefits.funFact.body}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
