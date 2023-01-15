import { Slider } from "./slider/Slider"
import TopRecipes from './topRecipes/topRecipes'
import { Recipes } from "./recipes/Recipes"

import "./home.scss"

export const Home = () => {
  return (
    <div className="home">
      <Slider />
      <TopRecipes />
      <Recipes />
    </div>
  )
}