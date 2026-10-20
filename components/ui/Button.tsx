import type { ReactNode } from 'react';
import { config } from '@/lib/config';
import s from './Ui.module.css';
export default function Button({ children }: { children: ReactNode }) { return <a className={s.button} data-magnet href={config.checkoutUrl}>{children}</a>; }
