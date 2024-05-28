import {useState, useEffect, useRef} from 'react'
import Burger from './Burger'
import LogoLink from './LogoLink'
import {Link} from "react-router-dom";

export default function Header() {

    const mainPage = document.querySelector('.mainPage')
    const [navColor, setNavColor] = useState(true)
    const [logoColor, setLogoColor] = useState(true)
    const [navBeerLink, setNavBeer] = useState(false)
    const [navMenuLink, setNavMenu] = useState(false)
    const [burgerClick, setBurger] = useState(false)
    const [burgerBeerClick, setBeer] = useState(false)
    const [burgerMenuClick, setMenu] = useState(false)
    let colorsChanged = false

    function handleNavColorChange() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop
        const viewportHeight = window.innerHeight;
        const scrollPercentage = scrollPosition / viewportHeight;

        if (scrollPercentage > 0.75 && !colorsChanged) {
            setNavColor(false)
            setLogoColor(false)
            colorsChanged = true
            console.log("Tmava")
        } else if (scrollPercentage <= 0.75 && colorsChanged) {
            setNavColor(true)
            setLogoColor(true)
            colorsChanged = false
            console.log("Svetla")
        }
    }

    useEffect(() => {
        window.removeEventListener('scroll', handleNavColorChange)
        window.addEventListener('scroll', handleNavColorChange)
    }, [])

    const setNav = (str) => () => {
        switch (str) {
            case "beer":
                setNavBeer(!navBeerLink)
                setNavMenu(false)
                break
            case "menu":
                setNavMenu(!navMenuLink)
                setNavBeer(false)
                break
            case "burgerMenu":
                setMenu(true)
                setBeer(false)
                break
            case "burgerBeer":
                setBeer(true)
                setMenu(false)
                break
            case "burger":
                setBurger(!burgerClick)
                setBeer(false)
                setMenu(false)
                break
            case "logo":
                if (burgerClick) {
                    setBurger(!burgerClick)
                    setBeer(false)
                    setMenu(false)
                }
                break
            default:
                console.log("Invalid")
        }
    }

    if (mainPage) {
        mainPage.addEventListener('click', function () {
            setNavMenu(false)
            setNavBeer(false)
        })
    }

    return (
        <header>
            <nav className={`navbar animate-this ${navColor ? 'nav-unscrolled' : 'nav-scrolled'}`}>
                <div className={`logo ${logoColor ? 'navLogoUnscrolled' : 'navLogoScrolled'}`}>
                    <LogoLink logoClick={setNav} classname={'logoOrange'} imageName={'logoOrange.png'}/>
                    <LogoLink logoClick={setNav} classname={'logoBeige'} imageName={'logoBeige.png'}/>
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
                                <Link to={'/#contacts-page'}>
                                    Kontakt
                                </Link>
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
                <Burger toggleBurgerMenu={setNav} burgerClick={burgerClick} burgerMenuClick={burgerMenuClick}
                        burgerBeerClick={burgerBeerClick}/>
            </nav>
        </header>
    )
}