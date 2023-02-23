import { Link, useParams, useNavigate } from 'react-router-dom'
import { DetailImg, Ingredients, Steps } from '../components/appStyles'



function Show({ recipeList, updateRecipe, deleteRecipe }) {

    const { id } = useParams()
    const recipe = recipeList.find(r => r.id.toString() === id)
    const navigate = useNavigate()




    const removeRecipe = () => {
        deleteRecipe(id)
        navigate('/')
    }


    return (
        <div className="recipe">
            <h1> {recipe.name} </h1>
            <h2> Author: {recipe.created_by} </h2>
            <h3> Prep Time: {recipe.prep_time} | Cook Time: {recipe.cook_time} </h3>
            <DetailImg src={recipe.image} alt={recipe.name} />
            <Ingredients>  {recipe.ingredients} </Ingredients>
            <Steps> {recipe.instructions} </Steps>
            <button id='DELETE' onClick={removeRecipe}>
                Remove Recipe
            </button>

                <Link to={`/recipes/${recipe.id}/edit`} >
                    <button type="submit">Update Recipe</button>
                </Link>
            <button>Add to Favorites</button>

            <h6> {recipe.tags} </h6>
            <h4> {recipe.review} </h4>

            



        </div>
    )
}

export default Show