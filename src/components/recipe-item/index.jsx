import React from 'react'
import { NavLink } from 'react-router-dom'

function RecipeItem({item,id}) {

  return <div key={id} className='flex flex-col w-80 overflow-hidden p-5 bg-white/25 shadow-xl gap-5 border-2 rounded-2xl border-white '>
    <div className='h-40 flex justify-center overflow-hidden item-center rounded-xl'>
      <img src={item?.image_url} alt="recipe_item" className='block w-full' />
    </div>
    <div>
      <span className='text-sm text-cyan-700 font-medium'>{item?.publisher}</span>
      <h3 className='font-bold text-2xl truncate text-black'>{item?.title}</h3>
      <NavLink to={`/recipe-item/${item.id}`} className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white">Recipe Details</NavLink>
    </div>
  </div>
}

export default RecipeItem
