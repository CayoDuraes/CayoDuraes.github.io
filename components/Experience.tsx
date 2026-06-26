import { experience } from '@/data/experience';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <section id="experience" className="pt-12">
      <SectionHeader label="Experience" />

      <div className="mt-5 space-y-7">
        {experience.map((exp, i) => (
          <article
            key={`${exp.company}-${i}`}
            className="border-l-2 border-line-strong pl-5 relative"
          >
            <span
              className={`absolute left-[-5px] top-1 w-2 h-2 rounded-full ${
                exp.current ? 'bg-accent' : 'bg-line-strong'
              }`}
              aria-hidden="true"
            />

            <header className="mb-2.5">
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 className="text-[15px] font-medium text-fg-bright">{exp.role}</h3>
                <span className="text-[11px] text-fg-muted">{exp.period}</span>
              </div>
              <div className="text-[12px] text-accent mt-0.5">
                {exp.company}
                <span className="text-fg-muted"> · {exp.location}</span>
              </div>
            </header>

            <ul className="space-y-1.5">
              {exp.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="text-[13px] text-fg leading-relaxed pl-4 relative"
                >
                  <span
                    className="absolute left-0 text-fg-muted select-none"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
