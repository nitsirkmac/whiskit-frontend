import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import EditRecipe from "../pages/EditRecipe"
import Index from "../pages/Index"
import Show from "../pages/Show"
import NewRecipe from '../pages/NewRecipe'

function Main() {

    const [ recipeList, setRecipeList ] = useState([])
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


    // updateRecipe
    const updateRecipe = async (recipe, id) => {
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(recipe),
        })
        getRecipeList()
    }


    // deleteRecipe
    const deleteRecipe = async (id) => {
        await fetch(URL + id, {
            method: 'DELETE',
        })
        getRecipeList()
    }


    useEffect(() => {
        getRecipeList()
    }, [])
    // useEffect to make initial call for recipe list


// pass the recipe state and the create function to Index



    
    return (
        <main>
            <Routes>
                <Route 
                    path='/' 
                    element={
                    <Index 
                        recipe={recipeList} 
                        createRecipe={createRecipe} 
                        />} />
                <Route 
                    path='/recipes/new'
                    element={
                        <NewRecipe 
                            createRecipe={createRecipe}
                    />}
                />
                <Route 
                    path="/recipes/:id" 
                    element={
                        <Show 
                            recipeList={recipeList} 
                            deleteRecipe={deleteRecipe}
                            updateRecipe={updateRecipe}
                            />} />
                <Route
                    path="/recipes/:id/edit"
                    element={
                        <EditRecipe
                        updateRecipe={updateRecipe}
                        recipeList={recipeList}
                    />} />
            </Routes>
        </main>
    )
}

export default Main

