import React from 'react'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'

function SignUn() {
  return (
    <Layout>
        <div className='my-8'>
            <div className='flex flex-row justify-center'>
                <form action="" className='w-full px-12 md:w-1/2 lg:w-2/6 flex flex-col justify-center'>
                <h1 className='text-2xl font-bold text-center py-6'>Sign Up</h1>
                    <label className='py-1 text-xl'>Username <span className='text-red-800'>*</span></label>
                    <input type="text" id="username" name="username" placeholder='Please enter the user name'className='px-4 py-2 mb-2 border' required/>

                    <label className='py-1 text-xl'>Email <span className='text-red-800'>*</span></label>
                    <input type="email" id="email" name="email" className='px-4 py-2 mb-2 border' placeholder='Please enter your email Id' required/>

                    <label className='py-1 text-xl'>Password <span className='text-red-800'>*</span></label>
                    <input type="password" id="password" name="password" className='px-4 py-2 mb-2 border' placeholder='Please enter the password' required/>

                    <label className='py-2 text-xl'>Mobile Number <span className='text-red-800'>*</span></label>
                    <input type="tel" id="mobileNumber" name="mobileNumber" className='px-4 py-2 mb-2 border' placeholder='Please enter your Mobile Number' required/>

                    <label className='py-2 text-xl'>Age</label>
                    <input type="string" id="age" name="age" className='px-4 py-2 mb-2 border' placeholder='Please enter your Age' required/>

                    <label >Gender</label>
                    <select id="gender" name="gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <button className='bg-blue-600 py-3 px-11 rounded-md mb-0 mt-4'>Register Now</button>
                    <p>Already have an account? <Link to={'auth/logIn'}>Log In</Link></p>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default SignUn
