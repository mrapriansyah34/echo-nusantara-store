import { useState } from 'react'
import { ArrowUpRight, Check, ShoppingBag } from 'lucide-react'

import { brand } from '../content'
import type { Product } from '../content'
import { Container } from '../components/Container'
import { ProductPlate } from '../components/ProductPlate'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { comparePrice, discountPercent, formatRupiah } from '../lib/format'
import { useLocale } from '../lib/i18n'
import { useStore } from '../lib/store'

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const { add, stock } = useStore()
  const { c } = useLocale()
  const t = c.collection
  const [variantKey, setVariantKey] = useState(product.variants[0].key)
  const [justAdded, setJustAdded] = useState(false)
  const variant = product.variants.find((item) => item.key === variantKey) ?? product.variants[0]
  const available = stock[product.id] ?? 0
  const low = available <= 5
  const price = variant.price ?? product.price
  const compareAt = price
    ? product.compareAt && product.compareAt > price
      ? product.compareAt
      : comparePrice(price)
    : undefined
  const discount = price ? discountPercent(price, compareAt) : null
  const askLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    t.askMessage.replace('{name}', product.name).replace('{set}', product.setLabel),
  )}`

  const handleAdd = () => {
    add(product, variantKey)
    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), 1400)
  }

  return (
    <Reveal delay={delay} className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-cream">
        <ProductPlate
          image={variant.image}
          alt={`${product.name} — ${variant.label}`}
          kind={product.kind}
          tone={variant.tone}
          artCount={product.artCount}
        />
        {low && available > 0 && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 bg-cream/90 px-2 py-1 text-[11.5px] uppercase tracking-[0.14em] text-clay backdrop-blur">
            <span className="size-1.5 rounded-full bg-clay" aria-hidden /> {t.lowBadge}
          </span>
        )}
        <span className="pointer-events-none absolute inset-0 border border-ink/5" aria-hidden />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[11.5px] uppercase tracking-[0.2em] text-muted">
          {product.setLabel} · {product.volume}
        </p>
        <h3 className="mt-2 font-display text-[26px] leading-tight text-ink">{product.name}</h3>
        <p className="mt-1.5 text-[15.5px] leading-relaxed text-muted">{product.tagline}</p>

        {product.variants.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.variants.map((item) => {
              const active = item.key === variantKey
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setVariantKey(item.key)}
                  aria-pressed={active}
                  className={
                    'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11.5px] tracking-wide transition-colors ' +
                    (active
                      ? 'border-ink bg-ink text-cream'
                      : 'border-hair text-muted hover:border-ink/40 hover:text-ink')
                  }
                >
                  <span
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: item.tone === 'sage' ? '#8fa07a' : '#c9a25f' }}
                    aria-hidden
                  />
                  {item.label}
                </button>
              )
            })}
          </div>
        )}

        <div className="mt-5 border-t border-hair pt-4">
          {price === undefined ? (
            <>
              <p className="font-display text-[27px] leading-none text-ink">{t.askPrice}</p>
              <a
                href={askLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-hair-strong text-[12px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink hover:bg-cream"
              >
                {t.askAdmin}
                <ArrowUpRight className="size-4" strokeWidth={1.7} />
              </a>
            </>
          ) : (
            <>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="font-display text-[31px] leading-none tracking-tight text-ink">
                  {formatRupiah(price)}
                </p>
                {compareAt && (
                  <span className="price-strike text-[13px] text-muted">{formatRupiah(compareAt)}</span>
                )}
              </div>

              <div className="mt-2 flex items-center gap-2">
                {discount !== null && (
                  <span className="inline-flex items-center rounded-full bg-clay/12 px-2 py-0.5 text-[11.5px] font-semibold tracking-[0.02em] text-clay">
                    −{discount}%
                  </span>
                )}
                <span className="text-[11px] uppercase tracking-[0.14em] text-muted">{t.saveNote}</span>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                disabled={available === 0}
                className="group/add relative mt-4 inline-flex h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-cream shadow-[0_14px_28px_-18px_rgb(25_21_17/0.85)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_34px_-16px_rgb(163_127_60/0.65)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/45 to-transparent transition-transform duration-700 ease-out group-hover/add:translate-x-full"
                />
                {justAdded ? (
                  <Check className="relative size-4" strokeWidth={2} />
                ) : (
                  <ShoppingBag className="relative size-4" strokeWidth={1.7} />
                )}
                <span className="relative">{available === 0 ? t.soldOut : justAdded ? t.added : t.add}</span>
              </button>
            </>
          )}
        </div>

        <div className="mt-4">
          <div className="h-[3px] w-full bg-paper-2">
            <div
              className={'h-full transition-[width] duration-500 ' + (low ? 'bg-clay' : 'bg-gold-soft')}
              style={{ width: `${Math.max(4, Math.round((available / product.maxStock) * 100))}%` }}
            />
          </div>
          <p
            className={
              'mt-2 text-[11.5px] uppercase tracking-[0.16em] ' + (low ? 'text-clay' : 'text-muted')
            }
          >
            {available === 0
              ? t.stockEmpty
              : low
                ? t.stockLow.replace('{n}', String(available))
                : t.stockLeft.replace('{n}', String(available)).replace('{max}', String(product.maxStock))}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export function Collection() {
  const { c, collections } = useLocale()
  const t = c.collection

  return (
    <section id="koleksi" className="scroll-mt-28 py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 border-b border-hair pb-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
          <p className="max-w-xs text-[12px] uppercase leading-relaxed tracking-[0.14em] text-muted lg:text-right">
            {t.footnote}
            <br />
            {t.footnoteShapes}
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {collections.map((collection) => (
            <div key={collection.id}>
              <Reveal className="mb-9 flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <span className="font-display text-[16px] tracking-[0.2em] text-gold">{collection.index}</span>
                <h3 className="font-display text-[30px] text-ink sm:text-[34px]">{collection.title}</h3>
                <span className="rounded-full border border-hair px-2.5 py-0.5 text-[11.5px] uppercase tracking-[0.18em] text-muted">
                  {collection.subtitle}
                </span>
                <p className="w-full max-w-xl text-[16px] leading-relaxed text-muted lg:ml-auto lg:w-auto lg:max-w-sm lg:text-right">
                  {collection.description}
                </p>
              </Reveal>

              <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
                {collection.products.map((product, index) => (
                  <ProductCard key={product.id} product={product} delay={index * 0.06} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
