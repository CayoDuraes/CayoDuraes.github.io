import { about } from '../content/content.js';
import { Pin, Globe, Remote, Grad } from './icons.jsx';

const ICONS = { pin: Pin, globe: Globe, remote: Remote, grad: Grad };

export default function About() {
  return (
    <section id="sobre" className="section soft">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Sobre mim</span>
          <h2 className="section-title">Um pouco da minha história</h2>
        </div>

        <div className="about-grid">
          <div className="about-photo">
            <div className="photo-frame">
              <img src={about.photo} alt={about.photoAlt} />
            </div>
          </div>

          <div className="about-body">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-facts">
              {about.facts.map((f) => {
                const Icon = ICONS[f.icon] || Pin;
                return (
                  <div className="fact" key={f.text}>
                    <Icon /> {f.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
