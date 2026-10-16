import { content as c } from "@/lib/content";
import s from "./Scarcity.module.css";
import { TriangleAlert } from "lucide-react";

export default function Scarcity() { return <section className={s.root}><div className="container"><p data-r><TriangleAlert size={21} fill="currentColor"/><strong>{c.limited}</strong></p></div></section>; }
