import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { gsap } from "gsap"; --------------------
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NumberTitles from "../components/NumberTitles";

gsap.registerPlugin(ScrollTrigger);

interface NumbersProps {
  id: string;
}

const Numbers = ({ id }: NumbersProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // OLD SCRAPPY useEffect (COMMENTED, NOT REMOVED)
  /*
  useEffect(() => {
    const el = titleRef.current;

    gsap.fromTo(
      el,
      { y: "50vh", scale: 0.7 },
      {
        y: 0,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 150%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    ScrollTrigger.create({
      trigger: `#${id}`,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });
  }, [id]);
  */

  // CLEAN useGSAP VERSION
  useGSAP(
    () => {
      const el = titleRef.current;

      // Title animation
      gsap.fromTo(
        el,
        { y: "50vh", scale: 0.7 },
        {
          y: 0,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 150%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Pin section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    },
    {
      scope: containerRef,
      dependencies: [id],
    }
  );

  return (
    <>
      <div
        id={id}
        ref={containerRef}
        className="bg-Yellow font-khand relative flex min-h-screen items-center justify-center p-4 sm:p-8"
      >
        <div className="relative flex h-screen w-full max-w-7xl flex-col items-center justify-center pb-10 text-center font-bold">
          {/* Title */}
          <h1
            ref={titleRef}
            className="text-Dark text-[5rem] leading-[0.8] font-extrabold tracking-tight uppercase sm:text-[9rem] md:text-[9rem] lg:text-[12rem]"
          >
            Numbers that <br /> Make Major <br /> Noiseeee!
          </h1>

          {/* Tile 1 – Top Right */}
          <NumberTitles
            classes="bg-Purple text-Dark sm:top-[28%] sm:left-[2%] top-[15%] left-[2%] md:left-[20%] lg:top-[17%] lg:left-[8%]"
            number="6X"
            text={
              <>
                average <br /> engagement rate
              </>
            }
            initialRotate={-6}
            secondRotate={-8}
          />

          {/* Tile 2 – Top Left */}
          <NumberTitles
            classes="bg-White text-Dark sm:top-[28%] sm:right-[4%] top-[23%] right-[1%] lg:top-[17%] lg:right-[9%]"
            number="28M+"
            text={
              <>
                views <br /> across campaigns
              </>
            }
            initialRotate={-10}
            secondRotate={6}
          />

          {/* Tile 3 – Bottom Left */}
          <NumberTitles
            classes="bg-Green text-White top-[65%] left-[10%] md:top-[25%] md:right-[15%] lg:top-[63%] lg:left-[25%]"
            number="50+"
            text={
              <>
                virals <br /> this year
              </>
            }
            initialRotate={8}
            secondRotate={5}
          />

          {/* Tile 4 – Bottom Right */}
          <NumberTitles
            classes="bg-Dark text-Yellow top-[63%] right-[5%] md:right-[22%] lg:right-[20%]"
            number="40+"
            text={<>artists marketed</>}
            initialRotate={-6}
            secondRotate={-8}
          />
        </div>
      </div>

      <div className="font-khand relative flex min-h-[50vh] items-center justify-center bg-transparent p-4 sm:p-8"></div>
    </>
  );
};

export default Numbers;
