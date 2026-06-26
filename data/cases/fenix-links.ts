import type { CaseStudy } from '../cases';

export const fenixLinks: CaseStudy = {
  slug: 'fenix-links',
  title: 'Fenix Links · Gerador de links para afiliados',
  client: 'Grupo Fênix',
  clientShort: 'Fênix',
  role: 'Front-end · Ferramenta interna em produção',
  period: '2026',
  // liveUrl removido propositalmente: a ferramenta é interna e o link público
  // não deve ficar exposto no portfólio.

  summary:
    'Ferramenta interna em produção que automatiza a geração de links de afiliados para mais de 300 usuários ativos do Grupo Fênix. Vanilla JS, sem dependências, deploy próprio.',

  description:
    'Ferramenta web criada para o time de afiliados do Grupo Fênix. Substitui o processo manual de montagem de links rastreáveis por uma interface autoatendimento: o afiliado escolhe o produto, cola seu AFFID e recebe todos os links prontos com um clique. Stack vanilla deliberada: HTML, CSS e JavaScript puros, sem framework, sem build step.',

  stack: ['HTML5', 'CSS3', 'JavaScript', 'vanilla', 'sem dependências'],

  context:
    'Com mais de 300 afiliados ativos rodando ofertas da Fênix, o time gerava manualmente os links rastreáveis de cada campanha. Para cada produto havia múltiplos templates de URL com parâmetros específicos da BuyGoods, propenso a erro de digitação e escalando mal. Erros em link de afiliado significam comissão perdida ou tracking quebrado. Dor direta no negócio.',

  solution:
    'Aplicação web simples, autoatendida, em produção sob domínio próprio. O afiliado seleciona o produto entre as ofertas disponíveis, cola seu AFFID (User ID da BuyGoods) e a ferramenta devolve todos os formatos de link prontos para copiar. Stack vanilla escolhida deliberadamente, sem build, sem framework, deploy direto em servidor estático. O critério foi "ferramenta certa pro problema certo": React seria overkill para um formulário com geração de strings.',

  screenshots: [
    {
      src: '/work/fenix-links/01-home.png',
      alt: 'Tela inicial do Fenix Links mostrando os produtos disponíveis em grid',
      caption: 'Tela inicial · seleção entre as ofertas disponíveis · informações estratégicas removidas',
      browserUrl: 'fenix-links',
    },
    {
      src: '/work/fenix-links/02-form.png',
      alt: 'Formulário de inserção do AFFID após escolher o produto',
      caption: 'Formulário · afiliado cola seu AFFID (User ID da BuyGoods) e gera os links',
      browserUrl: 'fenix-links',
    },
    {
      src: '/work/fenix-links/03-output.png',
      alt: 'Resultado mostrando os links gerados de checkout, VSL e DTC prontos para copiar',
      caption: 'Output · links de checkout, VSL e DTC prontos · 1 clique para copiar tudo · URLs ocultadas',
      browserUrl: 'fenix-links',
    },
  ],

  results: [
    'Mais de 300 afiliados ativos usando a ferramenta em autoatendimento',
    'Eliminou gargalo operacional do time interno na geração manual de links',
    'Zero dependências externas · build instantâneo · deploy estático',
    'Stack vanilla com performance nativa do browser, sem JS runtime de framework',
    'Adotada de forma autônoma, sem necessidade de treinamento ou documentação extensa',
  ],
};
