import AboutMe from "@/components/AboutMe/About";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMe />
      </section>
    </div>
  );
}
