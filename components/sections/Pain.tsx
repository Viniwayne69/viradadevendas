import { content as c } from "@/lib/content";
import s from "./Pain.module.css";
import { ChartNoAxesCombined, CircleHelp, UsersRound, Clock3, Frown } from "lucide-react";
import Button from "@/components/ui/Button";
export default function Pain() { return <section className={s.root} data-dark><div className="container"><h2 data-r>{c.painTitle}</h2><ul>{c.pains.map((text,i)=>{const Icon=[ChartNoAxesCombined,CircleHelp,UsersRound,Clock3,Frown][i];return <li data-r key={text}><Icon/><span className={s.txt}><span>{text}</span><small className="desk">{c.desk.painDetails[i]}</small></span></li>})}</ul><h3 data-r>{c.conclusion}</h3><div className={s.cta}><Button local="se-voce-esta-chegando">{c.mine}</Button></div></div></section>; }
