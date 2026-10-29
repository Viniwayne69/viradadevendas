import Image from "next/image";
import { content as c } from "@/lib/content";
import s from "./LastWarning.module.css";
import { Megaphone } from "lucide-react";
import Coin from "@/components/ui/Coin"; import Button from "@/components/ui/Button";
export default function LastWarning() { return <section className={s.root}><div className={`container ${s.wrap}`}><Coin variant="tilted" className={s.left}/><Coin variant="side" className={s.right}/><div className={s.content} data-r><h2><Megaphone/><span>{c.last} <em>{c.warning}</em></span></h2><p>{c.lastText}</p><Button local="ultimo-aviso">{c.finalCta.split(" antes ")[0]}<br/>antes {c.finalCta.split(" antes ")[1]}</Button></div>
  {/* computador: foto recortada da Allê ao lado do último aviso */}
  <div className={`desk ${s.photo}`}><Image src="/images/alle-recorte.webp" alt="" width={1254} height={1254} sizes="460px"/></div>
</div></section>; }
