import NavBar from "./ui/navbar";
import About from "./ui/hero";
import Portfolio from "./ui/Portfolio";
import Skills from "./ui/skills";
import Contact from "./ui/contact";
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-base-200">
            <NavBar />
            <div id="about" className="w-full min-h-screen flex items-center justify-center">
                <About />
            </div>
            <div id="portfolio" className="w-full min-h-screen flex items-center justify-center">
                <Portfolio />
            </div>
            <div id="skills" className="w-full min-h-screen flex items-center justify-center">
                <Skills />
            </div>
            <div id="contact" className="w-full min-h-screen flex items-center justify-center">
                <Contact />
            </div>
        </div>
    );
}
