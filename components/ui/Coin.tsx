import Image from 'next/image';
import s from './Ui.module.css';

type Variant = 'front' | 'tilted' | 'side' | 'profile';
const motion: Record<Variant, [string, string]> = {
  front: ['7s', '-1s'],
  tilted: ['9s', '-4s'],
  side: ['8s', '-2s'],
  profile: ['10s', '-6s'],
};

export default function Coin({ variant, className = '' }: { variant: Variant; className?: string }) {
  return <Image src={`/coins/${variant}@2x.png`} width={320} height={320} alt="" aria-hidden="true" data-coin className={`${s.coin} ${className}`} style={{ animationDuration: motion[variant][0], animationDelay: motion[variant][1] }}/>;
}
