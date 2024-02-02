import "./App.css";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import {Application, Calcul, ToDo, Weather,} from "./pages/Application";
import {Cave,Multiroom, Space, Tower} from "./pages/Game";
import Contact from "./pages/Contact";





function App() {
    return (

        <Router>
            <Sidebar/>
            <Routes>
                <Route path="/about-us"
                    element={<AboutUs/>}/>
                <Route path="/services"
                       element={<Application/>}/>
                <Route path="/services/services1"
                    element={<Calcul/>}/>
                <Route path="/services/services2"
                    element={<ToDo/>}/>
                <Route path="/services/services3"
                    element={<Weather/>}/>
                <Route path="/game/space"
                       element={<Space/>}/>
                <Route path="/game/Multiroom"
                       element={<Multiroom/>}/>
                <Route path="/game/Tower"
                       element={<Tower/>}/>
                <Route path="/game/Cave"
                       element={<Cave/>}/>
                <Route path="/contact"
                    element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;
