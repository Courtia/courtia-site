"use client";

import { useEffect, useState } from "react";

import { COURTIA_CONTACT_PRO, COURTIA_EMAIL, COURTIA_PRO_URL, COURTIA_TEL_AFFICHE, COURTIA_TEL_LIEN } from "../site-config";

const proSteps = [
  ["01", "Partagez Courtia", "Invitez votre acquéreur avant la visite, l’offre ou la négociation."],
  ["02", "Il prépare son dossier", "Son projet, ses revenus et son profil sont structurés avec Clara."],
  ["03", "Vous suivez l’avancée", "Visualisez les étapes franchies et arrivez mieux préparé à la vente."],
];

const proAudienceModules = [
  {
    icon: "⌂",
    label: "Agent immobilier",
    text: "Qualifiez vos acquéreurs et avancez avec des dossiers conformes LCBFT.",
    action: "Découvrir",
    tone: "agent",
  },
  {
    icon: "▥",
    label: "Banquier",
    text: "Recevez des dossiers emprunteurs pré-qualifiés, prêts à être étudiés.",
    action: "Découvrir",
    tone: "banker",
  },
  {
    icon: "⚖",
    label: "Notaire",
    text: "Retrouvez des dossiers acheteurs préparés, avec la conformité intégrée.",
    action: "En savoir plus",
    tone: "notary",
  },
  {
    icon: "↗",
    label: "Courtier",
    text: "Automatisez la qualification et suivez chaque projet depuis votre pipeline.",
    action: "En savoir plus",
    tone: "broker",
  },
];


