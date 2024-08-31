import React, { useEffect } from 'react'
import Layout from '../../Layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { createAccount, login } from '../../Redux/Slices/AuthSlice';
import { getUserDatails } from '../../Redux/Slices/userSlice';
import LogIn from '../Auth/LogIn';

function UserAccount() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector( (state) => state.auth.isLoggedIn)
  const { userData } = useSelector( (state) => state.user);

  useEffect( () => {
    dispatch(getUserDatails());
  }, [])
  return (
    <Layout>
      { isLoggedIn ? (
        <>
        <div className='h-auto w-auto bg-white border-red-100 flex justify-center m-4'>
          <div className='bg-white w-full sm:w-2/3 md:w-3/6 shadow-md py-8'>  
            {/* this  is the image  */}
            <div className='flex justify-center items-center flex-col'>
              <img src={userData.image} alt="user image" className='w-20 h-20 rounded-full hover:border-blue-400 my-1'/>
              <h1 className='font-semibold text-2xl'>{userData.firstName} {userData.lastName}</h1>
            </div>
            {/* this is the user Details */}
            <div className='px-6 py-4 flex flex-col m-4'>
                <h1 className='border p-2 m-1'>User Email :  { userData.email}</h1>
                <h1  className='border p-2 m-1'>User Mobile No. {userData.mobileNumber}</h1>
                <h1  className='border p-2 m-1'>User Gender : {userData.gender}</h1>
                <h1  className='border p-2 m-1'>User Age : {userData.age}</h1>
                <h1  className='border p-2 m-1'>User Type : <p className='text-red-500 inline'>{userData.role}</p></h1>
            </div>

            <div>
              <h1>Address</h1>
            </div>

            <div className='px-6 py-4 flex flex-col m-4'>
                <button className='bg-blue-600 rounded-sm py-2 text-white'>LogOut</button>
            </div>
          </div>

          
        </div>
        </>
      ) : (
        <LogIn />
      )}
    </Layout>
  )
}

export default UserAccount
