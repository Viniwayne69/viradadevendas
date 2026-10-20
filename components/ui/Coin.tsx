import Image from 'next/image';
import type { CSSProperties } from 'react';
import s from './Ui.module.css';

// Os quatro "variants" mantêm as posições e os movimentos que a página já tinha;
// agora cada um é o catavento da marca da Allê, com uma inclinação própria.
type Variant = 'front' | 'tilted' | 'side' | 'profile';
const motion: Record<Variant, [string, string]> = {
  front: ['7s', '-1s'],
  tilted: ['9s', '-4s'],
  side: ['8s', '-2s'],
  profile: ['10s', '-6s'],
};
const tilt: Record<Variant, string> = { front: '0deg', tilted: '18deg', side: '-14deg', profile: '32deg' };

export default function Coin({ variant, className = '' }: { variant: Variant; className?: string }) {
  const style = { '--dur': motion[variant][0], '--dl': motion[variant][1], '--rot': tilt[variant] } as CSSProperties;
  return <Image src="/brand/catavento-mostarda.svg" width={320} height={320} unoptimized alt="" aria-hidden="true" data-coin className={`${s.coin} ${className}`} style={style}/>;
}
