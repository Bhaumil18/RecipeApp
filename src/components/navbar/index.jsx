import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context';


function Navbar() {


    const { search,setSearch,handleSubmit} = useContext(GlobalContext)

    console.log(search)

  return (
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
        <h2 className='text-2xl font-semibold'><NavLink to={"/"} className="text-black text-grey-700 duration-300">FoodRecipe</NavLink></h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name='search' value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='Enter Items...' className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 '/>
        </form>
        <ul className='flex gap-5'>
            <li>
                <NavLink to={"/"} className="text-black text-grey-700 duration-300">Home</NavLink>
            </li>
            <li>
                <NavLink to={"/favourites"} className="text-black text-grey-700 duration-300">Favourites</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar