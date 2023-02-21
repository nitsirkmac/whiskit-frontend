import { Link } from "react-router-dom"
import { useState } from "react"

export default function Index({ recipe, createRecipe }) {

    const [ recipeData, setRecipeData ] = useState({
        name: "",
        created_by: "",
        prep_time: "",
        cook_time: "",
        ingredients: "",
        instructions: "",
        image: "",
        tags: [],
        review: "",
    })

    const handleChange = (evt) => {
        setRecipeData({
            ...recipeData,
            [evt.target.name]: evt.target.value,
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        createRecipe(recipeData);
        setRecipeData({
            name: "",
            created_by: "",
            prep_time: "",
            cook_time: "",
            ingredients: "",
            instructions: "",
            image: "",
            tags: [],
            review: "",
        })
    }

    const loaded = () => 
    // recipe.map is not a function! 
        recipe.map((recipe) => ( 
            <div key={recipe.id} className="recipe">
                <Link to={`/recipes/${recipe.id}`}>
                    <h1> {recipe.name} </h1>
                </Link>
                <img src={recipe.image} alt={recipe.name} />
            </div>
        ))

    const loading = () => <h1>Loading...</h1>
    

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    value={recipeData.name}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="created_by"
                    placeholder="created by"
                    value={recipeData.created_by}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="prep_time"
                    placeholder="prep time"
                    value={recipeData.prep_time}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="cook_time"
                    placeholder="cook time"
                    value={recipeData.cook_time}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="ingredients"
                    placeholder="ingredients"
                    value={recipeData.ingredients}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="instructions"
                    placeholder="instructions"
                    value={recipeData.instructions}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="image"
                    placeholder="image"
                    value={recipeData.image}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="tags"
                    placeholder="tags"
                    value={recipeData.tags}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="review"
                    placeholder="review"
                    value={recipeData.review}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit"/>
            </form>

            {recipe ? loaded() : loading()}
        </section>
    )
            
}

