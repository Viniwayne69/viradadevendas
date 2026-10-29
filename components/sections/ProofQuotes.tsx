'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/proof';
import s from './Proof.module.css';

/* depoimentos em cards: deslizar no celular, colunas no tablet e no computador;
   textos longos mostram um trecho e o botão "Ler mais" */
const LIMITE = 110;

/* fundos escuros de plateia e palco, só de ambientação: não mostram quem escreveu o comentário */
const FUNDOS = [
  '/images/turma/plateia-animada.webp',
  '/images/turma/palco-slide.webp',
  '/images/turma/palco-sala.webp',
  '/images/turma/palco-personalizacao.webp',
  '/images/turma/alle-perfil-escuro.webp',
];

export default function ProofQuotes({ items }: { items: Testimonial[] }) {
  const [abertos, setAbertos] = useState<Set<number>>(new Set());
  const alternar = (i: number) => setAbertos((prev) => { const n = new Set(prev); if (n.has(i)) n.delete(i); else n.add(i); return n; });

  return (
    <>
      <div className={s.quotes} role="region" aria-label="Depoimentos de participantes" tabIndex={0}>
        {items.map((t, i) => {
          const longo = t.quote.length > LIMITE;
          const aberto = abertos.has(i);
          return (
            <figure key={i} className={s.qcard}>
              <Image className={s.qbg} src={FUNDOS[i % FUNDOS.length]} alt="" width={1418} height={808} sizes="(min-width:1024px) 34vw, 86vw" aria-hidden="true"/>
              <Quote className={s.qmark} aria-hidden="true"/>
              {t.highlight && <p className={s.qhigh}>{t.highlight}</p>}
              <blockquote className={s.qtext} data-clamp={longo && !aberto ? '' : undefined}>{t.quote}</blockquote>
              {longo && <button type="button" className={s.qmore} aria-expanded={aberto} onClick={() => alternar(i)}>{aberto ? 'Ler menos' : 'Ler mais'}</button>}
              <figcaption className={s.qfoot}><span className={s.qline} aria-hidden="true"/>{t.name}</figcaption>
            </figure>
          );
        })}
      </div>
      <p className={s.qhint}>Deslize para ver mais depoimentos</p>
    </>
  );
}
