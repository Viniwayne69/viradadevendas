/* PROVA SOCIAL
   A seção só aparece na página quando houver pelo menos um item abaixo
   Preencha apenas com conteúdo REAL e autorizado, nunca com exemplos inventados

   messages: prints reais de mensagens de participantes, salvos em public/images/proof/
             cropLeft, cropTop e cropBottom (de 0 a 1) recortam a borda da imagem, útil para esconder fotos de perfil
   stats: números verdadeiros, ex.: { value: '+500', label: 'empresários treinados' }
   testimonials: depoimentos reais; highlight é uma frase curta tirada do próprio texto
   photos: fotos de treinamentos anteriores, salvas em public/images/proof/ */

export type Stat = { value: string; label: string };
export type Testimonial = { quote: string; name: string; role?: string; photo?: string; highlight?: string };
export type ProofPhoto = { src: string; alt: string };
export type Message = { src: string; alt: string; width: number; height: number; cropLeft?: number; cropTop?: number; cropBottom?: number };

/* Textos transcritos dos prints de WhatsApp (public/images/proof/msg-1 a msg-7), com ajustes leves de escrita:
   sem saudações a outras pessoas, sem nomes de terceiros e sem abreviações. O sentido é o mesmo das mensagens. */
const participante = 'Participante do treinamento';

export const proof: {
  title: string;
  messagesLead: string;
  messages: Message[];
  stats: Stat[];
  testimonials: Testimonial[];
  photos: ProofPhoto[];
} = {
  title: 'Quem já passou por um treinamento da Allê',
  messagesLead: 'Palavras reais de quem participou',
  messages: [],
  stats: [],
  testimonials: [
    { highlight: 'Saí da palestra encantada', name: participante,
      quote: 'Eu saí da palestra de sábado encantada com o seu conteúdo, a didática, a postura e a sua presença. Não tem ser humano no mundo que não se envolva e não pare para ouvir cada palavra sua. Maravilhosa!' },
    { highlight: 'Foi uma experiência bem positiva', name: participante,
      quote: 'Eu gostei bastante do curso de ontem. Achei o conteúdo muito interessante e a forma como foi apresentado também. Achei que a Allê mudou bastante a forma de apresentar o conteúdo, mesmo passando a mesma linha de ensinamentos. Foi uma experiência bem positiva, consegui aproveitar bastante e acredito que todo mundo aprendeu coisas novas. Não tive nenhum ponto negativo que tenha me incomodado no curso.' },
    { highlight: 'Super esclarecedor', name: participante,
      quote: 'O treinamento foi super esclarecedor. Você é muito criativa e nos instiga a sair da caixinha. Saí com muitas ideias e tenho certeza de que irão trazer resultados, principalmente sobre a importância de fazer uma qualificação e uma sondagem mais eficientes. Mas a principal parte para mim foi sobre não esquecer os meus próprios objetivos: às vezes entramos no modo automático e esquecemos os motivos que nos fizeram começar. Sempre busco me desenvolver, como você disse, e vou buscar aprender mais com você a partir de agora. Adorei que você é enérgica e mostra na prática como fazer.' },
    { highlight: 'Bem mais dinâmico e proveitoso', name: participante,
      quote: 'Eu gostei bastante, achei bem mais dinâmico que o da outra vez. Foi mais leve também e bastante proveitoso para a minha rotina em loja.' },
    { highlight: 'Todas as estratégias foram muito boas', name: participante,
      quote: 'Foi muito produtiva a palestra. Todas as estratégias que ela falou foram muito boas. Uma das mais importantes foi gerar um relacionamento com o cliente, ou seja, saber conquistar, escutar o cliente e ter hospitalidade para ele se sentir bem no ambiente, porque o bom atendimento faz toda a diferença e o cliente sempre vai querer voltar. Se colocarmos em prática, acredito que dará muito certo. Desde já agradeço a vocês pela oportunidade que me deram.' },
    { highlight: 'Tem sido um prazer aprender com você', name: participante,
      quote: 'Você merece reconhecimento para valer, viu? Tem sido um prazer ouvir e aprender com você. Tenho aprendido com o seu exemplo, com a habilidade de resgatar ideias, validar pessoas e promover outros olhares de uma forma respeitosa. Que bom que você chegou na equipe com leveza, bom humor, gargalhada… mas também foco, direção e assertividade.' },
    { highlight: 'Um reforço e uma validação do que fazemos', name: participante,
      quote: 'De modo geral, foi bastante produtivo. Praticamente foi um reforço para o que fazemos em loja: boa parte do que foi dito já é praticado de forma direta e indireta, como a captação de clientes e a forma dinâmica de interação com os clientes pelo WhatsApp. Foi mais uma validação da forma como trabalhamos, e com esse tipo de conteúdo dá para afunilar as boas práticas. Teve momentos em que usei bem na prática o que foi dito lá.' },
  ],
  photos: [],
};
