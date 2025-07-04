import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quinta San Nicolás en Venta - Dueño Directo",
  description: "Quinta en San Nicolás de los Arroyos. Dueño directo, pileta, galería cerrada, parque amplio, apta crédito. Excelente oportunidad sin intermediarios.",
  keywords: [
    "quinta san nicolas",
    "quinta san nicolas dueño directo",
    "venta quinta san nicolas",
    "dueño directo quinta san nicolas",
    "quinta con pileta san nicolas"
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
