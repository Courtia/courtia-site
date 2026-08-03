"use client";

import { FormEvent, useEffect, useState } from "react";

const features = [
  ["01", "Clara, votre copilote", "Une conversation simple pour comprendre votre projet, vos revenus et les points qui comptent vraiment."],
  ["02", "Un diagnostic lisible", "Dix axes analysés pour voir votre profil avec le regard d’une banque, sans jargon inutile."],
  ["03", "Un dossier qui avance", "Une attestation et des documents structurés, prêts à être partagés au bon moment."],
];

const audiences = [
  { id: "particuliers", label: "Pour les particuliers", title: "Comprenez votre profil", text: "Avant de visiter, de faire une offre ou de rencontrer votre banque, vous savez où vous en êtes.", action: "Découvrir mon profil", icon: "↗" },
  { id: "professionnels", label: "Pour les professionnels", title: "Sécurisez vos ventes", text: "Faites passer vos acquéreurs par Courtia avant la vente et avancez avec des projets mieux préparés.", action: "Découvrir Courtia Pro", icon: "↗" },
];

export default function Home() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function handleStart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => scrollToId("top")} aria-label="Courtia — retour en haut">
          <img className="brand-logo brand-logo-inverse" src="/courtia-logo.png" alt="Courtia" />
        </button>
        <nav className="nav-links" aria-label="Navigation principale">
          <button onClick={() => scrollToId("particuliers")}>Particuliers</button>
          <button onClick={() => scrollToId("professionnels")}>Professionnels</button>
          <button onClick={() => scrollToId("fonctionnalites")}>La plateforme</button>
        </nav>
        <button className="nav-login" onClick={() => scrollToId("contact")}>Se connecter <span>↗</span></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="hero-inner">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">Le crédit avec un temps d&apos;avance</span>
            <h1>Avant la banque,<br /><em>il y a Courtia.</em></h1>
            <p>Courtia est l&apos;outil IA qui vous aide à comprendre votre profil, préparer votre dossier et sécuriser votre projet avant la décision de la banque.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollToId("particuliers")}>Je suis particulier <span>↗</span></button>
              <button className="button button-glass" onClick={() => scrollToId("professionnels")}>Je suis professionnel <span>↗</span></button>
            </div>
            <div className="hero-meta"><span><b>10</b> axes analysés</span><i /> <span><b>&lt; 5 min</b> pour comprendre</span><i /> <span><b>100%</b> confidentiel</span></div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="floating-note note-top"><span className="mini-dot mint" /> Profil analysé <b>85/100</b></div>
            <div className="floating-note note-bottom"><span className="mini-check">✓</span> Projet prêt à avancer</div>
            <div className="app-window">
              <div className="app-sidebar">
                <div className="app-brand"><img src="/courtia-logo.png" alt="Courtia" /></div>
                <div className="app-nav active"><span>⌂</span> Tableau de bord</div><div className="app-nav"><span>◇</span> Mon projet</div><div className="app-nav"><span>◒</span> Mon profil</div><div className="app-nav"><span>✓</span> Attestation</div>
                <div className="app-sidebar-footer"><span className="avatar">S</span><small>Sophie<br /><b>Particulier</b></small></div>
              </div>
              <div className="app-main">
                <div className="app-topline"><span>Bonjour Sophie <span className="wave">✦</span></span><span className="live-pill"><i /> Projet en bonne voie</span></div>
                <div className="app-heading"><div><small>Votre profil emprunteur</small><h3>Un temps d&apos;avance<br /><em>sur votre projet.</em></h3></div><div className="score-ring"><strong>85</strong><span>/100</span></div></div>
                <div className="app-cards"><div><small>Capacité estimée</small><b>220 000 €</b><span className="up">↗ 8,4%</span></div><div><small>Apport disponible</small><b>35 000 €</b><span>Projet immobilier</span></div></div>
                <div className="app-bottom"><div><small>Votre parcours</small><div className="progress-label"><b>4 étapes sur 5</b><span>80%</span></div><div className="progress"><i /></div><span>Attestation en préparation</span></div><div className="clara-card"><span className="clara-avatar">C</span><div><b>Clara</b><small>Votre copilote IA</small></div><button aria-label="Continuer avec Clara">→</button></div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-cue"><span /> Faites défiler</div>
      </section>

      <section className="audience-section" aria-label="Les usages de Courtia">
        <div className="section-wrap audience-wrap">
          <div className="section-intro" data-reveal><span className="eyebrow eyebrow-light">Un outil, deux façons d&apos;avancer</span><h2>Le bon réflexe,<br /><em>au bon moment.</em></h2></div>
          <div className="audience-grid">
            {audiences.map((audience, index) => <article className={`audience-card audience-card-${index + 1}`} id={audience.id} key={audience.id} data-reveal>
              <div className="card-number">0{index + 1}</div><span className="audience-label">{audience.label}</span><h3>{audience.title}</h3><p>{audience.text}</p><button className="text-link" onClick={() => scrollToId(index === 0 ? "fonctionnalites" : "pro-flow")}>{audience.action} <span>{audience.icon}</span></button><div className="card-glow" />
            </article>)}
          </div>
        </div>
      </section>

      <section className="story-section section-wrap" data-reveal>
        <div className="eyebrow eyebrow-light">Le point de départ</div>
        <div className="story-layout"><div><h2>Vous voyez votre projet.<br /><em>La banque voit votre dossier.</em></h2></div><div className="story-copy"><p>Vous connaissez votre projet, parfois votre capacité d&apos;emprunt, mais rarement la façon dont votre dossier sera réellement analysé.</p><p>Courtia vous aide à voir les deux — pour arriver mieux préparé, au moment où chaque décision compte.</p><button className="text-link dark-link" onClick={() => scrollToId("fonctionnalites")}>Voir comment ça marche <span>↗</span></button></div></div>
        <div className="story-stats"><div><strong>10</strong><span>axes pour comprendre<br />votre profil</span></div><div><strong>&lt; 5 min</strong><span>pour obtenir<br />votre diagnostic</span></div><div><strong>30 j</strong><span>de validité pour<br />votre attestation</span></div></div>
      </section>

      <section className="platform-section" id="fonctionnalites">
        <div className="section-wrap"><div className="platform-heading" data-reveal><div><span className="eyebrow">La plateforme Courtia</span><h2>Comprendre.<br /><em>Préparer. Agir.</em></h2></div><p>Un parcours simple pour donner à votre projet une longueur d&apos;avance, avant la banque.</p></div>
          <div className="feature-layout">
            <div className="feature-list">{features.map(([number, title, text]) => <article key={number} className="feature-item" data-reveal><span className="feature-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><span className="feature-arrow">↗</span></article>)}</div>
            <div className="diagnostic-card" data-reveal><div className="diag-top"><span className="eyebrow">Votre diagnostic</span><span className="diag-live"><i /> En direct</span></div><h3>Le profil que<br /><em>la banque voit.</em></h3><div className="diag-score"><div className="big-score">85<span>/100</span></div><div className="diag-bars"><i style={{width:"88%"}} /><i style={{width:"75%"}} /><i style={{width:"92%"}} /><i style={{width:"64%"}} /><i style={{width:"81%"}} /></div></div><div className="diag-tags"><span>Stabilité</span><span>Apport</span><span>Gestion</span><span>Reste à vivre</span></div><div className="diag-footer"><span>Votre prochaine étape</span><b>Préparer votre attestation <span>→</span></b></div></div>
          </div>
        </div>
      </section>

      <section className="screens-section" id="app">
        <div className="section-wrap"><div className="screens-heading" data-reveal><div><span className="eyebrow eyebrow-light">L&apos;expérience Courtia</span><h2>Votre projet,<br /><em>en un coup d&apos;œil.</em></h2></div><div className="screens-brand"><img src="/courtia-logo.png" alt="Courtia" /><span>Une application pensée pour avancer.</span></div></div>
          <div className="screen-gallery">
            <div className="screen-frame screen-dashboard" data-reveal><div className="screen-chrome"><span /><span /><span /><b>courtia.app/dashboard</b></div><div className="screen-body"><aside><img src="/courtia-logo.png" alt="Courtia" /><i className="screen-nav-active">▦ Tableau de bord</i><i>◇ Mon projet</i><i>◒ Mon profil</i><i>✓ Attestation</i></aside><div className="screen-content"><div className="screen-greeting">Bonjour Sophie <span>Projet en bonne voie</span></div><small>Votre profil emprunteur</small><h3>Un temps d&apos;avance<br /><em>sur votre projet.</em></h3><div className="screen-score-row"><div><b>85</b><span>/100</span><small>Score Courtia</small></div><div className="screen-mini-chart"><i /><i /><i /><i /><i /></div></div><div className="screen-metric-row"><div><small>Capacité estimée</small><b>220 000 €</b></div><div><small>Apport disponible</small><b>35 000 €</b></div></div></div></div><span className="screen-caption">01 · Tableau de bord</span></div>
            <div className="screen-frame screen-profile" data-reveal><div className="screen-chrome"><span /><span /><span /><b>courtia.app/mon-profil</b></div><div className="screen-body profile-body"><div className="profile-header"><div><small>Mon profil emprunteur</small><h3>Le regard de<br /><em>la banque.</em></h3></div><div className="profile-ring"><b>85</b><span>/100</span></div></div><div className="profile-axis"><div><span>Stabilité professionnelle</span><b>92%</b><i><em style={{width:"92%"}} /></i></div><div><span>Gestion bancaire</span><b>84%</b><i><em style={{width:"84%"}} /></i></div><div><span>Apport</span><b>78%</b><i><em style={{width:"78%"}} /></i></div><div><span>Reste à vivre</span><b>88%</b><i><em style={{width:"88%"}} /></i></div></div><div className="profile-pill">✦ Clara a identifié 3 points forts dans votre dossier</div></div><span className="screen-caption">02 · Diagnostic détaillé</span></div>
            <div className="screen-frame screen-certificate" data-reveal><div className="screen-chrome"><span /><span /><span /><b>courtia.app/attestation</b></div><div className="certificate-body"><div className="certificate-top"><img src="/courtia-logo.png" alt="Courtia" /><span>Attestation #CU-8492</span></div><div className="certificate-seal">✓</div><small>PROFIL EMPRUNTEUR</small><h3>Votre projet est<br /><em>prêt à avancer.</em></h3><div className="certificate-summary"><span><small>Projet</small><b>Appartement · 300 000 €</b></span><span><small>Diagnostic</small><b>Très bon profil</b></span></div><button className="certificate-button">Partager l&apos;attestation ↗</button></div><span className="screen-caption">03 · Attestation partageable</span></div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-wrap"><div className="timeline-heading" data-reveal><span className="eyebrow">Le réflexe Courtia</span><h2>Avant chaque étape,<br /><em>préparez la suivante.</em></h2><p>Avant de chercher. Avant de faire une offre. Avant de rencontrer votre banque. Courtia vous donne le temps d&apos;avance qu&apos;il vous manquait.</p></div><div className="timeline" data-reveal><div className="timeline-line" /><div><span>01</span><h3>Dialogue</h3><p>Clara vous pose les bonnes questions.</p></div><div><span>02</span><h3>Analyse</h3><p>Votre profil est lu sur 10 axes.</p></div><div><span>03</span><h3>Attestation</h3><p>Votre projet devient partageable.</p></div><div><span>04</span><h3>Partage</h3><p>Vous avancez avec les bons interlocuteurs.</p></div></div></div>
      </section>

      <section className="pro-section" id="professionnels">
        <div className="section-wrap pro-wrap"><div className="pro-copy" data-reveal><span className="eyebrow">Courtia pour les professionnels</span><h2>Votre acquéreur est-il<br /><em>vraiment prêt ?</em></h2><p>Les projets motivés ne deviennent pas toujours des ventes. Courtia vous aide à préparer vos acquéreurs avant l&apos;offre et à avancer avec plus de visibilité.</p><button className="button button-primary" onClick={() => scrollToId("contact")}>Découvrir Courtia Pro <span>↗</span></button></div><div className="pro-panel" id="pro-flow" data-reveal><div className="pro-panel-top"><span>Parcours acquéreur</span><span className="pro-badge">Courtia Pro</span></div><div className="pro-buyer"><span className="buyer-avatar">A</span><div><b>Alexandre Martin</b><small>Appartement · 300 000 €</small></div><span className="ready-badge">Acquéreur prêt</span></div><div className="pro-steps"><div className="done"><span>✓</span><small>Projet</small></div><i /><div className="done"><span>✓</span><small>Diagnostic</small></div><i /><div className="done"><span>✓</span><small>Attestation</small></div><i /><div><span>4</span><small>Offre</small></div></div><div className="pro-panel-footer"><span>Dernière activité <b>il y a 8 min</b></span><button onClick={() => scrollToId("contact")}>Voir le dossier ↗</button></div></div></div>
        <div className="pro-proof section-wrap" data-reveal><div><span className="proof-icon">✦</span><b>Moins de visites inutiles.</b><span>Des acquéreurs mieux préparés.</span></div><div><span className="proof-icon">⌁</span><b>Avant la vente,</b><span>il y a Courtia.</span></div></div>
      </section>

      <section className="manifesto-section section-wrap" data-reveal><span className="manifesto-mark">“</span><p>Pour faire court, mieux vaut connaître son dossier avant que la banque ne le découvre.</p><span className="manifesto-signature">Pour faire court, il y a Courtia.</span></section>

      <section className="cta-section" id="contact"><div className="cta-glow" /><div className="section-wrap cta-inner" data-reveal><span className="eyebrow">Avant la banque, il y a Courtia</span><h2>Donnez un temps d&apos;avance<br /><em>à votre projet.</em></h2><p>Créez votre compte et découvrez votre profil en quelques minutes.</p><form onSubmit={handleStart}><input type="email" required placeholder="Votre adresse email" aria-label="Votre adresse email" /><button className="button button-primary" type="submit">{sent ? "Lien envoyé ✓" : "Commencer"} <span>↗</span></button></form><small>Aucun engagement · Données protégées · Parcours confidentiel</small></div></section>

      <footer className="footer"><div className="section-wrap footer-top"><button className="brand" onClick={() => scrollToId("top")} aria-label="Courtia — retour en haut"><img className="brand-logo" src="/courtia-logo.png" alt="Courtia" /></button><p>Le crédit avec un temps d&apos;avance.</p><nav><a href="#particuliers">Particuliers</a><a href="#professionnels">Professionnels</a><a href="#fonctionnalites">La plateforme</a><a href="#contact">Contact</a></nav></div><div className="section-wrap footer-bottom"><span>© 2026 Courtia</span><span>RGPD · IA Act · Chiffrement</span><span>Fait avec <b>✦</b> pour vos projets.</span></div></footer>
    </main>
  );
}
