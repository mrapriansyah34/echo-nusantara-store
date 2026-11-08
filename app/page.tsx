"use client";

import React, { useState } from "react";

const WA_NUMBER = "6281399387499";

function createWhatsAppUrl(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message.trim())}`;
}

interface Product {
  id: string;
  category: "bottle" | "dry";
  title: string;
  subtitle: string;
  highlights?: string[];
  badge?: string;
  originalPrice?: number;
  price: number;
  stock: number;
  maxStock: number;
  image: string;
  variantImages?: Record<string, string>;
}

interface CartItem {
  product: Product;
  variant: string;
  quantity: number;
}

const initialProducts: Product[] = [
  // 1. SET OF 3 - TRIPLE LUXE SERVE
  {
    id: "triple-luxe-3",
    category: "bottle",
    title: "Set of 3 - Sarang Burung Walet Triple Luxe Serve",
    subtitle: "Cocok untuk pemula yang ingin merasakan manfaat awal kesegaran dan vitalitas dengan 3,5 gram sarang burung walet murni di setiap botol.",
    highlights: ["100% Organic, No Preservatives", "Advanced Vacuum, Sealed Technology", "3.5 Grams of Pure Bird's Nest in One Bottle"],
    badge: "Hemat Rp200rb",
    originalPrice: 950000,
    price: 750000,
    stock: 14,
    maxStock: 20,
    image: "/images/triple-luxe-kurma-3.png",
    variantImages: {
      "Kurma 3 Botol": "/images/triple-luxe-kurma-3.png",
      "Pandan 1 - Kurma 2": "/images/triple-luxe-pandan1-kurma2.jpg",
    },
  },

  // 2. SET OF 8 - SIGNATURE GOLD
  {
    id: "signature-gold-8",
    category: "bottle",
    title: "Set of 8 - Bird's Nest In Jar (Signature Gold)",
    subtitle: "Pilihan mewah untuk konsumsi rutin keluarga atau hampers hadiah istimewa relasi dengan kemasan boks eksklusif ECHO Nusantara.",
    highlights: ["100% Organic, No Preservatives", "Advanced Vacuum, Sealed Technology", "3.5 Grams of Pure Bird's Nest in One Bottle"],
    badge: "Best Seller / Hampers",
    originalPrice: 2400000,
    price: 1900000,
    stock: 8,
    maxStock: 15,
    image: "/images/set-8-pandan4-kurma4.jpg",
    variantImages: {
      "Pandan 4 - Kurma 4": "/images/set-8-pandan4-kurma4.jpg",
      "Kurma 8 Botol": "/images/set-8-kurma-8.jpg",
      "Pandan 8 Botol": "/images/set-8-pandan-8.jpg",
    },
  },

  // 3. SET OF 16 - SIGNATURE DIAMOND
  {
    id: "signature-diamond-16",
    category: "bottle",
    title: "Set of 16 - Bird's Nest In Jar (Signature Diamond)",
    subtitle: "Paket rutin & premium 16 botol (70ml) untuk regenerasi kulit, imun tubuh, dan vitalitas keluarga secara optimal.",
    highlights: ["100% Organic, No Preservatives", "Advanced Vacuum, Sealed Technology", "3.5 Grams of Pure Bird's Nest in One Bottle"],
    badge: "Hemat Rp800rb",
    originalPrice: 4500000,
    price: 3700000,
    stock: 9,
    maxStock: 12,
    image: "/images/set-16-pandan8-kurma8.jpg",
    variantImages: {
      "Pandan 8 - Kurma 8": "/images/set-16-pandan8-kurma8.jpg",
      "Kurma 16 Botol": "/images/set-16-kurma-16.jpg",
      "Pandan 16 Botol": "/images/set-16-pandan-16.jpg",
    },
  },

  // 4. SET OF 30 - MONTHLY SERVE
  {
    id: "monthly-serve-30",
    category: "bottle",
    title: "Set of 30 - Bird's Nest In Jar (Monthly Serve)",
    subtitle: "Suplai penuh 30 botol selama sebulan untuk vitalitas maksimal dan kemewahan nutrisi harian Para Sultan.",
    highlights: ["100% Organic, No Preservatives", "Advanced Vacuum, Sealed Technology", "3.5 Grams of Pure Bird's Nest in One Bottle"],
    badge: "Sultan Pack • Hemat Rp1,4 Jt",
    originalPrice: 8200000,
    price: 6800000,
    stock: 4,
    maxStock: 10,
    image: "/images/set-30-pandan15-kurma15.jpg",
    variantImages: {
      "Pandan 15 - Kurma 15": "/images/set-30-pandan15-kurma15.jpg",
      "Kurma 30 Botol": "/images/set-30-kurma-30.jpg",
      "Pandan 30 Botol": "/images/set-30-pandan-30.jpg",
    },
  },

  // 5. DRY BIRD'S NEST - 37,8 GRAM
  {
    id: "dry-nest-37",
    category: "dry",
    title: "Dry Bird's Nest (Sarang Burung Walet Kering) - 37,8 Gram",
    subtitle: "Pilihan kualitas terbaik (AAA Grade) untuk diolah sendiri di rumah. Dibersihkan dengan tangan hingga tingkat kebersihan 98% tanpa bahan kimia.",
    highlights: ["100% Organic, No Chemicals", "AAA Grade Excellence", "98% Cleanliness by Hand"],
    badge: "AAA Grade • 37,8 gr",
    price: 760000,
    stock: 15,
    maxStock: 20,
    image: "/images/dry-nest-37-cup.jpg",
    variantImages: {
      "Varian Cup": "/images/dry-nest-37-cup.jpg",
      "Varian Strips": "/images/dry-nest-37-strips.jpg",
      "Varian Triangle": "/images/dry-nest-37-triangle.jpg",
    },
  },

  // 6. DRY BIRD'S NEST - 100 GRAM
  {
    id: "dry-nest-100",
    category: "dry",
    title: "Dry Bird's Nest (Sarang Burung Walet Kering) - 100 Gram",
    subtitle: "Kemasan eksklusif 100 gram sarang burung walet kering asli pilihan berkualitas ekspor (AAA Grade) dengan boks mewah ECHO Nusantara.",
    highlights: ["100% Organic, No Chemicals", "AAA Grade Excellence", "98% Cleanliness by Hand"],
    badge: "Favorit Keluarga • 100 gr",
    price: 1990000,
    stock: 10,
    maxStock: 15,
    image: "/images/dry-nest-100-cup.jpg",
    variantImages: {
      "Varian Cup": "/images/dry-nest-100-cup.jpg",
      "Varian Strips": "/images/dry-nest-100-strips.jpg",
      "Varian Triangle": "/images/dry-nest-100-triangle.jpg",
    },
  },

  // 7. DRY BIRD'S NEST - 500 GRAM
  {
    id: "dry-nest-500",
    category: "dry",
    title: "Dry Bird's Nest (Sarang Burung Walet Kering) - 500 Gram",
    subtitle: "Paket 500 gram sarang walet kering murni di atas nampan eksklusif dengan serat utuh dan tingkat kebersihan 98% tanpa bahan kimia.",
    highlights: ["100% Organic, No Chemicals", "AAA Grade Excellence", "98% Cleanliness by Hand"],
    badge: "Premium Bulk • 500 gr",
    price: 9750000,
    stock: 5,
    maxStock: 10,
    image: "/images/dry-nest-500-cup.jpg",
    variantImages: {
      "Varian Cup": "/images/dry-nest-500-cup.jpg",
      "Varian Strips": "/images/dry-nest-500-strips.jpg",
      "Varian Triangle": "/images/dry-nest-500-triangle.jpg",
    },
  },

  // 8. DRY BIRD'S NEST - 1 KILOGRAM
  {
    id: "dry-nest-1000",
    category: "dry",
    title: "Dry Bird's Nest (Sarang Burung Walet Kering) - 1 Kilogram",
    subtitle: "Koleksi mahakarya 1 Kilogram (2 nampan penuh) sarang burung walet kering murni kualitas tertinggi untuk suplai kesehatan keluarga maupun relasi VVIP.",
    highlights: ["100% Organic, No Chemicals", "AAA Grade Excellence", "98% Cleanliness by Hand"],
    badge: "Royal Masterpiece • 1 Kg",
    price: 19303000,
    stock: 2,
    maxStock: 5,
    image: "/images/dry-nest-1kg-cup.jpg",
    variantImages: {
      "Varian Cup": "/images/dry-nest-1kg-cup.jpg",
      "Varian Strips": "/images/dry-nest-1kg-strips.jpg",
      "Varian Triangle": "/images/dry-nest-1kg-triangle.jpg",
    },
  },
];

const mockShipments: Record<string, { invoice: string; customer: string; items: string; courier: string; awb: string; statusStep: number; updatedAt: string }> = {
  "INV-ECHO-881": {
    invoice: "INV-ECHO-881",
    customer: "Bpk. Hendra Wijaya (Jakarta Selatan)",
    items: "1x Signature Gold - Set of 8 (Pandan 4 - Kurma 4)",
    courier: "Paxel Instant Cold & Safe",
    awb: "PXL-992837461",
    statusStep: 3,
    updatedAt: "Hari ini, 14:20 WIB - Kurir sedang menuju lokasi pengantaran",
  },
  "INV-ECHO-882": {
    invoice: "INV-ECHO-882",
    customer: "Ibu Clarissa Tan (Surabaya)",
    items: "1x Triple Luxe Set - Set of 3 (Kurma 3 Botol)",
    courier: "JNE YES (Yakin Esok Sampai)",
    awb: "JNE-8837465192",
    statusStep: 4,
    updatedAt: "Kemarin, 18:45 WIB - Paket telah diterima oleh Clarissa",
  },
};

function formatRupiah(num: number) {
  return "Rp" + num.toLocaleString("id-ID");
}

export default function EchoNusantaraLuxuryStore() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeTab, setActiveTab] = useState<"all" | "bottle" | "dry">("all");
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [trackQuery, setTrackQuery] = useState("INV-ECHO-881");
  const [trackedOrder, setTrackedOrder] = useState(mockShipments["INV-ECHO-881"]);
  const [trackError, setTrackError] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [courier, setCourier] = useState("Paxel Instant / Same Day");
  const [notes, setNotes] = useState("");

  const filteredProducts = products.filter((p) => (activeTab === "all" ? true : p.category === activeTab));

  const getVariant = (product: Product) => {
    if (selectedVariants[product.id]) return selectedVariants[product.id];
    if (product.variantImages && Object.keys(product.variantImages).length > 0) {
      return Object.keys(product.variantImages)[0];
    }
    return product.category === "dry" ? "Varian Cup" : "Kurma 3 Botol";
  };

  const getProductImage = (product: Product) => {
    const currentVariant = getVariant(product);
    return product.variantImages?.[currentVariant] || product.image;
  };

  const addToCart = (product: Product) => {
    if (product.stock <= 0) return;
    const variant = getVariant(product);

    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id && item.variant === variant);
      if (existingIndex > -1) {
        const currentQty = prev[existingIndex].quantity;
        if (currentQty + 1 > product.stock) return prev;
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, variant, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQty = (idx: number, delta: number) => {
    setCart((prev) => {
      const updated = [...prev];
      const item = updated[idx];
      const nextQty = item.quantity + delta;
      if (nextQty <= 0) {
        updated.splice(idx, 1);
      } else if (nextQty <= item.product.stock) {
        item.quantity = nextQty;
      }
      return updated;
    });
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const key = trackQuery.trim().toUpperCase();
    if (mockShipments[key]) {
      setTrackedOrder(mockShipments[key]);
      setTrackError("");
    } else {
      setTrackError("Nomor Invoice tidak ditemukan. Silakan gunakan contoh INV-ECHO-881 atau INV-ECHO-882.");
    }
  };

  const handleCheckoutWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const generatedInvoice = `INV-ECHO-${Math.floor(100 + Math.random() * 900)}`;

    setProducts((prev) =>
      prev.map((p) => {
        const boughtQty = cart.filter((item) => item.product.id === p.id).reduce((sum, item) => sum + item.quantity, 0);
        return { ...p, stock: Math.max(0, p.stock - boughtQty) };
      })
    );

    const itemLines = cart
      .map((item, i) => `${i + 1}. *${item.product.title}* (${item.variant}) x${item.quantity} = *${formatRupiah(item.product.price * item.quantity)}*`)
      .join("\n");

    const waMessage = `Halo Admin *ECHO Nusantara*, saya ingin melakukan pemesanan dari Website Resmi:

