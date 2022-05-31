import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Searched = () => {

    const [searched, setSearched] = useState([]);
    let params = useParams();

    const theKey = '60f1cbb6892f4f24909905fc98d9506f';

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${theKey}&cuisine=${name}) `)
        const recipes = await data.json()
        setSearched(recipes.results)
        console.log(recipes.results)
    
    }

    useEffect(() => { 
        getCuisine(params.search)
    }, [params.search])



  return (
    <div className='grid-cols-1  md:grid  md:grid-cols-3	 items-center p-12'>
    {searched.map((recipes) => {
      return(
        
        <Link to={'/recipe/' + recipes.id}>
        <div className=' p-12 ml-4'>
          <img className='rounded-lg' src={recipes.image} alt="" />
          <h1 className='mt-4'>{recipes.title}</h1>
        </div>
        </Link>

      )
    })}
  </div>
  )
}

export default Searched