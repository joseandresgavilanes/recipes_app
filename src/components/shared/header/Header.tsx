import icon from '../../../assets/recipes-logo.png'
import { useRef } from 'react'
import { SearchRecipes } from "./searchRecipes/SearchRecipes"
import { UserOptions } from './userOptions/UserOptions'
import { useNavigate } from 'react-router-dom'

import "./header.scss"

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

  return (
    <>
      <div ref={headerSearch} className="search_recipes">
        <i onClick={openSearch} className='search_recipes-close fa-solid fa-xmark'></i>
        <SearchRecipes className='search_recipes' />
      </div>
        
      <header className="header">
        <div onClick={redirectHome} className="header-title">
          <img className='header-title-logo' src={icon} alt="logo" />
          <h1 className="header-title-text">Recipes app</h1>
        </div>
        <div className='header_recipes'>
          <SearchRecipes className='header_recipes' />
        </div>
        <i onClick={openSearch} className='header-search-icon search-icon fa-solid fa-magnifying-glass'></i>
        <i onClick={openUserOptions} className='header-user fa-regular fa-circle-user'></i>
        <UserOptions />
      </header>
    </>
  )
}