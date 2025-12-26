import { getPlaylistSongs } from "@/app/lib/spotify";
import ViralSongsCard from "../components/ViralSongsCard";
import Viral from "@/sections/Viral";

type SongCardProps = {
  limit?: number;
  cardOnSong?:string;
  id?:string;
  noRotate?: boolean;
  classToApply?:string;
};

export default async function SongCard({ limit, cardOnSong  , id ,noRotate,classToApply}: SongCardProps) {
  const songs = await getPlaylistSongs("7vLaoL118tK1gksUM4ddje");

  // If limit exists, take only that many songs
  const visibleSongs = limit ? songs.slice(0, limit) : songs;

  return (
<div className={`w-full flex items-center justify-center flex-wrap ${cardOnSong}`}>


      {visibleSongs.map((song: any, index:number) => {

        const rotation =  noRotate ? 0 : index === 0 ? 2 : index === 1 ? -2 : 1;
        const classes =  classToApply;

        return(
        <div key={song.id} style={{ marginBottom: 20 }} className=" w- ">
          <ViralSongsCard
            image={song.image}
            songName={song.name}
            artistName={song.artists}
            bgColor="var(--Purple)"
            rotation={rotation}
            simple={true}
            classes={classes}
            />
            </div>
        )
})}

</div>
  );
}
