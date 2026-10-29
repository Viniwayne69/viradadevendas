import { content as c } from "@/lib/content";
import s from "./TopBar.module.css";
import { Timer } from "lucide-react";
import Countdown from "@/components/ui/Countdown";
import Button from "@/components/ui/Button";
/* no celular é só a faixa do contador; no computador vira o cabeçalho fixo com logo e botão */
export default function TopBar() { return <section className={s.root}><div className="container"><div className={s.row}>
  <span className={`desk ${s.logo}`}><img src="/brand/logo-alle-reduzida-claro.svg" alt="Allê Ebrahim" width={92} height={50}/><img src="/brand/catavento-mostarda.svg" alt="" aria-hidden="true" width={24} height={24}/></span>
  <div className={s.timer}><Timer size={23}/><strong>{c.open}</strong><Countdown/></div>
  <div className={`desk ${s.cta}`}><Button local="cabecalho">{c.desk.headerCta}</Button></div>
</div></div></section>; }
