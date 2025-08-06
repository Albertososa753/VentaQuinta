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
  title: "Casa Quinta en Buena Ubicación - San Nicolás | Dueño Directo",
  description:
    "Casa quinta en venta en San Nicolás de los Arroyos. Excelente ubicación en zona residencial muy iluminada. Apta para vivienda permanente. Dueño directo, sin comisiones.",
  keywords: [
    "quinta buena ubicación san nicolas de los arroyos",
    "casa quinta apta para vivienda permanente san nicolas",
    "quinta san nicolas en venta",
    "venta quinta san nicolas",
    "quinta con pileta san nicolas",
    "quinta dueño directo",
    "quinta barrio los cedros san nicolas",
  ],
  openGraph: {
    title: "Quinta en San Nicolás - Buena Ubicación y Apta Vivienda | Dueño Directo",
    description:
      "Casa quinta en venta en barrio Los Cedros, San Nicolás. Excelente ubicación, ideal para vivienda permanente. Dueño directo, sin comisiones.",
    url: "https://venta-quinta.vercel.app",
    siteName: "Venta Quinta San Nicolás",
    images: [
      {
        url: "https://venta-quinta.vercel.app/images/principal14.jpg",
        width: 1200,
        height: 630,
        alt: "Casa quinta con pileta en San Nicolás de los Arroyos",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
