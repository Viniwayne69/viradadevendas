'use client';
import {useEffect,useRef,useState,type ReactNode} from 'react';
import {Play,VolumeX,Maximize} from 'lucide-react';
import {config} from '@/lib/config';
import {content as c} from '@/lib/content';
import s from './Ui.module.css';
function embedUrl(raw:string){try{const url=new URL(raw);const host=url.hostname.replace(/^www\./,'');if(host==='youtu.be')return `https://www.youtube-nocookie.com/embed/${url.pathname.slice(1)}?autoplay=1&mute=1`;if(host==='youtube.com'||host==='m.youtube.com'){const id=url.searchParams.get('v')||url.pathname.split('/').pop();return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1`;}if(host==='vimeo.com')return `https://player.vimeo.com/video/${url.pathname.split('/').pop()}?autoplay=1&muted=1`;}catch{}return null}
export default function VideoPlayer({cover}:{cover?:ReactNode}){
  const [started,setStarted]=useState(false);
  const [ready,setReady]=useState(false);
  const [controls,setControls]=useState(false);
  const [message,setMessage]=useState('');
  const frame=useRef<HTMLDivElement>(null);
  const video=useRef<HTMLVideoElement>(null);
  const timer=useRef<ReturnType<typeof setTimeout>|undefined>(undefined);
  const embed=embedUrl(config.videoUrl);

  useEffect(()=>()=>clearTimeout(timer.current),[]);

  /* se o navegador bloquear o play ou o vídeo demorar demais, tira a capa e libera os controles para tocar na mão */
  function liberar(){clearTimeout(timer.current);setReady(true);setControls(true)}

  function start(){
    if(!config.videoUrl){setMessage(c.videoMissing);return}
    setStarted(true);
    if(embed)return;
    /* no celular, os controles do navegador ficam na frente do vídeo por alguns segundos:
       começa sem eles e só mostra quando a pessoa toca no vídeo */
    setControls(!matchMedia('(hover: none)').matches);
    const v=video.current;if(!v)return;
    /* o play acontece dentro do próprio toque: o vídeo já está na página, então começa sem esperar ser criado */
    v.play().catch(liberar);
    timer.current=setTimeout(liberar,8000);
  }

  if(embed&&started)return <div className={s.video} ref={frame}><iframe src={embed} title={c.videoLabel} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen/></div>;

  return <div className={s.video} ref={frame}>
    {!embed&&config.videoUrl&&<video ref={video} src={config.videoUrl} controls={started&&controls} playsInline preload="metadata" controlsList="nodownload" onPlaying={()=>{clearTimeout(timer.current);setReady(true)}} onClick={()=>{if(started)setControls(true)}}/>}
    {!ready&&<div className={s.coverLayer} aria-hidden={started}>{cover}</div>}
    {!started&&<><button className={s.play} aria-label={c.play} onClick={start}><Play fill="currentColor" size={27}/></button><div className={s.controls}><div className={s.progress}/><div><span>{c.videoTime}</span><VolumeX size={16} aria-hidden="true"/><button aria-label={c.fullscreen} onClick={()=>{void frame.current?.requestFullscreen().catch(()=>{})}}><Maximize size={16}/></button></div></div></>}
    {started&&!ready&&<span className={s.loading} role="status" aria-label="Carregando o vídeo"/>}
    {message&&<p className={s.videoMessage} role="status">{message}</p>}
  </div>
}
