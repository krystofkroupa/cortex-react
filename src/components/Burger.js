import {useState} from "react";
import {Link} from "react-router-dom";

export default function Burger({toggleBurgerMenu, burgerClick, burgerMenuClick, burgerBeerClick}) {

    /*const [burgerClick, setBurger] = useState(false)
    const [burgerBeerClick, setBeer] = useState(false)
    const [burgerMenuClick, setMenu] = useState(false)*/

    /*const toggleBurgerMenu = (burgerType) => () => {
        if (burgerType === "burgerMenu") {
            setMenu(true)
            setBeer(false)
        } else if (burgerType === "burgerBeer") {
            setBeer(true)
            setMenu(false)
        } else if (burgerType === "burger") {
            setBurger(!burgerClick)
            setBeer(false)
            setMenu(false)
        }
    }
    ${burgerClick && 'toggle'}

    ${burgerClick ? 'nav-active' : null}

    ${burgerMenuClick ? 'foldMenu-visible' : 'foldMenu-hidden'}

     ${burgerBeerClick ? 'foldPivo-visible' : 'foldPivo-hidden'}
    */

    return (
        <div className="burgerWrapper">
            <div className={`burger ${burgerClick && 'toggle'}`} onClick={toggleBurgerMenu("burger")}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className={`burgerMenu ${burgerClick ? 'nav-active' : null}`}>
                <ul className="navLinksH">
                    <li>
                        <a className="burgerAmenu burgerAmenu-visible" onClick={toggleBurgerMenu("burgerMenu")}>
                            Menu
                        </a>
                        <div className="foldmenu-container">
                            <ul className={`burgerFoldMenu ${burgerMenuClick ? 'foldMenu-visible' : 'foldMenu-hidden'}`}>
                                <li>
                                    <Link to={'/poledni'} onClick={toggleBurgerMenu("burger")}>
                                        Polední
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/jidelni-listek' onClick={toggleBurgerMenu("burger")}>
                                        Jídelní lístek
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a className="burgerApivo burgerApivo-visible" onClick={toggleBurgerMenu("burgerBeer")}>
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
                        </a>
                    </li>
                    <li>
                        <a className="">
                            Rezervace
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}