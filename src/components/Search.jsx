import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Search = () => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/searched/${search}`)
        console.log(search)
    }

  return (
    <form onSubmit={handleSubmit} className='m-8 p-8  mx-auto relative w-full flex items-center justify-evenly'>
        <input value={search} onChange={handleChange} placeholder='🔍 Search' className='w-[40%] outline-none bg-[#494949] text-white text-xl p-2 rounded-lg' type="text" />

    </form>
  )
}

export default Search