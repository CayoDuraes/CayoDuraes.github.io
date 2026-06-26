// Moldura "browser-like" pra envolver screenshots de produto.
// Mantém a screenshot (que tem cores próprias) coerente com a paleta do site,
// já que tudo ao redor é phosphor green.
//
// Header simulando uma barra de URL com a URL real em mono.

type Props = {
  src: string;
  alt: string;
  url?: string;
  caption?: string;
};

export function BrowserFrame({ src, alt, url, caption }: Props) {
  return (
    <figure className="my-5">
      <div className="border border-line-strong overflow-hidden">
        {/* Barra superior com URL */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-line bg-surface">
          <div className="flex items-center gap-2">
            {/* Glyph minimalista no lugar dos "3 pontos" macOS (que viraria cosplay) */}
            <span
              className="text-fg-subtle text-[11px] select-none tracking-widest"
              aria-hidden="true"
            >
              · · ·
            </span>
            {url && (
              <span className="text-[11px] text-fg-dim font-mono">{url}</span>
            )}
          </div>
          <span
            className="text-[11px] text-fg-muted font-mono"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>

        {/* Imagem */}
        {/* Uso <img> em vez de <Image> do Next pra simplicidade no SSG estático.
            unoptimized: true já tá no next.config */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
      </div>

      {caption && (
        <figcaption className="text-[12px] text-fg-dim mt-2 font-mono">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
