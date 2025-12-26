// import HeroMarquee from '../components/HeroMarquee';

interface HeroProps {
  id: string;
}

const Hero = ({ id }: HeroProps) => {
    return (
        <section
            id={id}
            className="relative w-full h-screen bg-Dark flex justify-center overflow-hidden"
        >
          <div className='abolute top-0 left-0 w-full h-full'>
                <div className='absolute top-0 left-0 w-full h-full z-10 bg-black/50'></div>
                      <img src="/heroimg.png"
                          className='w-full h-full relative top-0 left-0 object-fit '
                          alt=""/>



         <div className='absolute z-100 bottom-0 left-0 w-full pb-4 md:pb-6 flex flex-col items-center justify-center uppercase'>

            <div className='relative flex items-center gap-4 bg-white/10 p-0 md:p-2 '>
           <div className='absolute -top-8 -left-2 -rotate-2 bg-Yellow px-4 text-xl md:text-2xl tracking-tight text-Dark font-semibold'>latest</div>
                <div> <img src="/albumart.png" alt="" /> </div>
                <div className='md:text-2xl text-xl md:tracking-normal tracking-tighter leading-[0.9] font-semibold'>
                    <p>khamma ghanni</p>
                    <span>the u.d, AAduz</span>
                </div>
                <div>
                    <span className='md:w-20 w-12 h-12 md:h-20 flex items-center justify-around bg-Yellow/50 rounded-full md:p-2'>
                        <span className='md:w-15 w-10 md:h-15 h-10 bg-Yellow rounded-full flex items-center justify-center  text-Dark text-md md:text-2xl font-semibold'>play</span>
                    </span>
                </div>
            </div>

         <div className='text-xl flex flex-col items-center justify-center md:gap-2'>
            <p className='md:text-4xl text-2xl pt-10 text-Yellow font-bold'>scroll down</p>
            <img src="/Frame.svg" alt="" className='md:scale-125'/>
         </div>
         </div>

            </div>


        </section>
    )
}

export default Hero;