import HeroSection from "@/components/HeroSection/HeroSection";
import AboutMe from "@/components/AboutMe/About";
const Skills = dynamic(() => import("@/components/Skills/Skills"));
import Contact from "@/components/Contact/Contact";
import dynamic from "next/dynamic";

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
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
