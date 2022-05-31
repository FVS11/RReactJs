import React from 'react'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import "@splidejs/splide/dist/css/splide.min.css";



const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const theKey = '60f1cbb6892f4f24909905fc98d9506f';



  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${theKey}&cuisine=${name})`)
    const recipes = await data.json()
    setCuisine(recipes.results)
    console.log(recipes.results)

  }

  useEffect(() => {
  
    getCuisine(params.type)
    console.log(params.type)
  }, [params.type])

  return (
    <div className='grid-cols-1  md:grid  md:grid-cols-3 justify-center	 items-center p-12'>
      {cuisine.map((recipes) => {
        return(
       
          <Link to={'/recipe/' + recipes.id}>
          <div className=' p-12 ml-4'>
            <img className=' w-full h-full object-cover bg-no-repeat shadow-2xl	  rounded-lg' src={recipes.image} alt="" />
            <h1 className='mt-4 text-lg'>{recipes.title}</h1>
          </div>
          </Link>

        )
      })}
    </div>
  )
}

export default Cuisine