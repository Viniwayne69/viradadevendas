export const content = {
  title: 'Virada de Vendas', subtitle: 'Direcionamento estratégico para a Black Friday e o Natal',
  open: 'Inscrições abertas', timeLabels: ['DIAS', 'HORAS', 'MIN', 'SEG'],
  brand: ['Virada de', 'Vendas'], event: ['04 de novembro', '9h às 12h', 'Mar Hotel Boa Viagem'],
  promise: 'Mais que ideias, você vai sair com', strategy: 'estratégia',
  support: 'Um encontro prático para você vender mais na Black Friday e no Natal',
  painTitle: 'Se você está chegando na Black Friday assim...',
  pains: ['Sem um plano definido', 'Sem saber o que realmente funciona', 'Com a equipe desalinhada'],
  conclusion: 'Então esse encontro foi feito exatamente pra você', mine: 'Quero minha vaga!', participate: 'Quero participar',
  learnTitle: 'O que você vai aprender', practice: 'na prática',
  lessons: ['Planejamento estratégico', 'Precificação inteligente', 'Campanhas que vendem', 'Equipe de alta performance'],
  outcomeTitle: 'Você vai sair do encontro com', outcomes: ['Um plano de ação realista', 'Ferramentas aplicáveis no seu negócio', 'Mais clareza para vender mais'],
  forTitle: 'Para quem é', for: ['Empresários e donos de negócio', 'Gestores e líderes de equipe', 'Quem quer vender mais na Black Friday e no Natal'],
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
  submit: 'Quero me inscrever!', confirmed: 'Confirmado', secure: 'Pagamento seguro e com criptografia', faqTitle: 'Perguntas frequentes',
  // NEEDS_CONFIRMATION: primeira resposta transcrita; demais respostas não estavam visíveis
  faq: [
    ['O encontro é presencial?', 'Sim, O encontro será no Mar Hotel Boa Viagem, no dia 04 de novembro, das 9h às 12h'],
    ['Vou receber certificado?', 'A informação sobre certificado será confirmada pela organização'],
    ['Posso levar alguém da minha equipe?', 'As condições para participação da sua equipe serão confirmadas pela organização']
  ],
  last: 'Último', warning: 'aviso', lastText: 'Se você continuar chegando na Black Friday sem estratégia, vai continuar tendo os mesmos resultados.', finalCta: 'Garanta sua vaga agora antes que acabe',
  production: 'Realização', logo: 'SEBRAE', copyright: '© 2026 Sebrae. Todos os direitos reservados.',
  coverPlaceholder: 'Foto de capa da Allê', profilePlaceholder: 'Foto da Allê',
  play: 'Reproduzir vídeo', videoTime: '0:00 / 2:18', videoMissing: 'O vídeo será disponibilizado em breve',
  videoLabel: 'Apresentação do encontro', volume: 'Ativar ou desativar som', fullscreen: 'Abrir vídeo em tela cheia',
  errors: { name: 'Informe seu nome completo', email: 'Informe um e-mail válido', phone: 'Informe um WhatsApp brasileiro válido com DDD', consent: 'Autorize o recebimento das comunicações para continuar', checkout: 'As inscrições serão disponibilizadas em breve, volte aqui para garantir sua vaga', request: 'Não foi possível enviar seus dados, tente novamente', sending: 'Enviando sua inscrição' }
} as const;

export type SiteContent = typeof content;
