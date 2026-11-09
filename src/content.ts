// All copy, prices and product data live here. Sections read from this file,
// so re-theming or changing a price never means touching layout.

export const brand = {
  name: 'ECHO NUSANTARA',
  line: 'Official Partner',
  partner: 'RN.CURATED',
  whatsapp: '6281399387499',
  whatsappDisplay: '+62 813-9938-7499',
  instagram: '@echo.nusantara',
  email: 'halo@echonusantara.id',
}

export const nav = {
  links: [
    { label: 'Koleksi', href: '#koleksi' },
    { label: 'Cerita', href: '#cerita' },
    { label: 'Ritual', href: '#ritual' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Tanya', href: '#faq' },
  ],
  cta: { label: 'Pesan via WhatsApp' },
  announcement: 'Kirim seluruh Indonesia · Gratis ongkir untuk pesanan di atas Rp 2.000.000',
  cartLabel: 'Keranjang',
  cartAria: 'Buka keranjang',
  menuAria: 'Buka menu',
  themeLabel: 'Tampilan & bahasa',
}

export const hero = {
  eyebrow: 'Sarang burung walet murni · Sejak 2012',
  title: ['Kemewahan yang', 'diminum setiap', 'pagi'],
  description:
    'Sarang burung walet pilihan dari gua-gua Nusantara, diolah dingin dan tanpa pengawet. Disajikan dalam jar kaca 70 ml — tiga setengah gram walet murni di setiap sajian.',
  primary: { label: 'Jelajahi koleksi', href: '#koleksi' },
  secondary: { label: 'Konsultasi dulu', href: '#tanya' },
  facts: ['100% Organik', 'Vakum tersegel', '3,5 g walet murni per jar'],
  captions: ["Bird's Nest in Jar · Set of 8", 'Sarang kering · 100 gram'],
  coldServed: 'Disajikan dingin',
  imageAlt: 'Set of 8 Signature Gold',
  imageAltSecondary: 'Sarang kering 100 gram',
}

export const marquee = [
  'Sarang burung walet Nusantara',
  'Tanpa pengawet',
  'Diolah dingin',
  'Kirim seluruh Indonesia',
  'Halal · Badan POM · FSSC 22000',
  'Kemasan hadiah',
]

export type ProductKind = 'drink' | 'dry'
export type ProductTone = 'gold' | 'sage' | 'amber'

export type ProductVariant = {
  key: string
  label: string
  image: string
  tone: ProductTone
  price?: number
}

export type Product = {
  id: string
  name: string
  kind: ProductKind
  setLabel: string
  volume: string
  tagline: string
  price?: number
  compareAt?: number
  stock: number
  maxStock: number
  artCount: number
  variants: ProductVariant[]
}

export const drinks: Product[] = [
  {
    id: 'triple-luxe',
    name: 'Triple Luxe Serve',
    kind: 'drink',
    setLabel: 'Set of 3',
    volume: '3 × 70 ml',
    tagline: 'Porsi perkenalan — tiga jar untuk tiga pagi.',
    price: 724999,
    stock: 50,
    maxStock: 50,
    artCount: 3,
    variants: [
      { key: 'kurma-3', label: 'Kurma 3', image: '/images/triple-luxe-Kurma_3.jpg', tone: 'amber' },
      { key: 'pandan-3', label: 'Pandan 3', image: '/images/triple-luxe-Pandan_3.jpg', tone: 'sage' },
      { key: 'pandan2-kurma1', label: 'Pandan 2 · Kurma 1', image: '/images/triple-luxe-Pandan_2-Kurma_1.jpg', tone: 'sage' },
      { key: 'pandan1-kurma2', label: 'Pandan 1 · Kurma 2', image: '/images/triple-luxe-Pandan_1-Kurma_2.jpg', tone: 'sage' },
    ],
  },
  {
    id: 'signature-gold',
    name: "Bird's Nest in Jar",
    kind: 'drink',
    setLabel: 'Set of 8',
    volume: '8 × 70 ml',
    tagline: 'Hampers paling dicari, dikemas dalam kotak kraft.',
    price: 1874999,
    stock: 50,
    maxStock: 50,
    artCount: 5,
    variants: [
      { key: 'pandan4-kurma4', label: 'Pandan 4 · Kurma 4', image: '/images/set-8-pandan-4_kurma-4.jpg', tone: 'sage' },
      { key: 'kurma-8', label: 'Kurma 8', image: '/images/set-8-kurma-8.jpg', tone: 'amber' },
      { key: 'pandan-8', label: 'Pandan 8', image: '/images/set-8-pandan-8.jpg', tone: 'sage' },
    ],
  },
  {
    id: 'signature-diamond',
    name: "Bird's Nest in Jar",
    kind: 'drink',
    setLabel: 'Set of 16',
    volume: '16 × 70 ml',
    tagline: 'Untuk keluarga besar dan hadiah istimewa.',
    price: 3674999,
    stock: 50,
    maxStock: 50,
    artCount: 6,
    variants: [
      { key: 'pandan8-kurma8', label: 'Pandan 8 · Kurma 8', image: '/images/set-16-pandan8-kurma8.jpg', tone: 'sage' },
      { key: 'kurma-16', label: 'Kurma 16', image: '/images/set-16-kurma-16.jpg', tone: 'amber' },
      { key: 'pandan-16', label: 'Pandan 16', image: '/images/set-16-pandan16.jpg', tone: 'sage' },
    ],
  },
  {
    id: 'sultan-pack',
    name: "Bird's Nest in Jar",
    kind: 'drink',
    setLabel: 'Set of 30',
    volume: '30 × 70 ml',
    tagline: 'Satu bulan penuh. Harga per jar paling baik.',
    price: 6774999,
    stock: 50,
    maxStock: 50,
    artCount: 6,
    variants: [
      { key: 'pandan15-kurma15', label: 'Pandan 15 · Kurma 15', image: '/images/set-30-pandan15-kurma-15.jpg', tone: 'sage' },
      { key: 'kurma-30', label: 'Kurma 30', image: '/images/set-30-kurma30.jpg', tone: 'amber' },
      { key: 'pandan-30', label: 'Pandan 30', image: '/images/set-30-pandan30.jpg', tone: 'sage' },
    ],
  },
]

export const dry: Product[] = [
  {
    id: 'dry-37',
    name: "Dry Bird's Nest 37,8 g",
    kind: 'dry',
    setLabel: 'Porsi uji',
    volume: '37,8 gram',
    tagline: 'Titik mulai terbaik untuk mencoba sarang kering.',
    price: 734999,
    stock: 50,
    maxStock: 50,
    artCount: 1,
    variants: [
      { key: 'cup', label: 'Cup', image: '/images/dry-nest-37-cup.jpg', tone: 'gold', price: 1034999 },
      { key: 'strips', label: 'Strips', image: '/images/dry-nest-37-strips.jpg', tone: 'gold', price: 734999 },
      { key: 'triangle', label: 'Triangle', image: '/images/dry-nest-37-triangle.jpg', tone: 'gold', price: 884999 },
    ],
  },
  {
    id: 'dry-100',
    name: "Dry Bird's Nest 100 g",
    kind: 'dry',
    setLabel: 'Porsi bulanan',
    volume: '100 gram',
    tagline: 'Cukup untuk sekitar dua puluh kali seduh.',
    price: 1964999,
    stock: 50,
    maxStock: 50,
    artCount: 2,
    variants: [
      { key: 'cup', label: 'Cup', image: '/images/dry-nest-100-cup.jpg', tone: 'gold', price: 2774999 },
      { key: 'strips', label: 'Strips', image: '/images/dry-nest-100-strips.jpg', tone: 'gold', price: 1964999 },
      { key: 'triangle', label: 'Triangle', image: '/images/dry-nest-100-triangle.jpg', tone: 'gold', price: 2374999 },
    ],
  },
  {
    id: 'dry-500',
    name: "Dry Bird's Nest 500 g",
    kind: 'dry',
    setLabel: 'Porsi keluarga',
    volume: '500 gram',
    tagline: 'Disimpan lama, diseduh kapan saja.',
    price: 9724999,
    stock: 50,
    maxStock: 50,
    artCount: 3,
    variants: [
      { key: 'cup', label: 'Cup', image: '/images/dry-nest-500-cup.jpg', tone: 'gold', price: 13724999 },
      { key: 'strips', label: 'Strips', image: '/images/dry-nest-500-strips.jpg', tone: 'gold', price: 9724999 },
      { key: 'triangle', label: 'Triangle', image: '/images/dry-nest-500-triangle.jpg', tone: 'gold', price: 11724999 },
    ],
  },
  {
    id: 'dry-1kg',
    name: "Dry Bird's Nest 1 kg",
    kind: 'dry',
    setLabel: 'Royal Masterpiece',
    volume: '1 kilogram',
    tagline: 'Koleksi master. Untuk hadiah yang tak terlupakan.',
    price: 19277999,
    stock: 50,
    maxStock: 50,
    artCount: 3,
    variants: [
      { key: 'cup', label: 'Cup', image: '/images/dry-nest-1kg-cup.jpg', tone: 'gold', price: 27134999 },
      { key: 'strips', label: 'Strips', image: '/images/dry-nest-1kg-strips.jpg', tone: 'gold', price: 19277999 },
      { key: 'triangle', label: 'Triangle', image: '/images/dry-nest-1kg-triangle.jpg', tone: 'gold', price: 23254999 },
    ],
  },
]

export const hampers: Product[] = [
  {
    id: 'hamper-aurora',
    name: 'Aurora',
    kind: 'drink',
    setLabel: 'Hampers Natal',
    volume: '8 jar + 75 g sarang kering',
    tagline: 'Pandan & kurma, 75 g AAA dry bird\'s nest, dan goji berry.',
    price: 3839999,
    stock: 50,
    maxStock: 50,
    artCount: 4,
    variants: [
      { key: 'aurora', label: 'Aurora', image: '/images/hampers-aurora.jpeg', tone: 'sage' },
    ],
  },
  {
    id: 'hamper-reverie',
    name: 'Reverie',
    kind: 'drink',
    setLabel: 'Hampers Natal',
    volume: '3 jar + 37,8 g sarang kering',
    tagline: 'Tiga jar pandan & kurma dengan 37,8 g sarang kering AAA.',
    price: 1919999,
    stock: 50,
    maxStock: 50,
    artCount: 3,
    variants: [
      { key: 'reverie', label: 'Reverie', image: '/images/hampers-reverie.jpeg', tone: 'sage' },
    ],
  },
  {
    id: 'hamper-serenity',
    name: 'Serenity',
    kind: 'drink',
    setLabel: 'Hampers Natal',
    volume: '6 × 70 ml',
    tagline: 'Enam jar pandan & kurma dalam kotak edisi Natal.',
    price: 1439999,
    stock: 50,
    maxStock: 50,
    artCount: 6,
    variants: [
      { key: 'serenity', label: 'Serenity', image: '/images/hampers-serenity.jpeg', tone: 'sage' },
    ],
  },
]

export const allProducts: Product[] = [...drinks, ...dry, ...hampers]

export const collections = [
  {
    id: 'siap-minum',
    index: '01',
    title: 'Siap diminum',
    subtitle: 'Jar 70 ml',
    description:
      'Walet yang sudah diseduh dan disaring, ditutup dalam jar kaca. Dinginkan, aduk, lalu nikmati — tanpa perlu menyiapkan apa pun.',
    products: drinks,
  },
  {
    id: 'kering',
    index: '02',
    title: 'Sarang kering',
    subtitle: 'AAA Grade',
    description:
      'Sarang mentah dengan tingkat kebersihan 98%, diseleksi satu per satu. Tersedia dalam bentuk cup, strips dan triangle.',
    products: dry,
  },
  {
    id: 'hampers',
    index: '03',
    title: 'Hampers Natal',
    subtitle: 'Edisi terbatas',
    description:
      'Kotak hijau dengan ilustrasi hutan dan pita emas. Isinya bisa dipilih sesuai kebutuhan hadiah — kabari admin untuk harga dan kustomisasi kartu ucapan.',
    products: hampers,
  },
]

export const craft = {
  eyebrow: 'N° 03 — Cerita',
  title: 'Dari gua Nusantara, ke meja Anda.',
  body: [
    'Sarang burung walet di Nusantara terbentuk dari liur burung walet yang mengeras di dinding gua kapur. Kami hanya mengambil sarang yang sudah ditinggalkan, lalu membersihkannya tanpa bahan kimia.',
    'Setiap sarang disortir manual di bawah cahaya, ditimbang, dan diolah dingin agar teksturnya tetap utuh. Hasilnya bukan suplemen — melainkan hidangan.',
  ],
  specs: [
    { value: '98%', label: 'Tingkat kebersihan' },
    { value: 'AAA', label: 'Grade sarang' },
    { value: '0', label: 'Bahan pengawet' },
    { value: '3,5 g', label: 'Walet per jar' },
  ],
  certs: ['FSSC 22000', 'NKV', 'Halal', 'Badan POM'],
  note: 'Setiap pembelian disertai kartu asal sarang dan tanggal panen.',
}

export const ritual = {
  eyebrow: 'N° 04 — Ritual',
  title: 'Tiga menit, setiap pagi.',
  intro:
    'Tidak perlu dipanaskan, tidak perlu ditambah gula. Sarang walet sudah punya rasa lembutnya sendiri — tugas Anda hanya menyajikannya dengan tenang.',
  stepLabel: 'Langkah',
  steps: [
    {
      index: 'I',
      title: 'Dinginkan',
      body: 'Simpan jar di kulkas semalaman. Suhu 4 °C membuat tekstur walet lebih lembut dan rasa kurma lebih tenang.',
    },
    {
      index: 'II',
      title: 'Aduk perlahan',
      body: 'Aduk perlahan dengan sendok bersih, jangan dikocok keras. Walet akan tersebar rata tanpa pecah.',
    },
    {
      index: 'III',
      title: 'Nikmati',
      body: 'Nikmati langsung dari jar, atau tuang ke mangkuk kaca dan tambahkan satu butir kurma. Habiskan dalam satu hari.',
    },
  ],
}

export const benefits = {
  eyebrow: 'N° 05 — Manfaat',
  title: 'Bersih 98%, siap diseduh.',
  description:
    'Sarang disortir manual, dibersihkan tanpa bahan kimia, lalu dikemas higienis. Hasilnya sarang yang siap dimasak kapan pun Anda mau.',
  items: [
    {
      title: '98% bersih & siap seduh',
      body: 'Diproses dengan standar higiene tinggi agar lebih mudah ditangani dan cepat disiapkan.',
    },
    {
      title: 'Disortir satu per satu',
      body: 'Setiap produk diperiksa kualitasnya sebelum dikirim — tidak ada yang lolos tanpa pemeriksaan.',
    },
    {
      title: 'Bahan alami, tanpa tambahan',
      body: 'Kontrol kelembapan menjaga bentuk dan integritas sarang selama pengiriman.',
    },
  ],
  funFact: {
    title: 'Tahukah Anda?',
    body: 'Sebagian besar sistem imun terhubung ke saluran cerna — membuat asupan nutrisi penting untuk kesehatan menyeluruh.',
  },
}

export const brew = {
  eyebrow: 'Cara menyeduh — sarang kering',
  title: 'Empat langkah, satu mangkuk.',
  description:
    'Untuk sarang kering, seduh sendiri di rumah. Tidak perlu alat khusus — cukup panci kukus dan mangkuk kaca.',
  steps: [
    {
      index: '1',
      title: 'Rendam',
      body: 'Bilas perlahan, lalu rendam 2–3 jam sampai sarang mekar seperti agar-agar.',
    },
    {
      index: '2',
      title: 'Kukus',
      body: 'Kukus perlahan 15–60 menit. Sedikit pandan atau gula batu menambah aroma.',
    },
    {
      index: '3',
      title: 'Nikmati',
      body: 'Santap hangat, atau padukan dengan buah, herba, dan rempah pilihan.',
    },
    {
      index: '4',
      title: 'Simpan',
      body: 'Simpan di wadah bersih, dinginkan, dan habiskan dalam 2–3 hari.',
    },
  ],
}

export const testimonials = {
  eyebrow: 'N° 06 — Testimoni',
  title: 'Mereka yang sudah mencoba.',
  note: 'Ulasan terverifikasi pembeli',
  items: [
    {
      quote:
        'Saya pesan Set of 8 untuk hadiah ulang tahun ibu. Kotaknya rapi, kartu asal sarangnya membuat hadiah ini terasa sungguh dipikirkan.',
      name: 'Nadia Prameswari',
      role: 'Jakarta',
    },
    {
      quote:
        'Rasanya bersih, tidak amis sama sekali. Pandan-nya wangi tapi tidak manis berlebihan. Sudah langganan sejak setahun lalu.',
      name: 'Rendra Halim',
      role: 'Surabaya',
    },
    {
      quote:
        'Proses pesannya lewat WhatsApp, dibalas cepat, dan sampainya dua hari ke Makassar. Saya suka karena tidak perlu bikin akun.',
      name: 'Melati Anjani',
      role: 'Makassar',
    },
  ],
}

export const faq = {
  eyebrow: 'N° 07 — Pertanyaan',
  title: 'Hal yang sering ditanyakan.',
  note: 'Belum terjawab? Admin kami membalas langsung di WhatsApp pada jam 09.00–20.00 WIB.',
  items: [
    {
      q: 'Bagaimana cara memesan?',
      a: 'Pilih varian, masukkan ke keranjang, lalu isi nama, alamat dan kurir. Tombol "Kirim Pesanan ke WhatsApp" akan membuka chat resmi kami dengan rincian pesanan dan nomor invoice yang sudah tersusun. Pembayaran dilakukan setelah admin mengonfirmasi stok.',
    },
    {
      q: 'Kurir apa saja yang tersedia?',
      a: 'JNE, J&T Express, SiCepat, AnterAja, Ninja Xpress dan Pos Indonesia untuk pengiriman reguler. Untuk Jabodetabek tersedia GoSend dan GrabExpress dengan pengiriman di hari yang sama.',
    },
    {
      q: 'Apakah produk dikirim dingin?',
      a: 'Produk siap minum dikirim dalam kemasan berinsulasi dengan ice gel. Setelah tiba, segera simpan di kulkas. Sarang kering cukup disimpan di tempat sejuk dan kering.',
    },
    {
      q: 'Berapa lama produk siap minum bertahan?',
      a: 'Empat belas hari di kulkas, tanpa pengawet. Tanggal produksi tercetak pada bagian bawah jar.',
    },
    {
      q: 'Apakah bisa dikirim sebagai hadiah?',
      a: 'Bisa. Tuliskan pesan pada kolom catatan saat checkout — kami menyertakan kartu ucapan dan menyembunyikan harga dari penerima.',
    },
    {
      q: 'Bagaimana jika paket rusak saat tiba?',
      a: 'Kirimkan foto kemasan dan isi jar ke WhatsApp kami dalam 1 × 24 jam setelah paket diterima. Kami mengganti tanpa biaya tambahan.',
    },
  ],
}

export const closing = {
  eyebrow: 'N° 08 — Hubungi',
  title: 'Belum yakin harus mulai dari mana?',
  description:
    'Ceritakan kebutuhan Anda — untuk diri sendiri, hadiah, atau pesanan korporat. Admin kami membalas pada jam 09.00–20.00 WIB.',
  button: 'Tanya admin via WhatsApp',
  message: 'Halo ECHO Nusantara, saya ingin bertanya tentang produk sarang burung walet.',
  signature: 'Dibalas manusia, bukan bot.',
  hours: 'Senin–Sabtu · 09.00–20.00 WIB',
}

export const footer = {
  blurb:
    'Sarang burung walet murni dari Nusantara. Diolah dingin, tanpa pengawet, dikirim dari Jakarta ke seluruh Indonesia.',
  columns: [
    { title: 'Koleksi', links: ['Siap diminum', 'Sarang kering', 'Hampers', 'Pesanan korporat'] },
    { title: 'Bantuan', links: ['Cara pesan', 'Pengiriman', 'Pengembalian', 'Penyimpanan'] },
    { title: 'Perusahaan', links: ['Tentang kami', 'Sertifikasi', 'Jadi reseller', 'Kontak'] },
  ],
  shippingLabel: 'Pengiriman',
  couriers: ['JNE', 'J&T', 'SiCepat', 'AnterAja', 'Ninja', 'Pos Indonesia', 'GoSend', 'GrabExpress'],
  legal: `© ${new Date().getFullYear()} ECHO Nusantara. Official Partner`,
  disclaimer:
    'Produk ini adalah pangan, bukan obat. Tidak dimaksudkan untuk mendiagnosis, mengobati, atau mencegah penyakit apa pun.',
}

export const couriers = [
  'JNE',
  'J&T Express',
  'SiCepat',
  'AnterAja',
  'Ninja Xpress',
  'Pos Indonesia',
  'GoSend (instan)',
  'GrabExpress (instan)',
]

export const collectionCopy = {
  eyebrow: 'N° 01 — Koleksi',
  title: 'Delapan kemasan, satu standar.',
  description:
    'Setiap jar berisi 3,5 gram sarang burung walet murni. Pilih porsi yang sesuai, atau mulai dari yang terkecil.',
  footnote: 'Varian kurma · pandan',
  footnoteShapes: 'Bentuk cup · strips · triangle',
  saveNote: 'Harga khusus',
  askPrice: 'Tanya harga',
  askAdmin: 'Tanya admin',
  add: 'Tambah ke keranjang',
  added: 'Masuk keranjang',
  soldOut: 'Habis',
  lowBadge: 'Stok menipis',
  stockLeft: 'Sisa {n} dari {max}',
  stockLow: 'Stok menipis — sisa {n}',
  stockEmpty: 'Stok habis — tanyakan restock',
  askMessage: 'Halo ECHO Nusantara, saya ingin menanyakan harga {name} ({set}).',
}

export const storyCopy = {
  caption: 'Gua kapur · Kalimantan Timur',
  sideNote: 'Dipanen tanpa merusak sarang aktif. Satu sarang, satu kartu asal.',
  certified: 'Tersertifikasi',
  imageAlt: 'Rumah walet di tepi sungai, Kalimantan Timur',
}

export const cartCopy = {
  eyebrow: 'Pesanan',
  title: 'Keranjang Anda',
  ariaLabel: 'Keranjang pesanan',
  close: 'Tutup keranjang',
  remove: 'Hapus',
  qtyMinus: 'Kurangi jumlah',
  qtyPlus: 'Tambah jumlah',
  emptyTitle: 'Keranjang masih kosong.',
  emptyBody: 'Mulai dari Set of 3 Triple Luxe, atau pilih sarang kering 37,8 gram untuk mencoba.',
  emptyCta: 'Lihat koleksi',
  shippingTitle: 'Data pengiriman',
  name: 'Nama penerima',
  namePlaceholder: 'Nama lengkap',
  phone: 'Nomor WhatsApp',
  phonePlaceholder: '08xx xxxx xxxx',
  address: 'Alamat lengkap',
  addressPlaceholder: 'Jalan, nomor, kelurahan, kota, kode pos',
  courier: 'Kurir',
  note: 'Catatan (opsional)',
  notePlaceholder: 'Kartu ucapan, instruksi khusus…',
  subtotal: 'Subtotal',
  subtotalNote: 'Belum termasuk ongkir. Dikonfirmasi admin via WhatsApp.',
  submit: 'Kirim pesanan ke WhatsApp',
  successEyebrow: 'Invoice',
  successTitle: 'Pesanan siap dikirim.',
  successBody:
    'Ringkasan pesanan sudah tersusun dan tab WhatsApp telah dibuka. Tekan kirim di WhatsApp agar admin kami mengonfirmasi stok dan ongkos kirim.',
  openWhatsApp: 'Buka WhatsApp',
  keepShopping: 'Lanjut belanja',
  invoiceNote: 'Simpan nomor invoice untuk pelacakan kurir.',
  order: {
    heading: 'PESANAN ECHO NUSANTARA',
    invoice: 'Invoice',
    variant: 'Varian',
    subtotal: 'Subtotal',
    excludes: 'belum termasuk ongkir',
    name: 'Nama',
    phone: 'WhatsApp',
    address: 'Alamat',
    courier: 'Kurir',
    note: 'Catatan',
    closing: 'Mohon konfirmasi ketersediaan stok dan total akhir termasuk ongkos kirim. Terima kasih.',
  },
}

export const id = {
  nav,
  hero,
  marquee,
  collection: collectionCopy,
  story: storyCopy,
  craft,
  ritual,
  benefits,
  brew,
  testimonials,
  faq,
  closing,
  footer,
  cart: cartCopy,
}

export type Copy = typeof id
export type Locale = 'id' | 'en'

export type Collections = (typeof collections)[number][]
