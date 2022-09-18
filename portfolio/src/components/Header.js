import * as React from "react";


const Header = () => {
    return (
        <div>
        <div className="header">
            <h1 className="title-header">Kenolane Granger</h1>
            <nav className={"navbar"}>
                <ul className="menu">
                    <li className="menu-item">
                        <a href="/acceuil">Acceuil</a>
                    </li>
                    <li className="menu-item">
                        <a href="/projets">Projets</a>
                    </li>
                    <li className="menu-item">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>

            </nav>
        </div>
        </div>

);
}
export default Header