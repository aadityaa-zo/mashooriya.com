import React from 'react'

function loading() {
  return (
    <div className={`loader-overlay items-center justify-center w-full h-full flex flex-col`}>
      {/* <img src="/logo.svg" alt="" className="w-[30vw] blink" /> */}
      <p className="text-[2rem] py-4">LOADING<span className="">...</span> </p>
      {/* <div className="loader-spinner"></div> */}
    </div>
  )
}

export default loading