"use client";

import { FormEvent, useState } from "react";

const tools = [
  { icon: "◌", title: "Copilot IA conversationnel", text: "Un assistant intelligent qui comprend votre situation, structure votre projet et vous guide à chaque étape." },
  { icon: "◒", title: "Score Courtia — 10 axes", text: "Votre profil analysé sur 10 dimensions pour un score de financement fiable, explicable et transparent." },
  { icon: "✓", title: "Attestation certifiée", text: "Un PDF avec votre score, votre verdict et votre plan de financement, prêt à partager avec vos interlocuteurs." },
  { icon: "▣", title: "Analyse documentaire OCR", text: "Vos documents sont analysés automatiquement pour extraire les informations utiles de votre dossier." },
  { icon: "⌁", title: "Portail de partage sécurisé", text: "Un espace de partage maîtrisé pour échanger avec votre banque, votre agent immobilier ou vos partenaires." },
  { icon: "◇", title: "Conformité & sécurité", text: "Données hébergées en Europe, chiffrement de bout en bout et conformité RGPD, ORIAS et LCB-FT." },
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
          <span className="eyebrow eyebrow-dark">Copilote IA immobilier</span>
          <h1>Votre projet immobilier,<br /><em>accompagné de A à Z</em></h1>
          <p>Courtia est la plateforme IA qui accompagne les emprunteurs et les professionnels à chaque étape du financement immobilier — du premier projet au dossier d&apos;emprunt.</p>
          <div className="hero-actions"><button className="pill-button pill-green" onClick={() => { setAudience("emprunteur"); scrollToId("emprunteurs"); }}>Je suis emprunteur <span>→</span></button><button className="pill-button pill-outline" onClick={() => { setAudience("professionnel"); scrollToId("professionnels"); }}>Je suis professionnel <span>→</span></button></div>
          <button className="login-prompt" onClick={() => scrollToId("contact")}>Déjà inscrit ? <strong>Se connecter</strong></button>
        </div>
        <div className="hero-dashboard" aria-label="Aperçu de la plateforme Courtia">
          <div className="dash-sidebar"><span className="dash-mini-logo">◉ Courtia</span><span className="dash-nav active">▦ Tableau de bord</span><span className="dash-nav">♢ Mon projet</span><span className="dash-nav">◌ Mon score</span><span className="dash-nav">✓ Attestation</span><span className="dash-nav">⌁ Partager</span></div>
          <div className="dash-center"><div className="dash-topline"><span>Bienvenue, Sophie</span><b>✓ Projet en bonne voie</b></div><div className="dash-score"><div><small>Score Courtia</small><strong>85</strong><i>/100</i></div><div><small>Votre statut</small><strong className="dash-status">Très bon profil</strong><p>Votre dossier est bien engagé.</p></div></div><div className="dash-metrics"><div><small>Capacité d&apos;emprunt</small><strong>220 000 €</strong></div><div><small>Revenus mensuels</small><strong>4 390 €</strong></div><div><small>Apport</small><strong>35 000 €</strong></div></div><div className="dash-lower"><div><small>Votre parcours</small><strong>4 étapes sur 5</strong><div className="dash-progress"><span /></div><p>Attestation en préparation</p></div><div><small>Votre copilote IA</small><p>Bonjour Sophie, votre prochaine étape est prête.</p><button onClick={() => scrollToId("fonctionnalites")}>Continuer →</button></div></div></div>
        </div>
        <div className="help-bubble">Besoin d&apos;aide ? <span>◌</span></div>
      </section>

      <section className="light-section problem-section" id="emprunteurs">
        <div className="section-kicker">Le constat</div><h2>Le financement immobilier<br /><em>manque de transparence</em></h2>
        <div className="problem-grid"><article><span className="card-symbol">◎</span><h3>L&apos;emprunteur avance à l&apos;aveugle</h3><p>Sans visibilité sur sa faisabilité bancaire, il navigue entre les offres, sans savoir si son projet est viable.</p></article><article><span className="card-symbol">▣</span><h3>Les professionnels perdent du temps</h3><p>Dossiers incomplets, acquéreurs non qualifiés, allers-retours chronophages — la productivité en souffre.</p></article><article><span className="card-symbol">◇</span><h3>La conformité est un casse-tête</h3><p>LCB-FT, ORIAS, IA Act — les obligations réglementaires se multiplient sans outils adaptés.</p></article></div>
      </section>

      <section className="light-section platform-section">
        <div className="section-kicker">La plateforme</div><h2>De la première question<br />au <em>dossier d&apos;emprunt</em></h2>
        <div className="platform-steps"><article><div className="step-copy"><span className="step-label">Étape 1</span><h3>Un copilote IA qui vous accompagne</h3><p>Comme un assistant disponible 24/7, le copilote Courtia dialogue avec l&apos;emprunteur, structure son projet et identifie les points clés de sa situation.</p></div><div className="product-shot chat-shot"><div className="shot-window"><b>Bonjour, je suis Clara</b><span>Comment puis-je vous aider ?</span><button>Parler à Clara →</button><div className="shot-pills"><i>Mon projet</i><i>Mes revenus</i><i>Mes documents</i></div></div></div></article><article className="reverse"><div className="step-copy"><span className="step-label">Étape 2</span><h3>Un scoring sur 10 axes</h3><p>Revenus, apport, endettement, stabilité professionnelle — 10 dimensions analysées automatiquement pour produire un score de financement fiable, explicable et transparent.</p></div><div className="product-shot score-shot"><div className="score-circle"><strong>85</strong><span>/100</span></div><div className="score-bars"><i /><i /><i /><i /><i /></div><div className="score-tags"><b>Solvabilité</b><b>Stabilité</b><b>Apport</b></div></div></article><article><div className="step-copy"><span className="step-label">Étape 3</span><h3>Attestation et dossier d&apos;emprunt</h3><p>Le score se traduit en attestation certifiée, partageable avec les banques et les agents immobiliers. Le dossier d&apos;emprunt est construit automatiquement.</p></div><div className="product-shot certificate-shot"><div className="certificate-card"><span>Score Courtia</span><strong>82</strong><small>Attestation de faisabilité</small><button>Partager mon attestation →</button></div></div></article></div>
      </section>

      <section className="dark-section journey-section"><div className="section-kicker section-kicker-dark">Les parcours</div><h2>Un parcours fluide,<br /><em>de bout en bout</em></h2><div className="journey-list"><div><span>01</span><h3>Dialogue</h3><p>Le copilote IA vous pose les bonnes questions et structure votre projet immobilier.</p></div><div><span>02</span><h3>Analyse</h3><p>Votre profil est scoré sur 10 axes de financement — et clairement expliqué.</p></div><div><span>03</span><h3>Attestez</h3><p>Obtenez une attestation certifiée de votre faisabilité, partageable avec les pros.</p></div><div><span>04</span><h3>Partagez</h3><p>Transmettez votre dossier complet à votre agent ou votre banque en un clic.</p></div></div></section>

      <section className="dark-section ecosystem-section"><div className="section-kicker section-kicker-dark">Partagez</div><h2>Un écosystème pour tous<br />les acteurs de <em>l&apos;immobilier</em></h2><div className="audience-grid"><button className={audience === "emprunteur" ? "audience-card selected" : "audience-card"} onClick={() => setAudience("emprunteur")}><span>⌂</span><h3>Je suis emprunteur</h3><p>Structurez votre projet, mesurez votre faisabilité et avancez accompagné par l&apos;IA.</p><b>Découvrir →</b></button><button className={audience === "professionnel" ? "audience-card selected" : "audience-card"} onClick={() => setAudience("professionnel")}><span>♙</span><h3>Je suis professionnel</h3><p>Qualifiez vos acquéreurs, sécurisez vos dossiers et gagnez du temps.</p><b>Découvrir →</b></button></div></section>

      <section className="light-section trust-section"><div className="stats-row"><div><strong>10</strong><span>axes d&apos;analyse</span></div><div><strong>&lt; 5 min</strong><span>pour votre score</span></div><div><strong>30 j</strong><span>validité attestation</span></div><div><strong>RGPD</strong><span>données protégées</span></div></div><div className="section-kicker">Confiance</div><h2>Conçu pour la <em>conformité</em></h2><div className="trust-grid"><article><span>◌</span><h3>RGPD</h3><p>Données hébergées en Europe, environnement sécurisé et transparent.</p></article><article><span>⌁</span><h3>Traçabilité</h3><p>Historique des actions, accès maîtrisés et partage contrôlé de vos documents.</p></article><article><span>◇</span><h3>IA Act</h3><p>Transparence algorithmique, explicabilité des scores, supervision humaine.</p></article><article><span>▣</span><h3>SSL / Chiffrement</h3><p>Communications chiffrées de bout en bout, accès sécurisés et traçabilité.</p></article></div></section>

      <section className="light-section startup-section"><div className="section-kicker">La startup</div><h2>Porté par des acteurs<br /><em>de l&apos;immobilier</em></h2><p>Courtia est né d&apos;un constat que le parcours de financement immobilier mérite plus de transparence, de rapidité et de collaboration entre toutes les parties prenantes. Notre mission : donner à chaque emprunteur et acteur du secteur les outils pour se projeter, se qualifier et sécuriser ses dossiers — le tout via une plateforme faite de confiance.</p></section>

      <section className="dark-section cta-dark"><div className="section-kicker section-kicker-dark">Copilote IA immobilier</div><h2>Structurez votre projet<br /><em>immobilier avec l&apos;IA</em></h2><p>De la première simulation jusqu&apos;à l&apos;attestation certifiée, votre copilote IA analyse votre profil, score votre financement sur 10 axes, et génère un dossier partageable avec les professionnels.</p><div className="hero-actions"><button className="pill-button pill-green" onClick={() => scrollToId("contact")}>Commencer gratuitement <span>→</span></button><button className="login-prompt" onClick={() => scrollToId("contact")}>Se connecter</button></div><div className="value-row"><article><span>◌</span><h3>Clarté</h3><p>Votre projet compris et structuré.</p></article><article><span>▣</span><h3>Crédibilité</h3><p>Une attestation certifiée à partager.</p></article><article><span>◇</span><h3>Contrôle</h3><p>Vous décidez, accompagné par l&apos;IA.</p></article></div></section>

      <section className="light-section tools-section" id="fonctionnalites"><div className="section-kicker">Fonctionnalités</div><h2>Tout ce dont vous avez besoin</h2><p>Une suite d&apos;outils IA pour structurer et sécuriser votre projet immobilier.</p><div className="tools-grid">{tools.map((tool) => <article key={tool.title}><span className="tool-icon">{tool.icon}</span><h3>{tool.title}</h3><p>{tool.text}</p></article>)}</div><div className="cta-inline"><h3>Prêt à structurer votre projet ?</h3><button className="pill-button pill-dark" onClick={() => scrollToId("contact")}>Créer mon compte <span>→</span></button></div></section>

      <section className="dark-section professionals-section" id="professionnels"><div className="section-kicker section-kicker-dark">Entrepreneurs & professionnels</div><h2>Professionnels de l&apos;immobilier,<br /><em>équipez-vous avec Courtia</em></h2><p>Recevez des prospects qualifiés, suivez votre pipeline, et soyez conformes.</p><div className="roles-grid">{professionalRoles.map(([role, text]) => <article key={role}><span>◈</span><h3>{role}</h3><p>{text}</p><button onClick={() => scrollToId("contact")}>En savoir plus →</button></article>)}</div></section>

      <section className="light-section agent-section"><div className="section-kicker">Parcours agent</div><h2>Comment ça marche<br /><em>pour les agents</em></h2><p className="centered-copy">De l&apos;inscription à la conformité, tout est automatisé.</p><div className="agent-steps"><div><span>01</span><h3>Inscription & lien d&apos;affiliation</h3><p>Créez votre compte en quelques minutes. Vous recevez immédiatement un lien d&apos;affiliation unique à partager avec vos acquéreurs.</p></div><div><span>02</span><h3>Vos acquéreurs s&apos;inscrivent</h3><p>Ils accèdent à leur espace et complètent leur dossier avec le copilote IA : revenus, charges, apport, projet immobilier.</p></div><div><span>03</span><h3>Suivi de votre pipeline</h3><p>Vous visualisez l&apos;avancée en temps réel et suivez chaque acquéreur : inscrit, en analyse, scoré, attesté.</p></div><div><span>04</span><h3>Conformité LCBFT automatique</h3><p>Courtia vérifie les obligations et la traçabilité des dossiers selon les exigences réglementaires.</p></div></div></section>

      <section className="light-section pricing-section" id="tarifs"><div className="section-kicker">Les tarifs</div><h2>Choisissez votre formule</h2><p>Des formules adaptées à votre volume d&apos;activité.</p><div className="plans-grid">{plans.map((plan) => <article key={plan.name} className={`plan-card ${plan.color}`}><span className="plan-tag">{plan.tag}</span><h3>{plan.name}</h3><div className="plan-price">{plan.price !== "Sur mesure" && <small>€</small>}<strong>{plan.price}</strong>{plan.price !== "Sur mesure" && <small>/mois</small>}</div><ul>{plan.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul><button className="pill-button" onClick={() => scrollToId("contact")}>{plan.action} <span>→</span></button></article>)}</div></section>

      <section className="dark-section final-cta" id="contact"><div className="section-kicker section-kicker-dark">Prêt à avancer ?</div><h2>Prêt à structurer<br /><em>votre projet ?</em></h2><p>Créez votre compte gratuitement et obtenez votre Score Courtia en quelques minutes. Aucun engagement, aucune carte bancaire.</p><form onSubmit={handleStart}><input type="email" required placeholder="Votre adresse email" aria-label="Votre adresse email" /><button className="pill-button pill-green" type="submit">{sent ? "Lien envoyé ✓" : "Créer mon compte"} <span>→</span></button></form></section>

      <footer className="footer"><div className="footer-top"><button className="brand" onClick={() => scrollToId("top")} aria-label="Courtia — retour en haut"><img className="brand-logo" src="/courtia-logo.png" alt="Courtia" /></button><p>La plateforme IA du financement immobilier.</p><div className="footer-links"><a href="#emprunteurs">Emprunteurs</a><a href="#professionnels">Professionnels</a><a href="#fonctionnalites">Fonctionnalités</a><a href="#tarifs">Tarifs</a></div></div><div className="footer-bottom"><span>© 2026 Courtia. Tous droits réservés.</span><span>RGPD · IA Act · LCB-FT · Chiffrement</span><span>Fait avec <b>✦</b> pour vos projets.</span></div></footer>
    </main>
  );
}
