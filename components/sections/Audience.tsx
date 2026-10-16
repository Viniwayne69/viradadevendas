import { content as c } from "@/lib/content";
import s from "./Audience.module.css";
import { CircleCheck, CircleX } from "lucide-react";

export default function Audience() { return <section className={s.root}><div className="container"><div className={s.grid}><article data-r><h2>{c.forTitle}</h2><ul>{c.for.map(t=><li data-r key={t}><CircleCheck fill="#09513b" color="#fff"/><span>{t}</span></li>)}</ul></article><article data-r><h2>{c.notTitle}</h2><ul>{c.not.map(t=><li data-r key={t}><CircleX fill="#535c5e" color="#fff"/><span>{t}</span></li>)}</ul></article></div></div></section>; }
