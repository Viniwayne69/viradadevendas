import { content as c } from "@/lib/content";
import s from "./TopBar.module.css";
import { Timer } from "lucide-react";
import Countdown from "@/components/ui/Countdown";
export default function TopBar() { return <section className={s.root}><div className="container"><div className={s.row}><Timer size={23}/><strong>{c.open}</strong><Countdown/></div></div></section>; }
