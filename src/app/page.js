import HeroSection from "@/components/HeroSection/HeroSection";
import AboutMe from "@/components/AboutMe/About";
const Skills = dynamic(() => import("@/components/Skills/Skills"));
import dynamic from "next/dynamic";
import Background from "@/components/Background/background";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
export default function Home() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="background">
        <Background />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
