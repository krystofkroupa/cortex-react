import {useState} from "react";
import {Link} from "react-router-dom";

export default function Burger({}) {

    const [burgerClick, setBurger] = useState(false)
    const [burgerBeerClick, setBeer] = useState(false)
    const [burgerMenuClick, setMenu] = useState(false)

    const isBeerActive = () => {
        setBeer(true)
        setMenu(false)
    }

    const isMenuActive = () => {
        setMenu(true)
        setBeer(false)
    }

    const isBurgerActive = () => {
        setBurger(!burgerClick)
        setBeer(false)
        setMenu(false)
    }

    return (
        <div className="burgerWrapper">
            <div className={`burger ${burgerClick && 'toggle'}`} onClick={isBurgerActive}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className={`burgerMenu ${burgerClick ? 'nav-active' : null}`}>
                <ul className="navLinksH">
                    <li>
                        <a className="burgerAmenu burgerAmenu-visible" onClick={isMenuActive}>
                            Menu
                        </a>
                        <div className="foldmenu-container">
                            <ul className={`burgerFoldMenu ${burgerMenuClick ? 'foldMenu-visible' : 'foldMenu-hidden'}`}>
                                <li>
                                    <Link to={'/poledni'} onClick={isBurgerActive}>
                                        Polední
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/jidelni-listek' onClick={isBurgerActive}>
                                        Jídelní lístek
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a className="burgerApivo burgerApivo-visible" onClick={isBeerActive}>
                            Pivo
                        </a>
                        <div className="foldpivo-container">
                            <ul className={`burgerFoldPivo foldPivo-hidden ${burgerBeerClick ? 'foldPivo-visible' : 'foldPivo-hidden'}`}>
                                <li><a>Pivní menu</a></li>
                                <li><a>Naše piva</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a className="">
                            Kontakt
                            <div className="foldpivo-container">
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="">
                            Rezervace
                            <div className="foldpivo-container">
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}