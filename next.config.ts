import path from "node:path";
import type { NextConfig } from "next";

/**
 * Site vitrine Courtia. Déployé sur Vercel en Next.js standard : l'entrée
 * Cloudflare Worker (worker/index.ts) et la config Vite ne servent qu'à
 * l'ancien hébergement et ne sont pas utilisées ici.
 */
const nextConfig: NextConfig = {
  turbopack: { root: path.resolve(process.cwd()) },

  /**
   * Le site WordPress que cette landing remplace avait neuf pages indexées par
   * Google. Sans ces règles, huit d'entre elles renverraient une page d'erreur
   * le jour de la bascule DNS.
   *
   * Les adresses de départ s'écrivent sans barre oblique finale : Next.js la
   * retire lui-même avant d'appliquer la règle, donc /qui-sommes-nous/ est bien
   * couvert. `permanent: true` produit un code 308, que Google traite comme un
   * 301 — le référencement est transféré.
   *
   * /mentions-legales est volontairement absent : cette page est recréée à
   * l'identique plutôt que redirigée, ce qui conserve son ancienneté.
   */
  async redirects() {
    return [
      // La seule correspondance directe : l'espace partenaire devient l'espace pro.
      { source: "/espace-partenaire", destination: "/professionnels", permanent: true },

      // Pages éditoriales sans équivalent aujourd'hui. À recréer aux mêmes
      // adresses pour récupérer le référencement — retirer ces lignes ce jour-là.
      { source: "/qui-sommes-nous", destination: "/", permanent: true },
      { source: "/prets-immobiliers", destination: "/", permanent: true },
      { source: "/assurance-de-pret", destination: "/", permanent: true },

      // Simulateurs supprimés.
      { source: "/simulateur-de-credit", destination: "/", permanent: true },
      { source: "/simulateur-dassurance", destination: "/", permanent: true },

      // Ancienne page Contact.
      { source: "/prendre-un-rendez-vous", destination: "/#contact", permanent: true },

      // Filet de sécurité : adresses qui appartiennent à l'application mais que
      // des liens déjà diffusés portent sous courtia.fr — QR code des passeports
      // acquéreur, liens d'affiliation des agents. Ces PDF ne pourront jamais
      // être corrigés : ces règles sont le seul moyen de les rattraper.
      { source: "/verifier/:path*", destination: "https://app.courtia.fr/verifier/:path*", permanent: true },
      { source: "/r/:path*", destination: "https://app.courtia.fr/r/:path*", permanent: true },
      { source: "/p/:path*", destination: "https://app.courtia.fr/p/:path*", permanent: true },
      { source: "/dossier/:path*", destination: "https://app.courtia.fr/dossier/:path*", permanent: true },

      // Reliquats WordPress encore déclarés dans l'ancien HTML.
      { source: "/feed", destination: "/", permanent: true },
      { source: "/comments/feed", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
