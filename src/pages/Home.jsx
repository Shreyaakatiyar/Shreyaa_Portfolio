import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import AIAssistant from "../components/AIAssistant";
import Contact from "../components/Contact";
import { div } from "motion/react-client";

export default function Home() {
    return (
        <div className="">
            <Navbar />
            <Hero />
            {/*
            <About />
            <Experience />
            <Projects />
            <TechStack />
            <Contact />
            <AIAssistant /> */}
        </div>
    )
}