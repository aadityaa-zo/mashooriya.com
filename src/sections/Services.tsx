import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface ServicesProps {
  id: string;
}

const Services = ({ id }: ServicesProps) => {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const servicesRef = useRef<(HTMLDivElement | null)[]>([])
    const sectionRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Animate the title on scroll
        gsap.fromTo(
            titleRef.current,
            { y: "50vh" },
            {
                y: 0,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 150%",
                    end: "top 60%",
                    scrub: true,
                },
            }
        )

        // Animate each service card individually
        servicesRef.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { y: "50vh", scale: 0.7 },
                {
                    y: 0,
                    scale: 1,
                    ease: "ease.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 160%",
                        end: "top 110%",
                        scrub: 1,
                    },
                }
            )
        })
    }, {
        scope: sectionRef,
        dependencies: [id],
    })

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !servicesRef.current.includes(el)) {
            servicesRef.current.push(el)
        }
    }

    return (
        <>
            {/* interval/break for upper section */}
            {/* <div className="w-full h-screen"></div> */}
            <div
                ref={sectionRef}
                id={id}
                className="section h-screen w-full bg-Green flex items-center justify-center overflow-hidden">
                <div className="relative font-['Khand'] uppercase flex flex-col justify-center items-center text-center">
                    <h1
                        ref={titleRef}
                        className="text-Yellow font-bold leading-none text-[7rem] md:text-[9.5rem] lg:text-[11.5rem] mb-0 md:mb-[-0.90rem]"
                    >
                        Services
                    </h1>

                    <div
                        ref={addToRefs}
                        className="bg-Dark w-full md:w-max text-Purple sm:px-15 px-8 sm:py-2 py-6 pt-4 sm:mt-2 mt-10 md:mt-0 font-extrabold text-[4rem] sm:text-[6rem] md:text-9xl lg:text-10xl xl:text-12xl transform -rotate-2 leading-[0.8] md:leading-none sm:my-[-0.5rem] "
                    >
                        Artist &
                        {" "}
                        <span className='md:hidden'> <br /> </span>
                        Repertoire
                    </div>

                    <div
                        ref={addToRefs}
                        className="bg-Yellow text-Dark w-full md:w-max sm:px-15 px-8 sm:py-2 py-6 pt-4 font-extrabold text-[4rem] sm:text-[6rem] md:text-9xl lg:text-10xl xl:text-12xl transform rotate-1  leading-[0.8] md:leading-none sm:my-[-0.5rem]"
                    >
                        Music<span className='md:hidden'> <br /> </span>  Marketing
                    </div>

                    <div
                        ref={addToRefs}
                        className="bg-Dark text-Purple w-full md:w-max sm:px-15 px-8 sm:py-2 py-6 pt-4 font-extrabold text-[4rem] sm:text-[6rem] md:text-9xl lg:text-10xl xl:text-12xl transform -rotate-2  leading-[0.8] md:leading-none sm:my-[-0.5rem]"
                    >
                        Artist <span className='md:hidden'> <br /> </span>  Development
                    </div>

                    <div
                        ref={addToRefs}
                        className="bg-Yellow text-Dark w-full md:w-max sm:py-2 sm:px-15 px-8 pt-4 font-extrabold text-[4rem] sm:text-[6rem] md:text-9xl lg:text-10xl xl:text-12xl transform rotate-1 leading-[0.8] md:leading-none sm:my-[-0.5rem]"
                    >
                        Content &<span className='md:hidden'> <br /> </span>  Rollout
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
