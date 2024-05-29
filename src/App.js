import logo from './logo.svg';
import './App.sass'
import HomePage from './pages/HomePage'
import FoodMenu from './pages/FoodMenu'
import Header from "./components/Header"
import Photos from './pages/Photos'
import BeerMenu from './pages/BeerMenu'
import Reservations from './pages/Reservations'
import ScrollToHashElement from "./components/ScrollToHashElement";
import {Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
            <ScrollToHashElement/>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/menu" element={<FoodMenu/>}/>
                <Route path="/fotogalerie" element={<Photos/>}/>
                <Route path="/pivni-menu" element={<BeerMenu/>}/>
                <Route path="/rezervace" element={<Reservations/>}/>
            </Routes>
        </div>
    );
}

export default App;
