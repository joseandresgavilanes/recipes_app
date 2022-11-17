import "./searchRecipes.scss"

export const SearchRecipes = ()=> {
  return (
    <form className="header_search-form">
      <input className="header_search-input" type="text" id="search-text" name="text" placeholder="Busca una receta" autoComplete="off"  />
      <button className="header_search-btn">
        <i className='header_search-icon bx bx-search-alt'></i>
      </button>
    </form>
  )
}