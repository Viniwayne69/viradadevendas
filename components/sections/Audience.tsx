import { content as c } from "@/lib/content";
import s from "./Audience.module.css";
import { CircleCheck } from "lucide-react";

export default function Audience() { return <section className={s.root} data-dark><div className="container"><div className={s.grid}><article data-r><h2>{c.forTitle}</h2><ul>{c.for.map(t=><li data-r key={t}><CircleCheck fill="#df9226" color="#00151c"/><span>{t}</span></li>)}</ul></article></div></div></section>; }
