import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Courtia — Votre crédit. Vos règles.",
  description: "Le copilote intelligent qui vous aide à comprendre, décider et réussir votre projet immobilier.",
  metadataBase: new URL("https://courtia.fr"),
  openGraph: {
    title: "Courtia — Votre crédit. Vos règles.",
    description: "Le copilote intelligent qui vous aide à comprendre, décider et réussir votre projet immobilier.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Courtia — Votre crédit. Vos règles." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Courtia — Votre crédit. Vos règles.",
    description: "Le copilote intelligent qui vous aide à comprendre, décider et réussir votre projet immobilier.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
