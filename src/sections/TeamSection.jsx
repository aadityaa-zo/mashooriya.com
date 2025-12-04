import React from 'react'

const TeamSection = ({id}) => {
    return (
        <div id={id} className='w-full h-max overflow-hidden min-h-screen bg-Yellow px-4 py-12 md:py-20 flex items-center'>
            <div className='max-w-7xl mx-auto w-full'>
                {/* Team Cards Container */}
                <div className='flex flex-col lg:flex-row gap-8 lg:items-start items-center justify-center lg:justify-center -translate-x-3'>

                    {/* Aditya Mishra Card */}
                    <div className='z-2 relative transform lg:-rotate-2 hover:rotate-0 transition-transform duration-300 lg:translate-x-15 lg:-translate-y-8 translate-y-12'>
                        <div className='bg-Purple border-4 border-Dark rounded-lg overflow-hidden shadow-2xl w-full -rotate-3'>
                            {/* Image Container */}
                            <div className='relative h-60 md:h-100 md:w-140 md:px-1 overflow-hidden'>
                                <img
                                    src="/About/Aditya_Mishra.png"
                                    alt="Aditya Mishra"
                                    className='w-full h-full rotate-3'
                                />
                            </div>
                            {/* Name Label */}
                            <div className='bg-Purple px-2 py-1'>
                                <h3 className='text-Dark font-bold text-6xl md:text-8xl lg:text-8xl text-center'>
                                    ADITYA MISHRA
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Anmol Dhand Card */}
                    <div className='z-1 relative transform lg:rotate-2 hover:rotate-0 transition-transform translate-x-6 duration-300'>
                        <div className='bg-Green border-4 border-Dark rounded-lg overflow-hidden shadow-2xl w-full rotate-3'>
                            {/* Image Container */}
                            <div className='relative h-60 md:h-100 md:w-140 md:px-1 overflow-hidden '>

                                <img
                                    src="/About/Anmol_Dhand.png"
                                    alt="Anmol Dhand"
                                    className='w-full h-full -rotate-2'
                                />
                            </div>
                            {/* Name Label */}
                            <div className='bg-Green px-2 py-1'>
                                <h3 className='text-Yellow font-bold text-6xl md:text-8xl lg:text-8xl text-center'>
                                    ANMOL DHAND
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Company Description */}
                <div className='mt-12 md:mt-16 lg:mt-20 text-center'>
                    <p className='text-Dark font-bold text-2xl px-4 md:text-3xl lg:text-4xl max-w-5xl mx-auto leading-[0.8]'>
                        MASHOORIYA FUSES MUSIC, CULTURE, AND STRATEGY TO AMPLIFY INDEPENDENT VOICES. WE
                        CRAFT CAMPAIGNS THAT FEEL LIKE CULTURE ITSELF—DRIVEN BY STREET INSIGHT AND SHARP
                        CREATIVITY SO ARTISTS, BRANDS, AND STORIES DON'T JUST APPEAR, THEY RESONATE.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TeamSection