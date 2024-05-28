import Grid from '../components/Grid'
import WavesLight from '../components/MainPageWavesLight'
import WavesDark from '../components/MainPageWavesDark'
import ContactsPage from "./ContactsPage";

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