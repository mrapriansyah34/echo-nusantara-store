# Master Dokumentasi & Panduan Integrasi E-Commerce: ECHO Nusantara
**Official Partner RN.CURATED**

Dokumentasi ini dirancang khusus untuk diimpor dan diimplementasikan ke dalam platform **karyawan.ai** untuk membangun situs *E-Commerce & Landing Page Ultra-Luxury* yang lengkap dengan etalase produk, manajemen stok real-time, keranjang belanja, *checkout* WhatsApp otomatis, pelacakan pesanan, serta referensi API kurir Indonesia.

---

## 1. STRUKTUR KATALOG & VARIAN PRODUK RESMI

### A. Kategori Minuman Botol Siap Minum (70ml - 3.5g Walet Murni)
1. **Set of 3 - Sarang Burung Walet Triple Luxe Serve**
   - **Harga Promo:** Rp750.000 (Coret: Rp950.000 | Hemat Rp200rb)
   - **Varian Gambar & Rasa:** 
     - Kurma 3 Botol (`/images/triple-luxe-kurma-3.png`)
     - Pandan 1 - Kurma 2 (`/images/triple-luxe-pandan1-kurma2.jpg`)
2. **Set of 8 - Bird's Nest In Jar (Signature Gold / Hampers)**
   - **Harga Promo:** Rp1.900.000 (Coret: Rp2.400.000)
   - **Varian Gambar & Rasa:**
     - Pandan 4 - Kurma 4 (`/images/set-8-pandan4-kurma4.jpg`)
     - Kurma 8 Botol (`/images/set-8-kurma-8.jpg`)
     - Pandan 8 Botol (`/images/set-8-pandan-8.jpg`)
3. **Set of 16 - Bird's Nest In Jar (Signature Diamond)**
   - **Harga Promo:** Rp3.700.000 (Coret: Rp4.500.000 | Hemat Rp800rb)
   - **Varian Gambar & Rasa:**
     - Pandan 8 - Kurma 8 (`/images/set-16-pandan8-kurma8.jpg`)
     - Kurma 16 Botol (`/images/set-16-kurma-16.jpg`)
     - Pandan 16 Botol (`/images/set-16-pandan-16.jpg`)
4. **Set of 30 - Bird's Nest In Jar (Monthly Serve / Sultan Pack)**
   - **Harga Promo:** Rp6.800.000 (Coret: Rp8.200.000 | Hemat Rp1,4 Jt)
   - **Varian Gambar & Rasa:**
     - Pandan 15 - Kurma 15 (`/images/set-30-pandan15-kurma15.jpg`)
     - Kurma 30 Botol (`/images/set-30-kurma-30.jpg`)
     - Pandan 30 Botol (`/images/set-30-pandan-30.jpg`)

### B. Kategori Dry Bird's Nest (Sarang Burung Walet Kering - AAA Grade, 98% Cleanliness)
1. **Dry Bird's Nest - 37,8 Gram**
   - **Harga:** Rp760.000
   - **Varian Bentuk:** 
     - Varian Cup (`/images/dry-nest-37-cup.jpg`)
     - Varian Strips (`/images/dry-nest-37-strips.jpg`)
     - Varian Triangle (`/images/dry-nest-37-triangle.jpg`)
2. **Dry Bird's Nest - 100 Gram**
   - **Harga:** Rp1.990.000
   - **Varian Bentuk:** 
     - Varian Cup (`/images/dry-nest-100-cup.jpg`)
     - Varian Strips (`/images/dry-nest-100-strips.jpg`)
     - Varian Triangle (`/images/dry-nest-100-triangle.jpg`)
3. **Dry Bird's Nest - 500 Gram**
   - **Harga:** Rp9.750.000
   - **Varian Bentuk:** 
     - Varian Cup (`/images/dry-nest-500-cup.jpg`)
     - Varian Strips (`/images/dry-nest-500-strips.jpg`)
     - Varian Triangle (`/images/dry-nest-500-triangle.jpg`)
4. **Dry Bird's Nest - 1 Kilogram (Royal Masterpiece)**
   - **Harga:** Rp19.303.000
   - **Varian Bentuk:** 
     - Varian Cup (`/images/dry-nest-1kg-cup.jpg`)
     - Varian Strips (`/images/dry-nest-1kg-strips.jpg`)
     - Varian Triangle (`/images/dry-nest-1kg-triangle.jpg`)

