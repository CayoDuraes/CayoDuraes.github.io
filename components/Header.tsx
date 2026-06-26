import { profile } from '@/data/profile';

// Header fica fixo no topo com leve transparência + backdrop blur.
// Não tem nav horizontal — a estrutura vertical da página JÁ É o nav.

const statusMap = {
  available: { label: 'Available for work', color: 'text-accent', dot: 'bg-accent' },
  busy: { label: 'Busy', color: 'text-fg-dim', dot: 'bg-fg-dim' },
  closed: { label: 'Not looking', color: 'text-fg-muted', dot: 'bg-fg-muted' },
} as const;

export function Header() {
  const status = statusMap[profile.status];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-line">
      <div className="max-w-5xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center w-[22px] h-[22px] border border-line-strong rounded text-[11px] text-accent font-semibold">
            cd
          </span>
          <span className="text-[12px] text-fg-dim">{profile.siteName}</span>
        </div>
        <span className={`text-[11px] ${status.color} flex items-center gap-1.5`}>
          <span className={`inline-block w-1.5 h-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </span>
      </div>
    </header>
  );
}
