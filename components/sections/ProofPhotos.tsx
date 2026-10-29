'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ProofPhoto } from '@/lib/proof';
import s from './Proof.module.css';

/* fotos de treinamentos anteriores: deslizar no celular, mosaico no computador; tocar amplia a foto */
const VISIVEIS = 5;

export default function ProofPhotos({ photos }: { photos: ProofPhoto[] }) {
  const [aberta, setAberta] = useState<number | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  const total = photos.length;

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (aberta !== null && !d.open) d.showModal();
    if (aberta === null && d.open) d.close();
  }, [aberta]);

  useEffect(() => {
    if (aberta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setAberta((i) => (i === null ? i : (i + 1) % total));
      if (e.key === 'ArrowLeft') setAberta((i) => (i === null ? i : (i - 1 + total) % total));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aberta, total]);

  const atual = aberta === null ? null : photos[aberta];

  return (
    <>
      <div className={s.gallery} role="region" aria-label="Fotos de treinamentos anteriores da Allê" tabIndex={0}>
        {photos.map((p, i) => (
          <button
            type="button"
            key={p.src}
            className={s.gitem}
            data-extra={i >= VISIVEIS ? '' : undefined}
            onClick={() => setAberta(i)}
            aria-label={`Ampliar foto: ${p.alt}`}
          >
            <Image src={p.src} alt={p.alt} width={1418} height={p.height ?? 808} sizes="(min-width:1024px) 40vw, 86vw" style={p.pos ? { objectPosition: p.pos } : undefined}/>
            {i === VISIVEIS - 1 && total > VISIVEIS && <span className={s.gmore} aria-hidden="true">+{total - VISIVEIS}</span>}
          </button>
        ))}
      </div>
      <p className={s.qhint}>Deslize para ver mais fotos</p>

      <dialog ref={dlg} className={s.lightbox} onClose={() => setAberta(null)} onClick={(e) => { if (e.target === dlg.current) setAberta(null); }}>
        {atual && (
          <div className={s.lbbox}>
            <Image src={atual.src} alt={atual.alt} width={1418} height={atual.height ?? 808} sizes="100vw" className={s.lbimg}/>
            <button type="button" className={s.lbclose} onClick={() => setAberta(null)} aria-label="Fechar foto"><X/></button>
            <button type="button" className={s.lbprev} onClick={() => setAberta((aberta! - 1 + total) % total)} aria-label="Foto anterior"><ChevronLeft/></button>
            <button type="button" className={s.lbnext} onClick={() => setAberta((aberta! + 1) % total)} aria-label="Próxima foto"><ChevronRight/></button>
            <span className={s.lbcount}>{aberta! + 1} / {total}</span>
          </div>
        )}
      </dialog>
    </>
  );
}
