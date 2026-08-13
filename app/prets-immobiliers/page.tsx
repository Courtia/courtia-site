import type { Metadata } from "next";

import { COURTIA_APP_URL, COURTIA_EMAIL, COURTIA_TEL_AFFICHE, COURTIA_TEL_LIEN } from "../site-config";

/**
 * Page de contenu restaurée depuis l'ancien site WordPress (sauvegarde du
 * 10/08/2026) : c'était, avec /assurance-de-pret et /qui-sommes-nous, tout le
 * référencement hors marque de Courtia. Le texte d'origine est conservé,
 * nettoyé des fragments du simulateur WordPress ; l'appel à l'action renvoie
 * vers le simulateur de l'application.
 */

export const metadata: Metadata = {
  title: "Le prêt immobilier — comprendre et maîtriser votre financement | Courtia",
  description:
    "Capital, TAEG, durée, mensualités, PTZ, taux d'endettement, reste à vivre : le fonctionnement du prêt immobilier expliqué simplement par Courtia, courtier immatriculé ORIAS.",
  alternates: { canonical: "https://courtia.fr/prets-immobiliers" },
};

const SOMMAIRE = [
  { id: "fonctionnement", titre: "Comment fonctionne l'emprunt" },
  { id: "types", titre: "Les différents types de prêts" },
  { id: "capacite", titre: "Combien pouvez-vous emprunter ?" },
  { id: "assurance", titre: "L'importance de l'assurance" },
  { id: "simuler", titre: "Simuler votre prêt" },
];

export default function PretsImmobiliersPage() {
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
          <span className="eyebrow">Le prêt immobilier</span>
          <h1>Comprendre et maîtriser<br /><em>votre financement.</em></h1>
          <p>Le prêt immobilier est l&apos;outil qui permet à la grande majorité des ménages de concrétiser l&apos;achat d&apos;une résidence principale, secondaire ou d&apos;un investissement locatif. Un crédit à long terme, strictement réglementé, dont le fonctionnement repose sur quelques piliers essentiels.</p>
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
            <section className="legal-block" id="fonctionnement">
              <h2>Comment fonctionne l&apos;emprunt immobilier ?</h2>
              <p>Le prêt est caractérisé par plusieurs éléments qui définissent son coût et sa durée :</p>
              <ul>
                <li><b>Le capital emprunté</b> — la somme que la banque met à votre disposition pour financer votre bien.</li>
                <li><b>Le taux d&apos;intérêt (TAEG)</b> — exprimé en pourcentage, c&apos;est la rémunération de la banque. Le Taux Annuel Effectif Global inclut le taux nominal du prêt, mais aussi les frais de dossier, le coût de l&apos;assurance et d&apos;éventuels frais annexes. C&apos;est <b>l&apos;indicateur clé pour comparer les offres</b>.</li>
                <li><b>La durée de remboursement</b> — généralement 15, 20 ou 25 ans. Plus la durée est longue, plus le coût total du crédit augmente.</li>
                <li><b>Les mensualités</b> — le montant fixe que vous remboursez chaque mois, incluant une part de capital et une part d&apos;intérêts.</li>
              </ul>
            </section>

            <section className="legal-block" id="types">
              <h2>Les différents types de prêts</h2>
              <p>Si le prêt amortissable classique est le plus courant, d&apos;autres dispositifs peuvent être mobilisés, souvent en complément, pour optimiser votre financement :</p>
              <ul>
                <li><b>Prêt amortissable</b> — le capital et les intérêts sont remboursés progressivement.</li>
                <li><b>Prêt à Taux Zéro (PTZ)</b> — aide de l&apos;État pour les primo-accédants, sous conditions de ressources et de zone géographique. Il finance une partie de l&apos;achat sans intérêt.</li>
                <li><b>Prêt Épargne Logement (PEL / CEL)</b> — permet d&apos;obtenir un prêt à un taux fixé lors de l&apos;ouverture du plan d&apos;épargne.</li>
              </ul>
            </section>

            <section className="legal-block" id="capacite">
              <h2>Quel montant maximum pouvez-vous emprunter ?</h2>
              <p>Pour déterminer votre capacité d&apos;emprunt, les banques se basent principalement sur :</p>
              <ul>
                <li><b>Votre taux d&apos;endettement</b> — il ne doit généralement pas dépasser <b>35 % de vos revenus nets</b>, assurance de prêt comprise.</li>
                <li><b>Votre reste à vivre</b> — le montant restant après le paiement de toutes vos charges, jugé suffisant pour couvrir les dépenses courantes.</li>
              </ul>
              <div className="legal-note">
                <b>Le réflexe Courtia</b>
                <p>Ces deux critères sont exactement ceux que le Score Courtia analyse en continu dans votre espace : vous savez où vous en êtes avant même de rencontrer une banque.</p>
              </div>
            </section>

            <section className="legal-block" id="assurance">
              <h2>L&apos;importance cruciale de l&apos;assurance</h2>
              <p>Bien que l&apos;assurance de prêt ne soit pas intégrée au prêt en lui-même, elle en est une condition sine qua non. Elle protège votre famille et l&apos;établissement prêteur en garantissant le remboursement de l&apos;emprunt en cas de décès, d&apos;invalidité ou d&apos;incapacité de travail.</p>
              <p>Aujourd&apos;hui, grâce à la <b>loi Lemoine</b>, vous avez la liberté de choisir l&apos;assurance la plus compétitive du marché (délégation d&apos;assurance) plutôt que l&apos;offre standard de votre banque (assurance groupe). Nous y consacrons un guide complet : <a href="/assurance-de-pret">l&apos;assurance emprunteur</a>.</p>
              <p>Comparer les offres de crédit et négocier le TAEG le plus bas est essentiel pour maîtriser le coût total de votre projet immobilier.</p>
            </section>

            <section className="legal-block" id="simuler">
              <h2>Prêt à concrétiser votre achat ?</h2>
              <p>Simulez votre prêt immobilier pour découvrir votre capacité d&apos;emprunt, votre mensualité et votre taux d&apos;endettement — gratuitement, dans l&apos;application Courtia.</p>
              <p className="guide-actions">
                <a className="button button-primary" href={COURTIA_APP_URL}>Simuler mon prêt immobilier</a>
                <a className="button" href="/tarifs">Voir nos offres</a>
              </p>
              <p><small>Simulation à titre indicatif, basée sur un remboursement à échéances constantes. Un crédit vous engage et doit être remboursé : vérifiez vos capacités de remboursement avant de vous engager.</small></p>
            </section>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="section-wrap footer-top"><a className="brand" href="/"><img className="brand-logo" src="/courtia-logo.png" alt="Courtia" /></a><p>Courtia, le copilote de votre financement.</p><nav><a href="/">Particuliers</a><a href="/tarifs">Tarifs</a><a href="/assurance-de-pret">Assurance de prêt</a><a href="/qui-sommes-nous">Qui sommes-nous ?</a><a href="/mentions-legales">Mentions légales</a></nav></div><div className="section-wrap footer-bottom"><span>© 2026 Courtia</span><span>RGPD · IA Act · Chiffrement</span><span className="footer-contact"><a href={"mailto:" + COURTIA_EMAIL}>{COURTIA_EMAIL}</a><i /><a href={COURTIA_TEL_LIEN}>{COURTIA_TEL_AFFICHE}</a></span></div></footer>
    </main>
  );
}
