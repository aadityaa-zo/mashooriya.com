import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = ({ id }) => {
  const headingRefs = useRef([]);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const paragraphRef = useRef(null);

  // helper to add refs
  const addToRefs = (el) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Create an overall timeline tied to scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

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
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 160%",
            end: "top 110%",
            scrub: 1,
          },
        },
      );
    }

    // Animate the first card (Aditya Mishra)
    if (card1Ref.current) {
      gsap.fromTo(
        card1Ref.current,
        { x: "-50vh", scale: 0, rotation: -20 },
        {
          x: "0vh",
          rotation: -4,
          scale: 1,
          ease: "ease.in",
          scrollTrigger: {
            trigger: card2Ref.current,
            start: "top 150%",
            end: "top 10%",
            scrub: true,
          },
        },
      );
    }

    // Animate the second card (Anmol Dhand)
    if (card2Ref.current) {
      gsap.fromTo(
        card2Ref.current,
        { x: "50vh", scale: 0, rotation: 20 },
        {
          x: "0vh",
          rotation: 4,
          scale: 1,
          ease: "ease.in",
          scrollTrigger: {
            trigger: card2Ref.current,
            start: "top 150%",
            end: "top 10%",
            scrub: true,
          },
        },
      );
    }

    // Animate the paragraph
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { y: "30vh", opacity: 0 },
        {
          y: "0 vh",
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
  }, []);

  return (
    <div id={id} ref={containerRef} className="relative z-[0] w-full">
      <div id={id} className="bg-Yellow text-Dark py-4 w-full pt-20 h-[70vh]">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="relative text-center text-[5rem] md:text-[9.5rem] lg:text-[11.5rem]">
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
                className="absolute right-0 -bottom-8 -rotate-6 rounded-lg p-2 md:-right-4 md:-bottom-10"
              >
                <div className="bg-Dark/95 text-Yellow transform rounded-lg border-2 px-2 py-1 text-3xl font-bold md:px-2 md:text-2xl lg:text-6xl">
                  <span className="flex pt-2">ABOUT US</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-Yellow flex h-[80vh] items-center px-4 pb-12 md:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          {/* Team Cards Container */}
          <div className="flex -translate-x-3 flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-center">
            {/* Aditya Mishra Card */}
            <div
              ref={card1Ref}
              className="relative z-2 translate-y-12 transform transition-transform duration-300 hover:rotate-0 lg:translate-x-15 lg:-translate-y-8 lg:-rotate-2"
            >
              <div className="bg-Purple border-Dark w-full -rotate-3 overflow-hidden rounded-lg border-4 shadow-2xl">
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden md:h-100 md:w-140 md:px-1">
                  <img
                    src="/About/Aditya_Mishra.png"
                    alt="Aditya Mishra"
                    className="h-full w-full rotate-3"
                  />
                </div>
                {/* Name Label */}
                <div className="bg-Purple px-2 py-1">
                  <h3 className="text-Dark text-center text-6xl font-bold md:text-8xl lg:text-8xl">
                    ADITYA MISHRA
                  </h3>
                </div>
              </div>
            </div>

            {/* Anmol Dhand Card */}
            <div
              ref={card2Ref}
              className="relative z-1 translate-x-6 transform transition-transform duration-300 hover:rotate-0 lg:rotate-2"
            >
              <div className="bg-Green border-Dark w-full rotate-3 overflow-hidden rounded-lg border-4 shadow-2xl">
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden md:h-100 md:w-140 md:px-1">
                  <img
                    src="/About/Anmol_Dhand.png"
                    alt="Anmol Dhand"
                    className="h-full w-full -rotate-2"
                  />
                </div>
                {/* Name Label */}
                <div className="bg-Green px-2 py-1">
                  <h3 className="text-Yellow text-center text-6xl font-bold md:text-8xl lg:text-8xl">
                    ANMOL DHAND
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Company Description */}
          <div className="mt-12 text-center md:mt-16 lg:mt-20">
            <p
              ref={paragraphRef}
              className="text-Dark mx-auto max-w-5xl px-4 text-2xl leading-[0.8] font-bold md:text-3xl lg:text-4xl"
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
  );
};

export default About;
