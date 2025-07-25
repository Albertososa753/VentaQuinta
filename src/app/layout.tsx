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
  metadataBase: new URL("https://venta-quinta.vercel.app"),
  title: "Quinta San Nicolás en Venta - Dueño Directo",
  description:
    "Quinta en San Nicolás de los Arroyos. Dueño directo, pileta, galería cerrada, parque amplio, apta crédito. Excelente oportunidad sin intermediarios.",
  keywords: [
    "quinta san nicolas",
    "quinta san nicolas dueño directo",
    "venta quinta san nicolas",
    "dueño directo quinta san nicolas",
    "quinta con pileta san nicolas",
  ],
  openGraph: {
    title: "Quinta en San Nicolás de los Arroyos a la Venta - Dueño Directo",
    description:
      "Quinta en San Nicolás de los Arroyos. Dueño directo, pileta, galería cerrada, apta crédito. Oportunidad única sin intermediarios.",
    url: "https://venta-quinta.vercel.app",
    siteName: "Quinta San Nicolás en Venta", // Esto reemplaza "Vercel"
    images: [
      {
        url: "https://venta-quinta.vercel.app/images/principal14.jpg",
        width: 1200,
        height: 630,
        alt: "Quinta en San Nicolás de los Arroyos en Venta",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  verification: {
    google: "0TGkKSIGTn_Zw6It3mBplTGrqZ3B8vy8EVDhA2UQqjU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
