import NavBar from "./ui/navbar";
import About from "./ui/hero";
import Portfolio from "./ui/Portfolio";
import Skills from "./ui/skills";
import Contact from "./ui/contact";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-base-200">
            <NavBar />
            <div id="about" className="w-full">
                <About />
            </div>
            <div id="portfolio" className="w-full">
                <Portfolio />
            </div>
            <div id="skills" className="w-full">
                <Skills />
            </div>
            <div id="contact" className="w-full">
                <Contact />
            </div>
        </div>
    );
}
