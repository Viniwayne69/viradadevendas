import { content as c } from "@/lib/content";
import s from "./Faq.module.css";
import Accordion from "@/components/ui/Accordion";
export default function Faq() { return <section className={s.root}><div className="container"><h2 data-r>{c.faqTitle}</h2><Accordion/></div></section>; }
