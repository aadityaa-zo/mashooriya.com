import React from 'react'

type OurClientSaysPropType = {
    id: string;
}

type CardDataType = {
    name: string;
    text:string;
    artist:string;
    cardClasses:string;
}

type CardPropsType ={
    Card:CardDataType;
}
function Card({Card}:CardPropsType) {
    return (
          <div className={`absolute w-full p-6 shadow-2xl transition-all duration-400 uppercase tracking-tighter hover:z-100 ${Card.cardClasses} `}>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-3">{Card.name} <span className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold">{Card.artist}</span></h2>
            <p className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-bold uppercase leading-[0.8]">
            {Card.text}
            </p>
          </div>
    );
};


const cardData = [
    {
        name: "frappe ash",
        text: "AS SOMEONE IS AS PERSONAL AS POSSIBLE, I'S IMPORTANT FOR ME TO HAVE AN AMAZING TEAM WHO I CAN TRUST. THEY ARE NOT ONLY DEDICATED AND PROFESSIONAL, BUT HAVE BECOME FRIENDS AND FAMILY, BEING EXCITED TO WORK WITH THEM ON ALL UPCOMING PROJECTS.",
        artist: "artist",
        cardClasses:"bg-Yellow -top-20 -right-10 -rotate-6 hover:rotate-3"
    },  
    {
        name: "frappe ash",
        text: "AS SOMEONE IS AS PERSONAL AS POSSIBLE, I'S IMPORTANT FOR ME TO HAVE AN AMAZING TEAM WHO I CAN TRUST. THEY ARE NOT ONLY DEDICATED AND PROFESSIONAL, BUT HAVE BECOME FRIENDS AND FAMILY, BEING EXCITED TO WORK WITH THEM ON ALL UPCOMING PROJECTS.",
        artist: "artist",
        cardClasses:"bg-Green top-30 right-10 rotate-6 hover:-rotate-3"
    },  
    {
        name: "frappe ash",
        text: "AS SOMEONE IS AS PERSONAL AS POSSIBLE, I'S IMPORTANT FOR ME TO HAVE AN AMAZING TEAM WHO I CAN TRUST. THEY ARE NOT ONLY DEDICATED AND PROFESSIONAL, BUT HAVE BECOME FRIENDS AND FAMILY, BEING EXCITED TO WORK WITH THEM ON ALL UPCOMING PROJECTS.",
        artist: "artist",
        cardClasses:"bg-Purple top-70 -right-10 -rotate-10 hover:-rotate-3"
    },
]


export default function OurClientSays({id}:OurClientSaysPropType) {
   return (
    <div className="min-h-screen bg-Dark flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full">
        <h1 className="text-[4rem] sm:text-[8rem] md:text-[9rem] lg:text-[11rem] font-black text-yellow-100 text-center mb-16 tracking-tight leading-[0.8]">
          WHAT OUR<br />CLIENT SAYS!
        </h1>

       <div className="relative h-96 md:h-100 w-xl md:w-3xl mx-auto">

          {cardData.map((card, idx)=>(
            <Card Card={card} key={idx}/>
          ))}

        </div>
      </div>
    </div>
  );
}

{/* export default OurClientSays */}