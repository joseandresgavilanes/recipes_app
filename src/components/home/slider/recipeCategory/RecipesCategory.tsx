import { Category } from "../../../../vite-env"

import "./recipesCategory.scss"

export const RecipesCategory = ({category}: {category: Category})=> {
  const principalClass = 'sliders_container-secondary-slider-categories-category'
  
  return (
    <li className={principalClass}>
      <img className={principalClass+'-img'} src={category.urlImg} alt={category.name} />
      <p className={principalClass+'-name'}>
        {category.name}
      </p>
    </li>
  )
}