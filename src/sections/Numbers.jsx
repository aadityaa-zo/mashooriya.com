import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Numbers = ({ id }) => {
    const titleRef = useRef(null);
    const tile1Ref = useRef(null);
    const tile2Ref = useRef(null);
    const tile3Ref = useRef(null);

    useEffect(() => {
        const el = titleRef.current;

        // Title animation
        gsap.fromTo(
            el,
            { y: 150, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "top 10%",
                    scrub: true,
                },
            }
        );

        // Pin section
        ScrollTrigger.create({
            trigger: `#${id}`,
            start: "top top",
            endTrigger: "#bar-section",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: true,
        });

        // Tile animations – rotate and scale in
        [tile1Ref, tile2Ref, tile3Ref].forEach((ref, i) => {
            gsap.fromTo(
                ref.current,
                { scale: 0, rotate: i === 0 ? -10 : i === 1 ? 8 : -6 },
                {
                    scale: 1,
                    rotate: i === 0 ? -6 : i === 1 ? 5 : -8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                    },
                }
            );
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, [id]);

    return (
        <div
            id={id}
            className="relative bg-Green font-khand min-h-screen flex items-center justify-center p-4 sm:p-8"
        >
            <div className="relative w-full max-w-7xl h-screen flex flex-col justify-center items-center text-center font-bold pb-10">
                {/* Title */}
                <h1
                    ref={titleRef}
                    className="text-[5rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem] tracking-tight leading-[0.8] text-Yellow font-extrabold uppercase"
                >
                    Numbers that
                    <br />
                    Make Major
                    <br />
                    Noiseeee!
                </h1>

                {/* Tile 1 – Top Right */}
                <div
                    ref={tile1Ref}
                    className="absolute bg-White text-Dark rounded-sm py-1 px-3 rotate-[-6deg]
                    top-[37%] right-[4%] md:top-[15%] md:right-[15%]
                    transform flex md:block items-center gap-2 shadow-lg"
                >
                    <p className="text-4xl md:text-5xl font-extrabold pt-1">28M+</p>
                    <p className="uppercase text-left md:text-center leading-none text-lg md:text-base">
                        views <br /> across campaigns
                    </p>
                </div>

                {/* Tile 2 – Bottom Left */}
                <div
                    ref={tile2Ref}
                    className="absolute bg-Purple text-Dark rounded-sm py-2 px-4 rotate-[5deg]
                    top-[50%] left-[2%] md:left-[15%]
                    transform flex md:block items-center gap-2 w-max shadow-lg"
                >
                    <p className="text-4xl md:text-5xl font-extrabold pt-1">6X</p>
                    <p className="uppercase text-left md:text-center leading-none text-lg md:text-base">
                        average <br /> engagement rate
                    </p>
                </div>

                {/* Tile 3 – Bottom Center-Right */}
                <div
                    ref={tile3Ref}
                    className="absolute bg-Dark text-Yellow rounded-sm py-2 px-4 rotate-[-8deg]
                    top-[57%] right-[2%] md:right-[20%]
                    transform flex md:block items-center gap-2 w-max shadow-lg"
                >
                    <p className="text-4xl pt-1 md:text-5xl font-extrabold">40+</p>
                    <p className="uppercase pt-1 text-lg md:text-base text-nowrap">
                        artists marketed
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Numbers;
