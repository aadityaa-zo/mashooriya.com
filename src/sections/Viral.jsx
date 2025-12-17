import { useEffect, useRef } from "react";
import ViralSongsCard from "../components/ViralSongsCard";
import { gsap } from "gsap";
// import { gsap } from "gsap";---------------------------
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Viral = ({ id }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  const cardData = [
    {
      songName: "kahi teri bol",
      artistName: "swagar boy",
      image: "/SongImage/kahi-teri-bol.png",
      bgColor: "var(--Yellow)",
      rotation: 4,
    },
    {
      songName: "kahi teri bol",
      artistName: "swagar boy",
      image: "/SongImage/kahi-teri-bol.png",
      bgColor: "var(--Green)",
      rotation: -4,
    },
    {
      songName: "kahi teri bol",
      artistName: "swagar boy",
      image: "/SongImage/kahi-teri-bol.png",
      bgColor: "var(--Yellow)",
      rotation: 6,
    },
    {
      songName: "kahi teri bol",
      artistName: "swagar boy",
      image: "/SongImage/kahi-teri-bol.png",
      bgColor: "var(--Green)",
      rotation: -6,
    },
  ];

  useGSAP(() => {
    if (
      !sectionRef.current ||
      !titleRef.current ||
      !containerRef.current ||
      cardsRef.current.length === 0
    )
      return;

    const isMobile = window.innerWidth < 768;

    // Create spacer height based on number of cards
    const cardCount = cardsRef.current.length;
    const spacerHeight = isMobile
      ? `${cardCount * 100}vh`
      : `${cardCount * 100}vh`;

    containerRef.current.style.height = spacerHeight;

    // Timeline that pins the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${containerRef.current.offsetHeight} +=100%`,
        scrub: 1,
        pin: sectionRef.current.querySelector('.pinned-content'),
        pinSpacing: false,
        markers: false,
        anticipatePin: 1,
      },
    });

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: "50vh" },
      {
        y: "0vh",
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      }
    );

    // Animate each card
    cardsRef.current.forEach((el, index) => {
      if (el) {
        gsap.set(el, {
          zIndex: index + 1,
          y: "100vh",
          scale: 0.8,
        });

        // Add to timeline with proper spacing
        const startProgress = index / cardCount;

        tl.to(
          el,
          {
            y: 0,
            scale: 1,
            // opacity: 1,
            ease: "power2.out",
          },
          startProgress
        );
      }
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  },  {
      scope: sectionRef,
      dependencies: [id],
    });

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div ref={sectionRef} id={id} className="relative w-full bg-Purple">
      {/* spacer div to create scroll distance */}
      <div ref={containerRef} className="relative w-full" />

      {/* Pinned content */}
      <div className="pinned-content absolute top-0 left-0 flex h-screen w-full items-center justify-center overflow-hidden bg-Purple">
        {/* Title */}
        <div className="absolute top-0 right-0 z-[100] flex w-full flex-col items-center justify-center pointer-events-none">
          <div
            ref={titleRef}
             className="text-Dark relative z-10 flex h-screen w-[100vw] max-w-7xl flex-col justify-start sm:justify-center px-4 py-[28vh] text-center leading-[0.75] font-bold sm:px-6 md:px-8 text-[4rem] sm:text-[9rem] md:text-[9.5rem] lg:px-4 lg:text-[12rem]"
          >
            <p className="whitespace-nowrap md:whitespace-normal">THE CURRENT</p>
            <p className="whitespace-nowrap md:whitespace-normal">VIRALS AND</p>
            <p className="whitespace-nowrap md:whitespace-normal">ARTISTS POPPIN</p>
          </div>
        </div>

        {/* Cards container */}
        <div className="absolute z-[1000] inset-0 flex items-center justify-center">
          <div className="relative flex h-full w-full pb-[20vh] md:p-0 items-end md:items-center justify-center p-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="absolute"
                style={{ zIndex: index + 1 }}
              >
                <ViralSongsCard
                  image={card.image}
                  songName={card.songName}
                  artistName={card.artistName}
                  bgColor={card.bgColor}
                  rotation={card.rotation}
                />
              </div>
            ))}
          </div>
        </div>

        {/* More button */}
        <div className="absolute right-0 bottom-0 z-[1000] m-4">
          <div className="bg-Dark px-4 py-2 font-black leading-[1.2] tracking-[-0.01em] text-Purple text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]">
            More...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viral;