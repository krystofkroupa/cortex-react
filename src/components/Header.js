import {useState, useEffect} from 'react'
import {useLocation} from "react-router-dom";
import Burger from './Burger'
import LogoLink from './LogoLink'
import Menu from "./Menu"

export default function Header() {

    const location = useLocation()
    const [isColorInverted, setColorInverted] = useState(true)
    const [navColor, setNavColor] = useState(true)
    const [logoColor, setLogoColor] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    let colorsChangedFlag = false

    function handleNavColorChange() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop
        const viewportHeight = window.innerHeight;
        const scrollPercentage = scrollPosition / viewportHeight;

        if (scrollPercentage > 0.75 && !colorsChangedFlag) {
            setColorInverted(false)
            colorsChangedFlag = true
            console.log("Tmava")
        } else if (scrollPercentage <= 0.75 && colorsChangedFlag) {
            setColorInverted(true)
            colorsChangedFlag = false
            console.log("Svetla")
        }

    }

    useEffect(() => {
        window.removeEventListener('scroll', handleNavColorChange)
        window.addEventListener('scroll', () => requestAnimationFrame(handleNavColorChange))
    }, [])

    //${logoColor ? 'navLogoUnscrolled' : 'navLogoScrolled'}

    const changeMenuOpen = (str) => () => {
        switch (str) {
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
            <nav className={`navbar ${isColorInverted ? 'colorInverted' : ''}`}>
                <div onClick={changeMenuOpen("logo")} className={`logo`}>
                    <LogoLink classname={'logoOrange'} imageName={'logoOrange.png'}/>
                    <LogoLink classname={'logoBeige'} imageName={'logoBeige.png'}/>
                </div>
                <Menu changeMenuOpen={changeMenuOpen} isOpen={isOpen}/>
                <Burger changeMenuOpen={changeMenuOpen} isOpen={isOpen}/>
            </nav>
        </header>
    )
}