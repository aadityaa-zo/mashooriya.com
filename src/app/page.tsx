"use client"

// export const dynamic = "force-dynamic"
// export const revalidate = 0


import { useState, useEffect ,useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import HeroLogo from "@/components/HeroLogo";
import Loader from "@/components/Loading";
import Hero from "@/sections/Hero";
import Numbers from "@/sections/Numbers";
import Viral from "@/sections/Viral";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Originals from "@/sections/Originals";
import Clients from "@/sections/Clients";
import BarAnimation from "@/sections/BarAnimation";
import Footer from "@/sections/Footer";
import Form from "@/sections/Form";
import Clipsnreels from "@/sections/Clipsnreels";
import OurClientSays from "@/sections/OurClientSays";
import NavBar from "@/components/NavBar";

gsap.registerPlugin(ScrollTrigger);


// let hasLoadedOnce = false

const Page = () => {
  const [logoColor, setLogoColor] = useState("Yellow");
  
  // FORCE RELOAD FOR WHEN USER COMES AGAIN ON THE PAGE
  // const firstLoad = useRef(true)

  // useEffect(() => {
  //   if (!firstLoad.current) {
  //     window.location.reload()
  //     return
  //   }

  //   firstLoad.current = false
  // }, [])

  //     useEffect(() => {
  //   const hasVisited = sessionStorage.getItem("visited-home")

  //   if (hasVisited) {
  //     window.location.reload()
  //     return
  //   }

  //   sessionStorage.setItem("visited-home", "true")
  // }, [])

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return

    const hasVisited = sessionStorage.getItem("visited-home")
    const hasReloaded = sessionStorage.getItem("home-reloaded")

    // Case 1: coming back, reload once
    if (hasVisited && !hasReloaded) {
      sessionStorage.setItem("home-reloaded", "true")
      window.location.reload()
      return
    }

    // Case 2: first time OR after reload → reset state
    sessionStorage.setItem("visited-home", "true")
    sessionStorage.removeItem("home-reloaded")
  }, [])

  
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.01,
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
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
      { id: "#services-section", color: colorMap.Yellow },
      { id: "#client-section", color: colorMap.Green },
      { id: "#ourclientsays-section", color: colorMap.Green },
      { id: "#originals-section", color: colorMap.Yellow },
      { id: "#Clipsnreels", color: colorMap.Yellow },
      { id: "#form-section", color: colorMap.Green },
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
      <Loader />
      <div className="h-screen">
        <HeroLogo color={logoColor} />
        <Hero id="hero" themeColor="Yellow"/>
        <NavBar themeColor="Yellow"/>
      </div>

      <Numbers id="numbers-section" />
      <BarAnimation id="bar-section" />
      <Viral id="viral-section" />
      <About id="about-section" />
      <Services id="services-section" />
      <OurClientSays id="ourclientsays-section"/>
      <Clients id="client-section" />
      <Originals id="originals-section" />
      <Clipsnreels id="Clipsnreels" />
      <Form id="form-section" />
      <Footer id="footer-section" />
    </>
  );
};

export default Page;
