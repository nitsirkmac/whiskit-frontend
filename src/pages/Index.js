import { Link } from "react-router-dom"
import { useState } from "react"
import { Image } from '../components/appStyles'

export default function Index({ recipe, createRecipe }) {



    const loaded = () => 
    // recipe.map is not a function! 
        recipe.map((recipe) => ( 
            <div key={recipe.id} className="recipe">
                <Link to={`/recipes/${recipe.id}`}>
                    <h1> {recipe.name} </h1>
                </Link>
                <Image src={recipe.image} alt={recipe.name} />
            </div>
        ))

    const loading = () => <h1>Loading...</h1>
    

    return (
        <section>
  

            {recipe ? loaded() : loading()}
        </section>
    )
            
}

