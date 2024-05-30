import WavesLight from "../components/MainPageWavesLight";
import ContactsPage from "./ContactsPage";
import DailyMenu from "./DailyMenu";

export default function FoodMenu() {
    return (
        <div className='poledniPage'>
            <DailyMenu/>
            <WavesLight/>
        </div>
    )
}