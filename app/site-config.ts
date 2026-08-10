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
 * ⚠️ pro.courtia.fr existe et répond, mais sert aujourd'hui exactement la même
 * page que app.courtia.fr : l'espace pro n'a pas encore de route dédiée dans
 * l'application. Envoyer un agent sur pro.courtia.fr lui afficherait l'écran de
 * connexion emprunteur — autant l'envoyer sur l'adresse honnête. À basculer sur
 * "https://pro.courtia.fr" le jour où la route /pro existe.
 */
export const COURTIA_PRO_URL = COURTIA_APP_URL;

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
