// Tudo que aparece no header, hero, contato e meta tags vem daqui.
// Mudou de empresa? Pegou outro foco? Edita aqui e o site inteiro atualiza.

export const profile = {
  name: 'cayo durães',
  role: 'software engineer · integrações · infra · web',
  tagline:
    'Construo a parte chata que faz produto funcionar. Integrações que não quebram às 3 da manhã, infra que aguenta funil ao vivo, e front que converte.',
  location: 'belo horizonte, br',
  current: 'grupo fênix',
  status: 'available' as 'available' | 'busy' | 'closed',
  email: 'cayoduraes@gmail.com',
  github: 'https://github.com/CayoDuraes',
  linkedin: 'https://www.linkedin.com/in/cayo-duraes/',
  siteName: 'cayoduraes.dev',
} as const;
