export const content = {
  title: 'Virada de Vendas', subtitle: 'Direcionamento estratégico para a Black Friday e o Natal',
  open: 'Inscrições abertas', timeLabels: ['DIAS', 'HORAS', 'MIN', 'SEG'],
  brand: ['Virada de', 'Vendas'], event: ['04 de novembro', '9h às 12h', 'Mar Hotel Boa Viagem'],
  promise: 'Chega de diquinhas, você vai sair com', strategy: 'estratégia',
  support: 'Um encontro prático para você vender mais na Black Friday e no Natal',
  painTitle: 'Se você está chegando na Black Friday assim...',
  pains: ['Sem um plano definido', 'Sem saber o que realmente funciona', 'Com a equipe desalinhada'],
  conclusion: 'Então esse encontro foi feito exatamente pra você', mine: 'Quero minha vaga', participate: 'Quero minha vaga',
  learnTitle: 'O que você vai aprender', practice: 'na prática',
  lessons: ['Organizar as ações para vender mais no fim de ano', 'Inovações e tendências do momento', 'Prospecção assertiva e vendas corporativas', 'Equipe de alta performance'],
  outcomeTitle: 'Você vai sair do encontro com', outcomes: ['Um plano de ação realista', 'Ferramentas aplicáveis no seu negócio', 'Mais clareza para vender mais'],
  forTitle: 'Para quem é', for: ['Empresários e donos de negócio', 'Gestores e líderes de equipe', 'Profissionais autônomos e liberais', 'Quem quer vender mais na Black Friday e no Natal'],
  notTitle: 'Para quem não é', not: ['Quem busca apenas teoria', 'Quem não tem interesse em colocar a mão na prática'],
  methodTitle: 'Por que esse encontro', works: 'funciona',
  pillars: [['Direto ao ponto', 'Sem enrolação, só o que funciona'], ['Prático', 'Conteúdo aplicável no seu negócio'], ['Presencial', 'Networking e troca de experiências reais']],
  limited: 'Atenção: vagas limitadas', hostTitle: 'Quem conduz', hostName: 'Allê Ebrahim', role: 'Treinadora especialista em vendas',
  // NEEDS_CONFIRMATION: biografia transcrita da referência
  bio: 'Mais de 16 anos ajudando empresários a venderem mais com estratégia, simplicidade e resultado',
  offer: 'Garanta sua vaga agora!', oldPrice: 'R$ 119,90', price: 'R$ 29,90', from: 'de', per: 'por',
  fields: ['Nome completo', 'E-mail', 'WhatsApp'],
  // NEEDS_CONFIRMATION: consentimento transcrito da referência
  consent: 'Concordo em receber comunicações sobre o evento e outras novidades do Sebrae',
  submit: 'Quero minha vaga', confirmed: 'Confirmado', secure: 'Pagamento seguro e com criptografia', faqTitle: 'Perguntas frequentes',
  // NEEDS_CONFIRMATION: primeira resposta transcrita; demais respostas não estavam visíveis
  faq: [
    ['O encontro é presencial?', 'Sim, O encontro será no Mar Hotel Boa Viagem, no dia 04 de novembro, das 9h às 12h'],
    ['Vou receber certificado?', 'A informação sobre certificado será confirmada pela organização'],
    ['Posso levar alguém da minha equipe?', 'As condições para participação da sua equipe serão confirmadas pela organização']
  ],
  last: 'Último', warning: 'aviso', lastText: 'Se você continuar chegando na Black Friday sem estratégia, vai continuar tendo os mesmos resultados.', finalCta: 'Quero minha vaga',
  production: 'Realização', logo: 'SEBRAE', copyright: '© 2026 Sebrae. Todos os direitos reservados.',
  coverPlaceholder: 'Foto de capa da Allê', profilePlaceholder: 'Foto da Allê',
  play: 'Reproduzir vídeo', videoTime: '0:00 / 2:13', videoMissing: 'O vídeo será disponibilizado em breve',
  videoLabel: 'Apresentação do encontro', volume: 'Ativar ou desativar som', fullscreen: 'Abrir vídeo em tela cheia',
  /* só no computador (1024px ou mais) */
  desk: {
    headerCta: 'Quero minha vaga', eyebrow: 'Evento presencial · Recife', videoCaption: 'Assista: Eu sou Allê Ebrahim · 2 min',
    place: ['Mar Hotel', 'Boa Viagem · Recife'],
    promiseStats: [['3h', 'de encontro presencial e prático'], ['16+', 'anos de experiência da Allê em vendas'], ['1', 'plano para aplicar na sua empresa']],
    painDetails: ['Ideias soltas, sem um caminho claro para vender mais', 'Dúvida sobre onde investir tempo, equipe e dinheiro', 'Cada um fazendo de um jeito, sem foco no resultado'],
    learnDetails: ['Planejamento estratégico para a Black Friday e o Natal', 'O que está funcionando agora no varejo e nos serviços', 'Como encontrar, abordar e fechar com mais clientes', 'Como engajar o time para bater as metas da temporada'],
    ticket: { label: 'Ingresso', day: '04', month: 'Nov', time: '9h às 12h', host: 'Com Allê Ebrahim' },
    creds: ['16+ anos de experiência', 'Parceria com o SEBRAE'], hostEyebrow: 'Quem conduz',
    badge: 'Subsídio Sebrae', includedTitle: 'O que está incluso',
    included: ['Encontro presencial de 3 horas com a Allê', 'Direcionamento estratégico para Black Friday e Natal', 'Conteúdo prático para aplicar no seu negócio'],
    secure: 'Pagamento seguro pela Bilheteria Digital'
  },
  errors: { name: 'Informe seu nome completo', email: 'Informe um e-mail válido', phone: 'Informe um WhatsApp brasileiro válido com DDD', consent: 'Autorize o recebimento das comunicações para continuar', checkout: 'As inscrições serão disponibilizadas em breve, volte aqui para garantir sua vaga', request: 'Não foi possível enviar seus dados, tente novamente', sending: 'Enviando sua inscrição' }
} as const;

export type SiteContent = typeof content;
