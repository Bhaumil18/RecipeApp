import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context'

function Details() {

  // const [toggle,setToggle] = useState("false")
  const { id } = useParams()
  const { recipeDetails, setRecipeDetails, handleAddToF , favouritesList} = useContext(GlobalContext)

  async function recipeDetailsFetch() {
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=83d6d073-d376-4674-86b8-df0130af8ccd`)
      const result = await res.json()

      if (result?.data?.recipe) {
        setRecipeDetails(result.data.recipe)
        // console.log(result)
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    recipeDetailsFetch()
  }, [])

  return (
    <div className='mx-auto py-10 container grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 rounded-xl overflow-hidden group">
          <img src={recipeDetails?.image_url} alt="recipe detail" className='w-full h-full duration-300 object-cover block group-hover:scale-105' />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className='text-sm text-cyan-700 font-medium' >{recipeDetails?.publisher}</span>
        <h3 className='font-bold text-2xl truncate text-black'>{recipeDetails?.title}</h3>
        <div>
          <button onClick={() => { handleAddToF(recipeDetails)}} className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider inline-block mt-3 shadow-md bg-black text-white'>
            {
              favouritesList && favouritesList.length && favouritesList.findIndex((item)=> item.id === recipeDetails.id)!==-1?"Remove from favourites" : "Add to favourites"
            }
          </button>
        </div>
        <div>
          <span className='text-2xl font-semibold text-black'>Ingerdients :</span>
          <ul className='flex flex-col gap-3 mt-3'>
            {
              recipeDetails?.ingredients.map((ing, index) => {
                return <li key={index}>
                  <span className='text-xl font-semibold text-black'>{ing.quantity} {ing.unit}</span>
                  <span className='text-xl font-semibold text-black'>{ing.description}</span>
                </li>
              }
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details