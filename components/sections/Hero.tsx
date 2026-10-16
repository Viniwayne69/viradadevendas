import { content as c } from "@/lib/content";
import s from "./Hero.module.css";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import Photo from "@/components/ui/Photo"; import VideoPlayer from "@/components/ui/VideoPlayer"; import Coin from "@/components/ui/Coin";
export default function Hero() { return <section className={s.root} data-dark><div className="container"><Coin variant="front" className={s.coinOne}/><Coin variant="tilted" className={s.coinTwo}/><Coin variant="side" className={s.coinThree}/><div className={s.grid}><div className={s.intro}><h1><span>{c.brand[0]}</span><strong>{c.brand[1]}</strong></h1><p>{c.subtitle}</p></div><div className={s.videoWrap}><VideoPlayer cover={<Photo kind="cover"/>}/></div><div className={s.details}>{[CalendarDays,Clock3,MapPin].map((Icon,i)=><div key={i}><Icon/><span>{c.event[i]}</span></div>)}</div></div></div></section>; }

