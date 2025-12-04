import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = ({ id }) => {
    const headingRefs = useRef([]);
    const buttonRef = useRef(null);

    // helper to add refs
    const addToRefs = (el) => {
        if (el && !headingRefs.current.includes(el)) {
            headingRefs.current.push(el);
        }
    };

    useEffect(() => {
        // Animate each heading line
        headingRefs.current.forEach((el, i) => {
            gsap.fromTo(
                el,
                { y: 80, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
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

        // Animate the button
        if (buttonRef.current) {
            gsap.fromTo(
                buttonRef.current,
                { y: 50, opacity: 0, scale: 0.8 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: buttonRef.current,
                        start: "top 85%",
                        end: "top 50%",
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    return (
        <div id={id} className="w-full h-[100%] md:h-screen bg-Yellow text-Dark pt-20">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="relative text-center text-[5rem] md:text-[9.5rem] lg:text-[11.5rem] ">
                    <h1
                        ref={addToRefs}
                        className="font-bold leading-[0.78] whitespace-nowrap md:whitespace-normal"
                    >
                        PEOPLE <br />
                        BEHIND THE<br />
                        VIRAL BANGERS
                    </h1>
                    {/* <h1
                        ref={addToRefs}
                        className="font-bold leading-[0.78]  whitespace-nowrap md:whitespace-normal"
                    >
                    </h1>
                    <h1
                        ref={addToRefs}
                        className="font-bold leading-[0.78]  whitespace-nowrap md:whitespace-normal"
                    >
                    </h1> */}

                    <div className="relative">
                        <div
                            ref={buttonRef}
                            className="absolute -rotate-6 p-2 -bottom-8 rounded-lg right-0 md:-bottom-10 md:-right-4"
                        >
                            <div className="bg-Dark/95 rounded-lg text-Yellow px-2 py-1 border-2 md:px-2 font-bold text-3xl md:text-2xl lg:text-6xl transform">
                                <span className="flex pt-2">ABOUT US</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
