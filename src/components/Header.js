export default function Header() {

    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.navbar');
        var viewportHeight = window.innerHeight;
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        var scrollPercantage = scrollPosition / viewportHeight;
        var logo = document.querySelector('.logo');

        if (scrollPercantage > 0.75) {
            if (!navbar.classList.contains('nav-scrolled') && !navbar.classList.contains('navLogoScrolled')) {
                navbar.classList.add('nav-scrolled');
                navbar.classList.remove('nav-unscrolled');
                logo.classList.add('navLogoScrolled');
                console.log("menim:)");
            }
        } else {
            if (navbar.classList.contains('nav-scrolled') || logo.classList.contains('navLogoScrolled')) {
                navbar.classList.remove('nav-scrolled');
                navbar.classList.add('nav-unscrolled');
                logo.classList.remove('navLogoScrolled');
                logo.classList.add('navLogoUnscrolled')
                console.log("menim");
            }
        }
    });


    return (
        <header>
            <nav className="navbar nav-unscrolled animate-this">
                <div className="logo navLogoUnscrolled">
                    <a>
                        <img className="logoOrange" src="public/logoOrange.png" alt="logo"/>
                        <img className="logoBeige" src="public/logoBeige.png" alt="logo"/>
                    </a>
                </div>
                <div className="navLinks">
                    <ul className="navUl">
                        <li className="nav-menu margin liMenu">
                            <a className="underline a-menu">
                                Menu

                                <div className="fold-out-menu fold-out-menu-hidden">
                                    <ul>
                                        <li><a className="underline">Polední menu</a></li>
                                        <li><a className="underline">Jídelní lístek</a></li>
                                    </ul>
                                </div>

                            </a>
                        </li>
                        <li className="nav-pivo margin">
                            <a className="underline a-pivo">
                                Pivo

                                <div className="fold-out-pivo fold-out-pivo-hidden">
                                    <ul>
                                        <li><a className="underline">Pivní menu</a></li>
                                        <li><a className="underline">Naše piva</a></li>
                                    </ul>
                                </div>
                            </a>
                        </li>
                        <li className="margin">
                            <a className="underline">Kontakt</a>
                        </li>
                        <li className="margin">
                            <a className="underline">Rezervace</a>
                        </li>
                    </ul>
                </div>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <div className="burgerMenu">
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
            </nav>
        </header>
    )
}