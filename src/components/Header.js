import {useState, useEffect, useRef} from 'react'
import Burger from './Burger'
import LogoLink from './LogoLink'
import {Link} from "react-router-dom";
import Menu from "./Menu"

export default function Header() {

    const mainPage = document.querySelector('.mainPage')
    const [navColor, setNavColor] = useState(true)
    const [logoColor, setLogoColor] = useState(true)
    const [navBeerLink, setNavBeer] = useState(false)
    const [navMenuLink, setNavMenu] = useState(false)
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
        if (str === "beer") {
            setNavBeer(!navBeerLink)
            setNavMenu(false)
        } else if (str === "menu") {
            setNavMenu(!navMenuLink)
            setNavBeer(false)
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
                    <a>
                        <LogoLink classname={'logoOrange'} imageName={'logoOrange.png'}/>
                        <LogoLink classname={'logoBeige'} imageName={'logoBeige.png'}/>
                    </a>
                </div>
                <Menu isOpen={false}/>
                <Burger/>
            </nav>
        </header>
    )
}