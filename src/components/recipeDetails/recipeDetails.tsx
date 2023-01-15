import React from 'react'
import Ingredients from './ingredients/Ingredients'
import MainRecipe from './mainRecipe/MainRecipe'

import "./recipeDetails.scss"
import RecommendedRecipes from './recommendedRecipes/RecommendedRecipes'

const RecipeDetails = () => {
  return (
    <div className="recipeDetails">
        <MainRecipe/>

        <div className="recipeDetails__main">
          <Ingredients/>
          <RecommendedRecipes/>
        </div>
    </div>

  )
}

export default RecipeDetails