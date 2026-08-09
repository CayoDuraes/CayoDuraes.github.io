import { profile } from '../content/content.js';

export default function Footer() {
  const year = 2026;
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          {profile.name} <span>· {profile.role}</span>
        </div>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>E-mail</a>
        </div>
        <div className="footer-copy">© {year} {profile.name} · Belo Horizonte, Brasil</div>
      </div>
    </footer>
  );
}
