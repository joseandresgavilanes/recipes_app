import { MouseEvent } from "react"
import { useNavigate } from "react-router-dom"
import "./searchSuggestion.scss"

export const SearchSuggestion = ({title, id, className}: {title: string, id: string, className: string})=> {
  const navigate = useNavigate()
  
  const clickRecipe = ({currentTarget}: MouseEvent<HTMLLIElement>) => {
    navigate('/recipes/'+currentTarget.dataset.id)
    document.querySelector('.search_recipes')?.classList.remove('header-open-search')
    document.querySelector('.search_recipes-suggestions')?.classList.remove('open')
    document.querySelector('.header_recipes-suggestions')?.classList.remove('open')
    const input1 = document.querySelector<HTMLInputElement>('.search_recipes-input')
    const input2 = document.querySelector<HTMLInputElement>('.header_recipes-input')
    if(input1) input1.value = ''
    if(input2) input2.value = ''
  }
  
  return (
    <li onClick={clickRecipe} className={className} data-id={id}>
      <p className={className+'-title'}>{title}</p>
    </li>
  )
}