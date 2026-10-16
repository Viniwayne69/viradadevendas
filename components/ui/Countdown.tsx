'use client';
import { useEffect, useState } from 'react';
import { config } from '@/lib/config';
import { content } from '@/lib/content';
import s from './Ui.module.css';
export default function Countdown(){
 const [remaining,setRemaining]=useState<number | null>(null);
 useEffect(()=>{const tick=()=>setRemaining(Math.max(0,Math.floor((new Date(config.eventDate).getTime()-Date.now())/1000)) || 0);tick();const id=setInterval(tick,1000);return()=>clearInterval(id)},[]);
 const values=remaining===null ? null : [Math.floor(remaining/86400),Math.floor(remaining/3600)%24,Math.floor(remaining/60)%60,remaining%60];
 return <div className={s.countdown} aria-label={content.open}>{content.timeLabels.map((label,i)=><div key={label}><strong key={values?values[i]:'x'} className={s.tick}>{values ? String(values[i]).padStart(2,'0') : '\u00a0'}</strong><span>{label}</span></div>)}</div>;
}
