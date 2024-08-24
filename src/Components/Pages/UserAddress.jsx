import React from 'react'
import Layout from '../../Layout/Layout'

function UserAddress() {
  return (
    // <Layout>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-2/6 bg-white shadow-md m-10'>
            <form className='w-full py-4 px-4'>
                <h1 className='text-center font-bold text-2xl pb-4'>Your Address</h1>

                <lable className="">Village Name <span className='text-red-800'>*</span></lable>
                <input type="text" className="w-full p-2 mb-4 border" placeholder="Please enter your village name"/>
                <lable className="">Post Office <span className='text-red-800'>*</span></lable>
                <input type="text" className="w-full p-2 mb-4 border" placeholder="Please enter your Post office"/>
                <lable className="">Police Station <span className='text-red-800'>*</span></lable>
                <input type="text" className="w-full p-2 mb-4 border" placeholder="Please enter your Police Station"/>
                <lable className="">Pin Code <span className='text-red-800'>*</span></lable>
                <input type="text" className="w-full p-2 mb-4 border" placeholder="Please enter your Pin Code"/>
                <lable className="">Land Mark<span className='text-red-800'>*</span></lable>
                <input type="text" className="w-full p-2 mb-4 border" placeholder="Please enter your Lank Mark"/>
                {/* <lable className="">Village Name <span className='text-red-800'>*</span></lable>
                <input type="text" className="w-full p-2 mb-4" placeholder="Please enter your village name"/> */}

                <button className='bg-blue-600 py-3 px-11 rounded-md mb-0 mt-4 w-full text-white'>Add Now</button>
            </form>
        </div>
      </div>
    // </Layout>
  )
}

export default UserAddress
