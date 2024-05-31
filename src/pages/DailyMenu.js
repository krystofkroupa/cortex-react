import foodData from '../assets/FoodData.json'
import FoodComponent from '../components/FoodComponent'


export default function DailyMenu() {

    return (
        <div className="poledniPage">
            <div className="poledniMenu" id="poledni">
                <div className="dailyMenuFoodContainer">
                    <div className="dailyMenuHeader">
                        <h1>
                            Polední menu
                        </h1>
                    </div>
                    <div className="dailyFood">
                        {foodData.map((data, key) => {
                            return (
                                <div key={key}>
                                    <FoodComponent
                                        key={key}
                                        type="food"
                                        dataType={data.type}
                                        foodType={data.foodType}
                                        name={data.name}
                                        price={data.price}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}