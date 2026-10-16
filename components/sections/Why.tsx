import { content as c } from "@/lib/content";
import s from "./Why.module.css";
import { Zap, Settings, MapPin } from "lucide-react";

export default function Why() { return <section className={s.root} data-dark><div className="container"><h2 data-r>{c.methodTitle}<br/><span className="accent">{c.works}</span></h2><div className={s.pillars}>{c.pillars.map(([title,text],i)=>{const Icon=[Zap,Settings,MapPin][i];return <article data-r key={title}><div className={s.circle}><Icon/></div><h3>{title}</h3><p>{text}</p></article>})}</div></div></section>; }
