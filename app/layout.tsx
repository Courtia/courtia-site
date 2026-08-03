import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Courtia — Avant la banque, il y a Courtia",
  description: "L’outil IA pour comprendre votre profil, préparer votre dossier et sécuriser votre projet avant la décision de la banque.",
  metadataBase: new URL("https://courtia.fr"),
  openGraph: {
    title: "Courtia — Avant la banque, il y a Courtia",
    description: "L’outil IA pour comprendre votre profil, préparer votre dossier et sécuriser votre projet avant la décision de la banque.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Courtia — Avant la banque, il y a Courtia",
    description: "L’outil IA pour comprendre votre profil, préparer votre dossier et sécuriser votre projet avant la décision de la banque.",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
