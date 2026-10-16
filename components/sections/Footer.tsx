import { content as c } from "@/lib/content";
import s from "./Footer.module.css";
import Brand from "@/components/ui/Brand";
export default function Footer() { return <footer className={s.root}><div className="container"><div className={s.logo}><span>{c.production}</span><Brand/></div><p>{c.copyright}</p></div></footer>; }
