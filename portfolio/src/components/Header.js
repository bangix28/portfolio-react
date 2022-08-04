import * as React from "react";

// importing material UI components

const Header = () => {
    return (
        <div className="header">
            <h1 className="title-header">Kenolane Granger</h1>
            <div className={"navbar"}>
                <button className={"header-button"}>Acceuil</button>
                <button className={"header-button"}>A propos</button>
                <button className={"header-button"} onClick={() => window.open("mailto:hello@chetanverma.com")}>
                    Contact
                </button>
            </div>
            <hr className={"header-divider"} />
        </div>
    );
}
export default Header