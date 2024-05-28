import {Link} from "react-router-dom"

export default function Menu({isOpen = null}) {

  return (
    <div className="burgerWrapper">
      <div className={`burgerMenu ${isOpen ? "nav-active" : ''}`}>
        <ul className="navLinksH">
          <li>
            <Link to={'/'} className="burgerAmenu burgerAmenu-visible">
              Domů
            </Link>
          </li>
          <li>
            <Link to={'/nase-piva'} className="burgerApivo burgerApivo-visible">
              Pivo
            </Link>
          </li>
        </ul>
      </div>
    </div>

  )
}