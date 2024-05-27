import {useState, useEffect, useRef} from 'react'
import Burger from './Burger'
import LogoLink from './LogoLink'
import {Link} from "react-router-dom";

export default function Header() {

    const mainPage = document.querySelector('.mainPage')
    const [navColor, setNavColor] = useState(true)
    const [logoColor, setLogoColor] = useState(true)
    const [logoBurger, setLogoBurger] = useState(false)
    const [navBeerLink, setNavBeer] = useState(false)
    const [navMenuLink, setNavMenu] = useState(false)
    const scrollPosition = window.scrollY || document.documentElement.scrollTop
    const viewportHeight = window.innerHeight;
    const scrollPercentage = scrollPosition / viewportHeight

    let colorsChanged = false

    function handleNavColorChange() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop
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
    }

    useEffect(() => {
        window.removeEventListener('scroll', handleNavColorChange)
        window.addEventListener('scroll', handleNavColorChange)

    }, [scrollPercentage, scrollPosition])

    const setNav = (str) => () => {
        if (str == "beer") {
            setNavBeer(!navBeerLink)
            setNavMenu(false)
        } else if (str == "menu") {
            setNavMenu(!navMenuLink)
            setNavBeer(false)
        }
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
                            <a className="underline a-menu" onClick={setNav("menu")}>
                                Menu
                            </a>
                            <div
                                className={`fold-out-menu ${navMenuLink ? 'fold-out-menu-visible' : 'fold-out-menu-hidden'}`}>
                                <ul>
                                    <li>
                                        <a className="underline" onClick={setNav("menu")}>
                                            <Link to={'/poledni'}>
                                                Polední menu
                                            </Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline" onClick={setNav("menu")}>
                                            <Link to={'/jidelni-listek'}>
                                                Jídelní lístek
                                            </Link>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-pivo margin">
                            <a className="underline a-pivo" onClick={setNav("beer")}>
                                Pivo
                            </a>
                            <div
                                className={`fold-out-pivo ${navBeerLink ? 'fold-out-pivo-visible' : 'fold-out-pivo-hidden'}`}>
                                <ul>
                                    <li>
                                        <a className="underline" onClick={setNav("beer")}>
                                            <Link to={'/pivni-menu'}>
                                                Pivní menu
                                            </Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline" onClick={setNav("beer")}>
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