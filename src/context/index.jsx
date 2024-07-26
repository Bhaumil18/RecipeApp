import { createContext, useState } from "react";
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null)

function GlobalState({children}) 
{
    
    const [search,setSearch] = useState('')
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [recipeDetails,setRecipeDetails] = useState(null)
    const [favouritesList,setFavouritesList] = useState([])
    const navigate = useNavigate()

    function handleAddToF(recipe)
    {
        let cpy = [...favouritesList]
        const index = cpy.findIndex((item)=> {
            return item.id === recipe.id
        })
        if(index === -1)
        {
            cpy.push(recipe)
        }else
        {
            cpy.splice(index)
        }
        setFavouritesList(cpy)
    }

    async function handleSubmit(event)
    {
        event.preventDefault()
        try {
            setLoading(true)
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=83d6d073-d376-4674-86b8-df0130af8ccd`)
            const result = await res.json()
            
            if(result?.data?.recipes)
            {
                setLoading(false)
                setData(result.data.recipes)
                // console.log(result)
                setSearch('')
                navigate('/')
            }
        } catch (error) {
            setLoading(false)
            console.log(error.message)
            setSearch('')
        }
    }


  return <GlobalContext.Provider value={{ search,setSearch,handleSubmit,loading,data,recipeDetails,setRecipeDetails,handleAddToF,favouritesList }}>{children}</GlobalContext.Provider>
}

export default GlobalState