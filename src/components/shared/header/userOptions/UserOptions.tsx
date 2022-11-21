import { useRef } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import "./userOptions.scss"

export const UserOptions = ()=> {
  const userOptions = useRef<HTMLElement>(null)
  const circleTheme = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const principalClass = 'user_options'

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
    <nav ref={userOptions} className={principalClass}>
      <div onClick={switchTheme} className="user_options-darckMode">
        <div className="user_options-darckMode-icons">
          <i className='user_options-darckMode-icons-moon bx bx-moon'></i>
          <i className='user_options-darckMode-icons-sun bx bx-sun' ></i>
        </div>
        <div ref={circleTheme} className="user_options-darckMode-circle"></div>
      </div>

      <i onClick={closeUserOptions} className='user_options-close bx bx-x' ></i>

      <ul className="user_options-list">
        <li onClick={closeUserOptions} className="user_options-list-option">
          <NavLink to={'/profile'} className={linkActive} >
            <div className="user_options-list-option-text">
              <i className="fa-solid fa-gear"></i>
              <p>Profile</p>
            </div>
          </NavLink>
        </li>
        <li onClick={closeUserOptions} className="user_options-list-option">
          <NavLink to={'/my-recipes'} className={linkActive} >
            <div className="user_options-list-option-text">
              <i className="fa-solid fa-book"></i>
              <p>My recipes</p>
            </div>
          </NavLink>
        </li>
        <li onClick={closeUserOptions} className="user_options-list-option">
          <NavLink to={'/favorites'} className={linkActive} >
            <div className="user_options-list-option-text">
              <i className='fa-solid fa-heart'></i>
              <p>Favorites</p>
            </div>
          </NavLink>
        </li>
        <li onClick={closeUserOptions} className="user_options-list-option">
          <NavLink to={'/upload-recipe'} className={linkActive} >
            <div className="user_options-list-option-text">
              <i className='fa-solid fa-square-plus'></i>
              <p>Upload recipe</p>
            </div>
          </NavLink>
        </li>
        <li onClick={closeUserOptions} className="user_options-list-option">
          <NavLink to={'/supermarket-list'} className={linkActive} >
            <div className="user_options-list-option-text">
              <i className='fa-solid fa-cart-shopping'></i>
              <p>Supermarket list</p>
            </div>
          </NavLink>
        </li>
        <li onClick={closeUserOptions} className="user_options-list-option">
          <NavLink to={'/menu-planner'} className={linkActive} >
            <div className="user_options-list-option-text">
              <i className='fa-solid fa-calendar-days'></i>
              <p>Menu planner</p>
            </div>
          </NavLink>
        </li>
      </ul>

      <button onClick={()=> {navigate('/register'), closeUserOptions()}} className="user_options-loginAndRegister">
        Register | Start session
      </button>

      <i className={principalClass+'-icon fa-solid fa-bowl-food '+principalClass+'-bowl-food'}></i>
      <i className={principalClass+'-icon fa-solid fa-carrot '+principalClass+'-carrot'}></i>
      <i className={principalClass+`-icon fa-solid fa-burger `+principalClass+'-burger'}></i>
      <i className={principalClass+'-icon fa-solid fa-mug-hot '+principalClass+'-mug-hot'}></i>
      <i className={principalClass+'-icon fa-solid fa-wine-glass '+principalClass+'-wine-glass'}></i>
      <i className={principalClass+'-icon fa-solid fa-pizza-slice '+principalClass+'-pizza-slice'}></i>
      <i className={principalClass+'-icon fa-solid fa-martini-glass-citrus '+principalClass+'-glass-citrus'}></i>
      <i className={principalClass+'-icon fa-solid fa-hotdog '+principalClass+'-hotdog'}></i>
      <i className={principalClass+'-icon fa-solid fa-drumstick-bite '+principalClass+'-drumstick-bite'}></i>
      <i className={principalClass+'-icon fa-solid fa-cookie-bite '+principalClass+'-cookie-bite'}></i>
    </nav>
  )
}