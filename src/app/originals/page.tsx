import HeroLogo from '@/components/HeroLogo'
import SongCard from '@/components/SongCard'
import Hero from '@/sections/Hero'
import React from 'react'

function page() {
  return (
    <div>

      <HeroLogo color="Yellow"/>
      <Hero id="hero-section"/>
      <SongCard limit={3} />
    </div>
  )
}

export default page