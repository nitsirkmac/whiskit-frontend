import { useState } from 'react'
import { Info, Form, TextArea } from '../components/appStyles'


export default function NewRecipe({ createRecipe }) {

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
        const tagArray = recipeData.tags.split(", ")
        recipeData.tags = tagArray
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

    return (
        <section>
            <Form onSubmit={handleSubmit} action='recipes' method='POST'>
                <Info 
                    type="text"
                    name="name"
                    placeholder="name"
                    value={recipeData.name}
                    onChange={handleChange}
                />
                <Info 
                    type="text"
                    name="created_by"
                    placeholder="created by"
                    value={recipeData.created_by}
                    onChange={handleChange}
                />
                <Info 
                    type="text"
                    name="prep_time"
                    placeholder="prep time"
                    value={recipeData.prep_time}
                    onChange={handleChange}
                />
                <Info 
                    type="text"
                    name="cook_time"
                    placeholder="cook time"
                    value={recipeData.cook_time}
                    onChange={handleChange}
                />
                <TextArea 
                    type="text"
                    name="ingredients"
                    placeholder="ingredients"
                    value={recipeData.ingredients}
                    onChange={handleChange}
                />
                <TextArea 
                    type="text"
                    name="instructions"
                    placeholder="instructions"
                    value={recipeData.instructions}
                    onChange={handleChange}
                />
                <Info 
                    type="text"
                    name="image"
                    placeholder="image"
                    value={recipeData.image}
                    onChange={handleChange}
                />
                <Info 
                    type="text"
                    name="tags"
                    placeholder="tags (separate by comma ex: sweet, tart, etc)"
                    value={recipeData.tags}
                    onChange={handleChange}
                />
                <TextArea 
                    type="text"
                    name="review"
                    placeholder="review"
                    value={recipeData.review}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit"/>
            </Form>
        </section>
    )

}