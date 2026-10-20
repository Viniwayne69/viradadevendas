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

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${heading.variable} ${body.variable} ${num.variable}`}>{children}</body></html>;
}
