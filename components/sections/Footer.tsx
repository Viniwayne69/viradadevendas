import { content as c } from "@/lib/content";
import s from "./Footer.module.css";
import Brand from "@/components/ui/Brand";
export default function Footer() { return <footer className={s.root}><div className={`container ${s.wrap}`}><div className={s.alle}><img src="/brand/logo-alle-reduzida-claro.svg" alt="Allê Ebrahim" width={140} height={77}/><img src="/brand/catavento-mostarda.svg" alt="" aria-hidden="true" width={44} height={44}/></div><div className={s.logo}><span>{c.production}</span><Brand/></div><p>{c.copyright}</p></div></footer>; }
