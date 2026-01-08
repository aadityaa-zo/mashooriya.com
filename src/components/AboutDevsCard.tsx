import { useRef, useEffect } from "react";
import gsap from "gsap";

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

function AboutDevsCard({ dev }: AboutDevsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const flipped = useRef(false);

  useEffect(() => {
    // reset transform on mount
    gsap.set(cardRef.current, { rotateY: 0 });

    return () => {
      // kill animations on unmount
      gsap.killTweensOf(cardRef.current);
    };
  }, []);

  const flipCard = () => {
    flipped.current = !flipped.current;

    gsap.to(cardRef.current, {
      rotateY: flipped.current ? 180 : 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className={`relative ${dev.zIndex} ${dev.offsetClasses}  w-110 h-85 md:w-150 md:h-125`}
      style={{ perspective: "1000px" }}
      onClick={flipCard}
    >
      
      <div
        ref={cardRef}
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className={`${dev.bg} ${dev.border} ${dev.cardRotation} ${dev.cardClasses} w-[90%] md:w-full border-4 p-2 sm:p-4`}
          >
            <div className="relative border-4 border-black overflow-hidden h-60 sm:h-75 md:h-80 lg:h-95 w-full">
              <img
                src={dev.image}
                alt={dev.name}
                className="h-full w-full object-cover"
              />
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

        {/* BACK */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div
            className={`${dev.bg} ${dev.border} ${dev.cardRotation} ${dev.cardClasses} w-full h-full border-4 p-4 flex flex-col justify-around`}
          >
            <h3
              className={`${dev.textColor} text-center text-6xl sm:text-7xl font-bold md:text-8xl lg:text-11xl uppercase`}
            >
              {dev.name}
            </h3>

            <div
              className={`${dev.textColor} text-2xl sm:text-3xl md:text-4xl font-bold text-center`}
            >
              {dev.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDevsCard;
