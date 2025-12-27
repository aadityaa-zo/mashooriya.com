import React from 'react'

function loading() {
  return (
    <div className={`loader-overlay items-center justify-center w-full h-full flex flex-col`}>
      <p className="text-[2rem] py-4">LOADING<span className="">...</span> </p>
    </div>
  )
}

export default loading