'use client';
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type MouseEvent, type PointerEvent } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X } from 'lucide-react';
import type { Message } from '@/lib/proof';
import s from './Proof.module.css';

/* resistência nas pontas: quanto mais se puxa, menos o conteúdo acompanha */
const rubber = (over: number) => 120 * (1 - Math.exp(-over / 160));

export default function ProofMessages({ messages }: { messages: Message[] }) {
  const track = useRef<HTMLDivElement>(null);
  const dots = useRef<(HTMLButtonElement | null)[]>([]);
  const drag = useRef({ active: false, moved: false, startX: 0, startLeft: 0, lastX: 0, lastT: 0, vel: 0, raf: 0 });
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: globalThis.KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => () => cancelAnimationFrame(drag.current.raf), []);

  /* posição fracionária entre os cartões, para as bolinhas acompanharem em tempo real */
  function position() {
    const el = track.current;
    if (!el) return 0;
    const cards = Array.from(el.children) as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    const centers = cards.map((c) => c.offsetLeft + c.offsetWidth / 2);
    if (center <= centers[0]) return 0;
    if (center >= centers[centers.length - 1]) return centers.length - 1;
    for (let i = 0; i < centers.length - 1; i++) {
      if (center <= centers[i + 1]) return i + (center - centers[i]) / (centers[i + 1] - centers[i]);
    }
    return 0;
  }

  function onScroll() {
    const pos = position();
    dots.current.forEach((dot, i) => dot?.style.setProperty('--a', String(Math.max(0, 1 - Math.abs(pos - i)))));
    const nearest = Math.round(pos);
    setActive((prev) => (prev === nearest ? prev : nearest));
  }

  function goTo(i: number) {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: 'smooth' });
  }

  /* arrastar com o mouse: inércia ao soltar e resistência nas pontas
     (no toque o navegador já faz isso de forma nativa) */
  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    const el = track.current;
    if (!el || e.pointerType !== 'mouse' || e.button !== 0 || el.scrollWidth <= el.clientWidth + 2) return;
    const d = drag.current;
    cancelAnimationFrame(d.raf);
    Object.assign(d, { active: true, moved: false, startX: e.clientX, startLeft: el.scrollLeft, lastX: e.clientX, lastT: performance.now(), vel: 0 });
    el.setAttribute('data-drag', '');
    el.setAttribute('data-free', '');
    try { el.setPointerCapture(e.pointerId); } catch { /* sem captura, o arrasto segue pelo elemento */ }
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = track.current;
    const d = drag.current;
    if (!el || !d.active) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) d.moved = true;
    const max = el.scrollWidth - el.clientWidth;
    const target = d.startLeft - dx;
    if (target < 0) {
      el.scrollLeft = 0;
      el.style.setProperty('--over', `${rubber(-target)}px`);
    } else if (target > max) {
      el.scrollLeft = max;
      el.style.setProperty('--over', `${-rubber(target - max)}px`);
    } else {
      el.scrollLeft = target;
      el.style.setProperty('--over', '0px');
    }
    const now = performance.now();
    const dt = Math.max(1, now - d.lastT);
    d.vel = 0.8 * d.vel + 0.2 * ((e.clientX - d.lastX) / dt);
    d.lastX = e.clientX;
    d.lastT = now;
  }

  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    const el = track.current;
    const d = drag.current;
    if (!el || !d.active) return;
    d.active = false;
    try { el.releasePointerCapture(e.pointerId); } catch { /* captura já liberada */ }
    el.removeAttribute('data-drag');
    el.style.setProperty('--over', '0px');

    const finish = () => {
      el.removeAttribute('data-free');
      goTo(Math.round(position()));
    };
    let v = -d.vel * 16;
    const tick = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (Math.abs(v) < 0.5 || el.scrollLeft <= 0 || el.scrollLeft >= max) return finish();
      el.scrollLeft += v;
      v *= 0.94;
      d.raf = requestAnimationFrame(tick);
    };
    d.raf = requestAnimationFrame(tick);
  }

  function onClickCapture(e: MouseEvent<HTMLDivElement>) {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(Math.min(messages.length - 1, active + 1)); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(Math.max(0, active - 1)); }
  }

  const current = open !== null ? messages[open] : null;

  return (
    <div className={s.carousel} data-r>
      <div
        ref={track}
        className={s.messages}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
        onKeyDown={onKeyDown}
        role="region"
        aria-label="Mensagens de participantes"
        tabIndex={0}
      >
        {messages.map((m, i) => (
          <figure key={m.src} className={s.message}>
            <button type="button" className={s.zoom} aria-label={`Ampliar mensagem ${i + 1}`} onClick={() => setOpen(i)}>
              <Image ref={(el) => { if (el?.complete) el.closest('figure')?.setAttribute('data-loaded', ''); }} onLoad={(e) => e.currentTarget.closest('figure')?.setAttribute('data-loaded', '')} draggable={false} src={m.src} alt={m.alt} width={m.width} height={m.height} sizes="(min-width: 1024px) 320px, (min-width: 700px) 45vw, 80vw"/>
            </button>
          </figure>
        ))}
      </div>
      <div className={s.dots}>
        {messages.map((m, i) => (
          <button key={m.src} ref={(el) => { dots.current[i] = el; }} type="button" aria-label={`Ir para a mensagem ${i + 1}`} aria-current={i === active} style={{ '--a': i === 0 ? 1 : 0 } as CSSProperties} onClick={() => goTo(i)}/>
        ))}
      </div>
      <p className={s.hint}>Deslize para ver mais e toque para ampliar</p>

      {current && createPortal(
        <div className={s.lightbox} role="dialog" aria-modal="true" aria-label="Mensagem ampliada" onClick={() => setOpen(null)}>
          <button type="button" className={s.close} aria-label="Fechar" onClick={() => setOpen(null)}><X size={22}/></button>
          <div className={s.lightboxScroll}>
            <Image src={current.src} alt={current.alt} width={current.width} height={current.height} sizes="(min-width: 800px) 720px, 100vw" className={s.lightboxImage} onClick={(e) => e.stopPropagation()}/>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
