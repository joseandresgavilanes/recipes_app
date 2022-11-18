import { useRef } from "react"
import { NavLink } from "react-router-dom"

import "./userOptions.scss"

export const UserOptions = ()=> {
  const userOptions = useRef<HTMLElement>(null)
  const circleTheme = useRef<HTMLDivElement>(null)

  const switchTheme = () => {
    circleTheme.current?.classList.toggle('user_options-darckMode-circleActive')
  }

  const closeUserOptions = () => {
    userOptions.current?.classList.remove('user_options-open')
  }

  const linkActive = ({isActive}: {isActive: boolean}) => {
    return (isActive ? 'user_options-list-option-linkActive' : '')+' user_options-list-option-link'
  }

  return (
    <nav ref={userOptions} className="user_options">
      <div onClick={switchTheme} className="user_options-darckMode">
        <div className="user_options-darckMode-icons">
          <i className='user_options-darckMode-icons-moon bx bx-moon'></i>
          <i className='user_options-darckMode-icons-sun bx bx-sun' ></i>
        </div>
        <div ref={circleTheme} className="user_options-darckMode-circle"></div>
      </div>

      <i onClick={closeUserOptions} className='user_options-close bx bx-x' ></i>

      <ul className="user_options-list">
        <li className="user_options-list-option">
          <NavLink to={'/profile'} className={linkActive} >
            <div className="user_options-list-option-text">
              <i className='bx bx-cog'></i>
              <p>Perfil</p>
            </div>
          </NavLink>
        </li>
        <li className="user_options-list-option">
          <NavLink to={'/my-recipes'} className={linkActive} >
            <div className="user_options-list-option-text">
              <i className='bx bx-notepad'></i>
              <p>Mis recetas</p>
            </div>
          </NavLink>
        </li>
        <li className="user_options-list-option">
          <NavLink to={'/favorites'} className={linkActive} >
            <div className="user_options-list-option-text">
              <i className='bx bx-heart'></i>
              <p>Favoritos</p>
            </div>
          </NavLink>
        </li>
        <li className="user_options-list-option">
          <NavLink to={'/supermarket-list'} className={linkActive} >
            <div className="user_options-list-option-text">
              <i className='bx bx-cart' ></i>
              <p>Lista del súper</p>
            </div>
          </NavLink>
        </li>
        <li className="user_options-list-option">
          <NavLink to={'/menu-planner'} className={linkActive} >
            <div className="user_options-list-option-text">
              <i className='bx bx-calendar' ></i>
              <p>Planeador de menú</p>
            </div>
          </NavLink>
        </li>
      </ul>

      <button className="user_options-loginAndRegister">
        Registrate | Inicia seción
      </button>
    </nav>
  )
}