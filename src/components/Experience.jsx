import { experience } from '../content/content.js';

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Experiência</span>
          <h2 className="section-title">Minha trajetória</h2>
        </div>

        <div className="timeline">
          {experience.map((x) => (
            <div className={`xp ${x.current ? 'current' : ''}`} key={x.role + x.company}>
              <div className="xp-period">{x.period}</div>
              <div className="xp-role">
                {x.role} <span className="at">· {x.company}</span>
              </div>
              <div className="xp-loc">{x.location}</div>
              <ul>
                {x.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
