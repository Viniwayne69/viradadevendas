import type { Metadata } from 'next';
import { Montserrat, Inter, Barlow_Condensed } from 'next/font/google';
import { content } from '@/lib/content';
import './globals.css';
const heading = Montserrat({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400', '700', '800', '900'], variable: '--font-heading', display: 'swap' });
const num = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-num', display: 'swap' });
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
export const metadata: Metadata = { title: content.title, description: content.support, icons: { icon: '/icons/favicon.svg' }, openGraph: { title: content.title, description: content.support, images: ['/images/og-cover.png'], locale: 'pt_BR', type: 'website' } };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body className={`${heading.variable} ${body.variable} ${num.variable}`}>{children}</body></html>; }
