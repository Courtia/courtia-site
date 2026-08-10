/**
 * Les adresses et coordonnées du site, regroupées ici pour n'avoir qu'un seul
 * endroit à modifier. Elles étaient auparavant recopiées dans trois pages, avec
 * des valeurs qui avaient déjà divergé.
 *
 * Une seule ligne à changer ici met à jour tous les boutons du site.
 */

/** L'application emprunteurs : diagnostic, passeport acquéreur, dossier. */
export const COURTIA_APP_URL = "https://app.courtia.fr";

/**
 * L'espace agents immobiliers.
 *
 * Il pointait sur `app.courtia.fr` faute de mieux : `pro.courtia.fr` répondait,
 * mais servait la même page que l'espace emprunteur, et un agent y arrivait sur
 * « Retrouvez votre dossier ». Depuis le 12/08/2026 l'espace agent existe pour
 * de bon — connexion pro, acquéreurs, liens d'invitation, outils, conformité —
 * et le bouton mène enfin là où son libellé le promet.
 */
export const COURTIA_PRO_URL = "https://pro.courtia.fr";

/** Coordonnées publiques, identiques à celles des mentions légales. */
export const COURTIA_EMAIL = "bpoisson@courtia.fr";
export const COURTIA_TEL_AFFICHE = "06 17 94 49 58";
export const COURTIA_TEL_LIEN = "tel:+33617944958";

/** Lien de contact des professionnels, pré-rempli pour arriver identifiable. */
export const COURTIA_CONTACT_PRO = `mailto:${COURTIA_EMAIL}?subject=${encodeURIComponent(
  "Courtia Pro — demande de démonstration",
)}&body=${encodeURIComponent(
  [
    "Bonjour,",
    "",
    "Je souhaite découvrir Courtia Pro pour mon agence.",
    "",
    "Nom :",
    "Agence :",
    "Téléphone :",
    "",
    "Merci.",
  ].join("\n"),
)}`;
