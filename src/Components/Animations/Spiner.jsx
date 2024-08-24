import React from 'react'

function Spiner(){
  return (
    <div className='h-[80vh] w-[100vw] bg-white flex justify-center items-center'>
      <div>
        {/* this is spinner */}
        <div className='w-16 h-16 border-y-4 border-blue-600 rounded-full my-4'></div>
        <h1 className='text-xl'>Loding . . .</h1>
      </div>
    </div>
  )
}

export default Spiner
