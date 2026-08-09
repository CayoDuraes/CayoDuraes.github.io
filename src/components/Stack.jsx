import { stack } from '../content/content.js';

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Stack</span>
          <h2 className="section-title">Ferramentas que eu uso</h2>
        </div>

        <div className="stack-grid">
          {stack.map((col) => (
            <div className="stack-col" key={col.category}>
              <h4>{col.category}</h4>
              <div className="stack-items">
                {col.items.map((it) => (
                  <span className="stack-item" key={it}>
                    <span className="sq" /> {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
