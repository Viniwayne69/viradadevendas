import TopBar from "@/components/sections/TopBar";
import Hero from "@/components/sections/Hero";
import Promise from "@/components/sections/Promise";
import Pain from "@/components/sections/Pain";
import Learn from "@/components/sections/Learn";
import Audience from "@/components/sections/Audience";
import Proof from "@/components/sections/Proof";
import Author from "@/components/sections/Author";
import Enroll from "@/components/sections/Enroll";
import Faq from "@/components/sections/Faq";
import LastWarning from "@/components/sections/LastWarning";
import Footer from "@/components/sections/Footer";
import StickyBar from "@/components/ui/StickyBar";
import Reveal from "@/components/ui/Reveal";export default function Page(){return <><main><Reveal><TopBar/><Hero/><Promise/><Pain/><Learn/><Audience/><Proof/><Author/><Enroll/><Faq/><div className="finale" data-dark><LastWarning/><Footer/></div></Reveal></main><StickyBar/></>}