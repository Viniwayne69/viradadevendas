import { content as c } from "@/lib/content";
import s from "./Learn.module.css";
import LearnList from "./LearnList";

export default function Learn() { return <section className={s.root}><div className="container"><h2 data-r>{c.learnTitle}</h2><LearnList/></div></section>; }
