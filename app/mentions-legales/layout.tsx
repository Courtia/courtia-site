import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Courtia",
  description:
    "Éditeur, immatriculation ORIAS, autorité de contrôle, médiation, protection des données et propriété intellectuelle du site courtia.fr.",
  alternates: { canonical: "/mentions-legales" },
  openGraph: {
    title: "Mentions légales — Courtia",
    description: "Éditeur, immatriculation ORIAS, autorité de contrôle, médiation, protection des données et propriété intellectuelle du site courtia.fr.",
    url: "/mentions-legales",
    type: "website",
    locale: "fr_FR",
    siteName: "Courtia",
    images: [{ url: "/og.jpg", width: 1200, height: 627, alt: "Courtia — votre copilote financier" }],
  },
  twitter: { card: "summary_large_image", title: "Mentions légales — Courtia", description: "Éditeur, immatriculation ORIAS, autorité de contrôle, médiation, protection des données et propriété intellectuelle du site courtia.fr.", images: ["/og.jpg"] },
};

export default function MentionsLegalesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
