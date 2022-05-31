import React from 'react'
import { useEffect, useState } from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';


const Popular = () => {

    const theKey = '60f1cbb6892f4f24909905fc98d9506f';

    const [popular , setPopular] = useState([]);

    


    


    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
       
        const check = localStorage.getItem('popular');


        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${theKey}&number=12`)
        const data = await api.json();
        setPopular(data.recipes);
        console.log(data)
        


     
    }; 

  return (
    <div>
        <div className='mt-2 py-6 px-8'>
            <h3 className='text-3xl ml-2'>Popular 🔥</h3>
            <Splide slidesToShow={4}
            options ={{
                perPage: 3,
                arrows : true,
                pagination: false,
                drag: 'free',
                gap : "4rem",
                height : "100%",



            }}>
            {popular.map((recipes) => {
                return (
                    <SplideSlide key={recipes.id}>
                    <div className='min-w-full min-h-[12rem] z-0 rounded-lg relative flex items-baseline justify-start flex-col mt-12 mb-12 ' key={recipes.id}>
                        <Link to={'/recipe/' + recipes.id}>
                            <img className='absolute min-w-[150px]   w-full h-full object-cover bg-no-repeat  top-0  left-0 rounded-lg ' src={recipes.image} alt={recipes.title} />
                                    <div className=' absolute min-w-[150px]  bg-[rgba(0,0,0,0.4)] h-full top-0 left-0 w-full rounded-lg'>
                                         < div className=''>
                                      <h4 className=' p-4 text-center  absolute bottom-0 text-l text-[#fff]' >{recipes.title}</h4>
                                     </div>
                                </div>
                        </Link>

                    </div>
                    </SplideSlide>
                )
            })}
           </Splide>
        </div>
     </div>
  )}

//   <SplideSlide key={recipes.id}>
//   <div className='min-w-full min-h-[12rem]  rounded-lg mt-4 relative flex items-baseline justify-start flex-col border-2 ' key={recipes.id}>
//       <div className='z-60 absolute bg-[rgba(0,0,0,0.9)] min-w-fit min-h-full top-0 left-0 w-full rounded-lg'>
//       < div className='flex'>
//           <h4 className='py-6 px-6  text-[#fff] z-50' >{recipes.title}</h4>
          
//       </div>
//       <img className='w-full h-full object-cover bg-no-repeat bg-fit absolute top-0  left-0 rounded-lg ' src={recipes.image} alt={recipes.title} />


//       </div>

//   </div>
//   </SplideSlide>

{/* <img className='absolute   w-full h-full object-cover bg-no-repeat  top-0  left-0 rounded-lg ' src={recipes.image} alt={recipes.title} /> */}

export default Popular ;