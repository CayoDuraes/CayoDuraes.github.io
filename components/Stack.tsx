import { stack } from '@/data/stack';
import { SectionHeader } from './SectionHeader';

// Stack agrupada por domínio. Cada grupo é uma coluna na grid.

export function Stack() {
  return (
    <section id="stack" className="pt-12">
      <SectionHeader label="Stack" />

      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-7">
        {stack.map((group) => (
          <div key={group.category}>
            <div className="text-[11px] text-fg-muted tracking-wider mb-2">
              {group.category}
            </div>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item} className="text-[13px] text-fg-bright">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
