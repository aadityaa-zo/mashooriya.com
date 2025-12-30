import React from "react";

interface ViralSongsCardProps3 {
  songName: string;
  artistName: string;
  image: string;
}

const ViralSongsCard2 = ({
  songName,
  artistName,
  image
}: ViralSongsCardProps3) => {
  return (
    <div
      className={`font-khand text-Dark border-Dark relative min-w-80 lg:min-w-100 overflow-hidden px-4 p-8 text-center font-bold tracking-tighter border bg-Purple`}
    >      
        {/* image section */}
      <div className={`w-full`}>
        <img src={image} alt="" className="w- md:w-[30vw] lg:w-[20vw]" loading="lazy" />
      </div>

      <div className="flex w-full h-full items-end justify-start  ">
        <div className={`w-full pt-4`}>
          <div className="flex w-full h-full items-end justify-start  ">
              <div className={`w-full bg-Purple`} >

          <div className="overflow-hidden ">
          <div className="h-full text-left leading-none uppercase overflow-hidden text-Dark">
            <span className="font-black tracking-[-0.02em] text-[3rem] md:text-[3rem] lg:text-[4rem] whitespace-nowrap overflow-hidden leading-[0.8] line-clamp-1">
              {songName}
            </span>
          </div>

          <div
            className=" text-left leading-none uppercase line--1 overflow-hidden text-Dark ">
            <span className="text-[1rem] font-extrabold sm:text-[1rem] md:text-[2rem] lg:text-[2rem] line-clamp-1">
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
