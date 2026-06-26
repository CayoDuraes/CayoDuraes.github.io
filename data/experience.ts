// Cada experiência é um objeto. Bullets devem ser CONCRETOS, com números,
// nomes de tecnologias, escopo real. Evita "trabalhei com várias tecnologias".

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: 'Grupo Fênix',
    role: 'Front-end Developer Pleno',
    period: 'mar 2026 → present',
    location: 'São Paulo, BR',
    current: true,
    bullets: [
      'Desenvolvimento de funis de venda de alta conversão, da VSL às páginas de upsell/downsell',
      'Referência técnica para +300 afiliados ativos em rastreamento, scripts e estrutura',
      'Criação e deploy de ferramenta interna que automatiza geração de links de afiliados',
      'Gestão de infraestrutura: domínios, DNS, SSL, Cloudflare, com resolução autônoma de incidentes',
      'Ponte técnica entre Tráfego, Copy, Projetos e Afiliados',
    ],
  },
  {
    company: 'Onfly',
    role: 'Desenvolvedor de Integrações (n8n & Node)',
    period: 'out 2025 → mar 2026',
    location: 'Belo Horizonte, MG',
    bullets: [
      'Criação e sustentação de fluxos n8n com JavaScript pra manipulação avançada de dados',
      'Integrações entre Onfly e ERPs (SAP, TOTVS, Senior G5/Sapiens/HCM, Sankhya, Omie)',
      'Automação de conciliação financeira com cartões corporativos (Mastercard, Visa, Amex, Clara) e bancos',
      'Resolução de incidentes N2/N3 via Jira, com troubleshooting de workflows, scripts e APIs em produção',
      'Integração com Uber for Business e 99 pra prestação de contas automática',
    ],
  },
  {
    company: 'Sisloc Softwares',
    role: 'Analista de Sistemas',
    period: 'fev 2024 → out 2025',
    location: 'Belo Horizonte, MG',
    bullets: [
      'Parametrização de documentos fiscais eletrônicos (NF-e, NFC-e, NFS-e, CT-e, MDF-e) e SPED',
      'Configuração de integrações bancárias (BB, Bradesco, Itaú, Inter, Sicoob, Sicredi, Santander)',
      'Criação de documentos personalizados com Jasper Reports + HTML/CSS/JS',
      'Importação/exportação de dados com foco em integridade · apoio em validações pós-migração',
    ],
  },
  {
    company: 'Sisloc Softwares',
    role: 'Estagiário',
    period: 'mar 2023 → fev 2024',
    location: 'Belo Horizonte, MG',
    bullets: [
      'Implantação e configuração de sistema ERP pra clientes de locação de equipamentos',
      'Parametrização de regras de negócio e integrações bancárias',
      'Personalização de documentos fiscais em HTML (NF-e, NFS-e, MDF-e, contratos)',
      'Suporte técnico direto ao cliente',
    ],
  },
];
