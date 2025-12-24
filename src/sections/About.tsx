import React, { useRef } from "react";
import { gsap } from "gsap";
// import { gsap } from "gsap"; ---------------------
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AboutDevsCard from "../components/AboutDevsCard";

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps) => {
  const headingRefs = useRef<(HTMLElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // helper to add refs
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  useGSAP(() => {
    // Animate each heading line
    headingRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: "50vh", scale: 0.8 },
        {
          y: "-10vh",
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

    // Animate the button
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { y: "50vh", scale: 0.8 },
        {
          y: "-10vh",
          scale: 1,
          ease: "ease",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 160%",
            end: "top 60%",
            scrub: true,
          },
        },
      );
    }

  }, {
    scope: containerRef, 
  });

  return (
    <div id={id} ref={containerRef} className="relative z-0 w-full">
      <div id={id} className="bg-Yellow text-Dark h-screen w-full py-4 pt-20">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="relative text-center text-[4rem] sm:text-[8rem] md:text-[9.5rem] lg:text-[12rem]">
            <h1
              ref={addToRefs}
              className="translate-y-7 leading-[0.78] font-bold whitespace-nowrap md:whitespace-normal"
            >
              PEOPLE <br />
              BEHIND THE <br />
              VIRAL BANGERS
            </h1>

            <div className="relative">
              <div
                ref={buttonRef}
                className="absolute right-0 bottom-10 sm:-bottom-8 -rotate-6 p-2 md:-right-4 md:-bottom-10"
              >
                <div className="bg-Dark/95 text-Yellow transform border-2 px-2 py-1 text-3xl font-bold md:px-2 md:text-2xl lg:text-6xl translate-y-1 sm:-translate-y-15 ">
                  <span className="flex pt-2">ABOUT US</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default About;
