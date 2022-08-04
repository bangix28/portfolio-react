import * as React from "react";
import {Image} from "react-bootstrap";

// importing material UI components

const Cards = ({card}) => {

    return (
            <article className={"card"}>
                <div className={"card-image"}>
                    <a href={"#"}>
                        <Image className={"card-image-responsive"} src={card.image} alt=""/>
                    </a>
                </div>
                <div className={"card-content"}>
                    <div className={"card-title"}>
                        <h3>{card.title.substring(0, 45)}</h3>
                    </div>
                    <div className={"card-text"}>
                        <p>{card.text.substring(0, 185)}</p>
                    </div>
                </div>
            </article>
    );
}
export default Cards