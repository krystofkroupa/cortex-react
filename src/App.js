import logo from './logo.svg';
import './App.sass'
import HomePage from './pages/HomePage'
import DailyMenu from './pages/DailyMenu'
import Header from "./components/Header"
import MainMenu from './pages/MainMenu'
import Photos from './pages/Photos'
import BeerMenu from './pages/BeerMenu'
import OurBeer from './pages/OurBeer'
import Reservations from './pages/Reservations'
import {Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/poledni" element={<DailyMenu/>}/>
                <Route path="/jidelni-listek" element={<MainMenu/>}/>
                <Route path="/fotogalerie" element={<Photos/>}/>
                <Route path="/pivni-menu" element={<BeerMenu/>}/>
                <Route path="/nase-piva" element={<OurBeer/>}/>
                <Route path="/rezervace" element={<Reservations/>}/>
            </Routes>
        </div>
    );
}

export default App;
