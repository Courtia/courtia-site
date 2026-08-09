/**
 * Vestiges du modèle Cloudflare : db/ et worker/ ne sont pas utilisés par le
 * site vitrine (toutes les pages sont côté navigateur). Ces déclarations
 * ambiantes permettent au contrôle de types de passer lors d'un build Next
 * standard, sur Vercel comme en local. Aucun `import`/`export` ici : le
 * fichier doit rester global pour que la déclaration de module s'applique.
 */
declare module "cloudflare:workers" {
  export const env: { DB: D1Database } & Record<string, unknown>;
}

interface D1Database {
  prepare(query: string): unknown;
}

interface Fetcher {
  fetch(request: Request): Promise<Response>;
}
