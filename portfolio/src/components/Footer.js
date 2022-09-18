import * as React from "react";


const Footer = () => {
    return (
        <div>
            <div className={"footer"}>
                <div className={"footer-text"}>
                    <p>Site crée par Kenolane Granger</p>
                </div>
                <div className={"footer-icons"}>
                    <a rel="noreferrer" target={"_blank"} href={"https://www.linkedin.com/in/k%C3%A9nolane-granger-95b7a6181/"}>
                        <i className="fa-brands icon fa-linkedin fa-2xl"></i>
                    </a>
                    <a rel="noreferrer" target={"_blank"} href={"https://github.com/bangix28"}>
                        <i className="fa-brands icon fa-github fa-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Footer