import type { ReactNode } from 'react';
import { config } from '@/lib/config';
import s from './Ui.module.css';
export default function Button({ children }: { children: ReactNode }) { return <a className={s.button} href={config.checkoutUrl}>{children}</a>; }
