'use client';
import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { config } from '@/lib/config';
import { capturedParams, trackButtonClick, withParams } from '@/lib/tracking';
import s from './Ui.module.css';

/* `local` diz qual botão foi clicado (aparece no evento do Google Analytics) */
export default function Button({ children, local = 'botao' }: { children: ReactNode; local?: string }) {
  const [href, setHref] = useState(config.checkoutUrl);

  /* a origem da campanha (UTMs, gclid…) vai junto para a Bilheteria Digital */
  useEffect(() => { setHref(withParams(config.checkoutUrl, capturedParams())); }, []);

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    const destination = withParams(config.checkoutUrl, capturedParams());
    e.currentTarget.href = destination;
    trackButtonClick(local, e.currentTarget.innerText.replace(/\s+/g, ' ').trim(), destination);
  }

  return <a className={s.button} data-magnet href={href} onClick={onClick}>{children}</a>;
}
