/* PROVA SOCIAL
   A seção só aparece na página quando houver pelo menos um item abaixo
   Preencha apenas com conteúdo REAL e autorizado, nunca com exemplos inventados

   messages: prints reais de mensagens de participantes, salvos em public/images/proof/
             cropLeft, cropTop e cropBottom (de 0 a 1) recortam a borda da imagem, útil para esconder fotos de perfil
   stats: números verdadeiros, ex.: { value: '+500', label: 'empresários treinados' }
   testimonials: depoimentos autorizados, com nome e, se possível, cargo ou empresa
   photos: fotos de treinamentos anteriores, salvas em public/images/proof/ */

export type Stat = { value: string; label: string };
export type Testimonial = { quote: string; name: string; role?: string; photo?: string };
export type ProofPhoto = { src: string; alt: string };
export type Message = { src: string; alt: string; width: number; height: number; cropLeft?: number; cropTop?: number; cropBottom?: number };

export const proof: {
  title: string;
  messagesLead: string;
  messages: Message[];
  stats: Stat[];
  testimonials: Testimonial[];
  photos: ProofPhoto[];
} = {
  title: 'Quem já passou por um treinamento da Allê',
  messagesLead: 'Mensagens reais de participantes',
  messages: [
    { src: '/images/proof/msg-2.png', alt: 'Mensagem de participante: saí da palestra encantada com o conteúdo, a didática, a postura e a presença', width: 1006, height: 466 },
    { src: '/images/proof/msg-3.webp', alt: 'Mensagem de participante: gostei bastante do curso, achei o conteúdo muito interessante e foi uma experiência bem positiva', width: 1290, height: 954 },
    { src: '/images/proof/msg-4.png', alt: 'Mensagem de participante: achei bem mais dinâmico, mais leve e proveitoso para a minha rotina em loja', width: 1290, height: 379 },
    { src: '/images/proof/msg-1.png', alt: 'Mensagem de participante: tem sido um prazer ouvir e aprender com você', width: 298, height: 291 },
    { src: '/images/proof/msg-5.webp', alt: 'Mensagem de participante: foi muito produtiva a palestra, todas as estratégias foram muito boas', width: 1290, height: 1079 },
    { src: '/images/proof/msg-6.png', alt: 'Mensagem de participante: o treinamento foi super esclarecedor, você é muito criativa e nos instiga a sair da caixinha', width: 262, height: 456 },
    { src: '/images/proof/msg-7.png', alt: 'Mensagem de participante: bastante produtivo, um reforço e uma validação do que fazemos em loja', width: 378, height: 675 },
  ],
  stats: [],
  testimonials: [],
  photos: [],
};
