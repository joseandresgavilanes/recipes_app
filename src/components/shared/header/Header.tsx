import { useRef } from 'react'
import { SearchRecipes } from "./searchRecipes/SearchRecipes"

import "./header.scss"
import { UserOptions } from './userOptions/UserOptions'

export const Header = ()=> {
  const headerSearch = useRef<HTMLDivElement>(null)
  
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

  return (
    <>
      <div ref={headerSearch} className="header_search">
        <i onClick={openSearch} className='header_search-close bx bx-x'></i>
        <SearchRecipes />
      </div>

      <header className="header">
        <h1 className="header-title">Recipes app</h1>
        <i onClick={openSearch} className='header-search-icon search-icon bx bx-search-alt'></i>
        <i onClick={openUserOptions} className='header-user bx bx-user-circle'></i>
        <UserOptions />
      </header>
    </>
  )
}