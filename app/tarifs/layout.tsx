import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs Courtia — Choisissez votre parcours",
  description: "Découvrez les parcours Courtia pour analyser votre profil, obtenir une attestation et préparer votre dossier de prêt.",
};

export default function TarifsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
