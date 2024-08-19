import Image from "next/image";
import NavBar from "./ui/navbar"; // Import the NavBar component
import About from "./ui/hero";
import Portfolio from "./ui/Portfolio";
import Skills from "./ui/skills";
import Contact from "./ui/contact";
import { useRouter } from "next/navigation";


export default function Home() {
 return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-base-200">
      <NavBar />
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
