import {useState, useEffect, useRef} from 'react'
import Burger from './Burger'
import LogoLink from './LogoLink'
import {Link} from "react-router-dom";

export default function Header() {

    const menuLink = document.querySelector('.nav-menu')
    const beerLink = document.querySelector('.nav-pivo')
    const mainPage = document.querySelector('.mainPage')
    const [navColor, setNavColor] = useState(true)
    const [logoColor, setLogoColor] = useState(true)
    const [logoBurger, setLogoBurger] = useState(false)


    let colorsChanged = false

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;
        const scrollPercentage = scrollPosition / viewportHeight;

        if (scrollPercentage > 0.75 && !colorsChanged) {
            setNavColor(false)
            setLogoColor(false)
            colorsChanged = true
            console.log("test ahojda")
        } else if (scrollPercentage <= 0.75 && colorsChanged) {
            setNavColor(true)
            setLogoColor(true)
            colorsChanged = false
            console.log("netest neahojda")
        }
    });

    const [navBeerLink, setNavBeer] = useState(false)
    const [navMenuLink, setNavMenu] = useState(false)

    const isNavMenuActive = () => {
        setNavMenu(!navMenuLink)
        setNavBeer(false)
    }

    const isBeerMenuActive = () => {
        setNavBeer(!navBeerLink)
        setNavMenu(false)
    }

    if (mainPage) {
        mainPage.addEventListener('click', function () {
            setNavMenu(false)
            setNavBeer(false)
        })
    } else {
        console.log("mainPage not found")
    }


    return (
        <header>
            <nav className={`navbar animate-this ${navColor ? 'nav-unscrolled' : 'nav-scrolled'}`}>
                <div className={`logo ${logoColor ? 'navLogoUnscrolled' : 'navLogoScrolled'}`}>
                    <a>
                        <LogoLink classname={'logoOrange'} imageName={'logoOrange.png'}/>
                        <LogoLink classname={'logoBeige'} imageName={'logoBeige.png'}/>
                    </a>
                </div>
                <div className="navLinks">
                    <ul className="navUl">
                        <li className="nav-menu margin liMenu">
                            <a className="underline a-menu" onClick={isNavMenuActive}>
                                Menu
                            </a>
                            <div
                                className={`fold-out-menu ${navMenuLink ? 'fold-out-menu-visible' : 'fold-out-menu-hidden'}`}>
                                <ul>
                                    <li>
                                        <a className="underline" onClick={isNavMenuActive}>
                                            <Link to={'/poledni'}>
                                                Polední menu
                                            </Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline" onClick={isNavMenuActive}>
                                            <Link to={'/jidelni-listek'}>
                                                Jídelní lístek
                                            </Link>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-pivo margin">
                            <a className="underline a-pivo" onClick={isBeerMenuActive}>
                                Pivo
                            </a>
                            <div
                                className={`fold-out-pivo ${navBeerLink ? 'fold-out-pivo-visible' : 'fold-out-pivo-hidden'}`}>
                                <ul>
                                    <li>
                                        <a className="underline">
                                            <Link to={'/pivni-menu'}>
                                                Pivní menu
                                            </Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline">
                                            <Link to={'/nase-piva'}>
                                                Naše piva
                                            </Link>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="margin">
                            <a className="underline">
                                Kontakt
                            </a>
                        </li>
                        <li className="margin">
                            <a className="underline">
                                <Link to={'/rezervace'}>
                                    Rezervace
                                </Link>
                            </a>
                        </li>
                    </ul>
                </div>
                <Burger  />
            </nav>
        </header>
    )
}