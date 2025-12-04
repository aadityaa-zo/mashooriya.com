import React from 'react'

const Footer = ({ id }) => {
  return (
    <div id={id} className='w-full md:h-screen bg-Green flex justify-end py-20 md:py-0 flex-col gap-8 md:gap-20'>

      <div className='px-[2.2rem]'>
        <img src="./workmark.svg" alt="" />
      </div>
      <div className='flex w-full bottom-5 px-[2.2rem]  md:pb-8 font-bold text-2xl md:text-5xl'>
        <div className='w-[50%] md:w-[40%] flex justify-between' >
          <a href="./">INSTAGRAM</a>
          <a href="./">TWITTER</a>
        </div>
        <div className='w-[50%] md:w-[60%] flex justify-end'>
          <a href="">LINKEDIN</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;