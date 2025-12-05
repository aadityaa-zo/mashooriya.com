import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import HeroLogo from "./components/HeroLogo";
import Hero from "./sections/Hero";
import Numbers from "./sections/Numbers";
import Viral from "./sections/Viral";
import About from "./sections/About";
import Services from "./sections/Services";
import TeamSection from "./sections/TeamSection";
import Originals from "./sections/Originals";
import Clients from "./sections/Clients";
import BarAnimation from "./sections/BarAnimation";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [logoColor, setLogoColor] = useState("Yellow");

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.1,                      // Keep this balanced (0.1 is good)
      duration: 3,                    // How long momentum lasts (1.2-2.0 seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth ease-out
      smoothWheel: true,               // Enable smooth wheel scrolling
      wheelMultiplier: 5,              //scroll sensitivity
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const colorMap = {
      White: "#FCFCFC",
      Yellow: "#F5FF8C",
      Dark: "#1A2027",
      Purple: "#AF9FFF",
      Gray: "#C8CDD5",
      Green: "#1F9270",
    };

    const sections = [
      { id: "#hero", color: colorMap.Yellow },
      { id: "#numbers-section", color: colorMap.Yellow },
      { id: "#bar-section", color: colorMap.Dark },
      { id: "#viral-section", color: colorMap.Dark },
      { id: "#about-section", color: colorMap.Green },
      { id: "#team-section", color: colorMap.Green },
      { id: "#services-section", color: colorMap.Yellow },
      { id: "#client-section", color: colorMap.Green },
      { id: "#originals-section", color: colorMap.Yellow },
      { id: "#footer-section", color: colorMap.Yellow },
    ];

    sections.forEach((s) => {
      ScrollTrigger.create({
        trigger: s.id,
        start: "top 15%",
        end: "bottom 15%",
        onToggle: (self) => {
          if (self.isActive) {
            setLogoColor(s.color);
          }
        },
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <HeroLogo color={logoColor} />
      <Hero id="hero" />
      <Numbers id="numbers-section" />
      <BarAnimation id="bar-section" />
      <Viral id="viral-section" />
      <About id="about-section" />
      <TeamSection id="team-section" />
      <Services id="services-section" />
      <Clients id="client-section" />
      <Originals id="originals-section" />
      <Footer id="footer-section" />
    </>
  );
};

export default App;
