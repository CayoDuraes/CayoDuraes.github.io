import type { CaseStudy } from '../cases';

export const santaRita: CaseStudy = {
  slug: 'santa-rita',
  title: 'Sistema de automação de relacionamento',
  client: 'Casa de Saúde Santa Rita',
  clientShort: 'Santa Rita',
  role: 'Freelance · Engenheiro de Automação',
  period: '2025',

  summary:
    'Seis fluxos automatizados de captação, comunicação segmentada e reengajamento, integrando Power BI, Make e RD Station, rodando autônomos no relacionamento com pacientes e médicos de um hospital.',

  description:
    'Projeto de freelance para a Casa de Saúde Santa Rita: desenho e implementação de um sistema de automação de relacionamento que conecta os dados clínicos do hospital (via Power BI e planilhas) a comunicações segmentadas no RD Station. Seis fluxos independentes que rodam sozinhos, todos os dias, sem intervenção manual.',

  stack: ['Make.com', 'Power BI', 'RD Station', 'Webhooks', 'Google Sheets', 'HTML/CSS'],

  context:
    'O hospital precisava reativar e profissionalizar seu relacionamento com pacientes e corpo clínico. A base de contatos não estava sincronizada, comunicações eram disparadas manualmente, pesquisas de satisfação se perdiam (o fluxo antigo no Power Automate havia sido descontinuado) e não havia visibilidade sobre médicos que pararam de operar. Receita silenciosa indo embora.',

  solution:
    'Sistema centralizado no Make.com como "cérebro", lendo dados de Power BI e planilhas, aplicando regras de segmentação e entregando comunicações ao RD Station. Os seis fluxos foram desenhados modulares: cada um pode ser pausado, ajustado ou substituído sem afetar os outros. Se um dia o hospital trocar de ferramenta de e-mail, basta ajustar a ponta final.',

  flows: [
    {
      name: 'Captação de pacientes',
      role: 'Base de contatos',
      description:
        'Todo dia o sistema busca pacientes recém-cadastrados no hospital e adiciona à base do RD Station automaticamente. Mantém a base de relacionamento sempre atualizada sem ninguém digitar.',
      trigger: '1× ao dia, automaticamente',
      source: 'Planilha mestre de pacientes',
      destination: 'RD Station (criação ou atualização de contato)',
      criterion: 'Pacientes com data de cadastro = dia anterior',
      diagram: [
        { label: 'Planilha', desc: 'base paciente', kind: 'source' },
        { label: 'Make', desc: 'filter · enrich', kind: 'process' },
        { label: 'RD Station', desc: 'contato', kind: 'destination' },
      ],
      highlights: [
        'Envia nome, e-mail, celular, status, tipo e nome de procedimento, data',
        'Permite segmentar e personalizar comunicações posteriores',
      ],
    },
    {
      name: 'Captação de médicos',
      role: 'Base de contatos',
      description:
        'Mesma lógica do fluxo anterior, voltado ao corpo clínico. Mantém médicos sincronizados no RD Station para campanhas de relacionamento, comunicados e parabéns.',
      trigger: '1× ao dia, automaticamente',
      source: 'Planilha mestre de médicos',
      destination: 'RD Station (criação ou atualização de contato médico)',
      criterion: 'Médicos com data de cadastro = dia anterior',
      diagram: [
        { label: 'Planilha', desc: 'base médico', kind: 'source' },
        { label: 'Make', desc: 'filter · enrich', kind: 'process' },
        { label: 'RD Station', desc: 'contato', kind: 'destination' },
      ],
      highlights: [
        'Envia nome, e-mail, telefone, especialidade, CRM, data de nascimento',
        'Fundação para campanhas direcionadas por especialidade',
      ],
    },
    {
      name: 'Motor de réguas de pacientes',
      role: 'O coração do sistema',
      description:
        'O fluxo central, que entrega 12 comunicações diferentes nos momentos certos da jornada de cada paciente. Recebe do Power BI uma lista de pacientes já com a etiqueta de qual jornada cada um está, e usa essa etiqueta como endereço pra decidir a comunicação correta.',
      trigger: 'Diariamente, via webhook do Power BI',
      source: 'Power BI (via webhook)',
      destination: 'RD Station (contato + evento de conversão)',
      criterion: 'Cada paciente recebe a comunicação correspondente à sua "regra"',
      diagram: [
        { label: 'Power BI', desc: 'jornada tag', kind: 'source' },
        { label: 'Make', desc: 'router · 12 vias', kind: 'process' },
        { label: 'RD Station', desc: 'evento + conv.', kind: 'destination' },
      ],
      highlights: [
        '6 jornadas diferentes (pré-internação, alta, SADT-cateterismo, etc.)',
        '12 comunicações segmentadas no momento exato da jornada',
        'Centenas de pacientes processados por execução',
        'Pacientes marcados como "sem regra" entram só na base, como proteção contra disparos incorretos',
      ],
    },
    {
      name: 'Pesquisa de satisfação',
      role: 'Engajamento',
      description:
        'Quando um paciente responde o formulário no site, a resposta é recebida pelo Make em tempo real e organizada na planilha correta, separada por tipo de atendimento (Ambulatório, Internação, Pronto-Socorro). Cada tipo tem perguntas diferentes, e misturar tudo geraria colunas inconsistentes.',
      trigger: 'Imediato, quando alguém responde o formulário',
      source: 'Formulário no site do hospital (via webhook)',
      destination: 'Planilha correspondente ao tipo, em abas separadas',
      criterion: 'Tipo da pesquisa: Ambulatório, Internação ou Pronto-Socorro',
      diagram: [
        { label: 'Form site', desc: 'webhook', kind: 'source' },
        { label: 'Make', desc: 'router por tipo', kind: 'process' },
        { label: 'Sheets', desc: '3 abas', kind: 'storage' },
      ],
      highlights: [
        'Substituiu fluxo antigo descontinuado no Power Automate',
        'Roteamento automático por tipo de atendimento',
        'NPS, acolhimento, enfermagem, instalações, médico, coletados por categoria',
      ],
    },
    {
      name: 'Notificação interna de pesquisas',
      role: 'Comunicação interna',
      description:
        'Fluxo complementar ao anterior. Avisa a equipe responsável a cada 15 dias com o panorama das respostas recebidas. Estava desconfigurado antes deste trabalho. Foi religado para fechar o ciclo "paciente responde → equipe é notificada → ação acontece".',
      trigger: 'Quinzenal',
      destination: 'E-mail HTML com identidade visual do hospital',
      diagram: [
        { label: 'Sheets', desc: 'respostas', kind: 'source' },
        { label: 'Make', desc: 'agrega · format', kind: 'process' },
        { label: 'E-mail', desc: 'time interno', kind: 'destination' },
      ],
    },
    {
      name: 'Reengajamento de médicos · 20 dias',
      role: 'Reengajamento',
      description:
        'Médico parado é receita parada. Monitora continuamente quanto tempo cada médico do corpo clínico passou sem realizar procedimento. Cruzou 20 dias, dispara um evento no RD Station, abrindo caminho para campanhas de reativação direcionadas.',
      trigger: '1× ao dia, automaticamente',
      source: 'Planilha de monitoramento de inatividade',
      destination: 'RD Station (evento de conversão) + log interno',
      criterion: 'Médico ≥ 20 dias sem procedimento E com e-mail cadastrado',
      diagram: [
        { label: 'Planilha', desc: 'dias parados', kind: 'source' },
        { label: 'Make', desc: 'check log · dedup', kind: 'process' },
        { label: 'RD Station', desc: 'evento', kind: 'destination' },
      ],
      highlights: [
        'Sistema anti-duplicação: registra cada notificação em log interno',
        'Médico que volta a operar tem o "relógio" resetado automaticamente',
        'Régua de 20 dias é parâmetro único, ajustável pra 15 ou 30 conforme a estratégia',
        'Recupera receita silenciosa que antes só seria descoberta por análise manual',
      ],
    },
  ],

  results: [
    'Seis fluxos rodando 100% autônomos, sem intervenção manual diária',
    'Base de pacientes e médicos sincronizada com o RD Station todos os dias',
    '12 comunicações segmentadas substituindo disparos manuais genéricos',
    'Pesquisa de satisfação religada em tempo real após interrupção do fluxo antigo',
    'Sistema de reengajamento que identifica receita silenciosa por médico ocioso',
    'Documentação técnico-funcional completa entregue ao cliente',
  ],
};
