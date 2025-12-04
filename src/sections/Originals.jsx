import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Originals = ({ id }) => {
    const [displayText, setDisplayText] = useState('')
    const [hasAnimated, setHasAnimated] = useState(false)
    const subtitleRef = useRef(null)
    const buttonRef = useRef(null)
    const sectionRef = useRef(null)
    const fullText = 'EXPLORE\nMASHOORIYA\nORIGINALS'

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true)
                        startTypingAnimation()
                    }
                })
            },
            { threshold: 0.5 } // Trigger when 50% of section is visible
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [hasAnimated])

    const startTypingAnimation = () => {
        let index = 0
        const typingInterval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(typingInterval)
                // After typing completes, animate subtitle and button
                animateSubtitleAndButton()
            }
        }, 85) // Typing speed
    }

    const animateSubtitleAndButton = () => {
        // Animate subtitle from bottom
        gsap.fromTo(
            subtitleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        )

        // Animate button after subtitle
        gsap.fromTo(
            buttonRef.current,
            { scale: 0, rotation: -8, opacity: 0 },
            {
                scale: 1,
                // rotation: -8, 
                opacity: 1,
                duration: 0.8,
                ease: 'step(24)',
                delay: 0.4
            }
        )
    }

    // Split text into lines
    const lines = displayText.split('\n')

    return (
        <div id={id} ref={sectionRef} className='bg-Dark min-h-screen h-screen w-full overflow-hidden'>
            <div className='flex flex-col justify-center items-center min-h-screen px-4 md:px-8 lg:px-16'>
                {/* Main Title with Typing Animation */}
                <div className='text-center'>
                    {lines.map((line, index) => (
                        <h1
                            key={index}
                            className='text-Yellow text-[6rem] md:text-[9.5rem] lg:text-[11.5rem] font-extrabold leading-[0.75] tracking-tight'
                        >
                            {line}
                            {index === lines.length - 1 && displayText.length < fullText.length && (
                                <span className='animate-pulse'>|</span>
                            )}
                        </h1>
                    ))}
                </div>

                {/* Subtitle */}
                <h3
                    ref={subtitleRef}
                    className='text-Green text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-center tracking-tight leading-[0.8] px-4 opacity-0'
                >
                    OUR OWN GROWN MUSIC LABEL
                </h3>

                {/* CTA Button */}
                <div className='-mt-2 flex justify-center'>
                    <button
                        ref={buttonRef}
                        className='bg-Yellow text-Dark border-2 border-Dark rounded-lg text-3xl pt-2 md:pt-3 sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold px-2 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 rotate-[-8deg] flex items-center justify-center h-[2.5rem] sm:h-[4.5rem] xl:h-[4.5rem] opacity-0'
                    >
                        <span className='block leading-none'>DIVE IN</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Originals;