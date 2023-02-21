import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"


function Main() {

    const [ recipeList, setRecipeList ] = useState(null)
    // state to hold list of recipes
    const URL = "http://localhost:8000/recipes/"

    const getRecipeList = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setRecipeList(data)
    }
    // function to make the api call for recipes

    const createRecipe = async (recipe) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(recipe),
        })
        getRecipeList()
    }
    // function to create a new recipe

    useEffect(() => {
        getRecipeList()
    }, [])
    // useEffect to make initial call for recipe list


// pass the recipe state and the create function to Index

    
    return (
        <main>
            <Routes>
                <Route exact path='/' element={<Index recipe={recipeList} createRecipe={createRecipe} />} />
                <Route path="/recipes/:id" element={<Show recipe={recipeList} />} />
            </Routes>
        </main>
    )
}

export default Main

