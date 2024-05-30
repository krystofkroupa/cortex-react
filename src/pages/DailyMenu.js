import {dailyMenuFoodData} from '../components/dailyMenuFoodData'
import DailyMenuFoodComponent from '../components/DailyMenuFoodComponent'


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
                        {dailyMenuFoodData.map((data, key) => {
                            return (
                                <div key={key}>
                                    <DailyMenuFoodComponent
                                        key={key}
                                        type={data.type}
                                        food={data.food}
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