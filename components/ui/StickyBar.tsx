'use client';
import { useEffect,useState } from 'react';
import { content as c } from '@/lib/content';
import Button from './Button';
import s from './Ui.module.css';
export default function StickyBar(){const [hidden,setHidden]=useState(false);const [up,setUp]=useState(false);useEffect(()=>{let last=window.scrollY;const onScroll=()=>{const y=window.scrollY;if(Math.abs(y-last)>6){setUp(y<last);last=y}};window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);useEffect(()=>{const target=document.getElementById('inscricao');if(!target)return;const observer=new IntersectionObserver(([entry])=>setHidden(entry.isIntersecting),{threshold:0,rootMargin:"-30% 0px -30% 0px"});observer.observe(target);return()=>observer.disconnect()},[]);return <aside className={s.sticky} data-hidden={hidden||undefined} data-up={up||undefined} aria-hidden={hidden} inert={hidden}><div><p>{c.from} <s>{c.oldPrice}</s> {c.per}</p><strong>{c.price}</strong></div><Button local="barra-fixa-celular">{c.participate}</Button></aside>}
