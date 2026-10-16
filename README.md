# Virada de Vendas

Página migrada para Next.js 15, React 19, TypeScript estrito, CSS Modules, Montserrat e Inter via next/font/google, next/image e lucide-react

## Rodar

Requer Node.js 20.9 ou superior e pnpm

```sh
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

Copie `.env.example` para `.env.local` e configure os valores antes de buildar, as variáveis públicas são incorporadas ao bundle no build

## Migração preservada

O estado inicial continha `index.html`, `js/content.js`, `js/config.js` e `assets/favicon.svg`, ainda não existiam folhas CSS nem lógica de interação concluída

Os textos existentes foram transferidos integralmente para `lib/content.ts`, incluindo os comentários NEEDS_CONFIRMATION, e receberam tipagem por inferência literal com `as const`

A configuração passou para `lib/config.ts` e `.env.example`, o favicon foi para `public/icons/favicon.svg` e os metadados do HTML passaram para `app/layout.tsx`

As moedas que estavam em geração foram preservadas em `public/coins`, com quatro perspectivas e versões de 320 e 640 pixels, todas com canal alfa real

As seções ficam em `components/sections`, cada uma com seu CSS Module, os elementos reutilizáveis ficam em `components/ui` e as variáveis visuais globais em `app/globals.css`

Somente Countdown, VideoPlayer, Accordion, LeadForm, StickyBar e Reveal declaram use client

## Arquivos a fornecer

* `public/images/alle-capa.jpg`, foto real para o vídeo
* `public/images/alle-perfil.jpg`, foto real da apresentadora
* `public/images/sebrae-logo.png`, logo oficial
* URL MP4, YouTube ou Vimeo em `NEXT_PUBLIC_VIDEO_URL`
* Link de pagamento em `NEXT_PUBLIC_CHECKOUT_URL`
* Endpoint opcional em `LEAD_WEBHOOK_URL`, acessado apenas pelo servidor

As fotos ausentes usam retângulos neutros e o logo ausente usa texto, após adicionar os arquivos refaça o build para que os componentes de servidor detectem os assets

## Comportamento

A contagem usa `2026-11-04T09:00:00-03:00`, renderiza os números após montar e nunca apresenta valores negativos

O formulário valida no navegador e novamente em `/api/lead`, quando o webhook está definido a API aguarda seu sucesso antes de liberar a continuação, falhas impedem o redirecionamento

Sem webhook, a API valida mas não armazena dados, sem checkout o visitante recebe o aviso de indisponibilidade e não é redirecionado

O vídeo só carrega ao clicar e inicia sem som, com controles nativos depois da reprodução, YouTube e Vimeo usam seus próprios controles

## Referência e suposições

As seis telas representam uma página contínua, sem molduras de celular, status do sistema ou títulos externos dos mockups

Cores amostradas do PNG: fundo `#001812`, fundo profundo `#00130d`, menta `#60faa6`, fundo claro `#f3f5f7` e cartões `#edf0ef`, são pixels representativos de regiões com gradientes e compressão, não uma paleta original fornecida

O desenho usa Montserrat em itálico e Inter conforme a migração solicitada, a assinatura Virada de mantém Georgia em itálico por sua aparência serifada na referência

O contador é real, portanto seus números diferem do mockup, o ano 2024 no rodapé foi preservado da imagem e deve ser revisado

As respostas fechadas sobre certificado e equipe não estavam legíveis na referência, por isso usam textos provisórios sem afirmar condições não confirmadas

NEEDS_CONFIRMATION identifica a biografia, o consentimento e o conjunto de respostas das perguntas frequentes em `lib/content.ts`

A fidelidade absoluta não está concluída, as fotos e a marca ainda são placeholders e Montserrat, Inter, ícones Lucide e moedas geradas apresentam diferenças em relação aos pixels do mockup

A imagem social em `public/images/og-cover.png` é provisória, configure `metadataBase` em `app/layout.tsx` com o domínio definitivo antes da publicação para resolver a URL social

## Moedas

Geradas pela ferramenta imagegen com o prompt abaixo, variando o ângulo entre front view, tilted 30 degrees, three quarter side view e near edge profile view

“Create one photorealistic 3D metallic mint green coin, [angle], embossed dollar sign, thick ridged rim, pale gold green reflections, studio highlights, isolated centered, actual transparent background, no shadow backdrop, no other objects, website decorative asset”

As imagens originais foram reduzidas preservando alfa, as bordas externas transparentes foram verificadas e a aplicação usa next/image com opacidade e desfoque discretos

## Validação

Build de produção, lint e checagem de tipos executados, além de navegação Chromium em 360, 390, 430, 768, 1024 e 1440 pixels

Verificados: ausência de overflow horizontal, ausência de erros de página, validação dos quatro campos, aviso sem checkout, API rejeitando payload inválido, acordeão com um painel aberto e barra escondida durante a inscrição

Capturas locais e comparação lado a lado ficam em `qa`, pasta ignorada pelo Git, a integração real com pagamento e webhook depende das URLs fornecidas
