import React from 'react'
import {FaPizzaSlice, FaHamburger, FaHome} from 'react-icons/fa'
import {GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'



const Category = () => {
  return (
    <div className='flex justify-center items-center m-2 ml-8 flex-wrap'>

        <NavLink className={'flex flex-col items-center p-4 justify-center mr-8 hover:translate-y-2'} to={'/'} >
            <FaHome size={30} /> 
            <h4 className='p-4 text-xl'>Home</h4>
        </NavLink>


        <NavLink className={'flex flex-col items-center p-4 justify-center mr-8 hover:translate-y-2'} to={'/cuisine/italian'} >
            <FaPizzaSlice size={30} /> 
            <h4 className='p-4 text-xl'>Italian</h4>
        </NavLink>

        <NavLink className={'flex flex-col items-center p-4  justify-center mr-8 hover:translate-y-2'}  to={'/cuisine/american'}>
            <FaHamburger size={30} /> 
            <h4 className='p-4 text-xl'>American</h4>
        </NavLink>

        <NavLink className={'flex flex-col items-center p-4  justify-center mr-8 hover:translate-y-2'}  to={'/cuisine/thai'}>
            <GiNoodles size={30} />
            <h4 className='p-4 text-xl'>Thai</h4>
         </NavLink>

        <NavLink className={'flex flex-col items-center p-4  justify-center mr-8 hover:translate-y-2'}  to={'/cuisine/asian'}>
            <GiChopsticks size={30} /> 
            <h4 className='p-4 text-xl'>Asian</h4>
        </NavLink>

    </div>
  )
}

export default Category