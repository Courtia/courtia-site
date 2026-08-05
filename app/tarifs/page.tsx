"use client";

import { useEffect } from "react";

const COURTIA_APP_URL = "https://courtia-copilote.benjaminpoisson17.chatgpt.site/";

const plans = [
  {
    number: "01",
    label: "Pour commencer",
    title: <>Étude de<br /><em>faisabilité</em></>,
    price: "Gratuit",
    description: "Évaluez votre profil et la viabilité de votre projet grâce à un diagnostic clair, construit pour vous aider à décider.",
    items: ["Diagnostic IA de votre profil", "Analyse sur 10 axes", "Premières recommandations"],
    tone: "pricing-card-blue",
    action: "Commencer mon étude",
  },
  {
    number: "02",
    label: "Pour convaincre",
    title: <>Attestation<br /><em>de financement</em></>,
    price: "9 €",
    priceNote: "Gratuite via un agent immobilier partenaire",
    description: "Transformez votre diagnostic en preuve concrète pour rassurer un vendeur et donner du poids à votre offre.",
    items: ["Attestation Courtia partageable", "Synthèse de votre profil", "Validité de 30 jours"],
    tone: "pricing-card-lime",
    action: "Obtenir mon attestation",
  },
  {
    number: "03",
    label: "Pour avancer seul",
    title: <>Dossier de prêt<br /><em>au bout des doigts</em></>,
    price: "199 €",
    description: "Téléchargez un dossier complet, une note de synthèse et un plan de financement prêts à présenter aux banques.",
    items: ["Dossier de prêt complet", "Note de synthèse personnalisée", "Plan de financement structuré"],
    tone: "pricing-card-dark",
    action: "Préparer mon dossier",
  },
];

export default function TarifsPage() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-pricing-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pricing-is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell tarifs-page">
      <header className="topbar tarifs-topbar">
        <a className="brand" href="/" aria-label="Courtia — accueil"><img className="brand-logo brand-logo-inverse" src="/courtia-logo.png" alt="Courtia" /></a>
        <nav className="nav-links" aria-label="Navigation tarifs"><a href="/">Accueil</a><a href="/#fonctionnalites">La plateforme</a><a href="/#app">L&apos;application</a></nav>
        <a className="nav-pro" href="/professionnels">Courtia Pro <span>↗</span></a>
      </header>

      <section className="pricing-hero">
        <div className="pricing-hero-grid" />
        <div className="pricing-hero-glow pricing-hero-glow-a" />
        <div className="pricing-hero-glow pricing-hero-glow-b" />
        <div className="section-wrap pricing-hero-inner" data-pricing-reveal>
          <span className="eyebrow">Les parcours Courtia</span>
          <h1>Choisissez votre<br /><em>temps d&apos;avance.</em></h1>
          <p>De la première analyse au dossier prêt à présenter, Courtia vous accompagne avec des livrables concrets, au moment où vous en avez besoin.</p>
          <div className="pricing-proof"><span><b>Simple</b> à comprendre</span><i /><span><b>Concret</b> à partager</span><i /><span><b>Confidentiel</b> par défaut</span></div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="section-wrap"><div className="pricing-intro" data-pricing-reveal><span className="eyebrow eyebrow-light">Une progression claire</span><h2>Commencez par comprendre.<br /><em>Avancez avec les bons documents.</em></h2><p>Chaque parcours Courtia correspond à une étape de votre projet immobilier. Vous gardez la main du début à la fin.</p></div>
          <div className="pricing-grid">
            {plans.map((plan) => <article className={`pricing-card ${plan.tone}`} data-pricing-reveal key={plan.number}><div className="pricing-card-top"><span>{plan.number}</span><b>{plan.label}</b></div><h3>{plan.title}</h3><div className="pricing-price">{plan.price}</div>{plan.priceNote && <div className="pricing-price-note">{plan.priceNote}</div>}<p>{plan.description}</p><ul>{plan.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul><a className="pricing-action" href={COURTIA_APP_URL}>{plan.action}<span>↗</span></a></article>)}
          </div>
        </div>
      </section>

      <section className="pricing-note-section"><div className="section-wrap pricing-note-wrap" data-pricing-reveal><div><span className="eyebrow eyebrow-light">Le réflexe Courtia</span><h2>Vous ne payez pas<br /><em>pour vous perdre.</em></h2></div><p>Chaque étape vous donne une vision plus claire de votre profil et un document utile pour la suite. Vous avancez seulement quand vous êtes prêt.</p></div></section>

      <footer className="footer"><div className="section-wrap footer-top"><a className="brand" href="/"><img className="brand-logo" src="/courtia-logo.png" alt="Courtia" /></a><p>Le crédit avec un temps d&apos;avance.</p><nav><a href="/">Particuliers</a><a href="/#fonctionnalites">La plateforme</a><a href="/#app">L&apos;application</a><a href="/professionnels">Courtia Pro ↗</a></nav></div><div className="section-wrap footer-bottom"><span>© 2026 Courtia</span><span>RGPD · IA Act · Chiffrement</span><span>Fait avec <b>✦</b> pour vos projets.</span></div></footer>
    </main>
  );
}
