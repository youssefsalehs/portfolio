import HeroSection from "@/components/HeroSection/HeroSection";
import AboutMe from "@/components/AboutMe/About";
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
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
