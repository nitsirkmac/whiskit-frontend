import { Link } from "react-router-dom"
import { useState } from "react"
import { Image, Title, RecipeCard } from '../components/appStyles'

export default function Index({ recipe, createRecipe }) {



    const loaded = () => 
    // recipe.map is not a function! 
        recipe.map((recipe) => ( 
            <RecipeCard key={recipe.id} className="recipe">
                <Link to={`/recipes/${recipe.id}`}>
                    <Title> {recipe.name} </Title>
                </Link>
                <Image src={recipe.image} alt={recipe.name} />
            </RecipeCard>
        ))

    const loading = () => <h1>Loading...</h1>
    

    return (
        <section>
            <div>
                <Title> whiskIt! </Title>
            </div>

            {recipe ? loaded() : loading()}
        </section>
    )
            
}

