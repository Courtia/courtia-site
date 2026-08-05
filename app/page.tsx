"use client";

import { useEffect } from "react";

const COURTIA_APP_URL = "https://courtia-copilote.benjaminpoisson17.chatgpt.site/";

const features = [
  ["01", "Clara, votre copilote", "Une conversation simple pour comprendre votre projet, vos revenus et les points qui comptent vraiment."],
  ["02", "Un diagnostic lisible", "Dix axes analysés pour voir votre profil avec le regard d’une banque, sans jargon inutile."],
  ["03", "Un dossier qui avance", "Une attestation et des documents structurés, prêts à être partagés au bon moment."],
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const hero = document.querySelector<HTMLElement>(".hero");
    const heroVisual = document.querySelector<HTMLElement>(".hero-visual");
    function moveHero(event: PointerEvent) {
      if (!hero || !heroVisual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      heroVisual.style.setProperty("--tilt-y", `${x * 2.2}deg`);
      heroVisual.style.setProperty("--tilt-x", `${y * -1.5}deg`);
      heroVisual.style.setProperty("--float-x", `${x * 5}px`);
      heroVisual.style.setProperty("--float-y", `${y * 4}px`);
    }
    hero?.addEventListener("pointermove", moveHero);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      hero?.removeEventListener("pointermove", moveHero);
    };
  }, []);

  function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => scrollToId("top")} aria-label="Courtia — retour en haut">
          <img className="brand-logo brand-logo-inverse" src="/courtia-logo.png" alt="Courtia" />
        </button>
        <nav className="nav-links" aria-label="Navigation principale">
          <button onClick={() => scrollToId("particuliers")}>Pour vous</button>
          <button onClick={() => scrollToId("fonctionnalites")}>La plateforme</button>
          <button onClick={() => scrollToId("app")}>L&apos;application</button>
          <a href="/tarifs">Tarifs</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="hero-inner">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">Le crédit avec un temps d&apos;avance</span>
            <h1>Avant la banque,<br /><em>il y a Courtia.</em></h1>
            <p>Courtia est votre copilote financier : l&apos;outil IA qui vous aide à comprendre votre profil, préparer votre dossier et présenter le projet que votre banquier attend.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={COURTIA_APP_URL}>Créer mon compte <span>↗</span></a>
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
                <div className="app-cards"><div><small>Capacité estimée</small><b>Profil cohérent</b><span className="up">↗ Très favorable</span></div><div><small>Projet identifié</small><b>Prêt immobilier</b><span>Parcours personnalisé</span></div></div>
                <div className="app-bottom"><div><small>Votre parcours</small><div className="progress-label"><b>4 étapes sur 5</b><span>80%</span></div><div className="progress"><i /></div><span>Attestation en préparation</span></div><div className="clara-card"><span className="clara-avatar">C</span><div><b>Clara</b><small>Votre copilote IA</small></div><button aria-label="Continuer avec Clara">→</button></div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-cue"><span /> Faites défiler</div>
      </section>

      <section className="proof-marquee" aria-label="Les moments où Courtia vous aide"><div className="proof-marquee-track"><span>AVANT DE CHERCHER</span><i>✦</i><span>AVANT DE FAIRE UNE OFFRE</span><i>✦</i><span>AVANT LA BANQUE</span><i>✦</i><span>AVANT DE NÉGOCIER</span><i>✦</i><span>AVANT DE CHERCHER</span><i>✦</i><span>AVANT DE FAIRE UNE OFFRE</span><i>✦</i></div></section>

      <section className="audience-section" id="particuliers" aria-label="Courtia pour les particuliers">
        <div className="section-wrap audience-wrap private-wrap">
          <div className="section-intro" data-reveal><span className="eyebrow eyebrow-light">Pour les particuliers</span><h2>Le bon réflexe,<br /><em>au bon moment.</em></h2></div>
          <div className="private-card-grid">
            <article className="private-card private-card-main" data-reveal><div className="card-number">01</div><span className="audience-label">Votre projet immobilier</span><h3>Présentez le dossier que votre banquier attend.</h3><p>Avant de visiter, de faire une offre ou de rencontrer votre banque, vous savez où vous en êtes et quoi préparer.</p><a className="text-link" href={COURTIA_APP_URL}>Découvrir mon profil <span>↗</span></a><div className="card-glow" /></article>
            <div className="private-proof-stack"><article className="private-proof" data-reveal><span>✦</span><div><b>Une faisabilité immédiate</b><p>Testez la viabilité de votre projet en un clic.</p></div></article><article className="private-proof" data-reveal><span>✓</span><div><b>Un dossier simplifié</b><p>Une attestation et des documents prêts à partager.</p></div></article></div>
          </div>
        </div>
      </section>

      <section className="story-section section-wrap" data-reveal>
        <div className="eyebrow eyebrow-light">Le point de départ</div>
        <div className="story-layout"><div><h2>Vous voyez votre projet.<br /><em>La banque voit votre dossier.</em></h2></div><div className="story-copy"><p>Vous connaissez votre projet, parfois votre capacité d&apos;emprunt, mais rarement la façon dont votre dossier sera réellement analysé.</p><p>Courtia vous aide à voir les deux — pour arriver mieux préparé, au moment où chaque décision compte.</p><button className="text-link dark-link" onClick={() => scrollToId("fonctionnalites")}>Voir comment ça marche <span>↗</span></button></div></div>
        <div className="story-stats"><div><strong>10</strong><span>axes pour comprendre<br />votre profil</span></div><div><strong>&lt; 5 min</strong><span>pour obtenir<br />votre diagnostic</span></div><div><strong>30 j</strong><span>de validité pour<br />votre attestation</span></div></div>
      </section>

      <section className="mosaic-section">
        <div className="section-wrap"><div className="mosaic-heading" data-reveal><div><span className="eyebrow eyebrow-light">Une plateforme qui vous répond</span><h2>Pas une simulation.<br /><em>Un regard sur votre projet.</em></h2></div><p>Chaque écran Courtia transforme une question complexe en prochaine étape claire.</p></div>
          <div className="mosaic-grid">
            <article className="mosaic-card mosaic-chat" data-reveal><div className="mosaic-card-top"><span className="mosaic-icon clara-icon">C</span><div><b>Clara</b><small>Votre copilote IA</small></div><span className="online-dot" /></div><div className="chat-bubble chat-bubble-soft">Bonjour Sophie, où en êtes-vous de votre projet ?</div><div className="chat-bubble chat-bubble-user">Je prépare mon premier achat immobilier.</div><div className="chat-bubble chat-bubble-soft">Très bien. Commençons par regarder le profil que la banque verra en vous.</div><div className="mosaic-input">Écrivez votre réponse… <span>↑</span></div><label>01 · Dialogue</label></article>
            <article className="mosaic-card mosaic-radar" data-reveal><div className="mosaic-card-top"><span className="mosaic-icon radar-icon">◒</span><div><b>Votre diagnostic</b><small>Mis à jour à l&apos;instant</small></div><span className="mosaic-menu">•••</span></div><div className="radar-score"><strong>85</strong><span>/100</span></div><div className="radar-lines"><i /><i /><i /><i /><i /></div><div className="radar-tags"><span>Stabilité</span><span>Apport</span><span>Gestion</span></div><label>02 · Analyse</label></article>
            <article className="mosaic-card mosaic-attestation" data-reveal><div className="attestation-orb">✓</div><span className="eyebrow">Attestation Courtia</span><h3>Votre projet est<br /><em>prêt à avancer.</em></h3><div className="attestation-line"><span>Diagnostic</span><b>Très bon profil</b></div><div className="attestation-line"><span>Validité</span><b>30 jours</b></div><button>Partager mon attestation <span>↗</span></button><label>03 · Partage</label></article>
          </div>
        </div>
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
            <div className="screen-frame screen-dashboard" data-reveal><div className="screen-chrome"><span /><span /><span /><b>courtia.app/dashboard</b></div><div className="screen-body"><aside><img src="/courtia-logo.png" alt="Courtia" /><i className="screen-nav-active">▦ Tableau de bord</i><i>◇ Mon projet</i><i>◒ Mon profil</i><i>✓ Attestation</i></aside><div className="screen-content"><div className="screen-greeting">Bonjour Sophie <span>Projet en bonne voie</span></div><small>Votre profil emprunteur</small><h3>Un temps d&apos;avance<br /><em>sur votre projet.</em></h3><div className="screen-score-row"><div><b>85</b><span>/100</span><small>Score Courtia</small></div><div className="screen-mini-chart"><i /><i /><i /><i /><i /></div></div><div className="screen-metric-row"><div><small>Capacité estimée</small><b>Profil cohérent</b></div><div><small>Projet identifié</small><b>Prêt immobilier</b></div></div></div></div><span className="screen-caption">01 · Tableau de bord</span></div>
            <div className="screen-frame screen-profile" data-reveal><div className="screen-chrome"><span /><span /><span /><b>courtia.app/mon-profil</b></div><div className="screen-body profile-body"><div className="profile-header"><div><small>Mon profil emprunteur</small><h3>Le regard de<br /><em>la banque.</em></h3></div><div className="profile-ring"><b>85</b><span>/100</span></div></div><div className="profile-axis"><div><span>Stabilité de l&apos;emploi</span><b>92%</b><i><em style={{width:"92%"}} /></i></div><div><span>Gestion bancaire</span><b>84%</b><i><em style={{width:"84%"}} /></i></div><div><span>Apport</span><b>78%</b><i><em style={{width:"78%"}} /></i></div><div><span>Reste à vivre</span><b>88%</b><i><em style={{width:"88%"}} /></i></div></div><div className="profile-pill">✦ Clara a identifié 3 points forts dans votre dossier</div></div><span className="screen-caption">02 · Diagnostic détaillé</span></div>
            <div className="screen-frame screen-certificate" data-reveal><div className="screen-chrome"><span /><span /><span /><b>courtia.app/attestation</b></div><div className="certificate-body"><div className="certificate-top"><img src="/courtia-logo.png" alt="Courtia" /><span>Attestation #CU-8492</span></div><div className="certificate-seal">✓</div><small>PROFIL EMPRUNTEUR</small><h3>Votre projet est<br /><em>prêt à avancer.</em></h3><div className="certificate-summary"><span><small>Projet</small><b>Projet immobilier</b></span><span><small>Diagnostic</small><b>Très bon profil</b></span></div><button className="certificate-button">Partager l&apos;attestation ↗</button></div><span className="screen-caption">03 · Attestation partageable</span></div>
          </div>
        </div>
      </section>

      <section className="offers-section" id="offres">
        <div className="section-wrap"><div className="offers-heading" data-reveal><div><span className="eyebrow eyebrow-light">Votre parcours Courtia</span><h2>De la première question<br /><em>au dossier prêt à partir.</em></h2></div><p>Choisissez le niveau d&apos;autonomie dont vous avez besoin. Vous avancez à votre rythme, avec les bons livrables au bon moment.</p></div>
          <div className="offer-grid">
            <article className="offer-card offer-card-start" data-reveal><div className="offer-card-top"><span>01</span><b>Pour commencer</b></div><h3>Étude de<br /><em>faisabilité</em></h3><p>Évaluez votre profil et la viabilité de votre projet grâce à un diagnostic clair, construit pour vous aider à décider.</p><div className="offer-footer"><strong>Diagnostic clair</strong><a href={COURTIA_APP_URL}>Commencer <span>↗</span></a></div></article>
            <article className="offer-card offer-card-attestation" data-reveal><div className="offer-card-top"><span>02</span><b>Pour convaincre</b></div><h3>Attestation<br /><em>de financement</em></h3><p>Transformez votre diagnostic en preuve concrète pour rassurer un vendeur et donner du poids à votre offre.</p><div className="offer-footer"><strong>Prête à partager</strong><a href={COURTIA_APP_URL}>Obtenir mon attestation <span>↗</span></a></div></article>
            <article className="offer-card offer-card-dossier" data-reveal><div className="offer-card-top"><span>03</span><b>Pour avancer seul</b></div><h3>Dossier de prêt<br /><em>au bout des doigts</em></h3><p>Téléchargez un dossier complet, une note de synthèse et un plan de financement prêts à présenter aux banques.</p><div className="offer-footer"><strong>Prêt à présenter</strong><a href={COURTIA_APP_URL}>Préparer mon dossier <span>↗</span></a></div></article>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-wrap"><div className="timeline-heading" data-reveal><span className="eyebrow">Le réflexe Courtia</span><h2>Avant chaque étape,<br /><em>préparez la suivante.</em></h2><p>Avant de chercher. Avant de faire une offre. Avant de rencontrer votre banque. Courtia vous donne le temps d&apos;avance qu&apos;il vous manquait.</p></div><div className="timeline" data-reveal><div className="timeline-line" /><div><span>01</span><h3>Dialogue</h3><p>Clara vous pose les bonnes questions.</p></div><div><span>02</span><h3>Analyse</h3><p>Votre profil est lu sur 10 axes.</p></div><div><span>03</span><h3>Attestation</h3><p>Votre projet devient partageable.</p></div><div><span>04</span><h3>Partage</h3><p>Vous avancez avec les bons interlocuteurs.</p></div></div></div>
      </section>

      <section className="manifesto-section section-wrap" data-reveal><span className="manifesto-mark">“</span><p>Pour faire court, mieux vaut connaître son dossier avant que la banque ne le découvre.</p><span className="manifesto-signature">Pour faire court, il y a Courtia.</span></section>

      <section className="cta-section" id="contact"><div className="cta-glow" /><div className="section-wrap cta-inner" data-reveal><span className="eyebrow">Avant la banque, il y a Courtia</span><h2>Donnez un temps d&apos;avance<br /><em>à votre projet.</em></h2><p>Créez votre compte et découvrez votre profil en quelques minutes.</p><a className="button button-primary" href={COURTIA_APP_URL}>Commencer <span>↗</span></a><small>Aucun engagement · Données protégées · Parcours confidentiel</small></div></section>

      <footer className="footer"><div className="section-wrap footer-top"><button className="brand" onClick={() => scrollToId("top")} aria-label="Courtia — retour en haut"><img className="brand-logo" src="/courtia-logo.png" alt="Courtia" /></button><p>Le crédit avec un temps d&apos;avance.</p><nav><a href="#particuliers">Pour vous</a><a href="#fonctionnalites">La plateforme</a><a href="#app">L&apos;application</a></nav></div><div className="section-wrap footer-bottom"><span>© 2026 Courtia</span><span>RGPD · IA Act · Chiffrement</span><span>Fait avec <b>✦</b> pour vos projets.</span></div></footer>
    </main>
  );
}
