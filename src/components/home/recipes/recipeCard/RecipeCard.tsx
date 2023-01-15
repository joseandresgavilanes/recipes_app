import { MouseEvent } from "react"
import { Recipe } from "../../../../vite-env"
import { useNavigate } from "react-router"

import './recipeCard.scss'

export const RecipeCard = ({recipe}: {recipe: Recipe})=> {
  const navigate = useNavigate()
  
  const selectRecipe = (event: MouseEvent<HTMLElement>) => {
    const id = event.currentTarget.dataset.id
    navigate('/recipes/'+id)
  }

  return (
    <article onClick={selectRecipe} className="recipes-card" data-id={recipe.id}>
      <div className="recipes-card-img">
        <img src={recipe.urlImg} alt="" />
      </div>

      <div className="recipes-card-content">
        <p className="recipes-card-content-title">{recipe.title}</p>
        <p className="recipes-card-content-likes">
          <i className="recipes-card-content-likes-icon fa-solid fa-thumbs-up"></i> {recipe.likes}
        </p>
        <p className="recipes-card-content-author">{recipe.user.firstName}</p>
      </div>

      <div className="recipes-card-heart">
        <i className="recipes-card-heart-icon fa-solid fa-heart"></i>
      </div>
    </article>
  )
}