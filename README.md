# ECHO Nusantara

Website katalog & pemesanan **sarang burung walet premium** — desain luxury editorial, target pembaca 24 tahun ke atas, dan seluruh transaksi ditutup lewat **WhatsApp** (tanpa payment gateway, tanpa akun pembeli).

- Katalog 11 produk: set siap minum (3/8/16/30 jar), sarang kering 37,8 g / 100 g / 500 g / 1 kg dengan tiga potongan (strips, triangle, cup), serta tiga Christmas hamper (Aurora, Reverie, Serenity).
- **English sebagai bahasa utama**, Indonesia lewat toggle. Pilihan bahasa dan tema disimpan di `localStorage`.
- **Dark mode** warm charcoal (bukan hitam pekat) yang mengikuti preferensi sistem saat pertama dibuka.
- Keranjang + form checkout yang merangkai pesan WhatsApp otomatis: nomor invoice, varian, jumlah, subtotal, data pengiriman.
- Harga jual dan harga coret berakhiran `999` (mis. `Rp 3.839.999`), dengan garis coret yang beranimasi saat kartu masuk viewport.

## Menjalankan lokal

Prasyarat: **Node.js 20.19+** (atau 22.12+) dan npm.

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/client (aset statis) + dist/saas_landing/index.js (Worker)
npm run typecheck  # tsc --noEmit
npm run preview
```

`npm run dev` menjalankan Vite sekaligus Cloudflare Worker lewat `@cloudflare/vite-plugin`, jadi route `/api/*` di `src/worker/index.ts` ikut hidup di lokal.

## Struktur

```
src/
  content.ts            Semua copy Indonesia, data produk, harga, stok, brand, nomor WhatsApp
  content.en.ts         Terjemahan Inggris (produk, section, keranjang)
  lib/
    i18n.tsx            LocaleProvider, useLocale, localizeProduct, default English
    theme.tsx           ThemeProvider (class .dark di <html>)
    store.tsx           Keranjang, stok, submit() → URL WhatsApp
    format.ts           formatRupiah, discountPercent, comparePrice (harga coret 999)
  components/           Button, Container, Logo, ProductPlate, Preferences, Reveal, SectionHeading
  sections/             Hero, Nav, Collection, Benefits, Brew, Story, Ritual, Testimonials, Faq, Cta, CartDrawer, Footer
  styles.css            Design token, palet light/dark, utility (eyebrow, band-dark, price-strike)
  worker/index.ts       Hono Worker: /api/health, /api/subscribe, fallback ke aset statis
index.html              Meta, font, skrip pra-paint untuk tema & bahasa
public/images/          Foto produk & konten
scripts/postbuild.mjs   Membersihkan dist dari file tersembunyi/source map
deploy.json             Manifest deploy (Worker + assets)
wrangler.jsonc          Konfigurasi Worker & SPA fallback
```

## Kustomisasi

**Harga & produk** — semuanya di `src/content.ts`. Tiap produk punya `variants` (mis. `strips`, `triangle`, `cup`) dan masing-masing boleh punya `price` sendiri; `stock` dihitung per produk.

**Harga coret** — tidak disimpan di data, dihitung oleh `comparePrice()` di `src/lib/format.ts`: kira-kira 13–20% di atas harga jual, dibulatkan ke pola `…999`. Ubah faktor `1.15` di fungsi itu kalau ingin rentang diskon lain.

**Nomor WhatsApp** — `brand.whatsapp` (format internasional tanpa `+`). Pesan checkout, tombol "Tanya admin", dan CTA memakai nomor ini.

**Copy** — bahasa Indonesia di `content.ts`, Inggris di `content.en.ts`; keduanya harus punya bentuk yang sama karena type `Copy` dijaga TypeScript. `src/lib/i18n.tsx` juga mengganti `<html lang>`, judul tab, dan meta description saat bahasa berubah.

**Warna & tipografi** — token di `src/styles.css` (`--paper`, `--ink`, `--gold`, `--clay`, dst.), font Cormorant Garamond + Inter dimuat dari Google Fonts di `index.html`.

**Section** — `src/App.tsx` menyusun urutan section; hapus atau pindahkan satu baris untuk mengubah halaman.

## Catatan

- Keranjang dan stok disimpan di state React (hilang saat halaman di-refresh); stok awal tiap produk 50. Tidak ada database atau backend pesanan — pesanan benar-benar dikirim sebagai pesan WhatsApp.
- Checkout tidak menghitung ongkir; gratis ongkir di atas Rp 2.000.000 hanya disebut di banner dan pesan.
- `/api/subscribe` masih stub (hanya memvalidasi email). Sambungkan ke provider email atau tabel D1 kalau form newsletter dipakai.

## Deploy

Build menghasilkan Worker ESM + aset statis, jadi bisa dideploy ke Cloudflare Workers (Vite plugin) atau lewat Freebuff Sites memakai `deploy.json`:

```sh
npm run build
```

`deploy.json` menunjuk ke `dist/saas_landing/index.js` dengan aset dari `dist/client` dan `spa: true`.
