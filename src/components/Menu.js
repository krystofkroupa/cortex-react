import {Link} from "react-router-dom"

export default function Menu({isOpen, changeMenuOpen}) {

    return (
        <div className="burgerWrapper">
            <div className={`burgerMenu ${isOpen ? "nav-active" : ''}`}>
                <ul className="navLinksH">
                    <li>
                        {/*TODO: Pouzivej nazvy vzdy bud camelCase nebo snake-case, pokud to aplikacni logika nevyzaduje, nekombinuj to. Pr: burgerAmenu burgerAmenu-visible > burger-a-menu burger-a-menu-visible*/}
                        <Link to={'/menu'} onClick={changeMenuOpen("link")} className="underline">
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link to={'/pivni-menu'} onClick={changeMenuOpen("link")} className="underline burgerApivo burgerApivo-visible">
                            Pivo
                        </Link>
                    </li>
                    <li>
                        <Link to={'/#contacts-page'}>
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}