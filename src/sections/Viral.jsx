import React, { useState, useEffect, useRef } from 'react';
import DraggableCard from '../components/DraggableCard';

const Viral = ({ id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeDragCard, setActiveDragCard] = useState(null); // Track which card is being dragged
    const sectionRef = useRef(null);

    const cardData = [
        // Bottom layer: First yellow card (animates first)
        { songName: "SONG NAME", artistName: "ARTIST NAME", initialX: -200, targetX: 20, targetY: -15, delay: 500, bgColor: 'var(--Yellow)', rotation: 3, zIndex: 27 },

        // Second layer: First green card (animates second)
        { songName: "SONG NAME", artistName: "ARTIST NAME", initialX: -300, targetX: -40, targetY: 20, delay: 1200, bgColor: 'var(--Green)', rotation: -3, zIndex: 28 },

        // Third layer: Second yellow card (animates third)
        { songName: "SONG NAME", artistName: "ARTIST NAME", initialX: -180, targetX: 50, targetY: -25, delay: 1500, bgColor: 'var(--Yellow)', rotation: 3, zIndex: 29 },

        // Top layer: Second green card (animates last)
        { songName: "SONG NAME", artistName: "ARTIST NAME", initialX: -320, targetX: -15, targetY: 10, delay: 1800, bgColor: 'var(--Green)', rotation: -3, zIndex: 30 },
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
            }
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
            className="relative w-full h-screen flex items-center justify-center bg-Purple overflow-hidden"
            
            id={id}
        >
            <div className="font-bold text-Dark text-[5rem] md:text-[9.5rem] lg:text-[11.5rem]  leading-[0.75] text-center px-4 sm:px-6 md:px-8 lg:px-4 max-w-7xl relative z-10">
                <p className="whitespace-nowrap md:whitespace-normal">THE CURRENT</p>
                <p className="whitespace-nowrap md:whitespace-normal">VIRALS AND</p>
                <p className="whitespace-nowrap md:whitespace-normal">ARTISTS POPPIN</p>
            </div>

            {/* Centered Container for Cards */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-[15]">
                {/* Draggable Cards Container */}
                <div className="relative w-full h-full pointer-events-none overflow-visible">
                    {cardData.map((card, index) => (
                        <DraggableCard
                            key={index}
                            cardId={index}
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
        </div>
    );
};

export default Viral;