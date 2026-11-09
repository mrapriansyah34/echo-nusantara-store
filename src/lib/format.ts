export function formatRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function discountPercent(price: number, compareAt?: number): number | null {
  if (!compareAt || compareAt <= price) return null
  return Math.round((1 - price / compareAt) * 100)
}

// Retail anchor for the crossed-out price. It follows the same 999 ending as
// the selling price (899.999, 2.199.999, 7.799.999), about 13–20% above it.
export function comparePrice(price: number): number {
  const step = 100_000
  return Math.ceil((price * 1.15) / step) * step - 1
}
