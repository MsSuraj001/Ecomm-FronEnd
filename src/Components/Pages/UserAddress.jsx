import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import Home from '../../assets/svg Icons/Home'
import Work from '../../assets/svg Icons/Work'

function UserAddress() {
  const [userAddressState, setUserAddressState] = useState({
      FullName : '',
      PhoneNumber: '',
      State : '',
      City : '',
      PinCode : '',
      LandMark : '',
      RoadName : '',
  })

  function handleUserInput(e){
    const {name, value} = e.target
    setUserAddressState({
      ...userAddressState,
      [name] : value
    })
  }

  function handleUserSubmit(e){
    e.preventDefault()
    console.log(userAddressState)
  }
  return (
    // <Layout>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='lg:w-2/6 bg-white shadow-md m-10 w-full md:w-2/4 lg:px-8'>
            <form className='w-full py-4 px-4 '>
                <h1 className='text-center font-bold text-2xl pb-4'>Your Address</h1>

                <label>Full Name <span className='text-red-800'>*</span></label>
                <input 
                    type="text" 
                    name='FullName'
                    onChange={handleUserInput}
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your full name"
                />

                <label>Phone Number<span className='text-red-800'>*</span></label>
                <input 
                    type="text" 
                    name='PhoneNumber'
                    onChange={handleUserInput}
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your Post office"/>

                <label>State <span className='text-red-800'>*</span></label>
                <input 
                    type="text" 
                    name='State'
                    onChange={handleUserInput}
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your State"/>

                <label>City<span className='text-red-800'>*</span></label>
                <input 
                    type="text" 
                    name='City'
                    onChange={handleUserInput}
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your City"/>

                <label>Pin Code <span className='text-red-800'>*</span></label>
                <input 
                    type="Number" 
                    name='PinCode'
                    onChange={handleUserInput}
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your Pin Code"/>

                <label>Land Mark<span className='text-red-800'>*</span></label>
                <input 
                    type="text" 
                    name='LandMark'
                    onChange={handleUserInput}
                    className="w-full p-2 mb-4 border" 
                    placeholder="Please enter your Lank Mark"/>

                <label>Road name, Area, Colony<span className='text-red-800'>*</span></label>
                <input 
                    type="text" 
                    name='RoadName'
                    onChange={handleUserInput}
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

                <button className='bg-blue-600 py-3 px-11 rounded-md mb-0 mt-4 w-full text-white' onClick={handleUserSubmit}>Save Address</button>
            </form>
        </div>
      </div>
    // </Layout>
  )
}

export default UserAddress
