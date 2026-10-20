'use client';
import { useEffect, useRef, type ReactNode } from 'react';

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    /* entrada por bloco, com atraso curto entre irmãos */
    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-r],[data-hl]'));
    targets.forEach((el) => {
      const siblings = Array.from(el.parentElement?.children ?? []).filter((n) => n.hasAttribute('data-r'));
      el.style.setProperty('--d', `${Math.min(Math.max(siblings.indexOf(el), 0), 8) * 70}ms`);
    });
    root.setAttribute('data-armed', '');

    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('r-in');
          reveal.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    targets.forEach((el) => reveal.observe(el));

    /* moedas: pausam a flutuação fora da tela */
    const coins = Array.from(root.querySelectorAll<HTMLElement>('[data-coin]'));
    const coinWatch = new IntersectionObserver(
      (entries) => entries.forEach((entry) => (entry.target as HTMLElement).toggleAttribute('data-off', !entry.isIntersecting)),
      { rootMargin: '120px' }
    );
    coins.forEach((coin) => coinWatch.observe(coin));

    /* rolagem: parallax e giro das moedas, brilho das seções escuras */
    const dark = Array.from(root.querySelectorAll<HTMLElement>('[data-dark]'));
    const bar = root.querySelector<HTMLElement>('[data-progress]');
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      if (bar) {
        const max = document.documentElement.scrollHeight - vh;
        bar.style.transform = `scaleX(${max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)).toFixed(4) : 0})`;
      }
      coins.forEach((coin) => {
        const rect = coin.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > vh + 120) return;
        const distance = rect.top + rect.height / 2 - vh / 2;
        coin.style.setProperty('--py', `${Math.max(-36, Math.min(36, distance * -0.07)).toFixed(1)}px`);
        coin.style.setProperty('--rot', `${Math.max(-40, Math.min(40, distance * -0.1)).toFixed(1)}deg`);
      });
      dark.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
        el.style.setProperty('--p', progress.toFixed(3));
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    /* botões "magnéticos": no computador, o botão acompanha de leve o ponteiro */
    let magnet: HTMLElement | null = null;
    const release = () => {
      if (!magnet) return;
      magnet.style.removeProperty('--mx');
      magnet.style.removeProperty('--my');
      magnet = null;
    };
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-magnet]') ?? null;
      if (el !== magnet) release();
      if (!el) return;
      magnet = el;
      const rect = el.getBoundingClientRect();
      const dx = Math.max(-1, Math.min(1, (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)));
      const dy = Math.max(-1, Math.min(1, (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)));
      el.style.setProperty('--mx', `${(dx * 7).toFixed(1)}px`);
      el.style.setProperty('--my', `${(dy * 4).toFixed(1)}px`);
    };
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (fine) {
      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerleave', release);
    }

    return () => {
      if (fine) {
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerleave', release);
      }
      reveal.disconnect();
      coinWatch.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      root.removeAttribute('data-armed');
    };
  }, []);

  return <div ref={ref}><div className="scroll-progress" data-progress aria-hidden="true"/>{children}</div>;
}
