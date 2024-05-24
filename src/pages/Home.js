import Grid from '../components/Grid'
import WavesLight from '../components/MainPageWavesLight'
import WavesDark from '../components/MainPageWavesDark'

export default function Home() {
    return (
        <div className="animate-this mainPage">
            <div className="main" id="main1">
                <div className="logo-background">
                    <img src={require('../assets/logo-bg.png')} alt="logo-background"/>
                </div>
                <Grid/>
                <div className="fill"></div>
                <WavesLight/>
            </div>
            <div className="main2" id="test2">
                <div className="fill2"></div>
                <WavesDark/>
            </div>
        </div>
    );
}