import logo from './logo.svg';
import './App.sass'
import Home from './pages/Home'
import DailyMenu from './pages/DailyMenu'
import Header from "./components/Header"
import MainMenu from './pages/MainMenu'
import Photos from './pages/Photos'
import {Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/poledni" element={<DailyMenu/>}/>
                <Route path="/jidelni-listek" element={<MainMenu/>}/>
                <Route path="/fotogalerie" element={<Photos/>}/>
            </Routes>
        </div>
    );
}

export default App;
