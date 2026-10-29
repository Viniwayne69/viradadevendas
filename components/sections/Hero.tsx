import { Fragment, type CSSProperties } from "react";
import { content as c } from "@/lib/content";
import s from "./Hero.module.css";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import Photo from "@/components/ui/Photo"; import VideoPlayer from "@/components/ui/VideoPlayer"; import Coin from "@/components/ui/Coin";
import Button from "@/components/ui/Button"; import Brand from "@/components/ui/Brand";
/* os blocos com "desk" só aparecem no computador; no celular a seção continua igual */
export default function Hero() { return <section className={s.root} data-dark><div className="container"><Coin variant="front" className={s.coinOne}/><Coin variant="tilted" className={s.coinTwo}/><Coin variant="side" className={s.coinThree}/><div className={s.grid}>
  <div className={s.intro}><span className={`desk ${s.eyebrow}`}>{c.desk.eyebrow}</span><h1><span>{c.brand[0].split(" ").map((word,i)=><Fragment key={i}>{i>0&&" "}<i className={s.word} style={{"--i":i} as CSSProperties}>{word}</i></Fragment>)}</span><strong>{c.brand[1]}</strong></h1><p>{c.subtitle}</p></div>
  <div className={s.videoWrap}><VideoPlayer cover={<Photo kind="cover"/>}/><p className={`desk ${s.caption}`}>{c.desk.videoCaption}</p></div>
  <div className={s.details}>{[CalendarDays,Clock3,MapPin].map((Icon,i)=><div key={i}><Icon/><span>{c.event[i]}</span></div>)}</div>
  <div className={`desk ${s.buy}`}>
    <p className={s.priceLine}><s>{c.from} {c.oldPrice}</s><strong>{c.price}</strong></p>
    <div className={s.buyCta}><Button local="topo">{c.mine}</Button></div>
    <div className={s.realizacao}><span>{c.production}</span><Brand/></div>
  </div>
</div></div></section>; }
