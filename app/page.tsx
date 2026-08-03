"use client";

import { FormEvent, useState } from "react";

const tools = [
  { icon: "◌", title: "Copilot IA conversationnel", text: "Un assistant intelligent qui comprend votre situation, structure votre projet et vous guide à chaque étape." },
  { icon: "◒", title: "Score Courtia — 10 axes", text: "Votre profil analysé sur 10 dimensions pour un score de financement fiable, explicable et transparent." },
  { icon: "✓", title: "Attestation certifiée", text: "Un PDF avec votre score, votre verdict et votre plan de financement, prêt à partager avec vos interlocuteurs." },
  { icon: "▣", title: "Analyse documentaire OCR", text: "Vos documents sont analysés automatiquement pour extraire les informations utiles de votre dossier." },
  { icon: "⌁", title: "Portail de partage sécurisé", text: "Un espace de partage maîtrisé pour échanger avec votre banque, votre agent immobilier ou vos partenaires." },
  { icon: "◇", title: "Conformité & sécurité", text: "Données hébergées en Europe, chiffrement de bout en bout, traçabilité et conformité RGPD." },
];

const professionalRoles = [
  ["Agent immobilier", "Qualifiez vos acquéreurs et suivez leur avancement en temps réel."],
  ["Banquier", "Recevez des dossiers structurés, complets et directement exploitables."],
  ["Notaire", "Sécurisez les financements et gagnez en visibilité sur les projets."],
  ["Expert financement", "Travaillez avec des informations fiables et des dossiers structurés dès le départ."],
];

const plans = [
  { name: "Courtia Copilote", price: "39", tag: "Pour démarrer", color: "light", items: ["Lien d'affiliation", "Copilot IA pour vos acquéreurs", "Score Courtia sur 10 axes", "Attestations de faisabilité", "Dashboard de suivi prospects"], action: "Créer mon compte" },
  { name: "Courtia Premium", price: "49", tag: "Le plus choisi", color: "featured", items: ["Tout Copilote inclus", "Certification LCB-FT intégrée", "Webothèque certifiée & ressources", "Export conformité en 1 clic", "Support prioritaire"], action: "Commencer à 49 €/mois" },
  { name: "Entreprise", price: "Sur mesure", tag: "Pour les réseaux", color: "dark", items: ["Tout Premium inclus", "Tarification volume négociée", "Déploiement réseau", "Accompagnement & formation", "Facturation centralisée", "Interlocuteur dédié"], action: "Contactez-nous" },
];

