import { content as c } from "@/lib/content";
import s from "./Outcome.module.css";
import { Target, ClipboardList, ChartNoAxesCombined } from "lucide-react";

export default function Outcome() { return <section className={s.root}><div className="container"><h2 data-r>{c.outcomeTitle}</h2><ul>{c.outcomes.map((text,i)=>{const Icon=[Target,ClipboardList,ChartNoAxesCombined][i];return <li data-r key={text}><Icon/><span>{text}</span></li>})}</ul></div></section>; }
