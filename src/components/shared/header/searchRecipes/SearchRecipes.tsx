import "./searchRecipes.scss"

export const SearchRecipes = ({className}: {className: string})=> {



  return (
    <form onSubmit={(event)=> event.preventDefault()} className={className+`-form`}>
      <input className={className+'-input'} type="text" id="search-text" name="text" placeholder="Busca una receta" autoComplete="off"  />
      <button className={className+'-btn'}>
        <i className={className+'-icon fa-solid fa-magnifying-glass'}></i>
      </button>
    </form>
  )
}