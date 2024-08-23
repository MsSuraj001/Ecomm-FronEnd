import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate();
  return (
    <div className='h-[100vh] w-[100vw] bg-blue-200 flex flex-col justify-center items-center'>
      <h1 className='text-white text-8xl font-bold'>404</h1>
      <h1 className='text-white text-4xl font-bold'>Page Not Found</h1>
      <button 
            className='bg-blue-600 py-3 px-11 rounded-md mb-0 mt-4 text-white hover:bg-blue-500'
            onClick={()=>navigate(-1)}
            >Go Back</button>
    </div>
  )
}

export default NotFound