---

## 2. WORKFLOW & FITUR SISTEM TOKO

1. **Manajemen Stok Real-Time:** 
   - Setiap produk memiliki parameter stok dinamis (`stock` dan `maxStock`). 
   - Jika stok tersisa <= 5 botol/pack, sistem otomatis menampilkan badge *"🔥 Stok Menipis!"* dengan indikator progress bar oranye/merah.
   - Ketika pesanan dikirim via keranjang, stok lokal di etalase akan berkurang secara otomatis.

2. **Keranjang Belanja (*Cart Drawer* & WhatsApp Checkout):**
   - Pelanggan dapat memilih varian rasa/bentuk, mengatur kuantitas, dan memasukkan produk ke dalam *Floating Cart Drawer*.
   - Saat tombol *"Kirim Pesanan ke WhatsApp Official"* diklik, sistem secara otomatis:
     - Men-generate nomor Invoice unik (contoh: `INV-ECHO-482`).
     - Merangkum rincian produk, subtotal harga, nama penerima, alamat, pilihan kurir, dan catatan khusus.
     - Membuka tautan langsung ke WhatsApp Official **6281399387499**.

---

## 3. DOKUMENTASI API & ENDPOINT TRACKING KURIR INDONESIA

### Jalur 1: Aggregator API (Satu API untuk Semua Kurir)
Sangat direkomendasikan untuk menghemat waktu integrasi dan biaya pemeliharaan (*maintenance*).
1. **Biteship API**
   - **Dokumentasi:** https://biteship.com
   - **Method:** POST
   - **Supported Couriers (Kode Kurir):** `"jnt"`, `"jne"`, `"sicepat"`, `"anteraja"`, `"ninja"`, `"pos"`, `"shopee"`
2. **RajaOngkir API (Paket Pro)**
   - **Dokumentasi:** https://rajaongkir.com
   - **Method:** POST
   - **Supported Couriers (Kode Kurir):** `"jnt"`, `"jne"`, `"sicepat"`, `"anteraja"`, `"ninja"`, `"pos"`

### Jalur 2: API Resmi (Official Direct API)
Membutuhkan kontrak kerja sama (PKS) atau akun corporate resmi untuk mendapatkan API Key / Credentials langsung dari pihak ekspedisi.
1. **J&T Express Official API**
   - **Portal Developer:** https://jet.co.id
   - **Method:** POST | `Content-Type: application/x-www-form-urlencoded`
   - **Payload Utama:** `data_param`, `sign (MD5)`, `eccode`
2. **JNE Express Official API**
   - **Portal Developer:** https://jne.co.id
   - **Method:** POST | Modul Tracking / Airwaybill History
   - **Auth:** Username & API Key via Request Body
3. **SiCepat Ekspres Official API**
   - **Akses:** Melalui Account Manager B2B SiCepat (Khusus Corporate)
   - **Format Data:** JSON (Mendukung Webhook RTO / Gagal Kirim)
4. **SPX Express (Shopee Xpress) Official API**
   - **Akses:** Tertutup untuk umum (Eksklusif merchant Shopee). Wajib menggunakan Aggregator (Biteship/TrackingMore)
5. **Ninja Xpress Official API**
   - **Portal Developer:** https://ninjaxpress.co
   - **Method:** GET / POST
   - **Fitur:** Polling status per tahapan (*Order Created, Parcel Picked Up, Completed*)
6. **Pos Indonesia Official API**
   - **Portal Developer:** Melalui kemitraan PosAja! Korporat / Web Service BUMN
7. **GoSend API (Kurir Instan)**
   - **Portal Developer:** Integrasi ekosistem GoBiz Developer / Gojek API
   - **Fitur Pelacakan:** Menyediakan data `shareable_live_tracking_url` (Peta GPS Real-time)
8. **GrabExpress API (Kurir Instan)**
   - **Portal Developer:** GrabExpress Enterprise API
   - **Fitur Pelacakan:** Status driver (*Allocated, Picked Up, Delivered*) dan link *live tracking*
