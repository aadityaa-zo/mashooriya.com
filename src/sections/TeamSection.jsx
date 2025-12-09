import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutDevsCard from "../components/AboutDevsCard";

gsap.registerPlugin(ScrollTrigger);

function TeamSection({ id }) {
    const paragraphRef = useRef(null);

    const devs = [
        {
            name: "Aditya Mishra",
            image: "/About/Aditya_Mishra.png",
            cardClasses: "sm:translate-y-0 translate-y-20",
            bg: "bg-Purple",
            border: "border-Dark",
            cardRotation: "-rotate-3",
            textColor: "text-Dark",
            zIndex: "z-20",
            offsetClasses: "lg:-rotate-2",
        },
        {
            name: "Anmol Dhand",
            image: "/About/Anmol_Dhand.png",
            cardClasses: "sm:translate-x-0 translate-x-20",
            bg: "bg-Green",
            border: "border-Dark",
            cardRotation: "rotate-3",
            textColor: "text-Yellow",
            zIndex: "z-10",
            offsetClasses: "lg:rotate-2",
        },
    ];
    useEffect(() => {

        ScrollTrigger.create({
            trigger: `#${id}`,
            start: "top top",
            endTrigger: "#team-section",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: true,
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
    }, [])

    return (
        <>
            {/* interval/break for upper section */}
            {/* <div className="w-full h-[80vh]"></div> */}
            <div id={id} className="bg-Yellow flex z-10 h-screen items-center px-4 pb-12 md:pb-20">
                <div id={id} className=" bg-Yellow z-1 pt-[10vh] mx-auto w-full">
                    {/* Team Cards Container */}
                    <div className="flex bg- -translate-x-3 flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-center">

                        {devs.map((dev, index) => (
                            <AboutDevsCard key={dev.name} dev={dev} index={index} />
                        ))}
                    </div>

                    {/* Company Description */}
                    <div className="mt-12 w-full text-center md:mt-16 lg:mt-20">
                        <p
                            ref={paragraphRef}
                            className="text-Dark mx-auto w-full max-w-7xl px-4 text-2xl leading-[0.8] font-bold md:text-3xl lg:text-4xl"
                        >
                            MASHOORIYA FUSES MUSIC, CULTURE, AND STRATEGY TO AMPLIFY
                            INDEPENDENT VOICES. WE CRAFT CAMPAIGNS THAT FEEL LIKE CULTURE
                            ITSELF—DRIVEN BY STREET INSIGHT AND SHARP CREATIVITY SO ARTISTS,
                            BRANDS, AND STORIES DON'T JUST APPEAR, THEY RESONATE.
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TeamSection