import WavesLight from "../components/MainPageWavesLight";
import foodData from "../assets/FoodData.json";
import FoodComponent from "../components/FoodComponent";

export default function BeerMenu() {
    return (
        <div className="beerPage">
            <div className="beerMenuHeader">
                <h1>
                    Pivní menu
                </h1>
            </div>
            <div className="beerMenu">
                {foodData.map((data, key) => {
                    return (
                        <div key={key} className="dataContainer">
                            <FoodComponent
                                key={key}
                                type="beer"
                                dataType={data.type}
                                name={data.name}
                                price={data.price}
                                priceSmallBeer={data.priceSmall}
                            />
                        </div>
                    )
                })}
            </div>
            <div className="fill"></div>
            <WavesLight/>
        </div>
    )
}