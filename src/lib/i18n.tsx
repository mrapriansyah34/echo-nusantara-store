import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import { collections, id as idCopy } from '../content'
import type { Locale, Product } from '../content'
import { collectionsEn, en as enCopy, productTextEn } from '../content.en'

const copy = { id: idCopy, en: enCopy }
const collectionSets = { id: collections, en: collectionsEn }

const STORAGE_KEY = 'echo-locale'

const meta = {
  en: {
    title: "ECHO Nusantara — Premium Edible Bird's Nest",
    description:
      'Pure AAA edible bird\'s nest from the Indonesian archipelago. Ready to drink and dry, preservative-free. Order directly via WhatsApp, shipped across Indonesia.',
  },
  id: {
    title: 'ECHO Nusantara — Sarang Burung Walet Premium',
    description:
      'Sarang burung walet murni AAA grade dari Nusantara. Siap minum dan kering, tanpa pengawet. Pesan langsung via WhatsApp, kirim ke seluruh Indonesia.',
  },
}

function localizeProduct(product: Product, locale: Locale): Product {
  if (locale === 'id') return product
  const text = productTextEn[product.id]
  if (!text) return product
  return {
    ...product,
    name: text.name,
    setLabel: text.setLabel,
    volume: text.volume,
    tagline: text.tagline,
    variants: product.variants.map((variant) => ({
      ...variant,
      label: text.variants?.[variant.key] ?? variant.label,
    })),
  }
}

type LocaleValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  c: typeof idCopy
  collections: typeof collections
  product: (product: Product) => Product
}

const LocaleContext = createContext<LocaleValue | null>(null)

function initialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  return window.localStorage.getItem(STORAGE_KEY) === 'id' ? 'id' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = meta[locale].title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta[locale].description)
  }, [locale])

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return
      const root = document.documentElement
      root.classList.remove('locale-swap')
      void root.offsetWidth // restart the fade even on rapid clicks
      root.classList.add('locale-swap')
      window.setTimeout(() => root.classList.remove('locale-swap'), 520)

      setLocaleState(next)
      window.localStorage.setItem(STORAGE_KEY, next)
    },
    [locale],
  )

  const value = useMemo<LocaleValue>(() => {
    const activeCollections = collectionSets[locale].map((collection) => ({
      ...collection,
      products: collection.products.map((product) => localizeProduct(product, locale)),
    }))
    return {
      locale,
      setLocale,
      c: copy[locale],
      collections: activeCollections,
      product: (product: Product) => localizeProduct(product, locale),
    }
  }, [locale, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used inside LocaleProvider')
  return value
}

export { localizeProduct }
