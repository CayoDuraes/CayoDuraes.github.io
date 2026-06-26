// Cada case study individual (página /work/[slug]) vem desse arquivo.
// Pra adicionar um case novo no futuro, você:
//   1. Cria um arquivo em data/cases/nome-do-case.ts
//   2. Importa aqui em baixo e adiciona no array `cases`
//   3. Adiciona o projeto em data/projects.ts com caseSlug = "nome-do-case"
//
// O Next gera HTML estático pra cada case automaticamente no build.

import { santaRita } from './cases/santa-rita';
import { fenixLinks } from './cases/fenix-links';

export type FlowNode = {
  label: string;
  desc?: string;
  kind: 'source' | 'process' | 'destination' | 'storage';
};

export type Flow = {
  name: string;
  role: string;
  description: string;
  trigger: string;
  source?: string;
  destination?: string;
  criterion?: string;
  diagram: FlowNode[];
  highlights?: string[];
};

export type Screenshot = {
  src: string;          // caminho a partir de /public, ex: "/work/fenix-links/01.png"
  alt: string;          // descrição da imagem (acessibilidade)
  caption?: string;     // legenda opcional embaixo
  browserUrl?: string;  // URL mostrada no topo da moldura
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  clientShort?: string;
  role: string;
  period: string;
  liveUrl?: string;          // link pra ferramenta/produto live
  summary: string;
  description: string;
  stack: string[];
  context: string;
  solution: string;
  flows?: Flow[];            // só pra cases de automação (Santa Rita)
  screenshots?: Screenshot[]; // só pra cases visuais (Fenix Links)
  results: string[];
};

// Ordem aqui não importa, a página de case usa o slug pra encontrar.
export const cases: CaseStudy[] = [fenixLinks, santaRita];

export function findCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
