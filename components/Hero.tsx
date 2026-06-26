import { profile } from '@/data/profile';
import { SectionHeader } from './SectionHeader';

// Layout grid 2 colunas no desktop, 1 coluna no mobile.
// O cursor `_` piscando aparece UMA vez aqui — em mais lugares vira clichê.

export function Hero() {
  return (
    <section id="about" className="pt-10 pb-2">
      <SectionHeader label="About" />

      <div className="grid md:grid-cols-[1fr_220px] gap-7 mt-5">
        <div>
          <h1 className="text-[34px] md:text-[42px] font-medium leading-[1.05] tracking-tighter text-fg-bright">
            {profile.name}
            <span className="text-accent animate-blink" aria-hidden="true">
              _
            </span>
          </h1>
          <div className="text-[13px] text-fg-dim mt-1.5 mb-5">{profile.role}</div>
          <p className="text-[14px] leading-relaxed text-fg max-w-[440px]">
            {profile.tagline}
          </p>
        </div>

        <div className="text-[11px] leading-[2]">
          <MetaRow label="location" value={profile.location} />
          <MetaRow label="current" value={profile.current} />
          <MetaRow label="years" value="3+" />
          <MetaRow label="uptime" value="99.98%" highlight />
        </div>
      </div>
    </section>
  );
}

function MetaRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-fg-muted">{label}</span>
      <span className={highlight ? 'text-accent' : 'text-fg-bright'}>{value}</span>
    </div>
  );
}
