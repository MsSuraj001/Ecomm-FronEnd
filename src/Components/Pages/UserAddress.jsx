import React from 'react'
import Layout from '../../Layout/Layout'
import Home from '../../assets/svg Icons/Home'
import Work from '../../assets/svg Icons/Work'

function UserAddress() {
  return (
    // <Layout>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='lg:w-2/6 bg-white shadow-md m-10 w-full md:w-2/4 lg:px-8'>
            <form className='w-full py-4 px-4 '>
                <h1 className='text-center font-bold text-2xl pb-4'>Your Address</h1>

                <lable className="">Full Name <span className='text-red-800'>*</span></lable>
                <input 
                    type="text" 
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your full name"
                />

                <lable className="">Phone Number<span className='text-red-800'>*</span></lable>
                <input 
                    type="text" 
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your Post office"/>

                <lable className="">State <span className='text-red-800'>*</span></lable>
                <input 
                    type="text" 
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your State"/>

                <lable className="">City<span className='text-red-800'>*</span></lable>
                <input 
                    type="text" 
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your City"/>

                <lable className="">Pin Code <span className='text-red-800'>*</span></lable>
                <input 
                    type="Number" 
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your Pin Code"/>

                <lable className="">Land Mark<span className='text-red-800'>*</span></lable>
                <input 
                    type="text" 
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your Lank Mark"/>

                <lable className="">Road name, Area, Colony<span className='text-red-800'>*</span></lable>
                <input 
                    type="text" 
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your Road Name, Area, Colony"/>

                <div className='flex flex-row gap-2'>
                  {/* this is the home */}
                  <div className='flex justify-center items-center gap-2 border-2 px-4  rounded-full hover:border-orange-300'>
                      <Home className="h-8 w-8"/>
                      <p>Home</p>
                  </div>

                  {/* this is the Work */}
                  <div className='flex justify-center items-center gap-2 border-2 px-4 rounded-full hover:border-orange-300'>
                      <Work className="h-6 w-6"/>
                      <p>Work</p>
                  </div>
                </div>

                <button className='bg-blue-600 py-3 px-11 rounded-md mb-0 mt-4 w-full text-white'>Save Address</button>
            </form>
        </div>
      </div>
    // </Layout>
  )
}

export default UserAddress
