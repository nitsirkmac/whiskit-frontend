import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'


function Show({ recipeList, updateRecipe, deleteRecipe }) {

    const { id } = useParams()
    const recipe = recipeList.find(r => r.id.toString() === id)
    const navigate = useNavigate()


    const [ editRecipe, setEditRecipe ] = useState(recipe)

    const handleChange = (evt) => {
        setEditRecipe({
            ...editRecipe,
            [evt.target.name]: evt.target.value,
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        updateRecipe(editRecipe, id);
        navigate('/');
    }

    const removeRecipe = () => {
        deleteRecipe(id)
        navigate('/')
    }


    return (
        <div className="recipe">
            <h1> {recipe.name} </h1>
            <h2> Author: {recipe.created_by} </h2>
            <h3> Prep Time: {recipe.prep_time} | Cook Time: {recipe.cook_time} </h3>
            <img src={recipe.image} alt={recipe.name} />
            <h3> ~ Ingredients ~ {recipe.ingredients} </h3>
            <h4> {recipe.instructions} </h4>
            <h6> {recipe.tags} </h6>
            <h4> {recipe.review} </h4>
            <button id='DELETE' onClick={removeRecipe}>
                Remove Recipe
            </button>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    value={editRecipe.name}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="created_by"
                    placeholder="created by"
                    value={editRecipe.created_by}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="prep_time"
                    placeholder="prep time"
                    value={editRecipe.prep_time}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="cook_time"
                    placeholder="cook time"
                    value={editRecipe.cook_time}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="ingredients"
                    placeholder="ingredients"
                    value={editRecipe.ingredients}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="instructions"
                    placeholder="instructions"
                    value={editRecipe.instructions}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="image"
                    placeholder="image"
                    value={editRecipe.image}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="tags"
                    placeholder="tags"
                    value={editRecipe.tags}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="review"
                    placeholder="review"
                    value={editRecipe.review}
                    onChange={handleChange}
                />
                <button type="submit">Update Recipe</button>
            </form>

            



        </div>
    )
}

export default Show