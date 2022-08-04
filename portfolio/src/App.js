import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Acceuil from "./pages/Acceuil";

const App = () => {
    return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/acceuil" element={<Acceuil />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App