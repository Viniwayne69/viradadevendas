import Image from "next/image";
import { content as c } from "@/lib/content";
import s from "./Author.module.css";
import Photo from "@/components/ui/Photo";
import { Trophy, Handshake } from "lucide-react";
export default function Author() { return <section className={s.root}><div className="container"><h2 data-r>{c.hostTitle}</h2><div className={s.grid} data-r>
  {/* computador: foto recortada da Allê sobre um bloco mostarda */}
  <div className={`desk ${s.cutout}`}><Image src="/images/alle-recorte.webp" alt={c.profilePlaceholder} width={1254} height={1254} sizes="520px"/></div>
  <Photo kind="profile"/>
  <div><span className={`desk ${s.eyebrow}`}>{c.desk.hostEyebrow}</span><h3>{c.hostName}</h3><p className={s.role}>{c.role}</p><p className={s.bio}>{c.bio}</p>
    <ul className={`desk ${s.creds}`}>{c.desk.creds.map((t,i)=>{const Icon=[Trophy,Handshake][i];return <li key={t}><Icon/><span>{t}</span></li>})}</ul>
  </div>
</div></div></section>; }
