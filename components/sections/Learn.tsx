import { content as c } from "@/lib/content";
import s from "./Learn.module.css";

export default function Learn() { return <section className={s.root}><div className="container"><h2 data-r>{c.learnTitle}<br/><span className="accent">{c.practice}</span></h2><ol>{c.lessons.map((text,i)=><li data-r key={text}><span>{String(i+1).padStart(2,"0")}</span>{text}</li>)}</ol></div></section>; }
