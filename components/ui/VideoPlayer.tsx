'use client';
import {useEffect,useRef,useState,type ReactNode} from 'react';
import {Play,VolumeX,Maximize} from 'lucide-react';
import {config} from '@/lib/config';
import {content as c} from '@/lib/content';
import s from './Ui.module.css';
function embedUrl(raw:string){try{const url=new URL(raw);const host=url.hostname.replace(/^www\./,'');if(host==='youtu.be')return `https://www.youtube-nocookie.com/embed/${url.pathname.slice(1)}?autoplay=1&mute=1`;if(host==='youtube.com'||host==='m.youtube.com'){const id=url.searchParams.get('v')||url.pathname.split('/').pop();return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1`;}if(host==='vimeo.com')return `https://player.vimeo.com/video/${url.pathname.split('/').pop()}?autoplay=1&muted=1`;}catch{}return null}
export default function VideoPlayer({cover}:{cover?:ReactNode}){
  const [playing,setPlaying]=useState(false);
  const [ready,setReady]=useState(false);
  const [controls,setControls]=useState(true);
  const [message,setMessage]=useState('');
  const frame=useRef<HTMLDivElement>(null);
  const video=useRef<HTMLVideoElement>(null);
  const embed=embedUrl(config.videoUrl);

  function start(){
    if(!config.videoUrl){setMessage(c.videoMissing);return}
    /* no celular, os controles do navegador ficam na frente do vídeo por alguns segundos:
       começa sem eles e só mostra quando a pessoa toca no vídeo */
    setControls(!matchMedia('(hover: none)').matches);
    setPlaying(true);
  }

  /* se o navegador bloquear o play automático ou o vídeo demorar demais, libera os controles para tocar na mão */
  useEffect(()=>{
    if(!playing||embed)return;
    const v=video.current;if(!v)return;
    const liberar=()=>{setReady(true);setControls(true)};
    v.play().catch(liberar);
    const t=setTimeout(liberar,8000);
    v.addEventListener('playing',()=>clearTimeout(t),{once:true});
    return()=>clearTimeout(t);
  },[playing,embed]);

  return <div className={s.video} ref={frame}>
    {playing?(embed?<iframe src={embed} title={c.videoLabel} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen/>:<>
      <video ref={video} src={config.videoUrl} controls={controls} autoPlay playsInline preload="auto" controlsList="nodownload" onPlaying={()=>setReady(true)} onClick={()=>setControls(true)}/>
      {!ready&&<div className={s.coverLayer} aria-hidden="true">{cover}</div>}
    </>):<>{cover}<button className={s.play} aria-label={c.play} onClick={start}><Play fill="currentColor" size={27}/></button><div className={s.controls}><div className={s.progress}/><div><span>{c.videoTime}</span><VolumeX size={16} aria-hidden="true"/><button aria-label={c.fullscreen} onClick={()=>{void frame.current?.requestFullscreen().catch(()=>{})}}><Maximize size={16}/></button></div></div></>}
    {message&&<p className={s.videoMessage} role="status">{message}</p>}
  </div>
}
