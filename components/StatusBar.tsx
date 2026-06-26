// Status bar inspirada no modeline do vim.
// O ano é dinâmico — atualiza sozinho na virada.

export function StatusBar() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface">
      <div className="max-w-5xl mx-auto px-6 py-2.5 flex justify-between items-center text-[11px] flex-wrap gap-2">
        <div className="flex gap-4 items-center">
          <span className="bg-accent text-bg px-2 py-0.5 font-semibold tracking-wider">
            NORMAL
          </span>
          <span className="text-fg-dim">main *</span>
          <span className="text-fg-muted hidden sm:inline">© {year}</span>
        </div>
        <span className="text-fg-muted">cayo@portfolio:~$</span>
      </div>
    </footer>
  );
}
