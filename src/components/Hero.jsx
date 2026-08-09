import { hero } from '../content/content.js';
import { Arrow, Send } from './icons.jsx';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="kicker">{hero.eyebrow}</span>
          <h1>
            {hero.title} <span className="accent">{hero.titleAccent}</span>
          </h1>
          <p className="hero-sub">{hero.subtitle}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label} <Arrow />
            </a>
            <a className="btn btn-ghost" href={hero.ctaSecondary.href}>
              <Send /> {hero.ctaSecondary.label}
            </a>
          </div>
          <div className="hero-tech">
            <span className="lbl">Stack:</span>
            {hero.techRow.map((t, i) => (
              <span key={t}>
                {t}
                {i < hero.techRow.length - 1 ? ' ·' : ''}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <img src={hero.photo} alt={hero.photoAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}
