import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = ({ id }) => {
    const titleRef = useRef(null)
    const servicesRef = useRef([])

    useEffect(() => {
        // Animate the title on scroll
        gsap.fromTo(
            titleRef.current,
            { y: 150, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top bottom",
                    end: "top 20%",
                    scrub: true,
                },
            }
        )

        // Animate each service card individually
        servicesRef.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 80, scale: 0.7 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                    },
                }
            )
        })
    }, [])

    const addToRefs = (el) => {
        if (el && !servicesRef.current.includes(el)) {
            servicesRef.current.push(el)
        }
    }

    return (
        <div id={id} className="section h-screen w-full bg-Green flex items-center justify-center">
            <div className="relative font-['Khand'] uppercase flex flex-col justify-center items-center text-center">
                <h1
                    ref={titleRef}
                    className="text-Yellow font-bold leading-none text-[5rem] md:text-[9.5rem] lg:text-[11.5rem]  mb-[-0.90rem]"
                >
                    Services
                </h1>

                <div
                    ref={addToRefs}
                    className="bg-Dark rounded-sm text-Purple w-max px-4 py-2 pt-4 mt-2 md:mt-0 font-extrabold text-4xl md:text-5xl lg:text-7xl xl:text-8xl transform -rotate-2 leading-none my-[-0.5rem]"
                >
                    Artist & Repertoire
                </div>

                <div
                    ref={addToRefs}
                    className="bg-Yellow rounded-sm text-Dark w-max px-4 py-2 pt-4 font-extrabold text-4xl md:text-5xl lg:text-7xl xl:text-8xl transform rotate-1 leading-none my-[-0.5rem]"
                >
                    Music Marketing
                </div>

                <div
                    ref={addToRefs}
                    className="bg-Dark rounded-sm text-Purple w-max px-4 py-2 pt-4 font-extrabold text-4xl md:text-5xl lg:text-7xl xl:text-8xl transform -rotate-2 leading-none my-[-0.5rem]"
                >
                    Artist Development
                </div>

                <div
                    ref={addToRefs}
                    className="bg-Yellow rounded-sm text-Dark w-max px-2 py-2 pt-4 font-extrabold text-4xl md:text-5xl lg:text-7xl xl:text-8xl transform -rotate-4 leading-none my-[-0.5rem]"
                >
                    Content & Rollout Design
                </div>
            </div>
        </div>
    )
}

export default Services
