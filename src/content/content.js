// ─────────────────────────────────────────────────────────────────────────────
//  CONTEÚDO DO SITE: FONTE ÚNICA DE VERDADE
//  Mudou de empresa, foco, projeto ou contato? Edita AQUI. O site inteiro
//  atualiza sozinho, sem precisar mexer em nenhum componente.
// ─────────────────────────────────────────────────────────────────────────────

// ── Perfil / topo / contato ──────────────────────────────────────────────────
export const profile = {
  name: 'Cayo Durães',
  handle: 'cayoduraes.github.io',
  role: 'Full-Stack Developer',
  location: 'Belo Horizonte, Brasil',
  status: 'available', // 'available' | 'busy' | 'closed'
  statusLabel: 'Disponível para oportunidades',
  email: 'cayoduraes@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cayo-duraes/',
};

// ── Menu de navegação ────────────────────────────────────────────────────────
export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

// ── Hero ─────────────────────────────────────────────────────────────────────
// O `titleAccent` é a parte destacada (azul) no fim do título.
export const hero = {
  eyebrow: 'Full-Stack Developer',
  title: 'Construo o produto inteiro, do código',
  titleAccent: 'ao deploy.',
  subtitle:
    'Sou o Cayo, desenvolvedor full-stack formado em Engenharia de Software, de Belo Horizonte. Cuido do produto de ponta a ponta: a interface, a API, o banco e o deploy no servidor. E quando algo vira repetição, eu resolvo com automação.',
  photo: '/cayo.jpg',
  photoAlt: 'Foto de Cayo Durães',
  ctaPrimary: { label: 'Ver projetos', href: '#projetos' },
  ctaSecondary: { label: 'Falar comigo', href: '#contato' },
  techRow: [
    'React',
    'TypeScript',
    'Node.js',
    'Fastify',
    'PostgreSQL',
    'Docker',
    'Nginx',
    'Cloudflare',
  ],
};

// ── Barra de números ─────────────────────────────────────────────────────────
export const stats = [
  { value: '+500', label: 'afiliados usando minhas ferramentas' },
  { value: '3', label: 'projetos rodando em produção' },
  { value: '3+', label: 'anos de experiência' },
  { value: '∞', label: 'processos manuais automatizados', icon: 'infra' },
];

// ── Projetos em destaque ─────────────────────────────────────────────────────
// problema / resultado / tech = as 3 colunas de cada card.
export const projects = [
  {
    n: '01',
    title: 'Fênix Produtos',
    tagline: 'Plataforma interna full-stack, do zero ao servidor próprio.',
    description:
      'Sistema que centraliza a gestão dos produtos do Grupo Fênix, antes espalhada em planilhas, WhatsApp e ClickUp. Pipeline por fases, checklist, calendário de entregas e geração de relatórios.',
    problema:
      'Gestão de produtos fragmentada, sem visão única do que estava em cada etapa.',
    resultado:
      'Plataforma no ar que centraliza o pipeline inteiro. Eu construí front, back e banco, e coloquei tudo pra rodar no nosso servidor.',
    tech: ['React', 'Vite', 'Fastify', 'Prisma', 'PostgreSQL', 'Nginx', 'PM2'],
    badge: 'em produção',
  },
  {
    n: '02',
    title: 'Fênix Links',
    tagline: 'Ferramenta que +500 afiliados usam sozinhos, todo dia.',
    description:
      'O afiliado escolhe o produto, cola o próprio ID e recebe todos os links de checkout e VSL prontos pra copiar. Acabou a montagem manual de link rastreável e o erro de digitação que fazia comissão sumir.',
    problema:
      'Cada afiliado montava links rastreáveis na mão, propenso a erro e sem escalar.',
    resultado:
      'Autoatendimento adotado por +500 afiliados ativos, sem treinamento. Sumiu o gargalo do time interno.',
    tech: ['React', 'Vite', 'Supabase'],
    badge: 'em produção',
  },
  {
    n: '03',
    title: 'Automação · Casa de Saúde Santa Rita',
    tagline: 'Seis fluxos que cuidam do relacionamento sem ninguém tocar.',
    description:
      'Sistema de automação que liga os dados do hospital (Power BI e planilhas) a comunicações segmentadas no RD Station. Captação diária, 12 réguas no momento certo da jornada e reengajamento de médicos parados.',
    problema:
      'Base desatualizada, disparos manuais e receita silenciosa sumindo com médico ocioso.',
    resultado:
      'Seis fluxos 100% autônomos, base sincronizada todo dia e reativação automática de médicos inativos há 20+ dias.',
    tech: ['Make', 'Power BI', 'Power Automate', 'RD Station', 'Webhooks'],
    badge: 'freela · 2025',
  },
  {
    n: '04',
    title: 'Onfly · Integrações & Automações',
    tagline: 'Mais de 50 fluxos de integração entre sistemas.',
    description:
      'Criei e dei sustentação a mais de 50 fluxos no n8n conectando a Onfly a ERPs, bancos e plataformas de pagamento, com automação de conciliação financeira e prestação de contas de mobilidade corporativa.',
    problema:
      'Dezenas de integrações financeiras e de dados feitas ou monitoradas na mão entre a Onfly e sistemas externos.',
    resultado:
      'Mais de 50 fluxos em produção integrando SAP, TOTVS, Senior, cartões corporativos e bancos, com conciliação automática e incidentes N2/N3 resolvidos.',
    tech: ['n8n', 'Node.js', 'JavaScript', 'REST APIs', 'Webhooks'],
    badge: 'Onfly · 2025',
  },
  {
    n: '05',
    title: 'Sisloc · Ferramentas internas',
    tagline: 'Sites de apoio e documentos que padronizaram o setor.',
    description:
      'Construí ferramentas internas pra facilitar o dia a dia do time: um checklist web pra validar servidores reinstalados e uma base de conhecimento do setor. Também criei os layouts de documentos fiscais e de propostas comerciais em Jasper Reports para o produto Força de Vendas.',
    problema:
      'Verificações e documentos feitos de memória, sem padrão e fáceis de errar.',
    resultado:
      'Processos padronizados e materiais reutilizáveis que deixaram a operação mais rápida e confiável, além de treinar o time nas ferramentas.',
    tech: ['Jasper Reports', 'HTML', 'CSS', 'JavaScript'],
    badge: 'Sisloc',
  },
];

