import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs Courtia — Choisissez votre parcours",
  description: "Découvrez les parcours Courtia pour analyser votre profil, obtenir une attestation et préparer votre dossier de prêt.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Tarifs Courtia — Choisissez votre parcours",
    description: "Découvrez les parcours Courtia pour analyser votre profil, obtenir une attestation et préparer votre dossier de prêt.",
    url: "/tarifs",
    type: "website",
    locale: "fr_FR",
    siteName: "Courtia",
    images: [{ url: "/og.jpg", width: 1200, height: 627, alt: "Courtia — votre copilote financier" }],
  },
  twitter: { card: "summary_large_image", title: "Tarifs Courtia — Choisissez votre parcours", description: "Découvrez les parcours Courtia pour analyser votre profil, obtenir une attestation et préparer votre dossier de prêt.", images: ["/og.jpg"] },
};

export default function TarifsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
