import Instascroll from "../../public/Instascroll.png"
import SwipeUp from "../../public/SwipeUp.png"

function Clipsnreels({ id }) {
    return (
        <div className="relative overflow-hidden">
            <div
                className='relative bg-Green min-h-screen md:px-20 py-20 pb-[30vh]'
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

                <div className="w-full flex items-center justify-center relative ">
                    <div className="relative w-[200px] sm:w-[250px] md:w-[400px] lg:[500px] -translate-y-10 ">
                        <img src={Instascroll} alt="" className="w-full h-full" />
                        <img src={SwipeUp} alt="" className="absolute md:bottom-10 sm:bottom-6 sm:-right-30 bottom-4 -right-25 md:-right-50 w-[80px] sm:w-[100px] md:w-[140px] lg:w-[170px] " />
                    </div>
                </div>

            </div>
            <div className="pointer-events-none absolute -inset-1 bg-Yellow [clip-path:polygon(0_90%,100%_85%,100%_100%,0_100%)]" />
        </div>

    )
}

export default Clipsnreels