// ── Experiência ──────────────────────────────────────────────────────────────
export const experience = [
  {
    period: 'mar 2026 - atual',
    role: 'Desenvolvedor Full-Stack',
    company: 'Grupo Fênix',
    location: 'Remoto',
    current: true,
    bullets: [
      'Construí e coloquei no ar uma plataforma interna full-stack (React + Fastify + Postgres) em servidor próprio, com Nginx, PM2 e HTTPS.',
      'Desenvolvimento de funis de venda de alta conversão, da VSL às páginas de upsell e downsell.',
      'Referência técnica de +500 afiliados em rastreamento, scripts e estrutura, com ferramenta própria de geração de links.',
      'Infra web: domínios, DNS, SSL e Cloudflare, resolvendo incidentes de produção com autonomia.',
    ],
  },
  {
    period: 'out 2025 - mar 2026',
    role: 'Desenvolvedor de Integrações (n8n & Node.js)',
    company: 'Onfly',
    location: 'Belo Horizonte, MG · Híbrido',
    bullets: [
      'Criação, configuração e sustentação de fluxos n8n com JavaScript para manipulação avançada de dados entre a Onfly e ERPs (SAP, TOTVS, Senior, Sankhya, Omie).',
      'Automação de conciliação financeira com cartões corporativos (Mastercard, Visa, Amex, Clara) e bancos (Itaú, Santander, Bradesco).',
      'Integrações de mobilidade corporativa (Uber for Business e 99) para prestação de contas automática.',
      'Resolução de incidentes N2/N3 via Jira, com troubleshooting de workflows, scripts e APIs em produção.',
    ],
  },
  {
    period: 'fev 2024 - out 2025',
    role: 'Analista de Sistemas',
    company: 'Sisloc Softwares',
    location: 'Belo Horizonte, MG · Híbrido',
    bullets: [
      'Configuração completa do sistema Sisloc, da implantação à personalização por cliente.',
      'Parametrização de documentos fiscais eletrônicos (NF-e, NFC-e, NFS-e, CT-e, MDF-e) e SPED.',
      'Integrações bancárias (BB, Bradesco, Itaú, Inter, Sicoob, Sicredi, Santander) e automações.',
      'Criação de layouts de documentos personalizados com Jasper Reports + HTML/CSS/JS e apoio em validações pós-migração de servidores.',
      'Criei uma base de conhecimento interna do setor e ministrei treinamentos de Jasper Reports (produto Força de Vendas) para estagiários, juniores e o time de Implantação.',
    ],
  },
  {
    period: 'mar 2023 - fev 2024',
    role: 'Estagiário',
    company: 'Sisloc Softwares',
    location: 'Belo Horizonte, MG · Híbrido',
    bullets: [
      'Implantação e configuração de ERP para clientes de locação de equipamentos para construção civil.',
      'Parametrização de regras de negócio e integrações bancárias.',
      'Layouts de documentos fiscais e checklists em HTML (NF-e, NFS-e, MDF-e, contratos).',
      'Suporte técnico direto ao cliente.',
    ],
  },
];

// ── Sobre mim ────────────────────────────────────────────────────────────────
export const about = {
  photo: '/cayo2.jpg',
  photoAlt: 'Foto de Cayo Durães',
  paragraphs: [
    'Sou formado em Engenharia de Software e minha trajetória foi do ERP ao full-stack. Comecei configurando sistemas e documentos fiscais, passei por integrações entre plataformas e hoje construo aplicações web inteiras, da tela ao servidor.',
    'O que mais gosto de fazer é transformar um processo manual e repetitivo em software que roda sozinho. E não fico só no código: configuro o servidor, o Nginx, o DNS e o HTTPS pra manter a aplicação no ar e estável.',
    'Acompanho de perto as ferramentas de IA que estão mudando a forma de programar (Claude, GPT, Claude Code e agentes) e já uso no meu dia a dia pra entregar mais rápido, com mais qualidade.',
  ],
  facts: [
    { icon: 'grad', text: 'Formado em Engenharia de Software' },
    { icon: 'pin', text: 'Belo Horizonte, Brasil' },
    { icon: 'globe', text: 'Português nativo · inglês técnico' },
    { icon: 'remote', text: 'Aberto a trabalho remoto' },
  ],
};

// ── Stack ────────────────────────────────────────────────────────────────────
export const stack = [
  {
    category: 'Front-end & produtos web',
    items: ['React', 'Vite', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    category: 'Back-end & dados',
    items: ['Node.js', 'Fastify', 'Prisma', 'PostgreSQL', 'Supabase', 'REST APIs', 'JWT'],
  },
  {
    category: 'Infra & automações',
    items: ['Linux', 'Nginx', 'PM2', 'Cloudflare', 'DNS / SSL', 'Docker', 'n8n', 'Make'],
  },
];

// ── Contato ──────────────────────────────────────────────────────────────────
export const contact = {
  title: 'Tem um produto pra construir ou um processo manual pra automatizar?',
  subtitle: 'Me chama que a gente conversa sobre como transformar isso em software.',
  cta: { label: 'Enviar mensagem' },
};