*No. Invoice:* ${generatedInvoice}
*Nama Pemesan:* ${customerName || "-"}
*Alamat Pengiriman:* ${customerAddress || "-"}
*Ekspedisi Pilihan:* ${courier}
*Catatan/Hampers:* ${notes || "-"}

*Rincian Pesanan:*
${itemLines}

*Total Pembayaran:* *${formatRupiah(totalPrice)}*

Mohon info nomor rekening pembayaran dan konfirmasi pengirimannya. Terima kasih!`;

    window.open(createWhatsAppUrl(waMessage), "_blank");
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#081C14] text-white font-sans selection:bg-[#D4AF37] selection:text-[#081C14]">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#081C14]/85 border-b border-[#D4AF37]/25">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div>
            <span className="block text-[10px] tracking-[0.25em] text-[#D4AF37] font-semibold uppercase">Official Partner RN.CURATED</span>
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wide text-white">
              ECHO <span className="text-[#D4AF37]">Nusantara</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <a href="#lacak-pesanan" className="hidden sm:inline-block text-xs border border-[#D4AF37]/40 text-[#F3E5AB] px-3.5 py-2 rounded-full hover:bg-[#D4AF37]/10 transition">
              📦 Lacak Pengiriman
            </a>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-gradient-to-r from-[#C9A84C] via-[#E6C762] to-[#B89235] text-[#081C14] font-bold text-xs md:text-sm px-4 py-2.5 rounded-full shadow-lg shadow-[#D4AF37]/20 flex items-center gap-2"
            >
              <span>🛒 Keranjang</span>
              <span className="bg-[#081C14] text-[#D4AF37] px-2 py-0.5 rounded-full text-xs">{totalItems}</span>
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-12 md:py-20 px-4 border-b border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-medium">
              ✨ 100% Sarang Burung Walet Asli Pilihan
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              Rahasia Kulit Glowing, Imun Kebal &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C9A84C]">Vitalitas Maksimal Para Sultan</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Kemewahan nutrisi murni dalam botol <strong>70ml siap minum</strong> dengan <strong>3,5 gram sarang burung walet kering murni</strong> di setiap botolnya. Tanpa perlu repot meracik atau memasak berjam-jam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center md:justify-start pt-2">
              <a
                href="#katalog-produk"
                className="bg-gradient-to-r from-[#C9A84C] via-[#F3E5AB] to-[#C9A84C] text-[#081C14] font-bold py-3.5 px-7 rounded-xl shadow-xl shadow-[#D4AF37]/20 text-center transition transform hover:-translate-y-0.5"
              >
                Pesan Promo Spesial Hari Ini →
              </a>
              <a
                href={createWhatsAppUrl("Halo Admin ECHO Nusantara, saya tertarik dengan minuman sarang burung walet murni di website. Boleh dibantu rekomendasi paket yang paling pas untuk menjaga kesehatan kulit dan vitalitas keluarga?")}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D4AF37]/60 bg-[#123524]/70 hover:bg-[#163d2a] text-[#F3E5AB] font-semibold py-3.5 px-6 rounded-xl text-center transition"
              >
                💬 Konsultasi WA (0813-9938-7499)
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-md w-full">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl shadow-black/70">
              <img src="/images/triple-luxe-kurma-3.png" alt="ECHO Nusantara Premium Bird's Nest Drink" className="w-full h-80 md:h-96 object-contain bg-[#F5EFE6] p-4" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C14] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="bg-[#081C14]/90 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-2.5 rounded-2xl">
                  <p className="text-xs text-[#D4AF37] font-bold">3,5 Gram Walet Murni</p>
                  <p className="text-[11px] text-gray-300">Per Botol 70ml Siap Minum</p>
                </div>
                <div className="bg-[#D4AF37] text-[#081C14] font-bold px-3.5 py-2 rounded-xl text-xs shadow-lg">Hanya 15 Kcal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto space-y-8">
        <div className="flex flex-wrap justify-center gap-3">
          {["BPOM Certified", "Halal MUI", "FSSC 22000", "NKV Certified"].map((cert) => (
            <span key={cert} className="px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#123524] text-[#F3E5AB] text-xs font-semibold tracking-wider">
              ✓ {cert}
            </span>
          ))}
        </div>

        <div className="bg-[#F9F6F0] text-[#123524] rounded-3xl p-6 md:p-10 shadow-2xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-lg font-serif font-bold text-[#99732C]">✨ Rasa Alami & Nikmat</p>
            <p className="text-xs text-gray-700 mt-1">Varian Dates (Kurma) & Pandan yang menyegarkan tanpa pengawet.</p>
          </div>
          <div>
            <p className="text-lg font-serif font-bold text-[#99732C]">✨ Rendah Kalori</p>
            <p className="text-xs text-gray-700 mt-1">Hanya 15 kcal per botol, sangat aman untuk program diet dan gula darah.</p>
          </div>
          <div>
            <p className="text-lg font-serif font-bold text-[#99732C]">✨ Sangat Praktis</p>
            <p className="text-xs text-gray-700 mt-1">Dapat disimpan di suhu ruang tanpa kulkas, siap diminum kapan saja.</p>
          </div>
          <div>
            <p className="text-lg font-serif font-bold text-[#99732C]">✨ 100% Aman & Legal</p>
            <p className="text-xs text-gray-700 mt-1">Teruji klinis berstandar internasional (BPOM, Halal MUI, FSSC 22000, NKV).</p>
          </div>
        </div>
      </section>

      <section id="katalog-produk" className="py-10 px-4 max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#D4AF37]">Etalase Resmi & Katalog Promo Hari Ini</h2>
          <p className="text-xs md:text-sm text-gray-300">Pilih varian produk, cek ketersediaan stok secara real-time, dan pesan langsung</p>
        </div>

        <div className="flex justify-center gap-2 flex-wrap">
          {[
            { id: "all", label: "Semua Koleksi" },
            { id: "bottle", label: "Minuman Botol Siap Minum (70ml)" },
            { id: "dry", label: "Dry Bird's Nest (Walet Kering)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "all" | "bottle" | "dry")}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition ${
                activeTab === tab.id ? "bg-[#D4AF37] text-[#081C14]" : "bg-[#123524] text-gray-300 border border-[#D4AF37]/30 hover:border-[#D4AF37]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const stockPercentage = Math.round((product.stock / product.maxStock) * 100);
            const isLowStock = product.stock <= 5;
            const currentVariant = getVariant(product);

            return (
              <div key={product.id} className="group bg-[#123524]/90 border border-[#D4AF37]/35 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl hover:border-[#D4AF37] transition">
                <div>
                  <div className="relative h-64 overflow-hidden bg-[#F5EFE6]">
                    <img src={getProductImage(product)} alt={`${product.title} - ${currentVariant}`} className="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-500" />
                    {product.badge && <span className="absolute top-3 right-3 bg-gradient-to-r from-[#C9A84C] to-[#F3E5AB] text-[#081C14] text-xs font-extrabold px-3 py-1 rounded-full shadow">{product.badge}</span>}
                    <span className={`absolute bottom-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md ${isLowStock ? "bg-red-900/90 text-red-100 border border-red-400/50" : "bg-[#081C14]/85 text-[#F3E5AB] border border-[#D4AF37]/40"}`}>
                      {product.stock > 0 ? `${isLowStock ? "🔥 Stok Menipis:" : "Stok Tersedia:"} ${product.stock} Pack/Set` : "Stok Habis"}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-serif font-bold text-white">{product.title}</h3>
                    <div className="flex items-baseline gap-2.5">
                      {product.originalPrice && <span className="text-xs text-gray-400 line-through">{formatRupiah(product.originalPrice)}</span>}
                      <span className="text-xl font-extrabold text-[#D4AF37]">{formatRupiah(product.price)}</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{product.subtitle}</p>

                    {product.highlights && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.highlights.map((h) => (
                          <span key={h} className="text-[10px] bg-[#081C14]/80 border border-[#D4AF37]/30 text-[#F3E5AB] px-2 py-0.5 rounded-md">
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full transition-all ${isLowStock ? "bg-amber-400" : "bg-[#D4AF37]"}`} style={{ width: `${stockPercentage}%` }} />
                    </div>

                    {product.variantImages && (
                      <div className="pt-2 space-y-1.5">
                        <label className="block text-[11px] text-[#F3E5AB] font-semibold">Pilih Varian (Klik untuk lihat foto):</label>
                        <div className="grid grid-cols-2 gap-1.5">
                          {Object.entries(product.variantImages).map(([variantName, imgUrl]) => {
                            const isSelected = currentVariant === variantName;
                            return (
                              <button
                                key={variantName}
                                type="button"
                                onClick={() => setSelectedVariants({ ...selectedVariants, [product.id]: variantName })}
                                className={`flex items-center gap-1.5 p-1 rounded-xl border text-left transition ${
                                  isSelected ? "bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-md" : "bg-[#081C14]/70 border-white/10 text-gray-300 hover:border-[#D4AF37]/50"
                                }`}
                              >
                                <img src={imgUrl} alt={variantName} className="w-7 h-7 rounded-lg object-cover bg-[#F5EFE6] shrink-0" />
                                <span className="text-[10px] font-semibold leading-tight line-clamp-1">{variantName}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => addToCart(product)}
                    disabled={product.stock <= 0}
                    className="w-full bg-gradient-to-r from-[#C9A84C] via-[#E6C762] to-[#C9A84C] hover:brightness-110 disabled:opacity-40 text-[#081C14] font-bold text-xs py-3 px-4 rounded-xl transition shadow"
                  >
                    + Tambah ke Keranjang
                  </button>
                  <a
                    href={createWhatsAppUrl(`Halo Admin ECHO Nusantara, saya tertarik memesan langsung *${product.title}* (${currentVariant}) seharga *${formatRupiah(product.price)}*. Apakah stok masih ready untuk dikirim hari ini?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center border border-[#D4AF37]/40 hover:bg-white/5 text-[#F3E5AB] text-xs font-semibold py-2.5 px-4 rounded-xl transition"
                  >
                    💬 Beli Cepat via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="lacak-pesanan" className="py-12 px-4 max-w-4xl mx-auto space-y-10">
        <div className="bg-[#123524] border border-[#D4AF37]/50 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">Real-Time Shipment Tracker</span>
            <h3 className="text-2xl font-serif font-bold text-white">Lacak Status Pengiriman Pesanan Anda</h3>
            <p className="text-xs text-gray-300">
              Masukkan Nomor Invoice Anda (Contoh simulasi:{" "}
              <button type="button" onClick={() => setTrackQuery("INV-ECHO-881")} className="underline text-[#D4AF37] font-semibold">
                INV-ECHO-881
              </button>{" "}
              atau{" "}
              <button type="button" onClick={() => setTrackQuery("INV-ECHO-882")} className="underline text-[#D4AF37] font-semibold">
                INV-ECHO-882
              </button>
              )
            </p>
          </div>

          <form onSubmit={handleTrackOrder} className="flex gap-2">
            <input
              type="text"
              value={trackQuery}
              onChange={(e) => setTrackQuery(e.target.value)}
              placeholder="Masukkan Nomor Invoice (contoh: INV-ECHO-881)"
              className="flex-1 bg-[#081C14] border border-[#D4AF37]/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
            />
            <button type="submit" className="bg-[#D4AF37] hover:bg-[#c29d2f] text-[#081C14] font-bold px-6 py-3 rounded-xl text-sm transition">
              Cek Resi
            </button>
          </form>

          {trackError && <p className="text-xs text-red-300 text-center">{trackError}</p>}

          {trackedOrder && !trackError && (
            <div className="bg-[#081C14]/80 border border-[#D4AF37]/30 rounded-2xl p-5 space-y-5">
              <div className="flex flex-wrap justify-between gap-4 border-b border-white/10 pb-4 text-xs">
                <div>
                  <p className="text-gray-400">Penerima & Pesanan:</p>
                  <p className="font-bold text-white text-sm mt-0.5">{trackedOrder.customer}</p>
                  <p className="text-[#F3E5AB] mt-0.5">{trackedOrder.items}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-gray-400">Ekspedisi & No. Resi:</p>
                  <p className="font-bold text-[#D4AF37] text-sm mt-0.5">{trackedOrder.courier}</p>
                  <p className="font-mono text-white mt-0.5">{trackedOrder.awb}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                {["1. Pembayaran Terverifikasi", "2. QC & Kemasan Aman", "3. Dalam Pengiriman Kurir", "4. Tiba di Tujuan"].map((label, index) => {
                  const active = index + 1 <= trackedOrder.statusStep;
                  return (
                    <div key={label} className={`p-3 rounded-xl border ${active ? "bg-[#163d2a] border-[#D4AF37] text-white" : "bg-black/20 border-white/10 text-gray-500"}`}>
                      <p className="font-bold">
                        {active ? "✅ " : "⏳ "}
                        {label}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-gray-300 italic">📍 Update Terakhir: {trackedOrder.updatedAt}</p>
            </div>
          )}
        </div>

        <div className="bg-[#0d2b1e] border border-[#D4AF37]/40 rounded-3xl p-6 md:p-8 space-y-6 text-xs md:text-sm">
          <div className="text-center space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">Developer Resource</span>
            <h4 className="text-xl font-serif font-bold text-white">Daftar Endpoint & Dokumentasi API Tracking Kurir Indonesia</h4>
            <p className="text-gray-300 text-xs">Referensi teknis integrasi sistem pelacakan pengiriman otomatis.</p>
          </div>

          <div className="space-y-4 text-gray-200">
            <div className="border border-white/10 rounded-2xl p-4 bg-[#081C14]/70 space-y-2">
              <p className="font-bold text-[#D4AF37]">JALUR 1: AGGREGATOR API (Satu API untuk Semua Kurir)</p>
              <p className="text-xs text-gray-300">Sangat direkomendasikan karena menghemat waktu integrasi dan biaya maintenance.</p>
              <ul className="space-y-2 pt-1">
                <li>
                  <strong>1. Biteship API</strong> — Dokumentasi: <a href="https://biteship.com" target="_blank" className="underline text-[#D4AF37]">biteship.com</a> | Method: POST | Kode Kurir: "jnt", "jne", "sicepat", "anteraja", "ninja", "pos", "shopee"
                </li>
                <li>
                  <strong>2. RajaOngkir API (Paket Pro)</strong> — Dokumentasi: <a href="https://rajaongkir.com" target="_blank" className="underline text-[#D4AF37]">rajaongkir.com</a> | Method: POST | Kode Kurir: "jnt", "jne", "sicepat", "anteraja", "ninja", "pos"
                </li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-2xl p-4 bg-[#081C14]/70 space-y-2">
              <p className="font-bold text-[#D4AF37]">JALUR 2: API RESMI (OFFICIAL DIRECT API)</p>
              <p className="text-xs text-gray-300">Membutuhkan kontrak kerja sama (PKS) atau akun corporate resmi untuk mendapatkan API Key / Credentials.</p>
              <ul className="space-y-2 pt-1 text-xs">
                <li>
                  <strong>1. J&T Express:</strong> Portal Developer <a href="https://jet.co.id" target="_blank" className="underline text-[#D4AF37]">jet.co.id</a> | Method: POST | Content-Type: application/x-www-form-urlencoded | Payload: data_param, sign (MD5), eccode
                </li>
                <li>
                  <strong>2. JNE Express:</strong> Portal Developer <a href="https://jne.co.id" target="_blank" className="underline text-[#D4AF37]">jne.co.id</a> | Method: POST | Modul Tracking | Auth: Username & API Key via Body
                </li>
                <li>
                  <strong>3. SiCepat Ekspres:</strong> Akses B2B Account Manager SiCepat | Format JSON mendokumentasikan Webhook RTO/Gagal Kirim
                </li>
                <li>
                  <strong>4. SPX Express (Shopee Xpress):</strong> Tertutup untuk umum (Eksklusif merchant Shopee). Wajib menggunakan Aggregator (Biteship/TrackingMore)
                </li>
                <li>
                  <strong>5. Ninja Xpress:</strong> Portal <a href="https://ninjaxpress.co" target="_blank" className="underline text-[#D4AF37]">ninjaxpress.co</a> | Method: GET/POST | Fitur Polling Status (Order Created, Picked Up, Completed)
                </li>
                <li>
                  <strong>6. Pos Indonesia:</strong> Melalui kemitraan PosAja! Korporat / Web Service BUMN
                </li>
                <li>
                  <strong>7. GoSend (Instan):</strong> Ekosistem GoBiz Developer / Gojek API | Fitur: <code className="text-[#D4AF37]">shareable_live_tracking_url</code> (Peta GPS Real-time)
                </li>
                <li>
                  <strong>8. GrabExpress (Instan):</strong> GrabExpress Enterprise API | Status Driver (Allocated, Picked Up, Delivered) + Live Tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end">
          <div className="bg-[#0D2B1E] border-l border-[#D4AF37]/40 w-full max-w-md h-full flex flex-col justify-between p-6 overflow-y-auto">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-serif font-bold text-[#D4AF37]">Keranjang Pemesanan</h3>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white text-sm">
                  ✕ Tutup
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-sm text-gray-400 py-8 text-center">Keranjang Anda masih kosong. Silakan pilih paket ECHO Nusantara terlebih dahulu.</p>
              ) : (
                <>
                  <div className="space-y-3">
                    {cart.map((item, idx) => (
                      <div key={`${item.product.id}-${item.variant}`} className="bg-[#081C14] border border-[#D4AF37]/25 p-3.5 rounded-2xl flex justify-between items-center gap-3">
                        <div className="text-xs space-y-1">
                          <p className="font-bold text-white">{item.product.title}</p>
                          <p className="text-[#F3E5AB]">{item.variant}</p>
                          <p className="text-[#D4AF37] font-bold">{formatRupiah(item.product.price * item.quantity)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateCartQty(idx, -1)} className="w-7 h-7 rounded-lg bg-[#163d2a] text-white font-bold">
                            -
                          </button>
                          <span className="text-xs font-bold w-5 text-center">{item.quantity}</span>
                          <button onClick={() => updateCartQty(idx, 1)} className="w-7 h-7 rounded-lg bg-[#D4AF37] text-[#081C14] font-bold">
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleCheckoutWhatsApp} className="space-y-3 pt-3 border-t border-white/10">
                    <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">Data Pengiriman & Checkout</p>
                    <input
                      type="text"
                      required
                      placeholder="Nama Lengkap Penerima"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#081C14] border border-[#D4AF37]/40 rounded-xl px-3.5 py-2.5 text-xs text-white"
                    />
                    <textarea
                      required
                      rows={2}
                      placeholder="Alamat Lengkap (Jalan, Kecamatan, Kota, Kode Pos)"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full bg-[#081C14] border border-[#D4AF37]/40 rounded-xl px-3.5 py-2.5 text-xs text-white"
                    />
                    <select value={courier} onChange={(e) => setCourier(e.target.value)} className="w-full bg-[#081C14] border border-[#D4AF37]/40 rounded-xl px-3.5 py-2.5 text-xs text-white">
                      <option value="Paxel Instant / Same Day (Rekomendasi)">Paxel Instant / Same Day (Rekomendasi)</option>
                      <option value="JNE YES (Yakin Esok Sampai)">JNE YES (Yakin Esok Sampai)</option>
                      <option value="SiCepat BEST">SiCepat BEST</option>
                      <option value="Gosend / GrabExpress Instant">Gosend / GrabExpress Instant</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Catatan Tambahan / Ucapan Hampers (Opsional)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-[#081C14] border border-[#D4AF37]/40 rounded-xl px-3.5 py-2.5 text-xs text-white"
                    />

                    <div className="pt-2">
                      <div className="flex justify-between text-sm font-bold mb-3">
                        <span>Total Tagihan:</span>
                        <span className="text-[#D4AF37] text-lg">{formatRupiah(totalPrice)}</span>
                      </div>
                      <button type="submit" className="w-full bg-gradient-to-r from-[#C9A84C] via-[#F3E5AB] to-[#C9A84C] text-[#081C14] font-extrabold py-3.5 px-5 rounded-xl text-xs shadow-lg">
                        💬 Kirim Pesanan & Invoice ke WhatsApp Official
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
