import path from "node:path";
import type { NextConfig } from "next";

/**
 * Site vitrine Courtia. Déployé sur Vercel en Next.js standard : l'entrée
 * Cloudflare Worker (worker/index.ts) et la config Vite ne servent qu'à
 * l'ancien hébergement et ne sont pas utilisées ici.
 */
const nextConfig: NextConfig = {
  turbopack: { root: path.resolve(process.cwd()) },
};

export default nextConfig;
