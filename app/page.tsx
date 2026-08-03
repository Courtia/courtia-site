"use client";

import { FormEvent, useState } from "react";

const scenarios = {
  acheter: {
    eyebrow: "Acheter votre résidence",
    title: "Un projet clair commence par un financement juste.",
    body: "Courtia vous aide à comprendre votre capacité, préparer un dossier solide et avancer au bon rythme — sans jargon, sans zone grise.",
    bullets: ["Diagnostic de faisabilité immédiat", "Attestation de financement valorisante", "Dossier bancaire prêt à présenter"],
  },
  investir: {
    eyebrow: "Investir dans l'immobilier",
    title: "Construisez votre patrimoine avec de la visibilité.",
    body: "Testez chaque scénario, mesurez l'effort réel et prenez une décision d'investissement avec les bons repères dès le départ.",
    bullets: ["Projection de rentabilité", "Plan de financement lisible", "Accompagnement sur les arbitrages"],
  },
  renegocier: {
    eyebrow: "Optimiser un crédit existant",
    title: "Votre crédit a changé. Vos conditions peuvent suivre.",
    body: "Courtia met à plat votre situation pour identifier les leviers : taux, assurance, mensualité ou regroupement.",
    bullets: ["Lecture simple de votre situation", "Comparaison des options possibles", "Conseil humain quand vous en avez besoin"],
  },
} as const;

type Scenario = keyof typeof scenarios;

