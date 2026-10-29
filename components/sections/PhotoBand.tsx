import Image from "next/image";
import s from "./PhotoBand.module.css";

/* faixa de foto de largura total entre duas seções: respiro visual, sem texto */
export default function PhotoBand({ src, alt, pos }: { src: string; alt: string; pos?: string }) {
  return <div className={s.root}><Image src={src} alt={alt} width={1418} height={808} sizes="100vw" style={pos ? { objectPosition: pos } : undefined}/></div>;
}
