import React from 'react'
import Ingredients from './ingredients/Ingredients'
import MainRecipe from './mainRecipe/MainRecipe'

import "./recipeDetails.scss"

const RecipeDetails = () => {
  return (
    <div className="recipeDetails">
        <MainRecipe/>
        <Ingredients/>
    </div>

  )
}

export default RecipeDetails