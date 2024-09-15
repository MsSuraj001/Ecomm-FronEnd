import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import menu from '../assets/menu.png'
import { useDispatch, useSelector } from 'react-redux'
import UserAccount from '../assets/svg Icons/UserAccount'
import { getUserDatails } from '../Redux/Slices/userSlice'

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector( (state) => state.auth.isLoggedIn)

  const { userData } = useSelector( (state) => state.user)
  const { cartData } = useSelector( (state) => state.cart)

  useEffect( () => {
    dispatch(getUserDatails())
  }, []);

  return (
    <>
      <div className='bg-white w-[100%] lg:px-24 px-5 shadow-lg py-5 flex justify-between'>
        <Link to={'/'} className='hidden sm:block'><h1 className='font-bold text-2xl hidden sm:block'>Ms Suraj</h1></Link>
        <div className='sm:hidden w-12 h-10'>
          <img src={menu} alt="" className='cursor-pointer'/>
        </div>

        <div className='hidden sm:block'>
          <ul  className='flex items-center gap-6 lg:text-xl'>
            <li>
              {' '}
              <Link to={'/'}><p className='hover:underline hover:shadow-lg cursor-pointer'>Home</p></Link>
            </li>
            <li>
              {' '}
              <p className='hover:underline hover:shadow-lg cursor-pointer'>About</p>
            </li>
            <li>
              {' '}
              <p className='hover:underline hover:shadow-lg cursor-pointer'>Service</p>
            </li>
            <li>
              {' '}
              <p className='hover:underline hover:shadow-lg cursor-pointer'>Help</p>
            </li>
          </ul>
        </div>

        <div className='flex flex-row gap-4'>
          {/* {isLoggedIn ? (
            <Link to={'/user/account'}>
              { userData.image ? (
                <img src={userData.image} alt="" className='w-10 h-10 rounded-full'/>
              ) : (<UserAccount/>)}
          </Link>
          ) : (
            <Link to={'/auth/signUp'}>
            <p className='bg-blue-600 py-2 px-4 rounded-lg text-white'>LogIn/Registar</p>
          </Link>
          )} */}

          {
            isLoggedIn ? (<Link to={'/user/cart'}>Cart</Link>)  : (<div></div>)
          }
        </div>
      </div>
    </>
  )
}

export default Header
