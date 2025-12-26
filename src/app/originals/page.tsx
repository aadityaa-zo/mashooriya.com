import HeroLogo from '@/components/HeroLogo'
import SongCard from '@/components/SongCard'
import Hero from '@/sections/Hero'
import Link from 'next/link'

function page() {
  return (
    <div>

      <HeroLogo color="Yellow"/>
      <Hero id="hero-section"/>
      <div className='bg-Dar absolute bg-linear-to-b from-[#1A202]/10 via-Dark/60 to-Dark w-full h-25 -translate-y-25 z-10'></div>
      <div className="relative w-full min-h-screen bg-Dark  flex flex-col items-center justify-center gap-12">
        <div className=' flex items-center justify-center'>
            <SongCard limit={3} classToApply="border"/>
        </div>
            <Link href="/songs" className='bg-Purple text-Dark font-bold p-2 md:p-4 text-xl md:text-2xl uppercase'>explore more</Link>
            <div className='bg-Purple w-full text-center font-bold p-2 md:p-4 absolute bottom-0 left-0 text-Dark uppercase text-2xl md:text-4xl '>all rights reserved by mashooriya </div>
      </div>
    </div>
  )
}

export default page