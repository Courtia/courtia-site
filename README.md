# Site vitrine Courtia

Le site public de **Courtia** — courtier en crédit immobilier (EURL LB FINANCE).
Application [Next.js](https://nextjs.org) 16, trois pages statiques :

| Page | Fichier | Contenu |
| --- | --- | --- |
| `/` | `app/page.tsx` | Accueil, offre acquéreurs |
| `/professionnels` | `app/professionnels/page.tsx` | Offre agents immobiliers |
| `/tarifs` | `app/tarifs/page.tsx` | Grille tarifaire |

## Démarrer en local

```bash
npm install
npm run dev
```

Le site tourne alors sur http://localhost:3000.

Pour vérifier qu'il compile comme sur Vercel :

```bash
npm run build
```

La sortie attendue est de **3 pages statiques**.

## Déploiement

Hébergé sur **Vercel**, projet `courtia-landing` (équipe `courtia1`), domaine de
production `courtia.fr`.

Le projet Vercel est connecté à ce dépôt : **tout commit poussé sur `main` est
publié automatiquement**. Une branche autre que `main` génère un déploiement de
prévisualisation, avec sa propre URL, sans toucher au site public.

## Ce qui n'est pas utilisé

Ce dépôt vient d'un modèle prévu pour Cloudflare Workers. Ces éléments sont des
vestiges, conservés sans être utilisés par le site ni par la compilation :

- `worker/`, `vite.config.ts`, `wrangler` — l'ancien mode d'hébergement
- `db/`, `drizzle/`, `drizzle.config.ts`, `examples/` — une base de données
  jamais branchée
- `app/chatgpt-auth.ts` — un système de connexion du modèle d'origine

Le fichier `types/cloudflare-runtime.d.ts` doit rester une déclaration
**ambiante** : n'y ajouter ni `import` ni `export`, sinon la compilation
TypeScript échoue.

## Les autres briques de Courtia

Ce dépôt ne contient **que la vitrine**. L'application (dossier emprunteur,
passeport acquéreur, espace pro) vit dans le dépôt `Courtia/Courtia`.
