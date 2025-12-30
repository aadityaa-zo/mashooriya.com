// import HeroMarquee from '../components/HeroMarquee';

import Link from "next/link";

interface HeroProps {
  id: string;
  themeColor: string;
}

const Hero = ({ id , themeColor}: HeroProps) => {
    return (
        <section
            id={id}
            className="relative w-full h-screen bg-Dark flex justify-center overflow-hidden"
        >
          <div className='abolute top-0 left-0 w-full h-full'>
            <div className='absolute top-0 left-0 w-full h-full z-10 bg-black/80'>
            </div>
            
            {/* <img src="/heroimg.png"
                className='w-full h-full relative top-0 left-0 object-fit '
                alt=""
            /> */}
            <video
                className="absolute inset-0 hidden h-full w-full object-cover md:block"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/desktop-bg.mp4" type="video/mp4" />
            </video>

            {/* Mobile video */}
            <video
                className="absolute inset-0 block h-full w-full object-cover md:hidden"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/mobile-bg.mp4" type="video/mp4" />
            </video>

         <div className='absolute z-100 bottom-0 left-0 w-full pb-4 md:pb-6 flex flex-col items-center justify-center uppercase'>
            
          <div className='relative flex items-center gap-4 bg-white/10 p-2 '>
           <div className={`absolute -top-8 -left-2 -rotate-2 bg-${themeColor} px-4 text-xl md:text-2xl tracking-tight text-Dark font-semibold`}>latest</div>
                <div> <img src="/albumart.png" alt="" className="w-12"/> </div>
                <div className={`text-${themeColor}  md:tracking-normal tracking-tighter leading-[0.8] font-bold`}>
                    <p className="md:text-2xl text-xl ">khamma ghanni</p>
                    <span className="text-2sm ">the u.d, AAduz</span>
                </div>
                <div>
                    <Link href="https://open.spotify.com/track/459tc67J7MQlP0r0JWlu5g?si=athFYm3UQ_a0tcJZfWPDRA">
                    <span className={`md:w-12 mr-2 w-9 h-9 md:h-12 flex items-center justify-around ${themeColor==="Purple"? "bg-Purple/50":"bg-Yellow/50"} rounded-full`}>
                        <span className={`md:w-9 w-7 md:h-9 h-7 bg-${themeColor} rounded-full flex items-center justify-center  text-Dark text-[0.6rem] md:text-[1rem] font-bold`}>play</span>
                    </span>
                    </Link>
                </div>
            </div>

         <div className='text-xl flex flex-col items-center justify-center md:gap-2'>
            <p className={`md:text-4xl text-2xl pt-10 text-${themeColor} font-bold`}>scroll down</p>
            {
            themeColor === "Purple" ? 
            <img src="/FramePurple.svg" alt="" className='md:scale-125'/>
            : <img src="/Frame.svg" alt="" className='md:scale-125'/>
            }

            </div>
         </div>

            </div>


        </section>
    )
}

export default Hero;