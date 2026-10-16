import type { ReactNode } from 'react';
import s from './Ui.module.css';
export default function Button({ children }: { children: ReactNode }) { return <a className={s.button} href="#inscricao">{children}</a>; }
