// Pra adicionar um projeto novo: copia um bloco, edita os campos, salva.
// `id` é só o numerador visual ("01", "02"...). `featured: true` destaca o primeiro.
//
// Três tipos de link possíveis:
//   - `caseSlug`: link interno pra página /work/[slug] de case study completo
//   - `url`:      link externo (GitHub, deploy, etc.)
//   - nenhum:     projeto sem link

export type Project = {
  id: string;
  title: string;
  description: string;
  meta: string;
  url?: string;
  caseSlug?: string;
  tags?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: '01',
    title: 'Fenix Links · gerador de links para afiliados',
    description:
      'Ferramenta interna em produção · adotada por +300 afiliados ativos · vanilla JS sem dependências',
    meta: 'fênix · 2026',
    caseSlug: 'fenix-links',
    tags: ['HTML', 'CSS', 'JS', 'tool interno'],
    featured: true,
  },
  {
    id: '02',
    title: 'sistema de automação · Casa de Saúde Santa Rita',
    description:
      '6 fluxos autônomos integrando Power BI, Make e RD Station · captação, 12 réguas segmentadas e reengajamento',
    meta: 'freela · 2025',
    caseSlug: 'santa-rita',
    tags: ['Make', 'Power BI', 'RD Station', 'healthcare'],
  },
  {
    id: '03',
    title: 'onfly × erp integrations',
    description:
      'Fluxos n8n entre SAP, TOTVS, Senior · conciliação financeira automática com cartões corporativos e bancos',
    meta: 'onfly · 2025',
    tags: ['n8n', 'Node', 'SAP', 'TOTVS'],
  },
  {
    id: '04',
    title: 'automação n8n · cotação do dólar',
    description:
      'Monitor de e-mail, parsing CSV, API de câmbio em tempo real e resposta automática ao remetente',
    meta: 'side · 2024',
    url: 'https://github.com/CayoDuraes/automation-n8n-dolar',
    tags: ['n8n', 'API REST', 'JavaScript'],
  },
  {
    id: '05',
    title: 'landing page · mimi doces',
    description:
      'Funil completo para confeitaria artesanal · hero, cardápio, depoimentos, CTA · totalmente responsiva',
    meta: 'side · 2024',
    url: 'https://cayoduraes.github.io/landing-page-mimi-doces/',
    tags: ['HTML', 'CSS', 'JS', 'landing'],
  },
  {
    id: '06',
    title: 'conversor de moedas',
    description:
      'App de conversão entre dólar, euro, peso argentino e libra esterlina consumindo API de câmbio em tempo real',
    meta: 'side · 2024',
    url: 'https://github.com/CayoDuraes/Conversor-De-Moedas',
    tags: ['JS', 'API'],
  },
  {
    id: '07',
    title: 'mario kart simulator',
    description:
      'Simulador de corrida em JavaScript puro, sem frameworks · foco em lógica, estado e estrutura de código',
    meta: 'side · 2023',
    url: 'https://github.com/CayoDuraes/mario-kart-js-simulator',
    tags: ['JS', 'lógica', 'DOM'],
  },
];
