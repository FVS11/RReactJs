import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Recipe = () => {

    const [details, setDetails] = useState({})
    const theKey = '60f1cbb6892f4f24909905fc98d9506f';



    let params = useParams();

    const fetchDetails = async (id) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${theKey}`)
        const detailData = await data.json()
        setDetails(detailData)
        console.log(detailData)

    }

    useEffect(() => {
        fetchDetails(params.id)
    }, [params.id])

  return (
    <div className='flex items-stretch justify-between p-12 m-8'>
        <div>
            <h1 className='mb-12 text-4xl max-w-[80%]'>{details.title}</h1>
            <img className='rounded-lg w-full' src={details.image} alt="" />
            {details.readyInMinutes && <p className='text-l mt-2  text-orange-500 '>Ready in {details.readyInMinutes} minutes</p>}
            <h1 className='text-2xl mt-2'>Ingredients</h1>
            {/* <p className='text-lg mt-2 font-bold'>Servings: {details.servings}</p> */}
            <ul key={details.id} className='text-lg mt-2 max-w-[70%] capitalize leading-8'>
                {details.extendedIngredients?.map((ingredient) => {
                    return (
                        <li  key={ingredient.id}>{ingredient.original}</li>
                    )
                })}
            </ul>
            
            
        </div>
        <div className='max-w-[40%] m-7 py-10 mr-20'>
            <h1 className='text-2xl mt-2'>Summary</h1>
            <h3 className='mt-2 leading-8' dangerouslySetInnerHTML={{__html : details.summary}}></h3>

            <h1 className='text-2xl mt-6'>Instructions</h1>
            <h3 className='mt-2 leading-8' dangerouslySetInnerHTML={{__html : details.instructions}}></h3>

        </div>


        

    </div>
  )
}

{/* <div className='flex p-12'>
        <div className='w-1/2'>
            <img className='rounded-lg' src={recipe.image} alt="" />
        </div>
        <div className='w-1/2'>
            <h1 className='mt-4'>{recipe.title}</h1>
            <p>{recipe.summary}</p>
        </div>

      {/* {recipe.instructions} */}
    // </div> */}

export default Recipe