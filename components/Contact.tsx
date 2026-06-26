import { profile } from '@/data/profile';
import { SectionHeader } from './SectionHeader';

// Contato em formato lista (`label: valor`) — terminal-friendly,
// sem botões grandes.

const links = [
  { label: 'email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'github', value: 'CayoDuraes', href: profile.github },
  { label: 'linkedin', value: 'cayo-duraes', href: profile.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="pt-12 pb-8">
      <SectionHeader label="Contact" />

      <p className="text-[13px] text-fg mt-4 mb-5 max-w-[440px]">
        Aberto a oportunidades de Software Engineer, Frontend, Integrações ou Fullstack.
        Respondo rápido.
      </p>

      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label} className="flex items-baseline gap-3 group">
            <span className="text-[11px] text-fg-muted w-[70px] shrink-0">
              {link.label}
            </span>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[13px] text-fg-bright group-hover:text-accent transition-colors"
            >
              {link.value}
              <span
                className="text-fg-muted group-hover:text-accent ml-1.5"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
