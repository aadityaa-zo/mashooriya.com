import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// const urls = [
//     "https://cdn.prod.website-files.com/61c05cf1fe36bc5723b06446/65a41e0fd45a9d6862d11e06_Schlu%CC%88tersche.avif",
//     "https://cdn.prod.website-files.com/61c05cf1fe36bc5723b06446/65a41d6337b6a1c4fafc1416_Zalando.avif",
//     "https://cdn.prod.website-files.com/61c05cf1fe36bc5723b06446/65a41d6f4d2aa04c7934ac13_Google.avif",
//     "https://cdn.prod.website-files.com/61c05cf1fe36bc5723b06446/65a41d7b6c755c83b6147b03_DHL.avif",
//     "https://cdn.prod.website-files.com/61c05cf1fe36bc5723b06446/65a41d8603d49a3f70f8d252_Coca%20Cola.avif",
//     "https://cdn.prod.website-files.com/61c05cf1fe36bc5723b06446/65a41da0d45a9d6862d0eb64_Ergo.avif",
//     "https://cdn.prod.website-files.com/61c05cf1fe36bc5723b06446/65a41df48807bcdfaec92756_Talentmagnet.avif",
//     "https://cdn.prod.website-files.com/61c05cf1fe36bc5723b06446/65a41dcf390d57d9169710d7_Mercedes%20Benz.avif",
//     "https://cdn.prod.website-files.com/61c05cf1fe36bc5723b06446/65a41dad0bcfc7e70637c28a_smava.avif",
//     "https://cdn.prod.website-files.com/61c05cf1fe36bc5723b06446/65a41e017b3b901ff117e783_Radyant.avif",
// ];
// const urlss = [...urls, ...urls];

const Marque = () => {
    const [width, setWidth] = useState<number | null>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!trackRef.current) return;
            const width = trackRef.current.getBoundingClientRect().width;
            const gap = parseInt(window.getComputedStyle(trackRef.current).gap);

            const halfWidth = -1 * ((width + gap) / 2);

            gsap.to(trackRef.current, {
                x: "-100vw",
                repeat: -1,
                duration: 15,
                ease: "none",
            });

        
        },
        { scope: trackRef, revertOnUpdate: true }
    );

    return (
        <div className="bg-Green">
            <div className="w-full text-yellow overflow-clip flex items-center">
                <div ref={trackRef} className="flex translate-x-[] gap-10 shrink-0">
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        SHARMEELI
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        RING A ROSE
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        KAHI TERI BOL
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        SHARMEELI
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        RING A ROSE
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        KAHI TERI BOL
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        SHARMEELI
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        RING A ROSE
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        KAHI TERI BOL
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        SHARMEELI
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        RING A ROSE
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                    <span className="flex-none mt-3 text-[2.8rem] md:text-[3.8rem] lg:text-[4rem] font-khand font-extrabold text-Yellow whitespace-nowrap leading-none">
                        KAHI TERI BOL
                    </span>
                    <img className="h-12 md:h-16 w-auto" src="/logo.webp" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Marque;