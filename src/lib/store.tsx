import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import { allProducts, brand } from '../content'
import type { Product } from '../content'
import { formatRupiah } from './format'
import { useLocale } from './i18n'

export type CartLine = {
  key: string
  productId: string
  variantKey: string
  qty: number
}

export type Customer = {
  name: string
  phone: string
  address: string
  courier: string
  note: string
}

export type OrderResult = { invoice: string; url: string }

type StoreValue = {
  cart: CartLine[]
  stock: Record<string, number>
  open: boolean
  count: number
  subtotal: number
  setOpen: (open: boolean) => void
  add: (product: Product, variantKey: string, qty?: number) => void
  setQty: (key: string, qty: number) => void
  remove: (key: string) => void
  clear: () => void
  submit: (customer: Customer) => OrderResult
}

const StoreContext = createContext<StoreValue | null>(null)

const initialStock = Object.fromEntries(allProducts.map((p) => [p.id, p.stock]))

export function StoreProvider({ children }: { children: ReactNode }) {
  const { c, product: localize } = useLocale()
  const order = c.cart.order
  const [cart, setCart] = useState<CartLine[]>([])
  const [stock, setStock] = useState<Record<string, number>>(initialStock)
  const [open, setOpen] = useState(false)

  const add = useCallback(
    (product: Product, variantKey: string, qty = 1) => {
      const key = `${product.id}:${variantKey}`
      setCart((lines) => {
        const found = lines.find((line) => line.key === key)
        if (found) {
          return lines.map((line) =>
            line.key === key ? { ...line, qty: Math.min(line.qty + qty, stock[product.id] ?? 0) } : line,
          )
        }
        return [...lines, { key, productId: product.id, variantKey, qty: Math.min(qty, stock[product.id] ?? 0) }]
      })
      setOpen(true)
    },
    [stock],
  )

  const setQty = useCallback(
    (key: string, qty: number) => {
      setCart((lines) =>
        lines.flatMap((line) => {
          if (line.key !== key) return [line]
          const available = stock[line.productId] ?? 0
          const next = Math.max(0, Math.min(qty, available))
          return next === 0 ? [] : [{ ...line, qty: next }]
        }),
      )
    },
    [stock],
  )

  const remove = useCallback((key: string) => {
    setCart((lines) => lines.filter((line) => line.key !== key))
  }, [])

  const clear = useCallback(() => setCart([]), [])

  const subtotal = useMemo(
    () =>
      cart.reduce((total, line) => {
        const product = allProducts.find((p) => p.id === line.productId)
        const variant = product?.variants.find((v) => v.key === line.variantKey)
        return total + (variant?.price ?? product?.price ?? 0) * line.qty
      }, 0),
    [cart],
  )

  const submit = useCallback(
    (customer: Customer): OrderResult => {
      const invoice = `INV-ECHO-${Math.floor(100 + Math.random() * 900)}`
      const rows = cart.map((line, index) => {
        const found = allProducts.find((p) => p.id === line.productId)
        const product = found ? localize(found) : undefined
        const variant = product?.variants.find((v) => v.key === line.variantKey)
        const unit = variant?.price ?? product?.price ?? 0
        const total = unit * line.qty
        return [
          `${index + 1}. ${product?.name ?? line.productId} — ${product?.setLabel ?? ''}`,
          `   ${order.variant}: ${variant?.label ?? line.variantKey}`,
          `   ${line.qty} × ${formatRupiah(unit)} = ${formatRupiah(total)}`,
        ].join('\n')
      })

      const message = [
        `*${order.heading}*`,
        `${order.invoice}: ${invoice}`,
        '',
        rows.join('\n\n'),
        '',
        `*${order.subtotal}: ${formatRupiah(subtotal)}* (${order.excludes})`,
        '',
        `${order.name}: ${customer.name}`,
        `${order.phone}: ${customer.phone}`,
        `${order.address}: ${customer.address}`,
        `${order.courier}: ${customer.courier}`,
        `${order.note}: ${customer.note.trim() || '-'}`,
        '',
        order.closing,
      ].join('\n')

      setStock((current) => {
        const next = { ...current }
        for (const line of cart) {
          next[line.productId] = Math.max(0, (next[line.productId] ?? 0) - line.qty)
        }
        return next
      })
      setCart([])

      return {
        invoice,
        url: `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`,
      }
    },
    [cart, subtotal, localize, order],
  )

  const count = cart.reduce((total, line) => total + line.qty, 0)

  const value: StoreValue = {
    cart,
    stock,
    open,
    count,
    subtotal,
    setOpen,
    add,
    setQty,
    remove,
    clear,
    submit,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const store = useContext(StoreContext)
  if (!store) throw new Error('useStore must be used inside StoreProvider')
  return store
}
