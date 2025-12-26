import SongCard from "@/components/SongCard";

function page() {
  return (
    <div className="bg-Yellow px-4 pt-10 md:p-[10vh] "> 
    <SongCard cardOnSong="gap-4" noRotate={true} />
    </div>
  )
}

export default page