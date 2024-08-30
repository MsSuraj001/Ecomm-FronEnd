import React from 'react'
import { Link } from 'react-router-dom'
import menu from '../assets/menu.png'
import { useSelector } from 'react-redux'

function Header() {

  const isLoggedIn = useSelector( (state) => state.auth.isLoggedIn)

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
          {isLoggedIn ? (
            <Link to={''}>
            <p className='bg-blue-600 py-2 px-4 rounded-lg text-white'>LogOut</p>
          </Link>
          ) : (
            <Link to={'/auth/signUp'}>
            <p className='bg-blue-600 py-2 px-4 rounded-lg text-white'>LogIn/Registar</p>
          </Link>
          )}

          {
            isLoggedIn ? (<div>Cart</div>)  : (<div></div>)
          }
        </div>
      </div>
    </>
  )
}

export default Header
