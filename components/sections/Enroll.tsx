import { content as c } from "@/lib/content";
import s from "./Enroll.module.css";
import Button from "@/components/ui/Button"; import CountPrice from "@/components/ui/CountPrice"; import Coin from "@/components/ui/Coin";
import { CircleCheck, Lock } from "lucide-react";
export default function Enroll() { return <section id="inscricao" className={s.root} data-dark><div className="container"><Coin variant="profile" className={s.coin}/><div className={s.grid}>
  <div className={s.offer} data-r>
    <span className={`desk ${s.badge}`}>{c.desk.badge}</span>
    <h2>{c.offer}</h2><p className="old">{c.from} <s>{c.oldPrice}</s> {c.per}</p><p className="price"><CountPrice text={c.price}/></p>  </div>
  <div className={s.cta} data-r>
    <div className="desk"><h3 className={s.incTitle}>{c.desk.includedTitle}</h3><ul className={s.inc}>{c.desk.included.map(t=><li key={t}><CircleCheck/>{t}</li>)}</ul></div>
    <Button local="garanta-sua-vaga">{c.submit}</Button>
    <p className={`desk ${s.secure}`}><Lock/>{c.desk.secure}</p>
  </div>
</div></div></section>; }
