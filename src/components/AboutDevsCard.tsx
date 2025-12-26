import React, { useRef } from "react";
import gsap from "gsap";
// import { gsap } from "gsap"; ---------------------
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Dev {
  name: string;
  image: string;
  cardClasses: string;
  bg: string;
  border: string;
  cardRotation: string;
  textColor: string;
  zIndex: string;
  offsetClasses: string;
}

interface AboutDevsCardProps {
  dev: Dev;
  index: number;
}

/**
 * Single developer card with scroll-in animation.
 */
function AboutDevsCard({ dev, index }: AboutDevsCardProps) {
  // const cardRef = useRef(null);

  // useGSAP(
  //   () => {
  //     const fromLeft = index % 2 === 0;

  //     gsap.fromTo(
  //       cardRef.current,
  //       {
  //         y: fromLeft ? "50vh" : "50vh",
  //         rotation: fromLeft ? -12 : 12,
  //         scale: 0,
  //       },
  //       {
  //         y: fromLeft ? "0vh" : "2vh",
  //         rotation: 0,
  //         scale: 1,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: cardRef.current,
  //           start: "top 150%",
  //           end: "top 20%",
  //           scrub: 0.1,
  //         },
  //       }
  //     );
  //   },
  //   {
  //     scope: cardRef,
  //     dependencies: [index],
  //   }
  // );

  return (
    <div
      // ref={cardRef}
      className={`relative ${dev.zIndex} ${dev.offsetClasses} transform transition-transform duration-300 hover:rotate-0`}
    >
      <div
        className={`${dev.bg} ${dev.border} ${dev.cardRotation} ${dev.cardClasses} w-full overflow-hidden border-4 p-2 sm:p-4 `}
      >
        <div
          className="
            relative border-4 border-black overflow-hidden h-70 sm:h-80 md:h-80 lg:h-95 w-full
          "
        >
          <img src={dev.image} alt={dev.name} className="h-full md:w-full object-cover min-w-98" />
        </div>

        <div className={`${dev.bg} px-2 py-1`}>
          <h3
            className={`${dev.textColor} text-center text-6xl sm:text-7xl font-bold md:text-8xl lg:text-11xl`}
          >
            {dev.name.toUpperCase()}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AboutDevsCard;
