import logo from './logo.svg';
import './styles/grid.css'
import './styles/animations.css'
import './styles/page2.css'
import './styles/nav.css'
import './styles/burger.css'
import './App.css';
import Home from './components/Home'
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
