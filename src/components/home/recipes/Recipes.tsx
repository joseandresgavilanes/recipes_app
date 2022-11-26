import { useEffect, useState } from "react"
import axios from "axios"
import { endpointUrl } from "../../../config"
import { Recipe } from "../../../vite-env"
import { RecipeCard } from "./recipeCard/RecipeCard"

import "./recipes.scss"

export const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined)

  useEffect(()=> {
    axios.get(endpointUrl+'recipes').then(res=> setRecipes(res.data))
    .catch(err=> console.log(err))
  }, [])
  

  return (
    <section className="recipes">
      {recipes?.map(recipe=> <RecipeCard key={recipe.id} recipe={recipe} />)}
    </section>
  )
}