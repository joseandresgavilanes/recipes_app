import { useRef } from 'react'
import { SearchRecipes } from "./SearchRecipes"

import "./header.sass"

export const Header = ()=> {
  const headerSearch = useRef<HTMLDivElement>(null)
  
  const openSearch = () => {
    if(headerSearch.current) {
      const searchDocument = headerSearch.current
      searchDocument.classList.toggle('open-header-search')
      const input = document.getElementById('search-text')

      if(searchDocument.classList.contains('open-header-search')) input?.focus()
      else input?.blur()
      
    }
  }

  return (
    <>
      <div ref={headerSearch} className="header_search">
        <i onClick={openSearch} className='header_search-close bx bx-x'></i>
        <SearchRecipes />
      </div>

      <header className="header">
        <h1 className="header_title">Recipes app</h1>
        <i onClick={openSearch} className='header_search-icon search-icon bx bx-search-alt'></i>
        <i className='header_user bx bx-user-circle'></i>
        <nav className="user_navbar">
          <ul></ul>
        </nav>
      </header>
    </>
  )
}