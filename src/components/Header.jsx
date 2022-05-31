import React from 'react'
import {useState, useEffect } from 'react'


const Header = () => {

    const [image , setImage] = useState('')
    const theKey = '60f1cbb6892f4f24909905fc98d9506f';

    const getImage = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${theKey}`)
        const image = await data.json()
        setImage(image.recipes[0].image)
        console.log(image.recipes[0].image)

    }

    useEffect(() => {
        getImage()
    } , [])


  return (
    <div className='w-full h-full flex justify-center'>
        <div className='w-[100%] h-[320px] box-border flex justify-center items-center mb-8  relative' >
            <div className='w-full top-0 left-0 h-full flex-col  flex justify-center bg-[rgba(0,0,0,0.62)] items-center mb-8 absolute'>
                <h1 className='text-7xl text-white font-bold mix-blend-luminosity		'>Easy Cook </h1>
                <p className='text-3xl text-white mt-4'>Full recipes, quick and tasty</p>
            </div>
            <img className='w-full object-cover  mx-auto bg-center aspect-auto  bg-no-repeat  h-[320px]' src={image} alt="" />

         </div>

    </div>
  )
}

export default Header