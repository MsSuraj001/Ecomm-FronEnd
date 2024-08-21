import React from 'react'
import { Link } from 'react-router-dom'
import menu from '../assets/menu.png'

function Header() {
  return (
    <>
      <div className='bg-white h-[12%] w-[100%] lg:px-24 px-5 shadow-lg py-7 flex justify-between'>
        <h1 className='font-bold text-2xl hidden sm:block'>Ms Suraj</h1>
        <div className='sm:hidden w-12 h-10'>
          <img src={menu} alt="" />
        </div>

        <div className='hidden sm:block'>
          <ul  className='flex items-center gap-6 lg:text-2xl'>
            <li>
              {' '}
              <p className='hover:underline hover:shadow-lg cursor-pointer'>Home</p>
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

        <div>
          <button className='bg-blue-600 py-2 px-4 rounded-lg text-white font-bold'>LogIn/Register</button>
        </div>
      </div>
    </>
  )
}

export default Header
