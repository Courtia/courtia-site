import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Courtia — Votre projet immobilier, accompagné de A à Z",
  description: "La plateforme IA qui accompagne les emprunteurs et les professionnels à chaque étape du financement immobilier.",
  metadataBase: new URL("https://courtia.fr"),
  openGraph: {
    title: "Courtia — Votre projet immobilier, accompagné de A à Z",
    description: "La plateforme IA qui accompagne les emprunteurs et les professionnels à chaque étape du financement immobilier.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Courtia — Votre projet immobilier, accompagné de A à Z",
    description: "La plateforme IA qui accompagne les emprunteurs et les professionnels à chaque étape du financement immobilier.",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
