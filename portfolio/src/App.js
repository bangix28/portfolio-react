import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Acceuil from "./pages/Acceuil";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
    <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound/>} />
                <Route path="/">
                    <Route path="" element={<Home />}/>
                    <Route path="acceuil" element={<Acceuil />}/>
                    <Route path="article/:article" element={<Article />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App