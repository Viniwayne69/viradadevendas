import type { Metadata, Viewport } from 'next';
import { Fira_Sans, Fira_Sans_Extra_Condensed } from 'next/font/google';
import { content } from '@/lib/content';
import './globals.css';

// Tipografia da marca da Allê: Fira Sans nos títulos (itálico) e no texto, e a versão condensada nos números.
const heading = Fira_Sans({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400', '700', '800', '900'], variable: '--font-heading', display: 'swap' });
const num = Fira_Sans_Extra_Condensed({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-num', display: 'swap' });
const body = Fira_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-body', display: 'swap' });

/* endereço oficial do site: faz as imagens de compartilhamento usarem o link completo */
const siteUrl = 'https://viradadevendas.vercel.app';
const share = {
  url: '/images/og-cover.jpg',
  width: 1200,
  height: 630,
  alt: 'Virada de Vendas, com Allê Ebrahim: direcionamento estratégico para a Black Friday e o Natal, 04 de novembro, 9h às 12h, no Mar Hotel, em Boa Viagem',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: content.title,
  description: content.support,
  icons: { icon: '/icons/favicon.svg' },
  openGraph: { title: content.title, description: content.support, url: siteUrl, siteName: 'Virada de Vendas', images: [share], locale: 'pt_BR', type: 'website' },
  twitter: { card: 'summary_large_image', title: content.title, description: content.support, images: [share.url] },
};

export const viewport: Viewport = { themeColor: '#002D3C' };

/* Google tag (gtag.js): GA4 (G-JED78TF6D2) e tag-base do Google Ads (AW-18525421106), pedido da equipe de tráfego */
const googleTag = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JED78TF6D2');
gtag('config', 'AW-18525421106');`;

/* Pixel da Meta (Allê): código-base padrão, registra a visita à página (PageView) */
const pixelId = '1639666154461538';
const metaPixel = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`;

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* só na versão publicada: testes locais não geram visitas no Analytics */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* eslint-disable-next-line @next/next/next-script-for-ga */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-JED78TF6D2" />
            <script dangerouslySetInnerHTML={{ __html: googleTag }} />
            <script dangerouslySetInnerHTML={{ __html: metaPixel }} />
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img height="1" width="1" style={{ display: 'none' }} alt="" src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`} />
            </noscript>
          </>
        )}
      </head>
      <body className={`${heading.variable} ${body.variable} ${num.variable}`}>{children}</body>
    </html>
  );
}
