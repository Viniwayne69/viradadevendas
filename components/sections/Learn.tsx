import { content as c } from "@/lib/content";
import s from "./Learn.module.css";
import { CalendarRange, Lightbulb, Target, UsersRound } from "lucide-react";

export default function Learn() { return <section className={s.root}><div className="container"><h2 data-r>{c.learnTitle}<br/><span className="accent">{c.practice}</span></h2><ol>{c.lessons.map((text,i)=>{const Icon=[CalendarRange,Lightbulb,Target,UsersRound][i];return <li data-r key={text}><span className={s.num}>{String(i+1).padStart(2,"0")}</span><b className={s.title}>{text}</b><Icon className={`desk ${s.ico}`} aria-hidden="true"/><small className="desk">{c.desk.learnDetails[i]}</small></li>})}</ol></div></section>; }