export default function Home() {
  const [audience, setAudience] = useState<"emprunteur" | "professionnel">("emprunteur");
  const [sent, setSent] = useState(false);

  function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function handleStart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="site-shell">
      <nav className="topbar topbar-dark" aria-label="Navigation principale">
        <button className="brand" onClick={() => scrollToId("top")} aria-label="Courtia — retour en haut"><img className="brand-logo brand-logo-inverse" src="/courtia-logo.png" alt="Courtia" /></button>
        <div className="nav-links">
          <button onClick={() => scrollToId("emprunteurs")}>Emprunteurs</button>
          <button onClick={() => scrollToId("professionnels")}>Professionnels</button>
          <button onClick={() => scrollToId("contact")}>Contact</button>
        </div>
        <button className="nav-login" onClick={() => scrollToId("contact")}>Se connecter <span>↗</span></button>
      </nav>

      <section className="hero-dark" id="top">
        <div className="ambient ambient-green" /><div className="ambient ambient-blue" />
        <div className="hero-content">
          <span className="eyebrow eyebrow-dark">Le crédit avec un temps d&apos;avance</span>
          <h1>Avant la banque,<br /><em>il y a Courtia</em></h1>
          <p>Courtia est l&apos;outil IA qui vous aide à comprendre votre profil, préparer votre dossier et sécuriser votre projet avant la décision de la banque.</p>
          <div className="hero-actions"><button className="pill-button pill-green" onClick={() => { setAudience("emprunteur"); scrollToId("emprunteurs"); }}>Comprendre mon profil <span>→</span></button><button className="pill-button pill-outline" onClick={() => { setAudience("professionnel"); scrollToId("professionnels"); }}>Sécuriser mes ventes <span>→</span></button></div>
          <button className="login-prompt" onClick={() => scrollToId("contact")}>Déjà inscrit ? <strong>Se connecter</strong></button>
        </div>
        <div className="hero-dashboard" aria-label="Aperçu de la plateforme Courtia">
          <div className="dash-sidebar"><span className="dash-mini-logo">◉ Courtia</span><span className="dash-nav active">▦ Tableau de bord</span><span className="dash-nav">♢ Mon projet</span><span className="dash-nav">◌ Mon score</span><span className="dash-nav">✓ Attestation</span><span className="dash-nav">⌁ Partager</span></div>
          <div className="dash-center"><div className="dash-topline"><span>Bienvenue, Sophie</span><b>✓ Projet en bonne voie</b></div><div className="dash-score"><div><small>Score Courtia</small><strong>85</strong><i>/100</i></div><div><small>Votre statut</small><strong className="dash-status">Très bon profil</strong><p>Votre dossier est bien engagé.</p></div></div><div className="dash-metrics"><div><small>Capacité d&apos;emprunt</small><strong>220 000 €</strong></div><div><small>Revenus mensuels</small><strong>4 390 €</strong></div><div><small>Apport</small><strong>35 000 €</strong></div></div><div className="dash-lower"><div><small>Votre parcours</small><strong>4 étapes sur 5</strong><div className="dash-progress"><span /></div><p>Attestation en préparation</p></div><div><small>Votre copilote IA</small><p>Bonjour Sophie, votre prochaine étape est prête.</p><button onClick={() => scrollToId("fonctionnalites")}>Continuer →</button></div></div></div>
        </div>
        <div className="help-bubble">Besoin d&apos;aide ? <span>◌</span></div>
      </section>

      <section className="light-section problem-section" id="emprunteurs">
        <div className="section-kicker">Le constat</div><h2>Vous voyez votre projet.<br /><em>La banque voit votre dossier.</em></h2>
        <div className="problem-grid"><article><span className="card-symbol">◎</span><h3>Un projet, mais peu de visibilité</h3><p>Vous connaissez votre projet, parfois votre capacité d&apos;emprunt, mais rarement la façon dont votre dossier sera réellement analysé.</p></article><article><span className="card-symbol">▣</span><h3>Des acquéreurs motivés</h3><p>Les professionnels accompagnent des acquéreurs engagés — mais pas toujours finançables au moment de faire une offre.</p></article><article><span className="card-symbol">◇</span><h3>Des ventes qui se fragilisent</h3><p>Compromis annulés, délais perdus et dossiers qui échouent : le manque de préparation coûte du temps à tout le monde.</p></article></div>
      </section>

      <section className="light-section platform-section">
        <div className="section-kicker">La plateforme</div><h2>Donnez-vous<br /><em>un temps d&apos;avance</em></h2>
        <div className="platform-steps"><article><div className="step-copy"><span className="step-label">Étape 1 · Comprendre</span><h3>Découvrez l&apos;emprunteur que la banque voit en vous</h3><p>Clara dialogue avec vous, structure votre situation et met en lumière les éléments qui comptent avant même de présenter votre dossier.</p></div><div className="product-shot chat-shot"><div className="shot-window"><b>Bonjour, je suis Clara</b><span>Comment puis-je vous aider ?</span><button>Parler à Clara →</button><div className="shot-pills"><i>Mon projet</i><i>Mes revenus</i><i>Mes documents</i></div></div></div></article><article className="reverse"><div className="step-copy"><span className="step-label">Étape 2 · Analyser</span><h3>Un diagnostic sur 10 axes</h3><p>Revenus, apport, endettement, stabilité, gestion et reste à vivre : 10 dimensions analysées pour produire un diagnostic clair, explicable et transparent.</p></div><div className="product-shot score-shot"><div className="score-circle"><strong>85</strong><span>/100</span></div><div className="score-bars"><i /><i /><i /><i /><i /></div><div className="score-tags"><b>Solvabilité</b><b>Stabilité</b><b>Apport</b></div></div></article><article><div className="step-copy"><span className="step-label">Étape 3 · Préparer</span><h3>Un dossier qui se partage</h3><p>Votre diagnostic se traduit en attestation de financement et en dossier structuré, prêts à être partagés avec vos interlocuteurs.</p></div><div className="product-shot certificate-shot"><div className="certificate-card"><span>Profil Courtia</span><strong>82</strong><small>Attestation de financement</small><button>Partager mon attestation →</button></div></div></article></div>
      </section>

      <section className="dark-section journey-section"><div className="section-kicker section-kicker-dark">Le réflexe Courtia</div><h2>Avant chaque étape,<br /><em>préparez la suivante</em></h2><div className="journey-list"><div><span>01</span><h3>Avant de chercher</h3><p>Testez votre projet et comprenez votre profil d&apos;emprunteur.</p></div><div><span>02</span><h3>Avant de faire une offre</h3><p>Sécurisez votre financement avec un dossier préparé.</p></div><div><span>03</span><h3>Avant la banque</h3><p>Découvrez ce qu&apos;elle verra lorsqu&apos;elle analysera votre dossier.</p></div><div><span>04</span><h3>Avant de négocier</h3><p>Avancez avec des éléments clairs pour défendre votre projet.</p></div></div></section>

      <section className="dark-section ecosystem-section"><div className="section-kicker section-kicker-dark">Deux usages, un même réflexe</div><h2><em>Comprenez</em> votre profil.<br /><em>Sécurisez</em> vos ventes.</h2><div className="audience-grid"><button className={audience === "emprunteur" ? "audience-card selected" : "audience-card"} onClick={() => setAudience("emprunteur")}><span>⌂</span><h3>Je suis emprunteur</h3><p>Comprenez votre profil, préparez votre dossier et avancez avec un temps d&apos;avance.</p><b>Découvrir mon profil →</b></button><button className={audience === "professionnel" ? "audience-card selected" : "audience-card"} onClick={() => setAudience("professionnel")}><span>♙</span><h3>Je suis professionnel</h3><p>Faites passer vos acquéreurs par Courtia avant la vente pour sécuriser chaque projet.</p><b>Sécuriser mes ventes →</b></button></div></section>

      <section className="light-section trust-section"><div className="stats-row"><div><strong>10</strong><span>axes d&apos;analyse</span></div><div><strong>&lt; 5 min</strong><span>pour votre diagnostic</span></div><div><strong>30 j</strong><span>validité attestation</span></div><div><strong>RGPD</strong><span>données protégées</span></div></div><div className="section-kicker">La promesse</div><h2>La banque a ses critères.<br /><em>Vous avez Courtia.</em></h2><div className="trust-grid"><article><span>◌</span><h3>L&apos;avance</h3><p>Agissez avant la banque, avec le temps de comprendre et de préparer.</p></article><article><span>⌁</span><h3>Le regard</h3><p>Voyez votre projet comme un dossier sera regardé par la banque.</p></article><article><span>◇</span><h3>Le pouvoir</h3><p>Arrivez mieux préparé pour défendre votre projet et vos choix.</p></article><article><span>▣</span><h3>La confiance</h3><p>Des analyses explicables, des données protégées et des décisions mieux éclairées.</p></article></div></section>

      <section className="light-section startup-section"><div className="section-kicker">La conviction Courtia</div><h2>Le crédit avec<br /><em>un temps d&apos;avance</em></h2><p>Courtia ne vend pas une promesse de financement. Cet outil donne à chacun les moyens de mieux préparer son projet avant la décision de la banque : comprendre, se préparer, agir. Parce que mieux comprendre son crédit, c&apos;est déjà mieux le préparer.</p></section>

      <section className="dark-section cta-dark"><div className="section-kicker section-kicker-dark">Avant la banque, il y a Courtia</div><h2>Préparez votre projet<br /><em>avec un temps d&apos;avance</em></h2><p>Comprenez votre profil, découvrez ce que la banque verra dans votre dossier et partagez une base claire avec vos interlocuteurs.</p><div className="hero-actions"><button className="pill-button pill-green" onClick={() => scrollToId("contact")}>Tester mon projet <span>→</span></button><button className="login-prompt" onClick={() => scrollToId("contact")}>Se connecter</button></div><div className="value-row"><article><span>◌</span><h3>Avance</h3><p>Comprendre avant de décider.</p></article><article><span>▣</span><h3>Regard</h3><p>Voir le dossier comme la banque.</p></article><article><span>◇</span><h3>Pouvoir</h3><p>Arriver préparé à chaque échange.</p></article></div></section>

      <section className="light-section tools-section" id="fonctionnalites"><div className="section-kicker">Les outils Courtia</div><h2>Comprendre, préparer,<br /><em>agir</em></h2><p>Une suite d&apos;outils IA pour avancer avant la décision de la banque.</p><div className="tools-grid">{tools.map((tool) => <article key={tool.title}><span className="tool-icon">{tool.icon}</span><h3>{tool.title}</h3><p>{tool.text}</p></article>)}</div><div className="cta-inline"><h3>Prêt à découvrir votre profil ?</h3><button className="pill-button pill-dark" onClick={() => scrollToId("contact")}>Tester mon projet <span>→</span></button></div></section>

      <section className="dark-section professionals-section" id="professionnels"><div className="section-kicker section-kicker-dark">Courtia Pro</div><h2>Votre acquéreur est-il vraiment<br /><em>prêt ?</em></h2><p>Faites passer votre acquéreur par Courtia avant la vente : un outil pour préparer son dossier et sécuriser vos transactions.</p><div className="roles-grid">{professionalRoles.map(([role, text]) => <article key={role}><span>◈</span><h3>{role}</h3><p>{text}</p><button onClick={() => scrollToId("contact")}>En savoir plus →</button></article>)}</div></section>

      <section className="light-section agent-section"><div className="section-kicker">Avant la vente</div><h2>Faites passer votre acquéreur<br /><em>par Courtia</em></h2><p className="centered-copy">Un parcours simple pour préparer vos acquéreurs avant l&apos;offre et suivre leur avancée.</p><div className="agent-steps"><div><span>01</span><h3>Partagez Courtia</h3><p>Invitez votre acquéreur à découvrir son profil avant de visiter, de faire une offre ou de négocier.</p></div><div><span>02</span><h3>Il prépare son dossier</h3><p>Il complète son projet avec Clara, renseigne ses revenus, ses charges, son apport et ses documents.</p></div><div><span>03</span><h3>Vous suivez l&apos;avancée</h3><p>Visualisez en temps réel son parcours : inscrit, en analyse, diagnostiqué, attesté.</p></div><div><span>04</span><h3>Vous sécurisez la vente</h3><p>Vous avancez avec un acquéreur mieux préparé et des échanges plus simples avec vos interlocuteurs.</p></div></div></section>

      <section className="light-section pricing-section" id="tarifs"><div className="section-kicker">Les tarifs</div><h2>Choisissez votre formule</h2><p>Des formules adaptées à votre volume d&apos;activité.</p><div className="plans-grid">{plans.map((plan) => <article key={plan.name} className={`plan-card ${plan.color}`}><span className="plan-tag">{plan.tag}</span><h3>{plan.name}</h3><div className="plan-price">{plan.price !== "Sur mesure" && <small>€</small>}<strong>{plan.price}</strong>{plan.price !== "Sur mesure" && <small>/mois</small>}</div><ul>{plan.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul><button className="pill-button" onClick={() => scrollToId("contact")}>{plan.action} <span>→</span></button></article>)}</div></section>

      <section className="dark-section final-cta" id="contact"><div className="section-kicker section-kicker-dark">Avant la banque, il y a Courtia</div><h2>Donnez un temps d&apos;avance<br /><em>à votre projet</em></h2><p>Créez votre compte gratuitement et découvrez votre profil d&apos;emprunteur en quelques minutes. Aucun engagement, aucune carte bancaire.</p><form onSubmit={handleStart}><input type="email" required placeholder="Votre adresse email" aria-label="Votre adresse email" /><button className="pill-button pill-green" type="submit">{sent ? "Lien envoyé ✓" : "Découvrir mon profil"} <span>→</span></button></form></section>

      <footer className="footer"><div className="footer-top"><button className="brand" onClick={() => scrollToId("top")} aria-label="Courtia — retour en haut"><img className="brand-logo" src="/courtia-logo.png" alt="Courtia" /></button><p>Le crédit avec un temps d&apos;avance.</p><div className="footer-links"><a href="#emprunteurs">Emprunteurs</a><a href="#professionnels">Professionnels</a><a href="#fonctionnalites">Fonctionnalités</a><a href="#tarifs">Tarifs</a></div></div><div className="footer-bottom"><span>© 2026 Courtia. Tous droits réservés.</span><span>RGPD · IA Act · LCB-FT · Chiffrement</span><span>Fait avec <b>✦</b> pour vos projets.</span></div></footer>
    </main>
  );
}
