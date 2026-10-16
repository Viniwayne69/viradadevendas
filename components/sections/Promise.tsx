import { content as c } from "@/lib/content";
import s from "./Promise.module.css";

export default function Promise() { return <section className={s.root}><div className="container"><h2 data-r>{c.promise.split(", ").map((line,i)=><span className={s.line} key={line}>{line}{i===0?",":""}</span>)}<mark data-hl>{c.strategy}</mark></h2><p data-r>{c.support}</p></div></section>; }
