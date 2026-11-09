import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, MessageCircle, Minus, Plus, Trash2, X } from 'lucide-react'

import { allProducts, brand, couriers } from '../content'
import { ProductPlate } from '../components/ProductPlate'
import { formatRupiah } from '../lib/format'
import { useLocale } from '../lib/i18n'
import { useStore } from '../lib/store'
import type { Customer, OrderResult } from '../lib/store'

const emptyCustomer: Customer = {
  name: '',
  phone: '',
  address: '',
  courier: couriers[0],
  note: '',
}

const fieldClass =
  'mt-2 w-full border-b border-hair bg-transparent pb-2 text-[16px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-gold'
const labelClass = 'text-[11.5px] uppercase tracking-[0.2em] text-muted'

export function CartDrawer() {
  const { open, setOpen, cart, stock, subtotal, setQty, remove, submit } = useStore()
  const { c, product: localize } = useLocale()
  const t = c.cart
  const [customer, setCustomer] = useState<Customer>(emptyCustomer)
  const [result, setResult] = useState<OrderResult | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, setOpen])

  const valid =
    customer.name.trim().length >= 2 &&
    customer.phone.replace(/\D/g, '').length >= 9 &&
    customer.address.trim().length >= 10 &&
    Boolean(customer.courier)

  const handleSubmit = () => {
    if (!valid || cart.length === 0) return
    const order = submit(customer)
    setResult(order)
    window.open(order.url, '_blank', 'noopener,noreferrer')
  }

  const close = () => {
    setOpen(false)
    if (result) {
      setResult(null)
      setCustomer(emptyCustomer)
    }
  }

  return (
    <div className={open ? 'fixed inset-0 z-50' : 'pointer-events-none fixed inset-0 z-50'} aria-hidden={!open}>
      <div
        onClick={close}
        className={
          'absolute inset-0 bg-ink/45 backdrop-blur-[2px] transition-opacity duration-500 dark:bg-black/60 ' +
          (open ? 'opacity-100' : 'opacity-0')
        }
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t.ariaLabel}
        className={
          'absolute right-0 top-0 flex h-full w-full max-w-[540px] flex-col bg-paper shadow-[-30px_0_80px_-40px_rgb(25_21_17/0.5)] transition-transform duration-500 ease-out ' +
          (open ? 'translate-x-0' : 'translate-x-full')
        }
      >
        <div className="flex items-center justify-between border-b border-hair px-6 py-5">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="mt-1 font-display text-[28px] text-ink">{t.title}</h2>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label={t.close}
            className="grid size-10 place-items-center rounded-full border border-hair text-ink transition-colors hover:border-ink"
          >
            <X className="size-4" strokeWidth={1.4} />
          </button>
        </div>

        {result ? (
          <div className="flex flex-1 flex-col items-start justify-center gap-5 px-8">
            <span className="grid size-12 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
              <Check className="size-5" strokeWidth={1.6} />
            </span>
            <div>
              <p className="eyebrow">
                {t.successEyebrow} {result.invoice}
              </p>
              <h3 className="mt-2 font-display text-[32px] leading-tight text-ink">{t.successTitle}</h3>
              <p className="mt-3 max-w-sm text-[16px] leading-relaxed text-muted">{t.successBody}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <a
                href={result.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ink px-6 text-[12px] uppercase tracking-[0.18em] text-cream"
              >
                <MessageCircle className="size-4" strokeWidth={1.5} /> {t.openWhatsApp}
              </a>
              <button
                type="button"
                onClick={close}
                className="inline-flex h-11 items-center justify-center rounded-full border border-hair-strong px-6 text-[12px] uppercase tracking-[0.18em] text-ink"
              >
                {t.keepShopping}
              </button>
            </div>
            <p className="text-[11.5px] uppercase tracking-[0.16em] text-muted">{t.invoiceNote}</p>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-start justify-center gap-4 px-8">
            <h3 className="font-display text-[30px] text-ink">{t.emptyTitle}</h3>
            <p className="max-w-xs text-[16px] leading-relaxed text-muted">{t.emptyBody}</p>
            <button
              type="button"
              onClick={close}
              className="mt-2 inline-flex h-11 items-center gap-2 rounded-full border border-ink bg-ink px-6 text-[12px] uppercase tracking-[0.18em] text-cream"
            >
              {t.emptyCta} <ArrowUpRight className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              <ul className="divide-y divide-hair px-6">
                {cart.map((line) => {
                  const found = allProducts.find((item) => item.id === line.productId)
                  const product = found ? localize(found) : undefined
                  const variant = product?.variants.find((item) => item.key === line.variantKey)
                  if (!product || !variant) return null
                  const available = stock[product.id] ?? 0
                  const unit = variant.price ?? product.price ?? 0
                  return (
                    <li key={line.key} className="flex gap-4 py-5">
                      <div className="relative size-[76px] shrink-0 overflow-hidden border border-hair bg-cream">
                        <ProductPlate
                          image={variant.image}
                          alt={product.name}
                          kind={product.kind}
                          tone={variant.tone}
                          artCount={1}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-display text-[19px] leading-tight text-ink">{product.name}</p>
                            <p className="mt-1 text-[11.5px] uppercase tracking-[0.16em] text-muted">
                              {product.setLabel} · {variant.label}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => remove(line.key)}
                            aria-label={`${t.remove} ${product.name}`}
                            className="text-muted transition-colors hover:text-clay"
                          >
                            <Trash2 className="size-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="inline-flex items-center border border-hair">
                            <button
                              type="button"
                              onClick={() => setQty(line.key, line.qty - 1)}
                              aria-label={t.qtyMinus}
                              className="grid size-8 place-items-center text-ink hover:bg-cream"
                            >
                              <Minus className="size-3" strokeWidth={1.6} />
                            </button>
                            <span className="min-w-7 text-center text-[12px]">{line.qty}</span>
                            <button
                              type="button"
                              onClick={() => setQty(line.key, line.qty + 1)}
                              disabled={line.qty >= available}
                              aria-label={t.qtyPlus}
                              className="grid size-8 place-items-center text-ink hover:bg-cream disabled:opacity-30"
                            >
                              <Plus className="size-3" strokeWidth={1.6} />
                            </button>
                          </div>
                          <p className="text-[15.5px] text-ink">{formatRupiah(unit * line.qty)}</p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mx-6 mt-2 border-t border-hair pt-6">
                <p className="eyebrow mb-4">{t.shippingTitle}</p>
                <div className="grid gap-5">
                  <div>
                    <label className={labelClass} htmlFor="cart-name">
                      {t.name}
                    </label>
                    <input
                      id="cart-name"
                      value={customer.name}
                      onChange={(event) => setCustomer({ ...customer, name: event.target.value })}
                      placeholder={t.namePlaceholder}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="cart-phone">
                      {t.phone}
                    </label>
                    <input
                      id="cart-phone"
                      inputMode="tel"
                      value={customer.phone}
                      onChange={(event) => setCustomer({ ...customer, phone: event.target.value })}
                      placeholder={t.phonePlaceholder}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="cart-address">
                      {t.address}
                    </label>
                    <textarea
                      id="cart-address"
                      rows={2}
                      value={customer.address}
                      onChange={(event) => setCustomer({ ...customer, address: event.target.value })}
                      placeholder={t.addressPlaceholder}
                      className={fieldClass + ' resize-none'}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="cart-courier">
                      {t.courier}
                    </label>
                    <select
                      id="cart-courier"
                      value={customer.courier}
                      onChange={(event) => setCustomer({ ...customer, courier: event.target.value })}
                      className={fieldClass + ' appearance-none'}
                    >
                      {couriers.map((courier) => (
                        <option key={courier} value={courier}>
                          {courier}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="cart-note">
                      {t.note}
                    </label>
                    <input
                      id="cart-note"
                      value={customer.note}
                      onChange={(event) => setCustomer({ ...customer, note: event.target.value })}
                      placeholder={t.notePlaceholder}
                      className={fieldClass}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-hair bg-cream/60 px-6 py-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[11.5px] uppercase tracking-[0.18em] text-muted">{t.subtotal}</span>
                <span className="font-display text-[26px] text-ink">{formatRupiah(subtotal)}</span>
              </div>
              <p className="mt-1 text-[11.5px] text-muted">{t.subtotalNote}</p>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!valid}
                className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-[12px] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-espresso-soft disabled:pointer-events-none disabled:opacity-35"
              >
                <MessageCircle className="size-4" strokeWidth={1.5} />
                {t.submit}
              </button>
              <p className="mt-3 text-center text-[11.5px] uppercase tracking-[0.16em] text-muted">
                Admin {brand.whatsappDisplay} · 09.00–20.00 WIB
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
