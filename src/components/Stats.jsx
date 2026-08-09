import { stats } from '../content/content.js';

export default function Stats() {
  return (
    <section className="container" style={{ paddingBottom: 8 }}>
      <div className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="sv">{s.value}</div>
            <div className="sl">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
