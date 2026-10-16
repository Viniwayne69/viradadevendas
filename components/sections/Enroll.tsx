import { content as c } from "@/lib/content";
import s from "./Enroll.module.css";
import LeadForm from "@/components/ui/LeadForm"; import CountPrice from "@/components/ui/CountPrice"; import Coin from "@/components/ui/Coin";
export default function Enroll() { return <section id="inscricao" className={s.root} data-dark><div className="container"><Coin variant="profile" className={s.coin}/><div className={s.grid}><div className={s.offer} data-r><h2>{c.offer}</h2><p className="old">{c.from} <s>{c.oldPrice}</s> {c.per}</p><p className="price"><CountPrice text={c.price}/></p></div><LeadForm/></div></div></section>; }
