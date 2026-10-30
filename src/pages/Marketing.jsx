import { useEffect, useRef } from "react";
import { BrandMark, Icon } from "../components/Icons.jsx";
import { SITE_COPY } from "../data/siteCopy.js";

const GITHUB_URL = "https://github.com/s20240083-tech/Math-study-for-student";

export function MarketingPage({ lang, onLangChange, navigate }) {
  const copy = SITE_COPY[lang];
  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang;
    return () => {
      document.documentElement.lang = "zh-Hant";
    };
  }, [copy.htmlLang]);

  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function openApp() {
    navigate("/today");
  }

  function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={`site site-${lang}`} data-lang={lang}>
      <a
        className="site-skip"
        href="#site-main"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus({ preventScroll: true });
          mainRef.current?.scrollIntoView({ block: "start" });
        }}
      >
        {lang === "zh" ? "跳至主要內容" : "Skip to main content"}
      </a>

      <header className="site-header">
        <div className="site-header-inner">
          <button className="site-brand" onClick={goTop} aria-label="Summa">
            <BrandMark size={39} />
            <span className="site-brand-type">
              <span className="site-brand-word">
                summa<span>.</span>
              </span>
              <span className="site-brand-sub">{copy.brandSub}</span>
            </span>
          </button>

          <nav className="site-nav" aria-label={lang === "zh" ? "網站導覽" : "Site navigation"}>
            {copy.nav.map((item) => (
              <button key={item.id} onClick={() => scrollToId(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="site-header-actions">
            <div className="site-lang" role="group" aria-label={lang === "zh" ? "語言" : "Language"}>
              <button
                className={lang === "zh" ? "is-active" : ""}
                onClick={() => onLangChange("zh")}
                aria-pressed={lang === "zh"}
                aria-label="繁體中文"
              >
                繁中
              </button>
              <button
                className={lang === "en" ? "is-active" : ""}
                onClick={() => onLangChange("en")}
                aria-pressed={lang === "en"}
                aria-label="English"
              >
                EN
              </button>
            </div>
            <button className="site-button site-button-dark site-header-cta" onClick={openApp}>
              {copy.launch}
              <Icon name="arrowUpRight" size={15} />
            </button>
          </div>
        </div>
      </header>

      <main id="site-main" ref={mainRef} tabIndex={-1}>
        <section className="site-hero">
          <div className="site-hero-copy">
            <p className="site-eyebrow site-eyebrow-live">
              <span className="site-live-dot" />
              {copy.hero.eyebrow}
            </p>
            <h1>
              {copy.hero.title}
              <span className="site-display-accent">{copy.hero.titleAccent}</span>
            </h1>
            <p className="site-hero-lead">{copy.hero.lead}</p>
            <div className="site-hero-actions">
              <button className="site-button site-button-coral" onClick={openApp}>
                {copy.hero.primary}
                <Icon name="arrowRight" size={17} />
              </button>
              <button className="site-button site-button-quiet" onClick={() => scrollToId("tour")}>
                {copy.hero.secondary}
                <Icon name="chevronDown" size={16} />
              </button>
            </div>
            <p className="site-hero-note">{copy.hero.note}</p>
          </div>

          <div className="site-hero-art" aria-hidden="true">
            <div className="site-hero-orbit site-hero-orbit-one" />
            <div className="site-hero-orbit site-hero-orbit-two" />
            <div className="site-hero-spark site-hero-spark-one">＋</div>
            <div className="site-hero-spark site-hero-spark-two">×</div>
            <div className="site-browser">
              <div className="site-browser-bar">
                <span />
                <span />
                <span />
                <em>summa.</em>
              </div>
              <img src="./marketing/hero.png" alt={copy.hero.imageAlt} fetchPriority="high" />
            </div>
            <div className="site-float-card">
              <span className="site-float-label">{copy.hero.floatingLabel}</span>
              <strong>{copy.hero.floatingTitle}</strong>
              <span>{copy.hero.floatingNote}</span>
            </div>
            <div className="site-age-card">
              <strong>{copy.hero.miniStat}</strong>
              <span>{copy.hero.miniStatLabel}</span>
            </div>
          </div>
        </section>

        <section className="site-stats" aria-label={lang === "zh" ? "專題數據" : "Project facts"}>
          {copy.stats.map((stat) => (
            <div className="site-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="site-trust" aria-label={lang === "zh" ? "產品承諾" : "Product commitments"}>
          {copy.trust.map((item) => (
            <div className="site-trust-item" key={item.title}>
              <span className="site-trust-dot" />
              <div>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="site-section site-why" id="why">
          <div className="site-section-heading">
            <div>
              <p className="site-eyebrow">{copy.why.eyebrow}</p>
              <h2>
                {copy.why.title}
                <span className="site-display-accent">{copy.why.titleAccent}</span>
              </h2>
            </div>
            <p className="site-section-lede">{copy.why.lead}</p>
          </div>
          <div className="site-why-grid">
            {copy.why.cards.map((card) => (
              <article className="site-why-card" key={card.number}>
                <span className="site-card-number">{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="site-section site-tour" id="tour">
          <div className="site-section-heading">
            <div>
              <p className="site-eyebrow">{copy.tour.eyebrow}</p>
              <h2>
                {copy.tour.title}
                <span className="site-display-accent">{copy.tour.titleAccent}</span>
              </h2>
            </div>
            <p className="site-section-lede">{copy.tour.lead}</p>
          </div>
          <div className="site-tour-grid">
            {copy.tour.cards.map((card) => (
              <article className={`site-tour-card ${card.mobile ? "site-tour-card-mobile" : ""}`} key={card.tag}>
                <div className="site-tour-image">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                  {card.mobile && <span className="site-tour-phone-dot" />}
                </div>
                <div className="site-tour-copy">
                  <span className="site-card-tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="site-practice" id="practice">
          <div className="site-practice-copy">
            <p className="site-eyebrow eyebrow-light">{copy.practice.eyebrow}</p>
            <h2>
              {copy.practice.title}
              <span className="site-display-accent">{copy.practice.titleAccent}</span>
            </h2>
            <p className="site-practice-lead">{copy.practice.lead}</p>
            <div className="site-practice-features">
              {copy.practice.bullets.map((bullet) => (
                <div key={bullet.title} className="site-practice-feature">
                  <span className="site-check"><Icon name="check" size={13} /></span>
                  <div>
                    <strong>{bullet.title}</strong>
                    <span>{bullet.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="site-button site-button-coral" onClick={openApp}>
              {copy.practice.cta}
              <Icon name="arrowRight" size={17} />
            </button>
          </div>

          <div className="site-practice-visual">
            <div className="site-practice-frame">
              <img src={copy.practice.image} alt={copy.practice.imageAlt} loading="lazy" />
            </div>
            <div className="site-difficulty-card">
              <span className="site-card-tag">{copy.practice.difficultyTitle}</span>
              {copy.practice.difficulties.map((item) => (
                <div className={`site-difficulty-row diff-${item.key}`} key={item.key}>
                  <span className="site-difficulty-label">{item.label}</span>
                  <span className="site-difficulty-range">{item.range}</span>
                  <strong>{item.count}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section site-curriculum" id="curriculum">
          <div className="site-section-heading">
            <div>
              <p className="site-eyebrow">{copy.curriculum.eyebrow}</p>
              <h2>
                {copy.curriculum.title}
                <span className="site-display-accent">{copy.curriculum.titleAccent}</span>
              </h2>
            </div>
            <p className="site-section-lede">{copy.curriculum.lead}</p>
          </div>

          <div className="site-curriculum-layout">
            <div className="site-level-list">
              {copy.curriculum.levels.map((level) => (
                <div className="site-level-row" key={level.number}>
                  <span className="site-level-number">{level.number}</span>
                  <div className="site-level-main">
                    <div className="site-level-title">
                      <strong>{level.title}</strong>
                      <span>{level.grades}</span>
                    </div>
                    <p>{level.focus}</p>
                  </div>
                  <Icon name="arrowUpRight" size={16} />
                </div>
              ))}
            </div>
            <aside className="site-strands">
              <span className="site-card-tag">{copy.curriculum.strandsTitle}</span>
              <div className="site-strand-cloud">
                {copy.curriculum.strands.map((strand, index) => (
                  <span className={`site-strand-pill site-strand-${index + 1}`} key={strand}>
                    {strand}
                  </span>
                ))}
              </div>
              <p className="site-curriculum-note">{copy.curriculum.note}</p>
              <button className="site-button site-button-dark" onClick={openApp}>
                {copy.hero.primary}
                <Icon name="arrowRight" size={16} />
              </button>
            </aside>
          </div>
        </section>

        <section className="site-principles">
          <div className="site-section-heading site-section-heading-compact">
            <div>
              <p className="site-eyebrow">{copy.principles.eyebrow}</p>
              <h2>
                {copy.principles.title}
                <span className="site-display-accent">{copy.principles.titleAccent}</span>
              </h2>
            </div>
            <p className="site-section-lede">{copy.principles.lead}</p>
          </div>
          <div className="site-principle-grid">
            {copy.principles.cards.map((card) => (
              <article className="site-principle-card" key={card.title}>
                <span className="site-principle-icon"><Icon name={card.icon} size={20} /></span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="site-author" id="author">
          <div className="site-author-mark" aria-hidden="true">
            <span className="site-author-initial">廖</span>
            <span className="site-author-class">3D</span>
          </div>
          <div className="site-author-copy">
            <p className="site-eyebrow">{copy.author.eyebrow}</p>
            <h2>{copy.author.name}</h2>
            <p className="site-author-role">{copy.author.role}</p>
            <p className="site-author-intro">{copy.author.intro}</p>
            {copy.author.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="site-author-facts">
              {copy.author.facts.map((fact) => (
                <div key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
            <div className="site-author-actions">
              <a className="site-text-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
                {copy.author.github}
                <Icon name="arrowUpRight" size={15} />
              </a>
              <button className="site-text-link" onClick={openApp}>
                {copy.author.app}
                <Icon name="arrowRight" size={15} />
              </button>
            </div>
          </div>
        </section>

        <section className="site-final">
          <div className="site-final-orbit" aria-hidden="true" />
          <p className="site-eyebrow eyebrow-light">{copy.finalCta.eyebrow}</p>
          <h2>{copy.finalCta.title}</h2>
          <p>{copy.finalCta.text}</p>
          <div className="site-final-actions">
            <button className="site-button site-button-coral" onClick={openApp}>
              {copy.finalCta.primary}
              <Icon name="arrowRight" size={17} />
            </button>
            <a className="site-button site-button-ghost-light" href={GITHUB_URL} target="_blank" rel="noreferrer">
              {copy.finalCta.secondary}
              <Icon name="arrowUpRight" size={16} />
            </a>
          </div>
          <span className="site-final-note">{copy.finalCta.note}</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-top">
          <div className="site-footer-brand">
            <BrandMark size={31} />
            <span>summa<span className="site-footer-dot">.</span></span>
          </div>
          <p>{copy.footer.tagline}</p>
          <div className="site-footer-links">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">{copy.footer.links.github}</a>
            <button onClick={openApp}>{copy.footer.links.app}</button>
          </div>
        </div>
        <div className="site-footer-rule" />
        <div className="site-footer-bottom">
          <span>{copy.footer.rights}</span>
          <span>{copy.footer.madeBy}</span>
          <span className="site-footer-language">{copy.footer.appLanguage}</span>
        </div>
      </footer>
    </div>
  );
}
