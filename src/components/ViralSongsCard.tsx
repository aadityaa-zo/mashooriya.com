import React from "react";

interface ViralSongsCardProps {
  songName: string;
  artistName: string;
  image: string;
  rotation: number;
  bgColor?: string;
  simple?: boolean;
  classes?: string;
}

const ViralSongsCard = ({
  songName,
  artistName,
  image,
  rotation,
  bgColor = "var(--Green)",
  simple,
  classes,
}: ViralSongsCardProps) => {
  return (
    <div
      className={`font-khand text-Dark border-Dark relative overflow-hidden px-4 py-8 text-center font-bold tracking-tight backdrop-blur-sm ${classes}`}
      style={{ backgroundColor: bgColor,
        transform: `rotate(${rotation || 0}deg)`,

      }}
    >
      
          {!simple &&(
 <div className="top-0 flex w-full h-full items-end justify-start  ">
        <div
          className={`w-full ${
            bgColor === "var(--Green)"
              ? "bg-Green"
              : "bg-Yellow"        
  }`}
        >
          <div className="w-[40vw] sm:w[30vw] md:w-[30vw] lg:w-[20vw] overflow-hidden ">
          <div
            className="h-full text-left leading-none uppercase line-clamp-1 overflow-hidden"
            style={{
              color:
                bgColor === "var(--Green)" ? "var(--Yellow)" : bgColor === "var(--Yellow)" ? "var(--Green)":"text-Dark",
            }}
          >
            <span className="text-[2rem] font-black tracking-[-0.02em] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] line-clamp-1 overflow-hidden">
              {songName}
            </span>
          </div>

          <div
            className=" text-left leading-none uppercase line-clamp-1 overflow-hidden"
            style={{
              color:
               bgColor === "var(--Green)" ? "var(--Yellow)" : bgColor === "var(--Yellow)" ? "var(--Green)":"text-Dark",
            }}
          >
            <span className="text-[0.5rem] font-extrabold sm:text-[1rem] md:text-[2rem] lg:text-[2rem] line-clamp-1 overflow-hidden">
              BY {artistName}
            </span>
          </div>
        
          </div>
        </div>
       </div>
          )}


{/* image section */}
      <div className="relative w-full top-0 right-0 left-0 h-full">
        <img src={image} alt="" className="w-[40vw] sm:w[30vw] md:w-[30vw] lg:w-[20vw]" loading="lazy" />
      </div>

      <div className="absolute top-0 flex w-full h-full items-end justify-start  ">
        <div
          className={`w-full py-4 ${
            bgColor === "var(--Green)"
              ? "from-Green via-Green/70 to-Green/20 bg-linear-to-t"
              : bgColor === "var(--Yellow)"
              ?"from-Yellow via-Yellow/70 to-Yellow/20 bg-linear-to-t"
              :"from-Purple via-Purple/70 to-Purple/20 bg-linear-to-t"
          }`}
        >
          {!simple? (
     <div
            className="mb-2 h-full text-left leading-[0.7] uppercase"
            style={{
              color:
                bgColor === "var(--Green)" ? "var(--Yellow)" : bgColor === "var(--Yellow)" ? "var(--Green)":"var(--Purple)",
            }}
          >
            <span className="text-[2rem] font-black tracking-[-0.02em] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] flex flex-col gap-1">
              <p>viral 50</p>
              <p>spotify india</p>
            </span>
          </div>
          ):(
     <div className="top-0 flex w-full h-full items-end justify-start  ">
        <div
          className={`w-full ${
          bgColor === "green"
                ? "bg-Green"
                : bgColor === "yellow"
                ? "bg-Yellow"
                : "bg-Purple"    
  }`}
        >
          <div className="w-[40vw] sm:w[30vw] md:w-[30vw] lg:w-[20vw] overflow-hidden ">
          <div
            className="h-full text-left leading-none uppercase line-clamp-1 overflow-hidden"
            style={{
              color:
                bgColor === "var(--Green)" ? "var(--Yellow)" : bgColor === "var(--Yellow)" ? "var(--Green)":"text-Dark",
            }}
          >
            <span className="text-[2rem] font-black tracking-[-0.02em] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] line-clamp-1 overflow-hidden">
              {songName}
            </span>
          </div>

          <div
            className=" text-left leading-none uppercase line-clamp-1 overflow-hidden"
            style={{
              color:
                 bgColor === "var(--Green)" ? "var(--Yellow)" : bgColor === "var(--Yellow)" ? "var(--Green)":"text-Dark",
            }}
          >
            <span className="text-[0.5rem] font-extrabold sm:text-[1rem] md:text-[2rem] lg:text-[2rem] line-clamp-1 overflow-hidden">
              BY {artistName}
            </span>
          </div>
        
          </div>
        </div>
       </div>

          )}
          {/* <div
            className="mb-2 h-full text-left leading-[0.7] uppercase"
            style={{
              color:
                bgColor === "var(--Green)" ? "var(--Yellow)" : "var(--Green)",
            }}
          >
            <span className="text-[2rem] font-black tracking-[-0.02em] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] flex flex-col gap-1">
            
              <p>viral 50</p>
              <p>spotify india</p>
            </span>
          </div> */}

          {/* <div
            className="mb-2 text-left leading-none uppercase"
            style={{
              color:
                bgColor === "var(--Green)" ? "var(--Yellow)" : "var(--Green)",
            }}
          >
            <span className="text-[0.5rem] font-extrabold sm:text-[1rem] md:text-[2rem] lg:text-[2rem]">
               BY {artistName}
              spotify india
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViralSongsCard;
