import Grid from '../components/Grid'
import WavesLight from '../components/MainPageWavesLight'
import ContactsPage from "./ContactsPage";
import {useLocation} from "react-router-dom";

export default function HomePage() {

    return (
        <div className="animate-this mainPage">
            <div className="main" id="main-page">
                <div className="logo-background">
                    <img src={require('../assets/logo-bg.png')} alt="logo-background"/>
                </div>
                <Grid/>
                <div className="fill"></div>
                <WavesLight/>
            </div>
            <ContactsPage/>
        </div>
    );
}