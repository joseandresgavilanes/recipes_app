import { useRef } from 'react'
import { SearchRecipes } from "./searchRecipes/SearchRecipes"

import "./header.scss"
import { UserOptions } from './userOptions/UserOptions'
import { useNavigate } from 'react-router-dom'

export const Header = ()=> {
  const headerSearch = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const openSearch = () => {
    if(headerSearch.current) {
      const searchDocument = headerSearch.current
      searchDocument.classList.toggle('header-open-search')
      const input = document.getElementById('search-text')

      if(searchDocument.classList.contains('header-open-search')) input?.focus()
      else input?.blur()
      
    }
  }

  const openUserOptions = () => {
    const userOptions = document.querySelector('.user_options')
    userOptions?.classList.add('user_options-open')
  }

  const redirectHome = () => navigate('/')

  console.log({height: screen.height, width: screen.width})
  return (
    <>
      <div ref={headerSearch} className="search_recipes">
        <i onClick={openSearch} className='search_recipes-close bx bx-x'></i>
        <SearchRecipes className='search_recipes' />
      </div>
        
      <header className="header">
        <h1 onClick={redirectHome} className="header-title">Recipes app</h1>
        <div className='header_recipes'>
          <SearchRecipes className='header_recipes' />
        </div>
        <i onClick={openSearch} className='header-search-icon search-icon bx bx-search-alt'></i>
        <i onClick={openUserOptions} className='header-user bx bx-user-circle'></i>
        <UserOptions />
      </header>
    </>
  )
}