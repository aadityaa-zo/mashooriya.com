import Link from "next/link";

interface ClipsnreelsProps {
  id: string;
}

function Clipsnreels({ id }: ClipsnreelsProps) {
    return (
        <div className="relative overflow-hidden">
            <div
                className='bg-Green min-h-screen md:px-20 py-20 pb-[30vh]'
            >

                <div className="relative text-Dark text-center text-[5rem] sm:text-[8rem] md:text-[9.5rem] lg:text-[12rem] uppercase">
                    <h1
                        className="translate-y-7 leading-[0.78] font-bold whitespace-nowrap md:whitespace-normal"
                    >
                        our <br />
                        most viewed <br />
                        clips & reels
                    </h1>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="relative w-50 sm:min-w-100 md:min-w-250 lg:min-w-350 xl:min-w-400 flex items-center justify-center h-[60vh] sm:h-[80vh]">
                        <div className="absolute min-w-100 sm:min-w-125 max-w-130 h-full -rotate-3  md:left-0 border-black border-4">
                            <div className="w-full h-full bg-Purple"></div>
                        </div>  
                        <div className="absolute min-w-100 sm:min-w-125 max-w-130 h-full rotate-2 md:left-1/5 border-black border-4">
                            <div className="w-full h-full bg-Yellow"></div>
                        </div>
                        <div className="absolute min-w-100 sm:min-w-125 max-w-130 h-full -rotate-3 md:left-2/5 border-black border-4">
                            <div className="w-full h-full bg-Purple"></div>
                        </div>
                        <div className="absolute min-w-100 sm:min-w-125 max-w-130 h-full rotate-3  md:right-0 border-black border-4">
                            <div className="w-full h-full bg-Yellow"></div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center pt-10">
                    <Link href="https://instagram.com/mashooriya" className="text-Dark bg-Purple text-2xl md:text-4xl uppercase font-bold px-4 py-2" target="_blank"> explore more...</Link>
                </div>

            </div>
            <div className="pointer-events-none absolute -inset-1 bg-Yellow [clip-path:polygon(0_90%,100%_85%,100%_100%,0_100%)]" />
        </div>

    )
}

export default Clipsnreels