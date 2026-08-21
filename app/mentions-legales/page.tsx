import { COURTIA_EMAIL, COURTIA_TEL_AFFICHE, COURTIA_TEL_LIEN } from "../site-config";

const SOMMAIRE = [
  { id: "editeur", titre: "Éditeur du site" },
  { id: "activites", titre: "Activités réglementées et contrôle" },
  { id: "garantie", titre: "Garantie financière et versements" },
  { id: "remuneration", titre: "Rémunération de Courtia" },
  { id: "retractation", titre: "Droit de rétractation" },
  { id: "reclamations", titre: "Réclamations et médiation" },
  { id: "donnees", titre: "Données personnelles" },
  { id: "propriete", titre: "Propriété intellectuelle" },
  { id: "liens", titre: "Liens vers d'autres sites" },
  { id: "hebergement", titre: "Hébergement du site" },
];

export default function MentionsLegalesPage() {
  return (
    <main className="site-shell legal-page">
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
          <span className="eyebrow">Informations réglementaires</span>
          <h1>Mentions<br /><em>légales.</em></h1>
          <p>Qui édite ce site, sous quel contrôle Courtia exerce, comment vos données sont traitées et comment nous saisir en cas de désaccord.</p>
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
            <p className="legal-intro">Ces mentions légales s&apos;appliquent au site internet <b>courtia.fr</b>. En poursuivant votre visite, vous acceptez de respecter les conditions décrites ci-dessous.</p>

            <section className="legal-block" id="editeur">
              <h2>Éditeur du site</h2>
              <dl className="legal-key">
                {/* « Courtia, EURL » nommait une société qui n'existe pas : Courtia
                    est le nom commercial, LB FINANCE la raison sociale. C'est la
                    personne morale qui engage sa responsabilité, pas la marque. */}
                <div><dt>Société</dt><dd>LB FINANCE, EURL au capital social de 3 000 €</dd></div>
                <div><dt>Nom commercial</dt><dd>Courtia</dd></div>
                <div><dt>Siège social</dt><dd>19 rue de la pièce du camp, 17300 Vergeroux</dd></div>
                {/* Numéro confirmé par Benjamin le 11/08/2026 : le SIRET du siège se
                    termine bien par 00022. Une seule ligne, comme il l'a demandé. */}
                <div><dt>Immatriculation</dt><dd>SIRET 882 216 559 00022 — RCS La Rochelle</dd></div>
                <div><dt>Téléphone</dt><dd><a href="tel:+33617944958">06 17 94 49 58</a></dd></div>
                <div><dt>Courriel</dt><dd><a href="mailto:bpoisson@courtia.fr">bpoisson@courtia.fr</a></dd></div>
                <div><dt>Directeur de la publication</dt><dd>Benjamin Poisson, gérant</dd></div>
              </dl>
            </section>

            <section className="legal-block" id="activites">
              <h2>Activités réglementées et contrôle</h2>
              <p>Courtia exerce ses activités sous le contrôle de l&apos;<b>ACPR</b> (Autorité de contrôle prudentiel et de résolution), 4 place de Budapest, 75436 Paris Cedex 09 — <a href="https://acpr.banque-france.fr/" rel="noreferrer noopener" target="_blank">acpr.banque-france.fr</a>.</p>
              <p>Courtia est immatriculée au registre de l&apos;<b>ORIAS sous le n° 20002802</b> (<a href="https://www.orias.fr" rel="noreferrer noopener" target="_blank">www.orias.fr</a>), en tant que :</p>
              <ul>
                <li><b>Crédit immobilier</b> — courtier en opérations de banque et services de paiement</li>
                <li><b>Crédit professionnel</b> — courtier en opérations de banque et services de paiement</li>
                <li><b>Regroupement de crédits</b> — mandataire non exclusif en opérations de banque et services de paiement</li>
                <li><b>Assurance de prêt</b> — courtier en assurance</li>
              </ul>
              <p>Courtia est soumise au Code monétaire et financier en tant qu&apos;intermédiaire en opérations de banque et services de paiement, et au Code des assurances en tant qu&apos;intermédiaire en assurance.</p>
              <p>Courtia est membre de l&apos;association professionnelle <b>Courtensia</b>, Jaurès, 47000 Agen — <a href="https://www.courtensia.fr" rel="noreferrer noopener" target="_blank">www.courtensia.fr</a>.</p>
              <p>Courtia a souscrit une assurance de responsabilité civile professionnelle auprès de <b>MATRISK Assurance</b>, 22 rue de la Maison Rouge, 77185 Lognes — police n° MRCBAN2202412FR00000000063124A00.</p>
            </section>

            <section className="legal-block" id="garantie">
              <h2>Garantie financière et versements</h2>
              <p>Courtia <b>n&apos;encaisse pas de fonds</b> pour le compte des clients ni des compagnies.</p>
              <div className="legal-note">
                <b>Important</b>
                <p>Conformément à la législation, « aucun versement, de quelque nature que ce soit, ne peut être exigé d&apos;un particulier avant l&apos;obtention d&apos;un ou plusieurs prêts d&apos;argent » — article L. 322-2 du Code de la consommation.</p>
                <p>L&apos;article L. 519-6 du Code monétaire et financier prévoit qu&apos;il est interdit à toute personne qui apporte son concours à l&apos;obtention ou à l&apos;octroi d&apos;un prêt d&apos;argent « de percevoir une somme représentative de provision, de commissions, de frais de recherche, de démarches, de constitution de dossier ou d&apos;entremise quelconque, avant le versement effectif des fonds prêtés ».</p>
                <p>Vous êtes ainsi protégé et vous conservez la liberté de changer d&apos;avis quand vous le souhaitez.</p>
              </div>
            </section>

            <section className="legal-block" id="remuneration">
              <h2>Rémunération de Courtia</h2>
              <p>Conformément à l&apos;article R. 519-30 du Code monétaire et financier, Courtia vous informe qu&apos;elle perçoit du partenaire bancaire, au titre de l&apos;intermédiation pour le crédit immobilier, une commission correspondant à un pourcentage de la somme empruntée. Ce pourcentage diffère selon les établissements bancaires et peut être soumis à un plafond. En 2023, la commission moyenne correspond à <b>0,3 % de la somme empruntée</b>.</p>
              <p>Au titre de l&apos;intermédiation pour le crédit à la consommation, Courtia perçoit une rémunération versée directement par ses partenaires, correspondant selon le partenaire soit à un forfait, soit à un pourcentage du montant du dossier financé.</p>
              <p>Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager. Lorsqu&apos;une opération de crédit entraîne une diminution du montant des mensualités, celle-ci peut entraîner un allongement de la durée de remboursement du crédit et majorer son coût total. Délai de rétractation de 10 jours à réception de l&apos;offre. Sous réserve de l&apos;acceptation de votre dossier par l&apos;un de nos partenaires bancaires.</p>
            </section>

            <section className="legal-block" id="retractation">
              <h2>Droit de rétractation</h2>
              <p>Si vous avez conclu hors établissement ou à distance un <b>contrat de recherche de financement</b>, en application des articles L. 121-21 et suivants du Code de la consommation, vous disposez d&apos;un droit de rétractation de <b>quatorze jours calendaires</b> sans avoir à motiver votre décision.</p>
              <p>Ce délai court à compter du lendemain du jour de la conclusion du contrat et expire le dernier jour à minuit. Si ce dernier jour est un samedi, un dimanche, un jour férié ou chômé, le délai est prorogé jusqu&apos;au premier jour ouvrable suivant.</p>
              <p>Pour exercer ce droit, complétez et renvoyez le formulaire ci-dessous, par courriel ou par tout autre moyen à votre convenance, avant l&apos;expiration du délai.</p>
              <div className="legal-form">
                <span className="legal-form-title">Formulaire de rétractation</span>
                <p>Je / Nous <sup>(*)</sup> vous notifie / notifions <sup>(*)</sup> par la présente ma / notre <sup>(*)</sup> rétractation du contrat de recherche de financement ci-après désigné :</p>
                <ul>
                  <li>Contrat de recherche de financement n° : <i /></li>
                  <li>Contrat signé le : <i /></li>
                  <li>Nom du ou des clients : <i /></li>
                  <li>Adresse du ou des clients : <i /></li>
                  <li>Date : <i /></li>
                  <li>Signature du ou des clients (uniquement en cas de notification sur papier) : <i /></li>
                </ul>
                <small>(*) Rayez la mention inutile.</small>
              </div>
            </section>

            <section className="legal-block" id="reclamations">
              <h2>Réclamations et médiation</h2>
              <h3>Qu&apos;est-ce qu&apos;une réclamation ?</h3>
              <p>Une réclamation est une déclaration par laquelle vous manifestez votre mécontentement envers notre société, sur un ou des sujets clairement identifiés, dans l&apos;application de la convention d&apos;intermédiation.</p>
              <h3>Comment faire une réclamation ?</h3>
              <p>La réclamation prend obligatoirement la forme d&apos;un écrit, adressé par voie postale à <b>Courtia, 19 rue de la pièce du camp, 17300 Vergeroux</b>, ou par courriel à <a href="mailto:bpoisson@courtia.fr">bpoisson@courtia.fr</a>.</p>
              <h3>Comment est-elle traitée ?</h3>
              <p>Nous nous engageons à accuser réception de votre réclamation dans un délai maximum de <b>10 jours ouvrables</b> à compter de sa réception, et à vous apporter une réponse — positive ou négative — dans un délai de <b>2 mois</b> à compter de la réception de la totalité des éléments.</p>
              <h3>Médiation de la consommation</h3>
              <p>Si vous n&apos;êtes pas satisfait de notre réponse et si vous êtes un particulier, vous pouvez saisir le médiateur de la consommation : <b>ANM Conso</b>, 2 rue de Colmar, 94300 Vincennes — <a href="https://www.anm-conso.com/site/index.php" rel="noreferrer noopener" target="_blank">anm-conso.com</a>, où la Charte de la médiation est également consultable.</p>
            </section>

            <section className="legal-block" id="donnees">
              <h2>Données personnelles</h2>
              <p>Conformément au <b>Règlement général sur la protection des données</b>, les informations recueillies font l&apos;objet d&apos;un traitement destiné à nos partenaires pour la recherche de financements et d&apos;assurances correspondant à vos besoins. La durée de conservation des données est de <b>5 ans</b>.</p>
              <p>Vous bénéficiez d&apos;un droit d&apos;accès, de rectification, de portabilité et d&apos;effacement de vos données, ainsi que d&apos;un droit à la limitation du traitement. Vous pouvez vous opposer au traitement des données vous concernant et retirer votre consentement à tout moment, en écrivant à <a href="mailto:bpoisson@courtia.fr">bpoisson@courtia.fr</a>.</p>
              <p>Nous disposons d&apos;une procédure complète de cybersécurité destinée à garantir au mieux la confidentialité des données que vous nous confiez, ainsi que de celles que nous transmettons à nos partenaires. L&apos;intégralité de cette procédure est disponible sur simple demande.</p>
              <h3>Sauvegardes techniques</h3>
              <p>Les justificatifs que vous déposez sont copiés chaque nuit dans une sauvegarde technique, hébergée chez le même prestataire et dans la même zone géographique que vos documents d&apos;origine (Europe de l&apos;Ouest), et chiffrée au repos. Cette sauvegarde est <b>conservée 30 jours au maximum</b>, puis effacée automatiquement.</p>
              <p>Lorsque vous exercez votre droit à l&apos;effacement, la suppression est <b>immédiate</b> dans nos systèmes actifs. Une copie de vos pièces peut subsister dans ces sauvegardes pendant <b>30 jours au plus</b>, le temps que le cycle d&apos;effacement automatique l&apos;atteigne. Pendant ce délai, cette copie est gelée : elle n&apos;est ni consultée, ni exploitée, ni transmise à un tiers, et ne peut servir qu&apos;au rétablissement du service après un incident technique.</p>
              <p>Les informations susceptibles d&apos;être collectées sur le présent site sont exclusivement destinées au traitement de vos demandes. Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données qui vous concernent, en application de la loi n° 78-17 du 6 janvier 1978, dite Informatique et Libertés.</p>
            </section>

            <section className="legal-block" id="propriete">
              <h2>Propriété intellectuelle</h2>
              <p>Tous les éléments mis en ligne sur le site courtia.fr — textes, images, photographies, illustrations, sons, musiques — sont, sauf mention particulière, la propriété de Courtia. La marque Courtia et son logo sont déposés.</p>
              <p>En conséquence, et en application des dispositions du Code de la propriété intellectuelle, des dispositions législatives et réglementaires de tous pays et des conventions internationales, toute représentation ou reproduction, intégrale ou partielle, de l&apos;un quelconque de ces éléments, faite sans le consentement préalable et écrit de Courtia, est interdite et passible de poursuites judiciaires.</p>
              <p>L&apos;éditeur n&apos;autorise qu&apos;un usage strictement personnel des données, informations et contenus auxquels vous accédez.</p>
            </section>

            <section className="legal-block" id="liens">
              <h2>Liens vers d&apos;autres sites</h2>
              <p>À partir de ce site, vous pouvez accéder à des sites tiers par l&apos;intermédiaire de liens hypertextes. Ces sites ne sont pas sous notre contrôle et nous ne sommes pas responsables de leur disponibilité ni de leur contenu. La mise à disposition de ces liens est faite pour votre information et n&apos;implique aucune responsabilité de la part de Courtia. Vos échanges avec tout fournisseur tiers relèvent uniquement de votre relation avec ce fournisseur.</p>
              <p>Malgré le soin apporté au traitement des informations, Courtia décline toute responsabilité concernant les erreurs ou omissions portant sur les informations diffusées sur ce site, et ne peut être tenue responsable de l&apos;interprétation de ces informations ni des conséquences de leur utilisation. Aucune garantie n&apos;est donnée quant à la disponibilité ininterrompue du site.</p>
            </section>

            <section className="legal-block" id="hebergement">
              <h2>Hébergement du site</h2>
              <p>Le site courtia.fr est hébergé par <b>Vercel Inc.</b>, 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — <a href="https://vercel.com" rel="noreferrer noopener" target="_blank">vercel.com</a>.</p>
            </section>

            <p className="legal-updated">Dernière mise à jour : 10 août 2026.</p>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="section-wrap footer-top"><a className="brand" href="/"><img className="brand-logo" src="/courtia-logo.png" alt="Courtia" /></a><p>Courtia, le copilote de votre financement.</p><nav><a href="/">Particuliers</a><a href="/tarifs">Tarifs</a><a href="/professionnels">Courtia Pro ↗</a><a href="/mentions-legales">Mentions légales</a></nav></div><div className="section-wrap footer-bottom"><span>© 2026 Courtia</span><span>RGPD · IA Act · Chiffrement</span><span className="footer-contact"><a href={"mailto:" + COURTIA_EMAIL}>{COURTIA_EMAIL}</a><i /><a href={COURTIA_TEL_LIEN}>{COURTIA_TEL_AFFICHE}</a></span></div></footer>
    </main>
  );
}
