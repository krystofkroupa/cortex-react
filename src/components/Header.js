import {useState, useEffect} from 'react'
import Burger from './Burger'
import LogoLink from './LogoLink'
import {Link} from "react-router-dom";

export default function Header() {

    const menuLink = document.querySelector('.nav-menu')
    const beerLink = document.querySelector('.nav-pivo')
    const mainPage = document.querySelector('.mainPage')

    const [navColor, setNavColor] = useState(true)
    const [logoColor, setLogoColor] = useState(true)

    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar')
        const viewportHeight = window.innerHeight
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
        const scrollPercantage = scrollPosition / viewportHeight
        const logo = document.querySelector('.logo')

        if (scrollPercantage > 0.75) {
            if (!navbar.classList.contains('nav-scrolled') && !navbar.classList.contains('navLogoScrolled')) {
                setNavColor(false)
                setLogoColor(false)
                console.log("menim :(")
            }
        } else {
            if (navbar.classList.contains('nav-scrolled') || logo.classList.contains('navLogoScrolled')) {
                setNavColor(true)
                setLogoColor(true)
                console.log("menim :-)")
            }
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

    /*mainPage.addEventListener('click', function () {
        setNavMenu(false)
        setNavBeer(false)
    })*/

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
                                    <li><a className="underline">Pivní menu</a></li>
                                    <li><a className="underline">Naše piva</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="margin">
                            <a className="underline">Kontakt</a>
                        </li>
                        <li className="margin">
                            <a className="underline">Rezervace</a>
                        </li>
                    </ul>
                </div>
                <Burger/>
            </nav>
        </header>
    )
}