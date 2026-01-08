// for /originals page

interface ViralSongsCardProps2 {
  songName: string;
  artistName: string;
  image: string;
  rotation: number;
  positioning:string
}

const ViralSongsCard2 = ({
  songName,
  artistName,
  image,
  rotation,
  positioning
}: ViralSongsCardProps2) => {
  return (
    <div
      className={`font-khand text-Dark border-Dark relative max-w-80 lg:max-w-100 scale-105 md:scale-100 overflow-hidden p-3 text-center font-bold tracking-tighter border bg-Purple h-full ${positioning}`}
      style={{
        transform: `rotate(${rotation || 0}deg)`,
      }}
    >      
        {/* image section */}
      <div className={`w-full`}>
        <img src={image} alt="" className="w[100%] md:w-[30vw] lg:w-[20vw]" loading="lazy" />
      </div>

      <div className="flex w-full h-full items-end justify-start  ">
        <div className={`w-full pt-4`}>
          <div className="flex w-full h-full items-end justify-start  ">
              <div className={`w-full bg-Purple`} >

          <div className="overflow-hidden ">
          <div className="h-full text-left leading-none uppercase overflow-hidden text-Dark">
            <span className="font-black tracking-[-0.02em] text-[3rem] md:text-[3rem] lg:text-[4rem] whitespace-nowrap overflow-hidden leading-[0.8]">
              {songName}
            </span>
          </div>

          <div
            className=" text-left leading-none uppercase line-clamp-1 overflow-hidden text-Dark">
            <span className="text-[1.5rem] font-extrabold sm:text-[1rem] md:text-[2rem] lg:text-[2rem] line-clamp-1 leading-[0.8] overflow-hidden">
              BY {artistName}
            </span>
          </div>
        
          </div>
        </div>
       </div>
        </div>
      </div>
    </div>
  );
};

export default ViralSongsCard2;
