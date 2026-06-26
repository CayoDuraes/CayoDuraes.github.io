import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { cases, findCase } from '@/data/cases';
import { Header } from '@/components/Header';
import { StatusBar } from '@/components/StatusBar';
import { SectionHeader } from '@/components/SectionHeader';
import { FlowDiagram } from '@/components/FlowDiagram';
import { BrowserFrame } from '@/components/BrowserFrame';

// ─── conceitos do Next sendo usados aqui ──────────────────────────────
//
// 1. ROTA DINÂMICA: a pasta se chama [slug] (com colchetes), então o
//    Next entende que ela aceita QUALQUER valor depois de /work/.
//    /work/santa-rita      → params.slug = "santa-rita"
//    /work/fenix-links     → params.slug = "fenix-links"
//
// 2. generateStaticParams: diz pro Next, no build, "ó, esses são todos
//    os slugs que existem". Ele pré-gera HTML pra cada um. Mantém SSG.
//
// 3. generateMetadata: cada case study tem title e description próprios
//    no <head>, então quando compartilhar o link, aparece bonito.
//
// 4. notFound(): se o slug não bater com nenhum case, mostra 404.
//
// 5. Seções condicionais: cases podem ter flows (Santa Rita) OU
//    screenshots (Fenix Links) OU ambos. Renderiza só o que tem.
//
// ─────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = findCase(slug);
  if (!c) return { title: 'not found' };
  return {
    title: `${c.title} · ${c.clientShort ?? c.client}`,
    description: c.summary,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // No Next 15, `params` é uma Promise. Sempre await.
  const { slug } = await params;
  const c = findCase(slug);
  if (!c) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 max-w-5xl w-full mx-auto px-6">
        {/* Voltar pra home */}
        <div className="pt-8 pb-2">
          <Link
            href="/#work"
            className="text-[11px] text-fg-muted hover:text-accent transition-colors inline-flex items-center gap-1.5"
          >
            <span aria-hidden="true">←</span> back to work
          </Link>
        </div>

        {/* Hero do case */}
        <section className="pt-4 pb-6">
          <div className="text-[11px] text-accent tracking-widest mb-3">
            Case study · {c.role}
          </div>
          <h1 className="text-[28px] md:text-[36px] font-medium leading-[1.1] tracking-tighter text-fg-bright mb-3">
            {c.title}
          </h1>
          <div className="text-[14px] text-fg-dim mb-4">
            {c.client} · {c.period}
          </div>

          <p className="text-[14px] leading-relaxed text-fg max-w-[640px]">
            {c.description}
          </p>

          {/* Botão "view live" — só aparece se o case tiver liveUrl */}
          {c.liveUrl && (
            <a
              href={c.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-[12px] text-accent hover:text-fg-bright transition-colors group"
            >
              <span className="border-b border-accent group-hover:border-fg-bright">
                view live
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          )}

          {/* Stack pills */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {c.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2 py-0.5 border border-line-strong text-fg-dim"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Contexto */}
        <section className="pt-8">
          <SectionHeader label="Context" />
          <p className="text-[14px] leading-relaxed text-fg max-w-[640px] mt-5">
            {c.context}
          </p>
        </section>

        {/* Solução */}
        <section className="pt-10">
          <SectionHeader label="Solution" />
          <p className="text-[14px] leading-relaxed text-fg max-w-[640px] mt-5">
            {c.solution}
          </p>
        </section>

        {/* Screenshots — só pra cases visuais (Fenix Links) */}
        {c.screenshots && c.screenshots.length > 0 && (
          <section className="pt-10">
            <SectionHeader
              label="Preview"
              meta={`${c.screenshots.length} screens`}
            />
            <div className="mt-5">
              {c.screenshots.map((shot, i) => (
                <BrowserFrame
                  key={i}
                  src={shot.src}
                  alt={shot.alt}
                  url={shot.browserUrl}
                  caption={shot.caption}
                />
              ))}
            </div>
          </section>
        )}

        {/* Flows — só pra cases de automação (Santa Rita) */}
        {c.flows && c.flows.length > 0 && (
          <section className="pt-10">
            <SectionHeader label="Flows" meta={`${c.flows.length} pipelines`} />

            <div className="mt-6 space-y-10">
              {c.flows.map((flow, i) => (
                <article
                  key={flow.name}
                  className="border-l-2 border-line-strong pl-5 relative"
                >
                  <span
                    className="absolute left-[-7px] top-0.5 w-3 h-3 border border-line-strong bg-bg text-[9px] text-accent flex items-center justify-center font-medium"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="text-[11px] text-fg-muted tracking-wider mb-1">
                    {flow.role}
                  </div>
                  <h3 className="text-[18px] font-medium text-fg-bright mb-2">
                    {flow.name}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-fg mb-3">
                    {flow.description}
                  </p>

                  <FlowDiagram nodes={flow.diagram} />

                  <dl className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-x-3 gap-y-1 mt-3 text-[12px]">
                    <FlowMeta label="trigger" value={flow.trigger} />
                    {flow.source && <FlowMeta label="source" value={flow.source} />}
                    {flow.destination && (
                      <FlowMeta label="dest" value={flow.destination} />
                    )}
                    {flow.criterion && (
                      <FlowMeta label="criterion" value={flow.criterion} />
                    )}
                  </dl>

                  {flow.highlights && flow.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {flow.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="text-[12px] text-fg-dim pl-4 relative leading-relaxed"
                        >
                          <span
                            className="absolute left-0 text-fg-muted"
                            aria-hidden="true"
                          >
                            ▸
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Resultados */}
        <section className="pt-12 pb-12">
          <SectionHeader label="Results" />
          <ul className="mt-5 space-y-2">
            {c.results.map((r, i) => (
              <li
                key={i}
                className="text-[14px] text-fg pl-5 relative leading-relaxed"
              >
                <span
                  className="absolute left-0 text-accent"
                  aria-hidden="true"
                >
                  ◆
                </span>
                {r}
              </li>
            ))}
          </ul>

          {/* CTA pra ver live, repetido no fim do case se tem liveUrl */}
          {c.liveUrl && (
            <div className="mt-8 pt-6 border-t border-line">
              <a
                href={c.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] text-accent hover:text-fg-bright transition-colors group"
              >
                <span aria-hidden="true">→</span>
                <span className="border-b border-accent group-hover:border-fg-bright">
                  ver ferramenta em produção
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </section>
      </main>
      <StatusBar />
    </>
  );
}

function FlowMeta({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-fg-muted">{label}</dt>
      <dd className="text-fg-bright">{value}</dd>
    </>
  );
}
