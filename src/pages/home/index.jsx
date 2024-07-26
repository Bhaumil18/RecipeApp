import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeItem from '../../components/recipe-item'

function Home() {

  const {loading, data} = useContext(GlobalContext)

  if(loading)
  {
    return <div>Loading ... Please Wait ...</div>
  }

  // console.log(data.length)

  return (<div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        data && data.length > 0 ?
        data.map((item,index)=> {
          return <RecipeItem id={index} item={item} />
        })
        : <div>
          <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing to show. Please search something.</p>
        </div>

      }
    </div>
  )
}

export default Home