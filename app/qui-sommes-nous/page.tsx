import type { Metadata } from "next";

import { COURTIA_APP_URL, COURTIA_EMAIL, COURTIA_TEL_AFFICHE, COURTIA_TEL_LIEN } from "../site-config";

/**
 * Page restaurée depuis la sauvegarde WordPress du 10/08/2026 — l'histoire de
 * Courtia racontée par son fondateur. Texte d'origine conservé, débarrassé
 * d'un artefact d'édition WordPress (« Un nouveau paragraphe. »).
 */

export const metadata: Metadata = {
  title: "Qui sommes-nous ? — l'histoire de Courtia",
  description:
    "Après 10 ans de courtage en prêts immobiliers, Benjamin Poisson a créé Courtia : une plateforme qui allie l'expertise humaine du courtier et l'efficacité de l'intelligence artificielle, avec bienveillance et transparence.",
  alternates: { canonical: "https://courtia.fr/qui-sommes-nous" },
};

const SOMMAIRE = [
  { id: "histoire", titre: "Pourquoi Courtia a vu le jour" },
  { id: "reinvente", titre: "Le courtage réinventé" },
  { id: "proposition", titre: "Notre proposition unique" },
  { id: "partenariat", titre: "L'option partenariat" },
  { id: "vision", titre: "Notre vision pour demain" },
];

export default function QuiSommesNousPage() {
  return (
    <main className="site-shell legal-page guide-page">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Courtia — accueil"><img className="brand-logo brand-logo-inverse" src="/courtia-logo.png" alt="Courtia" /></a>
        <nav className="nav-links" aria-label="Navigation principale"><a href="/">Accueil</a><a href="/#fonctionnalites">La plateforme</a><a href="/tarifs">Tarifs</a></nav>
        <a className="nav-pro" href="/professionnels">Courtia Pro <span>↗</span></a>
      </header>

      <section className="pricing-hero legal-hero">
        <div className="pricing-hero-grid" />
        <div className="pricing-hero-glow pricing-hero-glow-a" />
        <div className="pricing-hero-glow pricing-hero-glow-b" />
        <div className="section-wrap pricing-hero-inner">
          <span className="eyebrow">Notre histoire</span>
          <h1>Le courtage,<br /><em>réinventé.</em></h1>
          <p>Courtia est née d&apos;un constat simple : les porteurs de projets d&apos;aujourd&apos;hui ne cherchent pas seulement un taux. Ils demandent de l&apos;accompagnement, de la transparence et de la formation.</p>
        </div>
      </section>

      <section className="legal-section">
        <div className="section-wrap legal-layout">
          <aside className="legal-toc" aria-label="Sommaire">
            <span className="eyebrow eyebrow-light">Sommaire</span>
            <ol>
              {SOMMAIRE.map((entree) => (
                <li key={entree.id}><a href={`#${entree.id}`}>{entree.titre}</a></li>
              ))}
            </ol>
          </aside>

          <div className="legal-body">
            <section className="legal-block" id="histoire">
              <h2>Pourquoi Courtia a vu le jour</h2>
              <p>Après <b>10 ans d&apos;expérience en tant que courtier en prêts immobiliers</b>, y compris à la tête de ma propre agence franchisée, j&apos;ai identifié un fossé entre les besoins réels des emprunteurs et les limites du courtage traditionnel. Les porteurs de projets d&apos;aujourd&apos;hui ne cherchent pas seulement un taux ; ils demandent de l&apos;accompagnement, de la transparence et de la formation.</p>
              <p>C&apos;est sur cette base que j&apos;ai créé Courtia : une plateforme conçue à partir d&apos;une feuille blanche, avec la volonté de dépasser les modèles existants et d&apos;intégrer des valeurs fondamentales — <b>bienveillance, transparence et honnêteté</b>.</p>
            </section>

            <section className="legal-block" id="reinvente">
              <h2>L&apos;harmonie entre expertise humaine et intelligence artificielle</h2>
              <p>Le constat est clair : dans l&apos;environnement financier actuel, le courtage, bien qu&apos;essentiel, demeure trop souvent un processus lent, opaque et source de frustration pour l&apos;emprunteur. Les dossiers sont complexes, les délais longs, et l&apos;optimisation des offres est rarement maximale.</p>
              <p>Face à ces défis, Courtia a créé une solution qui réinvente le modèle : l&apos;harmonie entre <b>l&apos;art traditionnel du courtage immobilier</b> et <b>l&apos;efficacité de l&apos;intelligence artificielle</b>.</p>
            </section>

            <section className="legal-block" id="proposition">
              <h2>Notre proposition unique</h2>
              <p>Nous avons conçu Courtia pour être une plateforme complète d&apos;autonomisation et de conseil :</p>
              <ul>
                <li><b>Coaching &amp; formation</b> — des informations claires, des conseils personnalisés et de la pédagogie pour décrypter le jargon bancaire et maîtriser votre budget.</li>
                <li><b>Outils d&apos;aide à la décision</b> — réalisez vos simulations, obtenez une <a href="/tarifs">attestation de financement</a> pour sécuriser vos offres d&apos;achat, et apprenez à monter un dossier impeccable, jusqu&apos;à la note de synthèse.</li>
                <li><b>Transparence &amp; communauté</b> — échangez avec d&apos;autres emprunteurs pour des retours d&apos;expérience et une entraide précieuse.</li>
              </ul>
            </section>

            <section className="legal-block" id="partenariat">
              <h2>L&apos;option partenariat</h2>
              <p>Si le temps vous manque ou si la complexité du dossier l&apos;exige, Courtia vous offre la flexibilité :</p>
              <ul>
                <li>d&apos;être mis en relation avec un <b>courtier partenaire</b> qui prendra le relais du démarchage bancaire ;</li>
                <li>d&apos;accéder à notre réseau d&apos;<b>assureurs</b> et de <b>conseillers en gestion de patrimoine</b>.</li>
              </ul>
            </section>

            <section className="legal-block" id="vision">
              <h2>Notre vision pour demain</h2>
              <p>Notre ambition est claire : faire de Courtia la plateforme incontournable pour tout emprunteur. Nous la voyons grandir, devenir une application mobile de gestion budgétaire et, surtout, rester fidèle à sa mission initiale : <b>conseiller, accompagner, faciliter l&apos;échange</b> et optimiser chaque projet pour le succès de nos utilisateurs.</p>
              <p className="guide-actions">
                <a className="button button-primary" href={COURTIA_APP_URL}>Commencer mon projet avec Courtia</a>
                <a className="button" href="/professionnels">Vous êtes un professionnel ?</a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="section-wrap footer-top"><a className="brand" href="/"><img className="brand-logo" src="/courtia-logo.png" alt="Courtia" /></a><p>Courtia, le copilote de votre financement.</p><nav><a href="/">Particuliers</a><a href="/tarifs">Tarifs</a><a href="/prets-immobiliers">Prêt immobilier</a><a href="/assurance-de-pret">Assurance de prêt</a><a href="/mentions-legales">Mentions légales</a></nav></div><div className="section-wrap footer-bottom"><span>© 2026 Courtia</span><span>RGPD · IA Act · Chiffrement</span><span className="footer-contact"><a href={"mailto:" + COURTIA_EMAIL}>{COURTIA_EMAIL}</a><i /><a href={COURTIA_TEL_LIEN}>{COURTIA_TEL_AFFICHE}</a></span></div></footer>
    </main>
  );
}
