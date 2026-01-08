import NavBar from "@/components/NavBar";
import SongCard from "@/components/SongCard";
import Hero from "@/sections/Hero";
import ClientComponent from "@/components/ClientComponent";

function page() {
  return (
    <div className=""> 
      <ClientComponent />
      <NavBar themeColor="Purple"/>
      <Hero id="hero-section" themeColor="Purple"/>
      <div className='bg-Dar absolute bg-linear-to-b from-[#1A2027]/10 via-Dark/60 to-Dark w-full h-25 -translate-y-25 z-10'></div>
      <div className="relative w-full py-10 bg-Dark  flex flex-col items-center justify-center gap-12">
        <div className='w-full flex items-center justify-center'>
          <div className="absolute -left-10 w-60 md:w-100 lg:w-220 z-1000 h-full bg-gradient-to-r from-[#1A2027] via-Dark/80 to-transparent backdrop-blue-xl blur-md "></div>
      <SongCard />
        </div>
      </div>
      {/* <Footer id="footer-section"/> */}
    </div>
  )
}

export default page