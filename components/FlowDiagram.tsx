import type { FlowNode } from '@/data/cases';

// Renderiza um fluxo de automação como caixas conectadas.
// No desktop: caixas horizontais conectadas por →
// No mobile:  caixas verticais conectadas por ↓
//
// Cor da borda muda conforme o tipo (source/process/destination/storage).

const kindStyles = {
  source: 'border-fg-dim text-fg-bright',
  process: 'border-accent text-accent',
  destination: 'border-fg-dim text-fg-bright',
  storage: 'border-fg-dim text-fg-bright',
} as const;

const kindLabels = {
  source: 'source',
  process: 'process',
  destination: 'dest',
  storage: 'storage',
} as const;

type Props = {
  nodes: FlowNode[];
};

export function FlowDiagram({ nodes }: Props) {
  return (
    <div
      className="my-4 flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3 font-mono"
      role="img"
      aria-label={`Fluxo: ${nodes.map((n) => n.label).join(' → ')}`}
    >
      {nodes.map((node, i) => (
        <div
          key={`${node.label}-${i}`}
          className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3"
        >
          <div
            className={`border ${
              kindStyles[node.kind]
            } px-3 py-2 min-w-[120px] flex-1 md:flex-none`}
          >
            <div className="text-[10px] text-fg-muted uppercase tracking-wider mb-0.5">
              {kindLabels[node.kind]}
            </div>
            <div className="text-[13px] font-medium leading-tight">{node.label}</div>
            {node.desc && (
              <div className="text-[11px] text-fg-dim mt-0.5">{node.desc}</div>
            )}
          </div>

          {i < nodes.length - 1 && (
            <span
              className="text-accent text-lg select-none flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="hidden md:inline">→</span>
              <span className="md:hidden">↓</span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
