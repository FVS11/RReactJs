import React from 'react'
import { useEffect, useState } from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';



const Veggie = () => {

    const theKey = '60f1cbb6892f4f24909905fc98d9506f';

    const [veggie , setVeggie] = useState([]);



    


    useEffect(() => {
        getVeggie();
    }, [])

    const getVeggie = async () => {
       
   

    
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${theKey}&number=12&tags=vegetarian`)
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data)
            



     
    }; 

  return (
    <div>
        <div className='mt-2 py-6 px-8'>
            <h3 className='text-3xl ml-2'>Veggie 🥬</h3>
            <Splide slidesToShow={4}
            options ={{
                perPage: 3,
                arrows : true,
                pagination: false,
                drag: 'free',
                gap : "4rem",
                height : "100%",



            }}>
            {veggie.map((recipes) => {
                return (
                    <SplideSlide key={recipes.id}>
                        <Link to={'/recipe/' + recipes.id}>
                    <div className='min-w-full min-h-[12rem] z-0 rounded-lg relative flex items-baseline justify-start flex-col mt-12 mb-12' key={recipes.id}>
                        <img className='absolute min-w-[150px]   w-full h-full object-cover bg-no-repeat  top-0  left-0 rounded-lg ' src={recipes.image} alt={recipes.title} />
                        <div className=' absolute min-w-[150px]  bg-[rgba(0,0,0,0.4)] h-full top-0 left-0 w-full rounded-lg'>
                            < div className=''>
                                <h4 className=' p-4 text-center text-l absolute bottom-0 text-[#fff]' >{recipes.title}</h4>
                            </div>
                        </div>

                    </div>
                    </Link>
                    </SplideSlide>
                )
            })}
           </Splide>
        </div>
     </div>
  )}


export default Veggie ;