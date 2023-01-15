import { useState } from 'react'

export const RecipeCard = ()=> {
  const [likes, setLikes] = useState(0)

  const additionLike = () => setLikes(likes+1)

  return (
    <article className="favorites_recipe">
      <img className="favorites_recipe-img" src="https://cdn7.kiwilimon.com/recetaimagen/39985/272x272/52795.jpg.webp" alt="recipe" />
      <div className="favorites_recipe-info">
        <p className="favorites_recipe-info-text">Tortitas de Avena</p>
        <p className="favorites_recipe-info-likes" ><i onClick={additionLike} className="favorites_recipe-info-icon fa-solid fa-heart" /> {likes}</p>
      </div>
    </article>
  )
}