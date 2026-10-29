import { content as c } from "@/lib/content";
import s from "./Promise.module.css";

export default function Promise() { return <section className={s.root}><div className={`container ${s.wrap}`}>
  <div className={s.text}><h2 data-r>{c.promise.split(", ").map((line,i)=><span className={s.line} key={line}>{line}{i===0?",":""}</span>)}<mark data-hl>{c.strategy}</mark></h2><p data-r>{c.support}</p></div>
  <ul className={`desk ${s.stats}`}>{c.desk.promiseStats.map(([n,label])=><li key={n} data-r><strong>{n}</strong><span>{label}</span></li>)}</ul>
</div></section>; }
