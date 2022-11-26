import { ChangeEvent, useEffect, useRef, useState } from "react"
import { SearchSuggestion } from "./searchSuggestion/SearchSuggestion"
import { Recipe } from "../../../../vite-env"
import axios from "axios"
import { endpointUrl } from "../../../../config"

import "./searchRecipes.scss"

export const SearchRecipes = ({className}: {className: string})=> {
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined)
  const [suggestions, setSuggestions] = useState<string[]>([])

  useEffect(()=> {
    axios.get(endpointUrl+'recipes').then(({data}) => setRecipes(data))
    .catch(err=> console.log(err))
  }, [])

  const searchChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
    
    if(value.trim()) suggestionsRef.current?.classList.add('open')
    else suggestionsRef.current?.classList.remove('open')
    value = value.toLowerCase()
    const filter = recipes?.filter(f=> f.title.toLowerCase().includes(value))
    if(filter && filter?.length > 0) setSuggestions(filter.map(m=> m.title).sort())
  }

  return (
    <>
      <form onSubmit={(event)=> event.preventDefault()} className={className+`-form`}>
        <input onChange={searchChange} className={className+'-input'} type="text" id="search-text" name="text" placeholder="Busca una receta" autoComplete="off"  />
        <button className={className+'-btn'}>
          <i className={className+'-icon fa-solid fa-magnifying-glass'}></i>
        </button>
      </form>

      <div ref={suggestionsRef} className={className+'-suggestions'}>
        <ul className={className+'-suggestions-list'}>
          {recipes?.filter(f=> suggestions.some(s=> s==f.title))?.map(m=> <SearchSuggestion key={m.id} title={m.title} id={m.id} className={className+'-suggestions-element'} />)}
        </ul>
      </div>
    </>
  )
}