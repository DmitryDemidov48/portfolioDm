import "./App.css";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import {Application, Calcul, LinkShort, SecretRecording, Table, ToDo, Weather,} from "./pages/Application";
import {Cave, Game, Multiroom, Space, Tower} from "./pages/Game";
import Contact from "./pages/Contact";






function App() {
    return (

        <Router>
            <Sidebar/>
            <Routes>

                <Route path="/portfoliodm"
                    element={<AboutMe/>}/>
                <Route path="/contact"
                       element={<Contact/>}/>
                <Route path="/services"
                       element={<Application/>}/>
                <Route path="/services1"
                    element={<Calcul/>}/>
                <Route path="/services2"
                    element={<ToDo/>}/>
                <Route path="/services6"
                       element={<Table/>}/>
                <Route path="/services3"
                    element={<Weather/>}/>
                <Route path="/services4"
                       element={<LinkShort/>}/>
                <Route path="/services5"
                       element={<SecretRecording/>}/>
                <Route path="/contact"
                    element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;
