import React from "react";
import "./globals.css";

export const metadata = {
  title: "ECHO Nusantara — Ultra-Luxury Bird's Nest E-Commerce (Official Partner RN.CURATED)",
  description: "100% Pure Bird's Nest Drink 70ml & Dry Bird's Nest AAA Grade Excellence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-[#081C14] text-white antialiased">{children}</body>
    </html>
  );
}
