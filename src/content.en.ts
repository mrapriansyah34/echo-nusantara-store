import { drinks, dry, hampers } from './content'
import type { Copy } from './content'

// English translation of every string in src/content.ts. The `Copy` type keeps
// the two languages structurally identical, so a missing key fails the build.
export const en: Copy = {
  nav: {
    links: [
      { label: 'Collection', href: '#koleksi' },
      { label: 'Story', href: '#cerita' },
      { label: 'Ritual', href: '#ritual' },
      { label: 'Reviews', href: '#testimoni' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: { label: 'Order via WhatsApp' },
    announcement: 'Ships across Indonesia · Free shipping on orders above Rp 2,000,000',
    cartLabel: 'Cart',
    cartAria: 'Open cart',
    menuAria: 'Open menu',
    themeLabel: 'Theme & language',
  },
  hero: {
    eyebrow: 'Pure edible bird’s nest · Since 2012',
    title: ['A luxury you', 'sip every', 'morning'],
    description:
      'Hand-picked swallow nests from the caves of the Indonesian archipelago, cold-processed without preservatives. Served in 70 ml glass jars — three and a half grams of pure nest in every serving.',
    primary: { label: 'Explore the collection', href: '#koleksi' },
    secondary: { label: 'Ask us first', href: '#tanya' },
    facts: ['100% Organic', 'Vacuum sealed', '3.5 g pure nest per jar'],
    captions: ["Bird's Nest in Jar · Set of 8", 'Dry nest · 100 grams'],
    coldServed: 'Served chilled',
    imageAlt: 'Set of 8 Signature Gold',
    imageAltSecondary: '100 gram dry nest',
  },
  marquee: [
    "Edible bird's nest from the archipelago",
    'No preservatives',
    'Cold processed',
    'Ships across Indonesia',
    'Halal · BPOM · FSSC 22000',
    'Gift packaging',
  ],
  collection: {
    eyebrow: 'N° 01 — Collection',
    title: 'Eight packages, one standard.',
    description:
      'Every jar holds 3.5 grams of pure edible bird’s nest. Pick the portion that suits you, or start with the smallest.',
    footnote: 'Date · Pandan variants',
    footnoteShapes: 'Cup · Strips · Triangle shapes',
    saveNote: 'Special price',
    askPrice: 'Ask for price',
    askAdmin: 'Ask us',
    add: 'Add to bag',
    added: 'Added to bag',
    soldOut: 'Sold out',
    lowBadge: 'Low stock',
    stockLeft: '{n} left of {max}',
    stockLow: 'Low stock — {n} left',
    stockEmpty: 'Sold out — ask about restock',
    askMessage: 'Hello ECHO Nusantara, I would like to ask the price of {name} ({set}).',
  },
  story: {
    caption: 'Limestone cave · East Kalimantan',
    sideNote: 'Harvested without disturbing active nests. One nest, one origin card.',
    certified: 'Certified',
    imageAlt: 'A swiftlet house on a riverbank in East Kalimantan',
  },
  craft: {
    eyebrow: 'N° 03 — Story',
    title: 'From the archipelago to your table.',
    body: [
      'Edible bird’s nests in the Indonesian archipelago form from swiftlet saliva that hardens on limestone cave walls. We take only nests that have been abandoned, then clean them without chemicals.',
      'Every nest is sorted by hand under light, weighed, and cold-processed so its texture stays whole. The result is not a supplement — it is a dish.',
    ],
    specs: [
      { value: '98%', label: 'Purity level' },
      { value: 'AAA', label: 'Nest grade' },
      { value: '0', label: 'Preservatives' },
      { value: '3.5 g', label: 'Nest per jar' },
    ],
    certs: ['FSSC 22000', 'NKV', 'Halal', 'BPOM'],
    note: 'Every purchase comes with a nest-origin card and its harvest date.',
  },
  ritual: {
    eyebrow: 'N° 04 — Ritual',
    title: 'Three minutes, every morning.',
    intro:
      'No heating, no added sugar. Bird’s nest already carries its own gentle flavour — your only task is to serve it calmly.',
    stepLabel: 'Step',
    steps: [
      {
        index: 'I',
        title: 'Chill',
        body: 'Leave the jar in the fridge overnight. At 4 °C the nest turns softer and the date flavour settles.',
      },
      {
        index: 'II',
        title: 'Stir gently',
        body: 'Stir slowly with a clean spoon — never shake hard. The nest spreads evenly without breaking apart.',
      },
      {
        index: 'III',
        title: 'Savour',
        body: 'Enjoy it straight from the jar, or pour it into a glass bowl and add a single date. Finish it the same day.',
      },
    ],
  },
  benefits: {
    eyebrow: 'N° 05 — Benefits',
    title: '98% clean, ready to brew.',
    description:
      'Sorted by hand, cleaned without chemicals, then packed hygienically. The result is nest you can cook whenever you like.',
    items: [
      {
        title: '98% clean & ready to brew',
        body: 'Processed to a high hygiene standard so it is easier to handle and quicker to prepare.',
      },
      {
        title: 'Sorted one by one',
        body: 'Every product is checked for quality before it ships — nothing leaves without inspection.',
      },
      {
        title: 'Naturally, nothing added',
        body: 'Moisture control keeps the shape and integrity of the nest intact in transit.',
      },
    ],
    funFact: {
      title: 'Did you know?',
      body: 'Most of the immune system is linked to the gut — which makes what you consume matter for whole-body health.',
    },
  },
  brew: {
    eyebrow: 'How to brew — dry nest',
    title: 'Four steps, one bowl.',
    description:
      'For dry nest, brew it at home. No special equipment — a steamer and a glass bowl are enough.',
    steps: [
      {
        index: '1',
        title: 'Soak',
        body: 'Rinse gently, then soak for 2–3 hours until the nest blooms like soft jelly.',
      },
      {
        index: '2',
        title: 'Steam',
        body: 'Steam gently for 15–60 minutes. A little pandan or rock sugar deepens the aroma.',
      },
      {
        index: '3',
        title: 'Savour',
        body: 'Serve warm, or pair it with fruit, herbs and warm spice.',
      },
      {
        index: '4',
        title: 'Store',
        body: 'Keep it in a clean container, chill, and finish within 2–3 days.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'N° 06 — Reviews',
    title: 'From those who have tried it.',
    note: 'Verified buyer reviews',
    items: [
      {
        quote:
          'I ordered the Set of 8 for my mother’s birthday. The box is beautiful, and the origin card makes the gift feel truly considered.',
        name: 'Nadia Prameswari',
        role: 'Jakarta',
      },
      {
        quote:
          'It tastes clean, with no fishy note at all. The pandan is fragrant without being too sweet. I have been a regular for a year.',
        name: 'Rendra Halim',
        role: 'Surabaya',
      },
      {
        quote:
          'Ordering happens over WhatsApp, replies are quick, and it reached Makassar in two days. I love that I did not need an account.',
        name: 'Melati Anjani',
        role: 'Makassar',
      },
    ],
  },
  faq: {
    eyebrow: 'N° 07 — Questions',
    title: 'Things we are often asked.',
    note: 'Still unanswered? Our team replies directly on WhatsApp between 09.00 and 20.00 WIB.',
    items: [
      {
        q: 'How do I place an order?',
        a: 'Choose a variant, add it to the cart, then fill in your name, address and courier. The “Send order to WhatsApp” button opens our official chat with the order details and an invoice number already prepared. Payment is arranged once our team confirms stock.',
      },
      {
        q: 'Which couriers do you use?',
        a: 'JNE, J&T Express, SiCepat, AnterAja, Ninja Xpress and Pos Indonesia for regular delivery. Within Greater Jakarta, GoSend and GrabExpress offer same-day delivery.',
      },
      {
        q: 'Are products shipped cold?',
        a: 'Ready-to-drink products travel in insulated packaging with ice gel. Refrigerate them as soon as they arrive. Dry nest only needs a cool, dry place.',
      },
      {
        q: 'How long does the ready-to-drink last?',
        a: 'Fourteen days in the fridge, with no preservatives. The production date is printed under each jar.',
      },
      {
        q: 'Can it be sent as a gift?',
        a: 'Yes. Write your message in the notes field at checkout — we include a greeting card and hide the price from the recipient.',
      },
      {
        q: 'What if the parcel arrives damaged?',
        a: 'Send photos of the packaging and jar contents to our WhatsApp within 24 hours of delivery. We replace it at no extra cost.',
      },
    ],
  },
  closing: {
    eyebrow: 'N° 08 — Contact',
    title: 'Not sure where to begin?',
    description:
      'Tell us what you need — for yourself, as a gift, or a corporate order. Our team replies between 09.00 and 20.00 WIB.',
    button: 'Ask us on WhatsApp',
    message: 'Hello ECHO Nusantara, I would like to ask about your edible bird’s nest products.',
    signature: 'Answered by a human, not a bot.',
    hours: 'Mon–Sat · 09.00–20.00 WIB',
  },
  footer: {
    blurb:
      'Pure edible bird’s nest from the Indonesian archipelago. Cold-processed, preservative-free, shipped from Jakarta across Indonesia.',
    columns: [
      { title: 'Collection', links: ['Ready to drink', 'Dry nest', 'Hampers', 'Corporate orders'] },
      { title: 'Help', links: ['How to order', 'Shipping', 'Returns', 'Storage'] },
      { title: 'Company', links: ['About us', 'Certification', 'Become a reseller', 'Contact'] },
    ],
    shippingLabel: 'Shipping',
    couriers: ['JNE', 'J&T', 'SiCepat', 'AnterAja', 'Ninja', 'Pos Indonesia', 'GoSend', 'GrabExpress'],
    legal: `© ${new Date().getFullYear()} ECHO Nusantara. Official Partner`,
    disclaimer:
      'This product is food, not medicine. It is not intended to diagnose, treat or prevent any disease.',
  },
  cart: {
    eyebrow: 'Order',
    title: 'Your cart',
    ariaLabel: 'Order cart',
    close: 'Close cart',
    remove: 'Remove',
    qtyMinus: 'Decrease quantity',
    qtyPlus: 'Increase quantity',
    emptyTitle: 'Your cart is still empty.',
    emptyBody: 'Start with the Set of 3 Triple Luxe, or try the 37.8 g dry nest.',
    emptyCta: 'View the collection',
    shippingTitle: 'Delivery details',
    name: 'Recipient name',
    namePlaceholder: 'Full name',
    phone: 'WhatsApp number',
    phonePlaceholder: '08xx xxxx xxxx',
    address: 'Full address',
    addressPlaceholder: 'Street, number, district, city, postal code',
    courier: 'Courier',
    note: 'Note (optional)',
    notePlaceholder: 'Gift card, special instructions…',
    subtotal: 'Subtotal',
    subtotalNote: 'Excludes shipping. Confirmed by our team on WhatsApp.',
    submit: 'Send order to WhatsApp',
    successEyebrow: 'Invoice',
    successTitle: 'Your order is ready.',
    successBody:
      'Your order summary is prepared and a WhatsApp tab has opened. Press send in WhatsApp so our team can confirm stock and shipping.',
    openWhatsApp: 'Open WhatsApp',
    keepShopping: 'Keep shopping',
    invoiceNote: 'Keep the invoice number to track your parcel.',
    order: {
      heading: 'ECHO NUSANTARA ORDER',
      invoice: 'Invoice',
      variant: 'Variant',
      subtotal: 'Subtotal',
      excludes: 'excl. shipping',
      name: 'Name',
      phone: 'WhatsApp',
      address: 'Address',
      courier: 'Courier',
      note: 'Note',
      closing: 'Please confirm stock availability and the final total including shipping. Thank you.',
    },
  },
}

export const collectionsEn: typeof import('./content').collections = [
  {
    id: 'siap-minum',
    index: '01',
    title: 'Ready to drink',
    subtitle: '70 ml jar',
    description:
      'Nest already brewed and strained, sealed in a glass jar. Chill it, stir, and enjoy — nothing to prepare.',
    products: drinks,
  },
  {
    id: 'kering',
    index: '02',
    title: 'Dry nest',
    subtitle: 'AAA Grade',
    description:
      'Raw nest cleaned to 98% and sorted one by one. Available as cup, strips and triangle.',
    products: dry,
  },
  {
    id: 'hampers',
    index: '03',
    title: 'Christmas Hampers',
    subtitle: 'Limited edition',
    description:
      'A green box with forest illustration and a gold ribbon. Choose the contents to suit the gift — message us for pricing and a custom greeting card.',
    products: hampers,
  },
]

export type ProductText = {
  name: string
  setLabel: string
  volume: string
  tagline: string
  variants?: Record<string, string>
}

export const productTextEn: Record<string, ProductText> = {
  'triple-luxe': {
    name: 'Triple Luxe Serve',
    setLabel: 'Set of 3',
    volume: '3 × 70 ml',
    tagline: 'An introduction — three jars for three mornings.',
    variants: {
      'kurma-3': 'Date 3',
      'pandan-3': 'Pandan 3',
      'pandan2-kurma1': 'Pandan 2 · Date 1',
      'pandan1-kurma2': 'Pandan 1 · Date 2',
    },
  },
  'signature-gold': {
    name: "Bird's Nest in Jar",
    setLabel: 'Set of 8',
    volume: '8 × 70 ml',
    tagline: 'Our most-gifted set, packed in a kraft box.',
    variants: { 'pandan4-kurma4': 'Pandan 4 · Date 4', 'kurma-8': 'Date 8', 'pandan-8': 'Pandan 8' },
  },
  'signature-diamond': {
    name: "Bird's Nest in Jar",
    setLabel: 'Set of 16',
    volume: '16 × 70 ml',
    tagline: 'For the whole family and a truly special gift.',
    variants: { 'pandan8-kurma8': 'Pandan 8 · Date 8', 'kurma-16': 'Date 16', 'pandan-16': 'Pandan 16' },
  },
  'sultan-pack': {
    name: "Bird's Nest in Jar",
    setLabel: 'Set of 30',
    volume: '30 × 70 ml',
    tagline: 'A full month. The best price per jar.',
    variants: { 'pandan15-kurma15': 'Pandan 15 · Date 15', 'kurma-30': 'Date 30', 'pandan-30': 'Pandan 30' },
  },
  'dry-37': {
    name: "Dry Bird's Nest 37.8 g",
    setLabel: 'Trial size',
    volume: '37.8 grams',
    tagline: 'The best place to start with dry nest.',
    variants: { cup: 'Cup', strips: 'Strips', triangle: 'Triangle' },
  },
  'dry-100': {
    name: "Dry Bird's Nest 100 g",
    setLabel: 'Monthly portion',
    volume: '100 grams',
    tagline: 'Enough for about twenty brews.',
    variants: { cup: 'Cup', strips: 'Strips', triangle: 'Triangle' },
  },
  'dry-500': {
    name: "Dry Bird's Nest 500 g",
    setLabel: 'Family portion',
    volume: '500 grams',
    tagline: 'Keeps well, brewed whenever you like.',
    variants: { cup: 'Cup', strips: 'Strips', triangle: 'Triangle' },
  },
  'dry-1kg': {
    name: "Dry Bird's Nest 1 kg",
    setLabel: 'Royal Masterpiece',
    volume: '1 kilogram',
    tagline: 'The master collection. For a gift never forgotten.',
    variants: { cup: 'Cup', strips: 'Strips', triangle: 'Triangle' },
  },
  'hamper-aurora': {
    name: 'Aurora',
    setLabel: 'Christmas Hamper',
    volume: '8 jars + 75 g dry nest',
    tagline: 'Pandan & date, 75 g of AAA dry nest, and goji berries.',
  },
  'hamper-reverie': {
    name: 'Reverie',
    setLabel: 'Christmas Hamper',
    volume: '3 jars + 37.8 g dry nest',
    tagline: 'Three pandan & date jars with 37.8 g of AAA dry nest.',
  },
  'hamper-serenity': {
    name: 'Serenity',
    setLabel: 'Christmas Hamper',
    volume: '6 × 70 ml',
    tagline: 'Six pandan & date jars in a Christmas-edition box.',
  },
}
