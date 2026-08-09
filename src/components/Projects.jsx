import { projects } from '../content/content.js';
import { Problem, Result, Tech, Arrow } from './icons.jsx';

export default function Projects() {
  return (
    <section id="projetos" className="section soft">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Projetos</span>
          <h2 className="section-title">O que eu construí</h2>
          <p className="section-sub">
            Projetos reais, com o problema que resolvi e o resultado de cada um.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="pcard" key={p.n}>
              <div className="pnum">{p.n}</div>
              <h3>{p.title}</h3>
              <div className="ptag">{p.tagline}</div>
              {p.badge && <span className="pbadge">{p.badge}</span>}
              <p className="pdesc">{p.description}</p>

              <div className="pblock">
                <div className="plabel"><Problem /> Problema</div>
                <div className="ptext">{p.problema}</div>
              </div>
              <div className="pblock">
                <div className="plabel"><Result /> Resultado</div>
                <div className="ptext">{p.resultado}</div>
              </div>

              <div className="pblock" style={{ marginTop: 'auto' }}>
                <div className="plabel"><Tech /> Tecnologias</div>
                <div className="ptech">
                  {p.tech.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              {p.href && (
                <a className="plink" href={p.href} target="_blank" rel="noreferrer">
                  {p.hrefLabel || 'Ver projeto'} <Arrow />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
