// Stack agrupada POR DOMÍNIO em vez de soup de chipsinhos.
// Isso comunica "engenheiro que escolhe ferramenta", não "uso 30 coisas".

export type StackCategory = {
  category: string;
  items: string[];
};

export const stack: StackCategory[] = [
  {
    category: 'Frontend & Web',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    category: 'Backend & Integrações',
    items: ['Node.js', 'n8n', 'REST APIs', 'Webhooks', 'NestJS', 'Python'],
  },
  {
    category: 'Infra & DevOps',
    items: ['Cloudflare', 'DNS', 'SSL/TLS', 'Docker', 'Git', 'GitHub Actions'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'SQL Server', 'MySQL'],
  },
  {
    category: 'Ferramentas',
    items: ['Jira', 'Postman', 'Redmine', 'Zendesk', 'ClickUp'],
  },
];
