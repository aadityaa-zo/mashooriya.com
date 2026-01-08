import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AboutDevsCard from "../components/AboutDevsCard";

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps) => {
  const headingRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    const devs = [
        {
            name: "Aditya Mishra",
            image: "/About/Aditya.jpeg",
            cardClasses: "sm:-translate-y-6 sm:translate-x-10 translate-y-20",
            bg: "bg-Purple",
            border: "border-Dark",
            cardRotation: "-rotate-1",
            textColor: "text-Dark",
            zIndex: "z-20",
            offsetClasses: "lg:-rotate-2",
            text: "Mashooriya fuses music, culture, and strategy to amplify independent voices. We craft campaigns that feel like culture itself—driven by street insight and sharp creativity so artists, brands, and stories don't just appear, they resonate."
        },
        {
            name: "Anmol Dhand",
            image: "/About/Anmol.jpeg",
            cardClasses: "sm:translate-x-10 translate-x-5 sm:-translate-y-20 md:-translate-y-10 translate-y-5",
            bg: "bg-Green",
            border: "border-Dark",
            cardRotation: "rotate-1",
            textColor: "text-Yellow",
            zIndex: "",
            offsetClasses: "lg:rotate-2",
            text: "Mashooriya fuses music, culture, and strategy to amplify independent voices. We craft campaigns that feel like culture itself—driven by street insight and sharp creativity so artists, brands, and stories don't just appear, they resonate."
        },
    ];

  // helper to add refs
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  useGSAP(() => {

    const ctx = gsap.context(() => {
//to clean all the scroll memory so animation runs everytme neatly
    ScrollTrigger.clearScrollMemory()

    // Animate each heading line
    headingRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: "40vh", scale: 0.8 },
        {
          y: "10vh",
          scale: 1,
          ease: "ease",
          scrollTrigger: {
            trigger: el,
            start: "top 170%",
            end: "top 60%",
            scrub: true,
          },
        },
      );
    });

 // Animate the paragraph
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { y: "30vh", opacity: 0 },
        {
          y: "0vh",
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 150%",
            end: "top 60%",
            scrub: true,
          },
        },
      );
    }

    }, containerRef)

    return () => ctx.revert()
  }, {
    scope: containerRef, 
    revertOnUpdate: true, // IMPORTANT
  });

  return (
    <div id={id} ref={containerRef} className="relative z-0 w-full overflow-hidden">
      <div id={id} className="bg-Yellow text-Dark w-full min-h-screen flex items-center justfy-center py-[10vh]">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="relative text-center text-[4rem] min-h-screen sm:text-[8rem] md:text-[9.5rem] lg:text-[12rem]">
            <h1
              // ref={addToRefs}
              className="leading-[0.78] translate-y-22 md:translate-0 font-bold whitespace-nowrap md:whitespace-normal"
            >
              PEOPLE <br />
              BEHIND THE <br />
              VIRAL BANGERS
            </h1>
            <div id={id} className="mx-auto w-full px-10">
                    {/* Team Cards Container */}
                  <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-center translate-x-4 lg:translate-0 ">
                        {devs.map((dev, index) => (
                            <AboutDevsCard key={dev.name} dev={dev} index={index} />
                        ))}
                  </div>

                    {/* Company Description */}
                  <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 w-full text-center">
                        <p
                            ref={paragraphRef}
                            className=" text-Dark mx-auto w-full max-w-5xl pt-4 lg:pt-8 text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold leading-none sm:leading-none md:leading-[0.9] lg:leading-[0.8]"
                        >
                            MASHOORIYA FUSES MUSIC, CULTURE, AND STRATEGY TO AMPLIFY
                            INDEPENDENT VOICES. WE CRAFT CAMPAIGNS THAT FEEL LIKE CULTURE
                            ITSELF—DRIVEN BY STREET INSIGHT AND SHARP CREATIVITY SO ARTISTS,
                            BRANDS, AND STORIES DON'T JUST APPEAR, THEY RESONATE.
                      </p>
                  </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
