export default function Burger({isOpen, changeMenuOpen}) {
    return (
        <div className="burgerWrapper isBurgerDisplayed">
            <div className={`burger ${isOpen && 'toggle'}`} onClick={changeMenuOpen("burger")}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>

    )
}