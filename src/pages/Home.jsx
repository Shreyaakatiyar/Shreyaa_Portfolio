import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import AIAssistant from "../components/AIAssistant";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

const ScrollSection = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                duration: 0.8,
            }}
            viewport={{ once: false, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Navbar />
            
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Hero />
            </motion.div>

            <ScrollSection>
                <About />
            </ScrollSection>

            <ScrollSection>
                <Experience />
            </ScrollSection>

            <ScrollSection>
                <Projects />
            </ScrollSection>

            <ScrollSection>
                <TechStack />
            </ScrollSection>

            <ScrollSection>
                <Contact />
            </ScrollSection>

            <ScrollSection>
                <AIAssistant />
            </ScrollSection>
        </motion.div>
    );
}