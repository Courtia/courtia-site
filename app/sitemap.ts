import type { MetadataRoute } from "next";

/**
 * Plan du site pour les moteurs — il n'existait pas (404). Les trois pages de
 * guide recréées le 13/08/2026 portent tout le référencement hors marque :
 * c'est d'abord pour elles que ce fichier existe.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://courtia.fr";
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/tarifs`, priority: 0.9 },
    { url: `${base}/prets-immobiliers`, priority: 0.8 },
    { url: `${base}/assurance-de-pret`, priority: 0.8 },
    { url: `${base}/qui-sommes-nous`, priority: 0.7 },
    { url: `${base}/professionnels`, priority: 0.7 },
    { url: `${base}/mentions-legales`, priority: 0.3 },
  ];
}
