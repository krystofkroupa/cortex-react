import {useState} from "react";

export default function Burger() {

    const [burgerClick, setBurger] = useState(false);
    const navLinks = document.querySelectorAll('.navLinksH li');

    if (!burgerClick) {
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.3}s`;
            }
        });
    }

    const isActive = () => {
        setBurger(!burgerClick)
    }

    return (
        <div>
            <div className={`burger ${burgerClick ? 'toggle' : null}`} onClick={isActive}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className={`burgerMenu ${burgerClick ? 'nav-active' : null}`} >
                <ul className="navLinksH">
                    <li>
                        <a className="burgerAmenu burgerAmenu-visible">
                            Menu

                            <div className="foldmenu-container">
                                <ul className="burgerFoldMenu foldMenu-hidden">
                                    <li><a>Polední</a></li>
                                    <li><a>Jídelní lístek</a></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="burgerApivo burgerApivo-visible">
                            Pivo

                            <div className="foldpivo-container">
                                <ul className="burgerFoldPivo foldPivo-hidden">
                                    <li><a>Pivní menu</a></li>
                                    <li><a>">Naše piva</a></li>
                                </ul>
                            </div>
                        </a>
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