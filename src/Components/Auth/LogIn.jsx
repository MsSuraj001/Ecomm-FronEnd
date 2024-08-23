import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Layout/Layout'
import toast from 'react-hot-toast'

function LogIn({ handleUserInput, handleUserSubmit}) {

  const [logInData, setLogInData] = useState({
    email: '',
    password: '',
  })

  function handleUserInput(e){
    const {name, value} = e.target
    setLogInData({
      ...logInData,
      [name]: value
    })
  }

  function handleUserSubmit(e){
    e.preventDefault();
    console.log(logInData)

    if(!logInData.email || !logInData.password){
      toast.error("Please fill the all feilds")
      return;
    }
    if(logInData.email.includes('@') || logInData.email.includes('.')){
      toast.error("Invalid Email")
      return;
    }
    if(logInData.password > 6 || logInData.password < 8){
      toast.error("Password must be between 8 to 12 characters")
      return;
    }
  }

  return (
    <Layout>
    <div className='h-full w-full my-8'>
    <div className='flex flex-row justify-center h-full'>
        <form action="" className='w-full px-12 md:w-1/2 lg:w-2/6 flex flex-col justify-center'>
        <h1 className='text-2xl font-bold text-center py-6'>Sign In</h1>

            <label className='py-1 text-xl'>Email <span className='text-red-800'>*</span></label>
            <input 
              type="email" 
              d="email" 
              name="email" 
              className='px-4 py-2 mb-2 border'
              placeholder='Please enter your email Id' 
              required
              onChange={handleUserInput}
            />

            <label  className='py-1 text-xl'>Password <span className='text-red-800'>*</span></label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className='px-4 py-2 mb-2 border' 
              placeholder='Please enter the password' 
              required
              onChange={handleUserInput}
            />

            <button className='bg-blue-600 py-3 px-11 rounded-md mb-0 mt-4' onClick={handleUserSubmit}>Log In</button>
            <p>Don't have an account ? <Link to='/auth/signUp' className='text-blue-400'>Register Now</Link></p>
        </form>
    </div>
</div>
</Layout>
  )
}

export default LogIn;
