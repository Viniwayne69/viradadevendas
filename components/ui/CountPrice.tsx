'use client';
import { useEffect, useRef, useState } from 'react';

/* Mostra o valor final desde o início; se o preço ainda está fora da tela,
   ele sobe de zero até o valor quando entra na tela */
export default function CountPrice({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = text.match(/^(\D*)(\d+(?:[.,]\d+)?)(\D*)$/);
  const prefix = match?.[1] ?? '';
  const number = match?.[2] ?? '0';
  const suffix = match?.[3] ?? '';
  const target = parseFloat(number.replace(',', '.'));
  const decimals = (number.split(/[.,]/)[1] ?? '').length;
  const [value, setValue] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!match || !el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    let raf = 0;
    let played = false;
    setValue(0);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || played) return;
      played = true;
      observer.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / 1100);
        setValue(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  if (!match) return <>{text}</>;
  return <span ref={ref}>{prefix}{value.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}
