import { useState } from 'react';
import { profile, nav } from '../content/content.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <img className="brand-mark" src="/icon.png" alt="" />
          <span className="bname">{profile.name}</span>
        </a>

        <nav className={`nav ${open ? 'open' : ''}`}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <a className="btn btn-primary btn-sm" href="#contato">
            Falar comigo
          </a>
        </div>

        <button
          className="menu-btn"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
