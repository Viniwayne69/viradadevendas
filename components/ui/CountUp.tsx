'use client';
import { useEffect, useRef, useState } from 'react';

/* número que conta de 0 até o valor quando aparece na tela; sem movimento para quem desativa animações */
export default function CountUp({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const m = /^(\d+)(.*)$/.exec(text);
  const alvo = m ? Number(m[1]) : 0;
  const resto = m ? m[2] : '';
  const [n, setN] = useState(alvo);

  useEffect(() => {
    const el = ref.current;
    if (!el || !m || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const passo = (t: number) => {
        const p = Math.min(1, (t - t0) / 1100);
        setN(Math.round(alvo * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(passo);
      };
      raf = requestAnimationFrame(passo);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [alvo]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!m) return <>{text}</>;
  return <span ref={ref}>{n}{resto}</span>;
}
