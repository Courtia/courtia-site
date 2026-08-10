import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courtia Pro — Préparez vos acquéreurs, sécurisez vos ventes",
  description: "Courtia aide les professionnels de l’immobilier à préparer leurs acquéreurs et à suivre chaque projet avant la vente.",
  alternates: { canonical: "/professionnels" },
  openGraph: {
    title: "Courtia Pro — Préparez vos acquéreurs, sécurisez vos ventes",
    description: "Courtia aide les professionnels de l’immobilier à préparer leurs acquéreurs et à suivre chaque projet avant la vente.",
    url: "/professionnels",
    type: "website",
    locale: "fr_FR",
    siteName: "Courtia",
    images: [{ url: "/og.jpg", width: 1200, height: 627, alt: "Courtia — votre copilote financier" }],
  },
  twitter: { card: "summary_large_image", title: "Courtia Pro — Préparez vos acquéreurs, sécurisez vos ventes", description: "Courtia aide les professionnels de l’immobilier à préparer leurs acquéreurs et à suivre chaque projet avant la vente.", images: ["/og.jpg"] },
};

export default function ProfessionalsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
