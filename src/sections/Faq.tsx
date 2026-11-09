import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { useLocale } from '../lib/i18n'

export function Faq() {
  const { c } = useLocale()
  const { faq } = c
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-28 border-t border-hair py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-5">{faq.eyebrow}</p>
              <h2 className="title-light text-balance text-[38px] text-ink sm:text-[46px]">{faq.title}</h2>
              <p className="mt-6 max-w-xs text-[16px] leading-relaxed text-muted">
                {faq.note}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-hair">
              {faq.items.map((item, index) => {
                const open = openIndex === index
                return (
                  <Reveal key={item.q} delay={index * 0.03}>
                    <div className="border-b border-hair">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(open ? null : index)}
                        aria-expanded={open}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <span className="font-display text-[21px] leading-snug text-ink sm:text-[23px]">{item.q}</span>
                        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-hair text-ink">
                          {open ? <Minus className="size-3.5" strokeWidth={1.5} /> : <Plus className="size-3.5" strokeWidth={1.5} />}
                        </span>
                      </button>
                      <div
                        className={
                          'grid transition-all duration-500 ease-out ' +
                          (open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')
                        }
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-xl pb-7 pr-10 text-[15.5px] leading-[1.9] text-muted">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
