'use client';
import { useEffect, useRef, useState } from 'react';
import { CalendarRange, Lightbulb, Target, UsersRound, Plus } from 'lucide-react';
import { content as c } from '@/lib/content';
import s from './Learn.module.css';

/* cada cartão mostra só o título; tocar (ou passar o mouse no computador) abre a frase de apoio */
const icons = [CalendarRange, Lightbulb, Target, UsersRound];

export default function LearnList() {
  const [aberto, setAberto] = useState<number | null>(null);
  const lista = useRef<HTMLOListElement>(null);

  /* celular: uma linha se desenha ligando os 4 itens conforme a rolagem, como um plano sendo montado */
  useEffect(() => {
    const el = lista.current;
    if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !matchMedia('(max-width: 767px)').matches) return;
    el.setAttribute('data-line', '');
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.82 - r.top) / (r.height * 0.9)));
      el.style.setProperty('--draw', p.toFixed(3));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      el.removeAttribute('data-line');
    };
  }, []);
  return (
    <ol ref={lista}>
      {c.lessons.map((text, i) => {
        const Icon = icons[i];
        const o = aberto === i;
        return (
          <li
            data-r
            key={text}
            data-open={o ? '' : undefined}
            role="button"
            tabIndex={0}
            aria-expanded={o}
            onClick={() => setAberto(o ? null : i)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setAberto(o ? null : i); } }}
          >
            <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
            <b className={s.title}>{text}</b>
            <Icon className={`desk ${s.ico}`} aria-hidden="true"/>
            <Plus className={s.plus} aria-hidden="true"/>
            <small>{c.desk.learnDetails[i]}</small>
          </li>
        );
      })}
    </ol>
  );
}
