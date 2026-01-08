
interface ClientsProps {
  id: string;
}

type ForwardBoxType={
    imageUrl:string
}


function ForwardBox({imageUrl}:ForwardBoxType){
    return(
        <div
  className=" bg-Dark flex items-center justify-center font-bold overflow-hidden rounded-3xl shrink-0 w-36 h-26 sm:w-46 sm:h-30 md:w-58 md:h-40 lg:w-72 lg:h-48 rotate-[3.49deg] ">
<img src={imageUrl} alt="" className='w-[100] md:w-[150]' />
</div>

    )
}

function BackwarBox({imageUrl}:ForwardBoxType){
    return(
  <div  className=" bg-Green flex items-center justify-center font-bold overflow-hidden rounded-3xl shrink-0 w-36 h-26 sm:w-46 sm:h-30 md:w-58 md:h-40 lg:w-72 lg:h-48 -rotate-[2.51deg] p-2"
>
<img src={imageUrl} alt="" className='w-[100] md:w-[150]' />
</div>

    )
}


const Clients = ({ id }: ClientsProps) => {
    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     const checkMobile = () => {
    //         setIsMobile(window.innerWidth < 768);
    //     };

    //     checkMobile();
    //     window.addEventListener('resize', checkMobile);

    //     return () => window.removeEventListener('resize', checkMobile);
    // }, []);

    return (
        <div id={id} className='flex mh-screen md:h-max py-4 bg-Yellow overflow-hidden'>
            <div className="w-full text-Green font-sans flex flex-col items-center justify-center py-12 px-0">
                <h1 className="text-[5rem] md:text-[9.5rem] lg:text-[11.5rem]  font-khand font-extrabold uppercase mb-4 text-center">
                    Clients
                </h1>

                <div className='relative flex flex-col gap-3 pt-4'>
                    {/* {!isMobile ? ( */}
                        <>
                            <div className="w-full overflow-x- overflow-y-hodden h-full py-2">
                                <div className="flex flex-nowrap justify-start gap-4 sm:gap-4 md:gap-6 lg:gap-8 scroll-smooth -ml-[0vw] hover:ml-20 duration-500 transition-all">
                                    <ForwardBox imageUrl='/images/image1.png'/>
                                    <BackwarBox imageUrl='/images/image2.png'/>
                                      <ForwardBox imageUrl='/images/image3.png'/>
                                    <BackwarBox imageUrl='/images/image4.png'/>
                                      <ForwardBox imageUrl='/images/image5.png'/>
                                    <BackwarBox imageUrl='/images/image6.png'/>
                                      <ForwardBox imageUrl='/images/image7.png'/>
                                    <BackwarBox imageUrl='/images/image8.png'/>
                                      <ForwardBox imageUrl='/images/image9.png'/>
                                    <BackwarBox imageUrl='/images/image10.png'/>
                                </div>
                            </div>

      <div className="w-full overflow-x- overflow-y-hodden h-full py-2">
                    <div className="flex flex-nowrap justify-start gap-4 sm:gap-4 md:gap-6 lg:gap-8 scroll-smooth -ml-[3vw]  hover:ml-17 duration-500">
                                        <ForwardBox imageUrl='/images/image11.png'/>
                                    <BackwarBox imageUrl='/images/image12.png'/>
                                      <ForwardBox imageUrl='/images/image13.png'/>
                                    <BackwarBox imageUrl='/images/image9.png'/>
                                      <ForwardBox imageUrl='/images/image7.png'/>
                                    <BackwarBox imageUrl='/images/image8.png'/>
                                      <ForwardBox imageUrl='/images/image1.png'/>
                                    <BackwarBox imageUrl='/images/image10.png'/>
                                      <ForwardBox imageUrl='/images/image6.png'/>
                                    <BackwarBox imageUrl='/images/image3.png'/>
                                </div>
                            </div>

                                 <div className="w-full overflow-x- overflow-y-hodden h-full py-2">
                                <div className="flex flex-nowrap justify-start gap-4 sm:gap-4 md:gap-6 lg:gap-8 scroll-smooth ml-[2vw]  hover:ml-22 duration-200">
                                           <ForwardBox imageUrl='/images/image12.png'/>
                                    <BackwarBox imageUrl='/images/image3.png'/>
                                      <ForwardBox imageUrl='/images/image7.png'/>
                                    <BackwarBox imageUrl='/images/image10.png'/>
                                      <ForwardBox imageUrl='/images/image12.png'/>
                                    <BackwarBox imageUrl='/images/image11.png'/>
                                      <ForwardBox imageUrl='/images/image4.png'/>
                                    <BackwarBox imageUrl='/images/image3.png'/>
                                      <ForwardBox imageUrl='/images/image8.png'/>
                                    <BackwarBox imageUrl='/images/image6.png'/>
                                </div>
                            </div> 
                            {/* <div className="w-full overflow-x-hidden overflow-y-hidden h-full py-2">
                                <div className="flex flex-nowrap justify-start gap-4 scroll-smooth -ml-[3vw]">
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 -rotate-[2.51deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 rotate-[3.49deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 -rotate-[2.51deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 rotate-[3.49deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 -rotate-[2.51deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 rotate-[3.49deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 -rotate-[2.51deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 rotate-[3.49deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 -rotate-[2.51deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 rotate-[3.49deg]  font-bold rounded-4xl"></div>
                                </div>
                            </div>

                            <div className="w-full overflow-x-hidden overflow-y-hidden h-full py-2">
                                <div className="flex flex-nowrap justify-start gap-4 scroll-smooth ml-[2vw]">
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 rotate-[3.49deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 -rotate-[2.51deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 rotate-[3.49deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 -rotate-[2.51deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 rotate-[3.49deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 -rotate-[2.51deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 rotate-[3.49deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 -rotate-[2.51deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 rotate-[3.49deg]  font-bold rounded-4xl"></div>
                                    <div className="bg-Dark w-64 flex items-center justify-center h-44 -rotate-[2.51deg]  font-bold rounded-4xl"></div>
                                </div>
                            </div> */}
                        </>
                    {/* // ) : (
                    //     <>
                    //         <div className="w-full overflow-x-hidden overflow-y-hidden h-full py-1">
                    //             <div className="flex flex-nowrap justify-start gap-2 scroll-smooth -ml-[2vw]">
                    //                 {[...Array(12)].map((_, i) => (
                    //                     <div key={i} className={`bg-Dark w-24 flex items-center justify-center h-20 ${i % 2 === 0 ? 'rotate-[4deg]' : '-rotate-[3deg]'}  font-bold rounded-2xl`}></div>
                    //                 ))}
                    //             </div>
                    //         </div>

                    //         <div className="w-full overflow-x-hidden overflow-y-hidden h-full py-1">
                    //             <div className="flex flex-nowrap justify-start gap-2 scroll-smooth ml-[1vw]">
                    //                 {[...Array(12)].map((_, i) => (
                    //                     <div key={i} className={`bg-Dark w-24 flex items-center justify-center h-20 ${i % 2 === 0 ? '-rotate-[3deg]' : 'rotate-[4deg]'}  font-bold rounded-2xl`}></div>
                    //                 ))}
                    //             </div>
                    //         </div>

                    //         <div className="w-full overflow-x-hidden overflow-y-hidden h-full py-1">
                    //             <div className="flex flex-nowrap justify-start gap-2 scroll-smooth -ml-[4vw]">
                    //                 {[...Array(12)].map((_, i) => (
                    //                     <div key={i} className={`bg-Dark w-24 flex items-center justify-center h-20 ${i % 2 === 0 ? 'rotate-[3deg]' : '-rotate-[4deg]'}  font-bold rounded-2xl`}></div>
                    //                 ))}
                    //             </div>
                    //         </div>

                    //         <div className="w-full overflow-x-hidden overflow-y-hidden h-full py-1">
                    //             <div className="flex flex-nowrap justify-start gap-2 scroll-smooth ml-[2vw]">
                    //                 {[...Array(12)].map((_, i) => (
                    //                     <div key={i} className={`bg-Dark w-24 flex items-center justify-center h-20 ${i % 2 === 0 ? '-rotate-[4deg]' : 'rotate-[3deg]'}  font-bold rounded-2xl`}></div>
                    //                 ))}
                    //             </div>
                    //         </div>

                    //         <div className="w-full overflow-x-hidden overflow-y-hidden h-full py-1">
                    //             <div className="flex flex-nowrap justify-start gap-2 scroll-smooth -ml-[1vw]">
                    //                 {[...Array(12)].map((_, i) => (
                    //                     <div key={i} className={`bg-Dark w-24 flex items-center justify-center h-20 ${i % 2 === 0 ? 'rotate-[4deg]' : '-rotate-[3deg]'}  font-bold rounded-2xl`}></div>
                    //                 ))}
                    //             </div>
                    //         </div>
                    //     </>
                        
                    // )} */}
                </div>
            </div>
        </div>
    )
}

export default Clients