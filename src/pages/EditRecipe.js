import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Info, Form, TextArea } from '../components/appStyles'


export default function EditRecipe({ recipeList, updateRecipe }) {

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
        const tagArray = editRecipe.tags.split(", ")
        editRecipe.tags = tagArray
        updateRecipe(editRecipe, id);
        navigate('/');
    }

    return (    
        <section>
            <Form onSubmit={handleSubmit}>
                <Info className='input'
                    type="text"
                    name="name"
                    placeholder="name"
                    value={editRecipe.name}
                    onChange={handleChange}
                />
                <Info className='input'
                    type="text"
                    name="created_by"
                    placeholder="created by"
                    value={editRecipe.created_by}
                    onChange={handleChange}
                />
                <Info className='input'
                    type="text"
                    name="prep_time"
                    placeholder="prep time"
                    value={editRecipe.prep_time}
                    onChange={handleChange}
                />
                <Info className='input'
                    type="text"
                    name="cook_time"
                    placeholder="cook time"
                    value={editRecipe.cook_time}
                    onChange={handleChange}
                />
                <TextArea className='input'
                    type="text"
                    name="ingredients"
                    placeholder="ingredients"
                    value={editRecipe.ingredients}
                    onChange={handleChange}
                />
                <TextArea className='input'
                    type="text"
                    name="instructions"
                    placeholder="instructions"
                    value={editRecipe.instructions}
                    onChange={handleChange}
                />
                <Info className='input'
                    type="text"
                    name="image"
                    placeholder="image"
                    value={editRecipe.image}
                    onChange={handleChange}
                />
                <Info className='input'
                    type="text"
                    name="tags"
                    placeholder="tags"
                    value={editRecipe.tags}
                    onChange={handleChange}
                />
                <TextArea className='input'
                    type="text"
                    name="review"
                    placeholder="review"
                    value={editRecipe.review}
                    onChange={handleChange}
                />
                <input type="submit" value="Update Recipe" />
            </Form>
        </section>
    )
}