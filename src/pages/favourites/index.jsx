import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeItem from '../../components/recipe-item'


function Favourites() {

  const {favouritesList} = useContext(GlobalContext)

  return (<div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
  {
    favouritesList && favouritesList.length > 0 ?
    favouritesList.map((item,index)=> {
      return <RecipeItem id={index} item={item} />
    })
    : <div>
      <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing added show. Please add something.</p>
    </div>
  }
</div>)
}

export default Favourites