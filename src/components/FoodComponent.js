export default function FoodComponent({name, foodType, price, type, dataType, priceSmallBeer}) {

    if(type === "food") {
        if (dataType === "food") {
            switch (foodType) {
                case "soup":
                    return (
                        <div className="dailyMenuFood">
                            <div className="foodType">
                                <h2>Polévka</h2>
                            </div>
                            <div className="foodContainer">
                                <div className="foodName">
                                    <p>{name}</p>
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
                                    <p>{name}</p>
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
                                    <p>{name}</p>
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
                                    <p>{name}</p>
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
                                    <p>{name}</p>
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
    } else if (type === "beer") {
        if (dataType === "beer") {
            return(
                <div className="beerMenuContainer">
                    <div className="beerContainer">
                        <div className="beerName">
                            <p>{name}</p>
                        </div>
                        <div className="beerPrice">
                            <p>{price + " Kč"}</p>
                            <p>{priceSmallBeer + " Kč"}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
            )
        }
    }

}