export default function ProfessionalsPage() {
  const [headerOnLight, setHeaderOnLight] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-pro-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pro-is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateHeaderTone = () => {
      const probeY = 126;
      const currentSection = Array.from(document.querySelectorAll<HTMLElement>(".pro-page > section, .pro-page > footer"))
        .find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= probeY && bounds.bottom > probeY;
        });
      setHeaderOnLight(currentSection?.dataset.headerTone === "light");
    };

    updateHeaderTone();
    window.addEventListener("scroll", updateHeaderTone, { passive: true });
    window.addEventListener("resize", updateHeaderTone);
    return () => {
      window.removeEventListener("scroll", updateHeaderTone);
      window.removeEventListener("resize", updateHeaderTone);
    };
  }, []);

  function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="pro-page">
      <header className={`pro-topbar${headerOnLight ? " pro-topbar-light" : ""}`}>
        <a className="brand" href="/"><img className="brand-logo brand-logo-inverse" src="/courtia-logo.png" alt="Courtia" /></a>
        <nav><a href="#pro-feature">La solution</a><a href="#parcours">Le parcours</a><a href="#contact">Contact</a></nav>
        <div className="pro-topbar-actions">
          <a className="pro-login" href={COURTIA_PRO_URL}>Se connecter <span>↗</span></a>
          <a className="pro-back" href="/">Espace particulier <span>↗</span></a>
        </div>
      </header>

      <section className="pro-hero-page" id="top">
        <div className="pro-page-grid" /><div className="pro-page-glow pro-page-glow-a" /><div className="pro-page-glow pro-page-glow-b" />
        <div className="pro-hero-inner">
          <div className="pro-page-copy" data-pro-reveal><span className="eyebrow">Courtia pour les professionnels</span><h1>Votre acquéreur est-il<br /><em>vraiment prêt ?</em></h1><p>Les projets motivés ne deviennent pas toujours des ventes. Courtia vous aide à préparer vos acquéreurs avant l&apos;offre et à avancer avec plus de visibilité.</p><div className="pro-actions"><button className="button button-primary" onClick={() => scrollToId("contact")}>Commencer <span>↗</span></button><button className="button button-glass" onClick={() => scrollToId("pro-feature")}>Démarrer <span>↓</span></button></div><div className="pro-meta"><span><b>Moins</b> de visites inutiles</span><i /><span><b>Plus</b> de projets préparés</span></div></div>
          <div className="pro-hero-product" data-pro-reveal><div className="pro-floating pro-floating-top"><span>✓</span> Acquéreur prêt</div><div className="pro-floating pro-floating-bottom"><span>↗</span> Dossier partagé</div><div className="pro-app-window"><div className="pro-app-top"><img src="/courtia-logo.png" alt="Courtia" /><span className="pro-app-url">courtia.app/pro</span><span className="pro-live"><i /> En direct</span></div><div className="pro-app-title"><div><small>Votre pipeline acquéreurs</small><h3>Les projets qui<br /><em>avancent.</em></h3></div><span className="pro-date">Aujourd&apos;hui ⌄</span></div><div className="pro-mini-stats"><div><small>Acquéreurs actifs</small><b>24</b><span>↗ 12% ce mois</span></div><div><small>Projets préparés</small><b>18</b><span>Sur les 30 derniers jours</span></div><div><small>Temps gagné</small><b>+ 6h</b><span>Cette semaine</span></div></div><div className="pro-app-list"><div className="pro-list-heading"><span>Derniers acquéreurs</span><b>Voir tout ↗</b></div><div className="pro-list-row"><span className="list-avatar blue">A</span><span><b>Alexandre Martin</b><small>Appartement · 300 000 €</small></span><strong className="list-status ready">Acquéreur prêt</strong></div><div className="pro-list-row"><span className="list-avatar green">C</span><span><b>Claire Dubois</b><small>Maison · 420 000 €</small></span><strong className="list-status analysis">En analyse</strong></div></div></div></div>
        </div>
      </section>

      <section className="pro-audience-section" id="pro-audience">
        <div className="pro-page-grid" /><div className="pro-page-glow pro-audience-glow-a" /><div className="pro-page-glow pro-audience-glow-b" />
        <div className="section-wrap">
          <div className="pro-audience-heading" data-pro-reveal>
            <span className="eyebrow">Courtia pour les professionnels</span>
            <h2>Professionnels de l&apos;immobilier,<br /><em>équipez-vous avec Courtia.</em></h2>
            <p>Recevez des prospects qualifiés, suivez votre pipeline et soyez conformes.</p>
          </div>
          <div className="pro-audience-grid">
            {proAudienceModules.map((module) => (
              <article className={`pro-audience-card pro-audience-card-${module.tone}`} data-pro-reveal key={module.label}>
                <span className="pro-audience-icon" aria-hidden="true">{module.icon}</span>
                <h3>{module.label}</h3>
                <p>{module.text}</p>
                <a href="#pro-launch">{module.action} <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pro-intro-section" data-header-tone="light" id="pro-feature"><div className="section-wrap pro-intro-wrap" data-pro-reveal><div><span className="eyebrow eyebrow-light">Le constat</span><h2>La vraie clé de la vente,<br /><em>c&apos;est un dossier solide.</em></h2></div><div className="pro-intro-copy"><p>Vous ne cherchez pas simplement des visiteurs. Vous cherchez des acquéreurs capables d&apos;aller au bout de leur projet.</p><p>Courtia prépare leur profil avant la vente pour créer des échanges plus simples, des offres plus crédibles et moins de temps perdu.</p></div></div><div className="section-wrap pro-quote" data-pro-reveal><span>“</span><p>Avant la vente,<br /><em>il y a Courtia.</em></p><b>Le réflexe des projets prêts.</b></div></section>

      <section className="pro-path-section" id="parcours"><div className="section-wrap"><div className="pro-path-heading" data-pro-reveal><span className="eyebrow">Un parcours simple</span><h2>Faites passer votre acquéreur<br /><em>par Courtia.</em></h2><p>Un outil de préparation qui s&apos;intègre naturellement dans votre parcours de vente.</p></div><div className="pro-step-grid">{proSteps.map(([number, title, text]) => <article key={number} data-pro-reveal><span>{number}</span><h3>{title}</h3><p>{text}</p><i>↗</i></article>)}</div></div></section>

      <section className="pro-benefit-section" data-header-tone="light"><div className="section-wrap pro-benefit-wrap"><div className="pro-benefit-card" data-pro-reveal><span className="eyebrow">Votre espace pro</span><h3>Du premier contact<br /><em>à l&apos;offre préparée.</em></h3><div className="pro-progress-label"><span>Parcours d&apos;Alexandre</span><b>3 / 4</b></div><div className="pro-progress"><i /></div><div className="pro-benefit-tags"><span className="done">✓ Projet</span><span className="done">✓ Diagnostic</span><span className="done">✓ Attestation</span><span>4 Offre</span></div><div className="pro-note"><span>✦</span><p><b>Bon moment pour relancer.</b><br />Alexandre vient de terminer son diagnostic.</p></div></div><div className="pro-benefit-copy" data-pro-reveal><span className="eyebrow eyebrow-light">Courtia Pro</span><h2>Plus de visibilité.<br /><em>Moins de friction.</em></h2><div className="pro-benefit-list"><div><span>01</span><p><b>Des acquéreurs mieux préparés</b> avant la visite et l&apos;offre.</p></div><div><span>02</span><p><b>Un suivi simple</b> de chaque projet depuis votre espace.</p></div><div><span>03</span><p><b>Des ventes sécurisées</b> par des échanges plus crédibles.</p></div></div></div></div></section>

      <section className="pro-bank-section" id="pro-bank">
        <div className="pro-page-grid" /><div className="pro-page-glow pro-bank-glow-a" /><div className="pro-page-glow pro-bank-glow-b" />
        <div className="section-wrap pro-bank-inner" data-pro-reveal>
          <span className="eyebrow pro-bank-eyebrow"><span aria-hidden="true">▥</span> Espace banquier</span>
          <h2>Recevez des dossiers<br /><em>emprunteurs pré-qualifiés.</em></h2>
          <p>Les emprunteurs Courtia structurent leur profil avec l&apos;IA, obtiennent un score de finançabilité sur 10 axes et vous partagent un dossier complet via un portail sécurisé. Plus de paperasse, que des dossiers exploitables.</p>
          <a className="pro-launch-button" href="#pro-launch">Être notifié du lancement <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="pro-launch-section" data-header-tone="light" id="pro-launch">
        <div className="section-wrap pro-launch-inner" data-pro-reveal>
          <span className="pro-launch-badge"><span aria-hidden="true">◷</span> Lancement prévu T4 2026</span>
          <h2>Soyez parmi les premiers informés</h2>
          <p>Le portail banquier Courtia est en cours de développement. Inscrivez-vous pour être notifié dès l&apos;ouverture et bénéficier d&apos;un accès prioritaire.</p>
          <a className="pro-launch-button pro-launch-button-dark" href="#contact">Être notifié du lancement <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="pro-cta-section" id="contact"><div className="pro-cta-glow" /><div className="section-wrap pro-cta-inner" data-pro-reveal><span className="eyebrow">Courtia Pro</span><h2>Faites avancer<br /><em>vos ventes.</em></h2><p>Découvrez comment Courtia peut s&apos;intégrer à votre parcours acquéreur.</p><div className="pro-actions"><a className="button button-primary" href={COURTIA_CONTACT_PRO}>Écrire à Courtia <span>↗</span></a><a className="button button-glass" href={COURTIA_TEL_LIEN}>{COURTIA_TEL_AFFICHE}</a></div><small>{COURTIA_EMAIL} · Démonstration personnalisée</small></div></section>

      <footer className="footer"><div className="section-wrap footer-top"><a className="brand" href="/"><img className="brand-logo" src="/courtia-logo.png" alt="Courtia" /></a><p>Le crédit avec un temps d&apos;avance.</p><nav><a href="/">Particuliers</a><a href="#pro-feature">La solution</a><a href="#parcours">Le parcours</a><a href="#contact">Contact</a><a href="/mentions-legales">Mentions légales</a><a href={COURTIA_PRO_URL}>Se connecter</a></nav></div><div className="section-wrap footer-bottom"><span>© 2026 Courtia</span><span>RGPD · IA Act · Chiffrement</span><span className="footer-contact"><a href={"mailto:" + COURTIA_EMAIL}>{COURTIA_EMAIL}</a><i /><a href={COURTIA_TEL_LIEN}>{COURTIA_TEL_AFFICHE}</a></span></div></footer>
    </main>
  );
}
