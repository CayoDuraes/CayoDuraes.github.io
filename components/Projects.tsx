import Link from 'next/link';
import { projects, type Project } from '@/data/projects';
import { SectionHeader } from './SectionHeader';

// Três variações de link possíveis:
//   - caseSlug → vira <Link> interno do Next pra /work/[slug]
//   - url      → vira <a> externo
//   - nenhum   → vira <div> não clicável

export function Projects() {
  return (
    <section id="work" className="pt-10">
      <SectionHeader label="Selected work" meta={`${projects.length} entries`} />
      <ul className="mt-3">
        {projects.map((p) => (
          <li key={p.id}>
            <ProjectRow project={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectRow({ project: p }: { project: Project }) {
  const baseClasses = `group grid grid-cols-[28px_1fr_auto] md:grid-cols-[28px_1fr_120px_14px] gap-3 md:gap-5 items-baseline py-3.5 border-t border-line transition-colors ${
    p.featured ? 'bg-surface' : ''
  }`;

  const arrowChar = p.caseSlug ? '↗' : p.url ? '→' : '·';
  const isClickable = Boolean(p.caseSlug || p.url);
  const hoverClasses = isClickable ? 'hover:bg-surface cursor-pointer' : '';

  const content = (
    <>
      <span
        className={`text-[12px] font-medium ${
          p.featured ? 'text-accent' : 'text-fg-muted group-hover:text-accent'
        }`}
      >
        {p.id}
      </span>

      <div>
        <div className="text-[14px] font-medium text-fg-bright leading-snug">
          {p.title}
        </div>
        <div className="text-[12px] text-fg-dim mt-1">{p.description}</div>
      </div>

      <span className="text-[11px] text-fg-dim text-right hidden md:block">
        {p.meta}
      </span>

      <span
        className={`text-[14px] hidden md:block transition-colors ${
          p.featured ? 'text-accent' : 'text-fg-muted group-hover:text-accent'
        }`}
        aria-hidden="true"
      >
        {arrowChar}
      </span>
    </>
  );

  // Link interno (case study)
  if (p.caseSlug) {
    return (
      <Link
        href={`/work/${p.caseSlug}`}
        className={`${baseClasses} ${hoverClasses}`}
      >
        {content}
      </Link>
    );
  }

  // Link externo
  if (p.url) {
    return (
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${hoverClasses}`}
      >
        {content}
      </a>
    );
  }

  // Sem link
  return <div className={baseClasses}>{content}</div>;
}
