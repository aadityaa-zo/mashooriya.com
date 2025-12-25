import { getPlaylistSongs } from "@/app/lib/spotify";

type SongCardProps = {
  limit?: number;
};

export default async function SongCard({ limit }: SongCardProps) {
  const songs = await getPlaylistSongs("7cHWpjlm7bWzOSAsLSxz7h");

  // If limit exists, take only that many songs
  const visibleSongs = limit ? songs.slice(0, limit) : songs;

  return (
    <main>
      <h1>Songs</h1>

      {visibleSongs.map((song: any) => (
        <div key={song.id} style={{ marginBottom: 20 }}>
          <img src={song.image} width={60} />
          <p>{song.name}</p>
          <p>{song.artists}</p>

          {song.preview && (
            <audio controls src={song.preview} />
          )}
        </div>
      ))}
    </main>
  );
}
