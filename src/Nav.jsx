import React from 'react'
import { GrRestaurant } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='container mx-auto mt-[10px] py-[2px] flex justify-between items-center bg-gray-300 rounded mb-[20px] '>
        <div className='flex mx-5 gap-1 items-center font-bold text-black'>
            <p className='text-3xl text-pink-800'>
                <GrRestaurant/>
            </p>
            <p className='text-2xl text-pink-800'>
                FOODie
            </p>
        </div>
        <div>
            <ul className='flex gap-3 mx-5 text-pink-800 text-lg '>
                <Link to={`/`} >
                    <li className='hover:scale-105 hover:text-bold hover:text-xl ease-in-out duration-200 px-2'>Home</li>
                </Link>
                <Link>
                    <li className='hover:scale-105 hover:text-bold hover:text-xl ease-in-out duration-200 px-2'>About</li>
                </Link>
                <Link>
                    <li className='hover:scale-105 hover:text-bold hover:text-xl ease-in-out duration-200 px-2'>Contact</li>
                </Link>
            </ul>
        </div>
        
        
    </div>
  )
}

export default Nav