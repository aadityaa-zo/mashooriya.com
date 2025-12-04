import React, { useState, useRef, useEffect } from 'react';

const DraggableCard = ({
    songName,
    artistName,
    initialX = 0,
    initialY = -500,
    targetX = 0,
    targetY = 400,
    delay = 0,
    bgColor = 'var(--Green)',
    rotation = 0,
    zIndex = 25,
    isVisible = false,
    cardId = 0,
    isActive = false,
    onDragStart = null,
    onDragEnd = null
}) => {
    const [position, setPosition] = useState({
        x: initialX, // Use the initial position directly
        y: window.innerHeight + 200, // Start from BELOW the screen
        rotation: 0
    });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [hasDropped, setHasDropped] = useState(false);
    const cardRef = useRef(null);

    // Handle rising animation (from bottom to target position)
    useEffect(() => {
        if (isVisible && !hasDropped) {
            const timer = setTimeout(() => {
                // Use the targetX, targetY, and rotation from props
                setPosition({ x: targetX, y: targetY, rotation: rotation });
                setHasDropped(true);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [isVisible, delay, hasDropped, targetX, targetY, rotation]);

    // Mouse event handlers
    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        if (onDragStart) onDragStart(cardId); // Notify parent which card is being dragged
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
            rotation: position.rotation
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (onDragEnd) onDragEnd(); // Notify parent that dragging ended
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        setIsDragging(true);
        if (onDragStart) onDragStart(cardId); // Notify parent which card is being dragged
        setDragStart({
            x: touch.clientX - position.x,
            y: touch.clientY - position.y
        });
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const touch = e.touches[0];
        setPosition({
            x: touch.clientX - dragStart.x,
            y: touch.clientY - dragStart.y,
            rotation: position.rotation
        });
    };

    const handleTouchEnd = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (onDragEnd) onDragEnd(); // Notify parent that dragging ended
    };

    // Global event listeners
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, dragStart]);

    return (
        <div
            ref={cardRef}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-grab select-none pointer-events-auto will-change-transform ${
                isDragging ? 'cursor-grabbing z-[100] scale-[1.05] transition-transform duration-100 ease-out' : ''
            }`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px) rotate(${position.rotation || 0}deg)`,
                transition: isDragging ? 'none' : hasDropped ? 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
                zIndex: isActive ? 100 : zIndex // Use the passed zIndex or default to active behavior
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            <div
                className="relative text-center font-khand font-bold text-Dark rounded-[14px] border-[4px] border-Dark min-w-[600px] max-w-[800px] px-4 py-8 backdrop-blur-sm leading-[1.1] tracking-tight overflow-hidden"
                style={{ backgroundColor: bgColor }}
            >
                <div 
                    className="uppercase text-center mb-2 leading-[0.7]"
                    style={{ 
                        color: bgColor === 'var(--Green)' ? 'var(--Yellow)' : 'var(--Green)' 
                    }}
                >
                    <span className="text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[9rem] font-black tracking-[-0.02em]">
                        {songName}
                    </span>
                </div>
                <div 
                    className="uppercase text-center mb-2"
                    style={{ 
                        color: bgColor === 'var(--Green)' ? 'var(--Yellow)' : 'var(--Green)' 
                    }}
                >
                    <span className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold">
                        BY {artistName}
                    </span>
                </div>
                <div 
                    className="uppercase text-center"
                    style={{ 
                        color: 'var(--Dark)' 
                    }}
                >
                    <span className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] font-bold tracking-[0.01em] leading-tight">
                        IS FASTEST ENTRY VIRAL50 INDIA
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DraggableCard;