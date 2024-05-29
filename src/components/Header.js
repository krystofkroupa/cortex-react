import {useState, useEffect} from 'react'
import {useLocation} from "react-router-dom";
import Burger from './Burger'
import LogoLink from './LogoLink'
import Menu from "./Menu"

export default function Header() {

    const location = useLocation()
    const [navColor, setNavColor] = useState(true)
    const [logoColor, setLogoColor] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
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
        if (location.pathname === '/') {
            window.addEventListener('scroll', handleNavColorChange)
        }
    }, [])

    const changeMenuOpen = (str) => () => {
        switch (str){
            case "burger":
                setIsOpen(!isOpen)
                break
            case "link":
                setIsOpen(false)
                break
            case "logo":
                if (isOpen) {
                    setIsOpen(false)
                }
            default:
                console.log("invalid")
        }
    }

    return (
        <header>
            <nav className={`navbar animate-this ${navColor ? 'nav-unscrolled' : 'nav-scrolled'}`}>
                <div onClick={changeMenuOpen("logo")} className={`logo ${logoColor ? 'navLogoUnscrolled' : 'navLogoScrolled'}`}>
                        <LogoLink classname={'logoOrange'} imageName={'logoOrange.png'}/>
                        <LogoLink classname={'logoBeige'} imageName={'logoBeige.png'}/>
                </div>
                <Menu changeMenuOpen={changeMenuOpen} isOpen={isOpen}/>
                <Burger changeMenuOpen={changeMenuOpen} isOpen={isOpen}/>
            </nav>
        </header>
    )
}