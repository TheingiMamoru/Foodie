import React from 'react'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Card = ({meal}) => {
  return (
    <div className='w-60 border rounded-xl flex justify-center items-center flex-col gap-3 py-5 px-2 hover:scale-105 hover:shadow-lg'>
        <img 
            src={meal.strMealThumb} 
            alt="" width="200px" 
            className='rounded' 
        />
        <h1 className='h-10 px-2 text-center'>
            {meal.strMeal}
        </h1>
        <Link to={`/detail/${meal.idMeal}`} >
                <button className=' flex items-center justify-center gap-2 px-1 w-[80px] h-[30px] rounded-lg py-1 px-3 text-gray-700 bg-pink-400 hover:bg-gray-300 hover:text-pink-800 ease-in-out duration-300'>
                    <span><BsFillInfoCircleFill/></span>
                    <p>Detail</p>
                </button>            
        </Link>
        
    </div>
  )
}

export default Card