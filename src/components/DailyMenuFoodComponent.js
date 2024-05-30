export default function DailyMenuFoodComponent({food, type, price}) {


    if (!food) return <div/>
    switch (type) {
        case "soup":
            return (
                <div className="dailyMenuFood">
                    <div className="foodType">
                        <h2>Polévka</h2>
                    </div>
                    <div className="foodContainer">
                        <div className="foodName">
                            <p>{food}</p>
                        </div>
                        <div className="foodPrice">
                            <p>{price + " Kč"}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
            )
        case "weeklySpecial":
            return (
                <div className="dailyMenuFood">
                    <div className="foodType">
                        <h2>Týdenní specialita</h2>
                    </div>
                    <div className="foodContainer">
                        <div className="foodName">
                            <p>{food}</p>
                        </div>
                        <div className="foodPrice">
                            <p>{price + " Kč"}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
            )
        case "mainMeal":
            return (
                <div className="dailyMenuFood">
                    <div className="foodType">
                        <h2>Hlavní jídla</h2>
                    </div>
                    <div className="foodContainer">
                        <div className="foodName">
                            <p>{food}</p>
                        </div>
                        <div className="foodPrice">
                            <p>{price + " Kč"}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
            )
        case "desert":
            return (
                <div className="dailyMenuFood">
                    <div className="foodType">
                        <h2>Dezert</h2>
                    </div>
                    <div className="foodContainer">
                        <div className="foodName">
                            <p>{food}</p>
                        </div>
                        <div className="foodPrice">
                            <p>{price + " Kč"}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
            )
        default:
            return (
                <div className="dailyMenuFood">
                    <div className="foodContainer">
                        <div className="foodName">
                            <p>{food}</p>
                        </div>
                        <div className="foodPrice">
                            <p>{price + " Kč"}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
            )
    }
}