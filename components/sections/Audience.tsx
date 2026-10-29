import { content as c } from "@/lib/content";
import s from "./Audience.module.css";
import { CircleCheck, Clock3, MapPin, Store, UsersRound, BriefcaseBusiness } from "lucide-react";
const icones = [Store, UsersRound, BriefcaseBusiness];
import Brand from "@/components/ui/Brand";

export default function Audience() { const t = c.desk.ticket; return <section className={s.root} data-dark><div className="container"><div className={s.grid}><article data-r><h2>{c.forTitle}</h2><ul>{c.for.map((t,i)=>{const Icone=icones[i]??Store;return <li data-r key={t}><CircleCheck className="desk" fill="#df9226" color="#00151c"/><span className={`mob ${s.ico}`}><Icone/></span><span>{t}</span></li>})}</ul></article>
  {/* computador: um "ingresso" com os dados reais do evento, no lugar de uma foto de plateia que não temos */}
  <div className={`desk ${s.ticket}`} data-r aria-hidden="true">
    <div className={s.tTop}><span className={s.tLabel}>{t.label}</span><img src="/brand/catavento-mostarda.svg" alt="" width={34} height={34}/></div>
    <p className={s.tName}>{c.title}</p>
    <div className={s.tDate}><strong>{t.day}</strong><span>{t.month}</span></div>
    <ul className={s.tInfo}><li><Clock3/>{t.time}</li><li><MapPin/>{c.desk.place.join(" · ")}</li></ul>
    <div className={s.tCut}/>
    <div className={s.tFoot}><span>{t.host}</span><span className={s.tBrand}>{c.production}<Brand/></span></div>
  </div>
</div></div></section>; }