export default function Home() {
  const [scenario, setScenario] = useState<Scenario>("acheter");
  const [estimated, setEstimated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  function handleEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEstimated(true);
  }

  const activeScenario = scenarios[scenario];

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Navigation principale">
        <button className="brand" onClick={() => scrollToId("top")} aria-label="Courtia — retour en haut">
          <img className="brand-logo" src="/courtia-logo.png" alt="Courtia" />
        </button>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <button onClick={() => scrollToId("solutions")}>Solutions</button>
          <button onClick={() => scrollToId("methode")}>La méthode</button>
          <button onClick={() => scrollToId("pourquoi")}>Pourquoi Courtia</button>
          <button onClick={() => scrollToId("tarifs")}>Formules</button>
        </div>

        <div className="nav-actions">
          <button className="login-link" onClick={() => scrollToId("contact")}>Se connecter</button>
          <button className="button button-dark button-small" onClick={() => scrollToId("simuler")}>Faire une simulation <span>↗</span></button>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Ouvrir le menu" aria-expanded={menuOpen}>
          <span /><span />
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Le courtage, en mieux</div>
          <h1>Votre crédit.<br /><em>Vos règles.</em></h1>
          <p className="hero-intro">Le copilote intelligent qui vous aide à comprendre, décider et réussir votre projet immobilier.</p>
          <div className="hero-actions">
            <button className="button button-accent" onClick={() => scrollToId("simuler")}>Tester ma capacité <span>↗</span></button>
            <button className="text-button" onClick={() => scrollToId("methode")}>Découvrir Courtia <span className="play-dot">▶</span></button>
          </div>
          <div className="hero-note"><span className="tiny-check">✓</span> Diagnostic gratuit · 100 % en ligne · Données protégées</div>
        </div>

        <div className="hero-visual" aria-label="Aperçu de l'espace Courtia">
          <div className="glow glow-one" /><div className="glow glow-two" />
          <div className="dashboard-card">
            <div className="dashboard-head">
              <div><span className="dashboard-kicker">MON PROJET</span><strong>Résidence principale</strong></div>
              <span className="status-dot">● En bonne voie</span>
            </div>
            <div className="dashboard-progress"><span /><i>72 %</i></div>
            <div className="dashboard-main">
              <div className="dashboard-value"><span>Capacité d'emprunt estimée</span><strong>248 600 €</strong><small>+ 12 400 € depuis votre dernière simulation</small></div>
              <div className="dashboard-chart" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><b /></div>
            </div>
            <div className="dashboard-details">
              <div><span>Mensualité cible</span><strong>1 142 € <small>/ mois</small></strong></div>
              <div><span>Apport personnel</span><strong>35 000 €</strong></div>
              <div><span>Score Courtia</span><strong className="score">A <small>Très bon profil</small></strong></div>
            </div>
            <div className="dashboard-footer"><span className="ai-spark">✦</span> Votre Copilote IA a une recommandation <button onClick={() => scrollToId("methode")}>Voir</button></div>
          </div>
          <div className="float-card float-card-top"><span className="float-icon">✓</span><div><strong>Dossier complet</strong><small>Prêt à présenter</small></div></div>
          <div className="float-card float-card-bottom"><span className="float-icon purple">✦</span><div><strong>3 offres comparées</strong><small>En moins de 2 min</small></div></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Les repères Courtia">
        <p>Déjà adopté par les emprunteurs qui veulent <strong>comprendre avant de signer.</strong></p>
        <div className="proof-stats"><div><strong>10 ans</strong><span>d'expertise bancaire</span></div><div><strong>100 %</strong><span>de votre dossier en ligne</span></div><div><strong>1:1</strong><span>avec un expert, si besoin</span></div></div>
      </section>

      <section className="manifesto section-dark" id="pourquoi">
        <div className="section-label light"><span>01</span> Notre conviction</div>
        <div className="manifesto-grid"><h2>Une banque vous donne une réponse.<br /><em>Courtia vous donne les clés.</em></h2><p>Nous croyons qu'un projet immobilier mérite mieux qu'une simulation opaque et trois pièces jointes à envoyer. Courtia transforme la complexité bancaire en décisions simples, concrètes et vraiment à vous.</p></div>
        <div className="manifesto-bottom"><span>La technologie quand elle fait gagner du temps.</span><span>L'humain quand il fait gagner en confiance.</span><span>Vous, aux commandes.</span></div>
      </section>

      <section className="features section-light" id="solutions">
        <div className="section-heading"><div className="section-label"><span>02</span> Votre avantage</div><h2>Tout ce qu'il faut pour<br /><em>avancer sereinement.</em></h2><p>Une expérience pensée pour vous rendre autonome, pas dépendant.</p></div>
        <div className="feature-grid">
          <article className="feature-card feature-card-green"><div className="feature-number">01</div><div className="feature-icon">◌</div><h3>Voyez clair</h3><p>Votre situation décodée en quelques minutes. Revenus, charges, apport : vous savez exactement où vous en êtes.</p><button onClick={() => scrollToId("simuler")}>Évaluer mon profil <span>↗</span></button></article>
          <article className="feature-card feature-card-cream"><div className="feature-number">02</div><div className="feature-icon">↗</div><h3>Agissez vite</h3><p>Simulez, comparez et préparez un dossier convaincant sans les allers-retours interminables du courtage traditionnel.</p><button onClick={() => scrollToId("methode")}>Voir la méthode <span>↗</span></button></article>
          <article className="feature-card feature-card-lilac"><div className="feature-number">03</div><div className="feature-icon">✦</div><h3>Restez maître</h3><p>Vous choisissez votre niveau d'accompagnement. Autonome, guidé ou accompagné par un courtier expert.</p><button onClick={() => scrollToId("tarifs")}>Choisir mon accompagnement <span>↗</span></button></article>
        </div>
      </section>

      <section className="method section-cream" id="methode">
        <div className="method-copy"><div className="section-label"><span>03</span> Une méthode qui vous ressemble</div><h2>De la première idée<br />à <em>l'offre signée.</em></h2><p>Chaque étape a son objectif, chaque décision reste la vôtre.</p><button className="button button-dark" onClick={() => scrollToId("simuler")}>Commencer mon parcours <span>↗</span></button></div>
        <div className="steps">
          <div className="step is-active"><span className="step-index">1</span><div><h3>Je fais le point</h3><p>Un diagnostic précis de ma capacité d'emprunt et de mon profil bancaire.</p></div><span className="step-arrow">↗</span></div>
          <div className="step"><span className="step-index">2</span><div><h3>Je construis</h3><p>Un dossier lisible, complet et prêt à être présenté aux banques.</p></div><span className="step-arrow">↗</span></div>
          <div className="step"><span className="step-index">3</span><div><h3>Je décide</h3><p>Je compare les options, je négocie avec les bons arguments, j'avance.</p></div><span className="step-arrow">↗</span></div>
        </div>
      </section>

      <section className="scenario-section section-light" id="tarifs">
        <div className="scenario-intro"><div className="section-label"><span>04</span> Un copilote pour chaque projet</div><h2>La bonne aide,<br /><em>au bon moment.</em></h2></div>
        <div className="scenario-tabs" role="tablist" aria-label="Votre projet">
          {(Object.keys(scenarios) as Scenario[]).map((key) => <button key={key} className={scenario === key ? "active" : ""} onClick={() => setScenario(key)} role="tab" aria-selected={scenario === key}>{key === "acheter" ? "J'achète" : key === "investir" ? "J'investis" : "J'optimise"}</button>)}
        </div>
        <div className="scenario-panel"><div className="scenario-copy"><span className="scenario-eyebrow">{activeScenario.eyebrow}</span><h3>{activeScenario.title}</h3><p>{activeScenario.body}</p><ul>{activeScenario.bullets.map((bullet) => <li key={bullet}><span>✓</span>{bullet}</li>)}</ul><button className="button button-dark" onClick={() => scrollToId("simuler")}>Voir ce qu'il me faut <span>↗</span></button></div><div className="scenario-visual"><div className="scenario-orbit orbit-one" /><div className="scenario-orbit orbit-two" /><div className="scenario-badge"><span>✦</span><strong>Votre projet</strong><small>mérite de la clarté</small></div><div className="scenario-ring" /></div></div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div><blockquote>Pour la première fois, je savais exactement ce que je pouvais demander à ma banque. J'ai arrêté de subir mon financement.</blockquote><div className="quote-author"><span className="avatar">L</span><div><strong>Louise T.</strong><span>Projet de résidence principale · Nantes</span></div><span className="quote-stars">★★★★★</span></div>
      </section>

      <section className="simulator-section" id="simuler">
        <div className="simulator-copy"><div className="section-label light"><span>05</span> Votre première étape</div><h2>Et si vous commenciez<br /><em>par savoir ?</em></h2><p>Deux minutes pour obtenir un premier repère sur votre capacité d'emprunt. C'est gratuit, confidentiel et sans engagement.</p><div className="mini-proof"><span>✦</span><span>Votre diagnostic est calculé par Courtia IA, puis vérifié par notre expertise bancaire.</span></div></div>
        <form className="simulator-card" onSubmit={handleEstimate}><div className="simulator-card-head"><span className="ai-spark">✦</span><div><span>DIAGNOSTIC COURTIA</span><strong>Votre première estimation</strong></div><span className="lock">⌑</span></div><label>Revenus nets mensuels du foyer<input type="number" min="0" placeholder="3 500" /></label><div className="form-row"><label>Apport disponible<input type="text" inputMode="numeric" placeholder="35 000 €" /></label><label>Durée souhaitée<select defaultValue="25"><option value="15">15 ans</option><option value="20">20 ans</option><option value="25">25 ans</option></select></label></div><button className="button button-accent button-full" type="submit">{estimated ? "Estimation prête ✓" : "Estimer ma capacité"} <span>↗</span></button><small>En continuant, vous acceptez notre politique de confidentialité.</small></form>
      </section>

      <section className="final-cta" id="contact"><div><span className="section-label"><span>06</span> Prêt à reprendre la main ?</span><h2>Votre projet mérite<br /><em>un copilote.</em></h2></div><button className="button button-dark" onClick={() => scrollToId("simuler")}>Parler à Courtia <span>↗</span></button></section>

      <footer className="footer"><div className="footer-top"><button className="brand" onClick={() => scrollToId("top")} aria-label="Courtia — retour en haut"><img className="brand-logo" src="/courtia-logo.png" alt="Courtia" /></button><p>Le courtage qui vous rend plus fort.</p><div className="footer-links"><a href="#solutions">Solutions</a><a href="#methode">La méthode</a><a href="#contact">Contact</a><a href="#">Mentions légales</a></div></div><div className="footer-bottom"><span>© 2026 Courtia. Tous droits réservés.</span><span>Intermédiaire en opérations de banque et services de paiement · ORIAS 20002802</span><span>Fait avec <b>✦</b> pour vos projets.</span></div></footer>
    </main>
  );
}
