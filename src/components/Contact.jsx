import { contact, profile } from '../content/content.js';
import { Send } from './icons.jsx';

export default function Contact() {
  const mailto = `mailto:${profile.email}?subject=Vamos%20conversar`;

  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="contact-box">
          <div>
            <h3>{contact.title}</h3>
            <p>{contact.subtitle}</p>
          </div>
          <div className="contact-right">
            <a className="btn btn-invert" href={mailto}>
              <Send /> {contact.cta.label}
            </a>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={mailto}>E-mail</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
