import './favorites.scss'
import { endpointUrl } from '../../config'
import { RecipeCard } from './recipeCard/RecipeCard'

export const Favorites = () => {
  return (
    <section className='favorites'>
      <h2 className='favorites-title' >Favorites recipes</h2>
      <div className="favorites-recipes">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </section>
  )
}