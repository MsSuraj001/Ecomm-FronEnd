import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Layout/Layout'

function LogIn() {
  return (
    <Layout>
    <div className='h-full w-full my-8'>
    <div className='flex flex-row justify-center h-full'>
        <form action="" className='w-full px-12 md:w-1/2 lg:w-2/6 flex flex-col justify-center'>
        <h1 className='text-2xl font-bold text-center py-6'>Sign In</h1>

            <label className='py-1 text-xl'>Email <span className='text-red-800'>*</span></label>
            <input type="email" id="email" name="email" className='px-4 py-2 mb-2 border' placeholder='Please enter your email Id' required/>

            <label  className='py-1 text-xl'>Password <span className='text-red-800'>*</span></label>
            <input type="password" id="password" name="password" className='px-4 py-2 mb-2 border' placeholder='Please enter the password' required/>

            <button className='bg-blue-600 py-3 px-11 rounded-md mb-0 mt-4'>Log In</button>
            <p>Don't have an account ? <Link to='/auth/signUp' className='text-blue-400'>Register Now</Link></p>
        </form>
    </div>
</div>
</Layout>
  )
}

export default LogIn;
