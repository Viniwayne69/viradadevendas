'use client';
import { useState } from 'react';
import { CircleHelp, ChevronDown } from 'lucide-react';
import { content } from '@/lib/content';
import s from './Ui.module.css';

export default function Accordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={s.accordion}>
      {content.faq.map(([q, a], i) => (
        <article key={q} data-r>
          <h3>
            <button id={`faq-q-${i}`} aria-expanded={open === i} aria-controls={`faq-a-${i}`} onClick={() => setOpen(open === i ? null : i)}>
              <CircleHelp size={18}/>
              <span>{q}</span>
              <ChevronDown size={17} className={s.chevron}/>
            </button>
          </h3>
          <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={s.panel} data-open={open === i || undefined}>
            <div><p>{a}</p></div>
          </div>
        </article>
      ))}
    </div>
  );
}
