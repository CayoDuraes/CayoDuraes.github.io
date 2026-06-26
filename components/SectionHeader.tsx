// Reutilizado em todas as seções pra criar o "┌─ Label ────────"
// O traço se estica até o fim do container pra dar o vibe terminal.

type Props = {
  label: string;
  meta?: string; // texto do lado direito (ex: "4 entries")
};

export function SectionHeader({ label, meta }: Props) {
  return (
    <div className="flex items-center gap-3 mb-1">
      <span className="text-fg-subtle text-xs select-none">┌─</span>
      <span className="text-accent text-[11px] tracking-widest font-medium">
        {label}
      </span>
      <span
        className="text-fg-subtle text-xs select-none flex-1 overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        {'─'.repeat(200)}
      </span>
      {meta && <span className="text-fg-muted text-[11px] shrink-0">{meta}</span>}
    </div>
  );
}
