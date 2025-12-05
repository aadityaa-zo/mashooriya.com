import React, { useState, useEffect, useRef } from "react";
import DraggableCard from "../components/DraggableCard";

const Viral = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDragCard, setActiveDragCard] = useState(null); // Track which card is being dragged
  const sectionRef = useRef(null);

  const cardData = [
    // Bottom layer: First yellow card (animates first)
    {
      songName: "kahi teri bol",
      artistName: "swagar boy",
      image: "/SongImage/kahi-teri-bol.png",
      initialX: -200,
      targetX: 20,
      targetY: -15,
      delay: 500,
      bgColor: "var(--Yellow)",
      rotation: 3,
      zIndex: 27,
    },

    // Second layer: First green card (animates second)
    {
      songName: "kahi teri bol",
      artistName: "swagar boy",
      image: "/SongImage/kahi-teri-bol.png",
      initialX: -300,
      targetX: -40,
      targetY: 20,
      delay: 1200,
      bgColor: "var(--Green)",
      rotation: -3,
      zIndex: 28,
    },

    // Third layer: Second yellow card (animates third)
    {
      songName: "kahi teri bol",
      artistName: "swagar boy",
      image: "/SongImage/kahi-teri-bol.png",
      initialX: -180,
      targetX: 50,
      targetY: -25,
      delay: 1500,
      bgColor: "var(--Yellow)",
      rotation: 3,
      zIndex: 29,
    },

    // Top layer: Second green card (animates last)
    {
      songName: "kahi teri bol",
      artistName: "swagar boy",
      image: "/SongImage/kahi-teri-bol.png",
      initialX: -320,
      targetX: -15,
      targetY: 10,
      delay: 1800,
      bgColor: "var(--Green)",
      rotation: -3,
      zIndex: 30,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-Purple relative flex h-screen w-full items-center justify-center overflow-hidden"
      id={id}
    >
      <div className="text-Dark relative top-0 left-0 z-10 w-[100vw] max-w-7xl px-4 text-center text-[5rem] leading-[0.75] font-bold sm:px-6 md:px-8 md:text-[9.5rem] lg:px-4 lg:text-[11.5rem]">
        <p className="whitespace-nowrap md:whitespace-normal line-clamp-1">THE CURRENT</p>
        <p className="whitespace-nowrap md:whitespace-normal line-clamp-1">VIRALS AND</p>
        <p className="whitespace-nowrap md:whitespace-normal line-clamp-1">ARTISTS POPPIN</p>
      </div>


      {/* Centered Container for Cards */}
      <div className="pointer-events-none absolute inset-0 z-[1000] flex items-center justify-center">
        {/* Draggable Cards Container  */}
        <div className="pointer-events-none relative h-full w-full">
          {cardData.map((card, index) => (
            <DraggableCard
              key={index}
              cardId={index}
              image={card.image}
              songName={card.songName}
              artistName={card.artistName}
              initialX={card.initialX}
              targetX={card.targetX}
              targetY={card.targetY}
              delay={card.delay}
              bgColor={card.bgColor}
              rotation={card.rotation}
              zIndex={card.zIndex}
              isVisible={isVisible}
              isActive={activeDragCard === index}
              onDragStart={(cardId) => setActiveDragCard(cardId)}
              onDragEnd={() => setActiveDragCard(null)}
            />
          ))}
        </div>
      </div>

      {/* More button in bottom-right corner */}
      <div className="absolute bottom-0 right-0 z-[1000] m-4">
        <div className="text-Purple bg-Dark text-[2rem] font-black tracking-[-0.01em] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] px-4 leading-[1.2]">More...</div>
      </div>
    </div>
  );
};

export default Viral;
