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
  text: string;
}

interface AboutDevsCardProps {
  dev: Dev;
  index: number;
}

/**
 * Single developer card with scroll-in animation.
 */
function AboutDevsCard({ dev, index }: AboutDevsCardProps) {
  
// const text = dev.text || "Mashooriya fuses music, culture, and strategy to amplify independent voices. We craft campaigns that feel like culture itself—driven by street insight and sharp creativity so artists, brands, and stories don't just appear, they resonate.";

  return (
    <div
      // ref={cardRef}
      className={`relative ${dev.zIndex} ${dev.offsetClasses} group transition-all duration-300 hover:rotate-0`}
    >
        <div>
            <div
              className={`${dev.bg} ${dev.border} ${dev.cardRotation} ${dev.cardClasses} w-[90%] md:w-full overflow-hidden group-hover:opacity-0 border-4 p-2 sm:p-4 `}
            >
              <div
                className="relative border-4 border-black overflow-hidden h-60 sm:h-75 md:h-80 lg:h-95 w-full"
              >
                <img src={dev.image} alt={dev.name} className="h-[101%] w-full md:w-[105%] object-fit min-w-97" />
              </div>

              <div className={`${dev.bg} px-2 py-1`}>
                <h3
                  className={`${dev.textColor} text-center text-5xl sm:text-7xl font-bold md:text-8xl lg:text-11xl`}
                >
                  {dev.name.toUpperCase()}
                </h3>
              </div>
              </div>
            </div>


            <div>
                  <div className={`${dev.bg} ${dev.border} ${dev.cardRotation} ${dev.cardClasses} w-full group-hover:h-full absolute top-0`}
                  >
                    <div className="group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-0 w-full overflow-hidden p-2 sm:p-4 h-full flex item-center flex-col justify-around">
                
                    
                      <div className={`${dev.bg} px-2 py-1`}>
                        <h3 className={`${dev.textColor} text-center text-6xl sm:text-7xl font-bold md:text-8xl lg:text-11xl uppercase`}
                        >
                          {dev.name}
                        </h3>
                      </div>

                      <div
                        className={`overflow- w-full text-2xl sm:text-3xl md:text-4xl font-bold flex items-center justify-around ${dev.textColor}`}
                      >
                    hey  {dev.text}
                      </div> 

                    </div>
                  </div>
                </div>

              </div>
  );
}

export default AboutDevsCard;
