import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Courtia",
  description:
    "Éditeur, immatriculation ORIAS, autorité de contrôle, médiation, protection des données et propriété intellectuelle du site courtia.fr.",
};

export default function MentionsLegalesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
