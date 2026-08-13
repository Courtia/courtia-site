import type { Metadata } from "next";

import { COURTIA_APP_URL, COURTIA_EMAIL, COURTIA_TEL_AFFICHE, COURTIA_TEL_LIEN } from "../site-config";

/**
 * Page restaurée depuis la sauvegarde WordPress du 10/08/2026. Le tableau
 * comparatif, illisible dans l'export texte, est reconstruit en vrai tableau.
 */

export const metadata: Metadata = {
  title: "L'assurance emprunteur — le bouclier de votre crédit immobilier | Courtia",
  description:
    "Décès, PTIA, invalidité, incapacité : ce que couvre l'assurance de prêt, la différence entre assurance groupe et délégation, et la liberté de changer à tout moment grâce à la loi Lemoine.",
  alternates: { canonical: "https://courtia.fr/assurance-de-pret" },
};

const SOMMAIRE = [
  { id: "fonctions", titre: "Ses fonctions essentielles" },
  { id: "groupe-delegation", titre: "Groupe ou délégation ?" },
  { id: "loi-lemoine", titre: "Changer à tout moment" },
  { id: "equivalence", titre: "L'équivalence des garanties" },
  { id: "optimiser", titre: "Optimiser votre assurance" },
];

export default function AssuranceDePretPage() {
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
          <span className="eyebrow">L&apos;assurance emprunteur</span>
          <h1>Le bouclier de votre<br /><em>crédit immobilier.</em></h1>
          <p>L&apos;assurance de prêt sécurise votre investissement et protège l&apos;avenir financier de votre foyer face aux aléas de la vie. La loi ne l&apos;impose pas directement — mais les banques la jugent indispensable, et elle peut représenter plus de 30 % du coût total de votre crédit.</p>
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
            <p className="legal-intro">Son rôle principal : prendre le relais du paiement de vos mensualités, ou rembourser le capital restant dû à la banque, si vous êtes confronté à un événement grave.</p>

            <section className="legal-block" id="fonctions">
              <h2>Ses fonctions essentielles</h2>
              <p>L&apos;assurance de prêt intervient pour couvrir les risques majeurs :</p>
              <ul>
                <li><b>Décès</b> — l&apos;assurance rembourse la totalité du capital restant dû à la banque, déchargeant vos héritiers de toute responsabilité financière.</li>
                <li><b>Perte Totale et Irrémédiable d&apos;Autonomie (PTIA)</b> — en cas d&apos;incapacité totale et définitive à accomplir les actes de la vie quotidienne, l&apos;assurance couvre le solde du prêt.</li>
                <li><b>Invalidité (IPT / IPP) et Incapacité de Travail (ITT)</b> — elle prend en charge vos mensualités lorsque la maladie ou un accident vous empêche, de façon temporaire ou permanente, d&apos;exercer votre activité professionnelle.</li>
                <li><b>Garantie Perte d&apos;Emploi</b> — optionnelle, elle assure la continuité des paiements en cas de perte involontaire d&apos;emploi.</li>
              </ul>
            </section>

            <section className="legal-block" id="groupe-delegation">
              <h2>Assurance groupe ou délégation d&apos;assurance ?</h2>
              <p>Vous avez le choix entre deux types de contrats :</p>
              <div className="guide-table-wrap">
                <table className="guide-table">
                  <thead>
                    <tr><th scope="col" /><th scope="col">Assurance groupe<small>le contrat de la banque</small></th><th scope="col">Délégation d&apos;assurance<small>un contrat externe</small></th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Le principe</th>
                      <td>Contrat unique et standardisé, qui mutualise les risques de tous les assurés de la banque. Facile à souscrire, couverture générique.</td>
                      <td>Contrat souscrit auprès d&apos;un assureur externe, personnalisé selon votre profil : âge, santé, profession.</td>
                    </tr>
                    <tr>
                      <th scope="row">Profils favorisés</th>
                      <td>Profils standards, sans risques médicaux ou professionnels particuliers.</td>
                      <td>Profils « atypiques », jeunes, sportifs, non-fumeurs — et tous ceux qui cherchent le meilleur prix et des garanties sur-mesure.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="legal-note">
                <b>Bon à savoir</b>
                <p>L&apos;assurance peut représenter plus de 30 % du coût total de votre crédit. Une assurance externe et personnalisée peut vous faire réaliser d&apos;importantes économies — jusqu&apos;à 10 000 € sur la durée du prêt.</p>
              </div>
            </section>

            <section className="legal-block" id="loi-lemoine">
              <h2>Changer d&apos;assurance de prêt : une liberté totale</h2>
              <p>Grâce à la <b>loi Lemoine</b>, entrée en vigueur en septembre 2022, vous n&apos;êtes plus contraint par les dates anniversaires des lois Hamon et Bourquin :</p>
              <ul>
                <li><b>Résiliez à tout moment</b> — vous pouvez changer de contrat d&apos;assurance de prêt à n&apos;importe quel moment de la vie de votre crédit, sans frais ni justification.</li>
              </ul>
            </section>

            <section className="legal-block" id="equivalence">
              <h2>La règle d&apos;or : l&apos;équivalence des garanties</h2>
              <p>La seule condition pour changer est le respect de l&apos;équivalence des garanties : votre nouveau contrat doit offrir des garanties au moins équivalentes à celles exigées initialement par votre banque. Un expert doit s&apos;assurer que les critères essentiels sont respectés, notamment :</p>
              <ul>
                <li><b>Caractère forfaitaire ou indemnitaire</b> — privilégiez un contrat forfaitaire, qui garantit un niveau de remboursement constant, quelle que soit l&apos;évolution de vos revenus au moment du sinistre.</li>
                <li><b>Délai de franchise</b> — la période (souvent 60 ou 90 jours) pendant laquelle l&apos;assurance ne vous couvre pas en cas d&apos;incapacité de travail. Une franchise courte est souvent plus protectrice.</li>
                <li><b>Détermination de l&apos;incapacité</b> — la meilleure garantie couvre l&apos;incapacité par rapport à <b>votre profession</b> exercée au moment du sinistre, et non par rapport à « toute profession ».</li>
              </ul>
            </section>

            <section className="legal-block" id="optimiser">
              <h2>Vous souhaitez optimiser le coût de votre assurance ?</h2>
              <p>Changer d&apos;assurance est la démarche la plus efficace pour réduire le coût global de votre prêt. Besoin d&apos;aide pour évaluer les garanties et trouver le contrat le mieux adapté à votre situation ?</p>
              <p className="guide-actions">
                <a className="button button-primary" href={COURTIA_APP_URL}>Analyser mon projet avec Courtia</a>
                <a className="button" href="/prets-immobiliers">Comprendre le prêt immobilier</a>
              </p>
              <p><small>Courtia est courtier en assurance immatriculé à l&apos;ORIAS sous le n° 20002802. Un crédit vous engage et doit être remboursé : vérifiez vos capacités de remboursement avant de vous engager.</small></p>
            </section>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="section-wrap footer-top"><a className="brand" href="/"><img className="brand-logo" src="/courtia-logo.png" alt="Courtia" /></a><p>Courtia, le copilote de votre financement.</p><nav><a href="/">Particuliers</a><a href="/tarifs">Tarifs</a><a href="/prets-immobiliers">Prêt immobilier</a><a href="/qui-sommes-nous">Qui sommes-nous ?</a><a href="/mentions-legales">Mentions légales</a></nav></div><div className="section-wrap footer-bottom"><span>© 2026 Courtia</span><span>RGPD · IA Act · Chiffrement</span><span className="footer-contact"><a href={"mailto:" + COURTIA_EMAIL}>{COURTIA_EMAIL}</a><i /><a href={COURTIA_TEL_LIEN}>{COURTIA_TEL_AFFICHE}</a></span></div></footer>
    </main>
  );
}
