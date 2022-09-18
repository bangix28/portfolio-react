import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Acceuil from "./pages/Acceuil";

const App = () => {
    return (
    <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound/>} />
                <Route path="/">
                    <Route path="" element={<Home />} title="Kénolane Granger"/>
                    <Route path="acceuil" element={<Acceuil />} title="Kénolane Granger"/>
                    <Route path="projets" element={<Projets />}/>
                    <Route path="article/:article" element={<Article />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App