import { content as c } from "@/lib/content";
import s from "./Author.module.css";
import Photo from "@/components/ui/Photo";
export default function Author() { return <section className={s.root}><div className="container"><h2 data-r>{c.hostTitle}</h2><div className={s.grid} data-r><Photo kind="profile"/><div><h3>{c.hostName}</h3><p className={s.role}>{c.role}</p><p className={s.bio}>{c.bio}</p></div></div></div></section>; }
