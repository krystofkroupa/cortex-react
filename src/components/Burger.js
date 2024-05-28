import {useState} from "react";
import {Link} from "react-router-dom";

export default function Burger() {

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
        </div>

    )
}