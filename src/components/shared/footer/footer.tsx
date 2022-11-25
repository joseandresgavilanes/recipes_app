import { NavLink } from "react-router-dom"
import "./footer.scss"

export const Footer = () => {
  return (
    <footer>
      <div className="footer_user">
        <ul className="footer_user-options">
          <li className="footer_user-options-item">
            <NavLink to={'/upload-recipe'} className='footer_user-options-item-link'>
              <i className='fa-solid fa-square-plus'></i>
              <p>Upload recipe</p>
            </NavLink>
          </li>
          <li className="footer_user-options-item">
            <NavLink to={'/register'} className='footer_user-options-item-link'>
              <i className="fa-solid fa-key"></i>
              <p>Register</p>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="footer_creators">
        <ul className="footer_creators-options">
          <li className="footer_creators-options-item">
            <a className='footer_creators-options-item-link' href="https://www.linkedin.com/in/jose-andres-gavilanes-2954691b5/" target={'_blank'}>
              <i className="fa-brands fa-linkedin"></i>
              <p>José andrés gavilanes</p>
            </a>
          </li>
          <li className="footer_creators-options-item">
            <a className='footer_creators-options-item-link' href="https://www.linkedin.com/in/david-garcia-a1b2c3/" target={'_blank'}>
              <i className="fa-brands fa-linkedin" ></i>
              <p>David Garcia</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}