import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courtia Pro — Préparez vos acquéreurs, sécurisez vos ventes",
  description: "Courtia aide les professionnels de l’immobilier à préparer leurs acquéreurs et à suivre chaque projet avant la vente.",
};

export default function ProfessionalsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
